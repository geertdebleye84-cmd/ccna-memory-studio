window.CCNA2_QA_LIBRARY = {
  "schemaVersion": 1,
  "courseId": "ccna2-srwe",
  "title": "CCNA2 Vraag & Antwoord Library",
  "masteryRule": "Alleen knowledge- en diagnosis-antwoorden tellen als bewijs. Een vraag telt volledig na minstens twee correcte antwoorden; modulekleur combineert dekking, herhaling en nauwkeurigheid.",
  "modules": [
    {
      "id": 1,
      "title": "Basic Device Configuration",
      "summary": "Configureer en controleer een switch of router veilig vanaf de eerste boot: beheeradres, poorten, SSH en rechtstreeks verbonden netwerken.",
      "filename": "modules/module-01.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m01-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.1",
          "sectionTitle": "Configure a Switch with Initial Settings",
          "type": "knowledge",
          "prompt": "Waarom kan een switch frames blijven doorsturen zonder beheer-IP?",
          "choices": [
            "Switching gebruikt de MAC-adrestabel op Layer 2.",
            "ARP levert altijd een automatisch beheer-IP.",
            "Elke switchpoort krijgt een routingtabel.",
            "STP deelt een IP-adres uit."
          ],
          "correctIndex": 0,
          "answer": "Switching gebruikt de MAC-adrestabel op Layer 2.",
          "explanation": "Het beheer-IP is voor IP-beheer; Ethernet-switching zelf is Layer 2.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "with",
            "initial",
            "settings",
            "frames",
            "blijven"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m01-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.3",
          "sectionTitle": "Secure Remote Access",
          "type": "knowledge",
          "prompt": "Welke combinatie maakt versleutelde VTY-aanmelding met een lokale gebruiker mogelijk?",
          "choices": [
            "login local en transport input ssh",
            "password cisco en transport output telnet",
            "enable password en login",
            "service password-encryption en no login"
          ],
          "correctIndex": 0,
          "answer": "login local en transport input ssh",
          "explanation": "login local raadpleegt de lokale gebruikersdatabase; transport input ssh blokkeert Telnet.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "secure",
            "remote",
            "access",
            "combinatie",
            "maakt",
            "versleutelde",
            "vty-aanmelding"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m01-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.2",
          "sectionTitle": "Configure Switch Ports",
          "type": "knowledge",
          "prompt": "Een switchpoort toont veel late collisions. Wat is de meest waarschijnlijke oorzaak?",
          "choices": [
            "Duplex-mismatch",
            "Onjuist default gateway",
            "Ontbrekende RSA-sleutel",
            "Verkeerde VLAN-naam"
          ],
          "correctIndex": 0,
          "answer": "Duplex-mismatch",
          "explanation": "Late collisions passen bij een half/full-duplexconflict of fysiek gedeeld medium.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "ports",
            "switchpoort",
            "toont",
            "veel",
            "late"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m01-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.4",
          "sectionTitle": "Basic Router Configuration",
          "type": "knowledge",
          "prompt": "Wat betekent administratively down?",
          "choices": [
            "De interface is met shutdown uitgezet.",
            "Er bestaat geen ARP-entry.",
            "De lijn heeft een native-VLAN mismatch.",
            "De interface heeft geen DNS-server."
          ],
          "correctIndex": 0,
          "answer": "De interface is met shutdown uitgezet.",
          "explanation": "De administratieve status komt rechtstreeks van shutdown/no shutdown.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "router",
            "betekent",
            "administratively",
            "down"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m01-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.1",
          "sectionTitle": "Configure a Switch with Initial Settings",
          "type": "diagnosis",
          "prompt": "S1 heeft een correct management-IP, maar interface VLAN 99 blijft down/down. VLAN 99 bestaat en alle poorten in die VLAN zijn uitgeschakeld. Wat is de oorzaak?",
          "choices": [
            "Er is geen actieve Layer-2-poort in VLAN 99.",
            "De RSA-sleutel is te lang.",
            "De switch mist ip routing.",
            "De consolelijn heeft geen wachtwoord."
          ],
          "correctIndex": 0,
          "answer": "Er is geen actieve Layer-2-poort in VLAN 99.",
          "explanation": "Een SVI wordt pas operationeel wanneer de VLAN actief is via minstens één up/forwarding poort.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "with",
            "initial",
            "settings",
            "heeft",
            "correct"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m01-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.2",
          "sectionTitle": "Configure Switch Ports",
          "type": "diagnosis",
          "prompt": "Een Ethernetlink is up, maar toont veel late collisions en zeer lage throughput. Eén zijde staat full duplex en de andere half duplex. Wat veroorzaakt het probleem?",
          "choices": [
            "Een duplex-mismatch.",
            "Een ontbrekende default route.",
            "Een native-VLAN mismatch.",
            "Een verlopen DHCP-lease."
          ],
          "correctIndex": 0,
          "answer": "Een duplex-mismatch.",
          "explanation": "Late collisions en slechte prestaties zijn klassieke signalen van een duplexconflict.",
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "ports",
            "ethernetlink",
            "maar",
            "toont",
            "veel"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m01-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.1",
          "sectionTitle": "Configure a Switch with Initial Settings",
          "type": "flashcard",
          "front": "1.1 · Configure a Switch with Initial Settings",
          "back": "Een Layer-2-switch heeft geen IP-adres nodig om frames te schakelen. Voor beheer op afstand krijgt een SVI (interface vlan) wel een adres; de SVI wordt pas line protocol up wanneer de VLAN bestaat en minstens één poort in die VLAN actief is. Beveilig privileged EXEC met enable secret, versleutel leesbare wachtwoorden met service password-encryption, stel een banner in en sla de actieve configuratie op in startup-config. Voor beheer buiten het lokale subnet gebruikt een Layer-2-switch ip default-gateway. Een multilayer switch met ip routing gebruikt routes en geen ip default-gateway.",
          "commands": "hostname S1\nno ip domain-lookup\nenable secret <STERK_GEHEIM>\nservice password-encryption\nbanner motd # Alleen bevoegde toegang #\ninterface vlan 99\n ip address 192.0.2.2 255.255.255.0\n no shutdown\nexit\nip default-gateway 192.0.2.1\ncopy running-config startup-config",
          "verify": [
            "show running-config",
            "show startup-config",
            "show ip interface brief",
            "show interfaces vlan 99"
          ],
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "with",
            "initial",
            "settings"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m01-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.2",
          "sectionTitle": "Configure Switch Ports",
          "type": "flashcard",
          "front": "1.2 · Configure Switch Ports",
          "back": "Configureer een eindapparaatpoort expliciet als accesspoort. Beschrijvingen, snelheid en duplex moeten aan beide uiteinden overeenkomen; autonegotiation is normaal de veiligste keuze tenzij het ontwerp vaste waarden vereist. Auto-MDIX herkent rechte en crossover-kabels wanneer de interface dit ondersteunt. Duplex-mismatch veroorzaakt late collisions, FCS-fouten en zeer slechte prestaties, ook als de link up blijft. De interfacecounters zijn diagnostisch bewijs: kijk naar input errors, CRC/FCS, collisions, late collisions en drops en vergelijk beide uiteinden.",
          "commands": "interface range gigabitEthernet 0/1-4\n description USER_PORTS\n switchport mode access\n spanning-tree portfast\n no shutdown",
          "verify": [
            "show interfaces status",
            "show interfaces counters errors",
            "show interfaces gigabitEthernet 0/1",
            "show controllers ethernet-controller"
          ],
          "tags": [
            "basic",
            "device",
            "configuration",
            "configure",
            "switch",
            "ports"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m01-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.3",
          "sectionTitle": "Secure Remote Access",
          "type": "flashcard",
          "front": "1.3 · Secure Remote Access",
          "back": "SSH versleutelt beheer; Telnet niet. IOS heeft een hostname, domeinnaam, RSA-sleutelpaar, lokale gebruiker en VTY-login via de lokale database nodig. Beperk de VTY-lijnen tot SSH. RSA 2048 bit is een bruikbare labkeuze; productiebeleid kan langere sleutels, AAA en management-ACL’s eisen. De SSH-client moet het beheer-IP kunnen bereiken en de juiste gebruikersnaam gebruiken. Een falende sessie kan netwerk-, sleutel-, VTY- of authenticatieproblemen hebben.",
          "commands": "ip domain-name lab.example\nusername admin privilege 15 secret <STERK_GEHEIM>\ncrypto key generate rsa modulus 2048\nip ssh version 2\nline vty 0 15\n login local\n transport input ssh\n exec-timeout 10 0",
          "verify": [
            "show ip ssh",
            "show ssh",
            "show users",
            "ssh -l admin 192.0.2.2"
          ],
          "tags": [
            "basic",
            "device",
            "configuration",
            "secure",
            "remote",
            "access"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m01-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.4",
          "sectionTitle": "Basic Router Configuration",
          "type": "flashcard",
          "front": "1.4 · Basic Router Configuration",
          "back": "Een routerinterface vormt een Layer-3-grens en heeft meestal een uniek subnetadres. no shutdown is vereist; administratively down betekent dat de interface softwarematig is uitgezet. IPv6-routing wordt globaal ingeschakeld met ipv6 unicast-routing. Een interface kan tegelijk een IPv4-adres, IPv6-GUA en automatisch gevormd link-local adres hebben. Een beschrijving legt het doel en de buur vast en versnelt storingsanalyse.",
          "commands": "hostname R1\nipv6 unicast-routing\ninterface gigabitEthernet 0/0/0\n description LAN_A\n ip address 192.0.2.1 255.255.255.0\n ipv6 address 2001:db8:1::1/64\n no shutdown",
          "verify": [
            "show ip interface brief",
            "show ipv6 interface brief",
            "show interfaces description",
            "show running-config interface g0/0/0"
          ],
          "tags": [
            "basic",
            "device",
            "configuration",
            "router"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m01-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 1,
          "moduleTitle": "Basic Device Configuration",
          "sectionId": "1.5",
          "sectionTitle": "Verify Directly Connected Networks",
          "type": "flashcard",
          "front": "1.5 · Verify Directly Connected Networks",
          "back": "Een actieve interface plaatst een connected route (C) voor het subnet en een local host route (L /32 of /128) voor het eigen adres in de routingtabel. Gebruik eerst show ip interface brief voor status, daarna show route voor Layer 3 en pas dan ping/traceroute. Test oplopend: loopback, eigen interface, lokale buur, remote doel. IPv6-neighbors verschijnen in show ipv6 neighbors; dit is het NDP-equivalent van de IPv4 ARP-cache.",
          "commands": "show ip route connected\nshow ipv6 route connected\nshow arp\nshow ipv6 neighbors\nping 192.0.2.10\ntraceroute 198.51.100.10",
          "verify": [
            "Interface is up/up",
            "Connected en local routes aanwezig",
            "Buuradres resolveert naar een MAC-adres",
            "End-to-end ping slaagt"
          ],
          "tags": [
            "basic",
            "device",
            "configuration",
            "verify",
            "directly",
            "connected",
            "networks"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 2,
      "title": "Switching Concepts",
      "summary": "Begrijp hoe een switch MAC-adressen leert, frames doorstuurt en collision- en broadcastdomeinen begrenst.",
      "filename": "modules/module-02.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 2,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna2-m02-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.1",
          "sectionTitle": "Frame Forwarding",
          "type": "knowledge",
          "prompt": "Wat doet een switch met een frame waarvan het bestemmings-MAC onbekend is?",
          "choices": [
            "Flooden binnen dezelfde VLAN behalve de inkomende poort",
            "Naar de default gateway sturen",
            "Altijd droppen",
            "Over alle VLANs flooden"
          ],
          "correctIndex": 0,
          "answer": "Flooden binnen dezelfde VLAN behalve de inkomende poort",
          "explanation": "Unknown unicast flooding blijft beperkt tot de betreffende VLAN.",
          "tags": [
            "switching",
            "concepts",
            "frame",
            "forwarding",
            "doet",
            "switch",
            "waarvan",
            "bestemmings-mac",
            "onbekend"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m02-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.1",
          "sectionTitle": "Frame Forwarding",
          "type": "knowledge",
          "prompt": "Welke informatie gebruikt de switch om zijn MAC-tabel te leren?",
          "choices": [
            "Bron-MAC en inkomende poort",
            "Bestemmings-IP en uitgaande poort",
            "Bron-IP en ARP-timeout",
            "Bestemmings-MAC en default gateway"
          ],
          "correctIndex": 0,
          "answer": "Bron-MAC en inkomende poort",
          "explanation": "Elke ontvangen framebron onthult waar dat MAC-adres bereikbaar is.",
          "tags": [
            "switching",
            "concepts",
            "frame",
            "forwarding",
            "informatie",
            "gebruikt",
            "switch",
            "mac-tabel",
            "leren"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m02-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.1",
          "sectionTitle": "Frame Forwarding",
          "type": "knowledge",
          "prompt": "Wat is een belangrijk voordeel van store-and-forward?",
          "choices": [
            "FCS-controle vóór forwarding",
            "Geen framebuffer nodig",
            "Broadcasts worden gerouteerd",
            "MAC-learning wordt uitgeschakeld"
          ],
          "correctIndex": 0,
          "answer": "FCS-controle vóór forwarding",
          "explanation": "Het volledige frame is beschikbaar voor lengte- en FCS-validatie.",
          "tags": [
            "switching",
            "concepts",
            "frame",
            "forwarding",
            "belangrijk",
            "voordeel",
            "store-and-forward"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m02-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.2",
          "sectionTitle": "Collision and Broadcast Domains",
          "type": "knowledge",
          "prompt": "Hoeveel collision domains heeft een switch met acht actieve full-duplex accesspoorten?",
          "choices": [
            "Acht",
            "Eén",
            "Twee",
            "Nul fysieke segmenten"
          ],
          "correctIndex": 0,
          "answer": "Acht",
          "explanation": "Elke switchpoort vormt zijn eigen segment, ook al ontstaan in full duplex feitelijk geen collisions.",
          "tags": [
            "switching",
            "concepts",
            "collision",
            "and",
            "broadcast",
            "domains",
            "hoeveel",
            "heeft",
            "switch",
            "acht"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m02-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.1",
          "sectionTitle": "Frame Forwarding",
          "type": "diagnosis",
          "prompt": "Na het leegmaken van de MAC-tabel wordt het eerste unicastframe naar meerdere poorten in dezelfde VLAN gestuurd. Waarom?",
          "choices": [
            "De bestemming is nog unknown unicast.",
            "De switch routeert het frame.",
            "STP heeft alle poorten root gemaakt.",
            "De FCS is correct."
          ],
          "correctIndex": 0,
          "answer": "De bestemming is nog unknown unicast.",
          "explanation": "Zonder geleerde bestemmingsentry floodt de switch unknown unicast binnen de VLAN.",
          "tags": [
            "switching",
            "concepts",
            "frame",
            "forwarding",
            "leegmaken",
            "mac-tabel",
            "eerste",
            "unicastframe",
            "meerdere",
            "poorten"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m02-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.2",
          "sectionTitle": "Collision and Broadcast Domains",
          "type": "diagnosis",
          "prompt": "Broadcasts van VLAN 10 bereiken alle VLAN-10-poorten op twee switches, maar nooit VLAN 20. Welke netwerkgrens verklaart dit?",
          "choices": [
            "Elke VLAN is een apart broadcast domain.",
            "Elke trunk is een router.",
            "Elke switch heeft één collision domain.",
            "Auto-MDIX filtert broadcasts."
          ],
          "correctIndex": 0,
          "answer": "Elke VLAN is een apart broadcast domain.",
          "explanation": "VLAN-segmentatie begrenst Layer-2-broadcasts.",
          "tags": [
            "switching",
            "concepts",
            "collision",
            "and",
            "broadcast",
            "domains",
            "broadcasts",
            "vlan",
            "bereiken",
            "alle"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m02-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.1",
          "sectionTitle": "Frame Forwarding",
          "type": "flashcard",
          "front": "2.1 · Frame Forwarding",
          "back": "De switch leert het bron-MAC-adres van elk ontvangen frame en koppelt dit aan de inkomende poort en VLAN. Dynamische entries verouderen wanneer geen verkeer ze vernieuwt. Bij een bekende unicastbestemming stuurt de switch alleen via de gekoppelde poort. Unknown unicast, broadcast en relevante multicast worden binnen dezelfde VLAN via alle andere actieve poorten geflood. Store-and-forward ontvangt het hele frame en controleert FCS vóór forwarding; cut-through begint na het bestemmingsadres en verlaagt latency maar kan beschadigde frames doorgeven. Een switch gebruikt buffering per poort of uit gedeeld geheugen. Gedeeld geheugen helpt bij asymmetrische snelheden en tijdelijke bursts.",
          "commands": "show mac address-table\nshow mac address-table dynamic\nclear mac address-table dynamic",
          "verify": [
            "Bron-MAC verschijnt op de inkomende poort",
            "Bekende unicast wordt niet naar andere accesspoorten geflood",
            "MAC-entry staat in de juiste VLAN"
          ],
          "tags": [
            "switching",
            "concepts",
            "frame",
            "forwarding"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m02-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 2,
          "moduleTitle": "Switching Concepts",
          "sectionId": "2.2",
          "sectionTitle": "Collision and Broadcast Domains",
          "type": "flashcard",
          "front": "2.2 · Collision and Broadcast Domains",
          "back": "Elke switchpoort is een afzonderlijk collision domain; full duplex schakelt botsingen uit. Een hub deelt één collision domain en werkt half duplex. Een VLAN vormt een broadcast domain. Routers en multilayer-switches begrenzen broadcasts; gewone Layer-2-switches verspreiden ze binnen de VLAN. Microsegmentation geeft elke endpoint een eigen switchpoort en dus eigen bandbreedte. Congestie kan nog steeds optreden bij oversubscribed uplinks.",
          "commands": "show interfaces status\nshow interfaces switchport\nshow vlan brief",
          "verify": [
            "Elke accesspoort is aan precies één operationele access-VLAN gekoppeld",
            "Uplinks hebben voldoende capaciteit",
            "Full duplex aan beide uiteinden"
          ],
          "tags": [
            "switching",
            "concepts",
            "collision",
            "and",
            "broadcast",
            "domains"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 3,
      "title": "VLANs",
      "summary": "Segmenteer een switched netwerk met VLANs, accesspoorten en 802.1Q-trunks en voorkom ongewenste DTP-onderhandeling.",
      "filename": "modules/module-03.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m03-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.2",
          "sectionTitle": "VLANs in a Multi-Switched Environment",
          "type": "knowledge",
          "prompt": "Welke VLAN wordt op een standaard 802.1Q-trunk ongetagd verzonden?",
          "choices": [
            "De native VLAN",
            "De management-VLAN",
            "Altijd VLAN 1 ongeacht configuratie",
            "De voice VLAN"
          ],
          "correctIndex": 0,
          "answer": "De native VLAN",
          "explanation": "De geconfigureerde native VLAN gebruikt op de trunk normaal ongetagde frames.",
          "tags": [
            "vlans",
            "multi-switched",
            "environment",
            "vlan",
            "standaard",
            "802.1q-trunk",
            "ongetagd",
            "verzonden"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m03-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.5",
          "sectionTitle": "Dynamic Trunking Protocol",
          "type": "knowledge",
          "prompt": "Welke DTP-combinatie vormt normaal geen trunk?",
          "choices": [
            "dynamic auto aan beide kanten",
            "dynamic desirable met dynamic auto",
            "trunk met trunk",
            "dynamic desirable aan beide kanten"
          ],
          "correctIndex": 0,
          "answer": "dynamic auto aan beide kanten",
          "explanation": "Geen van beide auto-poorten initieert de trunkonderhandeling.",
          "tags": [
            "vlans",
            "dynamic",
            "trunking",
            "protocol",
            "dtp-combinatie",
            "vormt",
            "normaal",
            "geen",
            "trunk"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m03-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.3",
          "sectionTitle": "VLAN Configuration",
          "type": "knowledge",
          "prompt": "Een accesspoort verwijst naar een verwijderde VLAN. Wat gebeurt er?",
          "choices": [
            "De poort wordt inactief voor die VLAN.",
            "De poort valt automatisch terug naar VLAN 1.",
            "De switch maakt de VLAN opnieuw.",
            "De poort wordt een trunk."
          ],
          "correctIndex": 0,
          "answer": "De poort wordt inactief voor die VLAN.",
          "explanation": "De poortconfiguratie blijft verwijzen naar de ontbrekende VLAN, maar kan geen verkeer doorgeven.",
          "tags": [
            "vlans",
            "vlan",
            "configuration",
            "accesspoort",
            "verwijst",
            "verwijderde",
            "vlan.",
            "gebeurt"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m03-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.2",
          "sectionTitle": "VLANs in a Multi-Switched Environment",
          "type": "knowledge",
          "prompt": "Wat controleer je eerst na een native-VLAN mismatchmelding?",
          "choices": [
            "De trunkconfiguratie aan beide linkuiteinden",
            "De DNS-configuratie van hosts",
            "De SSH RSA-sleutel",
            "De routing metric"
          ],
          "correctIndex": 0,
          "answer": "De trunkconfiguratie aan beide linkuiteinden",
          "explanation": "De native VLAN moet op beide kanten van dezelfde 802.1Q-link overeenkomen.",
          "tags": [
            "vlans",
            "multi-switched",
            "environment",
            "controleer",
            "eerst",
            "native-vlan",
            "mismatchmelding"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m03-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.4",
          "sectionTitle": "VLAN Trunks",
          "type": "diagnosis",
          "prompt": "Hosts in VLAN 20 werken op S1 en S2 lokaal, maar niet over de trunk. show interfaces trunk vermeldt VLAN 20 niet in de allowed-lijst. Wat is de oorzaak?",
          "choices": [
            "VLAN 20 is niet toegestaan op de trunk.",
            "DORA is mislukt.",
            "HSRP preempt ontbreekt.",
            "De switch gebruikt store-and-forward."
          ],
          "correctIndex": 0,
          "answer": "VLAN 20 is niet toegestaan op de trunk.",
          "explanation": "Een VLAN moet op de trunk allowed én lokaal actief zijn.",
          "tags": [
            "vlans",
            "vlan",
            "trunks",
            "hosts",
            "werken",
            "lokaal",
            "maar",
            "niet",
            "trunk.",
            "show"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m03-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.2",
          "sectionTitle": "VLANs in a Multi-Switched Environment",
          "type": "diagnosis",
          "prompt": "Twee trunkuiteinden gebruiken verschillende native VLANs en de switches geven waarschuwingen. Wat is fout?",
          "choices": [
            "De native-VLAN configuratie komt niet overeen.",
            "Beide poorten staan full duplex.",
            "De management-SVI gebruikt SSH.",
            "Er zijn te weinig MAC-entries."
          ],
          "correctIndex": 0,
          "answer": "De native-VLAN configuratie komt niet overeen.",
          "explanation": "De native VLAN hoort aan beide kanten van dezelfde 802.1Q-link identiek te zijn.",
          "tags": [
            "vlans",
            "multi-switched",
            "environment",
            "twee",
            "trunkuiteinden",
            "gebruiken",
            "verschillende",
            "native",
            "switches",
            "geven"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m03-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.1",
          "sectionTitle": "Overview of VLANs",
          "type": "flashcard",
          "front": "3.1 · Overview of VLANs",
          "back": "Een VLAN is een logisch broadcast domain. Segmentatie beperkt broadcasts, scheidt beleid en laat afdelingen onafhankelijk van fysieke switchlocatie groeperen. Typische rollen zijn data-, voice-, management-, native- en ongebruikte/parking-VLAN. VLAN 1 bestaat standaard en draagt meerdere controleprotocollen; gebruik voor beheer en ongebruikte poorten liever expliciete andere VLANs. Hosts in verschillende VLANs hebben Layer-3-routing nodig, ook wanneer ze op dezelfde fysieke switch aangesloten zijn.",
          "commands": "show vlan brief\nshow interfaces switchport",
          "verify": [
            "Elke gebruikerspoort heeft de bedoelde access-VLAN",
            "Managementverkeer gebruikt een afzonderlijke VLAN",
            "Ongebruikte poorten staan uit en in een parking-VLAN"
          ],
          "tags": [
            "vlans",
            "overview"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m03-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.2",
          "sectionTitle": "VLANs in a Multi-Switched Environment",
          "type": "flashcard",
          "front": "3.2 · VLANs in a Multi-Switched Environment",
          "back": "Een 802.1Q-trunk draagt frames van meerdere VLANs. De tag bevat onder meer een 12-bits VLAN-ID; de native VLAN wordt standaard ongetagd verzonden. Beide trunkuiteinden moeten dezelfde native VLAN en compatibele allowed-VLAN lijst hebben. Een mismatch veroorzaakt lekken, waarschuwingen of onbereikbaarheid. Voice VLAN laat een Cisco IP-phone spraakframes getagd verzenden terwijl een aangesloten pc ongetagd in de access/data-VLAN werkt. QoS-trust hoort bij een gecontroleerd ontwerp.",
          "commands": "interface g0/1\n switchport mode trunk\n switchport trunk native vlan 999\n switchport trunk allowed vlan 10,20,99,999\n switchport nonegotiate",
          "verify": [
            "show interfaces trunk",
            "show interfaces g0/1 switchport",
            "show vlan brief"
          ],
          "tags": [
            "vlans",
            "multi-switched",
            "environment"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m03-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.3",
          "sectionTitle": "VLAN Configuration",
          "type": "flashcard",
          "front": "3.3 · VLAN Configuration",
          "back": "Maak de VLAN eerst in de VLAN-database, geef een betekenisvolle naam en wijs accesspoorten expliciet toe. De configuratie van een poort kan naar een niet-bestaande VLAN verwijzen, maar de poort blijft dan inactief. Verplaats poorten gecontroleerd met interface range. Controleer na wijzigingen zowel VLAN-lidmaatschap als spanning-tree-status. Een VLAN verwijderen verwijdert niet automatisch de switchport access vlan-regel; herplaats betrokken poorten vóór verwijdering.",
          "commands": "vlan 10\n name USERS\nvlan 20\n name VOICE\nvlan 999\n name PARKING\ninterface range f0/1-12\n switchport mode access\n switchport access vlan 10",
          "verify": [
            "show vlan brief",
            "show interfaces status",
            "show spanning-tree vlan 10"
          ],
          "tags": [
            "vlans",
            "vlan",
            "configuration"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m03-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.4",
          "sectionTitle": "VLAN Trunks",
          "type": "flashcard",
          "front": "3.4 · VLAN Trunks",
          "back": "Configureer trunks statisch op infrastructuurlinks. Beperk allowed VLANs tot wat werkelijk over de link moet en gebruik een ongebruikte native VLAN aan beide kanten. Een accesspoort voegt intern VLAN-context toe; bij een trunk voegt 802.1Q voor niet-native VLANs een tag in. Aan de ontvangende accesspoort wordt de tag vóór aflevering verwijderd. Troubleshoot volgorde: fysieke link, administratieve/operationele mode, native VLAN, allowed/active VLANs, STP forwarding en MAC-learning.",
          "commands": "show interfaces trunk\nshow interfaces g0/1 switchport\nshow spanning-tree interface g0/1",
          "verify": [
            "Status trunking",
            "Encapsulation dot1q",
            "Native VLAN gelijk",
            "Benodigde VLANs allowed én active"
          ],
          "tags": [
            "vlans",
            "vlan",
            "trunks"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m03-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 3,
          "moduleTitle": "VLANs",
          "sectionId": "3.5",
          "sectionTitle": "Dynamic Trunking Protocol",
          "type": "flashcard",
          "front": "3.5 · Dynamic Trunking Protocol",
          "back": "DTP is Cisco-eigen en onderhandelt access of trunk. Dynamic desirable initieert actief; dynamic auto wacht. Auto–auto vormt geen trunk; desirable–auto doorgaans wel. Voor voorspelbaarheid en veiligheid: accesspoorten switchport mode access; trunks switchport mode trunk en waar ondersteund switchport nonegotiate. DTP is niet hetzelfde als VTP: DTP onderhandelt linkmodus, VTP verspreidt VLAN-database-informatie.",
          "commands": "interface g0/1\n switchport mode trunk\n switchport nonegotiate\ninterface range f0/1-24\n switchport mode access",
          "verify": [
            "show dtp interface g0/1",
            "show interfaces trunk",
            "Geen onverwachte dynamische trunk"
          ],
          "tags": [
            "vlans",
            "dynamic",
            "trunking",
            "protocol"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 4,
      "title": "Inter-VLAN Routing",
      "summary": "Routeer verkeer tussen VLANs via legacy fysieke interfaces, router-on-a-stick of SVIs op een multilayer switch en los fouten systematisch op.",
      "filename": "modules/module-04.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 4,
        "total": 10
      },
      "cards": [
        {
          "id": "ccna2-m04-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.2",
          "sectionTitle": "Router-on-a-Stick Inter-VLAN Routing",
          "type": "knowledge",
          "prompt": "Waar wordt bij router-on-a-stick de VLAN-ID aan een Layer-3-interface gekoppeld?",
          "choices": [
            "Met encapsulation dot1q op de router-subinterface",
            "Met switchport access vlan op het fysieke routerinterface",
            "Met ip default-gateway op de switch",
            "Met spanning-tree vlan op de host"
          ],
          "correctIndex": 0,
          "answer": "Met encapsulation dot1q op de router-subinterface",
          "explanation": "Elke subinterface verwerkt de 802.1Q-frames van de opgegeven VLAN.",
          "tags": [
            "inter-vlan",
            "routing",
            "router-on-a-stick",
            "waar",
            "vlan-id",
            "layer-3-interface",
            "gekoppeld"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m04-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.3",
          "sectionTitle": "Inter-VLAN Routing using Layer 3 Switches",
          "type": "knowledge",
          "prompt": "Welke globale opdracht laat een multilayer switch tussen SVIs route­ren?",
          "choices": [
            "ip routing",
            "switchport mode trunk",
            "ip default-gateway",
            "router rip"
          ],
          "correctIndex": 0,
          "answer": "ip routing",
          "explanation": "ip routing activeert IPv4-forwarding op het Layer-3-switchplatform.",
          "tags": [
            "inter-vlan",
            "routing",
            "using",
            "layer",
            "switches",
            "globale",
            "opdracht",
            "laat",
            "multilayer",
            "switch"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m04-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.3",
          "sectionTitle": "Inter-VLAN Routing using Layer 3 Switches",
          "type": "knowledge",
          "prompt": "Een SVI is down/down. Welke oorzaak is waarschijnlijk?",
          "choices": [
            "De VLAN bestaat niet of heeft geen actieve Layer-2-poort.",
            "De router heeft te veel routes.",
            "SSH versie 2 ontbreekt.",
            "De host gebruikt DHCP."
          ],
          "correctIndex": 0,
          "answer": "De VLAN bestaat niet of heeft geen actieve Layer-2-poort.",
          "explanation": "De SVI-line protocol-status is gekoppeld aan de operationele VLAN.",
          "tags": [
            "inter-vlan",
            "routing",
            "using",
            "layer",
            "switches",
            "svi",
            "down/down.",
            "oorzaak",
            "waarschijnlijk"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m04-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.4",
          "sectionTitle": "Troubleshoot Inter-VLAN Routing",
          "type": "knowledge",
          "prompt": "Wat is de eerste gerichte ping bij een inter-VLAN storing?",
          "choices": [
            "Van de host naar zijn eigen default gateway",
            "Direct naar een internetadres",
            "Naar de DNS-servernaam",
            "Naar de switchconsole"
          ],
          "correctIndex": 0,
          "answer": "Van de host naar zijn eigen default gateway",
          "explanation": "Hiermee toets je lokale adressering, VLAN-pad en gatewayinterface vóór verdere routing.",
          "tags": [
            "inter-vlan",
            "routing",
            "troubleshoot",
            "eerste",
            "gerichte",
            "ping",
            "storing"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m04-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.2",
          "sectionTitle": "Router-on-a-Stick Inter-VLAN Routing",
          "type": "diagnosis",
          "prompt": "Bij router-on-a-stick zijn alle subinterfaces correct, maar ze blijven down omdat G0/0/0 administratively down is. Wat blokkeert routing?",
          "choices": [
            "Het fysieke parent-interface heeft shutdown.",
            "De router mist een DNS-server.",
            "De accesspoorten gebruiken PortFast.",
            "De switch heeft een MAC-tabel."
          ],
          "correctIndex": 0,
          "answer": "Het fysieke parent-interface heeft shutdown.",
          "explanation": "Alle subinterfaces zijn afhankelijk van een actief fysiek parent-interface.",
          "tags": [
            "inter-vlan",
            "routing",
            "router-on-a-stick",
            "alle",
            "subinterfaces",
            "correct",
            "maar",
            "blijven",
            "down",
            "omdat"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m04-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.3",
          "sectionTitle": "Inter-VLAN Routing using Layer 3 Switches",
          "type": "diagnosis",
          "prompt": "Twee SVIs zijn up/up op een multilayer switch en hosts bereiken hun eigen gateway, maar niet de andere VLAN. Welke globale instelling ontbreekt waarschijnlijk?",
          "choices": [
            "ip routing",
            "ip default-gateway",
            "switchport nonegotiate",
            "service password-encryption"
          ],
          "correctIndex": 0,
          "answer": "ip routing",
          "explanation": "Een multilayer switch routeert pas tussen SVIs wanneer IPv4-routing actief is.",
          "tags": [
            "inter-vlan",
            "routing",
            "using",
            "layer",
            "switches",
            "twee",
            "svis",
            "up/up",
            "multilayer",
            "switch"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m04-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.1",
          "sectionTitle": "Inter-VLAN Routing Operation",
          "type": "flashcard",
          "front": "4.1 · Inter-VLAN Routing Operation",
          "back": "Inter-VLAN verkeer verlaat het bronbroadcastdomein via een default gateway. De router verwijdert het inkomende Layer-2-frame, neemt een routebeslissing en bouwt een nieuw frame voor de doel-VLAN. Legacy routing gebruikt één fysieke routerinterface per VLAN en schaalt slecht. Router-on-a-stick gebruikt subinterfaces op één trunk. Een multilayer switch gebruikt SVIs en hardwarematige routing. De hostgateway is het router- of SVI-adres in hetzelfde subnet als de host; niet het managementadres van een Layer-2-switch.",
          "commands": "show ip route\nshow arp\ntraceroute 192.0.2.20",
          "verify": [
            "Bronhost bereikt zijn gateway",
            "Router heeft connected routes voor beide VLANs",
            "Doelhost heeft juiste retourgateway"
          ],
          "tags": [
            "inter-vlan",
            "routing",
            "operation"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m04-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.2",
          "sectionTitle": "Router-on-a-Stick Inter-VLAN Routing",
          "type": "flashcard",
          "front": "4.2 · Router-on-a-Stick Inter-VLAN Routing",
          "back": "Maak één router-subinterface per VLAN. encapsulation dot1q koppelt de subinterface aan de VLAN-ID; een optioneel native-argument moet bij de switch-native VLAN passen. Het fysieke routerinterface krijgt geen IP-adres, maar moet no shutdown zijn. De switchlink naar de router is een statische trunk. Alle inter-VLAN traffic deelt dezelfde fysieke link; capaciteit en single point of failure zijn ontwerpbeperkingen.",
          "commands": "interface g0/0/0\n no ip address\n no shutdown\ninterface g0/0/0.10\n encapsulation dot1q 10\n ip address 192.0.2.1 255.255.255.0\ninterface g0/0/0.20\n encapsulation dot1q 20\n ip address 198.51.100.1 255.255.255.0",
          "verify": [
            "show ip interface brief",
            "show interfaces g0/0/0.10",
            "show interfaces trunk",
            "show ip route connected"
          ],
          "tags": [
            "inter-vlan",
            "routing",
            "router-on-a-stick"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m04-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.3",
          "sectionTitle": "Inter-VLAN Routing using Layer 3 Switches",
          "type": "flashcard",
          "front": "4.3 · Inter-VLAN Routing using Layer 3 Switches",
          "back": "Een multilayer switch routeert tussen SVIs wanneer ip routing actief is. Elke VLAN heeft een up/up SVI met een gatewayadres nodig. Een fysieke uplink kan met no switchport een routed port worden. Zo’n poort behoort niet aan een VLAN en krijgt rechtstreeks een IP-adres. Voor externe bestemmingen is een default of dynamische route nodig; Layer-2 accessswitches blijven een default gateway gebruiken voor eigen beheer.",
          "commands": "ip routing\ninterface vlan 10\n ip address 192.0.2.1 255.255.255.0\n no shutdown\ninterface vlan 20\n ip address 198.51.100.1 255.255.255.0\n no shutdown\ninterface g1/0/24\n no switchport\n ip address 203.0.113.2 255.255.255.252",
          "verify": [
            "show ip route",
            "show interfaces status",
            "show ip interface brief",
            "ping tussen VLAN-hosts"
          ],
          "tags": [
            "inter-vlan",
            "routing",
            "using",
            "layer",
            "switches"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m04-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 4,
          "moduleTitle": "Inter-VLAN Routing",
          "sectionId": "4.4",
          "sectionTitle": "Troubleshoot Inter-VLAN Routing",
          "type": "flashcard",
          "front": "4.4 · Troubleshoot Inter-VLAN Routing",
          "back": "Werk laag voor laag: kabel en interface, VLAN-bestaan en accesslidmaatschap, trunk/native/allowed, subinterface-encapsulation of SVI-status, IP/mask/gateway en tenslotte routes/ACL’s. Een SVI is vaak down omdat de VLAN ontbreekt of geen enkele Layer-2-poort in die VLAN up en forwarding is. Een router-subinterface kan up/up lijken terwijl de VLAN-ID verkeerd is. Test gericht: host→eigen gateway, router→host in elke VLAN, daarna end-to-end. Controleer ARP/MAC-tabellen om de breukzijde te bepalen.",
          "commands": "show vlan brief\nshow interfaces trunk\nshow interfaces switchport\nshow ip interface brief\nshow ip route\nshow arp\nshow mac address-table",
          "verify": [
            "Elke fout is gekoppeld aan één laag en één link",
            "Na herstel bestaan retourroute en ARP-resolutie",
            "Geen native/allowed mismatch"
          ],
          "tags": [
            "inter-vlan",
            "routing",
            "troubleshoot"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 5,
      "title": "STP Concepts",
      "summary": "Voorkom Layer-2-lussen met STP/RSTP, voorspel root- en poortselectie en stuur het spanning-tree-pad bewust.",
      "filename": "modules/module-05.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 9
      },
      "cards": [
        {
          "id": "ccna2-m05-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.2",
          "sectionTitle": "STP Operations",
          "type": "knowledge",
          "prompt": "Welke switch wordt STP-root?",
          "choices": [
            "De switch met de laagste Bridge ID",
            "De switch met de meeste poorten",
            "De switch met de hoogste MAC",
            "De default gateway"
          ],
          "correctIndex": 0,
          "answer": "De switch met de laagste Bridge ID",
          "explanation": "Priority en daarna MAC vormen de verkiezingsbasis.",
          "tags": [
            "stp",
            "concepts",
            "operations",
            "switch",
            "stp-root"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m05-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.2",
          "sectionTitle": "STP Operations",
          "type": "knowledge",
          "prompt": "Welke poort kiest een niet-root switch als root port?",
          "choices": [
            "Het pad met de laagste totale root path cost",
            "De poort met hoogste poortnummer",
            "Elke trunkpoort",
            "De poort met de meeste VLANs"
          ],
          "correctIndex": 0,
          "answer": "Het pad met de laagste totale root path cost",
          "explanation": "STP vergelijkt eerst de gecumuleerde kosten naar de root.",
          "tags": [
            "stp",
            "concepts",
            "operations",
            "poort",
            "kiest",
            "niet-root",
            "switch",
            "root",
            "port"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m05-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.3",
          "sectionTitle": "Evolution of STP",
          "type": "knowledge",
          "prompt": "Wat doet BPDU Guard bij een BPDU op een beschermde edgepoort?",
          "choices": [
            "De poort err-disable zetten",
            "De switch root maken",
            "De VLAN verwijderen",
            "De BPDU flooden naar hosts"
          ],
          "correctIndex": 0,
          "answer": "De poort err-disable zetten",
          "explanation": "Dit voorkomt dat een onverwachte bridge via een edgepoort de topologie beïnvloedt.",
          "tags": [
            "stp",
            "concepts",
            "evolution",
            "doet",
            "bpdu",
            "guard",
            "beschermde",
            "edgepoort"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m05-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.2",
          "sectionTitle": "STP Operations",
          "type": "knowledge",
          "prompt": "Welke RSTP-status stuurt gebruikersframes door?",
          "choices": [
            "Forwarding",
            "Discarding",
            "Learning",
            "Listening"
          ],
          "correctIndex": 0,
          "answer": "Forwarding",
          "explanation": "Alleen forwarding leert én stuurt normale frames door; learning stuurt ze nog niet door.",
          "tags": [
            "stp",
            "concepts",
            "operations",
            "rstp-status",
            "stuurt",
            "gebruikersframes"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m05-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.2",
          "sectionTitle": "STP Operations",
          "type": "diagnosis",
          "prompt": "In een switchdriehoek stuurt één redundante link geen gebruikersframes maar ontvangt wel BPDUs. Welke STP-rol verklaart dit?",
          "choices": [
            "Alternate/discarding.",
            "Root/forwarding op de root bridge.",
            "PortFast edge forwarding.",
            "Disabled door shutdown."
          ],
          "correctIndex": 0,
          "answer": "Alternate/discarding.",
          "explanation": "Een alternate poort bewaart een reservepad en verwerkt BPDUs zonder normale data te forwarden.",
          "tags": [
            "stp",
            "concepts",
            "operations",
            "switchdriehoek",
            "stuurt",
            "redundante",
            "link",
            "geen",
            "gebruikersframes",
            "maar"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m05-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.3",
          "sectionTitle": "Evolution of STP",
          "type": "diagnosis",
          "prompt": "Een gebruiker sluit een kleine switch aan op een PortFast-poort en die poort gaat direct err-disabled. Welke beveiliging reageerde?",
          "choices": [
            "BPDU Guard.",
            "DHCP relay.",
            "HSRP tracking.",
            "DAI trust."
          ],
          "correctIndex": 0,
          "answer": "BPDU Guard.",
          "explanation": "BPDU Guard blokkeert een edgepoort wanneer daar onverwacht een BPDU verschijnt.",
          "tags": [
            "stp",
            "concepts",
            "evolution",
            "gebruiker",
            "sluit",
            "kleine",
            "switch",
            "portfast-poort",
            "die",
            "poort"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m05-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.1",
          "sectionTitle": "Purpose of STP",
          "type": "flashcard",
          "front": "5.1 · Purpose of STP",
          "back": "Redundante Layer-2-links verbeteren beschikbaarheid maar veroorzaken zonder luspreventie broadcast storms, MAC-table instability en meerdere kopieën van hetzelfde frame. Ethernet heeft geen TTL die een lus vanzelf stopt. STP bouwt een logisch lusvrije boom door overtollige paden te blokkeren en kan een geblokkeerd pad activeren wanneer het actieve pad faalt. BPDUs dragen bridge- en padinformatie. Switches blijven BPDUs verwerken op geblokkeerde/alternate poorten; blokkeren betekent geen normale dataforwarding, niet dat de poort fysiek uit staat.",
          "commands": "show spanning-tree\nshow spanning-tree vlan 10",
          "verify": [
            "Eén root bridge per VLAN/instance",
            "Redundante topologie heeft een alternate/blocking pad",
            "Geen onverwachte topology changes"
          ],
          "tags": [
            "stp",
            "concepts",
            "purpose"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m05-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.2",
          "sectionTitle": "STP Operations",
          "type": "flashcard",
          "front": "5.2 · STP Operations",
          "back": "De laagste Bridge ID wint root: eerst priority (met extended system ID/VLAN), daarna MAC-adres. Alle poorten op de root bridge zijn designated en forwarding. Elke niet-root switch kiest één root port met het laagste totale root path cost. Op elk segment wint één designated port; overige redundante poorten worden non-designated of alternate. Bij gelijke kosten beslissen achtereenvolgens lagere upstream bridge ID, lagere upstream port priority en lager port ID. Kosten zijn gebaseerd op linkbandbreedte. Klassiek 802.1D gebruikt blocking, listening, learning en forwarding; RSTP vereenvoudigt tot discarding, learning en forwarding en convergeert sneller met proposal/agreement.",
          "commands": "show spanning-tree vlan 10 detail\nshow spanning-tree interface g0/1 detail",
          "verify": [
            "Root ID en local Bridge ID correct gelezen",
            "Root port wijst naar laagste-cost pad",
            "Port roles passen bij het diagram"
          ],
          "tags": [
            "stp",
            "concepts",
            "operations"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m05-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 5,
          "moduleTitle": "STP Concepts",
          "sectionId": "5.3",
          "sectionTitle": "Evolution of STP",
          "type": "flashcard",
          "front": "5.3 · Evolution of STP",
          "back": "PVST+ draait een 802.1D-instance per VLAN; Rapid PVST+ gebruikt 802.1w-gedrag per VLAN. MST bundelt meerdere VLANs in een kleiner aantal instances. PortFast laat een edge/accesspoort direct forwarding worden, maar schakelt STP niet uit. Gebruik het alleen richting eindapparaten. BPDU Guard zet een PortFast-poort err-disabled zodra een BPDU binnenkomt en beschermt tegen een ongewenste switch. Root Guard en Loop Guard beschermen andere specifieke invarianten.",
          "commands": "spanning-tree mode rapid-pvst\nspanning-tree vlan 10 root primary\ninterface range f0/1-20\n spanning-tree portfast\n spanning-tree bpduguard enable",
          "verify": [
            "show spanning-tree summary",
            "show spanning-tree inconsistentports",
            "show errdisable recovery"
          ],
          "tags": [
            "stp",
            "concepts",
            "evolution"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 6,
      "title": "EtherChannel",
      "summary": "Bundel compatibele fysieke links tot één logische Port-Channel met LACP, PAgP of statische mode en diagnoseer bundelproblemen.",
      "filename": "modules/module-06.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 9
      },
      "cards": [
        {
          "id": "ccna2-m06-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.2",
          "sectionTitle": "Configure EtherChannel",
          "type": "knowledge",
          "prompt": "Welke LACP-combinatie vormt geen kanaal?",
          "choices": [
            "passive–passive",
            "active–passive",
            "active–active",
            "active met een correct LACP-peer"
          ],
          "correctIndex": 0,
          "answer": "passive–passive",
          "explanation": "Ten minste één zijde moet actief LACP-berichten initiëren.",
          "tags": [
            "etherchannel",
            "configure",
            "lacp-combinatie",
            "vormt",
            "geen",
            "kanaal"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m06-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.1",
          "sectionTitle": "EtherChannel Operation",
          "type": "knowledge",
          "prompt": "Hoe ziet STP een Layer-2 EtherChannel?",
          "choices": [
            "Als één logische poort",
            "Als afzonderlijke onafhankelijke lussen",
            "Als een routerinterface",
            "Als één VLAN"
          ],
          "correctIndex": 0,
          "answer": "Als één logische poort",
          "explanation": "De Port-Channel is de STP-interface.",
          "tags": [
            "etherchannel",
            "operation",
            "ziet",
            "stp",
            "layer-2"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m06-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.2",
          "sectionTitle": "Configure EtherChannel",
          "type": "knowledge",
          "prompt": "Welke eigenschap moet tussen members overeenkomen?",
          "choices": [
            "Trunk/access-parameters",
            "Lokale channel-group-ID op beide switches",
            "Interfacebeschrijving",
            "MAC-adres"
          ],
          "correctIndex": 0,
          "answer": "Trunk/access-parameters",
          "explanation": "Incompatibele Layer-2-parameters verhinderen bundeling; lokale groepsnummers mogen verschillen.",
          "tags": [
            "etherchannel",
            "configure",
            "eigenschap",
            "moet",
            "members",
            "overeenkomen"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m06-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.3",
          "sectionTitle": "Verify and Troubleshoot EtherChannel",
          "type": "knowledge",
          "prompt": "Wat betekent membervlag P gewoonlijk in show etherchannel summary?",
          "choices": [
            "De poort is in de bundle",
            "De poort is passive",
            "De poort is geparkeerd",
            "PAgP is verplicht"
          ],
          "correctIndex": 0,
          "answer": "De poort is in de bundle",
          "explanation": "P staat voor bundled in port-channel.",
          "tags": [
            "etherchannel",
            "verify",
            "and",
            "troubleshoot",
            "betekent",
            "membervlag",
            "gewoonlijk",
            "show",
            "summary"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m06-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.2",
          "sectionTitle": "Configure EtherChannel",
          "type": "diagnosis",
          "prompt": "Twee links staan aan beide zijden in LACP passive. De Port-Channel komt niet up. Waarom?",
          "choices": [
            "Geen zijde initieert LACP.",
            "De channel-groupnummers verschillen lokaal.",
            "STP ziet één logische poort.",
            "Beide links zijn full duplex."
          ],
          "correctIndex": 0,
          "answer": "Geen zijde initieert LACP.",
          "explanation": "Minstens één zijde moet LACP active gebruiken.",
          "tags": [
            "etherchannel",
            "configure",
            "twee",
            "links",
            "staan",
            "beide",
            "zijden",
            "lacp",
            "passive.",
            "port-channel"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m06-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.3",
          "sectionTitle": "Verify and Troubleshoot EtherChannel",
          "type": "diagnosis",
          "prompt": "Eén EtherChannel-member staat suspended. De allowed-VLAN lijst verschilt van de andere member. Wat is de oorzaak?",
          "choices": [
            "Incompatibele Layer-2-parameters.",
            "Een te hoge HSRP-priority.",
            "Een ontbrekende DHCP-pool.",
            "Een DNS-timeout."
          ],
          "correctIndex": 0,
          "answer": "Incompatibele Layer-2-parameters.",
          "explanation": "Members moeten dezelfde trunk/access-eigenschappen hebben.",
          "tags": [
            "etherchannel",
            "verify",
            "and",
            "troubleshoot",
            "etherchannel-member",
            "staat",
            "suspended.",
            "allowed-vlan",
            "lijst",
            "verschilt"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m06-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.1",
          "sectionTitle": "EtherChannel Operation",
          "type": "flashcard",
          "front": "6.1 · EtherChannel Operation",
          "back": "EtherChannel combineert meerdere gelijksoortige links in één logische interface. STP ziet de Port-Channel als één link, waardoor alle gebundelde capaciteit bruikbaar kan zijn zonder parallelle STP-blokkering. Load balancing kiest per flow een member op basis van een hash, bijvoorbeeld bron-/bestemmings-MAC of IP. Eén flow wordt normaal niet over alle links gespreid; de totale bundel profiteert van meerdere flows. LACP is IEEE 802.1AX/802.3ad-gebaseerd met active/passive. PAgP is Cisco-eigen met desirable/auto. Statische on-mode onderhandelt niet en vereist een foutloze configuratie aan beide zijden.",
          "commands": "show etherchannel summary\nshow etherchannel load-balance",
          "verify": [
            "Protocol LACP/PAgP zoals ontworpen",
            "Port-Channel is up",
            "Members tonen gebundelde status P"
          ],
          "tags": [
            "etherchannel",
            "operation"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m06-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.2",
          "sectionTitle": "Configure EtherChannel",
          "type": "flashcard",
          "front": "6.2 · Configure EtherChannel",
          "back": "Memberpoorten moeten compatibel zijn: snelheid, duplex, switchportmode, access-VLAN of trunk-native/allowed VLANs. Configureer consistente kenmerken bij voorkeur op interface range vóór channel-group. LACP active initieert; passive reageert. Active–active en active–passive werken, passive–passive niet. PAgP desirable–auto of desirable–desirable werkt; auto–auto niet. Configureer gemeenschappelijke Layer-2-eigenschappen ook op interface port-channel zodat de logische interface de bedoeling vastlegt.",
          "commands": "interface range g0/1-2\n switchport mode trunk\n switchport trunk allowed vlan 10,20,99\n channel-group 1 mode active\n no shutdown\ninterface port-channel 1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,99",
          "verify": [
            "show interfaces port-channel 1",
            "show interfaces trunk",
            "show lacp neighbor"
          ],
          "tags": [
            "etherchannel",
            "configure"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m06-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 6,
          "moduleTitle": "EtherChannel",
          "sectionId": "6.3",
          "sectionTitle": "Verify and Troubleshoot EtherChannel",
          "type": "flashcard",
          "front": "6.3 · Verify and Troubleshoot EtherChannel",
          "back": "In show etherchannel summary betekent SU doorgaans Layer 2 en in use; membervlag P betekent bundled. Suspended of stand-alone wijst op protocol- of parameterconflict. Vergelijk beide uiteinden: channel-groupnummer hoeft lokaal niet gelijk te zijn, maar protocol/modes moeten compatibel zijn en alle poortkenmerken moeten overeenkomen. Pas structurele wijzigingen op de Port-Channel toe en verifieer daarna de members. Verwijder en herbouw alleen gecontroleerd wanneer configs inconsistent zijn.",
          "commands": "show etherchannel summary\nshow etherchannel port-channel\nshow interfaces g0/1 etherchannel\nshow lacp neighbor\nshow running-config interface port-channel 1",
          "verify": [
            "Alle bedoelde members P",
            "Geen suspended links",
            "Trunkdetails aan beide kanten gelijk",
            "STP toont Po1, niet elk member als apart pad"
          ],
          "tags": [
            "etherchannel",
            "verify",
            "and",
            "troubleshoot"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 7,
      "title": "DHCPv4",
      "summary": "Automatiseer IPv4-configuratie met DORA, IOS DHCP-pools, relay agents en clientconfiguratie.",
      "filename": "modules/module-07.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 3,
        "total": 9
      },
      "cards": [
        {
          "id": "ccna2-m07-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.1",
          "sectionTitle": "DHCPv4 Concepts",
          "type": "knowledge",
          "prompt": "Wat is de juiste DORA-volgorde?",
          "choices": [
            "Discover, Offer, Request, Acknowledge",
            "Discover, Request, Offer, Acknowledge",
            "Offer, Discover, Acknowledge, Request",
            "Request, Offer, Discover, Acknowledge"
          ],
          "correctIndex": 0,
          "answer": "Discover, Offer, Request, Acknowledge",
          "explanation": "De client ontdekt, server biedt, client vraagt en server bevestigt.",
          "tags": [
            "dhcpv4",
            "concepts",
            "juiste",
            "dora-volgorde"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m07-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.3",
          "sectionTitle": "Configure a DHCPv4 Client",
          "type": "knowledge",
          "prompt": "Waar configureer je ip helper-address?",
          "choices": [
            "Op de routerinterface die clientbroadcasts ontvangt",
            "Op elke client",
            "Alleen op de DHCP-serverinterface",
            "Op de switchconsole"
          ],
          "correctIndex": 0,
          "answer": "Op de routerinterface die clientbroadcasts ontvangt",
          "explanation": "De relay onderschept de broadcast op het clientsubnet.",
          "tags": [
            "dhcpv4",
            "configure",
            "client",
            "waar",
            "configureer",
            "helper-address"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m07-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.1",
          "sectionTitle": "DHCPv4 Concepts",
          "type": "knowledge",
          "prompt": "Welke DHCP-optie levert normaal de default gateway?",
          "choices": [
            "Option 3",
            "Option 6",
            "Option 53",
            "Option 82"
          ],
          "correctIndex": 0,
          "answer": "Option 3",
          "explanation": "Option 3 is de routeroptie; option 6 is DNS.",
          "tags": [
            "dhcpv4",
            "concepts",
            "dhcp-optie",
            "levert",
            "normaal",
            "default",
            "gateway"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m07-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.2",
          "sectionTitle": "Configure a Cisco IOS DHCPv4 Server",
          "type": "knowledge",
          "prompt": "Welke opdracht voorkomt dat een gatewayadres wordt uitgedeeld?",
          "choices": [
            "ip dhcp excluded-address",
            "deny dhcp any",
            "no service dhcp pool",
            "ip helper-address"
          ],
          "correctIndex": 0,
          "answer": "ip dhcp excluded-address",
          "explanation": "Excluded ranges worden buiten de dynamische allocatie gehouden.",
          "tags": [
            "dhcpv4",
            "configure",
            "cisco",
            "ios",
            "server",
            "opdracht",
            "voorkomt",
            "gatewayadres",
            "uitgedeeld"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m07-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.1",
          "sectionTitle": "DHCPv4 Concepts",
          "type": "diagnosis",
          "prompt": "Clients in een remote subnet sturen DHCPDISCOVER, maar de server in een ander subnet ziet niets. De router routeert gewone unicast wel. Wat ontbreekt?",
          "choices": [
            "ip helper-address op het client-facing interface.",
            "Een static host route op de client.",
            "BPDU Guard op de uplink.",
            "Een native voice VLAN."
          ],
          "correctIndex": 0,
          "answer": "ip helper-address op het client-facing interface.",
          "explanation": "Routers forwarden de clientbroadcast niet zonder DHCP relay.",
          "tags": [
            "dhcpv4",
            "concepts",
            "clients",
            "remote",
            "subnet",
            "sturen",
            "dhcpdiscover",
            "maar",
            "server",
            "ander"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m07-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.2",
          "sectionTitle": "Configure a Cisco IOS DHCPv4 Server",
          "type": "diagnosis",
          "prompt": "Een client krijgt soms het IP-adres van de default gateway uit de IOS DHCP-pool. Wat is verkeerd geconfigureerd?",
          "choices": [
            "Het gatewayadres is niet uitgesloten.",
            "De lease is te lang.",
            "De switch gebruikt Rapid PVST+.",
            "De router heeft SSHv2."
          ],
          "correctIndex": 0,
          "answer": "Het gatewayadres is niet uitgesloten.",
          "explanation": "Statische infrastructuuradressen horen in ip dhcp excluded-address.",
          "tags": [
            "dhcpv4",
            "configure",
            "cisco",
            "ios",
            "server",
            "client",
            "krijgt",
            "soms",
            "ip-adres",
            "default"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m07-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.1",
          "sectionTitle": "DHCPv4 Concepts",
          "type": "flashcard",
          "front": "7.1 · DHCPv4 Concepts",
          "back": "Een nieuwe client gebruikt DORA: DHCPDISCOVER, DHCPOFFER, DHCPREQUEST en DHCPACK. Omdat de client aanvankelijk geen bruikbaar adres of serveradres kent, begint de uitwisseling met broadcasts. Een lease bevat minimaal adres en masker en vaak default gateway (option 3), DNS (option 6) en leasetijd. Een client probeert rond T1 de lease unicast te vernieuwen en later via rebinding breder te zoeken. Routers sturen broadcasts niet standaard door. ip helper-address op de client-LAN-interface zet relevante UDP-broadcasts om naar unicast richting een server in een ander subnet.",
          "commands": "show ip dhcp binding\nshow ip dhcp pool\nshow ip dhcp server statistics",
          "verify": [
            "Lease komt uit het juiste subnet",
            "Gateway en DNS kloppen",
            "Geen overlap met statische adressen"
          ],
          "tags": [
            "dhcpv4",
            "concepts"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m07-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.2",
          "sectionTitle": "Configure a Cisco IOS DHCPv4 Server",
          "type": "flashcard",
          "front": "7.2 · Configure a Cisco IOS DHCPv4 Server",
          "back": "Sluit infrastructuuradressen uit vóór poolallocatie. De network-regel definieert het uitdeelnetwerk; default-router moet een bereikbaar adres in dat subnet zijn. IOS kiest de pool op basis van de ontvangende interface of het relay-informatieveld (giaddr). Eén router kan meerdere pools voor verschillende LANs hosten. Controleer bindings én poolgebruik. Een lege pool, verkeerde mask of ontbrekende route naar het clientnetwerk kan de uitgifte stoppen.",
          "commands": "ip dhcp excluded-address 192.0.2.1 192.0.2.20\nip dhcp pool USERS\n network 192.0.2.0 255.255.255.0\n default-router 192.0.2.1\n dns-server 203.0.113.53\n domain-name lab.example\n lease 7",
          "verify": [
            "show ip dhcp pool",
            "show ip dhcp binding",
            "show running-config | section dhcp"
          ],
          "tags": [
            "dhcpv4",
            "configure",
            "cisco",
            "ios",
            "server"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m07-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 7,
          "moduleTitle": "DHCPv4",
          "sectionId": "7.3",
          "sectionTitle": "Configure a DHCPv4 Client",
          "type": "flashcard",
          "front": "7.3 · Configure a DHCPv4 Client",
          "back": "Een IOS-interface kan zelf client zijn met ip address dhcp, bijvoorbeeld een kleine kantoorrouter aan een providerzijde. Een relay hoort op de interface die de clientbroadcast ontvangt, niet op de server-facing interface. Het helper-adres is het unicastadres van de DHCP-server. Bij troubleshooting volg je het proces: ziet de client link, verlaat DISCOVER de VLAN, ontvangt relay/server het verzoek, bestaat een passende pool en keert OFFER/ACK via het retourpad terug?",
          "commands": "interface g0/0/0\n ip address dhcp\n no shutdown\n! Relay op client-LAN\ninterface g0/0/1\n ip helper-address 203.0.113.10",
          "verify": [
            "show ip interface brief",
            "show dhcp lease",
            "debug ip dhcp server events (alleen gecontroleerd in lab)"
          ],
          "tags": [
            "dhcpv4",
            "configure",
            "client"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 8,
      "title": "SLAAC and DHCPv6",
      "summary": "Ken IPv6-GUA-toewijzing via SLAAC, stateless/stateful DHCPv6 en relay en lees de RA M- en O-flags correct.",
      "filename": "modules/module-08.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 6,
        "total": 12
      },
      "cards": [
        {
          "id": "ccna2-m08-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.3",
          "sectionTitle": "DHCPv6",
          "type": "knowledge",
          "prompt": "Waar leert een IPv6-host zijn default gateway?",
          "choices": [
            "Uit een Router Advertisement",
            "Uit de DHCPv6 address prefix",
            "Uit DNS",
            "Uit Duplicate Address Detection"
          ],
          "correctIndex": 0,
          "answer": "Uit een Router Advertisement",
          "explanation": "RA’s kondigen de default router aan, ook bij stateful DHCPv6.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "waar",
            "leert",
            "ipv6-host",
            "default",
            "gateway"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m08-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.3",
          "sectionTitle": "DHCPv6",
          "type": "knowledge",
          "prompt": "Welke RA-flags passen bij stateless DHCPv6?",
          "choices": [
            "M=0, O=1",
            "M=1, O=0",
            "M=0, O=0 met uitsluitend stateful adressen",
            "M=1, O=1 is verplicht"
          ],
          "correctIndex": 0,
          "answer": "M=0, O=1",
          "explanation": "SLAAC verzorgt het adres; O vraagt aanvullende DHCPv6-opties.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "ra-flags",
            "passen",
            "stateless"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m08-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.3",
          "sectionTitle": "DHCPv6",
          "type": "knowledge",
          "prompt": "Welke UDP-poort gebruikt een DHCPv6-client?",
          "choices": [
            "546",
            "547",
            "67",
            "68"
          ],
          "correctIndex": 0,
          "answer": "546",
          "explanation": "Client 546, server/relay 547.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "udp-poort",
            "gebruikt",
            "dhcpv6-client"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m08-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.2",
          "sectionTitle": "SLAAC",
          "type": "knowledge",
          "prompt": "Wat houdt een SLAAC-router niet bij?",
          "choices": [
            "Een centrale leasebinding voor elk toegekend adres",
            "De lokale prefix",
            "NDP-neighbors",
            "RA-instellingen"
          ],
          "correctIndex": 0,
          "answer": "Een centrale leasebinding voor elk toegekend adres",
          "explanation": "De host vormt zelf het adres; er is geen DHCP-leaseadministratie.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "houdt",
            "slaac-router",
            "niet"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m08-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.3",
          "sectionTitle": "DHCPv6",
          "type": "diagnosis",
          "prompt": "Een stateful DHCPv6-client krijgt een GUA en DNS, maar geen default route omdat RA’s onderdrukt zijn. Wat is de oorzaak?",
          "choices": [
            "DHCPv6 levert geen default gateway; RA ontbreekt.",
            "De client gebruikt UDP 546.",
            "De prefix is /64.",
            "DAD controleert het adres."
          ],
          "correctIndex": 0,
          "answer": "DHCPv6 levert geen default gateway; RA ontbreekt.",
          "explanation": "Ook bij stateful DHCPv6 komt de default router uit een Router Advertisement.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "stateful",
            "dhcpv6-client",
            "krijgt",
            "gua",
            "dns",
            "maar",
            "geen"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m08-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.4",
          "sectionTitle": "Configure Stateless DHCPv6 Server",
          "type": "diagnosis",
          "prompt": "Een client vormt via SLAAC een adres maar ontvangt geen DNS-optie uit DHCPv6. De RA heeft M=0 en O=0. Welke flag ontbreekt?",
          "choices": [
            "De O-flag moet 1 zijn.",
            "De M-flag moet altijd 1 zijn.",
            "De A-flag moet 0 zijn.",
            "De HSRP-flag ontbreekt."
          ],
          "correctIndex": 0,
          "answer": "De O-flag moet 1 zijn.",
          "explanation": "Stateless DHCPv6 gebruikt O=1 om aanvullende informatie aan te vragen.",
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "configure",
            "stateless",
            "server",
            "client",
            "vormt",
            "via",
            "adres"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m08-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.1",
          "sectionTitle": "IPv6 GUA Assignment",
          "type": "flashcard",
          "front": "8.1 · IPv6 GUA Assignment",
          "back": "Een host kan een GUA handmatig, via SLAAC, via stateless DHCPv6 of via stateful DHCPv6 krijgen. De router levert via ICMPv6 Router Advertisements minimaal prefix- en gatewayinformatie. De default gateway wordt bij IPv6 uit de RA geleerd, niet uit DHCPv6. Een host vormt naast GUA’s ook een link-local adres en voert Duplicate Address Detection uit. De interface identifier kan via EUI-64 of een privacy/stabiel willekeurig mechanisme gevormd worden; moderne clients hoeven dus geen zichtbaar MAC-afgeleid adres te gebruiken.",
          "commands": "ipv6 unicast-routing\ninterface g0/0\n ipv6 address 2001:db8:10::1/64\n no shutdown",
          "verify": [
            "show ipv6 interface g0/0",
            "show ipv6 neighbors",
            "Host heeft GUA, link-local en default router"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "ipv6",
            "gua",
            "assignment"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m08-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.2",
          "sectionTitle": "SLAAC",
          "type": "flashcard",
          "front": "8.2 · SLAAC",
          "back": "Bij SLAAC gebruikt de host de RA-prefix met A-flag om zelf een adres te vormen. De router verstuurt periodieke RA’s en antwoordt op Router Solicitations. M=0 en O=0 betekent alleen SLAAC voor adressering en geen aanvullende DHCPv6-informatie. RDNSS kan DNS in RA aanbieden, maar de CCNA-labben focussen vaak op DHCPv6 voor DNS. SLAAC houdt op de router geen leasebinding bij; NDP toont alleen actuele neighbors.",
          "commands": "interface g0/0\n no ipv6 nd managed-config-flag\n no ipv6 nd other-config-flag",
          "verify": [
            "show ipv6 interface g0/0",
            "RA flags correct",
            "Clientadres ligt in aangekondigde /64"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m08-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.3",
          "sectionTitle": "DHCPv6",
          "type": "flashcard",
          "front": "8.3 · DHCPv6",
          "back": "Stateless DHCPv6: SLAAC levert het adres, DHCPv6 levert extra opties zoals DNS; RA O=1, M=0. Stateful DHCPv6: server leaset het adres; RA M=1. DHCPv6 gebruikt UDP 546 aan clientzijde en UDP 547 aan server/relayzijde. De basisuitwisseling gebruikt Solicit, Advertise, Request en Reply. Ook bij stateful DHCPv6 blijft de default router afkomstig uit RA. Een DHCPv6-lease alleen is dus niet voldoende voor off-link bereikbaarheid.",
          "commands": "ipv6 dhcp pool V6-INFO\n dns-server 2001:db8:53::53\n domain-name lab.example",
          "verify": [
            "show ipv6 dhcp pool",
            "show ipv6 dhcp binding",
            "RA-flag past bij stateless/stateful ontwerp"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m08-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.4",
          "sectionTitle": "Configure Stateless DHCPv6 Server",
          "type": "flashcard",
          "front": "8.4 · Configure Stateless DHCPv6 Server",
          "back": "Maak een pool met DNS/domein, koppel hem aan het LAN-interface en zet de other-config-flag. De host houdt zijn SLAAC-adres. De interface heeft een /64-prefix nodig die via RA wordt aangekondigd; suppress-ra zou dit ontwerp breken.",
          "commands": "ipv6 dhcp pool STATELESS\n dns-server 2001:db8:53::53\n domain-name lab.example\ninterface g0/0\n ipv6 nd other-config-flag\n ipv6 dhcp server STATELESS",
          "verify": [
            "show ipv6 interface g0/0",
            "Clientadres via SLAAC",
            "DNS-optie via DHCPv6"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "configure",
            "stateless",
            "server"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m08-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.5",
          "sectionTitle": "Configure Stateful DHCPv6 Server",
          "type": "flashcard",
          "front": "8.5 · Configure Stateful DHCPv6 Server",
          "back": "Definieer een address prefix in de DHCPv6-pool, koppel de pool en zet de managed-config-flag. IOS- en clientondersteuning kan labgedrag beïnvloeden. De host leert zijn default router nog steeds via RA en gebruikt DHCPv6 voor het globale adres en opties.",
          "commands": "ipv6 dhcp pool STATEFUL\n address prefix 2001:db8:20::/64\n dns-server 2001:db8:53::53\ninterface g0/1\n ipv6 nd managed-config-flag\n ipv6 dhcp server STATEFUL",
          "verify": [
            "show ipv6 dhcp binding",
            "show ipv6 dhcp pool",
            "Clientdefault-route verwijst naar router link-local"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "configure",
            "stateful",
            "server"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m08-f06",
          "courseId": "ccna2-srwe",
          "moduleId": 8,
          "moduleTitle": "SLAAC and DHCPv6",
          "sectionId": "8.6",
          "sectionTitle": "Configure DHCPv6 Relay Agent",
          "type": "flashcard",
          "front": "8.6 · Configure DHCPv6 Relay Agent",
          "back": "Een relay stuurt DHCPv6-berichten tussen een clientlink en een server op een ander IPv6-netwerk. Configureer de relay destination op het client-facing interface. Routing en link-local/global reachability tussen relay en server moeten vooraf werken. RA’s voor de clientprefix blijven door de lokale router geleverd.",
          "commands": "interface g0/0\n ipv6 dhcp relay destination 2001:db8:100::10 g0/1",
          "verify": [
            "show ipv6 dhcp interface",
            "Serverbindings verschijnen",
            "Client ontvangt opties/adres en RA-gateway"
          ],
          "tags": [
            "slaac",
            "and",
            "dhcpv6",
            "configure",
            "relay",
            "agent"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 9,
      "title": "FHRP Concepts",
      "summary": "Maak de default gateway hoog beschikbaar met een virtueel IP/MAC en begrijp HSRP-verkiezing, preemption en tracking.",
      "filename": "modules/module-09.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 2,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna2-m09-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "knowledge",
          "prompt": "Welke HSRP-router wordt normaal active?",
          "choices": [
            "De hoogste priority, daarna hoogste IP als tiebreaker",
            "De laagste MAC",
            "De laagste priority",
            "De router met meeste routes ongeacht priority"
          ],
          "correctIndex": 0,
          "answer": "De hoogste priority, daarna hoogste IP als tiebreaker",
          "explanation": "Priority is de primaire verkiezingswaarde.",
          "tags": [
            "fhrp",
            "concepts",
            "hsrp",
            "hsrp-router",
            "normaal",
            "active"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m09-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "knowledge",
          "prompt": "Waarom is standby preempt nodig?",
          "choices": [
            "Om een terugkerende router met hogere priority de active-rol te laten hernemen",
            "Om DHCP te relayen",
            "Om STP te versnellen",
            "Om het virtuele IP te versleutelen"
          ],
          "correctIndex": 0,
          "answer": "Om een terugkerende router met hogere priority de active-rol te laten hernemen",
          "explanation": "Zonder preemption blijft de huidige active doorgaans actief zolang hij gezond is.",
          "tags": [
            "fhrp",
            "concepts",
            "hsrp",
            "standby",
            "preempt",
            "nodig"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m09-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.1",
          "sectionTitle": "First Hop Redundancy Protocols",
          "type": "knowledge",
          "prompt": "Welk adres configureert een host als gateway in HSRP?",
          "choices": [
            "Het virtuele IP",
            "Het fysieke R1-adres",
            "Het broadcastadres",
            "Het HSRP-multicastadres"
          ],
          "correctIndex": 0,
          "answer": "Het virtuele IP",
          "explanation": "Het virtuele adres blijft stabiel over een failover.",
          "tags": [
            "fhrp",
            "concepts",
            "first",
            "hop",
            "redundancy",
            "protocols",
            "welk",
            "adres",
            "configureert",
            "host"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m09-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "knowledge",
          "prompt": "Wat lost HSRP niet op?",
          "choices": [
            "Een ontbrekende route na de actieve gateway",
            "Uitval van één gatewayrouter",
            "Wijziging van het virtuele MAC bij failover",
            "First-hop beschikbaarheid"
          ],
          "correctIndex": 0,
          "answer": "Een ontbrekende route na de actieve gateway",
          "explanation": "FHRP levert een redundante first hop, maar geen volledige routingoplossing.",
          "tags": [
            "fhrp",
            "concepts",
            "hsrp",
            "lost",
            "niet"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m09-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "diagnosis",
          "prompt": "R1 met priority 110 herstart. R2 blijft active nadat R1 terug is, hoewel R1 de hogere priority heeft. Wat ontbreekt op R1?",
          "choices": [
            "standby preempt",
            "ip helper-address",
            "spanning-tree portfast",
            "switchport nonegotiate"
          ],
          "correctIndex": 0,
          "answer": "standby preempt",
          "explanation": "Preempt laat de preferred router de active-rol terugnemen.",
          "tags": [
            "fhrp",
            "concepts",
            "hsrp",
            "priority",
            "110",
            "herstart.",
            "blijft",
            "active",
            "nadat",
            "terug"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m09-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "diagnosis",
          "prompt": "R1 blijft HSRP-active terwijl zijn WAN-uplink defect is; de LAN-interface is nog up. Welke verbetering ontbreekt?",
          "choices": [
            "Object tracking met priority decrement.",
            "Een langere DHCP-lease.",
            "DTP desirable.",
            "Een static MAC-entry."
          ],
          "correctIndex": 0,
          "answer": "Object tracking met priority decrement.",
          "explanation": "Tracking koppelt de gatewayrol aan de gezondheid van het relevante upstream pad.",
          "tags": [
            "fhrp",
            "concepts",
            "hsrp",
            "blijft",
            "hsrp-active",
            "terwijl",
            "wan-uplink",
            "defect",
            "lan-interface",
            "nog"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m09-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.1",
          "sectionTitle": "First Hop Redundancy Protocols",
          "type": "flashcard",
          "front": "9.1 · First Hop Redundancy Protocols",
          "back": "Hosts hebben meestal één default gateway. Zonder FHRP blijft die configuratie naar een defecte router wijzen. Een FHRP laat meerdere routers één virtueel gateway-IP en -MAC presenteren. HSRP is Cisco-georiënteerd, VRRP is een open standaard en GLBP kan naast redundantie ook gateway-loadsharing leveren. Het cursuslab focust op HSRP. FHRP vervangt geen routingprotocol: de actieve gateway moet nog steeds routes naar externe netwerken hebben.",
          "commands": "show standby brief\nshow standby",
          "verify": [
            "Virtueel IP ligt in clientsubnet",
            "Eén active en één standby",
            "Clients gebruiken VIP, niet fysiek routeradres"
          ],
          "tags": [
            "fhrp",
            "concepts",
            "first",
            "hop",
            "redundancy",
            "protocols"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m09-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 9,
          "moduleTitle": "FHRP Concepts",
          "sectionId": "9.2",
          "sectionTitle": "HSRP",
          "type": "flashcard",
          "front": "9.2 · HSRP",
          "back": "De router met de hoogste HSRP-priority wordt active; standaard is 100. Bij gelijke priority beslist het hoogste interface-IP. preempt laat een later terugkerende router met hogere priority de active-rol hernemen. HSRPv1 gebruikt voor IPv4 een virtueel MAC-patroon 0000.0c07.acXX; HSRPv2 ondersteunt meer groepen en gebruikt een ander patroon. Groep, versie, VIP en authenticatie moeten overeenkomen. Standaard hello/hold zijn typisch 3/10 seconden. Object tracking kan de priority verlagen wanneer bijvoorbeeld de WAN-uplink faalt, zodat een nog levende maar geïsoleerde router niet active blijft.",
          "commands": "interface g0/0\n standby version 2\n standby 10 ip 192.0.2.1\n standby 10 priority 110\n standby 10 preempt\n standby 10 track g0/1 20",
          "verify": [
            "show standby brief",
            "show standby g0/0",
            "Failover na shutdown uplink",
            "ARP voor VIP wijst naar virtual MAC"
          ],
          "tags": [
            "fhrp",
            "concepts",
            "hsrp"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 10,
      "title": "LAN Security Concepts",
      "summary": "Herken endpoint-, toegangs- en Layer-2-aanvallen en koppel elke dreiging aan de juiste verdedigingslaag.",
      "filename": "modules/module-10.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m10-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.5",
          "sectionTitle": "LAN Attacks",
          "type": "knowledge",
          "prompt": "Welke feature beschermt tegen een rogue DHCP-server op een accesspoort?",
          "choices": [
            "DHCP snooping",
            "PortFast",
            "DTP desirable",
            "HSRP"
          ],
          "correctIndex": 0,
          "answer": "DHCP snooping",
          "explanation": "DHCP snooping dropt serverberichten vanaf untrusted interfaces.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "attacks",
            "feature",
            "beschermt",
            "tegen",
            "rogue",
            "dhcp-server",
            "accesspoort"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m10-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.5",
          "sectionTitle": "LAN Attacks",
          "type": "knowledge",
          "prompt": "Waartegen beschermt DAI?",
          "choices": [
            "Ongeldige ARP IP–MAC-koppelingen",
            "Een fout DNS-record",
            "STP root election",
            "SSH brute force"
          ],
          "correctIndex": 0,
          "answer": "Ongeldige ARP IP–MAC-koppelingen",
          "explanation": "DAI valideert ARP-inhoud tegen vertrouwde bindings.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "attacks",
            "waartegen",
            "beschermt",
            "dai"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m10-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.4",
          "sectionTitle": "MAC Address Table Attack",
          "type": "knowledge",
          "prompt": "Welke port-security mode zet standaard de poort err-disabled bij overtreding?",
          "choices": [
            "shutdown",
            "restrict",
            "protect",
            "monitor"
          ],
          "correctIndex": 0,
          "answer": "shutdown",
          "explanation": "Shutdown is de standaard violation action.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "mac",
            "address",
            "table",
            "attack",
            "port-security",
            "mode",
            "zet"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m10-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.5",
          "sectionTitle": "LAN Attacks",
          "type": "knowledge",
          "prompt": "Waarom is dynamic auto op een gebruikerspoort riskant?",
          "choices": [
            "Een aanvaller kan trunkonderhandeling proberen.",
            "Het schakelt DHCP uit.",
            "Het maakt de poort routed.",
            "Het verwijdert de MAC-tabel."
          ],
          "correctIndex": 0,
          "answer": "Een aanvaller kan trunkonderhandeling proberen.",
          "explanation": "Hard accessmode voorkomt een ongewenste DTP-trunk.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "attacks",
            "dynamic",
            "auto",
            "gebruikerspoort",
            "riskant"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m10-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.5",
          "sectionTitle": "LAN Attacks",
          "type": "diagnosis",
          "prompt": "Clients krijgen snel een lease met een onbekende default gateway van een laptop op een accesspoort. Welke aanval is waarschijnlijk?",
          "choices": [
            "Een rogue DHCP-server.",
            "Een STP root election.",
            "Een LACP mismatch.",
            "Een DNS zone transfer."
          ],
          "correctIndex": 0,
          "answer": "Een rogue DHCP-server.",
          "explanation": "Een ongeautoriseerde DHCP-server kan kwaadaardige gateway- en DNS-opties uitdelen.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "attacks",
            "clients",
            "krijgen",
            "snel",
            "lease",
            "onbekende",
            "default"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m10-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.4",
          "sectionTitle": "MAC Address Table Attack",
          "type": "diagnosis",
          "prompt": "De MAC-tabel raakt gevuld met duizenden wisselende bronadressen en de switch floodt steeds meer unicastframes. Welke aanval past hierbij?",
          "choices": [
            "MAC flooding.",
            "Double tagging.",
            "HSRP spoofing.",
            "SLAAC renumbering."
          ],
          "correctIndex": 0,
          "answer": "MAC flooding.",
          "explanation": "CAM-table exhaustion maakt legitieme bestemmingen unknown unicast.",
          "tags": [
            "lan",
            "security",
            "concepts",
            "mac",
            "address",
            "table",
            "attack",
            "mac-tabel",
            "raakt",
            "gevuld"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m10-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.1",
          "sectionTitle": "Endpoint Security",
          "type": "flashcard",
          "front": "10.1 · Endpoint Security",
          "back": "Endpoints zijn aanvalsoppervlak én springplank. Basismaatregelen zijn patches, antimalware/EDR, hostfirewall, least privilege, sterke authenticatie, back-ups en gebruikersbewustzijn. Network access control kan identiteit en device posture controleren voordat volledige netwerktoegang wordt verleend. Segmentatie beperkt laterale beweging wanneer een endpoint toch wordt gecompromitteerd. Beschikbaarheid, integriteit en vertrouwelijkheid (CIA) helpen impact classificeren; logging en tijdsynchronisatie ondersteunen detectie en onderzoek.",
          "commands": "show logging\nshow clock\nshow ntp associations",
          "verify": [
            "Beheerprotocollen versleuteld",
            "Onnodige services uit",
            "Logs gaan naar bewaakte bestemming"
          ],
          "tags": [
            "lan",
            "security",
            "concepts",
            "endpoint"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m10-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.2",
          "sectionTitle": "Access Control",
          "type": "flashcard",
          "front": "10.2 · Access Control",
          "back": "AAA scheidt Authentication (wie ben je), Authorization (wat mag je) en Accounting (wat deed je). Lokale accounts zijn een fallback; centrale RADIUS/TACACS+ schaalt en auditeert beter. 802.1X gebruikt supplicant, authenticator (switch/AP) en authentication server. Tot succesvolle authenticatie is normale datatoegang beperkt. Beheer plane, control plane en data plane vragen elk eigen bescherming. Een management-VLAN alleen is geen authenticatie of encryptie.",
          "commands": "aaa new-model\nusername fallback privilege 15 secret <GEHEIM>\nline vty 0 15\n transport input ssh",
          "verify": [
            "Authenticatiepad en fallback getest",
            "Minimale privileges",
            "Accounting/logging beschikbaar"
          ],
          "tags": [
            "lan",
            "security",
            "concepts",
            "access",
            "control"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m10-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.3",
          "sectionTitle": "Layer 2 Security Threats",
          "type": "flashcard",
          "front": "10.3 · Layer 2 Security Threats",
          "back": "Layer 2 vertrouwt vaak impliciet op lokale deelnemers. Veelvoorkomende bedreigingen zijn MAC-flooding, VLAN hopping, DHCP starvation/rogue DHCP, ARP spoofing, IP/MAC spoofing en STP-manipulatie. Verdediging is gelaagd: port security, vaste access/trunkconfiguratie, DHCP snooping, Dynamic ARP Inspection, IP Source Guard en BPDU Guard/Root Guard. Trust nooit alle accesspoorten. Uplinks naar echte infrastructuur zijn selectief trusted; eindgebruikerpoorten blijven untrusted.",
          "commands": "show port-security\nshow ip dhcp snooping\nshow ip arp inspection\nshow spanning-tree inconsistentports",
          "verify": [
            "Trustgrenzen gedocumenteerd",
            "Accesspoorten hard ingesteld",
            "Beschermingsfeatures per VLAN actief"
          ],
          "tags": [
            "lan",
            "security",
            "concepts",
            "layer",
            "threats"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m10-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.4",
          "sectionTitle": "MAC Address Table Attack",
          "type": "flashcard",
          "front": "10.4 · MAC Address Table Attack",
          "back": "Bij MAC flooding vult een aanvaller de CAM/MAC-tabel met vele vervalste bronadressen. Wanneer legitieme bestemmingen onbekend worden, floodt de switch frames en ontstaat kans op afluisteren en overbelasting. Port security begrenst het aantal toegestane bron-MAC’s per accesspoort en kan statisch, dynamisch of sticky leren. Violation modes: protect dropt zonder melding/counter zoals restrict; restrict dropt en logt/telt; shutdown zet de poort err-disabled (standaard).",
          "commands": "switchport port-security\nswitchport port-security maximum 2\nswitchport port-security mac-address sticky\nswitchport port-security violation restrict",
          "verify": [
            "show port-security interface f0/1",
            "show port-security address",
            "Maximum past bij telefoon + pc"
          ],
          "tags": [
            "lan",
            "security",
            "concepts",
            "mac",
            "address",
            "table",
            "attack"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m10-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 10,
          "moduleTitle": "LAN Security Concepts",
          "sectionId": "10.5",
          "sectionTitle": "LAN Attacks",
          "type": "flashcard",
          "front": "10.5 · LAN Attacks",
          "back": "VLAN hopping ontstaat via ongewenste trunkonderhandeling of double tagging. Hard accessmode, DTP uit, ongebruikte native VLAN en beperkte allowed-lijsten verkleinen het risico. DHCP starvation put leases uit; een rogue server levert kwaadaardige gateway/DNS. DHCP snooping valideert berichten, markeert server-uplinks trusted en bouwt bindings. ARP spoofing vervalst IP–MAC-koppelingen. DAI controleert ARP op untrusted poorten tegen DHCP-snoopingbindings of ARP ACL’s. STP-aanvallen proberen root te worden. BPDU Guard beschermt edgepoorten; Root Guard voorkomt superieure BPDUs op een plaats waar nooit een root hoort.",
          "commands": "switchport nonegotiate\nip dhcp snooping\nip dhcp snooping vlan 10,20\ninterface g0/1\n ip dhcp snooping trust\nip arp inspection vlan 10,20",
          "verify": [
            "show ip dhcp snooping binding",
            "show ip arp inspection statistics",
            "show interfaces trunk"
          ],
          "tags": [
            "lan",
            "security",
            "concepts",
            "attacks"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 11,
      "title": "Switch Security Configuration",
      "summary": "Configureer port security, VLAN-hoppingbescherming, DHCP snooping, DAI en STP-guards als één samenhangende accesslaag.",
      "filename": "modules/module-11.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m11-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.4",
          "sectionTitle": "Mitigate ARP Attacks",
          "type": "knowledge",
          "prompt": "Welke database gebruikt DAI gewoonlijk voor dynamische hosts?",
          "choices": [
            "De DHCP-snooping binding database",
            "De DNS-cache",
            "De STP topology database",
            "De routing table"
          ],
          "correctIndex": 0,
          "answer": "De DHCP-snooping binding database",
          "explanation": "Snooping levert de gevalideerde IP–MAC–VLAN–poortbinding.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "arp",
            "attacks",
            "database",
            "gebruikt",
            "dai",
            "gewoonlijk"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m11-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.4",
          "sectionTitle": "Mitigate ARP Attacks",
          "type": "knowledge",
          "prompt": "Wat moet je doen voor een legitieme statische host onder DAI?",
          "choices": [
            "Een passende ARP ACL of statische binding voorzien",
            "De accesspoort altijd trusted maken",
            "DTP inschakelen",
            "HSRP preempt uitschakelen"
          ],
          "correctIndex": 0,
          "answer": "Een passende ARP ACL of statische binding voorzien",
          "explanation": "Statische hosts verschijnen niet vanzelf in DHCP-bindings.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "arp",
            "attacks",
            "moet",
            "doen",
            "legitieme",
            "statische"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m11-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.5",
          "sectionTitle": "Mitigate STP Attacks",
          "type": "knowledge",
          "prompt": "Welke combinatie hoort op een echte endpointpoort?",
          "choices": [
            "PortFast en BPDU Guard",
            "Root Guard en trunk desirable",
            "LACP passive en DAI trust",
            "HSRP en ip routing"
          ],
          "correctIndex": 0,
          "answer": "PortFast en BPDU Guard",
          "explanation": "Snelle edgeconvergentie plus blokkering van onverwachte BPDUs.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "stp",
            "attacks",
            "combinatie",
            "hoort",
            "echte",
            "endpointpoort"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m11-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.3",
          "sectionTitle": "Mitigate DHCP Attacks",
          "type": "knowledge",
          "prompt": "Waarom configureer je DHCP rate limiting voorzichtig?",
          "choices": [
            "Legitieme bursts kunnen anders een poort err-disable maken.",
            "Het verandert de VLAN-ID.",
            "Het verlaagt HSRP-priority.",
            "Het wist sticky MACs."
          ],
          "correctIndex": 0,
          "answer": "Legitieme bursts kunnen anders een poort err-disable maken.",
          "explanation": "De limiet moet passen bij normaal clientgedrag en platformactie.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "dhcp",
            "attacks",
            "configureer",
            "rate",
            "limiting",
            "voorzichtig"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m11-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.4",
          "sectionTitle": "Mitigate ARP Attacks",
          "type": "diagnosis",
          "prompt": "Na het activeren van DAI verliest een legitieme host met statisch IP zijn verbinding. Hij staat niet in de DHCP-snoopingdatabase. Wat ontbreekt?",
          "choices": [
            "Een passende ARP ACL of statische binding.",
            "LACP active.",
            "Een extra native VLAN.",
            "HSRP preempt."
          ],
          "correctIndex": 0,
          "answer": "Een passende ARP ACL of statische binding.",
          "explanation": "Statische hosts hebben een expliciete vertrouwde IP–MAC-binding nodig.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "arp",
            "attacks",
            "activeren",
            "dai",
            "verliest",
            "legitieme"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m11-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.1",
          "sectionTitle": "Implement Port Security",
          "type": "diagnosis",
          "prompt": "Een IP-phone met aangesloten pc veroorzaakt port-security violations wanneer maximum 1 is ingesteld. Wat is de oorzaak?",
          "choices": [
            "De poort ziet twee legitieme MAC-adressen.",
            "De trunk heeft te veel VLANs.",
            "De DHCP-server gebruikt option 3.",
            "De router verlaagt TTL."
          ],
          "correctIndex": 0,
          "answer": "De poort ziet twee legitieme MAC-adressen.",
          "explanation": "Een telefoon-plus-pc edgepoort vereist doorgaans ruimte voor minstens twee veilige MAC-adressen.",
          "tags": [
            "switch",
            "security",
            "configuration",
            "implement",
            "port",
            "ip-phone",
            "aangesloten",
            "veroorzaakt",
            "port-security",
            "violations"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m11-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.1",
          "sectionTitle": "Implement Port Security",
          "type": "flashcard",
          "front": "11.1 · Implement Port Security",
          "back": "Port security werkt op statische accesspoorten en soms statische trunks, platformafhankelijk. Stel eerst de switchportmode in, activeer port security en bepaal maximum, leerwijze, aging en violation mode. Sticky learning schrijft geleerde adressen in running-config; sla de configuratie op als ze na reload behouden moeten blijven. Voice+pc vereist doorgaans minstens twee veilige MAC-posities. Bij err-disable: onderzoek eerst het vreemde MAC-adres, verwijder de oorzaak en herstel daarna gecontroleerd met shutdown/no shutdown of passend recoverybeleid.",
          "commands": "interface f0/1\n switchport mode access\n switchport access vlan 10\n switchport voice vlan 20\n switchport port-security\n switchport port-security maximum 2\n switchport port-security mac-address sticky\n switchport port-security violation restrict",
          "verify": [
            "show port-security",
            "show port-security interface f0/1",
            "show port-security address"
          ],
          "tags": [
            "switch",
            "security",
            "configuration",
            "implement",
            "port"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m11-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.2",
          "sectionTitle": "Mitigate VLAN Attacks",
          "type": "flashcard",
          "front": "11.2 · Mitigate VLAN Attacks",
          "back": "Zet alle endpointpoorten expliciet access en ongebruikte poorten shutdown in een parking-VLAN. Configureer trunks expliciet, zet DTP uit en laat alleen vereiste VLANs toe. Gebruik een ongebruikte native VLAN en laat native VLANs exact overeenkomen. Double-tagging profiteert van ongetagde native frames; ontwerp voorkomt dat gebruikersverkeer in de native VLAN zit.",
          "commands": "interface range f0/1-20\n switchport mode access\ninterface g0/1\n switchport mode trunk\n switchport trunk native vlan 999\n switchport trunk allowed vlan 10,20,99\n switchport nonegotiate",
          "verify": [
            "show interfaces trunk",
            "show interfaces switchport",
            "Geen userpoort in native VLAN"
          ],
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "vlan",
            "attacks"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m11-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.3",
          "sectionTitle": "Mitigate DHCP Attacks",
          "type": "flashcard",
          "front": "11.3 · Mitigate DHCP Attacks",
          "back": "Activeer DHCP snooping globaal en per VLAN. Alleen links richting bevoegde DHCP-server/relay zijn trusted; clientpoorten zijn standaard untrusted. Rate limiting op untrusted poorten beperkt starvation, maar een te lage waarde kan echte clients of telefoon+pc-combinaties blokkeren. De snooping binding database koppelt VLAN, MAC, IP, lease en interface en voedt DAI/IP Source Guard.",
          "commands": "ip dhcp snooping\nip dhcp snooping vlan 10,20\ninterface g0/1\n ip dhcp snooping trust\ninterface range f0/1-20\n ip dhcp snooping limit rate 15",
          "verify": [
            "show ip dhcp snooping",
            "show ip dhcp snooping binding",
            "show ip dhcp snooping statistics"
          ],
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "dhcp",
            "attacks"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m11-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.4",
          "sectionTitle": "Mitigate ARP Attacks",
          "type": "flashcard",
          "front": "11.4 · Mitigate ARP Attacks",
          "back": "DAI is per VLAN actief en inspecteert ARP op untrusted poorten. Geldigheid komt meestal uit de DHCP-snoopingdatabase; statische hosts vragen een passende ARP ACL of statische binding. Uplink/trunk naar vertrouwde switchinfrastructuur kan trusted zijn. Maak nooit gebruikerspoorten trusted om een bindingprobleem te omzeilen. Optionele validatie van bron-MAC, bestemming-MAC en IP verhoogt controle maar moet met het echte verkeer getest worden.",
          "commands": "ip arp inspection vlan 10,20\ninterface g0/1\n ip arp inspection trust\nip arp inspection validate src-mac dst-mac ip",
          "verify": [
            "show ip arp inspection",
            "show ip arp inspection interfaces",
            "show ip arp inspection statistics"
          ],
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "arp",
            "attacks"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m11-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 11,
          "moduleTitle": "Switch Security Configuration",
          "sectionId": "11.5",
          "sectionTitle": "Mitigate STP Attacks",
          "type": "flashcard",
          "front": "11.5 · Mitigate STP Attacks",
          "back": "PortFast + BPDU Guard is het standaardpatroon voor echte edgepoorten. Een ontvangen BPDU wijst daar op verkeerde bekabeling of een ongeautoriseerde switch. Root Guard hoort op een link waar downstream nooit root mag worden; bij een superieure BPDU gaat de poort root-inconsistent en herstelt wanneer de BPDUs stoppen. Loop Guard beschermt tegen een unidirectioneel/control-planeverlies waarbij BPDUs verdwijnen op een non-designated pad. Kies guards op basis van het beoogde poortrolmodel.",
          "commands": "interface range f0/1-20\n spanning-tree portfast\n spanning-tree bpduguard enable\ninterface g0/2\n spanning-tree guard root",
          "verify": [
            "show spanning-tree inconsistentports",
            "show errdisable recovery",
            "show spanning-tree interface f0/1 detail"
          ],
          "tags": [
            "switch",
            "security",
            "configuration",
            "mitigate",
            "stp",
            "attacks"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 12,
      "title": "WLAN Concepts",
      "summary": "Begrijp 802.11-media, AP-architecturen, associatie, CAPWAP, radiokanalen, dreigingen en moderne WLAN-beveiliging.",
      "filename": "modules/module-12.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 7,
        "total": 13
      },
      "cards": [
        {
          "id": "ccna2-m12-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.1",
          "sectionTitle": "Introduction to Wireless",
          "type": "knowledge",
          "prompt": "Waarom gebruikt Wi-Fi CSMA/CA en geen klassieke collision detection?",
          "choices": [
            "Een radio kan tijdens zenden niet betrouwbaar naar collisions luisteren.",
            "Wi-Fi is full duplex.",
            "AP’s hebben geen MAC-adres.",
            "CAPWAP voorkomt alle collisions."
          ],
          "correctIndex": 0,
          "answer": "Een radio kan tijdens zenden niet betrouwbaar naar collisions luisteren.",
          "explanation": "Het gedeelde half-duplex radiomedium vraagt preventie en acknowledgements.",
          "tags": [
            "wlan",
            "concepts",
            "introduction",
            "wireless",
            "gebruikt",
            "wi-fi",
            "csma/ca",
            "geen",
            "klassieke",
            "collision"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m12-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.1",
          "sectionTitle": "Introduction to Wireless",
          "type": "knowledge",
          "prompt": "Wat is een BSSID meestal?",
          "choices": [
            "Het MAC-adres dat een specifieke BSS/AP-radio identificeert",
            "De leesbare WLAN-naam",
            "Het management-IP van de WLC",
            "De RADIUS-gebruikersnaam"
          ],
          "correctIndex": 0,
          "answer": "Het MAC-adres dat een specifieke BSS/AP-radio identificeert",
          "explanation": "SSID kan door meerdere AP’s gedeeld worden; BSSID maakt de cel specifiek.",
          "tags": [
            "wlan",
            "concepts",
            "introduction",
            "wireless",
            "bssid",
            "meestal"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m12-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.7",
          "sectionTitle": "Secure WLANs",
          "type": "knowledge",
          "prompt": "Welke optie is geschikt voor individuele bedrijfsidentiteiten?",
          "choices": [
            "WPA2/WPA3 Enterprise met 802.1X",
            "WEP shared key",
            "Open met captive portal",
            "WPA2 Personal met één PSK"
          ],
          "correctIndex": 0,
          "answer": "WPA2/WPA3 Enterprise met 802.1X",
          "explanation": "802.1X koppelt clients aan afzonderlijke accounts/certificaten via AAA.",
          "tags": [
            "wlan",
            "concepts",
            "secure",
            "wlans",
            "optie",
            "geschikt",
            "individuele",
            "bedrijfsidentiteiten"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m12-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.4",
          "sectionTitle": "CAPWAP Operation",
          "type": "knowledge",
          "prompt": "Welke CAPWAP-tunnel is standaard beveiligd?",
          "choices": [
            "De controltunnel",
            "Altijd alle dataverkeer end-to-end",
            "De DHCP-broadcast",
            "De RF-beacon"
          ],
          "correctIndex": 0,
          "answer": "De controltunnel",
          "explanation": "CAPWAP beveiligt control messaging; datapadgedrag hangt van implementatie/configuratie af.",
          "tags": [
            "wlan",
            "concepts",
            "capwap",
            "operation",
            "capwap-tunnel",
            "standaard",
            "beveiligd"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m12-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.5",
          "sectionTitle": "Channel Management",
          "type": "diagnosis",
          "prompt": "Meerdere naburige 2,4-GHz AP’s gebruiken overlappende kanalen en clients ervaren veel retries. Wat is waarschijnlijk?",
          "choices": [
            "Adjacent-channel interference.",
            "Een ontbrekende HSRP VIP.",
            "Een floating static route.",
            "Een VTY-timeout."
          ],
          "correctIndex": 0,
          "answer": "Adjacent-channel interference.",
          "explanation": "Overlappende kanalen verstoren elkaar in plaats van ordelijk airtime te delen.",
          "tags": [
            "wlan",
            "concepts",
            "channel",
            "management",
            "meerdere",
            "naburige",
            "4-ghz",
            "gebruiken",
            "overlappende",
            "kanalen"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m12-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.7",
          "sectionTitle": "Secure WLANs",
          "type": "diagnosis",
          "prompt": "Een gast-WLAN gebruikt een captive portal maar geen WPA-beveiliging. Welke aanname is fout?",
          "choices": [
            "Een portal versleutelt de 802.11-radioframes niet.",
            "Een SSID kan leesbaar zijn.",
            "Een client gebruikt DHCP.",
            "Een AP heeft een BSSID."
          ],
          "correctIndex": 0,
          "answer": "Een portal versleutelt de 802.11-radioframes niet.",
          "explanation": "Webauthenticatie is geen vervanging voor linklaagversleuteling.",
          "tags": [
            "wlan",
            "concepts",
            "secure",
            "wlans",
            "gast-wlan",
            "gebruikt",
            "captive",
            "portal",
            "maar",
            "geen"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m12-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.1",
          "sectionTitle": "Introduction to Wireless",
          "type": "flashcard",
          "front": "12.1 · Introduction to Wireless",
          "back": "Wi-Fi gebruikt een gedeeld half-duplex radiomedium. CSMA/CA probeert collisions te vermijden met luisteren, willekeurige backoff en acknowledgements; collisions kunnen niet betrouwbaar tijdens zenden gedetecteerd worden. Een BSS bestaat rond één AP/BSSID. Meerdere AP’s met hetzelfde SSID kunnen een ESS vormen voor roaming. Een IBSS/ad hoc-netwerk heeft geen infrastructuur-AP. RF-kwaliteit hangt af van signaalsterkte, SNR, interferentie, obstakels, frequentie en kanaalbreedte; meer vermogen is niet automatisch beter.",
          "commands": "show wireless stats client detail",
          "verify": [
            "SSID/BSSID onderscheiden",
            "Client ziet bruikbare SNR",
            "Kanaalplan vermijdt overmatige overlap"
          ],
          "tags": [
            "wlan",
            "concepts",
            "introduction",
            "wireless"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.2",
          "sectionTitle": "WLAN Components",
          "type": "flashcard",
          "front": "12.2 · WLAN Components",
          "back": "Autonomous AP’s voeren control- en datafuncties lokaal uit. Lightweight AP’s worden centraal door een WLC beheerd; cloud-managed is een derde operationeel model. Antennes kunnen omnidirectioneel of directioneel zijn. Gain vormt het stralingspatroon; wettelijke EIRP-limieten tellen zendervermogen, kabelverlies en antennewinst samen. PoE voedt AP’s via Ethernet. Switchpoort, PoE-budget, uplinkcapaciteit en VLAN-trunking moeten bij het AP/WLAN-ontwerp passen.",
          "commands": "show power inline\nshow interfaces status",
          "verify": [
            "AP krijgt voldoende PoE",
            "Management- en client-VLANpad correct",
            "Antenne/plaatsing past bij dekking"
          ],
          "tags": [
            "wlan",
            "concepts",
            "components"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.3",
          "sectionTitle": "WLAN Operation",
          "type": "flashcard",
          "front": "12.3 · WLAN Operation",
          "back": "Een client ontdekt AP’s passief via beacons of actief via probe requests/responses, kiest een BSS en doorloopt 802.11-authenticatie en association; hogere beveiligingshandshakes volgen daarna. Managementframes regelen discovery, authentication en association; controlframes ondersteunen mediumtoegang; dataframes dragen gebruikersverkeer. Roamingbeslissing ligt meestal bij de client. Consistente SSID/security en voldoende overlap helpen, maar te veel overlap verhoogt co-channel contention.",
          "commands": "show wireless client summary",
          "verify": [
            "Client geassocieerd met bedoelde WLAN",
            "Authenticatie en DHCP voltooid",
            "Roaming behoudt bruikbare connectiviteit"
          ],
          "tags": [
            "wlan",
            "concepts",
            "operation"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.4",
          "sectionTitle": "CAPWAP Operation",
          "type": "flashcard",
          "front": "12.4 · CAPWAP Operation",
          "back": "CAPWAP koppelt lightweight AP en WLC. De controltunnel is versleuteld; datatunnel kan centraal clientverkeer transporteren. CAPWAP gebruikt IP, zodat AP en WLC routed van elkaar kunnen staan. Een AP ontdekt controllers via onder meer lokale broadcast, DHCP option 43, DNS of eerder opgeslagen informatie. Daarna volgen join, configuratie en operationele toestand. Split-MAC verdeelt tijdkritische 802.11-functies naar het AP en centrale beleids-/beheerfuncties naar de WLC.",
          "commands": "show ap summary\nshow capwap client state",
          "verify": [
            "AP heeft WLC ontdekt en joined",
            "Managementreachability en tijd correct",
            "CAPWAP controlpad up"
          ],
          "tags": [
            "wlan",
            "concepts",
            "capwap",
            "operation"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.5",
          "sectionTitle": "Channel Management",
          "type": "flashcard",
          "front": "12.5 · Channel Management",
          "back": "2,4 GHz heeft weinig niet-overlappende 20-MHz-kanalen; in veel regio’s worden 1, 6 en 11 gebruikt. 5 en 6 GHz bieden meer kanalen maar andere dekking/regelgeving. Adjacent-channel interference ontstaat bij overlappende kanalen; co-channel interference is eigenlijk gedeelde airtime tussen cellen op hetzelfde kanaal. Brede kanalen verhogen pieksnelheid maar verbruiken meer spectrum en hergebruik wordt moeilijker. Ontwerp op capaciteit, niet alleen dekking.",
          "commands": "show advanced 802.11a channel\nshow advanced 802.11b channel",
          "verify": [
            "Kanaal en vermogen passen bij buren",
            "Geen onnodig brede kanalen",
            "DFS/regiovereisten gerespecteerd"
          ],
          "tags": [
            "wlan",
            "concepts",
            "channel",
            "management"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f06",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.6",
          "sectionTitle": "WLAN Threats",
          "type": "flashcard",
          "front": "12.6 · WLAN Threats",
          "back": "Bedreigingen omvatten rogue AP, evil twin, sniffing, spoofing, deauthentication/disassociation en RF-jamming. Een rogue AP is elk niet-goedgekeurd AP; een evil twin imiteert bewust een betrouwbaar SSID. Jamming is een beschikbaarheidsaanval op het medium en kan niet enkel met encryptie worden opgelost. Spectrum-analyse en fysieke/RF-lokalisatie zijn nodig. Open netwerken leveren geen linklaagvertrouwelijkheid; een captive portal is geen vervanging voor WPA-beveiliging.",
          "commands": "show rogue ap summary",
          "verify": [
            "Rogue-classificatie gecontroleerd",
            "Management frame protection waar mogelijk",
            "Monitoring detecteert afwijkingen"
          ],
          "tags": [
            "wlan",
            "concepts",
            "threats"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m12-f07",
          "courseId": "ccna2-srwe",
          "moduleId": 12,
          "moduleTitle": "WLAN Concepts",
          "sectionId": "12.7",
          "sectionTitle": "Secure WLANs",
          "type": "flashcard",
          "front": "12.7 · Secure WLANs",
          "back": "WEP en TKIP zijn verouderd. WPA2 gebruikt AES-CCMP; WPA3 versterkt persoonlijke authenticatie met SAE en enterpriseopties. Ondersteuning hangt af van clients en infrastructuur. Personal gebruikt een gedeeld geheim; Enterprise gebruikt 802.1X/EAP met een RADIUS-server en unieke identiteiten. Enterprise is beter beheersbaar en intrekbaar. Bescherm managementframes met 802.11w/PMF waar ondersteund en segmenteer gast-, IoT- en bedrijfsclients met eigen beleid.",
          "commands": "show wlan summary\nshow radius summary",
          "verify": [
            "Geen WEP/TKIP",
            "AES-CCMP actief",
            "Enterprise WLAN bereikt RADIUS",
            "Gastverkeer gescheiden"
          ],
          "tags": [
            "wlan",
            "concepts",
            "secure",
            "wlans"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 13,
      "title": "WLAN Configuration",
      "summary": "Configureer een thuis/filiaal-WLAN en controllergebaseerde WPA2-Personal en WPA2-Enterprise WLANs en diagnoseer clientproblemen.",
      "filename": "modules/module-13.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 4,
        "total": 10
      },
      "cards": [
        {
          "id": "ccna2-m13-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.4",
          "sectionTitle": "Troubleshoot WLAN Issues",
          "type": "knowledge",
          "prompt": "Een Wi-Fi-client associeert maar krijgt 169.254.x.x. Welke fase faalt waarschijnlijk?",
          "choices": [
            "DHCP/adrestoewijzing",
            "RF-discovery",
            "802.11-beaconing",
            "SSID-advertentie"
          ],
          "correctIndex": 0,
          "answer": "DHCP/adrestoewijzing",
          "explanation": "Een link-local IPv4-adres verschijnt wanneer geen DHCP-lease verkregen wordt.",
          "tags": [
            "wlan",
            "configuration",
            "troubleshoot",
            "issues",
            "wi-fi-client",
            "associeert",
            "maar",
            "krijgt",
            "169.254.x.x.",
            "fase"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m13-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.2",
          "sectionTitle": "Configure a Basic WLAN on WLC",
          "type": "knowledge",
          "prompt": "Wat wordt bij een WLC aan een WLAN gekoppeld om clientverkeer in de juiste VLAN te plaatsen?",
          "choices": [
            "Een dynamic interface/VLAN of policy profile",
            "De AP-consolekabel",
            "Alleen het RADIUS shared secret",
            "Het BSSID als subnetmasker"
          ],
          "correctIndex": 0,
          "answer": "Een dynamic interface/VLAN of policy profile",
          "explanation": "De WLAN-policy mapping bepaalt de wired VLAN/segmentcontext.",
          "tags": [
            "wlan",
            "configuration",
            "configure",
            "basic",
            "wlc",
            "gekoppeld",
            "clientverkeer",
            "juiste",
            "vlan",
            "plaatsen"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m13-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.3",
          "sectionTitle": "Configure WPA2 Enterprise WLAN on WLC",
          "type": "knowledge",
          "prompt": "Wat is het RADIUS shared secret?",
          "choices": [
            "Een geheim tussen authenticator/WLC en RADIUS-server",
            "Het wachtwoord dat alle Wi-Fi-gebruikers delen",
            "De WPA2-encryptiesleutel van elke sessie",
            "Het AP-managementadres"
          ],
          "correctIndex": 0,
          "answer": "Een geheim tussen authenticator/WLC en RADIUS-server",
          "explanation": "Het beveiligt/verifieert de AAA-relatie, niet de individuele gebruikerslogin.",
          "tags": [
            "wlan",
            "configuration",
            "configure",
            "wpa2",
            "enterprise",
            "wlc",
            "radius",
            "shared",
            "secret"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m13-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.4",
          "sectionTitle": "Troubleshoot WLAN Issues",
          "type": "knowledge",
          "prompt": "Welke troubleshootingvolgorde is het meest efficiënt?",
          "choices": [
            "RF/SSID → authenticatie → DHCP → gateway/DNS → applicatie",
            "DNS → applicatie → antenne → VLAN",
            "Factory reset → nieuw SSID → routing",
            "Alleen signaalsterkte controleren"
          ],
          "correctIndex": 0,
          "answer": "RF/SSID → authenticatie → DHCP → gateway/DNS → applicatie",
          "explanation": "De fasen volgen de werkelijke opbouw van een clientsessie.",
          "tags": [
            "wlan",
            "configuration",
            "troubleshoot",
            "issues",
            "troubleshootingvolgorde",
            "meest",
            "effici"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m13-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.4",
          "sectionTitle": "Troubleshoot WLAN Issues",
          "type": "diagnosis",
          "prompt": "Een client ziet het SSID en associeert, maar krijgt 169.254.20.8. Welke fase is waarschijnlijk defect?",
          "choices": [
            "DHCP of de WLAN-naar-VLAN-koppeling.",
            "Beacon discovery.",
            "De eerste 802.11 probe.",
            "De weergave van het SSID."
          ],
          "correctIndex": 0,
          "answer": "DHCP of de WLAN-naar-VLAN-koppeling.",
          "explanation": "Een APIPA-adres wijst op een mislukte IPv4-lease na associatie.",
          "tags": [
            "wlan",
            "configuration",
            "troubleshoot",
            "issues",
            "client",
            "ziet",
            "ssid",
            "associeert",
            "maar",
            "krijgt"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m13-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.3",
          "sectionTitle": "Configure WPA2 Enterprise WLAN on WLC",
          "type": "diagnosis",
          "prompt": "Alle 802.1X-logins falen direct nadat het RADIUS shared secret op de server is gewijzigd. Wat is de oorzaak?",
          "choices": [
            "Het shared secret komt niet meer overeen met de WLC.",
            "Het 2,4-GHz kanaal is te breed.",
            "De client heeft een geldige DHCP-lease.",
            "CAPWAP gebruikt IP."
          ],
          "correctIndex": 0,
          "answer": "Het shared secret komt niet meer overeen met de WLC.",
          "explanation": "WLC en RADIUS-server moeten hetzelfde AAA shared secret gebruiken.",
          "tags": [
            "wlan",
            "configuration",
            "configure",
            "wpa2",
            "enterprise",
            "wlc",
            "alle",
            "802.1x-logins",
            "falen",
            "direct"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m13-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.1",
          "sectionTitle": "Remote Site WLAN Configuration",
          "type": "flashcard",
          "front": "13.1 · Remote Site WLAN Configuration",
          "back": "Een SOHO-router combineert vaak WAN-router, NAT, DHCP, switch en AP. Wijzig standaardbeheercredentials, beheeradres, SSID en beveiliging; schakel WPS en ongebruikte remote administration uit. Gebruik WPA2-AES of WPA3 wanneer alle clients dit ondersteunen, een lange unieke passphrase en een afzonderlijk gastnetwerk. Kies kanaal en breedte op basis van de RF-omgeving. Controleer de volledige keten: associatie, beveiligingshandshake, DHCP, default gateway, DNS en internetroute/NAT.",
          "commands": "Client checks: SSID → security → IP lease → gateway ping → DNS lookup",
          "verify": [
            "Geen fabriekswachtwoord",
            "WEP/TKIP/WPS uit",
            "Gastnetwerk geïsoleerd",
            "Beheer alleen vanaf vertrouwd LAN"
          ],
          "tags": [
            "wlan",
            "configuration",
            "remote",
            "site"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m13-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.2",
          "sectionTitle": "Configure a Basic WLAN on WLC",
          "type": "flashcard",
          "front": "13.2 · Configure a Basic WLAN on WLC",
          "back": "Maak of kies eerst de client-VLAN/dynamic interface, definieer daarna WLAN-ID, profielnaam en SSID, koppel het WLAN aan de juiste interface en activeer het pas na security/QoS-instellingen. Een WLAN kan zichtbaar bestaan maar disabled zijn. Controleer daarom zowel administratieve enable-state als AP-groep/policy-toewijzing. Voor WPA2-Personal selecteer AES/CCMP en PSK. Test met een echte client dat associatie én DHCP via de gekoppelde VLAN werken.",
          "commands": "WLC GUI: WLANs → Create New → ID/Profile/SSID → Interface/VLAN → Security WPA2/AES → PSK → Enable",
          "verify": [
            "show wlan summary",
            "Clientdetail toont juiste WLAN/VLAN",
            "DHCP-adres uit juiste scope"
          ],
          "tags": [
            "wlan",
            "configuration",
            "configure",
            "basic",
            "wlc"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m13-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.3",
          "sectionTitle": "Configure WPA2 Enterprise WLAN on WLC",
          "type": "flashcard",
          "front": "13.3 · Configure WPA2 Enterprise WLAN on WLC",
          "back": "Registreer de RADIUS-server met IP, gedeeld geheim en juiste poorten; configureer dezelfde client/NAS-informatie op RADIUS. Daarna koppel je WPA2/AES met 802.1X aan het WLAN. De supplicant kiest een EAP-methode en moet servercertificaten correct valideren. Foute tijd, CA-trust, identiteit of shared secret veroorzaakt authenticatiefalen. Gebruik accounting wanneer vereist en beperk fallback. Het RADIUS shared secret is tussen WLC en server, niet het gebruikerswachtwoord.",
          "commands": "WLC GUI: Security → AAA → RADIUS Authentication → Add\nWLAN Security: WPA2/AES + 802.1X → select RADIUS server",
          "verify": [
            "RADIUS-server bereikbaar",
            "AAA-log toont accept of concrete reject",
            "Clientcertificaat/credentials geldig",
            "Client krijgt daarna DHCP"
          ],
          "tags": [
            "wlan",
            "configuration",
            "configure",
            "wpa2",
            "enterprise",
            "wlc"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m13-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 13,
          "moduleTitle": "WLAN Configuration",
          "sectionId": "13.4",
          "sectionTitle": "Troubleshoot WLAN Issues",
          "type": "flashcard",
          "front": "13.4 · Troubleshoot WLAN Issues",
          "back": "Classificeer de fase: ziet de client SSID/beacon, kan hij authenticeren/associëren, krijgt hij DHCP, bereikt hij gateway/DNS en werkt de applicatie? Elke fase heeft andere bewijzen. Controleer RF (afstand, interferentie, kanaal, SNR), clientcompatibiliteit, security/EAP, WLC mapping/VLAN, wired trunk, DHCP en routing in die volgorde. Een client met 169.254/16 heeft vaak wel link maar geen IPv4-lease. Een herhaald credentialprompt wijst eerder op 802.1X/EAP dan op radio.",
          "commands": "show wireless client summary\nshow client detail <MAC>\nshow ap summary\nshow wlan summary\nshow radius auth statistics",
          "verify": [
            "Probleemfase geïsoleerd",
            "Wired en wireless VLAN-identiteit gelijk",
            "Logs ondersteunen conclusie"
          ],
          "tags": [
            "wlan",
            "configuration",
            "troubleshoot",
            "issues"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 14,
      "title": "Routing Concepts",
      "summary": "Volg de forwardingbeslissing van host tot router, lees IPv4/IPv6-routetabellen en vergelijk statische en dynamische routebronnen.",
      "filename": "modules/module-14.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m14-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.1",
          "sectionTitle": "Path Determination",
          "type": "knowledge",
          "prompt": "Welke route wint voor 192.0.2.130 als /0, /24 en /25 beschikbaar zijn en alle matchen?",
          "choices": [
            "De /25",
            "De route met laagste AD ongeacht prefix",
            "De /0",
            "De oudste route"
          ],
          "correctIndex": 0,
          "answer": "De /25",
          "explanation": "De meest specifieke, langste prefix wint.",
          "tags": [
            "routing",
            "concepts",
            "path",
            "determination",
            "route",
            "wint",
            "192.0.2.130",
            "beschikbaar",
            "alle",
            "matchen"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m14-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.2",
          "sectionTitle": "Packet Forwarding",
          "type": "knowledge",
          "prompt": "Wat verandert normaal op elke routerhop?",
          "choices": [
            "De Layer-2 bron- en bestemmingsadressen",
            "De IP-bron en IP-bestemming",
            "Het TCP-poortnummer",
            "De applicatiedata"
          ],
          "correctIndex": 0,
          "answer": "De Layer-2 bron- en bestemmingsadressen",
          "explanation": "De router bouwt voor elke uitgaande link een nieuw frame.",
          "tags": [
            "routing",
            "concepts",
            "packet",
            "forwarding",
            "verandert",
            "normaal",
            "elke",
            "routerhop"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m14-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.1",
          "sectionTitle": "Path Determination",
          "type": "knowledge",
          "prompt": "Wanneer vergelijkt een router administrative distance?",
          "choices": [
            "Bij routes naar exact dezelfde prefix uit verschillende bronnen",
            "Tussen elke /24 en /25",
            "Bij ARP-resolutie",
            "Bij keuze van switchpoort"
          ],
          "correctIndex": 0,
          "answer": "Bij routes naar exact dezelfde prefix uit verschillende bronnen",
          "explanation": "AD bepaalt welke routebron voor eenzelfde bestemming/prefix wordt vertrouwd.",
          "tags": [
            "routing",
            "concepts",
            "path",
            "determination",
            "wanneer",
            "vergelijkt",
            "router",
            "administrative",
            "distance"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m14-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.4",
          "sectionTitle": "IP Routing Table",
          "type": "knowledge",
          "prompt": "Wat gebeurt zonder passende route of default route?",
          "choices": [
            "De router dropt het pakket.",
            "De router floodt het pakket.",
            "De switch leert de bestemming.",
            "DHCP maakt een route."
          ],
          "correctIndex": 0,
          "answer": "De router dropt het pakket.",
          "explanation": "Routers flooden onbekende IP-bestemmingen niet.",
          "tags": [
            "routing",
            "concepts",
            "table",
            "gebeurt",
            "zonder",
            "passende",
            "route",
            "default"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m14-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.1",
          "sectionTitle": "Path Determination",
          "type": "diagnosis",
          "prompt": "Voor 10.1.2.130 bestaan routes /0, 10.0.0.0/8 en 10.1.2.128/25. De /8 heeft lagere AD. Welke route gebruikt de router?",
          "choices": [
            "De /25 door longest prefix match.",
            "De /8 door de lagere AD.",
            "De /0 als gateway of last resort.",
            "Alle drie willekeurig."
          ],
          "correctIndex": 0,
          "answer": "De /25 door longest prefix match.",
          "explanation": "Prefixspecificiteit wordt vóór AD tussen verschillende prefixlengtes toegepast.",
          "tags": [
            "routing",
            "concepts",
            "path",
            "determination",
            "10.1.2.130",
            "bestaan",
            "routes",
            "10.0.0.0/8",
            "10.1.2.128/25.",
            "heeft"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m14-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.2",
          "sectionTitle": "Packet Forwarding",
          "type": "diagnosis",
          "prompt": "Een capture toont per routerhop andere Ethernetadressen maar dezelfde IP-bron en -bestemming. Waarom?",
          "choices": [
            "Elke router bouwt een nieuw Layer-2-frame.",
            "Elke router voert DHCP uit.",
            "STP herschrijft IP-adressen.",
            "DNS bewaart de MAC-adressen."
          ],
          "correctIndex": 0,
          "answer": "Elke router bouwt een nieuw Layer-2-frame.",
          "explanation": "De Layer-3-payload blijft end-to-end terwijl de linkencapsulatie per hop verandert.",
          "tags": [
            "routing",
            "concepts",
            "packet",
            "forwarding",
            "capture",
            "toont",
            "per",
            "routerhop",
            "andere",
            "ethernetadressen"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m14-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.1",
          "sectionTitle": "Path Determination",
          "type": "flashcard",
          "front": "14.1 · Path Determination",
          "back": "Een host bepaalt met eigen adres en masker/prefix of de bestemming lokaal is. Lokaal: resolveer doel-MAC. Remote: stuur het frame naar de MAC van de default gateway terwijl het IP-bestemmingsadres eind-tot-eind gelijk blijft. Elke router zoekt de meest specifieke overeenkomst: longest prefix match. /28 wint dus van /24 en van /0, ongeacht dat de default route ook overeenkomt. Wanneer meerdere routebronnen exact dezelfde prefix leveren, kiest de router eerst de laagste administrative distance; binnen hetzelfde protocol beslist de metric.",
          "commands": "show ip route 198.51.100.25\nshow ipv6 route 2001:db8:20::25",
          "verify": [
            "Langste prefix geïdentificeerd",
            "Routebron/AD/metric gelezen",
            "Next hop of exitinterface bereikbaar"
          ],
          "tags": [
            "routing",
            "concepts",
            "path",
            "determination"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m14-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.2",
          "sectionTitle": "Packet Forwarding",
          "type": "flashcard",
          "front": "14.2 · Packet Forwarding",
          "back": "Een router verwijdert het ontvangen Layer-2-frame, valideert/verwerkt het IP-pakket, verlaagt IPv4 TTL of IPv6 Hop Limit, kiest een route en encapsuleert opnieuw voor de volgende link. De Layer-2-bron- en bestemmingsadressen veranderen per hop. De Layer-3-adressen blijven normaal gelijk zonder NAT. ARP bedient IPv4-next-hops; NDP bedient IPv6-neighbors. Cisco Express Forwarding gebruikt een Forwarding Information Base (FIB) en adjacency table om forwarding snel en schaalbaar uit te voeren.",
          "commands": "show ip cef\nshow adjacency\nshow arp\nshow ipv6 neighbors",
          "verify": [
            "Next-hop adjacency resolved",
            "TTL/Hop Limit daalt per router",
            "Retourpad bestaat"
          ],
          "tags": [
            "routing",
            "concepts",
            "packet",
            "forwarding"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m14-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.3",
          "sectionTitle": "Basic Router Configuration Review",
          "type": "flashcard",
          "front": "14.3 · Basic Router Configuration Review",
          "back": "Een betrouwbare baseline bevat hostname, veilige toegang, interfacebeschrijvingen, correcte dual-stack adressen, no shutdown, opgeslagen configuratie en eventueel logging/NTP. show ip interface brief toont niet het masker; gebruik show running-config interface of show interfaces voor detail. up/down wijst vaak op Layer-2-line-protocolproblemen; down/down eerder fysiek.",
          "commands": "show running-config\nshow interfaces description\nshow ip interface brief\nshow ipv6 interface brief",
          "verify": [
            "Alle gebruikte interfaces up/up",
            "Adresschema zonder overlap",
            "Configuratie opgeslagen"
          ],
          "tags": [
            "routing",
            "concepts",
            "basic",
            "router",
            "configuration",
            "review"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m14-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.4",
          "sectionTitle": "IP Routing Table",
          "type": "flashcard",
          "front": "14.4 · IP Routing Table",
          "back": "Routecodes tonen bron, bijvoorbeeld C connected, L local, S static en protocolcodes. Een parent/child-weergave kan subnetten groeperen; let steeds op de concrete prefix. Een route-entry vermeldt prefix, routebron/AD, metric, next hop, ouderdom en/of exitinterface. Direct connected routes hebben geen remote next hop. Een gateway of last resort is de kandidaat-default route. Ontbreekt een match én default route, dan dropt de router het pakket en kan ICMP unreachable terugkeren.",
          "commands": "show ip route\nshow ip route connected\nshow ipv6 route\nshow ip protocols",
          "verify": [
            "Default route herkenbaar als /0",
            "Local /32 of /128 onderscheiden van connected subnet",
            "Route naar elk labnetwerk aanwezig"
          ],
          "tags": [
            "routing",
            "concepts",
            "table"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m14-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 14,
          "moduleTitle": "Routing Concepts",
          "sectionId": "14.5",
          "sectionTitle": "Static and Dynamic Routing",
          "type": "flashcard",
          "front": "14.5 · Static and Dynamic Routing",
          "back": "Statische routes zijn voorspelbaar en protocolarm maar vereisen handmatig onderhoud. Dynamische protocollen ontdekken/topologie-updaten routes en schalen beter, met extra control traffic en ontwerpcomplexiteit. Administrative distance vergelijkt verschillende bronnen voor dezelfde prefix; lagere is geloofwaardiger. Connected is 0, static standaard 1; protocolwaarden verschillen. Equal-cost routes kunnen load sharing leveren. Een floating static route krijgt bewust een hogere AD en verschijnt pas wanneer de betere route verdwijnt.",
          "commands": "show ip route static\nshow ip protocols\nshow running-config | include ^ip route",
          "verify": [
            "Primaire en backuproute onderscheiden",
            "AD niet verward met metric",
            "Route verdwijnt wanneer recursive next hop onbereikbaar wordt"
          ],
          "tags": [
            "routing",
            "concepts",
            "static",
            "and",
            "dynamic"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 15,
      "title": "IP Static Routing",
      "summary": "Configureer en verifieer IPv4/IPv6 network-, default-, floating- en hostroutes met juiste next-hopresolutie.",
      "filename": "modules/module-15.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 5,
        "total": 11
      },
      "cards": [
        {
          "id": "ccna2-m15-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.5",
          "sectionTitle": "Configure Static Host Routes",
          "type": "knowledge",
          "prompt": "Welke IPv4-prefix is een hostroute?",
          "choices": [
            "/32",
            "/31",
            "/24",
            "/0"
          ],
          "correctIndex": 0,
          "answer": "/32",
          "explanation": "Een /32 matcht precies één IPv4-adres.",
          "tags": [
            "static",
            "routing",
            "configure",
            "host",
            "routes",
            "ipv4-prefix",
            "hostroute"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m15-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.1",
          "sectionTitle": "Static Routes",
          "type": "knowledge",
          "prompt": "Waarom vermeld je bij een IPv6 link-local next hop ook de exitinterface?",
          "choices": [
            "Link-local adressen zijn alleen per link uniek.",
            "IPv6 gebruikt geen routing table.",
            "De prefix moet altijd /64 zijn.",
            "NDP werkt alleen met globale adressen."
          ],
          "correctIndex": 0,
          "answer": "Link-local adressen zijn alleen per link uniek.",
          "explanation": "De interface bepaalt op welke link fe80::… bedoeld is.",
          "tags": [
            "static",
            "routing",
            "routes",
            "vermeld",
            "ipv6",
            "link-local",
            "next",
            "hop",
            "ook",
            "exitinterface"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m15-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.4",
          "sectionTitle": "Configure Floating Static Routes",
          "type": "knowledge",
          "prompt": "Hoe maak je een floating static route?",
          "choices": [
            "Geef haar een hogere administrative distance dan de primaire route.",
            "Gebruik een langere prefix dan elke primaire route.",
            "Gebruik DTP passive.",
            "Verlaag de metric van connected routes."
          ],
          "correctIndex": 0,
          "answer": "Geef haar een hogere administrative distance dan de primaire route.",
          "explanation": "De hogere AD laat de route verliezen tot de betere bron verdwijnt.",
          "tags": [
            "static",
            "routing",
            "configure",
            "floating",
            "routes",
            "maak",
            "route"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m15-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.3",
          "sectionTitle": "Configure IP Default Static Routes",
          "type": "knowledge",
          "prompt": "Welke route matcht alle IPv6-bestemmingen?",
          "choices": [
            "::/0",
            "fe80::/10",
            "ff00::/8",
            "::1/128"
          ],
          "correctIndex": 0,
          "answer": "::/0",
          "explanation": "::/0 is de IPv6-default route.",
          "tags": [
            "static",
            "routing",
            "configure",
            "default",
            "routes",
            "route",
            "matcht",
            "alle",
            "ipv6-bestemmingen"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m15-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.4",
          "sectionTitle": "Configure Floating Static Routes",
          "type": "diagnosis",
          "prompt": "Een backuproute met AD 200 verschijnt pas nadat de dynamische primaire route verdwijnt. Welk type route is dit?",
          "choices": [
            "Een floating static route.",
            "Een connected local route.",
            "Een summary-only VLAN.",
            "Een DHCP hostbinding."
          ],
          "correctIndex": 0,
          "answer": "Een floating static route.",
          "explanation": "Een bewust hogere AD laat de static route als backup functioneren.",
          "tags": [
            "static",
            "routing",
            "configure",
            "floating",
            "routes",
            "backuproute",
            "200",
            "verschijnt",
            "pas",
            "nadat"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m15-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.1",
          "sectionTitle": "Static Routes",
          "type": "diagnosis",
          "prompt": "Een IPv6 static route gebruikt alleen next hop fe80::2 en IOS meldt dat de route ambigu is. Wat ontbreekt?",
          "choices": [
            "De exitinterface.",
            "Een DNS-server.",
            "De native VLAN.",
            "Een HSRP group number."
          ],
          "correctIndex": 0,
          "answer": "De exitinterface.",
          "explanation": "Een link-local next hop is alleen per link uniek en vereist interfacecontext.",
          "tags": [
            "static",
            "routing",
            "routes",
            "ipv6",
            "route",
            "gebruikt",
            "alleen",
            "next",
            "hop",
            "fe80"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m15-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.1",
          "sectionTitle": "Static Routes",
          "type": "flashcard",
          "front": "15.1 · Static Routes",
          "back": "Een static route bevat bestemmingsprefix plus next-hop, exitinterface of beide. Next-hop-only is recursively: IOS zoekt daarna hoe de next hop bereikbaar is. Fully specified geeft next hop én interface. Op point-to-point links kan een exitinterface-route duidelijk zijn. Op multiaccess Ethernet kan alleen een exitinterface onnodige ARP/NDP voor vele doelen veroorzaken; gebruik daar doorgaans next hop of fully specified. IPv6-static routes gebruiken prefix/length en een IPv6-next-hop. Bij alleen een link-local next hop moet de exitinterface worden vermeld omdat hetzelfde link-local adres op meerdere links kan bestaan.",
          "commands": "ip route 198.51.100.0 255.255.255.0 192.0.2.2\nipv6 route 2001:db8:20::/64 2001:db8:12::2\nipv6 route 2001:db8:30::/64 g0/0 fe80::2",
          "verify": [
            "show ip route static",
            "show ipv6 route static",
            "Next hop resolved via connected route"
          ],
          "tags": [
            "static",
            "routing",
            "routes"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m15-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.2",
          "sectionTitle": "Configure IP Static Routes",
          "type": "flashcard",
          "front": "15.2 · Configure IP Static Routes",
          "back": "Ontwerp beide richtingen. R1→LAN B zonder R2/R3→LAN A geeft een heenpad maar geen bruikbare sessie. Voeg alleen noodzakelijke, niet-overlappende routes toe. Verifieer eerst dat next hop rechtstreeks bereikbaar is, daarna dat route in RIB staat, vervolgens ping met relevante source en tenslotte traceroute/end-to-end. Een verkeerde mask/prefix is gevaarlijker dan een tikfout: hij kan een te brede route installeren en verkeer naar het verkeerde pad trekken.",
          "commands": "ip route 10.20.0.0 255.255.0.0 192.0.2.2\nping 10.20.0.1 source 192.0.2.1\ntraceroute 10.20.0.10",
          "verify": [
            "Prefix exact",
            "Next hop in rechtstreeks verbonden subnet",
            "Retourroute aanwezig"
          ],
          "tags": [
            "static",
            "routing",
            "configure",
            "routes"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m15-f03",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.3",
          "sectionTitle": "Configure IP Default Static Routes",
          "type": "flashcard",
          "front": "15.3 · Configure IP Default Static Routes",
          "back": "Een IPv4-default route is 0.0.0.0/0; IPv6 gebruikt ::/0. Ze vangen alleen pakketten waarvoor geen specifiekere route bestaat. Een stubrouter wijst typisch default naar upstream. De upstreamrouter heeft nog routes naar de stub-LANs nodig; default routing is geen automatische routeadvertentie. Gateway of last resort verschijnt wanneer een bruikbare IPv4-default in de tabel staat.",
          "commands": "ip route 0.0.0.0 0.0.0.0 203.0.113.1\nipv6 route ::/0 2001:db8:ff::1",
          "verify": [
            "show ip route | include Gateway|0.0.0.0",
            "show ipv6 route ::/0",
            "Specifieke route wint nog steeds van default"
          ],
          "tags": [
            "static",
            "routing",
            "configure",
            "default",
            "routes"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m15-f04",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.4",
          "sectionTitle": "Configure Floating Static Routes",
          "type": "flashcard",
          "front": "15.4 · Configure Floating Static Routes",
          "back": "Geef de backupstatic een hogere AD dan de primaire routebron. Zolang de primaire route aanwezig is, blijft de floating route buiten de actieve routingtabel of als niet-winnende kandidaat. De backup werkt alleen als zijn next hop zelf bereikbaar blijft en het retourpad ook omschakelt. Test door de primaire link gecontroleerd te onderbreken. Een static route volgt standaard alleen next-hopreachability, niet altijd end-to-end dienstgezondheid; geavanceerde tracking/IP SLA kan nodig zijn buiten CCNA-basis.",
          "commands": "ip route 198.51.100.0 255.255.255.0 192.0.2.2 200\nipv6 route 2001:db8:20::/64 2001:db8:13::3 200",
          "verify": [
            "Primaire route actief vóór storing",
            "Floating route actief na storing",
            "Convergentie en retourpad gemeten"
          ],
          "tags": [
            "static",
            "routing",
            "configure",
            "floating",
            "routes"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m15-f05",
          "courseId": "ccna2-srwe",
          "moduleId": 15,
          "moduleTitle": "IP Static Routing",
          "sectionId": "15.5",
          "sectionTitle": "Configure Static Host Routes",
          "type": "flashcard",
          "front": "15.5 · Configure Static Host Routes",
          "back": "Een IPv4-hostroute gebruikt /32 en een IPv6-hostroute /128. Ze sturen slechts één exact adres en winnen door longest prefix van bredere routes. IOS maakt local /32-/128-routes voor eigen interfaceadressen; handmatige hostroutes dienen voor externe specifieke doelen, policy of uitzonderingen. Controleer dat een hostroute geen onbedoelde blackhole creëert wanneer het doel via een ander pad moet failoveren.",
          "commands": "ip route 198.51.100.25 255.255.255.255 192.0.2.2\nipv6 route 2001:db8:20::25/128 2001:db8:12::2",
          "verify": [
            "show ip route 198.51.100.25",
            "show ipv6 route 2001:db8:20::25",
            "Bredere route blijft voor andere hosts"
          ],
          "tags": [
            "static",
            "routing",
            "configure",
            "host",
            "routes"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    },
    {
      "id": 16,
      "title": "Troubleshoot Static and Default Routes",
      "summary": "Volg pakketverwerking, isoleer fouten in static/default routes en herstel uitsluitend de bewezen oorzaak.",
      "filename": "modules/module-16.json",
      "counts": {
        "knowledge": 4,
        "diagnosis": 2,
        "flashcards": 2,
        "total": 8
      },
      "cards": [
        {
          "id": "ccna2-m16-q01",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "knowledge",
          "prompt": "Een static route staat in running-config maar niet in show ip route. Wat controleer je eerst?",
          "choices": [
            "Of de next hop/exitinterface resolveerbaar en up is",
            "Of DNS werkt",
            "Of de switch VTP server is",
            "Of de host een browser heeft"
          ],
          "correctIndex": 0,
          "answer": "Of de next hop/exitinterface resolveerbaar en up is",
          "explanation": "Een onbruikbare next hop voorkomt installatie in de actieve RIB.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration",
            "staat",
            "running-config"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m16-q02",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "knowledge",
          "prompt": "Waarom kan een router de bestemming pingen terwijl de LAN-host dat niet kan?",
          "choices": [
            "De routerping kan een andere bron en dus ander retourpad gebruiken.",
            "Routers negeren routetabellen bij ping.",
            "Hosts gebruiken geen default gateway.",
            "ICMP werkt alleen lokaal."
          ],
          "correctIndex": 0,
          "answer": "De routerping kan een andere bron en dus ander retourpad gebruiken.",
          "explanation": "Test met dezelfde relevante broncontext als het probleemverkeer.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration",
            "router",
            "bestemming"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m16-q03",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.1",
          "sectionTitle": "Packet Processing with Static Routes",
          "type": "knowledge",
          "prompt": "Welke twee configuraties zijn nodig voor een geslaagde round trip?",
          "choices": [
            "Een heenroute en een retourroute",
            "Twee default gateways op elke host",
            "DTP en VTP",
            "Twee DNS-records"
          ],
          "correctIndex": 0,
          "answer": "Een heenroute en een retourroute",
          "explanation": "Request en reply worden onafhankelijk gerouteerd.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "packet",
            "processing",
            "with",
            "twee",
            "configuraties"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m16-q04",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "knowledge",
          "prompt": "Wat is de beste eerste troubleshootingactie?",
          "choices": [
            "Scope, verwacht pad en actuele status vastleggen",
            "Alle routes verwijderen en opnieuw beginnen",
            "De router herladen",
            "Elke interface trusted maken"
          ],
          "correctIndex": 0,
          "answer": "Scope, verwacht pad en actuele status vastleggen",
          "explanation": "Een bewijsgerichte baseline voorkomt dat symptomen worden gemaskeerd.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration",
            "beste",
            "eerste"
          ],
          "provenance": "original-ccna2-study-question"
        },
        {
          "id": "ccna2-m16-s01",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "diagnosis",
          "prompt": "ip route staat in running-config, maar de route ontbreekt in show ip route. De next hop is niet bereikbaar. Wat verklaart dit?",
          "choices": [
            "De static route kan niet recursief worden opgelost.",
            "De switch gebruikt cut-through.",
            "De host heeft een correcte gateway.",
            "De route heeft een /32 local entry."
          ],
          "correctIndex": 0,
          "answer": "De static route kan niet recursief worden opgelost.",
          "explanation": "Configuratie-intentie wordt pas geïnstalleerd wanneer next hop/exitpad bruikbaar is.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration",
            "staat",
            "running-config"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m16-s02",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "diagnosis",
          "prompt": "Een router kan het doel pingen vanaf zijn WAN-interface, maar een LAN-host niet. Welke ontbrekende controle is het belangrijkst?",
          "choices": [
            "Test met de LAN-bron en controleer het retourpad.",
            "Verwijder alle routes.",
            "Maak elke poort trusted.",
            "Schakel DTP in."
          ],
          "correctIndex": 0,
          "answer": "Test met de LAN-bron en controleer het retourpad.",
          "explanation": "Een routerping kan een ander bronadres en daardoor een ander retourpad gebruiken.",
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration",
            "router",
            "doel"
          ],
          "provenance": "original-ccna2-diagnosis-scenario"
        },
        {
          "id": "ccna2-m16-f01",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.1",
          "sectionTitle": "Packet Processing with Static Routes",
          "type": "flashcard",
          "front": "16.1 · Packet Processing with Static Routes",
          "back": "De bronhost beslist local of remote, resolveert doel of gateway met ARP/NDP en verzendt een frame. Elke router decapsuleert, longest-prefix-matcht, resolveert zijn next hop en encapsuleert opnieuw. Bij een recursive static route moet zowel de statische prefix als een route naar de next hop bestaan. Verdwijnt de resolutie, dan kan de static route uit de RIB verdwijnen. ICMP echo request en reply zijn onafhankelijke routed pakketten. Een succesvolle heenweg zonder terugroute geeft time-outs, geen halve ping.",
          "commands": "show ip route <destination>\nshow ip route <next-hop>\nshow arp\ntraceroute <destination>",
          "verify": [
            "Elke hop heeft forward route",
            "Elke next hop is L2-resolved",
            "Retourroute vanaf bestemming aanwezig"
          ],
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "packet",
            "processing",
            "with"
          ],
          "provenance": "original-ccna2-flashcard"
        },
        {
          "id": "ccna2-m16-f02",
          "courseId": "ccna2-srwe",
          "moduleId": 16,
          "moduleTitle": "Troubleshoot Static and Default Routes",
          "sectionId": "16.2",
          "sectionTitle": "Troubleshoot IPv4 Static and Default Route Configuration",
          "type": "flashcard",
          "front": "16.2 · Troubleshoot IPv4 Static and Default Route Configuration",
          "back": "Begin met probleemscope en gewenste pad. Controleer interface up/up en adressen, connected routes, daarna de exacte bestemmingsprefix, mask, next hop/exitinterface en AD. Veel fouten: verkeerd netwerk/masker, next hop op verkeerd subnet, shutdown interface, ontbrekende retourroute, default naar verkeerde buur, te specifieke blackhole of floating AD lager dan bedoeld. Gebruik show running-config om intentie te zien en show ip route om geïnstalleerde werkelijkheid te zien. Een regel in running-config is niet noodzakelijk actief in de RIB. Gebruik ping met source om een specifieke routecontext te testen en traceroute om het laatste antwoordende hopgebied te vinden. Debug alleen beperkt in een lab; counters en tabellen zijn veiliger.",
          "commands": "show ip interface brief\nshow ip route\nshow running-config | include ^ip route\nshow cdp neighbors detail\nping <doel> source <bron-interface>\ntraceroute <doel>",
          "verify": [
            "Fout bewezen vóór wijziging",
            "Exacte route-entry na fix actief",
            "End-to-end + return path getest",
            "Configuratie opgeslagen"
          ],
          "tags": [
            "troubleshoot",
            "static",
            "and",
            "default",
            "routes",
            "ipv4",
            "route",
            "configuration"
          ],
          "provenance": "original-ccna2-flashcard"
        }
      ]
    }
  ]
};
