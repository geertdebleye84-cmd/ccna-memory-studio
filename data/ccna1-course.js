/* Original Dutch study material aligned to CCNA ITN. No official exam items. */
(function () {
  const S = (id, title, points, commands = '', verify = []) => ({ id, title, points, commands, verify });
  const Q = (q, o, a, e) => ({ q, o, a, e });
  const M = (id, title, color, summary, diagram, sections, lab, pitfalls, questions) => ({ id, title, color, summary, diagram, sections, lab, pitfalls, questions });

  window.CCNA1_COURSE = {
    id: 'ccna1-itn',
    title: 'CCNA1 · Introduction to Networks',
    version: '2026-08-20',
    note: 'Volledige cursus in eigen woorden. Introductielessen x.0 zijn bewust overgeslagen; officiële examenvragen en Cisco-afbeeldingen zijn niet gekopieerd.',
    modules: [
      M(1, 'Networking Today', '#00b894',
        'Plaats hosts, tussenliggende apparaten, media, topologieën en internetdiensten in één betrouwbaar en veilig netwerkmodel.',
        {type:'network-map',nodes:['Client','Accessnetwerk','Router','Internet','Cloud/dienst'],links:[[0,1,'LAN'],[1,2,'uplink'],[2,3,'WAN'],[3,4,'service']]},
        [
          S('1.1','Networks Affect our Lives',[
            'Netwerken verbinden mensen, processen, gegevens en apparaten. Ze maken communicatie, samenwerking, leren, werken, automatisering en dienstverlening onafhankelijker van plaats en tijd.',
            'Converged networks dragen data, spraak en video over één beheerde infrastructuur; beschikbaarheid en beveiliging worden daardoor bedrijfskritisch.'
          ]),
          S('1.2','Network Components',[
            'Hosts of end devices zijn bron of bestemming van berichten. Servers leveren diensten; clients vragen ze aan; een apparaat kan in peer-to-peercontext beide rollen hebben.',
            'Switches, routers, access points en firewalls sturen verkeer tussen hosts en netwerken. NIC, poort en interface koppelen een apparaat aan koper, glasvezel of radio.'
          ]),
          S('1.3','Network Representations and Topologies',[
            'Een logisch diagram toont adressen, subnetten, VLANs en verkeerspaden; een fysiek diagram toont locaties, bekabeling, racks en poorten.',
            'Belangrijke symbolen en termen zijn NIC, fysieke poort, interface, LAN, WAN en cloud. Documenteer beide topologieën om configuratie en storingen te begrijpen.'
          ]),
          S('1.4','Common Types of Networks',[
            'Een SOHO/LAN bedient een beperkte locatie; een WAN verbindt geografisch gescheiden LANs. Internet is een wereldwijde internetwork van autonome netwerken.',
            'Een intranet is intern voor een organisatie; een extranet geeft gecontroleerde toegang aan externe partners. Eigendom, schaal, beheer en technologie onderscheiden netwerken.'
          ]),
          S('1.5','Internet Connections',[
            'Consumenten gebruiken onder meer kabel, DSL, glasvezel, mobiel en satelliet. Organisaties gebruiken daarnaast dedicated Ethernet, leased lines, MPLS of zakelijke breedband.',
            'Keuzecriteria zijn bandbreedte, latency, symmetrie, beschikbaarheid, dekking, SLA, kosten en redundantie; internettoegang loopt via een ISP.'
          ]),
          S('1.6','Reliable Networks',[
            'Een betrouwbaar netwerk levert fault tolerance, schaalbaarheid, QoS en beveiliging. Redundante paden verminderen single points of failure.',
            'Packet-switched verkeer deelt verbindingen efficiënt. QoS prioriteert tijdgevoelige stromen; beveiliging beschermt infrastructuur en gegevens.'
          ]),
          S('1.7','Network Trends',[
            'BYOD, collaboration, video, cloud, smart home en IoT verhogen mobiliteit en het aantal verbonden endpoints.',
            'Public, private, hybrid en community cloud verschillen in eigendom en afscherming. Powerline en wireless broadband vullen traditionele toegang aan.'
          ]),
          S('1.8','Network Security',[
            'Externe en interne dreigingen omvatten malware, phishing, kwetsbaarheden, gestolen accounts, denial-of-service en misbruik door bevoegde gebruikers.',
            'Verdedig in lagen met updates, sterke authenticatie, firewalls, endpointbescherming, segmentatie, encryptie, back-ups, logging en opleiding.'
          ]),
          S('1.9','The IT Professional',[
            'Netwerkrollen lopen van support en technicus tot beheerder, engineer, architect, security- of automatiseringsspecialist.',
            'Vaardigheden worden aangetoond met labs, portfolio, documentatie en certificering; Cisco DevNet koppelt netwerkkennis aan software en API’s.'
          ])
        ],
        {title:'Netwerklandschap tekenen',task:'Teken een klein kantoor met hosts, switch, AP, router, ISP en clouddienst. Maak een fysiek én logisch diagram en benoem vier betrouwbaarheids- of beveiligingsmaatregelen.',success:['Alle rollen correct','LAN/WAN-grens zichtbaar','Redundantie en beveiliging gemotiveerd']},
        ['Internet en web zijn niet hetzelfde.','Bandbreedte is capaciteit; latency is vertraging.','Een cloudsymbool verbergt details, maar vervangt geen ontwerp.'],
        [
          Q('Welk apparaat verbindt normaal verschillende IP-netwerken?',['Router','Layer-2-hub','Patchpaneel','NIC'],0,'Een router kiest een Layer-3-pad tussen netwerken.'),
          Q('Welke vier eigenschappen horen bij een betrouwbaar netwerk?',['Fault tolerance, schaalbaarheid, QoS en beveiliging','DNS, DHCP, FTP en HTTP','Koper, glas, radio en coax','CLI, GUI, API en console'],0,'Dit zijn de vier ontwerpvereisten uit de module.'),
          Q('Wat toont een logisch diagram vooral?',['Adressen, subnetten en verkeersrelaties','De exacte kabellengtes in een rack','Alleen gebouwafmetingen','De aankoopprijs van apparaten'],0,'Logische topologie beschrijft communicatie en adressering.')
        ]),

      M(2, 'Basic Switch and End Device Configuration', '#0984e3',
        'Bedien Cisco IOS veilig, configureer een switch en hosts, bewaar de configuratie en bewijs lokale connectiviteit.',
        {type:'basic-lan',nodes:['PC-A','S1','PC-B','Consolebeheer'],links:[[0,1,'Ethernet'],[1,2,'Ethernet'],[3,1,'console']]},
        [
          S('2.1','Cisco IOS Access',[
            'Console geeft out-of-band toegang; SSH is versleutelde in-band toegang; Telnet verzendt beheerinformatie leesbaar en moet worden vermeden.',
            'Terminalemulatie gebruikt passende console-instellingen. Remote beheer vereist eerst IP-connectiviteit en beveiligde VTY-configuratie.'
          ]),
          S('2.2','IOS Navigation',[
            'User EXEC (`>`), privileged EXEC (`#`), global configuration en subconfiguratiemodi hebben verschillende rechten. `enable`, `configure terminal`, `exit`, `end` en Ctrl-Z navigeren.',
            'De prompt toont modus en apparaatnaam. `disable` keert terug; context-sensitive help voorkomt gokwerk.'
          ],`enable\nconfigure terminal\ninterface vlan 1\nexit\nend`),
          S('2.3','The Command Structure',[
            'IOS-commando’s bestaan uit keyword(s), argumenten en parameters. `?`, verkorte unieke commando’s, Tab, pijl-omhoog en opdrachtgeschiedenis versnellen correct werk.',
            'Foutmeldingen onderscheiden ambiguous, incomplete en invalid input. Controleer het caret-teken en de actieve modus.'
          ]),
          S('2.4','Basic Device Configuration',[
            'Stel hostname, enable secret, console- en VTY-beveiliging, banner en versleuteling van leesbare wachtwoorden in. Een secret gebruikt een hash en verdient voorkeur boven password.',
            'Gebruik unieke sterke wachtwoorden; een banner is juridisch/operationeel, geen toegangscontrole.'
          ],`hostname S1\nno ip domain-lookup\nenable secret <GEHEIM>\nservice password-encryption\nbanner motd # Alleen bevoegde toegang #\nline console 0\n password <GEHEIM>\n login`),
          S('2.5','Save Configurations',[
            'Running-config staat in RAM en verandert direct; startup-config staat in NVRAM en wordt bij boot geladen. `copy running-config startup-config` bewaart wijzigingen.',
            '`reload` zonder opslaan verliest actieve wijzigingen. Wis alleen bewust; controleer voor en na met show-commando’s.'
          ],`show running-config\nshow startup-config\ncopy running-config startup-config`,['Configuratie blijft na reload beschikbaar']),
          S('2.6','Ports and Addresses',[
            'Een fysieke poort draagt signalen; een IOS-interface is het configureerbare aansluitpunt. IPv4/IPv6-adres en masker/prefix identificeren host en netwerk.',
            'Een switch management-SVI geeft de switch IP-beheer, maar is niet nodig voor Layer-2 frameforwarding.'
          ]),
          S('2.7','Configure IP Addressing',[
            'Configureer hostadres, subnetmasker/prefix, default gateway en eventueel DNS. Alle lokale hosts moeten unieke adressen uit hetzelfde subnet hebben.',
            'Een Layer-2-switch krijgt een managementadres op een SVI plus `ip default-gateway` voor beheer buiten het lokale subnet.'
          ],`interface vlan 1\n ip address 192.0.2.2 255.255.255.0\n no shutdown\nexit\nip default-gateway 192.0.2.1`),
          S('2.8','Verify Connectivity',[
            '`ipconfig`/`ip addr`, `show ip interface brief` en `ping` bewijzen respectievelijk hostconfiguratie, interfacestatus en bereikbaarheid.',
            'Test oplopend: lokale stack, eigen adres, lokale buur, gateway en pas daarna remote doel.'
          ],`show ip interface brief\nping 192.0.2.10`,['Interfaces up/up','Unieke adressen','Pings in beide richtingen'])
        ],
        {title:'Eerste switchconfiguratie',task:'Configureer S1 en twee hosts met veilige basisinstellingen, management-SVI en lokale IP-connectiviteit. Sla op en bewijs herstel na reload.',success:['Hostnames en secrets correct','SVI bereikbaar','Startup-config aanwezig','Pings slagen']},
        ['`service password-encryption` is geen sterke cryptografie.','Een SVI kan down blijven zonder actieve poort in de VLAN.','Vergeten opslaan is een veelvoorkomende fout.'],
        [
          Q('Welke toegang is versleuteld?',['SSH','Telnet','Consolekabel als IP-protocol','HTTP'],0,'SSH beschermt de beheersessie over het netwerk.'),
          Q('Waar staat de actieve configuratie?',['RAM','NVRAM','Flash uitsluitend','ROM'],0,'Running-config bevindt zich in RAM.'),
          Q('Waarom krijgt een Layer-2-switch een IP-adres?',['Voor beheer','Om elk frame te routeren','Om MAC-adressen te maken','Om kabels te detecteren'],0,'Switching werkt op Layer 2; het adres dient beheer.')
        ]),

      M(3, 'Protocols and Models', '#6c5ce7',
        'Verklaar netwerkcommunicatie met protocollen, suites, standaarden, OSI/TCP-IP, encapsulatie en lokale/remote aflevering.',
        {type:'encapsulation',nodes:['Application data','TCP/UDP segment','IP packet','Ethernet frame','Bits'],links:[[0,1,'L4'],[1,2,'L3'],[2,3,'L2'],[3,4,'L1']]},
        [
          S('3.1','The Rules',['Communicatie vereist overeengekomen afzender/ontvanger, taal/codering, formaat, timing, grootte en bevestiging.','Message encoding, encapsulation, size, timing en delivery options gelden voor menselijke én netwerkcommunicatie.']),
          S('3.2','Protocols',['Een protocol definieert formaat, betekenis, volgorde en reactie. Meerdere protocollen werken samen per laag.','Functies zijn adressering, betrouwbaarheid, flow control, sequencing, foutdetectie en applicatieservice.']),
          S('3.3','Protocol Suites',['Een suite is een interoperabele verzameling protocollen. TCP/IP is de dominante open suite van applicatie tot netwerktoegang.','Protocolinteraction kan bijvoorbeeld HTTP→TCP→IP→Ethernet zijn; elke laag levert diensten aan de laag erboven.']),
          S('3.4','Standards Organizations',['IETF publiceert RFC’s voor internetprotocollen; IEEE standaardiseert onder meer Ethernet en WLAN; ISO ontwikkelde het OSI-model.','ICANN/IANA beheert naam- en nummerbronnen; TIA/EIA en ITU dragen bij aan bekabeling en telecommunicatie. Open standaarden bevorderen interoperabiliteit.']),
          S('3.5','Reference Models',['OSI: application, presentation, session, transport, network, data link, physical. TCP/IP: application, transport, internet, network access.','Modellen scheiden verantwoordelijkheden, helpen ontwerp en troubleshooting en laten leveranciers onafhankelijk implementeren.']),
          S('3.6','Data Encapsulation',['Data wordt segment/datagram, packet, frame en bits; de ontvanger decapsuleert omgekeerd. Elke PDU heeft laagspecifieke controle-informatie.','TCP/UDP-poorten identificeren processen, IP-adressen end-to-end hosts/netwerken en MAC-adressen de lokale link.']),
          S('3.7','Data Access',['Voor een lokaal doel gebruikt de bron het doel-MAC; voor een remote doel gebruikt hij het MAC-adres van de default gateway, terwijl het doel-IP remote blijft.','MAC-adressen veranderen per routed hop; bron- en doel-IP blijven normaal end-to-end gelijk zonder NAT. ARP/NDP resolveert lokale next hops.'])
        ],
        {title:'Encapsulatie volgen',task:'Volg een HTTP-request van client via router naar server en noteer per hop PDU, bron/doel-IP, bron/doel-MAC en relevante poorten.',success:['Laagnamen correct','MAC wijzigt per hop','IP blijft end-to-end','Decapsulatie uitgelegd']},
        ['OSI is een model, geen verplicht protocolstack.','MAC-adressering is lokaal; IP-adressering is end-to-end.','Een protocol en een standaardorganisatie zijn niet hetzelfde.'],
        [Q('Welke PDU hoort bij de netwerklaag?',['Packet','Frame','Bits','Data-link trailer'],0,'IP vormt packets op Layer 3.'),Q('Welk adres verandert normaal bij elke routerhop?',['Het Layer-2 adres','Het doel-IP','De TCP-bestemmingspoort','De applicatie-URL'],0,'Elke router maakt een nieuw frame.'),Q('Wie publiceert internet-RFC’s?',['IETF','IEEE 802.3-switch','Een lokale ISP alleen','TIA-kabeltester'],0,'De IETF ontwikkelt internetstandaarden via RFC’s.')]),

      M(4, 'Physical Layer', '#fdcb6e',
        'Koppel bits aan signalering, normen, bandbreedte en geschikte koper-, glasvezel- of draadloze media.',
        {type:'media',nodes:['NIC','UTP','Fiber','Radio','Receiver'],links:[[0,1,'elektrisch'],[0,2,'licht'],[0,3,'RF'],[1,4,'bits']]},
        [
          S('4.1','Purpose of the Physical Layer',['De fysieke laag codeert framebits als elektrische, optische of radiosignalen en ontvangt ze weer. Ze definieert connectoren, pinouts, signalering en activering.','NIC, medium en connector vormen samen de fysieke verbinding; hogere lagen zijn onafhankelijk van het gekozen medium.']),
          S('4.2','Physical Layer Characteristics',['Standards bepalen mechanische, elektrische/optische, functionele en procedurele eigenschappen. Encoding representeert bits; signaling bepaalt hoe waarden op het medium verschijnen.','Bandwidth is theoretische capaciteit; throughput is gemeten levering; goodput sluit overhead en retransmissies uit. Latency en interferentie beïnvloeden prestaties.']),
          S('4.3','Copper Cabling',['Koper is goedkoop maar gevoelig voor EMI/RFI, crosstalk en afstandsverlies. Shielding, twisting, aarding en juiste aanleg beperken storing.','UTP, STP en coax verschillen in constructie. Scheid datakabels van storingsbronnen en respecteer buigradius en maximale kanaallengte.']),
          S('4.4','UTP Cabling',['UTP gebruikt vier getwiste aderparen met RJ-45/8P8C. T568A en T568B definiëren pinvolgorde; beide uiteinden gelijk is straight-through, verschillend crossover.','Auto-MDIX vermindert de nood aan crossover, maar correcte terminatie, categorie en kabeltest blijven noodzakelijk.']),
          S('4.5','Fiber-Optic Cabling',['Glasvezel transporteert licht, is immuun voor EMI en ondersteunt grotere afstand/bandbreedte. Multimode gebruikt doorgaans LED/VCSEL; single-mode laser en een kleinere kern.','Connectoren en transceivers moeten bij vezeltype en golflengte passen. Inspecteer/reinig uiteinden; kijk nooit in actieve fiber.']),
          S('4.6','Wireless Media',['Radio deelt het medium en is gevoelig voor interferentie, demping en beveiligingsrisico’s. WLAN gebruikt IEEE 802.11; Bluetooth 802.15 en mobiel andere standaarden.','Een AP verbindt draadloze clients met de bedrade LAN. Kanaal, frequentie, antenne, afstand en obstakels bepalen dekking en capaciteit.'])
        ],
        {title:'Media-keuze',task:'Kies media voor werkplek, datacenteruplink, gebouwverbinding en mobiele client. Motiveer afstand, snelheid, storing, kosten en beveiliging.',success:['Elke keuze technisch gemotiveerd','Connector/transceiver past','Fysieke risico’s benoemd']},
        ['Mbps en MB/s zijn verschillende eenheden.','Fiber is niet “altijd sneller”; transceivers en standaard bepalen snelheid.','Een kabel die link geeft kan toch fout getermineerd zijn.'],
        [Q('Welke waarde sluit protocoloverhead uit?',['Goodput','Bandwidth','Kloksnelheid','Duplex'],0,'Goodput telt nuttige applicatiedata.'),Q('Welke fiber is typisch voor de grootste afstanden?',['Single-mode','Multimode met grote kern','UTP Cat 5e','Coax'],0,'Single-mode beperkt modale dispersie.'),Q('Wat beperkt crosstalk in UTP?',['Getwiste aderparen','Een groter IP-masker','DNS','Full-duplex routing'],0,'Twisting laat storingen elkaar grotendeels opheffen.')]),

      M(5, 'Number Systems', '#e17055',
        'Converteer decimal, binair en hexadecimaal en herken hun rol in IPv4, subnetten, IPv6 en MAC-adressen.',
        {type:'numbers',nodes:['Decimal','Binary','Hex'],links:[[0,1,'powers of 2'],[1,2,'4 bits per hex digit'],[2,0,'powers of 16']]},
        [
          S('5.1','Binary Number System',['Een IPv4-octet bestaat uit acht bits met gewichten 128,64,32,16,8,4,2,1. Sommeer gewichten van 1-bits om decimal te vinden.','Voor decimal→binair trek je gewichten van groot naar klein af. AND tussen adres en masker levert het netwerkadres.']),
          S('5.2','Hexadecimal Number System',['Hex gebruikt 0–9 en A–F; elke hex-digit vertegenwoordigt exact vier bits. Daardoor worden 48-bit MAC- en 128-bit IPv6-adressen compact weergegeven.','Groepeer binair per nibble voor conversie. Hex is notatie: apparatuur verwerkt nog steeds bits.'])
        ],
        {title:'Conversiedrill',task:'Converteer 25 willekeurige octetten decimal↔binair en tien waarden binair↔hex. Bereken vijf netwerkadressen met bitwise AND.',success:['Geen rekenmachine nodig','Nibbles correct gegroepeerd','Netwerkbits correct gemaskeerd']},
        ['Een octet loopt van 0 tot 255.','Hex F is decimal 15 en binair 1111.','Leading zeroes veranderen de waarde niet maar verbeteren leesbaarheid.'],
        [Q('Wat is binair 11000000?',['192','128','224','96'],0,'De actieve bitgewichten 128 en 64 tellen samen op tot 192.'),Q('Welke hex-digit is binair 1010?',['A','B','9','F'],0,'1010 is decimal 10, dus A.'),Q('Hoeveel bits vertegenwoordigen twee hex-digits?',['8','2','4','16'],0,'Eén digit is vier bits; twee vormen een octet.')]),

      M(6, 'Data Link Layer', '#00cec9',
        'Verklaar framing, lokale media access, Layer-2-adressering, topologie en foutdetectie.',
        {type:'data-link',nodes:['Network packet','Frame header','Payload','Trailer/FCS','Medium'],links:[[0,1,'encapsulate'],[1,2,'carry'],[2,3,'detect'],[3,4,'transmit']]},
        [
          S('6.1','Purpose of the Data Link Layer',['De data-linklaag accepteert een Layer-3-packet, vormt een frame, regelt toegang tot het medium en detecteert overdrachtsfouten.','LLC koppelt hogere protocollen; MAC behandelt media access en Layer-2-adressering. Routers vervangen het frame bij elke hop.']),
          S('6.2','Topologies',['Fysieke topologie beschrijft kabels/apparaten; logische topologie beschrijft gegevensstroom en mediumtoegang. WAN kan point-to-point, hub-and-spoke of mesh zijn.','LANs zijn vaak fysieke extended star. Half-duplex gedeelde media gebruiken contention; full-duplex point-to-point Ethernet heeft geen collisions.']),
          S('6.3','Data Link Frame',['Een frame bevat delimiters, besturingsvelden, bron/doel-L2-adres, payload en trailer. De precieze velden verschillen per protocol.','FCS gebruikt CRC om bitfouten te detecteren; een fout frame wordt gedropt. Herstel/retransmissie gebeurt zo nodig door hogere lagen.'])
        ],
        {title:'Frame per hop',task:'Volg één IPv4-packet over Ethernet LAN—router—WAN—router—Ethernet LAN. Teken voor elke link een nieuw frame en markeer constante en gewijzigde velden.',success:['Packet blijft herkenbaar','Frames per link correct','FCS en media access uitgelegd']},
        ['FCS corrigeert geen fouten.','Een router forwardt niet hetzelfde Ethernet-frame.','Logische en fysieke topologie kunnen verschillen.'],
        [Q('Welke laag voegt een FCS toe?',['Data link','Network','Transport','Application'],0,'De FCS staat in de frame-trailer.'),Q('Wat doet een router met het inkomende frame?',['Decapsuleert en maakt voor de volgende link een nieuw frame','Wijzigt alleen de FCS','Floodt het ongewijzigd','Slaat het permanent op'],0,'Framing is link-specifiek.'),Q('Waar komen collisions niet voor?',['Een full-duplex point-to-point Ethernetlink','Een hubsegment','Een gedeeld radio-medium','Half-duplex Ethernet'],0,'Full-duplex heeft aparte zend/ontvangpaden.')]),

      M(7, 'Ethernet Switching', '#2d3436',
        'Lees Ethernetframes en MAC-adressen, voorspel switchforwarding en vergelijk forwarding-, buffering- en duplexkeuzes.',
        {type:'switching',nodes:['PC-A','S1 CAM table','PC-B','Unknown target'],links:[[0,1,'source learn'],[1,2,'known unicast'],[1,3,'flood']]},
        [
          S('7.1','Ethernet Frame',[
            'IEEE 802.3 Ethernet gebruikt preamble/SFD, 6-byte destination en source MAC, type/length, payload van normaal 46–1500 bytes en 4-byte FCS. Kleinere payload krijgt padding.',
            'De MAC-sublayer verzorgt framing en media access; LLC identificeert het hogere Layer-3-protocol. De framegrootte loopt normaal 64–1518 bytes zonder VLAN-tag/preamble.'
          ]),
          S('7.2','Ethernet MAC Address',[
            'Een MAC-adres is 48 bits in hex. De eerste 24 bits vormen doorgaans de OUI; de rest identificeert de interface. Het I/G-bit onderscheidt individueel of groep en U/L universeel of lokaal.',
            'Broadcast is FF:FF:FF:FF:FF:FF; multicast heeft een groepsadres; unicast richt zich op één interface. Een switch forwardt op destination MAC.'
          ]),
          S('7.3','The MAC Address Table',[
            'Een switch leert de source MAC op de inkomende poort. Een bekende destination gaat alleen naar de bijbehorende poort; unknown unicast en broadcast worden binnen de VLAN geflood behalve naar de ingresspoort.',
            'Entries verouderen. Een bewegend MAC-adres wordt opnieuw geleerd; loops of flapping kunnen instabiliteit veroorzaken.'
          ],`show mac address-table\nshow mac address-table dynamic\nclear mac address-table dynamic`,['Bron-MAC op juiste poort','Bekende unicast niet geflood']),
          S('7.4','Switch Speeds and Forwarding Methods',[
            'Store-and-forward ontvangt het volledige frame en controleert FCS; cut-through begint na destination MAC en verlaagt latency maar kan corrupte frames doorsturen.',
            'Symmetric switching gebruikt gelijke poortsnelheden; asymmetric combineert snelheden en vraagt buffering. Memory kan port-based of shared zijn. Autonegotiation voorkomt meestal duplexmismatch.'
          ],`show interfaces status\nshow interfaces counters errors`,['Geen late collisions','Speed/duplex aan beide kanten passend'])
        ],
        {title:'CAM-table voorspellen',task:'Start met een lege MAC-tabel en laat vier hosts frames uitwisselen. Voorspel na elk frame learning, filtering of flooding en verifieer in Packet Tracer/Wireshark.',success:['Source learning correct','Unknown unicast correct','Broadcastdomein correct']},
        ['Een switch leert van source, niet destination.','Broadcast wordt niet door een router doorgestuurd.','Duplexmismatch kan link-up maar slechte prestaties geven.'],
        [Q('Wat doet een switch met een unknown unicast?',['Flood binnen dezelfde VLAN behalve ingress','Naar de default gateway sturen','Altijd droppen','Over alle routers flooden'],0,'Zonder entry weet de switch de doelpoort niet.'),Q('Welke methode controleert FCS vóór forwarding?',['Store-and-forward','Fast-forward cut-through','Fragment-free alleen','CSMA/CD'],0,'Het volledige frame is nodig voor de FCS.'),Q('Welk veld leert een switch?',['Source MAC','Destination IP','TCP-poort','FCS'],0,'Source learning koppelt MAC aan ingresspoort.')]),

      M(8, 'Network Layer', '#e84393',
        'Verklaar IPv4/IPv6 packetvelden, host- en routerbeslissingen, longest-prefix-match en routingtabelcodes.',
        {type:'routing',nodes:['Host','Default gateway','R1 RIB','R2','Remote LAN'],links:[[0,1,'remote target'],[1,2,'lookup'],[2,3,'next hop'],[3,4,'connected']]},
        [
          S('8.1','Network Layer Characteristics',[
            'IP levert connectionless, best-effort en media-independent bezorging. Betrouwbaarheid en volgorde zijn functies van hogere lagen wanneer vereist.',
            'MTU bepaalt maximale Layer-3-packetgrootte op een link. IPv4-routers kunnen fragmenteren; bij IPv6 fragmenteert alleen de bron na Path MTU Discovery.'
          ]),
          S('8.2','IPv4 Packet',[
            'Belangrijke velden zijn Version, IHL, DSCP/ECN, Total Length, Identification/Flags/Fragment Offset, TTL, Protocol, Header Checksum en bron/doeladres.',
            'TTL daalt per router; bij nul volgt drop en meestal ICMP Time Exceeded. Protocol identificeert TCP(6), UDP(17), ICMP(1) of een andere payload.'
          ]),
          S('8.3','IPv6 Packet',[
            'De vaste IPv6-header is 40 bytes: Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit en 128-bit bron/doel.',
            'Extension headers dragen optionele functies. Geen headerchecksum en eenvoudiger basisheader verminderen routerwerk; broadcast bestaat niet in IPv6.'
          ]),
          S('8.4','How a Host Routes',[
            'Een host vergelijkt doel met eigen prefix. Lokaal: resolveer doel-MAC; remote: resolveer MAC van de default gateway en behoud remote doel-IP.',
            'De hosttabel bevat connected/local routes, statische routes en default. Een foute gateway schaadt remote maar niet lokale communicatie.'
          ],`route print\nip route\nnetstat -r`),
          S('8.5','Router Routing Tables',[
            'Een router kiest de langste match. Routebronnen zijn onder meer connected (C), local (L), static (S) en dynamische protocollen; bij dezelfde prefix vergelijkt hij administrative distance en metric.',
            'Een route bevat prefix, bron, AD/metric, next hop, leeftijd en exitinterface. Zonder match/default dropt de router het packet.'
          ],`show ip route\nshow ipv6 route\nshow ip route 198.51.100.25`,['Winnende prefix is meest specifiek','Next hop resolveerbaar'])
        ],
        {title:'Longest-prefix routekeuze',task:'Geef een router /0, /16, /24 en /28 routes. Voorspel voor tien doeladressen de gekozen route en teken de nieuwe Layer-2-header per hop.',success:['Langste match correct','AD pas bij gelijke prefix','Return path gecontroleerd']},
        ['Best-effort betekent niet onbelangrijk.','AD wordt pas vergeleken voor dezelfde prefix.','Een route heen garandeert geen route terug.'],
        [Q('Welke route wint als /0, /24 en /28 alle matchen?',['/28','Laagste AD ongeacht prefix','/0','Oudste route'],0,'Longest prefix match komt eerst.'),Q('Welk IPv4-veld voorkomt eindeloze loops?',['TTL','IHL','FCS','Source port'],0,'TTL daalt bij elke router.'),Q('Wat gebruikt IPv6 in plaats van TTL?',['Hop Limit','Flow Label','Next Header','Payload Length'],0,'Hop Limit heeft dezelfde loopbegrenzende functie.')]),

      M(9, 'Address Resolution', '#d63031',
        'Koppel Layer-3 next hops aan Layer-2 adressen met ARP en IPv6 Neighbor Discovery en herken beveiligingsimplicaties.',
        {type:'resolution',nodes:['Host A','ARP/NDP query','Switch LAN','Gateway/Host B'],links:[[0,1,'who has?'],[1,2,'multicast/broadcast'],[2,3,'reply']]},
        [
          S('9.1','MAC and IP',[
            'IP-adressen identificeren end-to-end bron en doel; MAC-adressen identificeren afzender en next hop op één Ethernetlink.',
            'Voor remote verkeer is destination MAC dat van de gateway, niet van de remote host. Na routing wordt een nieuwe Layer-2-header gebouwd.'
          ]),
          S('9.2','ARP',[
            'ARP resolveert een IPv4-adres naar een MAC-adres binnen het lokale broadcastdomein. Request is broadcast; reply normaal unicast; resultaten worden tijdelijk gecachet.',
            'Entries kunnen dynamisch of statisch zijn. Gratuitous ARP kondigt een binding aan of detecteert conflicten. ARP heeft geen ingebouwde authenticatie en is spoofbaar.'
          ],`arp -a\nshow arp\nclear arp-cache`,['Gatewaybinding klopt','Onbekend doel triggert request']),
          S('9.3','Neighbor Discovery',[
            'IPv6 NDP gebruikt ICMPv6: Neighbor Solicitation/Advertisement voor resolutie en DAD, Router Solicitation/Advertisement voor gateway en prefixinformatie.',
            'Solicited-node multicast vervangt ARP-broadcast. NDP ondersteunt ook neighbor unreachability en redirect; ICMPv6 mag daarom niet grof worden geblokkeerd.'
          ],`show ipv6 neighbors\nshow ipv6 interface`,['LLA van router aanwezig','Neighbor states logisch'])
        ],
        {title:'ARP versus NDP',task:'Wis caches, ping lokaal en remote, capture verkeer en vergelijk ARP Request/Reply met NS/NA/RS/RA. Noteer doel-MAC en multicastadressen.',success:['Lokale en gatewayresolutie onderscheiden','ARP broadcast herkend','NDP ICMPv6-rollen correct']},
        ['ARP resolveert geen remote host over routers.','NDP is meer dan “ARP voor IPv6”.','Een statische cache-entry kan verouderde informatie vasthouden.'],
        [Q('Welk MAC-adres gebruikt een host voor een remote IPv4-doel?',['Dat van de default gateway','Dat van de remote host','Broadcast voor alle frames','Dat van DNS'],0,'De gateway is de lokale next hop.'),Q('Hoe wordt een ARP Request verzonden?',['Als Layer-2 broadcast','Als routed unicast','Als TCP-segment','Als IPv6 multicast'],0,'Iedere host in de VLAN ontvangt de request.'),Q('Welk NDP-bericht levert prefix en default-routerinformatie?',['Router Advertisement','Neighbor Advertisement alleen','Echo Reply','Destination Unreachable'],0,'RA draagt router- en prefixparameters.')]),

      M(10, 'Basic Router Configuration', '#6c5ce7',
        'Configureer veilige routerbasis, dual-stack interfaces en correcte default gateways en verifieer de connected routes.',
        {type:'router',nodes:['LAN A','R1 G0/0','R1 G0/1','LAN B'],links:[[0,1,'192.0.2.0/24'],[1,2,'routing'],[2,3,'198.51.100.0/24']]},
        [
          S('10.1','Configure Initial Router Settings',[
            'Een router gebruikt dezelfde IOS-modi en beveiligingsbasis als een switch: hostname, enable secret, console/VTY, banner, password policy en opgeslagen config.',
            'SSH vereist hostname, domein, RSA-sleutel, lokale gebruiker en `transport input ssh`. Schakel ongebruikte services uit en documenteer interfaces.'
          ],`hostname R1\nenable secret <GEHEIM>\nip domain-name lab.example\nusername admin secret <GEHEIM>\ncrypto key generate rsa modulus 2048\nip ssh version 2\nline vty 0 4\n login local\n transport input ssh`),
          S('10.2','Configure Interfaces',[
            'Elke routed interface krijgt een uniek subnetadres, description en `no shutdown`. Up/up vereist administratief actief én een werkende datalink.',
            'Met `ipv6 unicast-routing` routeert IOS IPv6. Een interface kan een GUA en LLA hebben; connected en local routes verschijnen automatisch.'
          ],`ipv6 unicast-routing\ninterface g0/0/0\n description LAN_A\n ip address 192.0.2.1 255.255.255.0\n ipv6 address 2001:db8:1::1/64\n no shutdown`,['show ip interface brief','show ipv6 interface brief','show ip route connected']),
          S('10.3','Configure the Default Gateway',[
            'Een hostgateway is het routerinterfaceadres in hetzelfde subnet. Zonder of met een foute gateway blijven lokale hosts bereikbaar maar remote netwerken niet.',
            'Een Layer-2-switch gebruikt `ip default-gateway`; een router of multilayer switch met routing gebruikt een default route.'
          ],`ip default-gateway 192.0.2.1\nshow ip route`,['Host en gateway zelfde prefix','Remote ping in beide richtingen'])
        ],
        {title:'Dual-stack router',task:'Bouw twee LANs rond R1, configureer veilige SSH, IPv4/IPv6 op beide interfaces en gateways op vier hosts. Bewijs connected routes en end-to-end pings.',success:['Interfaces up/up','C/L-routes aanwezig','IPv4 en IPv6 werken','Config opgeslagen']},
        ['Een routerinterface is standaard vaak shutdown.','De gateway moet lokaal bereikbaar zijn.','`ip default-gateway` routeert geen verkeer op een router.'],
        [Q('Welk commando activeert een routerinterface?',['no shutdown','enable routing port','ip default-gateway','service routing'],0,'No shutdown verwijdert de administratieve blokkering.'),Q('Welke route ontstaat door een up/up interface met IP?',['Connected route','OSPF external route','Default route','BGP route'],0,'Direct aangesloten prefix wordt C.'),Q('Wat betekent administratively down?',['De interface staat shutdown','ARP ontbreekt','Het masker is /32','DNS faalt'],0,'De beheerstatus is uitgezet.')]),

      M(11, 'IPv4 Addressing', '#00b894',
        'Ontleed IPv4-adressen en masks, bereken subnetten en VLSM en ontwerp een schaalbaar adresplan.',
        {type:'subnetting',nodes:['10.0.0.0/24','/25 LAN-A','/26 LAN-B','/27 LAN-C','free space'],links:[[0,1,'128 addr'],[0,2,'64'],[0,3,'32'],[0,4,'remaining']]},
        [
          S('11.1','IPv4 Address Structure',['IPv4 heeft 32 bits. Prefix/masker scheidt netwerk- en hostdeel; AND tussen adres en masker levert netwerkadres.','Prefixlengte telt 1-bits in het masker. Hostbits alle 0 is netwerk; alle 1 is directed broadcast; tussenwaarden zijn doorgaans hosts.']),
          S('11.2','IPv4 Unicast, Broadcast, and Multicast',['Unicast richt zich op één interface; broadcast op alle hosts in een subnet; multicast op ingeschreven groepsleden.','Limited broadcast is 255.255.255.255. Routers forwarden broadcasts standaard niet; multicast gebruikt 224.0.0.0/4.']),
          S('11.3','Types of IPv4 Addresses',['Private bereiken: 10/8, 172.16/12 en 192.168/16; ze zijn niet publiek routeerbaar en gebruiken vaak NAT. Public adressen zijn globaal uniek.','Speciale bereiken omvatten loopback 127/8, link-local 169.254/16, documentation 192.0.2/24 e.a., multicast en limited broadcast.']),
          S('11.4','Network Segmentation',['Subnetting verkleint broadcastdomeinen, scheidt locaties/rollen/securityzones en gebruikt adressen doelmatiger. Routers/L3-switches verbinden subnetten.','Leen hostbits als subnetbits. Aantal subnetten is 2^s; bruikbare hosts klassiek 2^h−2, met uitzonderingen /31 en /32.']),
          S('11.5','Subnet an IPv4 Network',['Voor vaste subnetgrootte bepaal hosts, kies h zodat 2^h−2 volstaat, prefix=32−h en block size=256−relevant maskeroctet.','Netwerken stijgen met block size. Noteer netwerk, eerste host, laatste host en broadcast; subnetten overlappen nooit.']),
          S('11.6','Subnet a /16 and a /8 Prefix',['Dezelfde binaire methode geldt over octetgrenzen. Focus niet op oude classful grenzen; prefixlengte bepaalt de echte grens.','Schrijf het volledige masker en identificeer het interesting octet om block sizes systematisch te berekenen.']),
          S('11.7','Subnet To Meet Requirements',['Vertaal aantallen hosts, locaties, groei en point-to-pointlinks naar subnetbehoeften. Reserveer gateway en infrastructuuradressen consequent.','Valideer elk subnet op capaciteit, overlap, aggregatiemogelijkheid en documenteer vrije ruimte.']),
          S('11.8','Variable Length Subnet Masking',['VLSM gebruikt verschillende prefixlengtes binnen één adresblok. Deel grootste subnet eerst uit, daarna aflopend, zodat uitlijning en vrije ruimte behouden blijven.','Routes dragen prefixlengte; classless routing ondersteunt VLSM. Route summarization kan alleen op binaire grenzen.']),
          S('11.9','Structured Design',['Een plan koppelt subnet/VLAN, doel, prefix, gateway, hostrange, broadcast en reserveringen. Gebruik hiërarchie per locatie/functie.','Controleer ontwerp voor configuratie; verifieer daarna met host- en routertabellen, pings en een bijgewerkt diagram.'])
        ],
        {title:'VLSM-campus',task:'Verdeel 192.0.2.0/24 over LANs voor 100, 50, 20 en 10 hosts plus twee point-to-pointlinks. Documenteer alle bereiken en vrije ruimte.',success:['Grootste eerst','Geen overlap','Capaciteit voldoende','Gateways consistent']},
        ['Vergeet netwerk en broadcast niet bij klassieke LAN-subnetten.','Begin VLSM niet met het kleinste subnet.','Een subnetmasker hoeft geen octetgrens te volgen.'],
        [Q('Hoeveel bruikbare hosts heeft een klassiek /26-LAN?',['62','64','30','126'],0,'Zes hostbits: 64 adressen minus netwerk en broadcast.'),Q('Waarom VLSM?',['Subnets passend bij verschillende hostbehoeften maken','MAC-adressen inkorten','DNS vervangen','Broadcasts over routers sturen'],0,'VLSM vermindert verspilling.'),Q('Wat is de block size bij 255.255.255.224?',['32','224','16','64'],0,'De block size is 256 min 224 en bedraagt dus 32 adressen.')]),

      M(12, 'IPv6 Addressing', '#0984e3',
        'Lees en configureer IPv6 GUA/LLA, SLAAC/DHCPv6, multicast en /64-subnetten.',
        {type:'ipv6',nodes:['2001:db8:100::/48','Subnet ID','/64 LAN','Host interface ID','fe80:: LLA'],links:[[0,1,'16 bits'],[1,2,'prefix'],[2,3,'64 bits'],[3,4,'local link']]},
        [
          S('12.1','IPv4 Issues',['IPv4-uitputting leidde tot NAT en complexe adresconservering. IPv6 biedt 128-bit adressen, eenvoudiger basisheader, autoconfiguratie en geen broadcast.','Dual stack, tunneling en translation ondersteunen overgang; dual stack is conceptueel het meest direct.']),
          S('12.2','IPv6 Address Representation',['IPv6 bestaat uit acht hextets. Laat leading zeroes weg en vervang één aaneengesloten reeks nulhextets eenmaal door `::`.','Expand altijd tot acht hextets om ambiguïteit en prefixgrenzen te controleren. Prefixlengte vervangt een geschreven subnetmasker.']),
          S('12.3','IPv6 Address Types',['Unicast omvat GUA, LLA en loopback; multicast vervangt broadcast; anycast gebruikt hetzelfde unicastadres op meerdere nodes.','GUA is doorgaans 2000::/3; LLA fe80::/10 is verplicht op de lokale link; ::1 is loopback en :: unspecified.']),
          S('12.4','GUA and LLA Static Configuration',['Configureer GUA met /64 en optioneel handmatig LLA. Een routerinterface gebruikt LLA voor veel neighbor- en routingfuncties.','`ipv6 unicast-routing` laat routers RA’s sturen en IPv6 forwarden. Interface-ID moet uniek op de link zijn.'],`ipv6 unicast-routing\ninterface g0/0\n ipv6 address 2001:db8:1::1/64\n ipv6 address fe80::1 link-local\n no shutdown`),
          S('12.5','Dynamic Addressing for IPv6 GUAs',['SLAAC gebruikt RA-prefix plus zelfgekozen interface-ID. Stateless DHCPv6 levert extra opties; stateful DHCPv6 levert adressen en opties.','RA M- en O-flags sturen hostgedrag; de default gateway komt via RA, niet via DHCPv6. DAD controleert uniciteit.']),
          S('12.6','Dynamic Addressing for IPv6 LLAs',['Een LLA wordt automatisch gemaakt zodra IPv6 actief is, via willekeurige/stabiele interface-ID of EUI-64, platformafhankelijk.','EUI-64 splitst de MAC, voegt FFFE toe en wijzigt het U/L-bit; privacy-adressen vermijden voorspelbare hardwarekoppeling.']),
          S('12.7','IPv6 Multicast Addresses',['ff02::1 bereikt alle nodes op de link; ff02::2 alle routers. Solicited-node multicast ondersteunt NDP efficiënt.','Scopebits beperken multicastbereik; multicast is geen broadcast en wordt alleen door geïnteresseerde/bedoelde nodes verwerkt.']),
          S('12.8','Subnet an IPv6 Network',['Een toegewezen /48 laat typisch 16 bits subnet-ID tot /64: 65.536 /64-LANs. Leen niet routinematig interface-ID-bits.','Plan subnet-ID’s hiërarchisch per locatie/VLAN en documenteer GUA-prefix én gateways/LLA’s.'])
        ],
        {title:'Dual-stack IPv6-plan',task:'Maak uit 2001:db8:acad::/48 zes /64-subnetten, configureer drie links, test SLAAC en statisch, en bewijs NDP, multicast en routing.',success:['Correct verkorte adressen','Unieke /64s','GUA en LLA zichtbaar','End-to-end ping6']},
        ['`::` mag slechts eenmaal voorkomen.','DHCPv6 levert normaal niet de default gateway.','LLA is alleen lokaal en wordt niet gerouteerd.'],
        [Q('Welke prefix hoort bij link-local?',['fe80::/10','ff00::/8','2000::/3','::1/128'],0,'LLA valt onder fe80::/10.'),Q('Hoeveel /64s zitten in een /48?',['65.536','256','16','4.294.967.296'],0,'Er zijn 16 subnetbits: 2^16.'),Q('Welk bericht kondigt prefix en gateway aan?',['Router Advertisement','DHCPv6 Reply uitsluitend','Neighbor Solicitation','Echo Request'],0,'RA is de bron van router/prefixinformatie.')]),

      M(13, 'ICMP', '#74b9ff',
        'Gebruik ICMPv4/ICMPv6, ping en traceroute om bereikbaarheid, pad en foutlocatie systematisch te onderzoeken.',
        {type:'icmp',nodes:['Source','R1 TTL/Hop','R2','Destination'],links:[[0,1,'Echo/TTL 1'],[1,2,'Time Exceeded'],[2,3,'Echo Reply']]},
        [
          S('13.1','ICMP Messages',[
            'ICMP rapporteert fouten en operationele informatie voor IP. Echo Request/Reply test bereikbaarheid; Destination Unreachable en Time Exceeded verklaren bepaalde drops.',
            'ICMPv6 is bovendien essentieel voor NDP en Path MTU Discovery. Een timeout bewijst niet automatisch dat het doel down is: filtering of een ontbrekend retourpad kan hetzelfde symptoom geven.'
          ]),
          S('13.2','Ping and Traceroute Testing',[
            'Ping meet round-trip en verlies met Echo. Test van dichtbij naar ver: loopback, eigen interface, lokale buur, gateway, remote hop, remote doel en naam.',
            'Traceroute verhoogt TTL/Hop Limit om tussenrouters Time Exceeded te laten antwoorden. Sterretjes kunnen filtering of rate limiting zijn; het laatste antwoordende hopgebied helpt scope bepalen.'
          ],`ping 127.0.0.1\nping 192.0.2.1\ntracert 198.51.100.10\ntraceroute 2001:db8:2::10`,['Bronadres passend','Retourpad aanwezig','Naamresolutie apart getest'])
        ],
        {title:'Connectivity ladder',task:'Plaats vijf fouten in een dual-stackpad. Gebruik alleen ping, traceroute en show-tabellen om per fout het laatste bewezen werkende punt en de oorzaak te noteren.',success:['Lokaal→remote volgorde','IPv4 en IPv6','Geen DNS/netwerkverwarring','Retourpad bekeken']},
        ['Een geblokkeerde ping betekent niet per se dat de dienst down is.','Traceroute toont antwoordende hops, niet gegarandeerd exact het datapad.','Testen met een ander bronadres kan een ander resultaat geven.'],
        [Q('Welk bericht ontstaat wanneer TTL nul wordt?',['ICMP Time Exceeded','ARP Reply','TCP SYN-ACK','DHCP Offer'],0,'De router dropt en meldt Time Exceeded.'),Q('Wat test ping primair?',['IP-bereikbaarheid en round trip','DNS alleen','De volledige applicatie','Kabelcategorie'],0,'Echo test het IP-pad, niet elke applicatielaag.'),Q('Waarom kan een heenpad werken maar ping falen?',['Het retourpad ontbreekt','Ethernet heeft geen MAC','De TTL stijgt','DNS verandert de FCS'],0,'Echo Reply moet onafhankelijk terug worden gerouteerd.')]),

      M(14, 'Transport Layer', '#fd79a8',
        'Vergelijk TCP en UDP, poorten en sockets en verklaar betrouwbaarheid, flow control, multiplexing en sessieopbouw.',
        {type:'transport',nodes:['App A:50000','TCP/UDP','Server:443','App B:53000','DNS:53'],links:[[0,1,'socket'],[1,2,'reliable stream'],[3,1,'datagram'],[1,4,'request']]},
        [
          S('14.1','Transportation of Data',[
            'De transportlaag segmenteert/reassembleert, multiplexeert applicaties met poorten en kan betrouwbaarheid, flow control en sessiebeheer leveren.',
            'Een socket is IP-adres plus poort; een flow wordt uniek door protocol en bron/doel-IP/poort. Clients gebruiken vaak dynamische source ports.'
          ]),
          S('14.2','TCP Overview',[
            'TCP is connection-oriented en levert geordende betrouwbare byte-streams met sequence/acknowledgment numbers, retransmissie, checksum en flow control.',
            'Overhead en wachttijd zijn hoger dan UDP. HTTP(S), SSH, e-mail en file transfer gebruiken vaak TCP wanneer volledigheid belangrijk is.'
          ]),
          S('14.3','UDP Overview',[
            'UDP is connectionless met een header van 8 bytes: source port, destination port, length en checksum. Geen handshake, ordering of retransmissie door UDP zelf.',
            'DNS, DHCP, streaming, voice en gaming kiezen vaak UDP voor lage latency of eigen herstel; “onbetrouwbaar” betekent geen leveringsgarantie, niet waardeloos.'
          ]),
          S('14.4','Port Numbers',[
            'Well-known 0–1023, registered 1024–49151 en dynamic/private 49152–65535. Server luistert op bekende/registreerde poort; client kiest meestal ephemeral.',
            'Voorbeelden: 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 67/68 DHCPv4, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS. Controleer altijd TCP versus UDP.'
          ],`netstat -ano\nss -tulpen`),
          S('14.5','TCP Communication Process',[
            'Three-way handshake: SYN, SYN-ACK, ACK synchroniseert sequence numbers. Beëindiging gebruikt doorgaans FIN/ACK in beide richtingen; RST breekt abrupt af.',
            'Sequence numbers markeren bytes; ACK is het volgende verwachte nummer. Meerdere applicatiesessies blijven gescheiden door sockets.'
          ]),
          S('14.6','Reliability and Flow Control',[
            'Ontbrekende bytes worden via acknowledgments/timers en retransmissie hersteld; ontvanger ordent out-of-order segmenten. SACK kan specifieke ontvangen blokken melden.',
            'Sliding window laat meerdere bytes in flight; advertised receive window beschermt de ontvanger. Congestion control beschermt het netwerk en is iets anders dan flow control.'
          ]),
          S('14.7','UDP Communication',[
            'UDP-datagrams zijn onafhankelijk; de applicatie bepaalt of verlies, duplicatie of volgorde wordt behandeld. Query/responseprotocollen kunnen eigen timeouts/retries gebruiken.',
            'Realtimeverkeer verkiest vaak een laat packet te missen boven wachten op retransmissie. QoS kan prioriteren maar creëert geen betrouwbaarheid.'
          ])
        ],
        {title:'TCP/UDP-capture',task:'Capture een HTTPS-handshake en DNS-query. Markeer sockets, TCP-flags, seq/ack, window en de UDP-header; simuleer één verloren segment/datagram.',success:['Handshake correct','Ephemeral en serverpoort onderscheiden','TCP-herstel verklaard','UDP-gedrag correct']},
        ['Een poort is geen fysieke switchpoort.','TCP maakt IP zelf niet betrouwbaar.','DNS kan UDP én TCP gebruiken.'],
        [Q('Welke TCP-volgorde start een sessie?',['SYN, SYN-ACK, ACK','ACK, FIN, RST','DISCOVER, OFFER, REQUEST','NS, NA, RA'],0,'Dat is de three-way handshake.'),Q('Welke UDP-eigenschap is correct?',['Geen ingebouwde ordering of retransmissie','Altijd trager dan TCP','Gebruikt geen poorten','Heeft een 40-byte header'],0,'UDP houdt het transport minimaal.'),Q('Welke poort is HTTPS standaard?',['443/TCP','80/UDP','53/TCP uitsluitend','22/UDP'],0,'HTTPS gebruikt normaal TCP 443 (naast moderne QUIC-varianten over UDP).')]),

      M(15, 'Application Layer', '#a29bfe',
        'Leg uit hoe client/server en peer-to-peerapplicaties DNS, DHCP, web, e-mail en bestandsoverdracht gebruiken.',
        {type:'application',nodes:['Client','DNS','DHCP','Web/Mail server','File peer'],links:[[0,1,'name→IP'],[0,2,'lease'],[0,3,'HTTP/SMTP'],[0,4,'SMB/P2P']]},
        [
          S('15.1','Application, Presentation, and Session',[
            'De TCP/IP-applicatielaag omvat OSI application, presentation en session: netwerkservice, syntax/encoding/compressie/encryptie en dialoogbeheer.',
            'Een user application gebruikt een application-layer protocol; browser en HTTP zijn niet hetzelfde. TLS presenteert beveiliging tussen applicatie en transport.'
          ]),
          S('15.2','Peer-to-Peer',[
            'In client-server leveren dedicated servers schaalbaar centraal beheer. In peer-to-peer kunnen hosts tegelijk client en server zijn; eenvoudig maar lastiger te beveiligen en beheren.',
            'P2P applications kunnen via een index/trackers peers ontdekken en data direct distribueren. Architectuurkeuze is onafhankelijk van fysieke topologie.'
          ]),
          S('15.3','Web and Email Protocols',[
            'HTTP request/response gebruikt methoden en statuscodes; HTTPS is HTTP beveiligd met TLS. Een URL bevat schema, host, optionele poort, pad en query.',
            'SMTP verzendt mail tussen client/server en servers; POP3 downloadt eenvoudig, IMAP synchroniseert mappen/status met de server. DNS MX helpt mailrouting.'
          ]),
          S('15.4','IP Addressing Services',[
            'DNS is hiërarchisch: resolver vraagt records zoals A, AAAA, CNAME, MX en NS en cachet volgens TTL. Een naamprobleem kan bestaan terwijl IP-connectiviteit werkt.',
            'DHCPv4 DORA: Discover, Offer, Request, Acknowledge. Het levert adres, masker, gateway, DNS en lease; relay forwardt broadcasts naar een server in een ander subnet.'
          ],`ipconfig /all\nipconfig /release\nipconfig /renew\nnslookup example.com`,['Leaseparameters correct','Naam en direct IP apart getest']),
          S('15.5','File Sharing Services',[
            'FTP gebruikt TCP-control en aparte dataconnectie; active/passive verschilt in initiator van data. TFTP gebruikt UDP en mist authenticatie/encryptie; SFTP draait over SSH.',
            'SMB deelt Windowsbestanden/printers; NFS is gangbaar op Unix/Linux. Kies protocol op beveiliging, beheer, interoperabiliteit en netwerkpad.'
          ])
        ],
        {title:'Dienstketen analyseren',task:'Laat een nieuwe client via DHCP configureren, DNS oplossen, HTTPS openen, mail verzenden en een bestand ophalen. Teken per stap protocol, transport en serverpoort.',success:['DORA correct','DNS-records correct','Web/mail/fileprotocollen onderscheiden','Problemen per laag isoleerbaar']},
        ['Een geslaagde ping op IP bewijst DNS niet.','POP3, IMAP en SMTP hebben verschillende rollen.','TFTP is niet hetzelfde als beveiligde SFTP.'],
        [Q('Welke DHCPv4-volgorde is correct?',['Discover, Offer, Request, Acknowledge','Request, Discover, Ack, Offer','SYN, SYN-ACK, ACK','Query, Reply, Update'],0,'DORA beschrijft leaseverlening.'),Q('Welk DNS-record bevat een IPv6-adres?',['AAAA','A','MX','PTR uitsluitend'],0,'AAAA mappt naam naar IPv6.'),Q('Welk protocol synchroniseert mail op de server?',['IMAP','SMTP alleen','ARP','TFTP'],0,'IMAP bewaart/synchroniseert mailboxstatus.')]),

      M(16, 'Network Security Fundamentals', '#e17055',
        'Herken dreigingen en kwetsbaarheden, koppel aanvallen aan mitigatie en harden IOS-apparaten.',
        {type:'security',nodes:['Threat actor','Endpoint','Switch/Router','AAA/Logs','Protected data'],links:[[0,1,'phish/malware'],[1,2,'lateral'],[2,3,'control'],[3,4,'CIA']]},
        [
          S('16.1','Security Threats and Vulnerabilities',[
            'CIA staat voor confidentiality, integrity en availability. Een threat kan een vulnerability misbruiken; risk combineert waarschijnlijkheid en impact.',
            'Dreigingen zijn extern of intern, opzettelijk of accidenteel. Kwetsbaarheden ontstaan in technologie, configuratie, beleid en menselijk gedrag.'
          ]),
          S('16.2','Network Attacks',[
            'Malware omvat virus, worm, trojan, ransomware en spyware. Reconnaissance verzamelt informatie; access attacks misbruiken credentials/kwetsbaarheden; DoS tast beschikbaarheid aan.',
            'Social engineering zoals phishing en pretexting richt zich op mensen. Spoofing, MITM, password attacks en data exfiltration vragen verschillende detectie en mitigatie.'
          ]),
          S('16.3','Network Attack Mitigation',[
            'Defense in depth combineert patches, least privilege, MFA, firewalls/ACLs, IDS/IPS, endpoint security, segmentatie, encryptie, back-ups en monitoring.',
            'Beveilig management met SSH, AAA en afgescheiden toegang. Baselines, logs, NTP en incidentprocedures maken afwijkingen aantoonbaar.'
          ]),
          S('16.4','Device Security',[
            'Gebruik sterke secrets, lokale fallbackaccounts, SSHv2, VTY-beperking, timeouts, banners en versleutelde beheerprotocollen. Schakel ongebruikte poorten/services uit.',
            'Login block-for en logging beperken/registreren brute force. Bewaar config veilig, test herstel en geef gebruikers minimale privilege.'
          ],`enable secret <GEHEIM>\nsecurity passwords min-length 10\nlogin block-for 120 attempts 3 within 60\nip ssh version 2\nline vty 0 4\n login local\n transport input ssh\n exec-timeout 5 0`,['show login','show ip ssh','show users','Logs met correcte tijd'])
        ],
        {title:'IOS hardening',task:'Harden router en switch, blokkeer Telnet, beperk VTY, zet ongebruikte poorten uit, configureer logging/tijd en test drie mislukte plus één geldige login.',success:['Alleen SSH','Brute-forcevertraging zichtbaar','Minimale services','Config en herstel gedocumenteerd']},
        ['Password-encryption is geen vervanging voor secrets.','Een firewall alleen is geen defense in depth.','Beschikbaarheid en logging horen ook bij security.'],
        [Q('Welke CIA-eigenschap beschermt tegen ongeoorloofde wijziging?',['Integrity','Availability','Confidentiality','Latency'],0,'Integrity bewaakt juistheid en onveranderdheid.'),Q('Welke beheeroptie vermijdt leesbare credentials onderweg?',['SSHv2','Telnet','HTTP','Een banner'],0,'SSH versleutelt de sessie.'),Q('Wat is least privilege?',['Alleen minimaal noodzakelijke rechten geven','Iedereen privilege 15 geven','Alle logs wissen','Alle poorten trusted maken'],0,'Beperk rechten tot taakbehoefte.')]),

      M(17, 'Build a Small Network', '#2d3436',
        'Ontwerp, bouw, verifieer en troubleshoot een klein dual-stacknetwerk met passende apparaten, diensten en documentatie.',
        {type:'small-network',nodes:['Users/AP','S1','R1/Firewall','ISP','Server/DNS-DHCP'],links:[[0,1,'access'],[1,2,'gateway'],[2,3,'WAN'],[1,4,'services']]},
        [
          S('17.1','Devices in a Small Network',[
            'Inventariseer gebruikers, applicaties, verkeer, groei, security en beschikbaarheid. Kies switchpoorten/snelheden, router/WAN, AP-capaciteit, firewall en eventuele servers passend bij eisen.',
            'Plan IP-adressen, namen, kabels, locaties, stroom/UPS, beheer en reserve. Een eenvoudig diagram en inventaris versnellen elke wijziging.'
          ]),
          S('17.2','Small Network Applications and Protocols',[
            'Veelgebruikte infrastructuurdiensten zijn DHCP, DNS, NTP, directory/authenticatie, file/print, web en monitoring. Hun protocollen en poorten bepalen policies en troubleshooting.',
            'Prioriteer real-time voice/video met QoS waar congestie kan optreden; beveilig services en beperk onnodige exposure.'
          ]),
          S('17.3','Scale to Larger Networks',[
            'Groei vraagt hiërarchie, adresplanning/summarization, VLAN-segmentatie, redundantie, snellere uplinks, centrale services, monitoring en change management.',
            'Meet utilization, errors, CPU/memory, latency en beschikbaarheid tegen een baseline. Schalen is meer dan hardware toevoegen.'
          ]),
          S('17.4','Verify Connectivity',[
            'Gebruik een testplan met laag-voor-laag en dichtbij-naar-ver: fysieke link, interface, lokaal IP, gateway, remote IP, DNS en applicatie.',
            'Ping meet bereikbaarheid/RTT; tracert/traceroute lokaliseert het pad. Leg verwachte en feitelijke resultaten vast zodat regressies zichtbaar zijn.'
          ]),
          S('17.5','Host and IOS Commands',[
            'Hosts: `ipconfig`/`ip addr`, `arp -a`/`ip neigh`, `route print`/`ip route`, `netstat`/`ss`, `nslookup`/`dig`, ping en traceroute.',
            'IOS: `show ip interface brief`, `show interfaces`, `show mac address-table`, `show arp`, `show ip route`, `show cdp neighbors`, `show running-config` en logging.'
          ],`show ip interface brief\nshow interfaces counters errors\nshow mac address-table\nshow arp\nshow ip route\nshow cdp neighbors detail`),
          S('17.6','Troubleshooting Methodologies',[
            'Proces: probleem definiëren, feiten verzamelen, theorie vormen, theorie testen, actieplan uitvoeren, functionaliteit verifiëren, preventie en documentatie vastleggen.',
            'Methoden zijn bottom-up, top-down, divide-and-conquer, follow-the-path, substitution en comparison. Kies op symptoom en beschikbare gegevens.'
          ]),
          S('17.7','Troubleshooting Scenarios',[
            'Typische fouten: verkeerde kabel/poort, shutdown, speed/duplex, fout IP/mask/gateway/DNS, ontbrekende route, stale ARP, service down of filtering.',
            'Verander één bewezen oorzaak tegelijk. Vergelijk running-config (intentie) met operationele tabellen/counters (werkelijkheid) en test ook het retourpad.'
          ])
        ],
        {title:'Capstone small network',task:'Ontwerp en bouw een klein kantoor met router, switch, AP, server en clients. Configureer dual stack, veilige beheerbasis en diensten; laat een partner vijf fouten plaatsen en documenteer diagnose.',success:['Diagram en adresplan','Alle basisdiensten','Beveiligd beheer','Testmatrix groen','Vijf bewijsgerichte fixes']},
        ['Reload/reset is geen eerste troubleshootingstap.','Een configregel bewijst niet dat de functie operationeel is.','Documentatie is onderdeel van de oplossing.'],
        [Q('Wat is de beste eerste stap bij troubleshooting?',['Probleem en scope precies definiëren','Alles herstarten','Configuratie wissen','Alle filters uitschakelen'],0,'Een correcte probleemdefinitie voorkomt willekeurige wijzigingen.'),Q('Welke methode test een middenlaag en halveert daarna het zoekgebied?',['Divide-and-conquer','Bottom-up uitsluitend','Substitution','Guessing'],0,'Een middentest bepaalt boven- of onderkant.'),Q('Waarom een baseline bewaren?',['Om normaal gedrag met het incident te vergelijken','Om wachtwoorden openbaar te maken','Om subnetting te vermijden','Om geen logs nodig te hebben'],0,'Zonder normaalbeeld is afwijking moeilijk meetbaar.')])
    ]
  };
})();
