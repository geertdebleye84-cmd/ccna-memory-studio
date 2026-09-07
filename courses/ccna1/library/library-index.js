window.CCNA1_QA_LIBRARY = {
  "schemaVersion": 1,
  "courseId": "ccna1-itn",
  "title": "CCNA1 Vraag & Antwoord Library",
  "masteryRule": "Alleen multiple-choice- en diagnoseantwoorden tellen als bewijs. Een item is beheerst na minstens twee correcte antwoorden; flashcards zijn herhaling en kleuren het lampje niet kunstmatig groen.",
  "modules": [
    {
      "id": 1,
      "title": "Networking Today",
      "summary": "Plaats hosts, tussenliggende apparaten, media, topologieën en internetdiensten in één betrouwbaar en veilig netwerkmodel.",
      "filename": "modules/module-01.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 9,
        "total": 14
      },
      "cards": [
        {
          "id": "ccna1-m01-q01",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.4",
          "sectionTitle": "Common Types of Networks",
          "type": "knowledge",
          "prompt": "Welk apparaat verbindt normaal verschillende IP-netwerken?",
          "choices": [
            "Router",
            "Layer-2-hub",
            "Patchpaneel",
            "NIC"
          ],
          "correctIndex": 0,
          "answer": "Router",
          "explanation": "Een router kiest een Layer-3-pad tussen netwerken.",
          "tags": [
            "networking",
            "today",
            "common",
            "types",
            "networks",
            "welk",
            "apparaat",
            "verbindt",
            "normaal",
            "verschillende"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m01-q02",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.6",
          "sectionTitle": "Reliable Networks",
          "type": "knowledge",
          "prompt": "Welke vier eigenschappen horen bij een betrouwbaar netwerk?",
          "choices": [
            "Fault tolerance, schaalbaarheid, QoS en beveiliging",
            "DNS, DHCP, FTP en HTTP",
            "Koper, glas, radio en coax",
            "CLI, GUI, API en console"
          ],
          "correctIndex": 0,
          "answer": "Fault tolerance, schaalbaarheid, QoS en beveiliging",
          "explanation": "Dit zijn de vier ontwerpvereisten uit de module.",
          "tags": [
            "networking",
            "today",
            "reliable",
            "networks",
            "vier",
            "eigenschappen",
            "horen",
            "betrouwbaar",
            "netwerk"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m01-q03",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.3",
          "sectionTitle": "Network Representations and Topologies",
          "type": "knowledge",
          "prompt": "Wat toont een logisch diagram vooral?",
          "choices": [
            "Adressen, subnetten en verkeersrelaties",
            "De exacte kabellengtes in een rack",
            "Alleen gebouwafmetingen",
            "De aankoopprijs van apparaten"
          ],
          "correctIndex": 0,
          "answer": "Adressen, subnetten en verkeersrelaties",
          "explanation": "Logische topologie beschrijft communicatie en adressering.",
          "tags": [
            "networking",
            "today",
            "network",
            "representations",
            "and",
            "topologies",
            "toont",
            "logisch",
            "diagram",
            "vooral"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m01-s01",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.3",
          "sectionTitle": "Network Representations and Topologies",
          "type": "diagnosis",
          "prompt": "Een nieuw netwerkdiagram toont wel apparaten en kabels, maar geen IP-subnetten, gateways of VLANs. Waarom is het ongeschikt voor routingdiagnose?",
          "choices": [
            "Het is alleen een fysiek diagram; de logische adresrelaties ontbreken.",
            "Het gebruikt te veel Layer-3-informatie.",
            "Elke kabel moet een DNS-naam hebben.",
            "Een diagram mag nooit beide topologieën tonen."
          ],
          "correctIndex": 0,
          "answer": "Het is alleen een fysiek diagram; de logische adresrelaties ontbreken.",
          "explanation": "Routingdiagnose vraagt een logisch overzicht van adressen, subnetten en verkeersrelaties.",
          "tags": [
            "networking",
            "today",
            "network",
            "representations",
            "and",
            "topologies",
            "nieuw",
            "netwerkdiagram",
            "toont",
            "wel"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m01-s02",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.6",
          "sectionTitle": "Reliable Networks",
          "type": "diagnosis",
          "prompt": "Een kantoor heeft één router, één ISP-link en geen reservepad. Na één kabelbreuk is alles offline. Welke betrouwbaarheidseis ontbreekt?",
          "choices": [
            "Fault tolerance door redundantie.",
            "Meer DNS-records.",
            "Een groter broadcastdomein.",
            "Een lagere Ethernet-FCS."
          ],
          "correctIndex": 0,
          "answer": "Fault tolerance door redundantie.",
          "explanation": "Zonder redundant pad blijft de verbinding een single point of failure.",
          "tags": [
            "networking",
            "today",
            "reliable",
            "networks",
            "kantoor",
            "heeft",
            "router",
            "isp-link",
            "geen",
            "reservepad."
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m01-f01",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.1",
          "sectionTitle": "Networks Affect our Lives",
          "type": "flashcard",
          "front": "1.1 · Networks Affect our Lives",
          "back": "Netwerken verbinden mensen, processen, gegevens en apparaten. Ze maken communicatie, samenwerking, leren, werken, automatisering en dienstverlening onafhankelijker van plaats en tijd. Converged networks dragen data, spraak en video over één beheerde infrastructuur; beschikbaarheid en beveiliging worden daardoor bedrijfskritisch.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "networks",
            "affect",
            "our",
            "lives"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f02",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.2",
          "sectionTitle": "Network Components",
          "type": "flashcard",
          "front": "1.2 · Network Components",
          "back": "Hosts of end devices zijn bron of bestemming van berichten. Servers leveren diensten; clients vragen ze aan; een apparaat kan in peer-to-peercontext beide rollen hebben. Switches, routers, access points en firewalls sturen verkeer tussen hosts en netwerken. NIC, poort en interface koppelen een apparaat aan koper, glasvezel of radio.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "network",
            "components"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f03",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.3",
          "sectionTitle": "Network Representations and Topologies",
          "type": "flashcard",
          "front": "1.3 · Network Representations and Topologies",
          "back": "Een logisch diagram toont adressen, subnetten, VLANs en verkeerspaden; een fysiek diagram toont locaties, bekabeling, racks en poorten. Belangrijke symbolen en termen zijn NIC, fysieke poort, interface, LAN, WAN en cloud. Documenteer beide topologieën om configuratie en storingen te begrijpen.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "network",
            "representations",
            "and",
            "topologies"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f04",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.4",
          "sectionTitle": "Common Types of Networks",
          "type": "flashcard",
          "front": "1.4 · Common Types of Networks",
          "back": "Een SOHO/LAN bedient een beperkte locatie; een WAN verbindt geografisch gescheiden LANs. Internet is een wereldwijde internetwork van autonome netwerken. Een intranet is intern voor een organisatie; een extranet geeft gecontroleerde toegang aan externe partners. Eigendom, schaal, beheer en technologie onderscheiden netwerken.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "common",
            "types",
            "networks"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f05",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.5",
          "sectionTitle": "Internet Connections",
          "type": "flashcard",
          "front": "1.5 · Internet Connections",
          "back": "Consumenten gebruiken onder meer kabel, DSL, glasvezel, mobiel en satelliet. Organisaties gebruiken daarnaast dedicated Ethernet, leased lines, MPLS of zakelijke breedband. Keuzecriteria zijn bandbreedte, latency, symmetrie, beschikbaarheid, dekking, SLA, kosten en redundantie; internettoegang loopt via een ISP.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "internet",
            "connections"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f06",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.6",
          "sectionTitle": "Reliable Networks",
          "type": "flashcard",
          "front": "1.6 · Reliable Networks",
          "back": "Een betrouwbaar netwerk levert fault tolerance, schaalbaarheid, QoS en beveiliging. Redundante paden verminderen single points of failure. Packet-switched verkeer deelt verbindingen efficiënt. QoS prioriteert tijdgevoelige stromen; beveiliging beschermt infrastructuur en gegevens.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "reliable",
            "networks"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f07",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.7",
          "sectionTitle": "Network Trends",
          "type": "flashcard",
          "front": "1.7 · Network Trends",
          "back": "BYOD, collaboration, video, cloud, smart home en IoT verhogen mobiliteit en het aantal verbonden endpoints. Public, private, hybrid en community cloud verschillen in eigendom en afscherming. Powerline en wireless broadband vullen traditionele toegang aan.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "network",
            "trends"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f08",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.8",
          "sectionTitle": "Network Security",
          "type": "flashcard",
          "front": "1.8 · Network Security",
          "back": "Externe en interne dreigingen omvatten malware, phishing, kwetsbaarheden, gestolen accounts, denial-of-service en misbruik door bevoegde gebruikers. Verdedig in lagen met updates, sterke authenticatie, firewalls, endpointbescherming, segmentatie, encryptie, back-ups, logging en opleiding.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "network",
            "security"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m01-f09",
          "courseId": "ccna1-itn",
          "moduleId": 1,
          "moduleTitle": "Networking Today",
          "sectionId": "1.9",
          "sectionTitle": "The IT Professional",
          "type": "flashcard",
          "front": "1.9 · The IT Professional",
          "back": "Netwerkrollen lopen van support en technicus tot beheerder, engineer, architect, security- of automatiseringsspecialist. Vaardigheden worden aangetoond met labs, portfolio, documentatie en certificering; Cisco DevNet koppelt netwerkkennis aan software en API’s.",
          "commands": "",
          "verify": [],
          "tags": [
            "networking",
            "today",
            "the",
            "professional"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 2,
      "title": "Basic Switch and End Device Configuration",
      "summary": "Bedien Cisco IOS veilig, configureer een switch en hosts, bewaar de configuratie en bewijs lokale connectiviteit.",
      "filename": "modules/module-02.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 8,
        "total": 13
      },
      "cards": [
        {
          "id": "ccna1-m02-q01",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.1",
          "sectionTitle": "Cisco IOS Access",
          "type": "knowledge",
          "prompt": "Welke toegang is versleuteld?",
          "choices": [
            "SSH",
            "Telnet",
            "Consolekabel als IP-protocol",
            "HTTP"
          ],
          "correctIndex": 0,
          "answer": "SSH",
          "explanation": "SSH beschermt de beheersessie over het netwerk.",
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "cisco",
            "ios",
            "access",
            "toegang"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m02-q02",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.5",
          "sectionTitle": "Save Configurations",
          "type": "knowledge",
          "prompt": "Waar staat de actieve configuratie?",
          "choices": [
            "RAM",
            "NVRAM",
            "Flash uitsluitend",
            "ROM"
          ],
          "correctIndex": 0,
          "answer": "RAM",
          "explanation": "Running-config bevindt zich in RAM.",
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "save",
            "configurations",
            "waar",
            "staat"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m02-q03",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.7",
          "sectionTitle": "Configure IP Addressing",
          "type": "knowledge",
          "prompt": "Waarom krijgt een Layer-2-switch een IP-adres?",
          "choices": [
            "Voor beheer",
            "Om elk frame te routeren",
            "Om MAC-adressen te maken",
            "Om kabels te detecteren"
          ],
          "correctIndex": 0,
          "answer": "Voor beheer",
          "explanation": "Switching werkt op Layer 2; het adres dient beheer.",
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "configure",
            "addressing",
            "krijgt",
            "layer-2-switch"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m02-s01",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.7",
          "sectionTitle": "Configure IP Addressing",
          "type": "diagnosis",
          "prompt": "S1 heeft een correct management-IP, maar het SVI blijft down/down. De VLAN bestaat, maar geen enkele poort in die VLAN is actief. Wat is de oorzaak?",
          "choices": [
            "Een SVI heeft minstens één actieve Layer-2-poort in de VLAN nodig.",
            "De switch mist ip routing.",
            "Het enable secret is te lang.",
            "De host gebruikt DNS."
          ],
          "correctIndex": 0,
          "answer": "Een SVI heeft minstens één actieve Layer-2-poort in de VLAN nodig.",
          "explanation": "Een management-SVI wordt pas operationeel wanneer de bijbehorende VLAN actief is.",
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "configure",
            "addressing",
            "heeft",
            "correct"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m02-s02",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.5",
          "sectionTitle": "Save Configurations",
          "type": "diagnosis",
          "prompt": "Na een stroomonderbreking zijn alle nieuwe instellingen verdwenen. Voor de storing werkte alles. Wat is waarschijnlijk vergeten?",
          "choices": [
            "Running-config naar startup-config kopiëren.",
            "De MAC-tabel statisch maken.",
            "De consolekabel verwijderen.",
            "De hostnaam via DHCP uitdelen."
          ],
          "correctIndex": 0,
          "answer": "Running-config naar startup-config kopiëren.",
          "explanation": "Niet-opgeslagen running-config in RAM verdwijnt bij reload of stroomverlies.",
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "save",
            "configurations",
            "stroomonderbreking",
            "alle"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m02-f01",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.1",
          "sectionTitle": "Cisco IOS Access",
          "type": "flashcard",
          "front": "2.1 · Cisco IOS Access",
          "back": "Console geeft out-of-band toegang; SSH is versleutelde in-band toegang; Telnet verzendt beheerinformatie leesbaar en moet worden vermeden. Terminalemulatie gebruikt passende console-instellingen. Remote beheer vereist eerst IP-connectiviteit en beveiligde VTY-configuratie.",
          "commands": "",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "cisco",
            "ios",
            "access"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f02",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.2",
          "sectionTitle": "IOS Navigation",
          "type": "flashcard",
          "front": "2.2 · IOS Navigation",
          "back": "User EXEC (`>`), privileged EXEC (`#`), global configuration en subconfiguratiemodi hebben verschillende rechten. `enable`, `configure terminal`, `exit`, `end` en Ctrl-Z navigeren. De prompt toont modus en apparaatnaam. `disable` keert terug; context-sensitive help voorkomt gokwerk.",
          "commands": "enable\nconfigure terminal\ninterface vlan 1\nexit\nend",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "ios",
            "navigation"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f03",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.3",
          "sectionTitle": "The Command Structure",
          "type": "flashcard",
          "front": "2.3 · The Command Structure",
          "back": "IOS-commando’s bestaan uit keyword(s), argumenten en parameters. `?`, verkorte unieke commando’s, Tab, pijl-omhoog en opdrachtgeschiedenis versnellen correct werk. Foutmeldingen onderscheiden ambiguous, incomplete en invalid input. Controleer het caret-teken en de actieve modus.",
          "commands": "",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "the",
            "command",
            "structure"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f04",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.4",
          "sectionTitle": "Basic Device Configuration",
          "type": "flashcard",
          "front": "2.4 · Basic Device Configuration",
          "back": "Stel hostname, enable secret, console- en VTY-beveiliging, banner en versleuteling van leesbare wachtwoorden in. Een secret gebruikt een hash en verdient voorkeur boven password. Gebruik unieke sterke wachtwoorden; een banner is juridisch/operationeel, geen toegangscontrole.",
          "commands": "hostname S1\nno ip domain-lookup\nenable secret <GEHEIM>\nservice password-encryption\nbanner motd # Alleen bevoegde toegang #\nline console 0\n password <GEHEIM>\n login",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f05",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.5",
          "sectionTitle": "Save Configurations",
          "type": "flashcard",
          "front": "2.5 · Save Configurations",
          "back": "Running-config staat in RAM en verandert direct; startup-config staat in NVRAM en wordt bij boot geladen. `copy running-config startup-config` bewaart wijzigingen. `reload` zonder opslaan verliest actieve wijzigingen. Wis alleen bewust; controleer voor en na met show-commando’s.",
          "commands": "show running-config\nshow startup-config\ncopy running-config startup-config",
          "verify": [
            "Configuratie blijft na reload beschikbaar"
          ],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "save",
            "configurations"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f06",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.6",
          "sectionTitle": "Ports and Addresses",
          "type": "flashcard",
          "front": "2.6 · Ports and Addresses",
          "back": "Een fysieke poort draagt signalen; een IOS-interface is het configureerbare aansluitpunt. IPv4/IPv6-adres en masker/prefix identificeren host en netwerk. Een switch management-SVI geeft de switch IP-beheer, maar is niet nodig voor Layer-2 frameforwarding.",
          "commands": "",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "ports",
            "addresses"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f07",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.7",
          "sectionTitle": "Configure IP Addressing",
          "type": "flashcard",
          "front": "2.7 · Configure IP Addressing",
          "back": "Configureer hostadres, subnetmasker/prefix, default gateway en eventueel DNS. Alle lokale hosts moeten unieke adressen uit hetzelfde subnet hebben. Een Layer-2-switch krijgt een managementadres op een SVI plus `ip default-gateway` voor beheer buiten het lokale subnet.",
          "commands": "interface vlan 1\n ip address 192.0.2.2 255.255.255.0\n no shutdown\nexit\nip default-gateway 192.0.2.1",
          "verify": [],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "configure",
            "addressing"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m02-f08",
          "courseId": "ccna1-itn",
          "moduleId": 2,
          "moduleTitle": "Basic Switch and End Device Configuration",
          "sectionId": "2.8",
          "sectionTitle": "Verify Connectivity",
          "type": "flashcard",
          "front": "2.8 · Verify Connectivity",
          "back": "`ipconfig`/`ip addr`, `show ip interface brief` en `ping` bewijzen respectievelijk hostconfiguratie, interfacestatus en bereikbaarheid. Test oplopend: lokale stack, eigen adres, lokale buur, gateway en pas daarna remote doel.",
          "commands": "show ip interface brief\nping 192.0.2.10",
          "verify": [
            "Interfaces up/up",
            "Unieke adressen",
            "Pings in beide richtingen"
          ],
          "tags": [
            "basic",
            "switch",
            "and",
            "end",
            "device",
            "configuration",
            "verify",
            "connectivity"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 3,
      "title": "Protocols and Models",
      "summary": "Verklaar netwerkcommunicatie met protocollen, suites, standaarden, OSI/TCP-IP, encapsulatie en lokale/remote aflevering.",
      "filename": "modules/module-03.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 7,
        "total": 12
      },
      "cards": [
        {
          "id": "ccna1-m03-q01",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.6",
          "sectionTitle": "Data Encapsulation",
          "type": "knowledge",
          "prompt": "Welke PDU hoort bij de netwerklaag?",
          "choices": [
            "Packet",
            "Frame",
            "Bits",
            "Data-link trailer"
          ],
          "correctIndex": 0,
          "answer": "Packet",
          "explanation": "IP vormt packets op Layer 3.",
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "encapsulation",
            "pdu",
            "hoort",
            "netwerklaag"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m03-q02",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.7",
          "sectionTitle": "Data Access",
          "type": "knowledge",
          "prompt": "Welk adres verandert normaal bij elke routerhop?",
          "choices": [
            "Het Layer-2 adres",
            "Het doel-IP",
            "De TCP-bestemmingspoort",
            "De applicatie-URL"
          ],
          "correctIndex": 0,
          "answer": "Het Layer-2 adres",
          "explanation": "Elke router maakt een nieuw frame.",
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "access",
            "welk",
            "adres",
            "verandert",
            "normaal",
            "elke"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m03-q03",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.4",
          "sectionTitle": "Standards Organizations",
          "type": "knowledge",
          "prompt": "Wie publiceert internet-RFC’s?",
          "choices": [
            "IETF",
            "IEEE 802.3-switch",
            "Een lokale ISP alleen",
            "TIA-kabeltester"
          ],
          "correctIndex": 0,
          "answer": "IETF",
          "explanation": "De IETF ontwikkelt internetstandaarden via RFC’s.",
          "tags": [
            "protocols",
            "and",
            "models",
            "standards",
            "organizations",
            "wie",
            "publiceert",
            "internet-rfc"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m03-s01",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.7",
          "sectionTitle": "Data Access",
          "type": "diagnosis",
          "prompt": "Een host wil een server in een ander subnet bereiken en gebruikt als destination MAC het MAC-adres van de server. Waarom mislukt de lokale aflevering?",
          "choices": [
            "Voor een remote doel moet het frame naar het MAC-adres van de default gateway.",
            "De destination IP moet broadcast zijn.",
            "TCP gebruikt geen MAC-adressen.",
            "De switch moet het remote subnet routeren."
          ],
          "correctIndex": 0,
          "answer": "Voor een remote doel moet het frame naar het MAC-adres van de default gateway.",
          "explanation": "Layer-2-aflevering is lokaal; de router is de next hop voor remote IP-doelen.",
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "access",
            "host",
            "wil",
            "server",
            "ander",
            "subnet"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m03-s02",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.6",
          "sectionTitle": "Data Encapsulation",
          "type": "diagnosis",
          "prompt": "Een capture toont op elke routerhop andere Ethernetadressen, maar dezelfde IP-bron en bestemming. Welke proces verklaart dit?",
          "choices": [
            "Elke router decapsuleert en bouwt voor de volgende link een nieuw frame.",
            "Elke router maakt een nieuw TCP-segment.",
            "DNS herschrijft de IP-header.",
            "De FCS bepaalt het doel-IP."
          ],
          "correctIndex": 0,
          "answer": "Elke router decapsuleert en bouwt voor de volgende link een nieuw frame.",
          "explanation": "De Layer-2-encapsulatie verandert per link terwijl het Layer-3-packet end-to-end blijft.",
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "encapsulation",
            "capture",
            "toont",
            "elke",
            "routerhop",
            "andere"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m03-f01",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.1",
          "sectionTitle": "The Rules",
          "type": "flashcard",
          "front": "3.1 · The Rules",
          "back": "Communicatie vereist overeengekomen afzender/ontvanger, taal/codering, formaat, timing, grootte en bevestiging. Message encoding, encapsulation, size, timing en delivery options gelden voor menselijke én netwerkcommunicatie.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "the",
            "rules"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f02",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.2",
          "sectionTitle": "Protocols",
          "type": "flashcard",
          "front": "3.2 · Protocols",
          "back": "Een protocol definieert formaat, betekenis, volgorde en reactie. Meerdere protocollen werken samen per laag. Functies zijn adressering, betrouwbaarheid, flow control, sequencing, foutdetectie en applicatieservice.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f03",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.3",
          "sectionTitle": "Protocol Suites",
          "type": "flashcard",
          "front": "3.3 · Protocol Suites",
          "back": "Een suite is een interoperabele verzameling protocollen. TCP/IP is de dominante open suite van applicatie tot netwerktoegang. Protocolinteraction kan bijvoorbeeld HTTP→TCP→IP→Ethernet zijn; elke laag levert diensten aan de laag erboven.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "protocol",
            "suites"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f04",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.4",
          "sectionTitle": "Standards Organizations",
          "type": "flashcard",
          "front": "3.4 · Standards Organizations",
          "back": "IETF publiceert RFC’s voor internetprotocollen; IEEE standaardiseert onder meer Ethernet en WLAN; ISO ontwikkelde het OSI-model. ICANN/IANA beheert naam- en nummerbronnen; TIA/EIA en ITU dragen bij aan bekabeling en telecommunicatie. Open standaarden bevorderen interoperabiliteit.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "standards",
            "organizations"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f05",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.5",
          "sectionTitle": "Reference Models",
          "type": "flashcard",
          "front": "3.5 · Reference Models",
          "back": "OSI: application, presentation, session, transport, network, data link, physical. TCP/IP: application, transport, internet, network access. Modellen scheiden verantwoordelijkheden, helpen ontwerp en troubleshooting en laten leveranciers onafhankelijk implementeren.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "reference"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f06",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.6",
          "sectionTitle": "Data Encapsulation",
          "type": "flashcard",
          "front": "3.6 · Data Encapsulation",
          "back": "Data wordt segment/datagram, packet, frame en bits; de ontvanger decapsuleert omgekeerd. Elke PDU heeft laagspecifieke controle-informatie. TCP/UDP-poorten identificeren processen, IP-adressen end-to-end hosts/netwerken en MAC-adressen de lokale link.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "encapsulation"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m03-f07",
          "courseId": "ccna1-itn",
          "moduleId": 3,
          "moduleTitle": "Protocols and Models",
          "sectionId": "3.7",
          "sectionTitle": "Data Access",
          "type": "flashcard",
          "front": "3.7 · Data Access",
          "back": "Voor een lokaal doel gebruikt de bron het doel-MAC; voor een remote doel gebruikt hij het MAC-adres van de default gateway, terwijl het doel-IP remote blijft. MAC-adressen veranderen per routed hop; bron- en doel-IP blijven normaal end-to-end gelijk zonder NAT. ARP/NDP resolveert lokale next hops.",
          "commands": "",
          "verify": [],
          "tags": [
            "protocols",
            "and",
            "models",
            "data",
            "access"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 4,
      "title": "Physical Layer",
      "summary": "Koppel bits aan signalering, normen, bandbreedte en geschikte koper-, glasvezel- of draadloze media.",
      "filename": "modules/module-04.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 6,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna1-m04-q01",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.2",
          "sectionTitle": "Physical Layer Characteristics",
          "type": "knowledge",
          "prompt": "Welke waarde sluit protocoloverhead uit?",
          "choices": [
            "Goodput",
            "Bandwidth",
            "Kloksnelheid",
            "Duplex"
          ],
          "correctIndex": 0,
          "answer": "Goodput",
          "explanation": "Goodput telt nuttige applicatiedata.",
          "tags": [
            "physical",
            "layer",
            "characteristics",
            "waarde",
            "sluit",
            "protocoloverhead"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m04-q02",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.5",
          "sectionTitle": "Fiber-Optic Cabling",
          "type": "knowledge",
          "prompt": "Welke fiber is typisch voor de grootste afstanden?",
          "choices": [
            "Single-mode",
            "Multimode met grote kern",
            "UTP Cat 5e",
            "Coax"
          ],
          "correctIndex": 0,
          "answer": "Single-mode",
          "explanation": "Single-mode beperkt modale dispersie.",
          "tags": [
            "physical",
            "layer",
            "fiber-optic",
            "cabling",
            "fiber",
            "typisch",
            "grootste",
            "afstanden"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m04-q03",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.3",
          "sectionTitle": "Copper Cabling",
          "type": "knowledge",
          "prompt": "Wat beperkt crosstalk in UTP?",
          "choices": [
            "Getwiste aderparen",
            "Een groter IP-masker",
            "DNS",
            "Full-duplex routing"
          ],
          "correctIndex": 0,
          "answer": "Getwiste aderparen",
          "explanation": "Twisting laat storingen elkaar grotendeels opheffen.",
          "tags": [
            "physical",
            "layer",
            "copper",
            "cabling",
            "beperkt",
            "crosstalk",
            "utp"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m04-s01",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.3",
          "sectionTitle": "Copper Cabling",
          "type": "diagnosis",
          "prompt": "Een koperen link is up maar toont toenemende CRC-fouten wanneer een zware motor draait. Wat is de waarschijnlijkste oorzaak?",
          "choices": [
            "EMI op of nabij de koperkabel.",
            "Een ontbrekende default route.",
            "Een fout DNS-record.",
            "Een verlopen DHCP-lease."
          ],
          "correctIndex": 0,
          "answer": "EMI op of nabij de koperkabel.",
          "explanation": "Elektromagnetische storing kan signalen op koper beschadigen en CRC-fouten veroorzaken.",
          "tags": [
            "physical",
            "layer",
            "copper",
            "cabling",
            "koperen",
            "link",
            "maar",
            "toont",
            "toenemende",
            "crc-fouten"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m04-s02",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.4",
          "sectionTitle": "UTP Cabling",
          "type": "diagnosis",
          "prompt": "Een handgemaakte UTP-kabel geeft intermitterende link en de tester meldt gesplitste paren. Wat is fout?",
          "choices": [
            "De aders zijn niet volgens één correcte T568A/B-paarindeling getermineerd.",
            "De kabel gebruikt full duplex.",
            "Het IP-masker is te lang.",
            "De switch leert te weinig MAC-adressen."
          ],
          "correctIndex": 0,
          "answer": "De aders zijn niet volgens één correcte T568A/B-paarindeling getermineerd.",
          "explanation": "Correcte paarvorming en pinout zijn vereist om crosstalk en signaalproblemen te vermijden.",
          "tags": [
            "physical",
            "layer",
            "utp",
            "cabling",
            "handgemaakte",
            "utp-kabel",
            "geeft",
            "intermitterende",
            "link",
            "tester"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m04-f01",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.1",
          "sectionTitle": "Purpose of the Physical Layer",
          "type": "flashcard",
          "front": "4.1 · Purpose of the Physical Layer",
          "back": "De fysieke laag codeert framebits als elektrische, optische of radiosignalen en ontvangt ze weer. Ze definieert connectoren, pinouts, signalering en activering. NIC, medium en connector vormen samen de fysieke verbinding; hogere lagen zijn onafhankelijk van het gekozen medium.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "purpose",
            "the"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m04-f02",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.2",
          "sectionTitle": "Physical Layer Characteristics",
          "type": "flashcard",
          "front": "4.2 · Physical Layer Characteristics",
          "back": "Standards bepalen mechanische, elektrische/optische, functionele en procedurele eigenschappen. Encoding representeert bits; signaling bepaalt hoe waarden op het medium verschijnen. Bandwidth is theoretische capaciteit; throughput is gemeten levering; goodput sluit overhead en retransmissies uit. Latency en interferentie beïnvloeden prestaties.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "characteristics"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m04-f03",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.3",
          "sectionTitle": "Copper Cabling",
          "type": "flashcard",
          "front": "4.3 · Copper Cabling",
          "back": "Koper is goedkoop maar gevoelig voor EMI/RFI, crosstalk en afstandsverlies. Shielding, twisting, aarding en juiste aanleg beperken storing. UTP, STP en coax verschillen in constructie. Scheid datakabels van storingsbronnen en respecteer buigradius en maximale kanaallengte.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "copper",
            "cabling"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m04-f04",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.4",
          "sectionTitle": "UTP Cabling",
          "type": "flashcard",
          "front": "4.4 · UTP Cabling",
          "back": "UTP gebruikt vier getwiste aderparen met RJ-45/8P8C. T568A en T568B definiëren pinvolgorde; beide uiteinden gelijk is straight-through, verschillend crossover. Auto-MDIX vermindert de nood aan crossover, maar correcte terminatie, categorie en kabeltest blijven noodzakelijk.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "utp",
            "cabling"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m04-f05",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.5",
          "sectionTitle": "Fiber-Optic Cabling",
          "type": "flashcard",
          "front": "4.5 · Fiber-Optic Cabling",
          "back": "Glasvezel transporteert licht, is immuun voor EMI en ondersteunt grotere afstand/bandbreedte. Multimode gebruikt doorgaans LED/VCSEL; single-mode laser en een kleinere kern. Connectoren en transceivers moeten bij vezeltype en golflengte passen. Inspecteer/reinig uiteinden; kijk nooit in actieve fiber.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "fiber-optic",
            "cabling"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m04-f06",
          "courseId": "ccna1-itn",
          "moduleId": 4,
          "moduleTitle": "Physical Layer",
          "sectionId": "4.6",
          "sectionTitle": "Wireless Media",
          "type": "flashcard",
          "front": "4.6 · Wireless Media",
          "back": "Radio deelt het medium en is gevoelig voor interferentie, demping en beveiligingsrisico’s. WLAN gebruikt IEEE 802.11; Bluetooth 802.15 en mobiel andere standaarden. Een AP verbindt draadloze clients met de bedrade LAN. Kanaal, frequentie, antenne, afstand en obstakels bepalen dekking en capaciteit.",
          "commands": "",
          "verify": [],
          "tags": [
            "physical",
            "layer",
            "wireless",
            "media"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 5,
      "title": "Number Systems",
      "summary": "Converteer decimal, binair en hexadecimaal en herken hun rol in IPv4, subnetten, IPv6 en MAC-adressen.",
      "filename": "modules/module-05.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 2,
        "total": 7
      },
      "cards": [
        {
          "id": "ccna1-m05-q01",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.1",
          "sectionTitle": "Binary Number System",
          "type": "knowledge",
          "prompt": "Wat is binair 11000000?",
          "choices": [
            "192",
            "128",
            "224",
            "96"
          ],
          "correctIndex": 0,
          "answer": "192",
          "explanation": "De actieve bitgewichten 128 en 64 tellen samen op tot 192.",
          "tags": [
            "number",
            "systems",
            "binary",
            "system",
            "binair",
            "11000000"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m05-q02",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.2",
          "sectionTitle": "Hexadecimal Number System",
          "type": "knowledge",
          "prompt": "Welke hex-digit is binair 1010?",
          "choices": [
            "A",
            "B",
            "9",
            "F"
          ],
          "correctIndex": 0,
          "answer": "A",
          "explanation": "1010 is decimal 10, dus A.",
          "tags": [
            "number",
            "systems",
            "hexadecimal",
            "system",
            "hex-digit",
            "binair",
            "1010"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m05-q03",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.2",
          "sectionTitle": "Hexadecimal Number System",
          "type": "knowledge",
          "prompt": "Hoeveel bits vertegenwoordigen twee hex-digits?",
          "choices": [
            "8",
            "2",
            "4",
            "16"
          ],
          "correctIndex": 0,
          "answer": "8",
          "explanation": "Eén digit is vier bits; twee vormen een octet.",
          "tags": [
            "number",
            "systems",
            "hexadecimal",
            "system",
            "hoeveel",
            "bits",
            "vertegenwoordigen",
            "twee",
            "hex-digits"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m05-s01",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.1",
          "sectionTitle": "Binary Number System",
          "type": "diagnosis",
          "prompt": "Een host heeft IPv4-adres 192.0.2.130/26. Een beheerder noemt 192.0.2.128 het eerste hostadres. Wat is de fout?",
          "choices": [
            "192.0.2.128 is het netwerkadres van het /26-subnet.",
            "Een /26 heeft geen netwerkadres.",
            "192.0.2.130 is altijd een broadcast.",
            "Het adres moet hexadecimaal zijn."
          ],
          "correctIndex": 0,
          "answer": "192.0.2.128 is het netwerkadres van het /26-subnet.",
          "explanation": "Bij block size 64 begint dit subnet op .128; het eerste bruikbare hostadres is .129.",
          "tags": [
            "number",
            "systems",
            "binary",
            "system",
            "host",
            "heeft",
            "ipv4-adres",
            "192.0.2.130/26.",
            "beheerder",
            "noemt"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m05-s02",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.2",
          "sectionTitle": "Hexadecimal Number System",
          "type": "diagnosis",
          "prompt": "Een IPv6-hextet wordt geschreven als 0000:0000 en beide nulreeksen worden afzonderlijk met :: ingekort. Waarom is het adres ongeldig?",
          "choices": [
            "De dubbele-koloncompressie mag maar één keer in een IPv6-adres voorkomen.",
            "Hex mag geen nul bevatten.",
            "Een hextet moet decimal zijn.",
            "IPv6 gebruikt altijd precies vier hextets."
          ],
          "correctIndex": 0,
          "answer": "De dubbele-koloncompressie mag maar één keer in een IPv6-adres voorkomen.",
          "explanation": "Meer dan één :: maakt het aantal weggelaten nulhextets ambigu.",
          "tags": [
            "number",
            "systems",
            "hexadecimal",
            "system",
            "ipv6-hextet",
            "geschreven",
            "0000",
            "beide",
            "nulreeksen",
            "worden"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m05-f01",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.1",
          "sectionTitle": "Binary Number System",
          "type": "flashcard",
          "front": "5.1 · Binary Number System",
          "back": "Een IPv4-octet bestaat uit acht bits met gewichten 128,64,32,16,8,4,2,1. Sommeer gewichten van 1-bits om decimal te vinden. Voor decimal→binair trek je gewichten van groot naar klein af. AND tussen adres en masker levert het netwerkadres.",
          "commands": "",
          "verify": [],
          "tags": [
            "number",
            "systems",
            "binary",
            "system"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m05-f02",
          "courseId": "ccna1-itn",
          "moduleId": 5,
          "moduleTitle": "Number Systems",
          "sectionId": "5.2",
          "sectionTitle": "Hexadecimal Number System",
          "type": "flashcard",
          "front": "5.2 · Hexadecimal Number System",
          "back": "Hex gebruikt 0–9 en A–F; elke hex-digit vertegenwoordigt exact vier bits. Daardoor worden 48-bit MAC- en 128-bit IPv6-adressen compact weergegeven. Groepeer binair per nibble voor conversie. Hex is notatie: apparatuur verwerkt nog steeds bits.",
          "commands": "",
          "verify": [],
          "tags": [
            "number",
            "systems",
            "hexadecimal",
            "system"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 6,
      "title": "Data Link Layer",
      "summary": "Verklaar framing, lokale media access, Layer-2-adressering, topologie en foutdetectie.",
      "filename": "modules/module-06.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna1-m06-q01",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.3",
          "sectionTitle": "Data Link Frame",
          "type": "knowledge",
          "prompt": "Welke laag voegt een FCS toe?",
          "choices": [
            "Data link",
            "Network",
            "Transport",
            "Application"
          ],
          "correctIndex": 0,
          "answer": "Data link",
          "explanation": "De FCS staat in de frame-trailer.",
          "tags": [
            "data",
            "link",
            "layer",
            "frame",
            "laag",
            "voegt",
            "fcs",
            "toe"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m06-q02",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.1",
          "sectionTitle": "Purpose of the Data Link Layer",
          "type": "knowledge",
          "prompt": "Wat doet een router met het inkomende frame?",
          "choices": [
            "Decapsuleert en maakt voor de volgende link een nieuw frame",
            "Wijzigt alleen de FCS",
            "Floodt het ongewijzigd",
            "Slaat het permanent op"
          ],
          "correctIndex": 0,
          "answer": "Decapsuleert en maakt voor de volgende link een nieuw frame",
          "explanation": "Framing is link-specifiek.",
          "tags": [
            "data",
            "link",
            "layer",
            "purpose",
            "the",
            "doet",
            "router",
            "inkomende",
            "frame"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m06-q03",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.2",
          "sectionTitle": "Topologies",
          "type": "knowledge",
          "prompt": "Waar komen collisions niet voor?",
          "choices": [
            "Een full-duplex point-to-point Ethernetlink",
            "Een hubsegment",
            "Een gedeeld radio-medium",
            "Half-duplex Ethernet"
          ],
          "correctIndex": 0,
          "answer": "Een full-duplex point-to-point Ethernetlink",
          "explanation": "Full-duplex heeft aparte zend/ontvangpaden.",
          "tags": [
            "data",
            "link",
            "layer",
            "topologies",
            "waar",
            "komen",
            "collisions",
            "niet"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m06-s01",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.3",
          "sectionTitle": "Data Link Frame",
          "type": "diagnosis",
          "prompt": "Een Ethernetframe komt aan met een FCS die niet overeenkomt met de berekende CRC. Wat doet de ontvanger normaal?",
          "choices": [
            "Het frame droppen als beschadigd.",
            "De FCS gebruiken om alle bits te herstellen.",
            "Het packet routen zonder header.",
            "Een DHCP-lease aanvragen."
          ],
          "correctIndex": 0,
          "answer": "Het frame droppen als beschadigd.",
          "explanation": "FCS detecteert fouten maar corrigeert ze niet; een corrupt frame wordt verworpen.",
          "tags": [
            "data",
            "link",
            "layer",
            "frame",
            "ethernetframe",
            "komt",
            "fcs",
            "die",
            "niet",
            "overeenkomt"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m06-s02",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.2",
          "sectionTitle": "Topologies",
          "type": "diagnosis",
          "prompt": "Een netwerk met hubs toont collisions en lage prestaties. Na vervanging door full-duplex switches verdwijnen de collisions. Waarom?",
          "choices": [
            "Elke switchpoort is een afzonderlijk full-duplex collision domain.",
            "Switches verwijderen IP-adressen.",
            "Routers sturen BPDUs.",
            "DNS regelt duplex."
          ],
          "correctIndex": 0,
          "answer": "Elke switchpoort is een afzonderlijk full-duplex collision domain.",
          "explanation": "Full-duplex point-to-point Ethernet gebruikt geen CSMA/CD-collisions.",
          "tags": [
            "data",
            "link",
            "layer",
            "topologies",
            "netwerk",
            "hubs",
            "toont",
            "collisions",
            "lage",
            "prestaties."
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m06-f01",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.1",
          "sectionTitle": "Purpose of the Data Link Layer",
          "type": "flashcard",
          "front": "6.1 · Purpose of the Data Link Layer",
          "back": "De data-linklaag accepteert een Layer-3-packet, vormt een frame, regelt toegang tot het medium en detecteert overdrachtsfouten. LLC koppelt hogere protocollen; MAC behandelt media access en Layer-2-adressering. Routers vervangen het frame bij elke hop.",
          "commands": "",
          "verify": [],
          "tags": [
            "data",
            "link",
            "layer",
            "purpose",
            "the"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m06-f02",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.2",
          "sectionTitle": "Topologies",
          "type": "flashcard",
          "front": "6.2 · Topologies",
          "back": "Fysieke topologie beschrijft kabels/apparaten; logische topologie beschrijft gegevensstroom en mediumtoegang. WAN kan point-to-point, hub-and-spoke of mesh zijn. LANs zijn vaak fysieke extended star. Half-duplex gedeelde media gebruiken contention; full-duplex point-to-point Ethernet heeft geen collisions.",
          "commands": "",
          "verify": [],
          "tags": [
            "data",
            "link",
            "layer",
            "topologies"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m06-f03",
          "courseId": "ccna1-itn",
          "moduleId": 6,
          "moduleTitle": "Data Link Layer",
          "sectionId": "6.3",
          "sectionTitle": "Data Link Frame",
          "type": "flashcard",
          "front": "6.3 · Data Link Frame",
          "back": "Een frame bevat delimiters, besturingsvelden, bron/doel-L2-adres, payload en trailer. De precieze velden verschillen per protocol. FCS gebruikt CRC om bitfouten te detecteren; een fout frame wordt gedropt. Herstel/retransmissie gebeurt zo nodig door hogere lagen.",
          "commands": "",
          "verify": [],
          "tags": [
            "data",
            "link",
            "layer",
            "frame"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 7,
      "title": "Ethernet Switching",
      "summary": "Lees Ethernetframes en MAC-adressen, voorspel switchforwarding en vergelijk forwarding-, buffering- en duplexkeuzes.",
      "filename": "modules/module-07.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 4,
        "total": 9
      },
      "cards": [
        {
          "id": "ccna1-m07-q01",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.3",
          "sectionTitle": "The MAC Address Table",
          "type": "knowledge",
          "prompt": "Wat doet een switch met een unknown unicast?",
          "choices": [
            "Flood binnen dezelfde VLAN behalve ingress",
            "Naar de default gateway sturen",
            "Altijd droppen",
            "Over alle routers flooden"
          ],
          "correctIndex": 0,
          "answer": "Flood binnen dezelfde VLAN behalve ingress",
          "explanation": "Zonder entry weet de switch de doelpoort niet.",
          "tags": [
            "ethernet",
            "switching",
            "the",
            "mac",
            "address",
            "table",
            "doet",
            "switch",
            "unknown",
            "unicast"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m07-q02",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.4",
          "sectionTitle": "Switch Speeds and Forwarding Methods",
          "type": "knowledge",
          "prompt": "Welke methode controleert FCS vóór forwarding?",
          "choices": [
            "Store-and-forward",
            "Fast-forward cut-through",
            "Fragment-free alleen",
            "CSMA/CD"
          ],
          "correctIndex": 0,
          "answer": "Store-and-forward",
          "explanation": "Het volledige frame is nodig voor de FCS.",
          "tags": [
            "ethernet",
            "switching",
            "switch",
            "speeds",
            "and",
            "forwarding",
            "methods",
            "methode",
            "controleert",
            "fcs"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m07-q03",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.3",
          "sectionTitle": "The MAC Address Table",
          "type": "knowledge",
          "prompt": "Welk veld leert een switch?",
          "choices": [
            "Source MAC",
            "Destination IP",
            "TCP-poort",
            "FCS"
          ],
          "correctIndex": 0,
          "answer": "Source MAC",
          "explanation": "Source learning koppelt MAC aan ingresspoort.",
          "tags": [
            "ethernet",
            "switching",
            "the",
            "mac",
            "address",
            "table",
            "welk",
            "veld",
            "leert",
            "switch"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m07-s01",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.3",
          "sectionTitle": "The MAC Address Table",
          "type": "diagnosis",
          "prompt": "Na het wissen van de MAC-tabel wordt het eerste unicastframe naar meerdere poorten in dezelfde VLAN gestuurd. Waarom?",
          "choices": [
            "De destination MAC is nog unknown unicast.",
            "De switch gebruikt een default route.",
            "De FCS is te groot.",
            "De host gebruikt IPv6."
          ],
          "correctIndex": 0,
          "answer": "De destination MAC is nog unknown unicast.",
          "explanation": "Zonder geleerde destination-entry floodt de switch unknown unicast binnen de VLAN.",
          "tags": [
            "ethernet",
            "switching",
            "the",
            "mac",
            "address",
            "table",
            "wissen",
            "mac-tabel",
            "eerste",
            "unicastframe"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m07-s02",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.4",
          "sectionTitle": "Switch Speeds and Forwarding Methods",
          "type": "diagnosis",
          "prompt": "Een link is up, maar toont veel late collisions en zeer lage throughput. Eén zijde staat half duplex en de andere full duplex. Wat is de oorzaak?",
          "choices": [
            "Een duplex-mismatch.",
            "Een fout subnetmasker.",
            "Een ontbrekende DNS-server.",
            "Een verlopen ARP-entry."
          ],
          "correctIndex": 0,
          "answer": "Een duplex-mismatch.",
          "explanation": "Late collisions en asymmetrisch slechte prestaties zijn klassieke duplexmismatchsignalen.",
          "tags": [
            "ethernet",
            "switching",
            "switch",
            "speeds",
            "and",
            "forwarding",
            "methods",
            "link",
            "maar",
            "toont"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m07-f01",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.1",
          "sectionTitle": "Ethernet Frame",
          "type": "flashcard",
          "front": "7.1 · Ethernet Frame",
          "back": "IEEE 802.3 Ethernet gebruikt preamble/SFD, 6-byte destination en source MAC, type/length, payload van normaal 46–1500 bytes en 4-byte FCS. Kleinere payload krijgt padding. De MAC-sublayer verzorgt framing en media access; LLC identificeert het hogere Layer-3-protocol. De framegrootte loopt normaal 64–1518 bytes zonder VLAN-tag/preamble.",
          "commands": "",
          "verify": [],
          "tags": [
            "ethernet",
            "switching",
            "frame"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m07-f02",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.2",
          "sectionTitle": "Ethernet MAC Address",
          "type": "flashcard",
          "front": "7.2 · Ethernet MAC Address",
          "back": "Een MAC-adres is 48 bits in hex. De eerste 24 bits vormen doorgaans de OUI; de rest identificeert de interface. Het I/G-bit onderscheidt individueel of groep en U/L universeel of lokaal. Broadcast is FF:FF:FF:FF:FF:FF; multicast heeft een groepsadres; unicast richt zich op één interface. Een switch forwardt op destination MAC.",
          "commands": "",
          "verify": [],
          "tags": [
            "ethernet",
            "switching",
            "mac",
            "address"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m07-f03",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.3",
          "sectionTitle": "The MAC Address Table",
          "type": "flashcard",
          "front": "7.3 · The MAC Address Table",
          "back": "Een switch leert de source MAC op de inkomende poort. Een bekende destination gaat alleen naar de bijbehorende poort; unknown unicast en broadcast worden binnen de VLAN geflood behalve naar de ingresspoort. Entries verouderen. Een bewegend MAC-adres wordt opnieuw geleerd; loops of flapping kunnen instabiliteit veroorzaken.",
          "commands": "show mac address-table\nshow mac address-table dynamic\nclear mac address-table dynamic",
          "verify": [
            "Bron-MAC op juiste poort",
            "Bekende unicast niet geflood"
          ],
          "tags": [
            "ethernet",
            "switching",
            "the",
            "mac",
            "address",
            "table"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m07-f04",
          "courseId": "ccna1-itn",
          "moduleId": 7,
          "moduleTitle": "Ethernet Switching",
          "sectionId": "7.4",
          "sectionTitle": "Switch Speeds and Forwarding Methods",
          "type": "flashcard",
          "front": "7.4 · Switch Speeds and Forwarding Methods",
          "back": "Store-and-forward ontvangt het volledige frame en controleert FCS; cut-through begint na destination MAC en verlaagt latency maar kan corrupte frames doorsturen. Symmetric switching gebruikt gelijke poortsnelheden; asymmetric combineert snelheden en vraagt buffering. Memory kan port-based of shared zijn. Autonegotiation voorkomt meestal duplexmismatch.",
          "commands": "show interfaces status\nshow interfaces counters errors",
          "verify": [
            "Geen late collisions",
            "Speed/duplex aan beide kanten passend"
          ],
          "tags": [
            "ethernet",
            "switching",
            "switch",
            "speeds",
            "and",
            "forwarding",
            "methods"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 8,
      "title": "Network Layer",
      "summary": "Verklaar IPv4/IPv6 packetvelden, host- en routerbeslissingen, longest-prefix-match en routingtabelcodes.",
      "filename": "modules/module-08.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 10
      },
      "cards": [
        {
          "id": "ccna1-m08-q01",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.5",
          "sectionTitle": "Router Routing Tables",
          "type": "knowledge",
          "prompt": "Welke route wint als /0, /24 en /28 alle matchen?",
          "choices": [
            "/28",
            "Laagste AD ongeacht prefix",
            "/0",
            "Oudste route"
          ],
          "correctIndex": 0,
          "answer": "/28",
          "explanation": "Longest prefix match komt eerst.",
          "tags": [
            "network",
            "layer",
            "router",
            "routing",
            "tables",
            "route",
            "wint",
            "alle",
            "matchen"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m08-q02",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.2",
          "sectionTitle": "IPv4 Packet",
          "type": "knowledge",
          "prompt": "Welk IPv4-veld voorkomt eindeloze loops?",
          "choices": [
            "TTL",
            "IHL",
            "FCS",
            "Source port"
          ],
          "correctIndex": 0,
          "answer": "TTL",
          "explanation": "TTL daalt bij elke router.",
          "tags": [
            "network",
            "layer",
            "ipv4",
            "packet",
            "welk",
            "ipv4-veld",
            "voorkomt",
            "eindeloze",
            "loops"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m08-q03",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.3",
          "sectionTitle": "IPv6 Packet",
          "type": "knowledge",
          "prompt": "Wat gebruikt IPv6 in plaats van TTL?",
          "choices": [
            "Hop Limit",
            "Flow Label",
            "Next Header",
            "Payload Length"
          ],
          "correctIndex": 0,
          "answer": "Hop Limit",
          "explanation": "Hop Limit heeft dezelfde loopbegrenzende functie.",
          "tags": [
            "network",
            "layer",
            "ipv6",
            "packet",
            "gebruikt",
            "plaats",
            "ttl"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m08-s01",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.5",
          "sectionTitle": "Router Routing Tables",
          "type": "diagnosis",
          "prompt": "Voor 10.1.2.130 bestaan routes /0, 10.0.0.0/8 en 10.1.2.128/25. De /8 heeft een lagere AD. Welke route wint?",
          "choices": [
            "De /25 door longest prefix match.",
            "De /8 door de lagere AD.",
            "De /0 als gateway of last resort.",
            "Alle routes willekeurig."
          ],
          "correctIndex": 0,
          "answer": "De /25 door longest prefix match.",
          "explanation": "Prefixspecificiteit wordt vóór administrative distance tussen verschillende prefixlengtes toegepast.",
          "tags": [
            "network",
            "layer",
            "router",
            "routing",
            "tables",
            "10.1.2.130",
            "bestaan",
            "routes",
            "10.0.0.0/8",
            "10.1.2.128/25."
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m08-s02",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.4",
          "sectionTitle": "How a Host Routes",
          "type": "diagnosis",
          "prompt": "Een host bereikt lokale peers maar geen enkel remote netwerk. Het eigen adres en masker zijn correct. Welke instelling controleer je eerst?",
          "choices": [
            "De default gateway.",
            "De Ethernet-preamble.",
            "De DNS TTL voor lokale peers.",
            "De switch-FCS."
          ],
          "correctIndex": 0,
          "answer": "De default gateway.",
          "explanation": "Lokale communicatie heeft geen gateway nodig; remote aflevering wel.",
          "tags": [
            "network",
            "layer",
            "how",
            "host",
            "routes",
            "bereikt",
            "lokale",
            "peers",
            "maar",
            "geen"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m08-f01",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.1",
          "sectionTitle": "Network Layer Characteristics",
          "type": "flashcard",
          "front": "8.1 · Network Layer Characteristics",
          "back": "IP levert connectionless, best-effort en media-independent bezorging. Betrouwbaarheid en volgorde zijn functies van hogere lagen wanneer vereist. MTU bepaalt maximale Layer-3-packetgrootte op een link. IPv4-routers kunnen fragmenteren; bij IPv6 fragmenteert alleen de bron na Path MTU Discovery.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "layer",
            "characteristics"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m08-f02",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.2",
          "sectionTitle": "IPv4 Packet",
          "type": "flashcard",
          "front": "8.2 · IPv4 Packet",
          "back": "Belangrijke velden zijn Version, IHL, DSCP/ECN, Total Length, Identification/Flags/Fragment Offset, TTL, Protocol, Header Checksum en bron/doeladres. TTL daalt per router; bij nul volgt drop en meestal ICMP Time Exceeded. Protocol identificeert TCP(6), UDP(17), ICMP(1) of een andere payload.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "layer",
            "ipv4",
            "packet"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m08-f03",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.3",
          "sectionTitle": "IPv6 Packet",
          "type": "flashcard",
          "front": "8.3 · IPv6 Packet",
          "back": "De vaste IPv6-header is 40 bytes: Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit en 128-bit bron/doel. Extension headers dragen optionele functies. Geen headerchecksum en eenvoudiger basisheader verminderen routerwerk; broadcast bestaat niet in IPv6.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "layer",
            "ipv6",
            "packet"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m08-f04",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.4",
          "sectionTitle": "How a Host Routes",
          "type": "flashcard",
          "front": "8.4 · How a Host Routes",
          "back": "Een host vergelijkt doel met eigen prefix. Lokaal: resolveer doel-MAC; remote: resolveer MAC van de default gateway en behoud remote doel-IP. De hosttabel bevat connected/local routes, statische routes en default. Een foute gateway schaadt remote maar niet lokale communicatie.",
          "commands": "route print\nip route\nnetstat -r",
          "verify": [],
          "tags": [
            "network",
            "layer",
            "how",
            "host",
            "routes"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m08-f05",
          "courseId": "ccna1-itn",
          "moduleId": 8,
          "moduleTitle": "Network Layer",
          "sectionId": "8.5",
          "sectionTitle": "Router Routing Tables",
          "type": "flashcard",
          "front": "8.5 · Router Routing Tables",
          "back": "Een router kiest de langste match. Routebronnen zijn onder meer connected (C), local (L), static (S) en dynamische protocollen; bij dezelfde prefix vergelijkt hij administrative distance en metric. Een route bevat prefix, bron, AD/metric, next hop, leeftijd en exitinterface. Zonder match/default dropt de router het packet.",
          "commands": "show ip route\nshow ipv6 route\nshow ip route 198.51.100.25",
          "verify": [
            "Winnende prefix is meest specifiek",
            "Next hop resolveerbaar"
          ],
          "tags": [
            "network",
            "layer",
            "router",
            "routing",
            "tables"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 9,
      "title": "Address Resolution",
      "summary": "Koppel Layer-3 next hops aan Layer-2 adressen met ARP en IPv6 Neighbor Discovery en herken beveiligingsimplicaties.",
      "filename": "modules/module-09.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna1-m09-q01",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.1",
          "sectionTitle": "MAC and IP",
          "type": "knowledge",
          "prompt": "Welk MAC-adres gebruikt een host voor een remote IPv4-doel?",
          "choices": [
            "Dat van de default gateway",
            "Dat van de remote host",
            "Broadcast voor alle frames",
            "Dat van DNS"
          ],
          "correctIndex": 0,
          "answer": "Dat van de default gateway",
          "explanation": "De gateway is de lokale next hop.",
          "tags": [
            "address",
            "resolution",
            "mac",
            "and",
            "welk",
            "mac-adres",
            "gebruikt",
            "host",
            "remote",
            "ipv4-doel"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m09-q02",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.2",
          "sectionTitle": "ARP",
          "type": "knowledge",
          "prompt": "Hoe wordt een ARP Request verzonden?",
          "choices": [
            "Als Layer-2 broadcast",
            "Als routed unicast",
            "Als TCP-segment",
            "Als IPv6 multicast"
          ],
          "correctIndex": 0,
          "answer": "Als Layer-2 broadcast",
          "explanation": "Iedere host in de VLAN ontvangt de request.",
          "tags": [
            "address",
            "resolution",
            "arp",
            "request",
            "verzonden"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m09-q03",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.3",
          "sectionTitle": "Neighbor Discovery",
          "type": "knowledge",
          "prompt": "Welk NDP-bericht levert prefix en default-routerinformatie?",
          "choices": [
            "Router Advertisement",
            "Neighbor Advertisement alleen",
            "Echo Reply",
            "Destination Unreachable"
          ],
          "correctIndex": 0,
          "answer": "Router Advertisement",
          "explanation": "RA draagt router- en prefixparameters.",
          "tags": [
            "address",
            "resolution",
            "neighbor",
            "discovery",
            "welk",
            "ndp-bericht",
            "levert",
            "prefix",
            "default-routerinformatie"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m09-s01",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.2",
          "sectionTitle": "ARP",
          "type": "diagnosis",
          "prompt": "Na ARP-spoofing wijst de gateway-entry op het MAC-adres van een onbekende laptop. Welk risico ontstaat?",
          "choices": [
            "Verkeer kan via de aanvaller worden omgeleid voor een man-in-the-middle.",
            "De IPv4-prefix wordt automatisch /32.",
            "De switch schakelt over naar IPv6.",
            "TCP-poorten verdwijnen."
          ],
          "correctIndex": 0,
          "answer": "Verkeer kan via de aanvaller worden omgeleid voor een man-in-the-middle.",
          "explanation": "ARP heeft geen authenticatie en een valse IP–MAC-binding kan verkeer onderscheppen.",
          "tags": [
            "address",
            "resolution",
            "arp",
            "arp-spoofing",
            "wijst",
            "gateway-entry",
            "mac-adres",
            "onbekende",
            "laptop.",
            "welk"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m09-s02",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.3",
          "sectionTitle": "Neighbor Discovery",
          "type": "diagnosis",
          "prompt": "Een IPv6-host heeft een GUA maar leert geen default router; Router Advertisements worden gefilterd. Wat ontbreekt?",
          "choices": [
            "De RA die router- en prefixinformatie levert.",
            "Een ARP Reply.",
            "Een IPv4 DHCPACK.",
            "Een TCP-handshake."
          ],
          "correctIndex": 0,
          "answer": "De RA die router- en prefixinformatie levert.",
          "explanation": "IPv6-hosts leren hun default router via ICMPv6 Router Advertisements.",
          "tags": [
            "address",
            "resolution",
            "neighbor",
            "discovery",
            "ipv6-host",
            "heeft",
            "gua",
            "maar",
            "leert",
            "geen"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m09-f01",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.1",
          "sectionTitle": "MAC and IP",
          "type": "flashcard",
          "front": "9.1 · MAC and IP",
          "back": "IP-adressen identificeren end-to-end bron en doel; MAC-adressen identificeren afzender en next hop op één Ethernetlink. Voor remote verkeer is destination MAC dat van de gateway, niet van de remote host. Na routing wordt een nieuwe Layer-2-header gebouwd.",
          "commands": "",
          "verify": [],
          "tags": [
            "address",
            "resolution",
            "mac",
            "and"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m09-f02",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.2",
          "sectionTitle": "ARP",
          "type": "flashcard",
          "front": "9.2 · ARP",
          "back": "ARP resolveert een IPv4-adres naar een MAC-adres binnen het lokale broadcastdomein. Request is broadcast; reply normaal unicast; resultaten worden tijdelijk gecachet. Entries kunnen dynamisch of statisch zijn. Gratuitous ARP kondigt een binding aan of detecteert conflicten. ARP heeft geen ingebouwde authenticatie en is spoofbaar.",
          "commands": "arp -a\nshow arp\nclear arp-cache",
          "verify": [
            "Gatewaybinding klopt",
            "Onbekend doel triggert request"
          ],
          "tags": [
            "address",
            "resolution",
            "arp"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m09-f03",
          "courseId": "ccna1-itn",
          "moduleId": 9,
          "moduleTitle": "Address Resolution",
          "sectionId": "9.3",
          "sectionTitle": "Neighbor Discovery",
          "type": "flashcard",
          "front": "9.3 · Neighbor Discovery",
          "back": "IPv6 NDP gebruikt ICMPv6: Neighbor Solicitation/Advertisement voor resolutie en DAD, Router Solicitation/Advertisement voor gateway en prefixinformatie. Solicited-node multicast vervangt ARP-broadcast. NDP ondersteunt ook neighbor unreachability en redirect; ICMPv6 mag daarom niet grof worden geblokkeerd.",
          "commands": "show ipv6 neighbors\nshow ipv6 interface",
          "verify": [
            "LLA van router aanwezig",
            "Neighbor states logisch"
          ],
          "tags": [
            "address",
            "resolution",
            "neighbor",
            "discovery"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 10,
      "title": "Basic Router Configuration",
      "summary": "Configureer veilige routerbasis, dual-stack interfaces en correcte default gateways en verifieer de connected routes.",
      "filename": "modules/module-10.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna1-m10-q01",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.2",
          "sectionTitle": "Configure Interfaces",
          "type": "knowledge",
          "prompt": "Welk commando activeert een routerinterface?",
          "choices": [
            "no shutdown",
            "enable routing port",
            "ip default-gateway",
            "service routing"
          ],
          "correctIndex": 0,
          "answer": "no shutdown",
          "explanation": "No shutdown verwijdert de administratieve blokkering.",
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "interfaces",
            "welk",
            "commando",
            "activeert",
            "routerinterface"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m10-q02",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.2",
          "sectionTitle": "Configure Interfaces",
          "type": "knowledge",
          "prompt": "Welke route ontstaat door een up/up interface met IP?",
          "choices": [
            "Connected route",
            "OSPF external route",
            "Default route",
            "BGP route"
          ],
          "correctIndex": 0,
          "answer": "Connected route",
          "explanation": "Direct aangesloten prefix wordt C.",
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "interfaces",
            "route",
            "ontstaat",
            "up/up",
            "interface"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m10-q03",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.2",
          "sectionTitle": "Configure Interfaces",
          "type": "knowledge",
          "prompt": "Wat betekent administratively down?",
          "choices": [
            "De interface staat shutdown",
            "ARP ontbreekt",
            "Het masker is /32",
            "DNS faalt"
          ],
          "correctIndex": 0,
          "answer": "De interface staat shutdown",
          "explanation": "De beheerstatus is uitgezet.",
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "interfaces",
            "betekent",
            "administratively",
            "down"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m10-s01",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.2",
          "sectionTitle": "Configure Interfaces",
          "type": "diagnosis",
          "prompt": "G0/0/0 toont administratively down/down en heeft een correct IP-adres. Welke configuratie veroorzaakt dit?",
          "choices": [
            "Het interfacecommando shutdown is actief.",
            "De ARP-cache is leeg.",
            "De route heeft een hoge metric.",
            "De host gebruikt SLAAC."
          ],
          "correctIndex": 0,
          "answer": "Het interfacecommando shutdown is actief.",
          "explanation": "Administratively down wijst rechtstreeks op de softwarematige shutdownstatus.",
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "interfaces",
            "g0/0/0",
            "toont",
            "administratively",
            "down/down",
            "heeft"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m10-s02",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.3",
          "sectionTitle": "Configure the Default Gateway",
          "type": "diagnosis",
          "prompt": "Hosts in LAN A bereiken elkaar, maar niet LAN B. Hun default gateway staat op een adres buiten hun eigen subnet. Wat is de oorzaak?",
          "choices": [
            "De gateway is niet rechtstreeks lokaal bereikbaar.",
            "De switch gebruikt store-and-forward.",
            "De DNS-server mist een AAAA-record.",
            "De routerinterface heeft een description."
          ],
          "correctIndex": 0,
          "answer": "De gateway is niet rechtstreeks lokaal bereikbaar.",
          "explanation": "Een host moet zijn default gateway via de lokale link kunnen resolven en bereiken.",
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "the",
            "default",
            "gateway",
            "hosts",
            "lan",
            "bereiken"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m10-f01",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.1",
          "sectionTitle": "Configure Initial Router Settings",
          "type": "flashcard",
          "front": "10.1 · Configure Initial Router Settings",
          "back": "Een router gebruikt dezelfde IOS-modi en beveiligingsbasis als een switch: hostname, enable secret, console/VTY, banner, password policy en opgeslagen config. SSH vereist hostname, domein, RSA-sleutel, lokale gebruiker en `transport input ssh`. Schakel ongebruikte services uit en documenteer interfaces.",
          "commands": "hostname R1\nenable secret <GEHEIM>\nip domain-name lab.example\nusername admin secret <GEHEIM>\ncrypto key generate rsa modulus 2048\nip ssh version 2\nline vty 0 4\n login local\n transport input ssh",
          "verify": [],
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "initial",
            "settings"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m10-f02",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.2",
          "sectionTitle": "Configure Interfaces",
          "type": "flashcard",
          "front": "10.2 · Configure Interfaces",
          "back": "Elke routed interface krijgt een uniek subnetadres, description en `no shutdown`. Up/up vereist administratief actief én een werkende datalink. Met `ipv6 unicast-routing` routeert IOS IPv6. Een interface kan een GUA en LLA hebben; connected en local routes verschijnen automatisch.",
          "commands": "ipv6 unicast-routing\ninterface g0/0/0\n description LAN_A\n ip address 192.0.2.1 255.255.255.0\n ipv6 address 2001:db8:1::1/64\n no shutdown",
          "verify": [
            "show ip interface brief",
            "show ipv6 interface brief",
            "show ip route connected"
          ],
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "interfaces"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m10-f03",
          "courseId": "ccna1-itn",
          "moduleId": 10,
          "moduleTitle": "Basic Router Configuration",
          "sectionId": "10.3",
          "sectionTitle": "Configure the Default Gateway",
          "type": "flashcard",
          "front": "10.3 · Configure the Default Gateway",
          "back": "Een hostgateway is het routerinterfaceadres in hetzelfde subnet. Zonder of met een foute gateway blijven lokale hosts bereikbaar maar remote netwerken niet. Een Layer-2-switch gebruikt `ip default-gateway`; een router of multilayer switch met routing gebruikt een default route.",
          "commands": "ip default-gateway 192.0.2.1\nshow ip route",
          "verify": [
            "Host en gateway zelfde prefix",
            "Remote ping in beide richtingen"
          ],
          "tags": [
            "basic",
            "router",
            "configuration",
            "configure",
            "the",
            "default",
            "gateway"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 11,
      "title": "IPv4 Addressing",
      "summary": "Ontleed IPv4-adressen en masks, bereken subnetten en VLSM en ontwerp een schaalbaar adresplan.",
      "filename": "modules/module-11.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 9,
        "total": 14
      },
      "cards": [
        {
          "id": "ccna1-m11-q01",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.5",
          "sectionTitle": "Subnet an IPv4 Network",
          "type": "knowledge",
          "prompt": "Hoeveel bruikbare hosts heeft een klassiek /26-LAN?",
          "choices": [
            "62",
            "64",
            "30",
            "126"
          ],
          "correctIndex": 0,
          "answer": "62",
          "explanation": "Zes hostbits: 64 adressen minus netwerk en broadcast.",
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "network",
            "hoeveel",
            "bruikbare",
            "hosts",
            "heeft",
            "klassiek",
            "26-lan"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m11-q02",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.8",
          "sectionTitle": "Variable Length Subnet Masking",
          "type": "knowledge",
          "prompt": "Waarom VLSM?",
          "choices": [
            "Subnets passend bij verschillende hostbehoeften maken",
            "MAC-adressen inkorten",
            "DNS vervangen",
            "Broadcasts over routers sturen"
          ],
          "correctIndex": 0,
          "answer": "Subnets passend bij verschillende hostbehoeften maken",
          "explanation": "VLSM vermindert verspilling.",
          "tags": [
            "ipv4",
            "addressing",
            "variable",
            "length",
            "subnet",
            "masking",
            "vlsm"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m11-q03",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.5",
          "sectionTitle": "Subnet an IPv4 Network",
          "type": "knowledge",
          "prompt": "Wat is de block size bij 255.255.255.224?",
          "choices": [
            "32",
            "224",
            "16",
            "64"
          ],
          "correctIndex": 0,
          "answer": "32",
          "explanation": "De block size is 256 min 224 en bedraagt dus 32 adressen.",
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "network",
            "block",
            "size",
            "255.255.255.224"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m11-s01",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.5",
          "sectionTitle": "Subnet an IPv4 Network",
          "type": "diagnosis",
          "prompt": "Een /26-subnet start op 192.0.2.64. Een beheerder gebruikt .127 als hostadres. Waarom werkt dit niet?",
          "choices": [
            ".127 is het broadcastadres van 192.0.2.64/26.",
            "Een /26 heeft geen broadcast.",
            ".127 is altijd loopback.",
            "Het netwerk start op .128."
          ],
          "correctIndex": 0,
          "answer": ".127 is het broadcastadres van 192.0.2.64/26.",
          "explanation": "Het bereik is .64–.127; netwerk .64, hosts .65–.126 en broadcast .127.",
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "network",
            "26-subnet",
            "start",
            "192.0.2.64.",
            "beheerder",
            "gebruikt",
            "127"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m11-s02",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.8",
          "sectionTitle": "Variable Length Subnet Masking",
          "type": "diagnosis",
          "prompt": "Een VLSM-plan deelt eerst kleine subnetten uit en vindt daarna geen uitgelijnd blok voor 100 hosts. Wat was de ontwerpfout?",
          "choices": [
            "Niet van grootste naar kleinste behoefte verdelen.",
            "Te veel DNS-records gebruiken.",
            "De MAC-adressen niet sorteren.",
            "Elke link een /64 geven."
          ],
          "correctIndex": 0,
          "answer": "Niet van grootste naar kleinste behoefte verdelen.",
          "explanation": "Grootste-eerst behoudt uitgelijnde grote blokken en voorkomt fragmentatie van adresruimte.",
          "tags": [
            "ipv4",
            "addressing",
            "variable",
            "length",
            "subnet",
            "masking",
            "vlsm-plan",
            "deelt",
            "eerst",
            "kleine"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m11-f01",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.1",
          "sectionTitle": "IPv4 Address Structure",
          "type": "flashcard",
          "front": "11.1 · IPv4 Address Structure",
          "back": "IPv4 heeft 32 bits. Prefix/masker scheidt netwerk- en hostdeel; AND tussen adres en masker levert netwerkadres. Prefixlengte telt 1-bits in het masker. Hostbits alle 0 is netwerk; alle 1 is directed broadcast; tussenwaarden zijn doorgaans hosts.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "address",
            "structure"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f02",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.2",
          "sectionTitle": "IPv4 Unicast, Broadcast, and Multicast",
          "type": "flashcard",
          "front": "11.2 · IPv4 Unicast, Broadcast, and Multicast",
          "back": "Unicast richt zich op één interface; broadcast op alle hosts in een subnet; multicast op ingeschreven groepsleden. Limited broadcast is 255.255.255.255. Routers forwarden broadcasts standaard niet; multicast gebruikt 224.0.0.0/4.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "unicast",
            "broadcast",
            "and",
            "multicast"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f03",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.3",
          "sectionTitle": "Types of IPv4 Addresses",
          "type": "flashcard",
          "front": "11.3 · Types of IPv4 Addresses",
          "back": "Private bereiken: 10/8, 172.16/12 en 192.168/16; ze zijn niet publiek routeerbaar en gebruiken vaak NAT. Public adressen zijn globaal uniek. Speciale bereiken omvatten loopback 127/8, link-local 169.254/16, documentation 192.0.2/24 e.a., multicast en limited broadcast.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "types",
            "addresses"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f04",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.4",
          "sectionTitle": "Network Segmentation",
          "type": "flashcard",
          "front": "11.4 · Network Segmentation",
          "back": "Subnetting verkleint broadcastdomeinen, scheidt locaties/rollen/securityzones en gebruikt adressen doelmatiger. Routers/L3-switches verbinden subnetten. Leen hostbits als subnetbits. Aantal subnetten is 2^s; bruikbare hosts klassiek 2^h−2, met uitzonderingen /31 en /32.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "network",
            "segmentation"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f05",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.5",
          "sectionTitle": "Subnet an IPv4 Network",
          "type": "flashcard",
          "front": "11.5 · Subnet an IPv4 Network",
          "back": "Voor vaste subnetgrootte bepaal hosts, kies h zodat 2^h−2 volstaat, prefix=32−h en block size=256−relevant maskeroctet. Netwerken stijgen met block size. Noteer netwerk, eerste host, laatste host en broadcast; subnetten overlappen nooit.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "network"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f06",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.6",
          "sectionTitle": "Subnet a /16 and a /8 Prefix",
          "type": "flashcard",
          "front": "11.6 · Subnet a /16 and a /8 Prefix",
          "back": "Dezelfde binaire methode geldt over octetgrenzen. Focus niet op oude classful grenzen; prefixlengte bepaalt de echte grens. Schrijf het volledige masker en identificeer het interesting octet om block sizes systematisch te berekenen.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "and",
            "prefix"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f07",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.7",
          "sectionTitle": "Subnet To Meet Requirements",
          "type": "flashcard",
          "front": "11.7 · Subnet To Meet Requirements",
          "back": "Vertaal aantallen hosts, locaties, groei en point-to-pointlinks naar subnetbehoeften. Reserveer gateway en infrastructuuradressen consequent. Valideer elk subnet op capaciteit, overlap, aggregatiemogelijkheid en documenteer vrije ruimte.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "subnet",
            "meet",
            "requirements"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f08",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.8",
          "sectionTitle": "Variable Length Subnet Masking",
          "type": "flashcard",
          "front": "11.8 · Variable Length Subnet Masking",
          "back": "VLSM gebruikt verschillende prefixlengtes binnen één adresblok. Deel grootste subnet eerst uit, daarna aflopend, zodat uitlijning en vrije ruimte behouden blijven. Routes dragen prefixlengte; classless routing ondersteunt VLSM. Route summarization kan alleen op binaire grenzen.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "variable",
            "length",
            "subnet",
            "masking"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m11-f09",
          "courseId": "ccna1-itn",
          "moduleId": 11,
          "moduleTitle": "IPv4 Addressing",
          "sectionId": "11.9",
          "sectionTitle": "Structured Design",
          "type": "flashcard",
          "front": "11.9 · Structured Design",
          "back": "Een plan koppelt subnet/VLAN, doel, prefix, gateway, hostrange, broadcast en reserveringen. Gebruik hiërarchie per locatie/functie. Controleer ontwerp voor configuratie; verifieer daarna met host- en routertabellen, pings en een bijgewerkt diagram.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv4",
            "addressing",
            "structured",
            "design"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 12,
      "title": "IPv6 Addressing",
      "summary": "Lees en configureer IPv6 GUA/LLA, SLAAC/DHCPv6, multicast en /64-subnetten.",
      "filename": "modules/module-12.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 8,
        "total": 13
      },
      "cards": [
        {
          "id": "ccna1-m12-q01",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.3",
          "sectionTitle": "IPv6 Address Types",
          "type": "knowledge",
          "prompt": "Welke prefix hoort bij link-local?",
          "choices": [
            "fe80::/10",
            "ff00::/8",
            "2000::/3",
            "::1/128"
          ],
          "correctIndex": 0,
          "answer": "fe80::/10",
          "explanation": "LLA valt onder fe80::/10.",
          "tags": [
            "ipv6",
            "addressing",
            "address",
            "types",
            "prefix",
            "hoort",
            "link-local"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m12-q02",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.8",
          "sectionTitle": "Subnet an IPv6 Network",
          "type": "knowledge",
          "prompt": "Hoeveel /64s zitten in een /48?",
          "choices": [
            "65.536",
            "256",
            "16",
            "4.294.967.296"
          ],
          "correctIndex": 0,
          "answer": "65.536",
          "explanation": "Er zijn 16 subnetbits: 2^16.",
          "tags": [
            "ipv6",
            "addressing",
            "subnet",
            "network",
            "hoeveel",
            "64s",
            "zitten"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m12-q03",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.5",
          "sectionTitle": "Dynamic Addressing for IPv6 GUAs",
          "type": "knowledge",
          "prompt": "Welk bericht kondigt prefix en gateway aan?",
          "choices": [
            "Router Advertisement",
            "DHCPv6 Reply uitsluitend",
            "Neighbor Solicitation",
            "Echo Request"
          ],
          "correctIndex": 0,
          "answer": "Router Advertisement",
          "explanation": "RA is de bron van router/prefixinformatie.",
          "tags": [
            "ipv6",
            "addressing",
            "dynamic",
            "for",
            "guas",
            "welk",
            "bericht",
            "kondigt",
            "prefix",
            "gateway"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m12-s01",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.2",
          "sectionTitle": "IPv6 Address Representation",
          "type": "diagnosis",
          "prompt": "Het adres 2001:db8::1::5 wordt door IOS geweigerd. Waarom?",
          "choices": [
            "Het gebruikt :: twee keer en is daardoor ambigu.",
            "Het bevat hexletters.",
            "De prefix is public.",
            "IPv6 vereist decimalen."
          ],
          "correctIndex": 0,
          "answer": "Het gebruikt :: twee keer en is daardoor ambigu.",
          "explanation": "Een IPv6-adres mag de nulcompressie :: slechts eenmaal gebruiken.",
          "tags": [
            "ipv6",
            "addressing",
            "address",
            "representation",
            "adres",
            "2001",
            "db8",
            "ios",
            "geweigerd."
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m12-s02",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.5",
          "sectionTitle": "Dynamic Addressing for IPv6 GUAs",
          "type": "diagnosis",
          "prompt": "Een stateful DHCPv6-client krijgt een GUA en DNS maar geen default route omdat RA’s worden geblokkeerd. Wat is de oorzaak?",
          "choices": [
            "DHCPv6 levert de default gateway niet; de Router Advertisement ontbreekt.",
            "De client gebruikt UDP 546.",
            "Een /64 is te groot.",
            "DAD verwijdert alle routes."
          ],
          "correctIndex": 0,
          "answer": "DHCPv6 levert de default gateway niet; de Router Advertisement ontbreekt.",
          "explanation": "Ook bij stateful DHCPv6 komt de default router uit een RA.",
          "tags": [
            "ipv6",
            "addressing",
            "dynamic",
            "for",
            "guas",
            "stateful",
            "dhcpv6-client",
            "krijgt",
            "gua",
            "dns"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m12-f01",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.1",
          "sectionTitle": "IPv4 Issues",
          "type": "flashcard",
          "front": "12.1 · IPv4 Issues",
          "back": "IPv4-uitputting leidde tot NAT en complexe adresconservering. IPv6 biedt 128-bit adressen, eenvoudiger basisheader, autoconfiguratie en geen broadcast. Dual stack, tunneling en translation ondersteunen overgang; dual stack is conceptueel het meest direct.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "ipv4",
            "issues"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f02",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.2",
          "sectionTitle": "IPv6 Address Representation",
          "type": "flashcard",
          "front": "12.2 · IPv6 Address Representation",
          "back": "IPv6 bestaat uit acht hextets. Laat leading zeroes weg en vervang één aaneengesloten reeks nulhextets eenmaal door `::`. Expand altijd tot acht hextets om ambiguïteit en prefixgrenzen te controleren. Prefixlengte vervangt een geschreven subnetmasker.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "address",
            "representation"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f03",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.3",
          "sectionTitle": "IPv6 Address Types",
          "type": "flashcard",
          "front": "12.3 · IPv6 Address Types",
          "back": "Unicast omvat GUA, LLA en loopback; multicast vervangt broadcast; anycast gebruikt hetzelfde unicastadres op meerdere nodes. GUA is doorgaans 2000::/3; LLA fe80::/10 is verplicht op de lokale link; ::1 is loopback en :: unspecified.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "address",
            "types"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f04",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.4",
          "sectionTitle": "GUA and LLA Static Configuration",
          "type": "flashcard",
          "front": "12.4 · GUA and LLA Static Configuration",
          "back": "Configureer GUA met /64 en optioneel handmatig LLA. Een routerinterface gebruikt LLA voor veel neighbor- en routingfuncties. `ipv6 unicast-routing` laat routers RA’s sturen en IPv6 forwarden. Interface-ID moet uniek op de link zijn.",
          "commands": "ipv6 unicast-routing\ninterface g0/0\n ipv6 address 2001:db8:1::1/64\n ipv6 address fe80::1 link-local\n no shutdown",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "gua",
            "and",
            "lla",
            "static",
            "configuration"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f05",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.5",
          "sectionTitle": "Dynamic Addressing for IPv6 GUAs",
          "type": "flashcard",
          "front": "12.5 · Dynamic Addressing for IPv6 GUAs",
          "back": "SLAAC gebruikt RA-prefix plus zelfgekozen interface-ID. Stateless DHCPv6 levert extra opties; stateful DHCPv6 levert adressen en opties. RA M- en O-flags sturen hostgedrag; de default gateway komt via RA, niet via DHCPv6. DAD controleert uniciteit.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "dynamic",
            "for",
            "guas"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f06",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.6",
          "sectionTitle": "Dynamic Addressing for IPv6 LLAs",
          "type": "flashcard",
          "front": "12.6 · Dynamic Addressing for IPv6 LLAs",
          "back": "Een LLA wordt automatisch gemaakt zodra IPv6 actief is, via willekeurige/stabiele interface-ID of EUI-64, platformafhankelijk. EUI-64 splitst de MAC, voegt FFFE toe en wijzigt het U/L-bit; privacy-adressen vermijden voorspelbare hardwarekoppeling.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "dynamic",
            "for",
            "llas"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f07",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.7",
          "sectionTitle": "IPv6 Multicast Addresses",
          "type": "flashcard",
          "front": "12.7 · IPv6 Multicast Addresses",
          "back": "ff02::1 bereikt alle nodes op de link; ff02::2 alle routers. Solicited-node multicast ondersteunt NDP efficiënt. Scopebits beperken multicastbereik; multicast is geen broadcast en wordt alleen door geïnteresseerde/bedoelde nodes verwerkt.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "multicast",
            "addresses"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m12-f08",
          "courseId": "ccna1-itn",
          "moduleId": 12,
          "moduleTitle": "IPv6 Addressing",
          "sectionId": "12.8",
          "sectionTitle": "Subnet an IPv6 Network",
          "type": "flashcard",
          "front": "12.8 · Subnet an IPv6 Network",
          "back": "Een toegewezen /48 laat typisch 16 bits subnet-ID tot /64: 65.536 /64-LANs. Leen niet routinematig interface-ID-bits. Plan subnet-ID’s hiërarchisch per locatie/VLAN en documenteer GUA-prefix én gateways/LLA’s.",
          "commands": "",
          "verify": [],
          "tags": [
            "ipv6",
            "addressing",
            "subnet",
            "network"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 13,
      "title": "ICMP",
      "summary": "Gebruik ICMPv4/ICMPv6, ping en traceroute om bereikbaarheid, pad en foutlocatie systematisch te onderzoeken.",
      "filename": "modules/module-13.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 2,
        "total": 7
      },
      "cards": [
        {
          "id": "ccna1-m13-q01",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.1",
          "sectionTitle": "ICMP Messages",
          "type": "knowledge",
          "prompt": "Welk bericht ontstaat wanneer TTL nul wordt?",
          "choices": [
            "ICMP Time Exceeded",
            "ARP Reply",
            "TCP SYN-ACK",
            "DHCP Offer"
          ],
          "correctIndex": 0,
          "answer": "ICMP Time Exceeded",
          "explanation": "De router dropt en meldt Time Exceeded.",
          "tags": [
            "icmp",
            "messages",
            "welk",
            "bericht",
            "ontstaat",
            "wanneer",
            "ttl",
            "nul"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m13-q02",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.2",
          "sectionTitle": "Ping and Traceroute Testing",
          "type": "knowledge",
          "prompt": "Wat test ping primair?",
          "choices": [
            "IP-bereikbaarheid en round trip",
            "DNS alleen",
            "De volledige applicatie",
            "Kabelcategorie"
          ],
          "correctIndex": 0,
          "answer": "IP-bereikbaarheid en round trip",
          "explanation": "Echo test het IP-pad, niet elke applicatielaag.",
          "tags": [
            "icmp",
            "ping",
            "and",
            "traceroute",
            "testing",
            "test",
            "primair"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m13-q03",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.2",
          "sectionTitle": "Ping and Traceroute Testing",
          "type": "knowledge",
          "prompt": "Waarom kan een heenpad werken maar ping falen?",
          "choices": [
            "Het retourpad ontbreekt",
            "Ethernet heeft geen MAC",
            "De TTL stijgt",
            "DNS verandert de FCS"
          ],
          "correctIndex": 0,
          "answer": "Het retourpad ontbreekt",
          "explanation": "Echo Reply moet onafhankelijk terug worden gerouteerd.",
          "tags": [
            "icmp",
            "ping",
            "and",
            "traceroute",
            "testing",
            "heenpad",
            "werken",
            "maar",
            "falen"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m13-s01",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.2",
          "sectionTitle": "Ping and Traceroute Testing",
          "type": "diagnosis",
          "prompt": "Een traceroute toont antwoorden tot R2 en daarna alleen sterretjes, terwijl het doel niet reageert. Wat kun je veilig concluderen?",
          "choices": [
            "Het probleem of filtering ligt na het laatst bewezen antwoordende punt; meer bewijs is nodig.",
            "R2 is zeker defect.",
            "DNS is zeker de oorzaak.",
            "Het doel gebruikt altijd een verkeerd MAC-adres."
          ],
          "correctIndex": 0,
          "answer": "Het probleem of filtering ligt na het laatst bewezen antwoordende punt; meer bewijs is nodig.",
          "explanation": "Sterretjes kunnen een drop, filtering of rate limiting betekenen; ze bewijzen niet één specifieke oorzaak.",
          "tags": [
            "icmp",
            "ping",
            "and",
            "traceroute",
            "testing",
            "toont",
            "antwoorden",
            "tot",
            "daarna",
            "alleen"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m13-s02",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.1",
          "sectionTitle": "ICMP Messages",
          "type": "diagnosis",
          "prompt": "Een ping naar IP faalt, maar de applicatie werkt via hetzelfde doel. Welke verklaring is mogelijk?",
          "choices": [
            "ICMP Echo wordt gefilterd terwijl het applicatieprotocol is toegestaan.",
            "IP-connectiviteit bestaat niet.",
            "De host heeft geen NIC.",
            "De switch gebruikt geen MAC-tabel."
          ],
          "correctIndex": 0,
          "answer": "ICMP Echo wordt gefilterd terwijl het applicatieprotocol is toegestaan.",
          "explanation": "Een pingtimeout bewijst niet dat alle transport- of applicatieverkeer faalt.",
          "tags": [
            "icmp",
            "messages",
            "ping",
            "faalt",
            "maar",
            "applicatie",
            "werkt",
            "via",
            "hetzelfde",
            "doel."
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m13-f01",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.1",
          "sectionTitle": "ICMP Messages",
          "type": "flashcard",
          "front": "13.1 · ICMP Messages",
          "back": "ICMP rapporteert fouten en operationele informatie voor IP. Echo Request/Reply test bereikbaarheid; Destination Unreachable en Time Exceeded verklaren bepaalde drops. ICMPv6 is bovendien essentieel voor NDP en Path MTU Discovery. Een timeout bewijst niet automatisch dat het doel down is: filtering of een ontbrekend retourpad kan hetzelfde symptoom geven.",
          "commands": "",
          "verify": [],
          "tags": [
            "icmp",
            "messages"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m13-f02",
          "courseId": "ccna1-itn",
          "moduleId": 13,
          "moduleTitle": "ICMP",
          "sectionId": "13.2",
          "sectionTitle": "Ping and Traceroute Testing",
          "type": "flashcard",
          "front": "13.2 · Ping and Traceroute Testing",
          "back": "Ping meet round-trip en verlies met Echo. Test van dichtbij naar ver: loopback, eigen interface, lokale buur, gateway, remote hop, remote doel en naam. Traceroute verhoogt TTL/Hop Limit om tussenrouters Time Exceeded te laten antwoorden. Sterretjes kunnen filtering of rate limiting zijn; het laatste antwoordende hopgebied helpt scope bepalen.",
          "commands": "ping 127.0.0.1\nping 192.0.2.1\ntracert 198.51.100.10\ntraceroute 2001:db8:2::10",
          "verify": [
            "Bronadres passend",
            "Retourpad aanwezig",
            "Naamresolutie apart getest"
          ],
          "tags": [
            "icmp",
            "ping",
            "and",
            "traceroute",
            "testing"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 14,
      "title": "Transport Layer",
      "summary": "Vergelijk TCP en UDP, poorten en sockets en verklaar betrouwbaarheid, flow control, multiplexing en sessieopbouw.",
      "filename": "modules/module-14.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 7,
        "total": 12
      },
      "cards": [
        {
          "id": "ccna1-m14-q01",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.5",
          "sectionTitle": "TCP Communication Process",
          "type": "knowledge",
          "prompt": "Welke TCP-volgorde start een sessie?",
          "choices": [
            "SYN, SYN-ACK, ACK",
            "ACK, FIN, RST",
            "DISCOVER, OFFER, REQUEST",
            "NS, NA, RA"
          ],
          "correctIndex": 0,
          "answer": "SYN, SYN-ACK, ACK",
          "explanation": "Dat is de three-way handshake.",
          "tags": [
            "transport",
            "layer",
            "tcp",
            "communication",
            "process",
            "tcp-volgorde",
            "start",
            "sessie"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m14-q02",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.3",
          "sectionTitle": "UDP Overview",
          "type": "knowledge",
          "prompt": "Welke UDP-eigenschap is correct?",
          "choices": [
            "Geen ingebouwde ordering of retransmissie",
            "Altijd trager dan TCP",
            "Gebruikt geen poorten",
            "Heeft een 40-byte header"
          ],
          "correctIndex": 0,
          "answer": "Geen ingebouwde ordering of retransmissie",
          "explanation": "UDP houdt het transport minimaal.",
          "tags": [
            "transport",
            "layer",
            "udp",
            "overview",
            "udp-eigenschap",
            "correct"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m14-q03",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.4",
          "sectionTitle": "Port Numbers",
          "type": "knowledge",
          "prompt": "Welke poort is HTTPS standaard?",
          "choices": [
            "443/TCP",
            "80/UDP",
            "53/TCP uitsluitend",
            "22/UDP"
          ],
          "correctIndex": 0,
          "answer": "443/TCP",
          "explanation": "HTTPS gebruikt normaal TCP 443 (naast moderne QUIC-varianten over UDP).",
          "tags": [
            "transport",
            "layer",
            "port",
            "numbers",
            "poort",
            "https",
            "standaard"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m14-s01",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.5",
          "sectionTitle": "TCP Communication Process",
          "type": "diagnosis",
          "prompt": "Een capture toont SYN, SYN-ACK en daarna geen ACK. De server luistert en stuurt correct terug. Waar ligt het probleem waarschijnlijk?",
          "choices": [
            "Het laatste client→serverpad of de client blokkeert het ACK.",
            "UDP heeft geen checksum.",
            "DNS gebruikt een MX-record.",
            "Ethernet heeft geen FCS."
          ],
          "correctIndex": 0,
          "answer": "Het laatste client→serverpad of de client blokkeert het ACK.",
          "explanation": "Zonder de derde handshakeboodschap wordt de TCP-sessie niet volledig gevestigd.",
          "tags": [
            "transport",
            "layer",
            "tcp",
            "communication",
            "process",
            "capture",
            "toont",
            "syn",
            "syn-ack",
            "daarna"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m14-s02",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.6",
          "sectionTitle": "Reliability and Flow Control",
          "type": "diagnosis",
          "prompt": "De ontvanger adverteert een steeds kleiner TCP-window en de zender vertraagt. Welk mechanisme zie je?",
          "choices": [
            "Flow control ter bescherming van de ontvanger.",
            "ARP-spoofing.",
            "Longest prefix match.",
            "DHCP relay."
          ],
          "correctIndex": 0,
          "answer": "Flow control ter bescherming van de ontvanger.",
          "explanation": "Het advertised receive window begrenst hoeveel data zonder extra ACK mag worden verzonden.",
          "tags": [
            "transport",
            "layer",
            "reliability",
            "and",
            "flow",
            "control",
            "ontvanger",
            "adverteert",
            "steeds",
            "kleiner"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m14-f01",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.1",
          "sectionTitle": "Transportation of Data",
          "type": "flashcard",
          "front": "14.1 · Transportation of Data",
          "back": "De transportlaag segmenteert/reassembleert, multiplexeert applicaties met poorten en kan betrouwbaarheid, flow control en sessiebeheer leveren. Een socket is IP-adres plus poort; een flow wordt uniek door protocol en bron/doel-IP/poort. Clients gebruiken vaak dynamische source ports.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "transportation",
            "data"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f02",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.2",
          "sectionTitle": "TCP Overview",
          "type": "flashcard",
          "front": "14.2 · TCP Overview",
          "back": "TCP is connection-oriented en levert geordende betrouwbare byte-streams met sequence/acknowledgment numbers, retransmissie, checksum en flow control. Overhead en wachttijd zijn hoger dan UDP. HTTP(S), SSH, e-mail en file transfer gebruiken vaak TCP wanneer volledigheid belangrijk is.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "tcp",
            "overview"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f03",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.3",
          "sectionTitle": "UDP Overview",
          "type": "flashcard",
          "front": "14.3 · UDP Overview",
          "back": "UDP is connectionless met een header van 8 bytes: source port, destination port, length en checksum. Geen handshake, ordering of retransmissie door UDP zelf. DNS, DHCP, streaming, voice en gaming kiezen vaak UDP voor lage latency of eigen herstel; “onbetrouwbaar” betekent geen leveringsgarantie, niet waardeloos.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "udp",
            "overview"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f04",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.4",
          "sectionTitle": "Port Numbers",
          "type": "flashcard",
          "front": "14.4 · Port Numbers",
          "back": "Well-known 0–1023, registered 1024–49151 en dynamic/private 49152–65535. Server luistert op bekende/registreerde poort; client kiest meestal ephemeral. Voorbeelden: 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 67/68 DHCPv4, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS. Controleer altijd TCP versus UDP.",
          "commands": "netstat -ano\nss -tulpen",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "port",
            "numbers"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f05",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.5",
          "sectionTitle": "TCP Communication Process",
          "type": "flashcard",
          "front": "14.5 · TCP Communication Process",
          "back": "Three-way handshake: SYN, SYN-ACK, ACK synchroniseert sequence numbers. Beëindiging gebruikt doorgaans FIN/ACK in beide richtingen; RST breekt abrupt af. Sequence numbers markeren bytes; ACK is het volgende verwachte nummer. Meerdere applicatiesessies blijven gescheiden door sockets.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "tcp",
            "communication",
            "process"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f06",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.6",
          "sectionTitle": "Reliability and Flow Control",
          "type": "flashcard",
          "front": "14.6 · Reliability and Flow Control",
          "back": "Ontbrekende bytes worden via acknowledgments/timers en retransmissie hersteld; ontvanger ordent out-of-order segmenten. SACK kan specifieke ontvangen blokken melden. Sliding window laat meerdere bytes in flight; advertised receive window beschermt de ontvanger. Congestion control beschermt het netwerk en is iets anders dan flow control.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "reliability",
            "and",
            "flow",
            "control"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m14-f07",
          "courseId": "ccna1-itn",
          "moduleId": 14,
          "moduleTitle": "Transport Layer",
          "sectionId": "14.7",
          "sectionTitle": "UDP Communication",
          "type": "flashcard",
          "front": "14.7 · UDP Communication",
          "back": "UDP-datagrams zijn onafhankelijk; de applicatie bepaalt of verlies, duplicatie of volgorde wordt behandeld. Query/responseprotocollen kunnen eigen timeouts/retries gebruiken. Realtimeverkeer verkiest vaak een laat packet te missen boven wachten op retransmissie. QoS kan prioriteren maar creëert geen betrouwbaarheid.",
          "commands": "",
          "verify": [],
          "tags": [
            "transport",
            "layer",
            "udp",
            "communication"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 15,
      "title": "Application Layer",
      "summary": "Leg uit hoe client/server en peer-to-peerapplicaties DNS, DHCP, web, e-mail en bestandsoverdracht gebruiken.",
      "filename": "modules/module-15.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 10
      },
      "cards": [
        {
          "id": "ccna1-m15-q01",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.4",
          "sectionTitle": "IP Addressing Services",
          "type": "knowledge",
          "prompt": "Welke DHCPv4-volgorde is correct?",
          "choices": [
            "Discover, Offer, Request, Acknowledge",
            "Request, Discover, Ack, Offer",
            "SYN, SYN-ACK, ACK",
            "Query, Reply, Update"
          ],
          "correctIndex": 0,
          "answer": "Discover, Offer, Request, Acknowledge",
          "explanation": "DORA beschrijft leaseverlening.",
          "tags": [
            "application",
            "layer",
            "addressing",
            "services",
            "dhcpv4-volgorde",
            "correct"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m15-q02",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.4",
          "sectionTitle": "IP Addressing Services",
          "type": "knowledge",
          "prompt": "Welk DNS-record bevat een IPv6-adres?",
          "choices": [
            "AAAA",
            "A",
            "MX",
            "PTR uitsluitend"
          ],
          "correctIndex": 0,
          "answer": "AAAA",
          "explanation": "AAAA mappt naam naar IPv6.",
          "tags": [
            "application",
            "layer",
            "addressing",
            "services",
            "welk",
            "dns-record",
            "bevat",
            "ipv6-adres"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m15-q03",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.3",
          "sectionTitle": "Web and Email Protocols",
          "type": "knowledge",
          "prompt": "Welk protocol synchroniseert mail op de server?",
          "choices": [
            "IMAP",
            "SMTP alleen",
            "ARP",
            "TFTP"
          ],
          "correctIndex": 0,
          "answer": "IMAP",
          "explanation": "IMAP bewaart/synchroniseert mailboxstatus.",
          "tags": [
            "application",
            "layer",
            "web",
            "and",
            "email",
            "protocols",
            "welk",
            "protocol",
            "synchroniseert",
            "mail"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m15-s01",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.4",
          "sectionTitle": "IP Addressing Services",
          "type": "diagnosis",
          "prompt": "Een client kan 198.51.100.20 pingen maar `example.test` niet openen; nslookup time-out. Welke dienst faalt?",
          "choices": [
            "DNS-naamresolutie.",
            "Ethernet switching.",
            "De default gateway voor alle verkeer.",
            "TCP-flow-control."
          ],
          "correctIndex": 0,
          "answer": "DNS-naamresolutie.",
          "explanation": "Werkende IP-connectiviteit met falende naamquery is een DNS-probleem.",
          "tags": [
            "application",
            "layer",
            "addressing",
            "services",
            "client",
            "198.51.100.20",
            "pingen",
            "maar",
            "example.test",
            "niet"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m15-s02",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.4",
          "sectionTitle": "IP Addressing Services",
          "type": "diagnosis",
          "prompt": "Een nieuwe client krijgt 169.254.30.8 terwijl lokale statische hosts werken. Welke fase is waarschijnlijk mislukt?",
          "choices": [
            "DHCP-leaseverlening.",
            "ARP voor de loopback.",
            "TCP three-way handshake naar HTTPS.",
            "Ethernet-FCS-berekening."
          ],
          "correctIndex": 0,
          "answer": "DHCP-leaseverlening.",
          "explanation": "Een APIPA/link-local IPv4-adres wijst doorgaans op een mislukte DHCPv4-lease.",
          "tags": [
            "application",
            "layer",
            "addressing",
            "services",
            "nieuwe",
            "client",
            "krijgt",
            "169.254.30.8",
            "terwijl",
            "lokale"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m15-f01",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.1",
          "sectionTitle": "Application, Presentation, and Session",
          "type": "flashcard",
          "front": "15.1 · Application, Presentation, and Session",
          "back": "De TCP/IP-applicatielaag omvat OSI application, presentation en session: netwerkservice, syntax/encoding/compressie/encryptie en dialoogbeheer. Een user application gebruikt een application-layer protocol; browser en HTTP zijn niet hetzelfde. TLS presenteert beveiliging tussen applicatie en transport.",
          "commands": "",
          "verify": [],
          "tags": [
            "application",
            "layer",
            "presentation",
            "and",
            "session"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m15-f02",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.2",
          "sectionTitle": "Peer-to-Peer",
          "type": "flashcard",
          "front": "15.2 · Peer-to-Peer",
          "back": "In client-server leveren dedicated servers schaalbaar centraal beheer. In peer-to-peer kunnen hosts tegelijk client en server zijn; eenvoudig maar lastiger te beveiligen en beheren. P2P applications kunnen via een index/trackers peers ontdekken en data direct distribueren. Architectuurkeuze is onafhankelijk van fysieke topologie.",
          "commands": "",
          "verify": [],
          "tags": [
            "application",
            "layer",
            "peer-to-peer"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m15-f03",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.3",
          "sectionTitle": "Web and Email Protocols",
          "type": "flashcard",
          "front": "15.3 · Web and Email Protocols",
          "back": "HTTP request/response gebruikt methoden en statuscodes; HTTPS is HTTP beveiligd met TLS. Een URL bevat schema, host, optionele poort, pad en query. SMTP verzendt mail tussen client/server en servers; POP3 downloadt eenvoudig, IMAP synchroniseert mappen/status met de server. DNS MX helpt mailrouting.",
          "commands": "",
          "verify": [],
          "tags": [
            "application",
            "layer",
            "web",
            "and",
            "email",
            "protocols"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m15-f04",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.4",
          "sectionTitle": "IP Addressing Services",
          "type": "flashcard",
          "front": "15.4 · IP Addressing Services",
          "back": "DNS is hiërarchisch: resolver vraagt records zoals A, AAAA, CNAME, MX en NS en cachet volgens TTL. Een naamprobleem kan bestaan terwijl IP-connectiviteit werkt. DHCPv4 DORA: Discover, Offer, Request, Acknowledge. Het levert adres, masker, gateway, DNS en lease; relay forwardt broadcasts naar een server in een ander subnet.",
          "commands": "ipconfig /all\nipconfig /release\nipconfig /renew\nnslookup example.com",
          "verify": [
            "Leaseparameters correct",
            "Naam en direct IP apart getest"
          ],
          "tags": [
            "application",
            "layer",
            "addressing",
            "services"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m15-f05",
          "courseId": "ccna1-itn",
          "moduleId": 15,
          "moduleTitle": "Application Layer",
          "sectionId": "15.5",
          "sectionTitle": "File Sharing Services",
          "type": "flashcard",
          "front": "15.5 · File Sharing Services",
          "back": "FTP gebruikt TCP-control en aparte dataconnectie; active/passive verschilt in initiator van data. TFTP gebruikt UDP en mist authenticatie/encryptie; SFTP draait over SSH. SMB deelt Windowsbestanden/printers; NFS is gangbaar op Unix/Linux. Kies protocol op beveiliging, beheer, interoperabiliteit en netwerkpad.",
          "commands": "",
          "verify": [],
          "tags": [
            "application",
            "layer",
            "file",
            "sharing",
            "services"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 16,
      "title": "Network Security Fundamentals",
      "summary": "Herken dreigingen en kwetsbaarheden, koppel aanvallen aan mitigatie en harden IOS-apparaten.",
      "filename": "modules/module-16.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 4,
        "total": 9
      },
      "cards": [
        {
          "id": "ccna1-m16-q01",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.1",
          "sectionTitle": "Security Threats and Vulnerabilities",
          "type": "knowledge",
          "prompt": "Welke CIA-eigenschap beschermt tegen ongeoorloofde wijziging?",
          "choices": [
            "Integrity",
            "Availability",
            "Confidentiality",
            "Latency"
          ],
          "correctIndex": 0,
          "answer": "Integrity",
          "explanation": "Integrity bewaakt juistheid en onveranderdheid.",
          "tags": [
            "network",
            "security",
            "fundamentals",
            "threats",
            "and",
            "vulnerabilities",
            "cia-eigenschap",
            "beschermt",
            "tegen",
            "ongeoorloofde"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m16-q02",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.4",
          "sectionTitle": "Device Security",
          "type": "knowledge",
          "prompt": "Welke beheeroptie vermijdt leesbare credentials onderweg?",
          "choices": [
            "SSHv2",
            "Telnet",
            "HTTP",
            "Een banner"
          ],
          "correctIndex": 0,
          "answer": "SSHv2",
          "explanation": "SSH versleutelt de sessie.",
          "tags": [
            "network",
            "security",
            "fundamentals",
            "device",
            "beheeroptie",
            "vermijdt",
            "leesbare",
            "credentials",
            "onderweg"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m16-q03",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.3",
          "sectionTitle": "Network Attack Mitigation",
          "type": "knowledge",
          "prompt": "Wat is least privilege?",
          "choices": [
            "Alleen minimaal noodzakelijke rechten geven",
            "Iedereen privilege 15 geven",
            "Alle logs wissen",
            "Alle poorten trusted maken"
          ],
          "correctIndex": 0,
          "answer": "Alleen minimaal noodzakelijke rechten geven",
          "explanation": "Beperk rechten tot taakbehoefte.",
          "tags": [
            "network",
            "security",
            "fundamentals",
            "attack",
            "mitigation",
            "least",
            "privilege"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m16-s01",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.4",
          "sectionTitle": "Device Security",
          "type": "diagnosis",
          "prompt": "VTY staat op `transport input telnet ssh` en gebruikers melden dat credentials zichtbaar zijn in een capture. Welke hardening ontbreekt?",
          "choices": [
            "Alleen SSH toestaan en Telnet blokkeren.",
            "Service password-encryption uitschakelen.",
            "Een groter broadcastdomein maken.",
            "ICMP volledig blokkeren."
          ],
          "correctIndex": 0,
          "answer": "Alleen SSH toestaan en Telnet blokkeren.",
          "explanation": "Telnet versleutelt de beheersessie niet; VTY hoort alleen SSH toe te laten.",
          "tags": [
            "network",
            "security",
            "fundamentals",
            "device",
            "vty",
            "staat",
            "transport",
            "input",
            "telnet",
            "ssh"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m16-s02",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.2",
          "sectionTitle": "Network Attacks",
          "type": "diagnosis",
          "prompt": "Een medewerker voert na een phishingmail een onbekende bijlage uit en bestanden worden versleuteld. Welke combinatie beschrijft het incident?",
          "choices": [
            "Social engineering gevolgd door ransomware.",
            "ARP gevolgd door SLAAC.",
            "STP gevolgd door DHCP.",
            "NTP gevolgd door DNSSEC."
          ],
          "correctIndex": 0,
          "answer": "Social engineering gevolgd door ransomware.",
          "explanation": "Phishing misleidt de gebruiker; ransomware versleutelt gegevens voor afpersing.",
          "tags": [
            "network",
            "security",
            "fundamentals",
            "attacks",
            "medewerker",
            "voert",
            "phishingmail",
            "onbekende",
            "bijlage",
            "bestanden"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m16-f01",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.1",
          "sectionTitle": "Security Threats and Vulnerabilities",
          "type": "flashcard",
          "front": "16.1 · Security Threats and Vulnerabilities",
          "back": "CIA staat voor confidentiality, integrity en availability. Een threat kan een vulnerability misbruiken; risk combineert waarschijnlijkheid en impact. Dreigingen zijn extern of intern, opzettelijk of accidenteel. Kwetsbaarheden ontstaan in technologie, configuratie, beleid en menselijk gedrag.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "security",
            "fundamentals",
            "threats",
            "and",
            "vulnerabilities"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m16-f02",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.2",
          "sectionTitle": "Network Attacks",
          "type": "flashcard",
          "front": "16.2 · Network Attacks",
          "back": "Malware omvat virus, worm, trojan, ransomware en spyware. Reconnaissance verzamelt informatie; access attacks misbruiken credentials/kwetsbaarheden; DoS tast beschikbaarheid aan. Social engineering zoals phishing en pretexting richt zich op mensen. Spoofing, MITM, password attacks en data exfiltration vragen verschillende detectie en mitigatie.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "security",
            "fundamentals",
            "attacks"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m16-f03",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.3",
          "sectionTitle": "Network Attack Mitigation",
          "type": "flashcard",
          "front": "16.3 · Network Attack Mitigation",
          "back": "Defense in depth combineert patches, least privilege, MFA, firewalls/ACLs, IDS/IPS, endpoint security, segmentatie, encryptie, back-ups en monitoring. Beveilig management met SSH, AAA en afgescheiden toegang. Baselines, logs, NTP en incidentprocedures maken afwijkingen aantoonbaar.",
          "commands": "",
          "verify": [],
          "tags": [
            "network",
            "security",
            "fundamentals",
            "attack",
            "mitigation"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m16-f04",
          "courseId": "ccna1-itn",
          "moduleId": 16,
          "moduleTitle": "Network Security Fundamentals",
          "sectionId": "16.4",
          "sectionTitle": "Device Security",
          "type": "flashcard",
          "front": "16.4 · Device Security",
          "back": "Gebruik sterke secrets, lokale fallbackaccounts, SSHv2, VTY-beperking, timeouts, banners en versleutelde beheerprotocollen. Schakel ongebruikte poorten/services uit. Login block-for en logging beperken/registreren brute force. Bewaar config veilig, test herstel en geef gebruikers minimale privilege.",
          "commands": "enable secret <GEHEIM>\nsecurity passwords min-length 10\nlogin block-for 120 attempts 3 within 60\nip ssh version 2\nline vty 0 4\n login local\n transport input ssh\n exec-timeout 5 0",
          "verify": [
            "show login",
            "show ip ssh",
            "show users",
            "Logs met correcte tijd"
          ],
          "tags": [
            "network",
            "security",
            "fundamentals",
            "device"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    },
    {
      "id": 17,
      "title": "Build a Small Network",
      "summary": "Ontwerp, bouw, verifieer en troubleshoot een klein dual-stacknetwerk met passende apparaten, diensten en documentatie.",
      "filename": "modules/module-17.json",
      "counts": {
        "knowledge": 3,
        "diagnosis": 2,
        "flashcards": 7,
        "total": 12
      },
      "cards": [
        {
          "id": "ccna1-m17-q01",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.6",
          "sectionTitle": "Troubleshooting Methodologies",
          "type": "knowledge",
          "prompt": "Wat is de beste eerste stap bij troubleshooting?",
          "choices": [
            "Probleem en scope precies definiëren",
            "Alles herstarten",
            "Configuratie wissen",
            "Alle filters uitschakelen"
          ],
          "correctIndex": 0,
          "answer": "Probleem en scope precies definiëren",
          "explanation": "Een correcte probleemdefinitie voorkomt willekeurige wijzigingen.",
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "methodologies",
            "beste",
            "eerste",
            "stap"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m17-q02",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.6",
          "sectionTitle": "Troubleshooting Methodologies",
          "type": "knowledge",
          "prompt": "Welke methode test een middenlaag en halveert daarna het zoekgebied?",
          "choices": [
            "Divide-and-conquer",
            "Bottom-up uitsluitend",
            "Substitution",
            "Guessing"
          ],
          "correctIndex": 0,
          "answer": "Divide-and-conquer",
          "explanation": "Een middentest bepaalt boven- of onderkant.",
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "methodologies",
            "methode",
            "test",
            "middenlaag",
            "halveert",
            "daarna"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m17-q03",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.3",
          "sectionTitle": "Scale to Larger Networks",
          "type": "knowledge",
          "prompt": "Waarom een baseline bewaren?",
          "choices": [
            "Om normaal gedrag met het incident te vergelijken",
            "Om wachtwoorden openbaar te maken",
            "Om subnetting te vermijden",
            "Om geen logs nodig te hebben"
          ],
          "correctIndex": 0,
          "answer": "Om normaal gedrag met het incident te vergelijken",
          "explanation": "Zonder normaalbeeld is afwijking moeilijk meetbaar.",
          "tags": [
            "build",
            "small",
            "network",
            "scale",
            "larger",
            "networks",
            "baseline",
            "bewaren"
          ],
          "provenance": "original-ccna1-study-question"
        },
        {
          "id": "ccna1-m17-s01",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.7",
          "sectionTitle": "Troubleshooting Scenarios",
          "type": "diagnosis",
          "prompt": "Een router kan de remote server pingen vanaf zijn WAN-interface, maar een LAN-host niet. Welke controle is het belangrijkst?",
          "choices": [
            "Test met het LAN-bronadres en controleer het retourpad naar het LAN.",
            "Wis alle configuraties.",
            "Maak elke switchpoort trusted.",
            "Schakel DNS uit."
          ],
          "correctIndex": 0,
          "answer": "Test met het LAN-bronadres en controleer het retourpad naar het LAN.",
          "explanation": "De routerping kan een ander bronadres en daardoor een ander retourpad gebruiken.",
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "scenarios",
            "router",
            "remote",
            "server",
            "pingen",
            "vanaf"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m17-s02",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.6",
          "sectionTitle": "Troubleshooting Methodologies",
          "type": "diagnosis",
          "prompt": "Een beheerder verandert tegelijk IP, kabel, VLAN en route; daarna werkt het maar de oorzaak is onbekend. Welke methodologische fout is gemaakt?",
          "choices": [
            "Meerdere variabelen tegelijk wijzigen zonder toetsbare hypothese.",
            "Te veel logging gebruiken.",
            "Een baseline bewaren.",
            "Het probleem eerst afbakenen."
          ],
          "correctIndex": 0,
          "answer": "Meerdere variabelen tegelijk wijzigen zonder toetsbare hypothese.",
          "explanation": "Eén bewezen oorzaak en één gecontroleerde wijziging houden diagnose reproduceerbaar.",
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "methodologies",
            "beheerder",
            "verandert",
            "tegelijk",
            "kabel",
            "vlan"
          ],
          "provenance": "original-ccna1-diagnosis-scenario"
        },
        {
          "id": "ccna1-m17-f01",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.1",
          "sectionTitle": "Devices in a Small Network",
          "type": "flashcard",
          "front": "17.1 · Devices in a Small Network",
          "back": "Inventariseer gebruikers, applicaties, verkeer, groei, security en beschikbaarheid. Kies switchpoorten/snelheden, router/WAN, AP-capaciteit, firewall en eventuele servers passend bij eisen. Plan IP-adressen, namen, kabels, locaties, stroom/UPS, beheer en reserve. Een eenvoudig diagram en inventaris versnellen elke wijziging.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "devices"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f02",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.2",
          "sectionTitle": "Small Network Applications and Protocols",
          "type": "flashcard",
          "front": "17.2 · Small Network Applications and Protocols",
          "back": "Veelgebruikte infrastructuurdiensten zijn DHCP, DNS, NTP, directory/authenticatie, file/print, web en monitoring. Hun protocollen en poorten bepalen policies en troubleshooting. Prioriteer real-time voice/video met QoS waar congestie kan optreden; beveilig services en beperk onnodige exposure.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "applications",
            "and",
            "protocols"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f03",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.3",
          "sectionTitle": "Scale to Larger Networks",
          "type": "flashcard",
          "front": "17.3 · Scale to Larger Networks",
          "back": "Groei vraagt hiërarchie, adresplanning/summarization, VLAN-segmentatie, redundantie, snellere uplinks, centrale services, monitoring en change management. Meet utilization, errors, CPU/memory, latency en beschikbaarheid tegen een baseline. Schalen is meer dan hardware toevoegen.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "scale",
            "larger",
            "networks"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f04",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.4",
          "sectionTitle": "Verify Connectivity",
          "type": "flashcard",
          "front": "17.4 · Verify Connectivity",
          "back": "Gebruik een testplan met laag-voor-laag en dichtbij-naar-ver: fysieke link, interface, lokaal IP, gateway, remote IP, DNS en applicatie. Ping meet bereikbaarheid/RTT; tracert/traceroute lokaliseert het pad. Leg verwachte en feitelijke resultaten vast zodat regressies zichtbaar zijn.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "verify",
            "connectivity"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f05",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.5",
          "sectionTitle": "Host and IOS Commands",
          "type": "flashcard",
          "front": "17.5 · Host and IOS Commands",
          "back": "Hosts: `ipconfig`/`ip addr`, `arp -a`/`ip neigh`, `route print`/`ip route`, `netstat`/`ss`, `nslookup`/`dig`, ping en traceroute. IOS: `show ip interface brief`, `show interfaces`, `show mac address-table`, `show arp`, `show ip route`, `show cdp neighbors`, `show running-config` en logging.",
          "commands": "show ip interface brief\nshow interfaces counters errors\nshow mac address-table\nshow arp\nshow ip route\nshow cdp neighbors detail",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "host",
            "and",
            "ios",
            "commands"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f06",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.6",
          "sectionTitle": "Troubleshooting Methodologies",
          "type": "flashcard",
          "front": "17.6 · Troubleshooting Methodologies",
          "back": "Proces: probleem definiëren, feiten verzamelen, theorie vormen, theorie testen, actieplan uitvoeren, functionaliteit verifiëren, preventie en documentatie vastleggen. Methoden zijn bottom-up, top-down, divide-and-conquer, follow-the-path, substitution en comparison. Kies op symptoom en beschikbare gegevens.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "methodologies"
          ],
          "provenance": "original-ccna1-flashcard"
        },
        {
          "id": "ccna1-m17-f07",
          "courseId": "ccna1-itn",
          "moduleId": 17,
          "moduleTitle": "Build a Small Network",
          "sectionId": "17.7",
          "sectionTitle": "Troubleshooting Scenarios",
          "type": "flashcard",
          "front": "17.7 · Troubleshooting Scenarios",
          "back": "Typische fouten: verkeerde kabel/poort, shutdown, speed/duplex, fout IP/mask/gateway/DNS, ontbrekende route, stale ARP, service down of filtering. Verander één bewezen oorzaak tegelijk. Vergelijk running-config (intentie) met operationele tabellen/counters (werkelijkheid) en test ook het retourpad.",
          "commands": "",
          "verify": [],
          "tags": [
            "build",
            "small",
            "network",
            "troubleshooting",
            "scenarios"
          ],
          "provenance": "original-ccna1-flashcard"
        }
      ]
    }
  ]
};
