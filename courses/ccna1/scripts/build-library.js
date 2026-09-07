const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const courseRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(courseRoot, '..', '..');
const outputRoot = path.join(courseRoot, 'library', 'modules');
global.window = {};
require(path.join(repoRoot, 'data', 'ccna1-course.js'));

const course = global.window.CCNA1_COURSE;
const sectionMap = {
  1:[3,5,2], 2:[0,4,6], 3:[5,6,3], 4:[1,4,2], 5:[0,1,1],
  6:[2,0,1], 7:[2,3,2], 8:[4,1,2], 9:[0,1,2], 10:[1,1,1],
  11:[4,7,4], 12:[2,7,4], 13:[0,1,1], 14:[4,2,3], 15:[3,3,2],
  16:[0,3,2], 17:[5,5,2]
};

const scenarios = {
  1:[
    ['1.3','Een nieuw netwerkdiagram toont wel apparaten en kabels, maar geen IP-subnetten, gateways of VLANs. Waarom is het ongeschikt voor routingdiagnose?',['Het is alleen een fysiek diagram; de logische adresrelaties ontbreken.','Het gebruikt te veel Layer-3-informatie.','Elke kabel moet een DNS-naam hebben.','Een diagram mag nooit beide topologieën tonen.'],0,'Routingdiagnose vraagt een logisch overzicht van adressen, subnetten en verkeersrelaties.'],
    ['1.6','Een kantoor heeft één router, één ISP-link en geen reservepad. Na één kabelbreuk is alles offline. Welke betrouwbaarheidseis ontbreekt?',['Fault tolerance door redundantie.','Meer DNS-records.','Een groter broadcastdomein.','Een lagere Ethernet-FCS.'],0,'Zonder redundant pad blijft de verbinding een single point of failure.']
  ],
  2:[
    ['2.7','S1 heeft een correct management-IP, maar het SVI blijft down/down. De VLAN bestaat, maar geen enkele poort in die VLAN is actief. Wat is de oorzaak?',['Een SVI heeft minstens één actieve Layer-2-poort in de VLAN nodig.','De switch mist ip routing.','Het enable secret is te lang.','De host gebruikt DNS.'],0,'Een management-SVI wordt pas operationeel wanneer de bijbehorende VLAN actief is.'],
    ['2.5','Na een stroomonderbreking zijn alle nieuwe instellingen verdwenen. Voor de storing werkte alles. Wat is waarschijnlijk vergeten?',['Running-config naar startup-config kopiëren.','De MAC-tabel statisch maken.','De consolekabel verwijderen.','De hostnaam via DHCP uitdelen.'],0,'Niet-opgeslagen running-config in RAM verdwijnt bij reload of stroomverlies.']
  ],
  3:[
    ['3.7','Een host wil een server in een ander subnet bereiken en gebruikt als destination MAC het MAC-adres van de server. Waarom mislukt de lokale aflevering?',['Voor een remote doel moet het frame naar het MAC-adres van de default gateway.','De destination IP moet broadcast zijn.','TCP gebruikt geen MAC-adressen.','De switch moet het remote subnet routeren.'],0,'Layer-2-aflevering is lokaal; de router is de next hop voor remote IP-doelen.'],
    ['3.6','Een capture toont op elke routerhop andere Ethernetadressen, maar dezelfde IP-bron en bestemming. Welke proces verklaart dit?',['Elke router decapsuleert en bouwt voor de volgende link een nieuw frame.','Elke router maakt een nieuw TCP-segment.','DNS herschrijft de IP-header.','De FCS bepaalt het doel-IP.'],0,'De Layer-2-encapsulatie verandert per link terwijl het Layer-3-packet end-to-end blijft.']
  ],
  4:[
    ['4.3','Een koperen link is up maar toont toenemende CRC-fouten wanneer een zware motor draait. Wat is de waarschijnlijkste oorzaak?',['EMI op of nabij de koperkabel.','Een ontbrekende default route.','Een fout DNS-record.','Een verlopen DHCP-lease.'],0,'Elektromagnetische storing kan signalen op koper beschadigen en CRC-fouten veroorzaken.'],
    ['4.4','Een handgemaakte UTP-kabel geeft intermitterende link en de tester meldt gesplitste paren. Wat is fout?',['De aders zijn niet volgens één correcte T568A/B-paarindeling getermineerd.','De kabel gebruikt full duplex.','Het IP-masker is te lang.','De switch leert te weinig MAC-adressen.'],0,'Correcte paarvorming en pinout zijn vereist om crosstalk en signaalproblemen te vermijden.']
  ],
  5:[
    ['5.1','Een host heeft IPv4-adres 192.0.2.130/26. Een beheerder noemt 192.0.2.128 het eerste hostadres. Wat is de fout?',['192.0.2.128 is het netwerkadres van het /26-subnet.','Een /26 heeft geen netwerkadres.','192.0.2.130 is altijd een broadcast.','Het adres moet hexadecimaal zijn.'],0,'Bij block size 64 begint dit subnet op .128; het eerste bruikbare hostadres is .129.'],
    ['5.2','Een IPv6-hextet wordt geschreven als 0000:0000 en beide nulreeksen worden afzonderlijk met :: ingekort. Waarom is het adres ongeldig?',['De dubbele-koloncompressie mag maar één keer in een IPv6-adres voorkomen.','Hex mag geen nul bevatten.','Een hextet moet decimal zijn.','IPv6 gebruikt altijd precies vier hextets.'],0,'Meer dan één :: maakt het aantal weggelaten nulhextets ambigu.']
  ],
  6:[
    ['6.3','Een Ethernetframe komt aan met een FCS die niet overeenkomt met de berekende CRC. Wat doet de ontvanger normaal?',['Het frame droppen als beschadigd.','De FCS gebruiken om alle bits te herstellen.','Het packet routen zonder header.','Een DHCP-lease aanvragen.'],0,'FCS detecteert fouten maar corrigeert ze niet; een corrupt frame wordt verworpen.'],
    ['6.2','Een netwerk met hubs toont collisions en lage prestaties. Na vervanging door full-duplex switches verdwijnen de collisions. Waarom?',['Elke switchpoort is een afzonderlijk full-duplex collision domain.','Switches verwijderen IP-adressen.','Routers sturen BPDUs.','DNS regelt duplex.'],0,'Full-duplex point-to-point Ethernet gebruikt geen CSMA/CD-collisions.']
  ],
  7:[
    ['7.3','Na het wissen van de MAC-tabel wordt het eerste unicastframe naar meerdere poorten in dezelfde VLAN gestuurd. Waarom?',['De destination MAC is nog unknown unicast.','De switch gebruikt een default route.','De FCS is te groot.','De host gebruikt IPv6.'],0,'Zonder geleerde destination-entry floodt de switch unknown unicast binnen de VLAN.'],
    ['7.4','Een link is up, maar toont veel late collisions en zeer lage throughput. Eén zijde staat half duplex en de andere full duplex. Wat is de oorzaak?',['Een duplex-mismatch.','Een fout subnetmasker.','Een ontbrekende DNS-server.','Een verlopen ARP-entry.'],0,'Late collisions en asymmetrisch slechte prestaties zijn klassieke duplexmismatchsignalen.']
  ],
  8:[
    ['8.5','Voor 10.1.2.130 bestaan routes /0, 10.0.0.0/8 en 10.1.2.128/25. De /8 heeft een lagere AD. Welke route wint?',['De /25 door longest prefix match.','De /8 door de lagere AD.','De /0 als gateway of last resort.','Alle routes willekeurig.'],0,'Prefixspecificiteit wordt vóór administrative distance tussen verschillende prefixlengtes toegepast.'],
    ['8.4','Een host bereikt lokale peers maar geen enkel remote netwerk. Het eigen adres en masker zijn correct. Welke instelling controleer je eerst?',['De default gateway.','De Ethernet-preamble.','De DNS TTL voor lokale peers.','De switch-FCS.'],0,'Lokale communicatie heeft geen gateway nodig; remote aflevering wel.']
  ],
  9:[
    ['9.2','Na ARP-spoofing wijst de gateway-entry op het MAC-adres van een onbekende laptop. Welk risico ontstaat?',['Verkeer kan via de aanvaller worden omgeleid voor een man-in-the-middle.','De IPv4-prefix wordt automatisch /32.','De switch schakelt over naar IPv6.','TCP-poorten verdwijnen.'],0,'ARP heeft geen authenticatie en een valse IP–MAC-binding kan verkeer onderscheppen.'],
    ['9.3','Een IPv6-host heeft een GUA maar leert geen default router; Router Advertisements worden gefilterd. Wat ontbreekt?',['De RA die router- en prefixinformatie levert.','Een ARP Reply.','Een IPv4 DHCPACK.','Een TCP-handshake.'],0,'IPv6-hosts leren hun default router via ICMPv6 Router Advertisements.']
  ],
  10:[
    ['10.2','G0/0/0 toont administratively down/down en heeft een correct IP-adres. Welke configuratie veroorzaakt dit?',['Het interfacecommando shutdown is actief.','De ARP-cache is leeg.','De route heeft een hoge metric.','De host gebruikt SLAAC.'],0,'Administratively down wijst rechtstreeks op de softwarematige shutdownstatus.'],
    ['10.3','Hosts in LAN A bereiken elkaar, maar niet LAN B. Hun default gateway staat op een adres buiten hun eigen subnet. Wat is de oorzaak?',['De gateway is niet rechtstreeks lokaal bereikbaar.','De switch gebruikt store-and-forward.','De DNS-server mist een AAAA-record.','De routerinterface heeft een description.'],0,'Een host moet zijn default gateway via de lokale link kunnen resolven en bereiken.']
  ],
  11:[
    ['11.5','Een /26-subnet start op 192.0.2.64. Een beheerder gebruikt .127 als hostadres. Waarom werkt dit niet?',['.127 is het broadcastadres van 192.0.2.64/26.','Een /26 heeft geen broadcast.','.127 is altijd loopback.','Het netwerk start op .128.'],0,'Het bereik is .64–.127; netwerk .64, hosts .65–.126 en broadcast .127.'],
    ['11.8','Een VLSM-plan deelt eerst kleine subnetten uit en vindt daarna geen uitgelijnd blok voor 100 hosts. Wat was de ontwerpfout?',['Niet van grootste naar kleinste behoefte verdelen.','Te veel DNS-records gebruiken.','De MAC-adressen niet sorteren.','Elke link een /64 geven.'],0,'Grootste-eerst behoudt uitgelijnde grote blokken en voorkomt fragmentatie van adresruimte.']
  ],
  12:[
    ['12.2','Het adres 2001:db8::1::5 wordt door IOS geweigerd. Waarom?',['Het gebruikt :: twee keer en is daardoor ambigu.','Het bevat hexletters.','De prefix is public.','IPv6 vereist decimalen.'],0,'Een IPv6-adres mag de nulcompressie :: slechts eenmaal gebruiken.'],
    ['12.5','Een stateful DHCPv6-client krijgt een GUA en DNS maar geen default route omdat RA’s worden geblokkeerd. Wat is de oorzaak?',['DHCPv6 levert de default gateway niet; de Router Advertisement ontbreekt.','De client gebruikt UDP 546.','Een /64 is te groot.','DAD verwijdert alle routes.'],0,'Ook bij stateful DHCPv6 komt de default router uit een RA.']
  ],
  13:[
    ['13.2','Een traceroute toont antwoorden tot R2 en daarna alleen sterretjes, terwijl het doel niet reageert. Wat kun je veilig concluderen?',['Het probleem of filtering ligt na het laatst bewezen antwoordende punt; meer bewijs is nodig.','R2 is zeker defect.','DNS is zeker de oorzaak.','Het doel gebruikt altijd een verkeerd MAC-adres.'],0,'Sterretjes kunnen een drop, filtering of rate limiting betekenen; ze bewijzen niet één specifieke oorzaak.'],
    ['13.1','Een ping naar IP faalt, maar de applicatie werkt via hetzelfde doel. Welke verklaring is mogelijk?',['ICMP Echo wordt gefilterd terwijl het applicatieprotocol is toegestaan.','IP-connectiviteit bestaat niet.','De host heeft geen NIC.','De switch gebruikt geen MAC-tabel.'],0,'Een pingtimeout bewijst niet dat alle transport- of applicatieverkeer faalt.']
  ],
  14:[
    ['14.5','Een capture toont SYN, SYN-ACK en daarna geen ACK. De server luistert en stuurt correct terug. Waar ligt het probleem waarschijnlijk?',['Het laatste client→serverpad of de client blokkeert het ACK.','UDP heeft geen checksum.','DNS gebruikt een MX-record.','Ethernet heeft geen FCS.'],0,'Zonder de derde handshakeboodschap wordt de TCP-sessie niet volledig gevestigd.'],
    ['14.6','De ontvanger adverteert een steeds kleiner TCP-window en de zender vertraagt. Welk mechanisme zie je?',['Flow control ter bescherming van de ontvanger.','ARP-spoofing.','Longest prefix match.','DHCP relay.'],0,'Het advertised receive window begrenst hoeveel data zonder extra ACK mag worden verzonden.']
  ],
  15:[
    ['15.4','Een client kan 198.51.100.20 pingen maar `example.test` niet openen; nslookup time-out. Welke dienst faalt?',['DNS-naamresolutie.','Ethernet switching.','De default gateway voor alle verkeer.','TCP-flow-control.'],0,'Werkende IP-connectiviteit met falende naamquery is een DNS-probleem.'],
    ['15.4','Een nieuwe client krijgt 169.254.30.8 terwijl lokale statische hosts werken. Welke fase is waarschijnlijk mislukt?',['DHCP-leaseverlening.','ARP voor de loopback.','TCP three-way handshake naar HTTPS.','Ethernet-FCS-berekening.'],0,'Een APIPA/link-local IPv4-adres wijst doorgaans op een mislukte DHCPv4-lease.']
  ],
  16:[
    ['16.4','VTY staat op `transport input telnet ssh` en gebruikers melden dat credentials zichtbaar zijn in een capture. Welke hardening ontbreekt?',['Alleen SSH toestaan en Telnet blokkeren.','Service password-encryption uitschakelen.','Een groter broadcastdomein maken.','ICMP volledig blokkeren.'],0,'Telnet versleutelt de beheersessie niet; VTY hoort alleen SSH toe te laten.'],
    ['16.2','Een medewerker voert na een phishingmail een onbekende bijlage uit en bestanden worden versleuteld. Welke combinatie beschrijft het incident?',['Social engineering gevolgd door ransomware.','ARP gevolgd door SLAAC.','STP gevolgd door DHCP.','NTP gevolgd door DNSSEC.'],0,'Phishing misleidt de gebruiker; ransomware versleutelt gegevens voor afpersing.']
  ],
  17:[
    ['17.7','Een router kan de remote server pingen vanaf zijn WAN-interface, maar een LAN-host niet. Welke controle is het belangrijkst?',['Test met het LAN-bronadres en controleer het retourpad naar het LAN.','Wis alle configuraties.','Maak elke switchpoort trusted.','Schakel DNS uit.'],0,'De routerping kan een ander bronadres en daardoor een ander retourpad gebruiken.'],
    ['17.6','Een beheerder verandert tegelijk IP, kabel, VLAN en route; daarna werkt het maar de oorzaak is onbekend. Welke methodologische fout is gemaakt?',['Meerdere variabelen tegelijk wijzigen zonder toetsbare hypothese.','Te veel logging gebruiken.','Een baseline bewaren.','Het probleem eerst afbakenen.'],0,'Eén bewezen oorzaak en één gecontroleerde wijziging houden diagnose reproduceerbaar.']
  ]
};

