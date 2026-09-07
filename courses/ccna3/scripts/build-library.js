const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..', '..', '..');
const courseRoot = path.resolve(__dirname, '..');
const outputRoot = path.join(courseRoot, 'library', 'modules');
global.window = {};
require(path.join(projectRoot, 'data', 'ccna3-course.js'));
const course = global.window.CCNA3_COURSE;

const scenarios = {
  1: [
    ['1.2','Een OSPF-router kent de samenvatting van een LSA, maar mist de volledige informatie in zijn LSDB. Welk pakket past bij de volgende stap?',['LSR','Hello','ARP Request','DHCP Discover'],0,'Een Link-State Request vraagt de ontbrekende LSA gericht op.'],
    ['1.3','Twee routers op hetzelfde broadcastsegment blijven onderling in 2-Way, terwijl beide met de DR Full zijn. Wat is de waarschijnlijkste verklaring?',['Dit is normaal voor twee DROTHER-routers','De router-ID is dubbel','De dead timer is verlopen','IP-protocol 89 wordt geblokkeerd'],0,'DROTHERs vormen onderling geen volledige adjacency en kunnen normaal 2-Way blijven.']
  ],
  2: [
    ['2.3','Een router met hogere OSPF-priority komt later online, maar de bestaande DR blijft DR. Wat verklaart dit?',['De DR-verkiezing is niet-preemptive','De hoogste priority wordt altijd DROTHER','Process-ID’s moeten gelijk zijn','De nieuwe router gebruikt area 1'],0,'Een bestaande gezonde DR wordt niet automatisch verdrongen door een later betere kandidaat.'],
    ['2.4','OSPF-buren zien alle interne prefixes, maar geen default route vanaf de edge. Wat controleer je eerst?',['Of de edge zelf een default route heeft','Of alle routers priority 0 hebben','Of ARP is uitgeschakeld','Of de DR een loopback mist'],0,'Normale default-information originate adverteert alleen een bestaande lokale default route.']
  ],
  3: [
    ['3.3','Een dienst ontvangt enorme UDP-antwoorden op verzoeken met een vervalst slachtofferadres. Welke aanval past het best?',['Reflectie/amplificatie','VLAN pruning','OSPF summarization','Duplex mismatch'],0,'UDP maakt bronspoofing en reflectie via veel grotere antwoorden mogelijk.'],
    ['3.4','Een bestand is niet geheim, maar iedere ongeautoriseerde wijziging moet aantoonbaar zijn. Welke techniek past primair?',['Cryptografische hash','NAT overload','DHCP snooping','QoS shaping'],0,'Een hash levert een controleerbare digest voor integriteit.']
  ],
  4: [
    ['4.1','Een pakket matcht ACE 20. ACE 30 zou het verkeer toestaan, maar ACE 20 weigert het. Wat gebeurt er?',['Het pakket wordt bij ACE 20 geweigerd','ACE 30 overschrijft ACE 20','De ACL telt beide acties op','De route kiest de ACE met laagste cost'],0,'ACLs stoppen bij de eerste match.'],
    ['4.3','Je wilt HTTPS van één gebruikers-LAN naar één server toestaan en al het overige vroeg blokkeren. Welk ACL-type en welke plaatsing passen?',['Extended ACL dicht bij de bron','Standard ACL dicht bij de bron','Standard ACL dicht bij de bestemming zonder poort','Alleen een VTY access-class'],0,'Een extended ACL kan bron, bestemming, protocol en poort vroeg in het pad matchen.']
  ],
  5: [
    ['5.3','SSH werkt vanaf iedere host terwijl alleen 192.0.2.50 beheer mag uitvoeren. Welke ontbrekende maatregel is het waarschijnlijkst?',['Een inbound access-class op de VTY-lijnen','Een outbound NAT-regel','Een hogere OSPF-cost','Een LLDP-filter'],0,'VTY-bronnen worden met access-class beperkt.'],
    ['5.4','DNS via UDP werkt, maar grote DNS-antwoorden via TCP falen. Welke ACL-omissie past het best?',['TCP poort 53 is niet toegestaan','ICMP echo is niet toegestaan','SSH ontbreekt','De wildcard is host 0.0.0.0'],0,'DNS gebruikt vooral UDP, maar kan voor grote antwoorden of zoneoverdracht TCP 53 gebruiken.']
  ],
  6: [
    ['6.4','Tientallen inside-hosts verschijnen met hetzelfde publieke adres maar verschillende bronpoorten. Welke functie zie je?',['PAT/overload','Static NAT','NAT64 zonder poorten','OSPF ECMP'],0,'PAT onderscheidt gelijktijdige vertalingen met Layer-4-poorten.'],
    ['6.3','De eerste vijf hosts krijgen een dynamic-NAT-vertaling; de zesde niet, hoewel routing en ACL kloppen. Wat is waarschijnlijk?',['De publieke NAT-pool is uitgeput','De DR is gewijzigd','De switch heeft geen native VLAN','NTP is niet gesynchroniseerd'],0,'Dynamic NAT zonder overload heeft voor iedere gelijktijdige mapping een pooladres nodig.']
  ],
  7: [
    ['7.1','Twee WAN-verbindingen vallen tegelijk uit bij één kabelbreuk buiten het gebouw. Welke ontwerpfout blijkt?',['Beide logische paden delen dezelfde fysieke last mile','De SLA bevat te veel metrics','De CE gebruikt een hostname','De provider gebruikt Ethernet'],0,'Logische redundantie helpt niet wanneer beide paden één fysieke failure domain delen.'],
    ['7.3','Een thuiswerker bereikt internet, maar bedrijfsverkeer over de remote-access VPN heeft zeer hoge jitter. Welke eigenschap onderzoek je eerst?',['Kwaliteit en congestie van de internet-underlay','De OSPF DR in het datacenter','De flashhash van de router','De LLDP-neighbornaam'],0,'De VPN-overlay blijft afhankelijk van latency, verlies en jitter in de underlay.']
  ],
  8: [
    ['8.3','IKEv2 staat READY, maar IPsec encap/decap blijft nul tijdens verkeer. Wat is de waarschijnlijkste volgende controle?',['Traffic selectors en routes','CDP op de accesspoort','NTP-stratum','STP root priority'],0,'Een gezonde IKE SA bewijst niet dat interessant verkeer de IPsec selectors matcht.'],
    ['8.2','Een site-to-site VPN moet het volledige oorspronkelijke IP-pakket tussen gateways beschermen. Welke mode past?',['Tunnel mode','Transport mode','Access mode','Passive mode'],0,'Tunnel mode kapselt het volledige oorspronkelijke pakket in een nieuw IP-pakket.']
  ],
  9: [
    ['9.2','Tijdens congestie werkt spraak goed, maar alle businessdata valt bijna stil. Welke QoS-fout is waarschijnlijk?',['Een onbegrensde priority queue veroorzaakt starvation','Shaping gebruikt een buffer','DSCP is zichtbaar','De WAN-link heeft een SLA'],0,'Strict priority moet begrensd worden zodat andere classes capaciteit houden.'],
    ['9.3','Verkeer boven 20 Mbit/s wordt niet gedropt maar tijdelijk gebufferd en gelijkmatiger verzonden. Welke techniek is actief?',['Shaping','Policing','NAT','ARP inspection'],0,'Shaping buffert excess verkeer om de gemiddelde rate af te vlakken.']
  ],
  10: [
    ['10.2','Logregels van verschillende routers zijn niet betrouwbaar op tijd te ordenen. Welke basisdienst ontbreekt waarschijnlijk?',['NTP-synchronisatie','PAT overload','EtherChannel','PortFast'],0,'Gesynchroniseerde klokken zijn nodig voor betrouwbare eventcorrelatie.'],
    ['10.5','Een nieuwe IOS-image staat in flash, maar na reboot start de oude versie. Wat controleer je eerst?',['Bootvariable en imagepad','De DHCP-pool','De HSRP-priority','De VLAN-naam'],0,'De bootconfiguratie bepaalt welk geldig image bij het opstarten wordt gekozen.']
  ],
  11: [
    ['11.2','Een ontwerp heeft dubbele uplinks, maar beide eindigen op dezelfde voeding en hetzelfde chassis. Welk risico blijft?',['Een gedeeld single point of failure','Te veel route summarization','Een te lage DSCP-waarde','Een dubbele router-ID'],0,'Redundantie moet ook chassis, voeding en fysieke paden omvatten.'],
    ['11.3','Een access-switch heeft genoeg poorten maar valt uit zodra alle telefoons en APs vermogen vragen. Welke capaciteit is onderschat?',['Het PoE-budget','De OSPF reference bandwidth','De NTP-stratumwaarde','De NAT-pool'],0,'Poortdichtheid garandeert niet dat het totale benodigde PoE-vermogen beschikbaar is.']
  ],
  12: [
    ['12.3','Een Ethernetlink blijft up, maar toont veel late collisions en zeer slechte throughput. Wat is de waarschijnlijkste oorzaak?',['Duplex-mismatch','Verkeerde DNS-suffix','Ontbrekende default-information originate','Te veel NTP-peers'],0,'Late collisions zijn een klassiek symptoom van een duplexconflict.'],
    ['12.4','Een ping naar het server-IP werkt, maar HTTPS niet. Welke conclusie is correct?',['Layer-3-bereik is bewezen, de applicatiepoort nog niet','De volledige applicatie is gezond','DNS is zeker de oorzaak','De return route kan nooit het probleem zijn'],0,'Ping bewijst niet dat TCP 443, TLS of de applicatie zelf werkt.']
  ],
  13: [
    ['13.3','Twee tenants gebruiken overlappende IP-prefixes zonder elkaars routes te zien. Welke abstractie past het best?',['Afzonderlijke VRFs','Eén gedeelde global routing table','Alleen een native VLAN','NTP authentication'],0,'VRFs bieden geïsoleerde routingtabellen en ondersteunen overlappende adressen.'],
    ['13.4','De controller is tijdelijk onbereikbaar, maar bestaande flows blijven volgens de laatste policy doorlopen. Welke scheiding zie je?',['Control plane en data plane','Inside en outside NAT','Access en trunk','Voice en video queue'],0,'De dataplane kan bestaande forwardingstate behouden terwijl de controller niet beschikbaar is.']
  ],
  14: [
    ['14.3','Een automatiseringsjob herhaalt na een timeout een POST en maakt twee objecten. Welk ontwerpdetail ontbrak?',['Veilige idempotentie of een idempotency key','Een hogere OSPF-priority','Een LLDP-neighbor','Een groter PoE-budget'],0,'Niet-idempotente retries kunnen zonder deduplicatie dubbele side effects veroorzaken.'],
    ['14.4','Een tweede configuratierun toont opnieuw dezelfde wijzigingen terwijl het apparaat al correct staat. Welke eigenschap ontbreekt?',['Idempotentie','Encryptie van syslog','PAT','DR-preemption'],0,'Een idempotente run convergeert en rapporteert daarna geen onnodige wijziging.']
  ]
};

