const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const courseRoot = path.resolve(__dirname, '..');
const outputRoot = path.join(courseRoot, 'library', 'modules');
global.window = {};
require(path.join(courseRoot, 'data', 'ccna2-course.js'));

const course = global.window.CCNA2_COURSE;
const sectionMap = {
  1:[0,2,1,3], 2:[0,0,0,1], 3:[1,4,2,1], 4:[1,2,2,3],
  5:[1,1,2,1], 6:[1,0,1,2], 7:[0,2,0,1], 8:[2,2,2,1],
  9:[1,1,0,1], 10:[4,4,3,4], 11:[3,3,4,2], 12:[0,0,6,3],
  13:[3,1,2,3], 14:[0,1,0,3], 15:[4,0,3,2], 16:[1,1,0,1]
};

const scenarios = {
  1:[
    ['1.1','S1 heeft een correct management-IP, maar interface VLAN 99 blijft down/down. VLAN 99 bestaat en alle poorten in die VLAN zijn uitgeschakeld. Wat is de oorzaak?',['Er is geen actieve Layer-2-poort in VLAN 99.','De RSA-sleutel is te lang.','De switch mist ip routing.','De consolelijn heeft geen wachtwoord.'],0,'Een SVI wordt pas operationeel wanneer de VLAN actief is via minstens één up/forwarding poort.'],
    ['1.2','Een Ethernetlink is up, maar toont veel late collisions en zeer lage throughput. Eén zijde staat full duplex en de andere half duplex. Wat veroorzaakt het probleem?',['Een duplex-mismatch.','Een ontbrekende default route.','Een native-VLAN mismatch.','Een verlopen DHCP-lease.'],0,'Late collisions en slechte prestaties zijn klassieke signalen van een duplexconflict.']
  ],
  2:[
    ['2.1','Na het leegmaken van de MAC-tabel wordt het eerste unicastframe naar meerdere poorten in dezelfde VLAN gestuurd. Waarom?',['De bestemming is nog unknown unicast.','De switch routeert het frame.','STP heeft alle poorten root gemaakt.','De FCS is correct.'],0,'Zonder geleerde bestemmingsentry floodt de switch unknown unicast binnen de VLAN.'],
    ['2.2','Broadcasts van VLAN 10 bereiken alle VLAN-10-poorten op twee switches, maar nooit VLAN 20. Welke netwerkgrens verklaart dit?',['Elke VLAN is een apart broadcast domain.','Elke trunk is een router.','Elke switch heeft één collision domain.','Auto-MDIX filtert broadcasts.'],0,'VLAN-segmentatie begrenst Layer-2-broadcasts.']
  ],
  3:[
    ['3.4','Hosts in VLAN 20 werken op S1 en S2 lokaal, maar niet over de trunk. show interfaces trunk vermeldt VLAN 20 niet in de allowed-lijst. Wat is de oorzaak?',['VLAN 20 is niet toegestaan op de trunk.','DORA is mislukt.','HSRP preempt ontbreekt.','De switch gebruikt store-and-forward.'],0,'Een VLAN moet op de trunk allowed én lokaal actief zijn.'],
    ['3.2','Twee trunkuiteinden gebruiken verschillende native VLANs en de switches geven waarschuwingen. Wat is fout?',['De native-VLAN configuratie komt niet overeen.','Beide poorten staan full duplex.','De management-SVI gebruikt SSH.','Er zijn te weinig MAC-entries.'],0,'De native VLAN hoort aan beide kanten van dezelfde 802.1Q-link identiek te zijn.']
  ],
  4:[
    ['4.2','Bij router-on-a-stick zijn alle subinterfaces correct, maar ze blijven down omdat G0/0/0 administratively down is. Wat blokkeert routing?',['Het fysieke parent-interface heeft shutdown.','De router mist een DNS-server.','De accesspoorten gebruiken PortFast.','De switch heeft een MAC-tabel.'],0,'Alle subinterfaces zijn afhankelijk van een actief fysiek parent-interface.'],
    ['4.3','Twee SVIs zijn up/up op een multilayer switch en hosts bereiken hun eigen gateway, maar niet de andere VLAN. Welke globale instelling ontbreekt waarschijnlijk?',['ip routing','ip default-gateway','switchport nonegotiate','service password-encryption'],0,'Een multilayer switch routeert pas tussen SVIs wanneer IPv4-routing actief is.']
  ],
  5:[
    ['5.2','In een switchdriehoek stuurt één redundante link geen gebruikersframes maar ontvangt wel BPDUs. Welke STP-rol verklaart dit?',['Alternate/discarding.','Root/forwarding op de root bridge.','PortFast edge forwarding.','Disabled door shutdown.'],0,'Een alternate poort bewaart een reservepad en verwerkt BPDUs zonder normale data te forwarden.'],
    ['5.3','Een gebruiker sluit een kleine switch aan op een PortFast-poort en die poort gaat direct err-disabled. Welke beveiliging reageerde?',['BPDU Guard.','DHCP relay.','HSRP tracking.','DAI trust.'],0,'BPDU Guard blokkeert een edgepoort wanneer daar onverwacht een BPDU verschijnt.']
  ],
  6:[
    ['6.2','Twee links staan aan beide zijden in LACP passive. De Port-Channel komt niet up. Waarom?',['Geen zijde initieert LACP.','De channel-groupnummers verschillen lokaal.','STP ziet één logische poort.','Beide links zijn full duplex.'],0,'Minstens één zijde moet LACP active gebruiken.'],
    ['6.3','Eén EtherChannel-member staat suspended. De allowed-VLAN lijst verschilt van de andere member. Wat is de oorzaak?',['Incompatibele Layer-2-parameters.','Een te hoge HSRP-priority.','Een ontbrekende DHCP-pool.','Een DNS-timeout.'],0,'Members moeten dezelfde trunk/access-eigenschappen hebben.']
  ],
  7:[
    ['7.1','Clients in een remote subnet sturen DHCPDISCOVER, maar de server in een ander subnet ziet niets. De router routeert gewone unicast wel. Wat ontbreekt?',['ip helper-address op het client-facing interface.','Een static host route op de client.','BPDU Guard op de uplink.','Een native voice VLAN.'],0,'Routers forwarden de clientbroadcast niet zonder DHCP relay.'],
    ['7.2','Een client krijgt soms het IP-adres van de default gateway uit de IOS DHCP-pool. Wat is verkeerd geconfigureerd?',['Het gatewayadres is niet uitgesloten.','De lease is te lang.','De switch gebruikt Rapid PVST+.','De router heeft SSHv2.'],0,'Statische infrastructuuradressen horen in ip dhcp excluded-address.']
  ],
  8:[
    ['8.3','Een stateful DHCPv6-client krijgt een GUA en DNS, maar geen default route omdat RA’s onderdrukt zijn. Wat is de oorzaak?',['DHCPv6 levert geen default gateway; RA ontbreekt.','De client gebruikt UDP 546.','De prefix is /64.','DAD controleert het adres.'],0,'Ook bij stateful DHCPv6 komt de default router uit een Router Advertisement.'],
    ['8.4','Een client vormt via SLAAC een adres maar ontvangt geen DNS-optie uit DHCPv6. De RA heeft M=0 en O=0. Welke flag ontbreekt?',['De O-flag moet 1 zijn.','De M-flag moet altijd 1 zijn.','De A-flag moet 0 zijn.','De HSRP-flag ontbreekt.'],0,'Stateless DHCPv6 gebruikt O=1 om aanvullende informatie aan te vragen.']
  ],
  9:[
    ['9.2','R1 met priority 110 herstart. R2 blijft active nadat R1 terug is, hoewel R1 de hogere priority heeft. Wat ontbreekt op R1?',['standby preempt','ip helper-address','spanning-tree portfast','switchport nonegotiate'],0,'Preempt laat de preferred router de active-rol terugnemen.'],
    ['9.2','R1 blijft HSRP-active terwijl zijn WAN-uplink defect is; de LAN-interface is nog up. Welke verbetering ontbreekt?',['Object tracking met priority decrement.','Een langere DHCP-lease.','DTP desirable.','Een static MAC-entry.'],0,'Tracking koppelt de gatewayrol aan de gezondheid van het relevante upstream pad.']
  ],
  10:[
    ['10.5','Clients krijgen snel een lease met een onbekende default gateway van een laptop op een accesspoort. Welke aanval is waarschijnlijk?',['Een rogue DHCP-server.','Een STP root election.','Een LACP mismatch.','Een DNS zone transfer.'],0,'Een ongeautoriseerde DHCP-server kan kwaadaardige gateway- en DNS-opties uitdelen.'],
    ['10.4','De MAC-tabel raakt gevuld met duizenden wisselende bronadressen en de switch floodt steeds meer unicastframes. Welke aanval past hierbij?',['MAC flooding.','Double tagging.','HSRP spoofing.','SLAAC renumbering.'],0,'CAM-table exhaustion maakt legitieme bestemmingen unknown unicast.']
  ],
  11:[
    ['11.4','Na het activeren van DAI verliest een legitieme host met statisch IP zijn verbinding. Hij staat niet in de DHCP-snoopingdatabase. Wat ontbreekt?',['Een passende ARP ACL of statische binding.','LACP active.','Een extra native VLAN.','HSRP preempt.'],0,'Statische hosts hebben een expliciete vertrouwde IP–MAC-binding nodig.'],
    ['11.1','Een IP-phone met aangesloten pc veroorzaakt port-security violations wanneer maximum 1 is ingesteld. Wat is de oorzaak?',['De poort ziet twee legitieme MAC-adressen.','De trunk heeft te veel VLANs.','De DHCP-server gebruikt option 3.','De router verlaagt TTL.'],0,'Een telefoon-plus-pc edgepoort vereist doorgaans ruimte voor minstens twee veilige MAC-adressen.']
  ],
  12:[
    ['12.5','Meerdere naburige 2,4-GHz AP’s gebruiken overlappende kanalen en clients ervaren veel retries. Wat is waarschijnlijk?',['Adjacent-channel interference.','Een ontbrekende HSRP VIP.','Een floating static route.','Een VTY-timeout.'],0,'Overlappende kanalen verstoren elkaar in plaats van ordelijk airtime te delen.'],
    ['12.7','Een gast-WLAN gebruikt een captive portal maar geen WPA-beveiliging. Welke aanname is fout?',['Een portal versleutelt de 802.11-radioframes niet.','Een SSID kan leesbaar zijn.','Een client gebruikt DHCP.','Een AP heeft een BSSID.'],0,'Webauthenticatie is geen vervanging voor linklaagversleuteling.']
  ],
  13:[
    ['13.4','Een client ziet het SSID en associeert, maar krijgt 169.254.20.8. Welke fase is waarschijnlijk defect?',['DHCP of de WLAN-naar-VLAN-koppeling.','Beacon discovery.','De eerste 802.11 probe.','De weergave van het SSID.'],0,'Een APIPA-adres wijst op een mislukte IPv4-lease na associatie.'],
    ['13.3','Alle 802.1X-logins falen direct nadat het RADIUS shared secret op de server is gewijzigd. Wat is de oorzaak?',['Het shared secret komt niet meer overeen met de WLC.','Het 2,4-GHz kanaal is te breed.','De client heeft een geldige DHCP-lease.','CAPWAP gebruikt IP.'],0,'WLC en RADIUS-server moeten hetzelfde AAA shared secret gebruiken.']
  ],
  14:[
    ['14.1','Voor 10.1.2.130 bestaan routes /0, 10.0.0.0/8 en 10.1.2.128/25. De /8 heeft lagere AD. Welke route gebruikt de router?',['De /25 door longest prefix match.','De /8 door de lagere AD.','De /0 als gateway of last resort.','Alle drie willekeurig.'],0,'Prefixspecificiteit wordt vóór AD tussen verschillende prefixlengtes toegepast.'],
    ['14.2','Een capture toont per routerhop andere Ethernetadressen maar dezelfde IP-bron en -bestemming. Waarom?',['Elke router bouwt een nieuw Layer-2-frame.','Elke router voert DHCP uit.','STP herschrijft IP-adressen.','DNS bewaart de MAC-adressen.'],0,'De Layer-3-payload blijft end-to-end terwijl de linkencapsulatie per hop verandert.']
  ],
  15:[
    ['15.4','Een backuproute met AD 200 verschijnt pas nadat de dynamische primaire route verdwijnt. Welk type route is dit?',['Een floating static route.','Een connected local route.','Een summary-only VLAN.','Een DHCP hostbinding.'],0,'Een bewust hogere AD laat de static route als backup functioneren.'],
    ['15.1','Een IPv6 static route gebruikt alleen next hop fe80::2 en IOS meldt dat de route ambigu is. Wat ontbreekt?',['De exitinterface.','Een DNS-server.','De native VLAN.','Een HSRP group number.'],0,'Een link-local next hop is alleen per link uniek en vereist interfacecontext.']
  ],
  16:[
    ['16.2','ip route staat in running-config, maar de route ontbreekt in show ip route. De next hop is niet bereikbaar. Wat verklaart dit?',['De static route kan niet recursief worden opgelost.','De switch gebruikt cut-through.','De host heeft een correcte gateway.','De route heeft een /32 local entry.'],0,'Configuratie-intentie wordt pas geïnstalleerd wanneer next hop/exitpad bruikbaar is.'],
    ['16.2','Een router kan het doel pingen vanaf zijn WAN-interface, maar een LAN-host niet. Welke ontbrekende controle is het belangrijkst?',['Test met de LAN-bron en controleer het retourpad.','Verwijder alle routes.','Maak elke poort trusted.','Schakel DTP in.'],0,'Een routerping kan een ander bronadres en daardoor een ander retourpad gebruiken.']
  ]
};