const stopWords = new Set('de het een en van voor met naar welke wat waarom hoe wordt zijn dit dat als bij uit op in om door aan kan tussen over'.split(' '));
function tagsFor(module, section, prompt) {
  const words = `${module.title} ${section.title} ${prompt}`.toLowerCase().match(/[a-z0-9][a-z0-9+./-]{2,}/g) || [];
  return [...new Set(words.filter((word) => !stopWords.has(word)))].slice(0, 10);
}

fs.mkdirSync(outputRoot, { recursive: true });
const libraryModules = [...course.modules].sort((a, b) => a.id - b.id).map((module) => {
  const knowledge = module.questions.map((question, index) => {
    const section = module.sections[sectionMap[module.id][index]] || module.sections[0];
    return {
      id:`ccna1-m${String(module.id).padStart(2, '0')}-q${String(index + 1).padStart(2, '0')}`,
      courseId:course.id, moduleId:module.id, moduleTitle:module.title,
      sectionId:section.id, sectionTitle:section.title, type:'knowledge',
      prompt:question.q, choices:question.o, correctIndex:question.a,
      answer:question.o[question.a], explanation:question.e,
      tags:tagsFor(module, section, question.q), provenance:'original-ccna1-study-question'
    };
  });
  const diagnosis = scenarios[module.id].map(([sectionId, prompt, choices, correctIndex, explanation], index) => {
    const section = module.sections.find((item) => item.id === sectionId) || module.sections[0];
    return {
      id:`ccna1-m${String(module.id).padStart(2, '0')}-s${String(index + 1).padStart(2, '0')}`,
      courseId:course.id, moduleId:module.id, moduleTitle:module.title,
      sectionId:section.id, sectionTitle:section.title, type:'diagnosis',
      prompt, choices, correctIndex, answer:choices[correctIndex], explanation,
      tags:tagsFor(module, section, prompt), provenance:'original-ccna1-diagnosis-scenario'
    };
  });
  const flashcards = module.sections.map((section, index) => ({
    id:`ccna1-m${String(module.id).padStart(2, '0')}-f${String(index + 1).padStart(2, '0')}`,
    courseId:course.id, moduleId:module.id, moduleTitle:module.title,
    sectionId:section.id, sectionTitle:section.title, type:'flashcard',
    front:`${section.id} · ${section.title}`, back:section.points.join(' '),
    commands:section.commands || '', verify:section.verify || [],
    tags:tagsFor(module, section, section.title), provenance:'original-ccna1-flashcard'
  }));
  const cards = [...knowledge, ...diagnosis, ...flashcards];
  const payload = {
    schemaVersion:1, courseId:course.id,
    module:{id:module.id, title:module.title, summary:module.summary},
    counts:{knowledge:knowledge.length, diagnosis:diagnosis.length, flashcards:flashcards.length, total:cards.length},
    cards
  };
  const filename = `module-${String(module.id).padStart(2, '0')}.json`;
  fs.writeFileSync(path.join(outputRoot, filename), `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return {...payload.module, filename:`modules/${filename}`, counts:payload.counts, cards};
});

const runtime = {
  schemaVersion:1,
  courseId:course.id,
  title:'CCNA1 Vraag & Antwoord Library',
  masteryRule:'Alleen multiple-choice- en diagnoseantwoorden tellen als bewijs. Een item is beheerst na minstens twee correcte antwoorden; flashcards zijn herhaling en kleuren het lampje niet kunstmatig groen.',
  modules:libraryModules
};
fs.writeFileSync(path.join(courseRoot, 'library', 'library-index.js'), `window.CCNA1_QA_LIBRARY = ${JSON.stringify(runtime, null, 2)};\n`, 'utf8');

const files = libraryModules.map((module) => {
  const absolute = path.join(courseRoot, 'library', module.filename);
  const content = fs.readFileSync(absolute);
  return {moduleId:module.id, path:module.filename.replaceAll('\\', '/'), counts:module.counts, bytes:content.length, sha256:crypto.createHash('sha256').update(content).digest('hex')};
});
const totals = libraryModules.reduce((sum, module) => ({knowledge:sum.knowledge+module.counts.knowledge, diagnosis:sum.diagnosis+module.counts.diagnosis, flashcards:sum.flashcards+module.counts.flashcards, total:sum.total+module.counts.total}), {knowledge:0,diagnosis:0,flashcards:0,total:0});
fs.writeFileSync(path.join(courseRoot, 'library', 'manifest.json'), `${JSON.stringify({schemaVersion:1,courseId:course.id,generatedAt:new Date().toISOString(),totals,files}, null, 2)}\n`, 'utf8');
console.log(`Built ${files.length} CCNA1 module files: ${totals.knowledge} knowledge, ${totals.diagnosis} diagnosis, ${totals.flashcards} flashcards.`);