const stopWords = new Set('de het een en van voor met naar welke wat waarom hoe wordt zijn dit dat als bij uit op in om door aan kan tussen over'.split(' '));
function tagsFor(module, section, text) {
  const words = `${module.title} ${section.title} ${text}`.toLowerCase().match(/[a-z0-9][a-z0-9+./-]{2,}/g) || [];
  return [...new Set(words.filter((word) => !stopWords.has(word)))].slice(0, 10);
}
function writeNewOrVerify(file, text) {
  if (fs.existsSync(file)) {
    if (fs.readFileSync(file, 'utf8') !== text) throw new Error(`Refusing to overwrite changed library file: ${file}`);
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, { encoding: 'utf8', flag: 'wx' });
}
function normalizeQuestion(module, question, index) {
  const section = module.sections[index % module.sections.length];
  return {
    id: `ccna3-m${String(module.id).padStart(2, '0')}-mc-${String(index + 1).padStart(2, '0')}`,
    type: 'multiple-choice', sectionId: section.id, sectionTitle: section.title,
    prompt: question.q, choices: question.o, correctIndex: question.a,
    answer: question.o[question.a], explanation: question.e,
    tags: tagsFor(module, section, question.q), provenance: 'original-ccna3-study-question'
  };
}
function normalizeScenario(module, row, index) {
  const [sectionId, situation, choices, correctIndex, explanation] = row;
  const section = module.sections.find((item) => item.id === sectionId) || module.sections[0];
  return {
    id: `ccna3-m${String(module.id).padStart(2, '0')}-diag-${String(index + 1).padStart(2, '0')}`,
    type: 'diagnostic', sectionId: section.id, sectionTitle: section.title,
    prompt: situation, choices, correctIndex, answer: choices[correctIndex], explanation,
    tags: tagsFor(module, section, situation), provenance: 'original-ccna3-diagnostic-scenario'
  };
}
function normalizeFlashcard(module, section, index) {
  return {
    id: `ccna3-m${String(module.id).padStart(2, '0')}-flash-${String(index + 1).padStart(2, '0')}`,
    type: 'flashcard', sectionId: section.id, sectionTitle: section.title,
    front: `Wat moet je kunnen uitleggen over ${section.title}?`,
    back: section.points.join(' '), tags: tagsFor(module, section, section.points.join(' ')),
    provenance: 'original-ccna3-study-flashcard'
  };
}