const stopWords = new Set('de het een en van voor met naar welke wat waarom hoe wordt zijn dit dat als bij uit op in om door aan kan tussen over'.split(' '));
function tagsFor(module, section, question) {
  const words = `${module.title} ${section.title} ${question.q}`.toLowerCase().match(/[a-z0-9][a-z0-9+./-]{2,}/g) || [];
  return [...new Set(words.filter((word) => !stopWords.has(word)))].slice(0, 10);
}

fs.mkdirSync(outputRoot, { recursive: true });
const libraryModules = [...course.modules].sort((a, b) => a.id - b.id).map((module) => {
  const knowledge = module.questions.map((question, index) => {
    const section = module.sections[sectionMap[module.id][index]] || module.sections[0];
    const id = `ccna2-m${String(module.id).padStart(2, '0')}-q${String(index + 1).padStart(2, '0')}`;
    return {
      id,
      courseId: course.id,
      moduleId: module.id,
      moduleTitle: module.title,
      sectionId: section.id,
      sectionTitle: section.title,
      type: 'knowledge',
      prompt: question.q,
      choices: question.o,
      correctIndex: question.a,
      answer: question.o[question.a],
      explanation: question.e,
      tags: tagsFor(module, section, question),
      provenance: 'original-ccna2-study-question'
    };
  });
  const diagnosis = scenarios[module.id].map(([sectionId, prompt, choices, correctIndex, explanation], index) => {
    const section = module.sections.find((item) => item.id === sectionId) || module.sections[0];
    return { id:`ccna2-m${String(module.id).padStart(2, '0')}-s${String(index + 1).padStart(2, '0')}`, courseId:course.id, moduleId:module.id, moduleTitle:module.title, sectionId:section.id, sectionTitle:section.title, type:'diagnosis', prompt, choices, correctIndex, answer:choices[correctIndex], explanation, tags:tagsFor(module, section, {q:prompt}), provenance:'original-ccna2-diagnosis-scenario' };
  });
  const flashcards = module.sections.map((section, index) => ({
    id:`ccna2-m${String(module.id).padStart(2, '0')}-f${String(index + 1).padStart(2, '0')}`,
    courseId:course.id, moduleId:module.id, moduleTitle:module.title, sectionId:section.id, sectionTitle:section.title, type:'flashcard',
    front:`${section.id} · ${section.title}`,
    back:section.points.join(' '),
    commands:section.commands || '', verify:section.verify || [], tags:tagsFor(module, section, {q:section.title}), provenance:'original-ccna2-flashcard'
  }));
  const cards = [...knowledge, ...diagnosis, ...flashcards];
  const payload = {
    schemaVersion: 1,
    courseId: course.id,
    module: { id: module.id, title: module.title, summary: module.summary },
    counts: { knowledge: knowledge.length, diagnosis: diagnosis.length, flashcards: flashcards.length, total: cards.length },
    cards
  };
  const filename = `module-${String(module.id).padStart(2, '0')}.json`;
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  fs.writeFileSync(path.join(outputRoot, filename), text, 'utf8');
  return { ...payload.module, filename: `modules/${filename}`, counts: payload.counts, cards };
});

