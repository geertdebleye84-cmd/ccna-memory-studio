/* Eigen Nederlandstalig studiemateriaal voor CCNA ENSA. Geen officiële toetsitems. */
window.CCNA3_COURSE = {
  id: 'ccna3-ensa',
  title: 'CCNA3 · Enterprise Networking, Security & Automation',
  version: '2026-08-20',
  note: 'Eigen cursusnotities en oefenvragen. Introductielessen x.0 zijn bewust overgeslagen.',
  modules: [
    {
      id: 1, title: 'Single-Area OSPFv2 Concepts', color: '#ff7043',
      summary: 'Begrijp waarom OSPF link-state-informatie uitwisselt, buren vormt en voor elk doel het kortste pad berekent.',
      diagram: {type:'ospf',nodes:['R1','R2','R3','LAN'],links:[[0,1,'Hello/LSA'],[1,2,'Area 0'],[2,3,'cost']]},
      sections: [
        {id:'1.1',title:'OSPF Features and Characteristics',points:[
          'OSPF is een open link-state IGP. Routers bouwen binnen een area dezelfde link-state database (LSDB) en gebruiken SPF om routes te berekenen; dit verschilt van het periodiek doorgeven van een volledige routingtabel.',
          'De metric cost is gebaseerd op bandbreedte ten opzichte van een reference bandwidth. OSPF ondersteunt VLSM, CIDR, equal-cost load balancing, hiërarchische areas en snelle, getriggerde convergentie.'
        ],commands:`show ip protocols\nshow ip ospf\nshow ip route ospf`,verify:['OSPF process actief','Router-ID bekend','O-routes hebben verwachte cost']},
        {id:'1.2',title:'OSPF Packets',points:[
          'Hello-pakketten ontdekken en onderhouden buren. DBD vat de LSDB samen, LSR vraagt ontbrekende informatie, LSU vervoert LSA’s en LSAck bevestigt ontvangst.',
          'OSPF gebruikt IP-protocol 89. Multicast 224.0.0.5 bereikt alle OSPF-routers; 224.0.0.6 richt zich op DR en BDR op multiaccessnetwerken.'
        ],commands:`show ip ospf neighbor\nshow ip ospf database`,verify:['Neighbor-state past bij netwerktype','LSDB bevat router- en netwerkinformatie']},
        {id:'1.3',title:'OSPF Operation',points:[
          'Buren doorlopen states van Down en Init naar 2-Way; alleen routers die een adjacency moeten vormen gaan verder via ExStart, Exchange en Loading naar Full.',
          'Na synchronisatie floodt OSPF wijzigingen betrouwbaar. SPF berekent een shortest-path tree met de lokale router als wortel en installeert de beste routes in de routingtabel.'
        ],commands:`show ip ospf neighbor detail\nshow ip ospf database router`,verify:['Verwachte buren zijn Full of 2-Way','LSA-sequenties zijn actueel','Routes volgen de SPF-topologie']}
      ],
      lab:{title:'Observeer OSPF-convergentie',task:'Bouw een driehoek van drie routers in area 0. Leg één link stil en vergelijk neighbors, LSDB, routes en traceroute voor en na de storing.',success:['Alle router-ID’s uniek','Adjacencies gevormd','Alternatief pad verschijnt','Herstel convergeert zonder statische route']},
      pitfalls:['Een unieke router-ID is verplicht.','De laagste cost wint, niet het kleinste aantal routers.','2-Way kan op een broadcastsegment een normale eindstate zijn.'],
      questions:[
        {q:'Welke OSPF-database hoort binnen één area inhoudelijk gelijk te zijn?',o:['De link-state database','De ARP-cache','De running-config','De NAT-tabel'],a:0,e:'LSA-flooding zorgt voor een gesynchroniseerde LSDB.'},
        {q:'Welk pakket vraagt specifieke ontbrekende LSDB-informatie?',o:['LSR','Hello','LSAck','ARP'],a:0,e:'Een Link-State Request vraagt de benodigde LSA’s op.'},
        {q:'Wat berekent het SPF-algoritme?',o:['Een shortest-path tree vanuit de lokale router','Een MAC-adrestabel','Een DHCP-pool','Een encryptiesleutel'],a:0,e:'SPF gebruikt de LSDB om beste paden te bepalen.'}
      ]
    },
    {
      id: 2, title: 'Single-Area OSPFv2 Configuration', color: '#ff9f43',
      summary: 'Configureer, optimaliseer en controleer OSPFv2 in één area, inclusief router-ID, DR/BDR en default-routepropagatie.',
      diagram:{type:'ospf-config',nodes:['LAN-A','R1','R2 DR','R3 BDR','Internet'],links:[[0,1,'passive'],[1,2,'P2P'],[2,3,'broadcast'],[3,4,'default']]},
      sections:[
        {id:'2.1',title:'OSPF Router ID',points:[
          'De router-ID is een 32-bits identificator en hoeft geen bereikbaar IPv4-adres te zijn. IOS kiest expliciete router-id, anders hoogste loopbackadres, anders hoogste actieve interfaceadres.',
          'Wijziging van de router-ID vereist doorgaans herstart van het OSPF-proces of een reload; dubbele IDs voorkomen betrouwbare LSDB-synchronisatie.'
        ],commands:`router ospf 10\n router-id 1.1.1.1\nend\nclear ip ospf process`,verify:['show ip ospf toont juiste router-ID','Elke router-ID is uniek']},
        {id:'2.2',title:'Point-to-Point OSPF Networks',points:[
          'Activeer OSPF met network plus wildcard en area, of direct op de interface met ip ospf process-id area area-id. Het process-id is lokaal en hoeft tussen buren niet gelijk te zijn.',
          'Op point-to-pointnetwerken is geen DR/BDR nodig. passive-interface voorkomt Hellos op gebruikers-LANs maar blijft het aangesloten netwerk adverteren.'
        ],commands:`router ospf 10\n passive-interface default\n no passive-interface g0/0/0\n network 10.0.0.0 0.0.0.3 area 0\ninterface g0/0/1\n ip ospf 10 area 0\n ip ospf network point-to-point`,verify:['show ip ospf interface brief','Neighbor wordt Full','Passieve LAN-interface stuurt geen Hellos']},
        {id:'2.3',title:'Multiaccess OSPF Networks',points:[
          'Op Ethernet reduceert een DR/BDR het aantal volledige adjacencies. Hoogste interfacepriority wint; priority 0 sluit een router uit. Bij gelijke priority wint de hoogste router-ID.',
          'De verkiezing is niet-preemptive: een later gestarte betere kandidaat neemt de rol niet automatisch over. DROTHERs zijn onderling normaal 2-Way.'
        ],commands:`interface g0/0\n ip ospf priority 200\nshow ip ospf neighbor\nshow ip ospf interface g0/0`,verify:['DR en BDR volgens ontwerp','DROTHER-relaties zijn 2-Way','DR/BDR-relaties zijn Full']},
        {id:'2.4',title:'Modify and Verify Single-Area OSPFv2',points:[
          'Hello/dead timers, area, authenticatie, MTU en netwerktype moeten compatibel zijn. Cost kan direct worden gezet of uit interfacebandbreedte en reference bandwidth voortkomen.',
          'Advertiseer een aanwezige default route met default-information originate. Controleer eerst of de ASBR zelf 0.0.0.0/0 in zijn routingtabel heeft.'
        ],commands:`router ospf 10\n auto-cost reference-bandwidth 100000\n default-information originate\ninterface g0/0\n ip ospf cost 20\n ip ospf hello-interval 10\n ip ospf dead-interval 40`,verify:['show ip ospf interface bevestigt timers en cost','Buren zien O*E2-default','End-to-end ping en traceroute slagen']}
      ],
      lab:{title:'Enkel-area OSPF ontwerpen',task:'Configureer drie routers met een point-to-pointlink, één gedeeld Ethernetsegment en passieve LANs. Stuur vanaf de edge een default route door.',success:['Unieke router-ID’s','Correcte DR/BDR','LANs bereikbaar','Default route alleen vanuit edge']},
      pitfalls:['Wildcard 0.0.0.0 matcht exact één interfaceadres.','Process-id is niet de area-id.','Een timer-mismatch blokkeert adjacency.'],
      questions:[
        {q:'Welke router wordt bij gelijke OSPF-priority DR?',o:['De hoogste router-ID','De laagste cost','De laagste router-ID','De hoogste process-id'],a:0,e:'Router-ID is de tiebreaker.'},
        {q:'Wat doet passive-interface?',o:['Het netwerk blijft geadverteerd, maar er worden geen Hellos verstuurd.','Het verwijdert de connected route.','Het schakelt SPF uit.','Het maakt de interface DR.'],a:0,e:'Passief voorkomt buren op een interface zonder de prefix te verbergen.'},
        {q:'Wat is nodig voor normale default-information originate?',o:['Een default route in de lokale routingtabel','Een loopback met /32','Priority 0','Een DR op elke link'],a:0,e:'OSPF adverteert standaard alleen een bestaande default.'}
      ]
    },
    {
      id:3,title:'Network Security Concepts',color:'#ee5253',
      summary:'Herken dreigingsactoren, aanvalsvormen en verdedigingslagen en verbind technische maatregelen met vertrouwelijkheid, integriteit en beschikbaarheid.',
      diagram:{type:'defense',nodes:['Threat actor','Perimeter','Network','Endpoint','Data'],links:[[0,1,'attempt'],[1,2,'filter'],[2,3,'segment'],[3,4,'protect']]},
      sections:[
        {id:'3.1',title:'Threat Landscape and Actors',points:['Cyberrisico ontstaat door de combinatie van dreiging, kwetsbaarheid en impact. Interne fouten, georganiseerde criminaliteit, hacktivisten en statelijke actoren verschillen in middelen en motief.','Indicatoren en threat intelligence helpen prioriteren, maar assetinventaris, patching en least privilege blijven de basis.'],commands:`show users\nshow logging\nshow clock`,verify:['Assets en beheerders bekend','Logs hebben correcte tijd','Ongebruikelijke toegang onderzocht']},
        {id:'3.2',title:'Malware and Common Network Attacks',points:['Virussen hebben een hostbestand nodig; worms verspreiden zelfstandig; trojans misleiden de gebruiker; ransomware versleutelt of blokkeert data. Social engineering richt zich op menselijke beslissingen.','Reconnaissance, access en denial-of-service kunnen elkaar opvolgen. Spoofing vervalst identiteit; man-in-the-middle onderschept of wijzigt verkeer.'],commands:`show processes cpu sorted\nshow interfaces counters errors\nshow control-plane host open-ports`,verify:['CPU en verkeer hebben baseline','Onnodige services gesloten','Incidentpad bevat isolatie en bewaring van bewijs']},
        {id:'3.3',title:'Protocol Vulnerabilities',points:['IP biedt op zichzelf geen bronauthenticatie. Fragmentatie, spoofing en ICMP-misbruik vragen filtering en rate limits zonder legitieme foutmeldingen volledig te blokkeren.','TCP is gevoelig voor SYN-flooding en sessiemisbruik; UDP heeft geen handshake en is bruikbaar voor reflectie/amplificatie. DNS, DHCP, HTTP en e-mail vragen elk eigen bescherming.'],commands:`show access-lists\nshow ip traffic\nshow tcp brief all`,verify:['Filters blokkeren ongeldige bronranges','Retourverkeer blijft werken','Control-planebelasting blijft begrensd']},
        {id:'3.4',title:'Security Best Practices and Cryptography',points:['Defense in depth combineert segmentatie, AAA, patches, back-ups, monitoring, fysieke beveiliging en een incidentplan. Geen enkele maatregel dekt alle aanvalspaden.','Symmetrische encryptie is snel; asymmetrische cryptografie helpt bij sleuteluitwisseling en digitale handtekeningen. Hashes leveren integriteitsbewijs; certificaten binden een publieke sleutel aan een identiteit.'],commands:`ip ssh version 2\nservice timestamps log datetime msec\nlogging host 192.0.2.50`,verify:['Beheer is versleuteld','Back-uprestore getest','Logging en tijdsynchronisatie actief']}
      ],
      lab:{title:'Defense-in-depth beoordeling',task:'Maak voor een klein bedrijfsnetwerk een asset-, dreiging- en maatregelentabel en verifieer beheerprotocollen, logging, segmentatie en herstel.',success:['CIA-impact per asset','Minstens twee onafhankelijke verdedigingslagen','Meetbare detectiesignalen','Herstelstap getest']},
      pitfalls:['Encryptie vervangt geen authenticatie of autorisatie.','Een hash is geen encryptie.','Alle ICMP blokkeren maakt diagnose en PMTUD moeilijker.'],
      questions:[
        {q:'Welke maatregel beperkt laterale beweging na een endpointcompromis?',o:['Segmentatie','Een langere banner','Een extra DNS-alias','Alleen NAT'],a:0,e:'Segmentatie verkleint bereikbare zones en afdwingpunten.'},
        {q:'Welke cryptografische functie levert vooral integriteitsbewijs?',o:['Hashfunctie','NAT','DHCP','QoS'],a:0,e:'Een gewijzigde invoer hoort een andere digest te produceren.'},
        {q:'Waarom is defense in depth nuttig?',o:['Een tweede laag kan een falende eerste laag opvangen.','Elke laag gebruikt hetzelfde wachtwoord.','Het verwijdert de noodzaak voor logging.','Het maakt patches overbodig.'],a:0,e:'Onafhankelijke controles verkleinen single points of failure.'}
      ]
    },
    {
      id:4,title:'ACL Concepts',color:'#ff6b6b',
      summary:'Ontwerp IPv4-ACLs met correcte volgorde, wildcardmaskers en plaatsing voordat je ze op interfaces toepast.',
      diagram:{type:'acl',nodes:['Source','R1 ACL','Destination','Denied host'],links:[[0,1,'permit'],[1,2,'forward'],[3,1,'deny']]},
      sections:[
        {id:'4.1',title:'Purpose and Operation of ACLs',points:['Een ACL bestaat uit geordende ACEs. IOS stopt bij de eerste match; zonder match geldt een impliciete deny any aan het einde.','Inbound filtering gebeurt vóór de routebeslissing; outbound filtering erna. Eén IPv4-ACL per protocol, richting en interface kan actief zijn.'],commands:`show access-lists\nshow ip interface g0/0`,verify:['Richting en interface gedocumenteerd','Tellers tonen verwachte matches','Impliciete deny bewust meegenomen']},
        {id:'4.2',title:'Wildcard Masks',points:['Een wildcardbit 0 moet overeenkomen; bit 1 wordt genegeerd. Een subnetwildcard is meestal het omgekeerde masker, bijvoorbeeld /24 naar 0.0.0.255.','host 192.0.2.10 is gelijk aan 192.0.2.10 0.0.0.0; any is gelijk aan 0.0.0.0 255.255.255.255. Niet-contigue wildcards zijn mogelijk maar lastiger te beoordelen.'],commands:`access-list 10 permit 192.0.2.0 0.0.0.255\naccess-list 10 permit host 198.51.100.10`,verify:['Wildcard selecteert exact bedoelde hosts','Geen onbedoeld groter bereik']},
        {id:'4.3',title:'ACL Design Guidelines and Types',points:['Standaard-ACLs kijken alleen naar bron-IPv4 en staan doorgaans dicht bij de bestemming. Extended ACLs kijken ook naar protocol, bestemming en poorten en staan meestal dicht bij de bron.','Specifieke regels horen vóór algemene regels. Gebruik remark, sequence numbers en een expliciet wijzigingsplan; test eerst zonder beheerconnectiviteit af te snijden.'],commands:`ip access-list extended USERS_TO_DNS\n 10 remark Allow DNS only\n 20 permit udp 192.0.2.0 0.0.0.255 host 198.51.100.53 eq 53\n 30 permit tcp 192.0.2.0 0.0.0.255 host 198.51.100.53 eq 53`,verify:['Naam beschrijft intentie','Volgorde specifiek naar algemeen','Plaatsing minimaliseert ongewenst verkeer']}
      ],
      lab:{title:'ACL op papier ontwerpen',task:'Vertaal een beleid voor gebruikers, DNS, web en beheer naar geordende ACEs. Simuleer per testpakket de eerste match voordat je configureert.',success:['Bron en bestemming correct','TCP/UDP-poorten correct','Impliciete deny geadresseerd','Beheerpad behouden']},
      pitfalls:['ACL-volgorde is functioneel gedrag.','Een subnetmasker is niet automatisch de juiste wildcardnotatie.','Een ACL filtert pas na toepassing op een interface of VTY.'],
      questions:[
        {q:'Wat gebeurt er bij de eerste passende ACE?',o:['De bijbehorende actie wordt uitgevoerd en verdere ACEs worden niet bekeken.','Alle ACEs worden opgeteld.','Alleen de laatste ACE telt.','De route wordt altijd verwijderd.'],a:0,e:'ACL-verwerking is first match.'},
        {q:'Welke wildcard hoort bij een /26-subnetmasker?',o:['0.0.0.63','255.255.255.192','0.0.0.192','255.255.255.63'],a:0,e:'255.255.255.192 omgekeerd is 0.0.0.63.'},
        {q:'Waar plaats je een extended ACL doorgaans?',o:['Dicht bij de bron','Dicht bij de bestemming','Alleen op loopbacks','Uitsluitend outbound'],a:0,e:'Zo wordt ongewenst verkeer vroeg gestopt.'}
      ]
    },
    {
      id:5,title:'ACLs for IPv4 Configuration',color:'#c44569',
      summary:'Configureer, wijzig en verifieer standaard- en extended IPv4-ACLs zonder legitiem beheer- of retourverkeer te blokkeren.',
      diagram:{type:'acl-config',nodes:['Users','R1','Server LAN','Admin'],links:[[0,1,'extended in'],[1,2,'filtered'],[3,1,'VTY ACL']]},
      sections:[
        {id:'5.1',title:'Configure Standard IPv4 ACLs',points:['Genummerde standaard ACLs gebruiken 1–99 of 1300–1999; named ACLs zijn leesbaarder en ondersteunen sequencebeheer. Ze matchen alleen het bronadres.','Pas toe met ip access-group naam in|out. Controleer dat verkeer de gekozen interface werkelijk in die richting passeert.'],commands:`ip access-list standard MGMT_SOURCES\n 10 permit 192.0.2.0 0.0.0.255\ninterface g0/1\n ip access-group MGMT_SOURCES out`,verify:['show access-lists','show ip interface g0/1','Permit- en denytests uitgevoerd']},
        {id:'5.2',title:'Modify IPv4 ACLs',points:['In named ACL-configuratiemodus kun je een ACE via sequence number verwijderen en op een nieuw nummer invoegen. Resequence maakt ruimte zonder de logica te veranderen.','Wijzig live filters gecontroleerd: leg baseline vast, behoud een out-of-band pad en controleer hit counters na elke stap.'],commands:`ip access-list standard MGMT_SOURCES\n no 10\n 10 permit 192.0.2.0 0.0.0.127\nexit\nip access-list resequence MGMT_SOURCES 10 10`,verify:['show access-lists toont bedoelde volgorde','Geen onverwachte tellerstijging','Beheer blijft bereikbaar']},
        {id:'5.3',title:'Secure VTY Access with an ACL',points:['access-class filtert inkomende VTY-sessies op bronadres; dit is anders dan ip access-group op een dataplane-interface. Combineer met SSH en login local of AAA.','Een management-ACL is geen vervanging voor sterke authenticatie. Test vanaf een toegestane én geweigerde bron.'],commands:`ip access-list standard VTY_ADMIN\n permit host 192.0.2.50\nline vty 0 15\n access-class VTY_ADMIN in\n transport input ssh\n login local`,verify:['SSH vanaf adminhost slaagt','Andere bron wordt geweigerd','Console of OOB-pad beschikbaar']},
        {id:'5.4',title:'Configure Extended IPv4 ACLs',points:['Extended ACEs noemen protocol, bron, bestemming en optioneel bron- of bestemmingspoort. established matcht alleen TCP met ACK of RST en is geen volledige stateful firewall.','Gebruik eq voor één service, range voor poortbereik en icmp-types wanneer alleen specifieke controlemeldingen zijn toegestaan.'],commands:`ip access-list extended USERS_OUT\n 10 permit udp 192.0.2.0 0.0.0.255 any eq domain\n 20 permit tcp 192.0.2.0 0.0.0.255 any eq 443\n 30 permit icmp 192.0.2.0 0.0.0.255 any echo\ninterface g0/0\n ip access-group USERS_OUT in`,verify:['DNS en HTTPS slagen','Niet-toegestane service faalt','Hit counters corresponderen met tests']}
      ],
      lab:{title:'Minimaal toegangsbeleid',task:'Laat een gebruikers-LAN alleen DNS, HTTPS en noodzakelijke ICMP-diagnose starten. Beperk VTY tot één adminhost en bewijs alle permit/deny-paden.',success:['ACL dicht bij bron','VTY afzonderlijk beschermd','Tellers als bewijs','Geen officiële assessmentitems gebruikt']},
      pitfalls:['Standaard ACLs zien geen bestemming.','access-class en ip access-group zijn niet uitwisselbaar.','Een vergeten permit leidt door implicit deny tot uitval.'],
      questions:[
        {q:'Welk commando past een ACL op VTY-lijnen toe?',o:['access-class','ip access-group','service-policy','ip nat inside'],a:0,e:'VTY gebruikt access-class.'},
        {q:'Waarom zijn sequence numbers nuttig?',o:['Je kunt gericht regels invoegen of verwijderen.','Ze versleutelen de ACL.','Ze kiezen de routingmetric.','Ze activeren stateful inspectie.'],a:0,e:'Sequence numbers maken gecontroleerd onderhoud mogelijk.'},
        {q:'Wat matcht tcp established?',o:['TCP-pakketten met ACK of RST gezet','Elke nieuwe TCP-SYN','Alle UDP-antwoorden','Alleen HTTPS'],a:0,e:'Het is een eenvoudige vlagcontrole, geen sessietabel.'}
      ]
    },
    {
      id:6,title:'NAT for IPv4',color:'#10ac84',
      summary:'Vertaal private en publieke IPv4-adressen met static NAT, dynamic NAT en PAT en diagnoseer vertalingen stap voor stap.',
      diagram:{type:'nat',nodes:['Inside local','NAT router','Inside global','Internet'],links:[[0,1,'10.0.0.10'],[1,2,'203.0.113.10'],[2,3,'routable']]},
      sections:[
        {id:'6.1',title:'NAT Characteristics and Terminology',points:['Inside local is het bronadres zoals binnen gezien; inside global vertegenwoordigt die host buiten. Outside local/global beschrijven de externe host vanuit beide perspectieven.','NAT spaart publieke IPv4-adressen en verbergt interne adressering, maar doorbreekt end-to-end-adressering en kan protocollen met ingebedde adressen bemoeilijken.'],commands:`show ip nat translations\nshow ip nat statistics`,verify:['Inside/outside interfaces correct','Terminologie gekoppeld aan echte pakketten']},
        {id:'6.2',title:'Static NAT',points:['Static NAT levert een vaste één-op-één mapping en past bij een intern aangeboden dienst. De publieke mapping moet extern naar de NAT-router worden gerouteerd.','Markeer interfaces met ip nat inside/outside; de mapping alleen bepaalt niet automatisch firewallbeleid.'],commands:`ip nat inside source static 10.0.0.10 203.0.113.10\ninterface g0/0\n ip nat inside\ninterface g0/1\n ip nat outside`,verify:['Translation bestaat permanent','Extern pad routeert naar inside global','Dienst en ACL apart beveiligd']},
        {id:'6.3',title:'Dynamic NAT',points:['Dynamic NAT koppelt toegestane inside-localadressen tijdelijk aan een pool van publieke adressen. Is de pool vol, dan wachten nieuwe hosts tot een vertaling verloopt.','De ACL selecteert te vertalen bronnen en is hier geen directe permit/deny-filter op de interface.'],commands:`ip nat pool PUBLIC 203.0.113.10 203.0.113.14 netmask 255.255.255.248\naccess-list 1 permit 10.0.0.0 0.0.0.255\nip nat inside source list 1 pool PUBLIC`,verify:['Poolgebruik zichtbaar','Alleen bedoelde bronprefix vertaald','Pooluitputting getest']},
        {id:'6.4',title:'PAT',points:['PAT multiplexeert veel inside-localhosts op één of enkele publieke adressen met unieke Layer-4-poorten; overload activeert dit gedrag.','Een interfaceadres kan als inside global dienen. Retourverkeer wordt aan de translation table gekoppeld; unsolicited inbound verkeer heeft geen bestaande entry.'],commands:`access-list 1 permit 10.0.0.0 0.0.0.255\nip nat inside source list 1 interface g0/1 overload`,verify:['Meerdere hosts delen één global adres','Poortnummers onderscheiden flows','Counters stijgen tijdens verkeer']},
        {id:'6.5',title:'NAT Verification and NAT64',points:['Diagnoseer in volgorde: interfaceadres/routing, inside/outside-markering, ACL-match, translation en return route. clear ip nat translation verwijdert state en verstoort actieve sessies.','NAT64 kan IPv6-clients met IPv4-diensten laten communiceren, maar is een migratiemechanisme; dual stack behoudt native bereikbaarheid waar mogelijk.'],commands:`show ip nat translations verbose\nshow ip nat statistics\ndebug ip nat`,verify:['Debug alleen gecontroleerd gebruikt','Retourroute aanwezig','Translation verdwijnt volgens timeout']}
      ],
      lab:{title:'PAT met aangeboden dienst',task:'Geef een LAN internettoegang via PAT en publiceer één labwebserver via static NAT. Bewijs routing, translations, counters en beperk diensttoegang met een ACL.',success:['Inside/outside correct','PAT deelt adres','Static mapping bereikbaar','Beveiliging los van NAT getest']},
      pitfalls:['NAT is geen firewall.','Verkeerde inside/outside-markering levert geen vertaling.','De NAT-selectie-ACL is niet hetzelfde als een interfacefilter.'],
      questions:[
        {q:'Welke NAT-vorm deelt één publiek adres via poorten?',o:['PAT','Static NAT zonder overload','OSPF','GRE'],a:0,e:'PAT gebruikt Layer-4-poorten om sessies te onderscheiden.'},
        {q:'Wat gebeurt bij een uitgeputte dynamic-NAT-pool?',o:['Nieuwe vertalingen kunnen niet worden aangemaakt.','IOS schakelt automatisch over op IPv6.','Alle bestaande entries verdwijnen.','De ACL wordt een permit any.'],a:0,e:'Zonder beschikbaar global adres kan geen nieuwe mapping ontstaan.'},
        {q:'Waar begin je bij ontbrekende NAT-vertalingen?',o:['Controleer routing, interface-rollen en selectie-ACL.','Wis altijd eerst de configuratie.','Verander OSPF-area.','Schakel logging uit.'],a:0,e:'Deze drie voorwaarden bepalen of verkeer de NAT-regel bereikt en matcht.'}
      ]
    },
    {
      id:7,title:'WAN Concepts',color:'#0abde3',
      summary:'Vergelijk WAN-topologieën en transportopties op bereik, beheer, SLA, kosten, beveiliging en redundantie.',
      diagram:{type:'wan',nodes:['Branch','Provider','HQ','Cloud','Remote user'],links:[[0,1,'CE-PE'],[1,2,'WAN'],[1,3,'Internet/MPLS'],[4,3,'broadband']]},
      sections:[
        {id:'7.1',title:'Purpose and Operations of WANs',points:['Een WAN verbindt geografisch gescheiden LANs. De klant beheert CPE/CE; de provider beheert zijn PE- en kerninfrastructuur. Een demarcation point scheidt verantwoordelijkheden.','Bandbreedte, latency, jitter, verlies, beschikbaarheid en SLA bepalen of een verbinding een toepassing ondersteunt. Redundantie moet fysieke en providerafhankelijkheden meenemen.'],commands:`show interfaces serial 0/0/0\nshow controllers serial 0/0/0\ntraceroute 198.51.100.10`,verify:['Demarc en eigenaar bekend','SLA-metrics meetbaar','Primair en backup delen geen verborgen SPOF']},
        {id:'7.2',title:'Traditional and Modern WAN Connectivity',points:['Leased lines leveren voorspelbaar point-to-pointtransport maar kunnen duur zijn. Provider Ethernet en MPLS bieden beheerde schaal; oudere circuit- of celltechnieken zijn grotendeels legacy.','SD-WAN gebruikt policies en meerdere underlays om verkeer centraal te sturen. De overlay neemt niet weg dat iedere underlay nog bereik, capaciteit en beveiliging nodig heeft.'],commands:`show interfaces description\nshow ip route\nshow policy-map interface`,verify:['Underlayroutes gezond','SLA per pad bekend','Failover getest']},
        {id:'7.3',title:'Internet-Based Connectivity',points:['Broadband, fiber, cable, DSL, cellular en satelliet verschillen in asymmetrie, latency, datalimiet en beschikbaarheid. Internettransport vraagt doorgaans een VPN voor vertrouwelijkheid en authenticatie.','Remote-access VPN bedient individuele gebruikers; site-to-site VPN verbindt netwerken. Een tweede internetprovider helpt alleen als stroom, last mile en edgeapparatuur ook voldoende redundant zijn.'],commands:`ping 198.51.100.1 repeat 20\ntraceroute 198.51.100.1\nshow crypto session`,verify:['Verlies en latency vastgelegd','VPN-state gezond','Failoverpad functioneert']}
      ],
      lab:{title:'WAN-keuzematrix',task:'Vergelijk voor HQ, filiaal en thuiswerker drie WAN-opties op SLA, latency, kosten, beveiliging en failover en motiveer een ontwerp.',success:['Applicatie-eisen eerst','SPOFs benoemd','Encryptiebehoefte expliciet','Meetplan toegevoegd']},
      pitfalls:['Advertised bandwidth is niet hetzelfde als gegarandeerde throughput.','Een overlay kan geen defecte underlay repareren.','Twee logische paden kunnen dezelfde fysieke last mile delen.'],
      questions:[
        {q:'Wat markeert de demarc?',o:['De grens tussen klant- en providerverantwoordelijkheid','Het begin van elke VLAN','De OSPF DR','De DHCP-lease'],a:0,e:'De demarc maakt beheer- en storingsverantwoordelijkheid duidelijk.'},
        {q:'Welke metric raakt real-time spraak sterk?',o:['Jitter','Hostnaam','VLAN-naam','Flashgeheugen'],a:0,e:'Variatie in pakketvertraging verstoort playout.'},
        {q:'Waarom is internettransport vaak met VPN gecombineerd?',o:['Voor authenticatie en vertrouwelijkheid over een onbetrouwbaar netwerk','Om NAT altijd te verwijderen','Om latency nul te maken','Om een publieke SLA te garanderen'],a:0,e:'Een VPN beschermt de overlay, niet de fysieke performance.'}
      ]
    },
    {
      id:8,title:'VPN and IPsec Concepts',color:'#5f27cd',
      summary:'Begrijp VPN-modellen en hoe IPsec met IKE, security associations, ESP en cryptografische algoritmen een beveiligde tunnel vormt.',
      diagram:{type:'vpn',nodes:['Site A','IKE SA','IPsec tunnel','Site B','Remote user'],links:[[0,1,'negotiate'],[1,2,'keys'],[2,3,'ESP'],[4,3,'remote access']]},
      sections:[
        {id:'8.1',title:'VPN Technology and Types',points:['Een VPN creëert een logische private verbinding over een gedeeld netwerk. Site-to-site koppelt gateways en netwerken; remote access koppelt een endpoint aan een organisatie.','Client-based VPN gebruikt software; clientless toegang beperkt zich vaak tot webapplicaties. Full tunnel stuurt al het verkeer via de organisatie, split tunnel alleen geselecteerde prefixes.'],commands:`show crypto session\nshow crypto ikev2 sa\nshow crypto ipsec sa`,verify:['Tunneltype past bij use case','Routes en selectors correct','DNS- en internetpad bewust gekozen']},
        {id:'8.2',title:'IPsec Services and Protocols',points:['IPsec kan data-origin authentication, integriteit, anti-replay en vertrouwelijkheid leveren. AH authenticeert maar versleutelt niet; ESP is gebruikelijk en kan encryptie plus authenticatie bieden.','Transport mode beschermt de payload van het oorspronkelijke IP-pakket; tunnel mode kapselt het volledige oorspronkelijke pakket in en past bij gateway-naar-gateway VPNs.'],commands:`show crypto ipsec sa | include encaps|decaps|replay`,verify:['Encap- en decapcounters stijgen','Anti-replay actief','Tunnel mode waar netwerk-naar-netwerk vereist']},
        {id:'8.3',title:'IKE and Cryptographic Choices',points:['IKE authenticeert peers, onderhandelt algoritmen en maakt SAs en sleutelmateriaal. De peers moeten proposals, identiteit, authenticatie en traffic selectors compatibel configureren.','Gebruik actuele combinaties zoals AES, SHA-2 en sterke Diffie-Hellmangroepen volgens organisatiebeleid. PFS zorgt dat nieuwe IPsec-sleutels niet uitsluitend van eerder sleutelmateriaal afhangen.'],commands:`show crypto ikev2 proposal\nshow crypto ikev2 sa detail\nshow crypto ipsec profile`,verify:['Peeridentity klopt','IKE SA is READY','IPsec SA selectors spiegelen elkaar']}
      ],
      lab:{title:'IPsec diagnoseflow',task:'Analyseer een fictieve tunnel met werkende IKE maar nul decaps. Controleer selectors, routes, NAT-exemptie, peerpolicy en counters en noteer het beslispad.',success:['Control- en dataplane onderscheiden','Selectors symmetrisch','Relevant verkeer gegenereerd','Counters als bewijs']},
      pitfalls:['Een IKE SA bewijst nog geen werkend datapad.','Encryptie zonder peer-authenticatie is onvoldoende.','Mismatch in traffic selectors kan een ogenschijnlijk gezonde tunnel onbruikbaar maken.'],
      questions:[
        {q:'Welk IPsec-protocol biedt doorgaans encryptie?',o:['ESP','AH','ARP','LLDP'],a:0,e:'ESP kan confidentiality en integriteit leveren.'},
        {q:'Welke taak voert IKE uit vóór IPsec-dataverkeer?',o:['Peers authenticeren en SAs/sleutels onderhandelen','Ethernetframes schakelen','DHCP-leases uitdelen','QoS-queues legen'],a:0,e:'IKE bouwt het control-planevertrouwen voor IPsec.'},
        {q:'Wat beschermt tunnel mode?',o:['Het volledige oorspronkelijke IP-pakket in een nieuw pakket','Alleen de TCP-poort','Alleen de Ethernet-FCS','Uitsluitend DNS'],a:0,e:'Tunnel mode kapselt het originele pakket in.'}
      ]
    },
    {
      id:9,title:'QoS Concepts',color:'#00d2d3',
      summary:'Classificeer netwerkverkeer en beheer congestie met marking, queuing, shaping, policing en een passend QoS-model.',
      diagram:{type:'qos',nodes:['Voice','Video','Data','QoS edge','WAN'],links:[[0,3,'EF'],[1,3,'AF'],[2,3,'BE'],[3,4,'queues']]},
      sections:[
        {id:'9.1',title:'Network Transmission Quality',points:['Congestie veroorzaakt delay, jitter en packet loss. Serialization, propagation, processing en queuing dragen elk bij aan end-to-end latency.','Real-timeverkeer verdraagt weinig delay en jitter; TCP-data kan verlies vaak herstellen maar throughput daalt. Een baseline moet per richting en tijdvenster worden gemeten.'],commands:`show interfaces\nshow policy-map interface\nping 198.51.100.10 repeat 50`,verify:['Drops en queueing zichtbaar','Latency en jitter gebaselined','Bottleneckinterface geïdentificeerd']},
        {id:'9.2',title:'Traffic Characteristics and Queuing',points:['Voice is klein, periodiek en gevoelig voor vertraging; video is bursty en bandbreedte-intensief; data varieert sterk. Classificatie gebruikt betrouwbare kenmerken en marking bewaart de klasse downstream.','FIFO behandelt aankomstvolgorde; class-based queuing reserveert middelen; een strict priority queue helpt real-timeverkeer maar moet begrensd zijn om starvation te voorkomen.'],commands:`class-map match-any REALTIME\n match dscp ef\npolicy-map WAN-EDGE\n class REALTIME\n  priority percent 10`,verify:['Class counters stijgen','Priority is begrensd','Andere classes krijgen service']},
        {id:'9.3',title:'QoS Models and Tools',points:['Best effort geeft geen differentiatie. IntServ reserveert per flow maar schaalt beperkt; DiffServ classificeert en markeert aggregaten en is gangbaar in ondernemingsnetwerken.','Policing dropt of remarkt boven limiet; shaping buffert om een gemiddelde rate af te vlakken. Congestion avoidance zoals WRED kan vroeg selectief droppen.'],commands:`policy-map WAN-OUT\n class BUSINESS\n  bandwidth percent 30\n class class-default\n  fair-queue\ninterface g0/1\n service-policy output WAN-OUT`,verify:['Policy in juiste richting','Offered en drop rates beoordeeld','Marking trust boundary gedocumenteerd']}
      ],
      lab:{title:'QoS voor smalle WAN-link',task:'Ontwerp classes voor voice, videoconference, businessdata en default. Bereken bandbreedtegrenzen en controleer counters onder congestie.',success:['Classificatie reproduceerbaar','Voice begrensde priority','Businessminimum','Default niet uitgehongerd']},
      pitfalls:['QoS creëert geen extra bandbreedte.','DSCP van ongecontroleerde endpoints mag je niet blind vertrouwen.','Shaping en policing reageren verschillend op overschrijding.'],
      questions:[
        {q:'Welke QoS-tool buffert excess verkeer om de verzendsnelheid af te vlakken?',o:['Shaping','Policing','NAT','OSPF'],a:0,e:'Shaping vertraagt pakketten via een wachtrij.'},
        {q:'Waarom begrens je een priority queue?',o:['Om starvation van andere classes te voorkomen','Om DSCP te verwijderen','Om ARP te versnellen','Om routes samen te vatten'],a:0,e:'Onbegrensde prioriteit kan alle capaciteit opeisen.'},
        {q:'Welk model werkt met geaggregeerde serviceklassen?',o:['DiffServ','Best effort zonder classes','ARP','STP'],a:0,e:'DiffServ classificeert en markeert gedragaggregaten.'}
      ]
    },
    {
      id:10,title:'Network Management',color:'#2e86de',
      summary:'Ontdek buren, synchroniseer tijd, verzamel telemetry en logs en beheer configuraties en IOS-images gecontroleerd.',
      diagram:{type:'management',nodes:['Devices','NTP','SNMP/NMS','Syslog','Repository'],links:[[0,1,'time'],[0,2,'metrics'],[0,3,'events'],[0,4,'backup/image']]},
      sections:[
        {id:'10.1',title:'Device Discovery with CDP and LLDP',points:['CDP is Cisco-eigen; LLDP is vendorneutraal. Beide leren direct aangesloten buren, poortnamen en capabilities en zijn nuttig voor topologie en foutlokalisatie.','Discovery lekt informatie op onbetrouwbare poorten. Schakel het globaal of per interface uit waar geen infrastructuurburen horen.'],commands:`show cdp neighbors detail\nshow lldp neighbors detail\ninterface g0/10\n no cdp enable\n no lldp transmit\n no lldp receive`,verify:['Buren op juiste lokale poort','Geen discovery op externe accesspoort']},
        {id:'10.2',title:'NTP',points:['NTP maakt logcorrelatie, certificaatvalidatie en incidentanalyse betrouwbaar. Stratum beschrijft afstand tot een referentieklok; een lager nummer is dichterbij, niet automatisch veiliger.','Gebruik meerdere vertrouwde bronnen en authenticatie waar ondersteund. timezone verandert presentatie; NTP synchroniseert de onderliggende tijd.'],commands:`clock timezone CET 1 0\nntp server 192.0.2.20 prefer\nshow ntp associations\nshow clock detail`,verify:['Klok is synchronized','Bron bereikbaar','Logs tonen consistente timestamps']},
        {id:'10.3',title:'SNMP and Syslog',points:['SNMP manager vraagt objecten uit of ontvangt traps/informs van agents. SNMPv3 biedt authenticatie en privacy; community strings van v1/v2c zijn gedeelde geheimen zonder sterke bescherming.','Syslog severity loopt van 0 emergencies tot 7 debugging. Kies buffer, externe server en trapniveau zodat belangrijke events behouden blijven zonder ruisexplosie.'],commands:`snmp-server group NMS v3 priv\nlogging host 192.0.2.50\nlogging trap warnings\nshow logging`,verify:['SNMPv3 gebruikt auth en priv','Extern log ontvangt events','Tijd en hostname kloppen']},
        {id:'10.4',title:'Router and Switch File Maintenance',points:['running-config staat in RAM; startup-config in NVRAM. Kopieer configuraties naar een gecontroleerde repository en verifieer inhoud en herstelprocedure.','Bestandssystemen en beschikbare ruimte verschillen per platform. Gebruik dir, show file systems en verify vóór je een image als bootdoel instelt.'],commands:`show file systems\ndir flash:\ncopy running-config scp:\nverify /md5 flash:<image.bin>`,verify:['Back-up leesbaar','Hash komt overeen','Voldoende flashruimte','Restoreprocedure gedocumenteerd']},
        {id:'10.5',title:'IOS Image Management and Licensing',points:['Een IOS-upgrade vraagt platformcompatibiliteit, voldoende geheugen, image-integriteit, bootvariable, configuratieback-up en rollbackplan. Verwijder oude recoveryimages niet zonder bewezen alternatief.','Licensing verschilt per platform en release. Controleer status en entitlement, maar sla geen tokens of accountgegevens in projectbestanden op.'],commands:`show version\nshow boot\nshow license summary\nboot system flash:<image.bin>`,verify:['Nieuwe bootvariable correct','Imagehash geverifieerd','Rollbackimage behouden','Licentiestatus bekend']}
      ],
      lab:{title:'Beheerplane inrichten',task:'Configureer NTP en remote syslog, inventariseer buren, maak een configuratieback-up en schrijf een niet-destructief IOS-upgradeplan.',success:['Tijd gesynchroniseerd','Logs extern ontvangen','Topologie gecontroleerd','Hash en rollback in plan']},
      pitfalls:['SNMPv2c community is geen moderne encryptie.','Severity 7 overal versturen kan systemen overspoelen.','Een copy-commando alleen bewijst geen herstelbare back-up.'],
      questions:[
        {q:'Welk protocol is de vendorneutrale buurontdekking?',o:['LLDP','CDP','HSRP','PAT'],a:0,e:'LLDP is IEEE-gestandaardiseerd.'},
        {q:'Welke syslogseverity is het meest ernstig?',o:['0','7','100','255'],a:0,e:'Emergencies gebruikt severity 0.'},
        {q:'Waarom verifieer je een IOS-imagehash?',o:['Om integriteit van het bestand te controleren','Om OSPF-cost te berekenen','Om DHCP te starten','Om VLANs te verwijderen'],a:0,e:'De hash detecteert beschadiging of een verkeerd bestand.'}
      ]
    },
    {
      id:11,title:'Network Design',color:'#8395a7',
      summary:'Ontwerp een schaalbaar, modulair en fouttolerant campusnetwerk en kies hardware en routing op basis van meetbare eisen.',
      diagram:{type:'hierarchy',nodes:['Core','Distribution A','Distribution B','Access 1','Access 2','Services'],links:[[0,1,'L3'],[0,2,'L3'],[1,3,'uplink'],[2,4,'uplink'],[1,5,'policy']]},
      sections:[
        {id:'11.1',title:'Hierarchical Network Design',points:['Het accesslaagmodel verbindt endpoints, distribution aggregeert en past beleid toe, core transporteert snel en voorspelbaar. In kleinere locaties kan collapsed core distribution en core combineren.','Modulariteit beperkt blast radius en maakt capaciteit, adressen en veranderingen herhaalbaar. Redundantie moet convergentie én failure domains bewust ontwerpen.'],commands:`show interfaces trunk\nshow spanning-tree root\nshow ip route summary`,verify:['Laagrollen duidelijk','Gateway- en rootplaatsing afgestemd','Redundante paden getest']},
        {id:'11.2',title:'Scalable Network Characteristics',points:['Schaalbaarheid vraagt hiërarchie, samenvatting, gestandaardiseerde blokken, redundantie, EtherChannel en voorspelbare routing. Beschikbaarheid is een end-to-end eigenschap, niet alleen dubbele links.','Meet utilization, error rates, flowverdeling en convergentietijd voordat je uitbreidt. Overprovisioning zonder baseline verplaatst soms alleen het knelpunt.'],commands:`show etherchannel summary\nshow interfaces counters errors\nshow processes cpu sorted`,verify:['Capaciteitsbaseline','Geen single uplink failure','Convergentiedoel gehaald']},
        {id:'11.3',title:'Hardware and Routing Design',points:['Kies switches op poortdichtheid, forwarding rate, buffers, uplinks, PoE-budget, redundante voedingen en feature/licentiebehoefte. Datasheets moeten bij worst-case profiel passen.','Layer-3 naar access verkleint STP-domeinen; Layer-2 access kan operationeel eenvoudiger zijn. Kies IGP, summarization en default routes op topologie en beheerbaarheid, niet op gewoonte.'],commands:`show power inline\nshow platform hardware capacity\nshow ip protocols`,verify:['PoE-budget inclusief marge','Forwardingcapaciteit voldoende','Routingfailure domains gedocumenteerd']}
      ],
      lab:{title:'Campusontwerp',task:'Ontwerp voor twee gebouwen een hiërarchisch netwerk met redundante uplinks, gatewayplaatsing, failure domains en capaciteit voor groei.',success:['Eisen traceerbaar','Geen ongemotiveerde SPOF','PoE en uplinks berekend','Convergentietest beschreven']},
      pitfalls:['Meer redundante links zonder control-planeontwerp kan loops veroorzaken.','Een collapsed core is niet per definitie minder professioneel.','Poortcount alleen is geen hardwareselectie.'],
      questions:[
        {q:'Welke laag aggregeert access en past vaak beleid toe?',o:['Distribution','Endpoint','Internet','Physical media'],a:0,e:'Distribution vormt de beleids- en aggregatiegrens.'},
        {q:'Wat verkleint een modulair ontwerp?',o:['De blast radius van storingen en wijzigingen','Het aantal IP-adressen tot nul','De noodzaak voor monitoring','Elke vorm van latency'],a:0,e:'Gestandaardiseerde blokken isoleren effecten.'},
        {q:'Welke factor hoort bij PoE-switchselectie?',o:['Totaal vermogensbudget met marge','Alleen hostnamen','OSPF router-ID','NAT poolnaam'],a:0,e:'Alle gevoede endpoints moeten binnen het budget passen.'}
      ]
    },
    {
      id:12,title:'Network Troubleshooting',color:'#576574',
      summary:'Werk systematisch van symptoom naar oorzaak met documentatie, baselines, laaggerichte tests en bewijs na herstel.',
      diagram:{type:'troubleshoot',nodes:['Define','Collect','Hypothesize','Test','Fix','Verify'],links:[[0,1,'scope'],[1,2,'evidence'],[2,3,'least risky'],[3,4,'cause'],[4,5,'baseline']]},
      sections:[
        {id:'12.1',title:'Network Documentation and Baselines',points:['Actuele fysieke/logische diagrammen, adresplannen, VLANs, circuits, dependencies en configuratieversies versnellen diagnose. Zonder baseline is “traag” niet kwantificeerbaar.','Leg normale latency, throughput, CPU, memory, interfaceerrors en route/neighborstates vast op representatieve tijden. Bescherm gevoelige configuratiegegevens.'],commands:`show tech-support\nshow interfaces\nshow ip route\nshow ip ospf neighbor`,verify:['Timestamp en scope vastgelegd','Baseline vergelijkbaar','Geheimen niet in tickets gekopieerd']},
        {id:'12.2',title:'Troubleshooting Process and Methods',points:['Definieer probleem, impact en wijzigingen; verzamel feiten; vorm een toetsbare hypothese; test de minst risicovolle stap; implementeer gecontroleerd; verifieer en documenteer.','Bottom-up start fysiek, top-down bij applicatie, divide-and-conquer bij een logisch middenpunt. Follow-the-path volgt het echte datapad en is vaak effectiever dan willekeurige show-commando’s.'],commands:`ping 192.0.2.1\ntraceroute 198.51.100.10\nshow arp\nshow mac address-table`,verify:['Hypothese voorspelt uitkomst','Eén variabele per test','Impact na fix volledig hertest']},
        {id:'12.3',title:'Troubleshooting Tools and Symptoms',points:['LEDs, cable tester, TDR, protocol analyzer, SPAN, syslog, SNMP en flowdata zien verschillende lagen. Kies het minst ingrijpende instrument dat de hypothese kan falsificeren.','Fysieke fouten tonen CRC, runts, giants of flaps; duplexproblemen geven late collisions en slechte throughput; congestie geeft output drops zonder noodzakelijk fysieke errors.'],commands:`show interfaces counters errors\nshow interfaces status\ntest cable-diagnostics tdr interface g0/1`,verify:['Counterdelta gemeten','Beide linkeinden gecontroleerd','Toolresultaat aan symptoom gekoppeld']},
        {id:'12.4',title:'Troubleshoot IP Connectivity',points:['Test oplopend: lokale stack, eigen gateway, buurresolution, route, ACL/NAT, remote gateway, dienst. Een succesvolle ping bewijst niet dat DNS, TCP-poort of applicatie gezond is.','Controleer bronadres en VRF/context. Asymmetrische routing kan stateful firewalls en NAT breken ondanks correcte forward route.'],commands:`show ip interface brief\nshow ip route <destination>\nshow access-lists\nshow ip nat translations\ntelnet <host> <port>`,verify:['Juiste broncontext','Forward- en returnpath bekend','Applicatiepoort afzonderlijk getest']}
      ],
      lab:{title:'Mystery outage',task:'Diagnoseer een lab met één fysieke fout, één verkeerde route en één ACL-volgordefout. Noteer voor elke stap hypothese, bewijs, wijziging en regressietest.',success:['Geen willekeurige wijzigingen','Oorzaak per symptoom','Minimaal herstel','Baseline na fix bijgewerkt']},
      pitfalls:['Meerdere wijzigingen tegelijk vernietigen causaal bewijs.','Ping alleen test niet de volledige applicatie.','Counters moeten als delta en aan beide uiteinden worden bekeken.'],
      questions:[
        {q:'Wat doe je vóór een configuratiewijziging in een diagnose?',o:['Een toetsbare hypothese en baseline vastleggen','Alle counters wissen zonder notitie','De router reloaden','Alle ACLs verwijderen'],a:0,e:'Zo weet je wat de test hoort te bewijzen.'},
        {q:'Welke fout past bij veel late collisions?',o:['Duplex-mismatch','Verkeerde DNS-suffix','Ontbrekende NTP-peer','Te lage OSPF-priority'],a:0,e:'Late collisions zijn een klassiek Ethernetduplexsignaal.'},
        {q:'Waarom controleer je het returnpath?',o:['Stateful filtering en NAT kunnen asymmetrische flows breken','Omdat switches altijd asymmetrisch routeren','Om VLANnamen te wijzigen','Om CDP te versleutelen'],a:0,e:'Een sessie heeft werkend verkeer in beide richtingen nodig.'}
      ]
    },
    {
      id:13,title:'Network Virtualization',color:'#8e44ad',
      summary:'Leg uit hoe cloud, hypervisors, virtual switching, overlays en SDN fysieke resources abstraheren en programmeerbaar maken.',
      diagram:{type:'virtualization',nodes:['Apps','VM/Container','vSwitch','Overlay','Physical fabric','Controller'],links:[[0,1,'workload'],[1,2,'vNIC'],[2,3,'segment'],[3,4,'underlay'],[5,3,'policy']]},
      sections:[
        {id:'13.1',title:'Cloud Computing',points:['Cloud levert on-demand resources uit gedeelde pools met automatisering en meetbaar gebruik. IaaS, PaaS en SaaS verschuiven de beheergrens tussen klant en provider.','Public, private, hybrid en community cloud beschrijven eigendom en plaatsing. Beschikbaarheid, dataresidentie, exitstrategie en shared responsibility blijven ontwerpvragen.'],commands:`# Ontwerpcontrole: inventariseer data, identiteit, netwerk en herstel-RTO/RPO`,verify:['Shared-responsibilitygrens','Data- en identityflow','Exit- en herstelplan']},
        {id:'13.2',title:'Virtualization Fundamentals',points:['Een type-1 hypervisor draait direct op hardware; type-2 op een host-OS. VMs bevatten een volledig guest-OS; containers delen doorgaans de hostkernel en zijn lichter maar hebben een andere isolatiegrens.','vNICs koppelen workloads aan virtual switches. Resource overcommit kan efficiënt zijn maar veroorzaakt contention; monitor CPU ready, memory pressure, storage latency en netwerkqueues.'],commands:`# Controleer virtuele NIC, vSwitch, VLAN/segment en fysieke uplink als één pad`,verify:['Workloadsegment correct','Uplinkredundantie','Resourcecontention uitgesloten']},
        {id:'13.3',title:'Network Infrastructure Virtualization',points:['VRF virtualiseert routingtables; VLAN/EVPN/VXLAN segmenteren Layer 2 en overlays; tunnels scheiden logische topologie van de fysieke underlay. Elke abstractielaag vraagt eigen observability.','NFV draait functies zoals firewall of router als software. Schaalbaarheid verbetert alleen wanneer dataplane-capaciteit, state, orchestration en failure handling goed zijn ontworpen.'],commands:`show vrf\nshow ip route vrf <name>\nshow interface tunnel`,verify:['Underlay bereikbaar','Overlay endpoints correct','Tenant-routes geïsoleerd']},
        {id:'13.4',title:'Software-Defined Networking',points:['SDN scheidt beleidsbeslissingen logisch van forwarding en gebruikt een controller voor gecentraliseerde intent en automatisering. De control plane kan logisch centraal maar fysiek redundant zijn.','Northbound APIs bedienen applicaties en intent; southbound protocollen/programmeerinterfaces sturen netwerkapparaten. Closed loop combineert telemetry, analyse en gecontroleerde wijziging.'],commands:`# Controleer controllercluster, device reachability, policy status en dataplane afzonderlijk`,verify:['Controller geen SPOF','Out-of-band beheerpad','Dataplane blijft voorspelbaar bij controllerverlies']}
      ],
      lab:{title:'Underlay/overlay foutmodel',task:'Teken voor twee tenants de fysieke fabric, tunnelendpoints, segmenten, controller en failure domains. Beschrijf tests bij verlies van underlaylink en controller.',success:['Tenantisolatie zichtbaar','Control/data plane gescheiden','Failuregedrag benoemd','Telemetry per laag']},
      pitfalls:['Virtualisatie verwijdert fysieke limieten niet.','Een centrale controller mag geen enkelvoudig storingspunt zijn.','Een gezonde overlay kan niet over een onbereikbare underlay werken.'],
      questions:[
        {q:'Wat scheidt een VRF?',o:['Routingtables','Elektrische voedingen','DNS-recordtypes','Syslogseverities'],a:0,e:'VRFs bieden meerdere geïsoleerde routingcontexten.'},
        {q:'Wat is een type-1 hypervisor?',o:['Een hypervisor die direct op hardware draait','Een browserextensie','Een NAT-type','Een OSPF-pakket'],a:0,e:'Type 1 is bare metal.'},
        {q:'Wat betekent southbound in SDN?',o:['De interface van controller naar netwerkapparaten','De gebruikersportal naar applicaties','Een fysieke kabelrichting','Alleen internetverkeer'],a:0,e:'Southbound programmeert of bevraagt infrastructuur.'}
      ]
    },
    {
      id:14,title:'Network Automation',color:'#00a8ff',
      summary:'Gebruik gestructureerde data, APIs, REST, configuratiebeheer en intent-based networking om herhaalbare en controleerbare netwerkveranderingen te bouwen.',
      diagram:{type:'automation',nodes:['Source of truth','Automation','API','Devices','Telemetry','Validation'],links:[[0,1,'desired state'],[1,2,'request'],[2,3,'configure'],[3,4,'observe'],[4,5,'assert'],[5,1,'feedback']]},
      sections:[
        {id:'14.1',title:'Automation Overview',points:['Automatisering verlaagt variatie en versnelt herhaalbare taken, maar vermenigvuldigt ook fouten. Begin met een bron van waarheid, kleine scope, idempotentie, dry run, review en rollback.','Orchestration coördineert meerdere systemen en stappen. Een script is pas operationeel betrouwbaar met inputvalidatie, logging, foutafhandeling, secretsbeheer en tests.'],commands:`# Pseudoflow: validate -> plan -> approve -> apply -> verify -> record`,verify:['Herhaalbaar resultaat','Geen geheimen in code','Rollback en blast-radiuslimiet']},
        {id:'14.2',title:'Data Formats',points:['JSON gebruikt objecten, arrays, strings, numbers, booleans en null. YAML is mensvriendelijk maar inspringing en impliciete types vragen aandacht. XML gebruikt geneste tags en attributen.','Een schema en versiecontract voorkomen dat syntactisch geldige maar semantisch verkeerde data wordt toegepast. Normaliseer adressen, interfaces en units vóór vergelijking.'],commands:`{\n  "interface": "GigabitEthernet0/1",\n  "enabled": true,\n  "mtu": 1500\n}`,verify:['Parser accepteert data','Schema valideert vereiste velden','Types en units expliciet']},
        {id:'14.3',title:'APIs and REST',points:['Een API definieert een contract. REST werkt met resources en HTTP-methoden: GET leest, POST maakt of start, PUT vervangt, PATCH wijzigt gedeeltelijk en DELETE verwijdert.','Statuscodes, headers, authenticatie, pagination en rate limits horen bij het contract. GET hoort safe te zijn; idempotentie betekent dat herhaling hetzelfde eindresultaat geeft, niet dat elk antwoord identiek is.'],commands:`GET /api/v1/interfaces\nAccept: application/json\n\nPATCH /api/v1/interfaces/1\nContent-Type: application/json`,verify:['2xx-success apart van inhoud gevalideerd','Timeout en retrybeleid','TLS-certificaat gecontroleerd']},
        {id:'14.4',title:'Configuration Management',points:['Agentless tools verbinden vanaf een controller; agent-based systemen draaien een component op nodes. Declaratieve modellen beschrijven gewenste state, imperatieve scripts de exacte stappen.','Templates scheiden variabele data van configuratielogica. Idempotente runs veranderen niets wanneer state al klopt; drift detection vergelijkt actuele state met source of truth.'],commands:`---\ninterfaces:\n  - name: GigabitEthernet0/1\n    description: USERS\n    enabled: true`,verify:['Template met testdata gerenderd','Tweede run heeft zero-change','Drift wordt gemeld']},
        {id:'14.5',title:'Intent-Based Networking and Controllers',points:['IBN vertaalt zakelijke intent naar beleid, implementeert dit via een controller en gebruikt assurance om resultaat continu te vergelijken met bedoeling. Dit is een closed-loopproces.','Controllerplatforms zoals Cisco Catalyst Center combineren inventory, design, policy, provisioning en assurance. Menselijke goedkeuring blijft passend voor brede of risicovolle wijzigingen.'],commands:`# Intent: gebruikers mogen DNS/HTTPS naar goedgekeurde diensten; assurance meet bereik, latency en policy compliance`,verify:['Intent meetbaar','Vertaling naar concrete policy traceerbaar','Telemetry bewijst of doel gehaald is']}
      ],
      lab:{title:'Veilige automation pipeline',task:'Ontwerp een pipeline die interfacebeschrijvingen uit een bron van waarheid valideert, rendert, in dry run toont, na goedkeuring toepast en daarna state terugleest.',success:['Schemafouten stoppen vóór wijziging','Idempotent','Scope begrensd','Read-after-write validatie','Rollback beschreven']},
      pitfalls:['Een succesvolle HTTP-call bewijst nog niet dat de intent is bereikt.','Retries op niet-idempotente acties kunnen duplicaten maken.','Automatisering zonder validatie vergroot de blast radius.'],
      questions:[
        {q:'Welke HTTP-methode leest normaal een resource?',o:['GET','DELETE','PATCH','CONNECT als configuratiemethode'],a:0,e:'GET is bedoeld voor retrieval.'},
        {q:'Wat betekent idempotent configuratiebeheer?',o:['Herhaalde uitvoering convergeert naar dezelfde gewenste eindstate.','Elke run maakt een nieuwe interface.','Alle fouten worden genegeerd.','De API gebruikt geen TLS.'],a:0,e:'Een tweede run hoeft geen extra wijziging te maken.'},
        {q:'Wat sluit de IBN-feedbacklus?',o:['Assurance en telemetry vergelijken actuele state met intent.','Een statische banner','Alleen een VLAN-naam','Een handmatige ping zonder doelwaarde'],a:0,e:'Closed-loop assurance detecteert afwijking en voedt bijsturing.'}
      ]
    }
  ]
};