const modules = [...course.modules].sort((a, b) => a.id - b.id).map((module) => {
  const multipleChoice = module.questions.map((question, index) => normalizeQuestion(module, question, index));
  const diagnostic = scenarios[module.id].map((row, index) => normalizeScenario(module, row, index));
  const flashcards = module.sections.map((section, index) => normalizeFlashcard(module, section, index));
  const payload = {
    schemaVersion: 1, courseId: course.id,
    module: { id: module.id, title: module.title, summary: module.summary },
    counts: { multipleChoice: multipleChoice.length, diagnostic: diagnostic.length, flashcards: flashcards.length },
    multipleChoice, diagnostic, flashcards
  };
  const filename = `module-${String(module.id).padStart(2, '0')}.json`;
  writeNewOrVerify(path.join(outputRoot, filename), `${JSON.stringify(payload, null, 2)}\n`);
  return { ...payload, filename: `modules/${filename}` };
});

const runtime = {
  schemaVersion: 1, courseId: course.id, title: 'CCNA3 Vraag, Diagnose & Flashcard Library',
  masteryRule: { requiredCorrect: 2, minimumAccuracy: 0.6, assessedTypes: ['multiple-choice','diagnostic'], flashcardsAffectMastery: false },
  modules
};
writeNewOrVerify(path.join(courseRoot, 'library', 'library-index.js'), `window.CCNA3_QA_LIBRARY = ${JSON.stringify(runtime, null, 2)};\n`);

const files = modules.map((module) => {
  const absolute = path.join(courseRoot, 'library', module.filename);
  const content = fs.readFileSync(absolute);
  return { moduleId: module.module.id, path: module.filename, counts: module.counts, bytes: content.length, sha256: crypto.createHash('sha256').update(content).digest('hex') };
});
const manifest = { schemaVersion: 1, sourceVersion: course.version, courseId: course.id, totals: {
  multipleChoice: modules.reduce((sum, item) => sum + item.counts.multipleChoice, 0),
  diagnostic: modules.reduce((sum, item) => sum + item.counts.diagnostic, 0),
  flashcards: modules.reduce((sum, item) => sum + item.counts.flashcards, 0)
}, files };
writeNewOrVerify(path.join(courseRoot, 'library', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Verified ${modules.length} CCNA3 module files: ${manifest.totals.multipleChoice} MC, ${manifest.totals.diagnostic} diagnostic, ${manifest.totals.flashcards} flashcards.`);