const runtime = {
  schemaVersion: 1,
  courseId: course.id,
  title: 'CCNA2 Vraag & Antwoord Library',
  masteryRule: 'Alleen knowledge- en diagnosis-antwoorden tellen als bewijs. Een vraag telt volledig na minstens twee correcte antwoorden; modulekleur combineert dekking, herhaling en nauwkeurigheid.',
  modules: libraryModules
};
fs.writeFileSync(path.join(courseRoot, 'library', 'library-index.js'), `window.CCNA2_QA_LIBRARY = ${JSON.stringify(runtime, null, 2)};\n`, 'utf8');

const files = libraryModules.map((module) => {
  const absolute = path.join(courseRoot, 'library', module.filename);
  const content = fs.readFileSync(absolute);
  return { moduleId: module.id, path: module.filename.replaceAll('\\', '/'), counts: module.counts, bytes: content.length, sha256: crypto.createHash('sha256').update(content).digest('hex') };
});
const totals = runtime.modules.reduce((sum, module) => ({ knowledge:sum.knowledge + module.counts.knowledge, diagnosis:sum.diagnosis + module.counts.diagnosis, flashcards:sum.flashcards + module.counts.flashcards, total:sum.total + module.counts.total }), { knowledge:0, diagnosis:0, flashcards:0, total:0 });
fs.writeFileSync(path.join(courseRoot, 'library', 'manifest.json'), `${JSON.stringify({ schemaVersion: 1, courseId: course.id, generatedAt: new Date().toISOString(), totals, files }, null, 2)}\n`, 'utf8');
console.log(`Built ${files.length} CCNA2 module files: ${totals.knowledge} knowledge, ${totals.diagnosis} diagnosis, ${totals.flashcards} flashcards.`);
