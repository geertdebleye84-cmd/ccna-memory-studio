window.CCNA3_QA_LIBRARY = {
  "schemaVersion": 1,
  "courseId": "ccna3-ensa",
  "title": "CCNA3 Vraag, Diagnose & Flashcard Library",
  "masteryRule": {
    "requiredCorrect": 2,
    "minimumAccuracy": 0.6,
    "assessedTypes": [
      "multiple-choice",
      "diagnostic"
    ],
    "flashcardsAffectMastery": false
  },
  "modules": [
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 1,
        "title": "Single-Area OSPFv2 Concepts",
        "summary": "Begrijp waarom OSPF link-state-informatie uitwisselt, buren vormt en voor elk doel het kortste pad berekent."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m01-mc-01",
          "type": "multiple-choice",
          "sectionId": "1.1",
          "sectionTitle": "OSPF Features and Characteristics",
          "prompt": "Welke OSPF-database hoort binnen één area inhoudelijk gelijk te zijn?",
          "choices": [
            "De link-state database",
            "De ARP-cache",
            "De running-config",
            "De NAT-tabel"
          ],
          "correctIndex": 0,
          "answer": "De link-state database",
          "explanation": "LSA-flooding zorgt voor een gesynchroniseerde LSDB.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "features",
            "and",
            "characteristics",
            "ospf-database",
            "hoort",
            "binnen"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m01-mc-02",
          "type": "multiple-choice",
          "sectionId": "1.2",
          "sectionTitle": "OSPF Packets",
          "prompt": "Welk pakket vraagt specifieke ontbrekende LSDB-informatie?",
          "choices": [
            "LSR",
            "Hello",
            "LSAck",
            "ARP"
          ],
          "correctIndex": 0,
          "answer": "LSR",
          "explanation": "Een Link-State Request vraagt de benodigde LSA’s op.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "packets",
            "welk",
            "pakket",
            "vraagt",
            "specifieke",
            "ontbrekende"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m01-mc-03",
          "type": "multiple-choice",
          "sectionId": "1.3",
          "sectionTitle": "OSPF Operation",
          "prompt": "Wat berekent het SPF-algoritme?",
          "choices": [
            "Een shortest-path tree vanuit de lokale router",
            "Een MAC-adrestabel",
            "Een DHCP-pool",
            "Een encryptiesleutel"
          ],
          "correctIndex": 0,
          "answer": "Een shortest-path tree vanuit de lokale router",
          "explanation": "SPF gebruikt de LSDB om beste paden te bepalen.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "operation",
            "berekent",
            "spf-algoritme"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m01-diag-01",
          "type": "diagnostic",
          "sectionId": "1.2",
          "sectionTitle": "OSPF Packets",
          "prompt": "Een OSPF-router kent de samenvatting van een LSA, maar mist de volledige informatie in zijn LSDB. Welk pakket past bij de volgende stap?",
          "choices": [
            "LSR",
            "Hello",
            "ARP Request",
            "DHCP Discover"
          ],
          "correctIndex": 0,
          "answer": "LSR",
          "explanation": "Een Link-State Request vraagt de ontbrekende LSA gericht op.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "packets",
            "ospf-router",
            "kent",
            "samenvatting",
            "lsa",
            "maar"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m01-diag-02",
          "type": "diagnostic",
          "sectionId": "1.3",
          "sectionTitle": "OSPF Operation",
          "prompt": "Twee routers op hetzelfde broadcastsegment blijven onderling in 2-Way, terwijl beide met de DR Full zijn. Wat is de waarschijnlijkste verklaring?",
          "choices": [
            "Dit is normaal voor twee DROTHER-routers",
            "De router-ID is dubbel",
            "De dead timer is verlopen",
            "IP-protocol 89 wordt geblokkeerd"
          ],
          "correctIndex": 0,
          "answer": "Dit is normaal voor twee DROTHER-routers",
          "explanation": "DROTHERs vormen onderling geen volledige adjacency en kunnen normaal 2-Way blijven.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "operation",
            "twee",
            "routers",
            "hetzelfde",
            "broadcastsegment",
            "blijven"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m01-flash-01",
          "type": "flashcard",
          "sectionId": "1.1",
          "sectionTitle": "OSPF Features and Characteristics",
          "front": "Wat moet je kunnen uitleggen over OSPF Features and Characteristics?",
          "back": "OSPF is een open link-state IGP. Routers bouwen binnen een area dezelfde link-state database (LSDB) en gebruiken SPF om routes te berekenen; dit verschilt van het periodiek doorgeven van een volledige routingtabel. De metric cost is gebaseerd op bandbreedte ten opzichte van een reference bandwidth. OSPF ondersteunt VLSM, CIDR, equal-cost load balancing, hiërarchische areas en snelle, getriggerde convergentie.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "features",
            "and",
            "characteristics",
            "open",
            "link-state",
            "igp."
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m01-flash-02",
          "type": "flashcard",
          "sectionId": "1.2",
          "sectionTitle": "OSPF Packets",
          "front": "Wat moet je kunnen uitleggen over OSPF Packets?",
          "back": "Hello-pakketten ontdekken en onderhouden buren. DBD vat de LSDB samen, LSR vraagt ontbrekende informatie, LSU vervoert LSA’s en LSAck bevestigt ontvangst. OSPF gebruikt IP-protocol 89. Multicast 224.0.0.5 bereikt alle OSPF-routers; 224.0.0.6 richt zich op DR en BDR op multiaccessnetwerken.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "packets",
            "hello-pakketten",
            "ontdekken",
            "onderhouden",
            "buren.",
            "dbd"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m01-flash-03",
          "type": "flashcard",
          "sectionId": "1.3",
          "sectionTitle": "OSPF Operation",
          "front": "Wat moet je kunnen uitleggen over OSPF Operation?",
          "back": "Buren doorlopen states van Down en Init naar 2-Way; alleen routers die een adjacency moeten vormen gaan verder via ExStart, Exchange en Loading naar Full. Na synchronisatie floodt OSPF wijzigingen betrouwbaar. SPF berekent een shortest-path tree met de lokale router als wortel en installeert de beste routes in de routingtabel.",
          "tags": [
            "single-area",
            "ospfv2",
            "concepts",
            "ospf",
            "operation",
            "buren",
            "doorlopen",
            "states",
            "down",
            "init"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-01.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 2,
        "title": "Single-Area OSPFv2 Configuration",
        "summary": "Configureer, optimaliseer en controleer OSPFv2 in één area, inclusief router-ID, DR/BDR en default-routepropagatie."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 4
      },
      "multipleChoice": [
        {
          "id": "ccna3-m02-mc-01",
          "type": "multiple-choice",
          "sectionId": "2.1",
          "sectionTitle": "OSPF Router ID",
          "prompt": "Welke router wordt bij gelijke OSPF-priority DR?",
          "choices": [
            "De hoogste router-ID",
            "De laagste cost",
            "De laagste router-ID",
            "De hoogste process-id"
          ],
          "correctIndex": 0,
          "answer": "De hoogste router-ID",
          "explanation": "Router-ID is de tiebreaker.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "ospf",
            "router",
            "gelijke",
            "ospf-priority"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m02-mc-02",
          "type": "multiple-choice",
          "sectionId": "2.2",
          "sectionTitle": "Point-to-Point OSPF Networks",
          "prompt": "Wat doet passive-interface?",
          "choices": [
            "Het netwerk blijft geadverteerd, maar er worden geen Hellos verstuurd.",
            "Het verwijdert de connected route.",
            "Het schakelt SPF uit.",
            "Het maakt de interface DR."
          ],
          "correctIndex": 0,
          "answer": "Het netwerk blijft geadverteerd, maar er worden geen Hellos verstuurd.",
          "explanation": "Passief voorkomt buren op een interface zonder de prefix te verbergen.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "point-to-point",
            "ospf",
            "networks",
            "doet",
            "passive-interface"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m02-mc-03",
          "type": "multiple-choice",
          "sectionId": "2.3",
          "sectionTitle": "Multiaccess OSPF Networks",
          "prompt": "Wat is nodig voor normale default-information originate?",
          "choices": [
            "Een default route in de lokale routingtabel",
            "Een loopback met /32",
            "Priority 0",
            "Een DR op elke link"
          ],
          "correctIndex": 0,
          "answer": "Een default route in de lokale routingtabel",
          "explanation": "OSPF adverteert standaard alleen een bestaande default.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "multiaccess",
            "ospf",
            "networks",
            "nodig",
            "normale",
            "default-information",
            "originate"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m02-diag-01",
          "type": "diagnostic",
          "sectionId": "2.3",
          "sectionTitle": "Multiaccess OSPF Networks",
          "prompt": "Een router met hogere OSPF-priority komt later online, maar de bestaande DR blijft DR. Wat verklaart dit?",
          "choices": [
            "De DR-verkiezing is niet-preemptive",
            "De hoogste priority wordt altijd DROTHER",
            "Process-ID’s moeten gelijk zijn",
            "De nieuwe router gebruikt area 1"
          ],
          "correctIndex": 0,
          "answer": "De DR-verkiezing is niet-preemptive",
          "explanation": "Een bestaande gezonde DR wordt niet automatisch verdrongen door een later betere kandidaat.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "multiaccess",
            "ospf",
            "networks",
            "router",
            "hogere",
            "ospf-priority",
            "komt"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m02-diag-02",
          "type": "diagnostic",
          "sectionId": "2.4",
          "sectionTitle": "Modify and Verify Single-Area OSPFv2",
          "prompt": "OSPF-buren zien alle interne prefixes, maar geen default route vanaf de edge. Wat controleer je eerst?",
          "choices": [
            "Of de edge zelf een default route heeft",
            "Of alle routers priority 0 hebben",
            "Of ARP is uitgeschakeld",
            "Of de DR een loopback mist"
          ],
          "correctIndex": 0,
          "answer": "Of de edge zelf een default route heeft",
          "explanation": "Normale default-information originate adverteert alleen een bestaande lokale default route.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "modify",
            "and",
            "verify",
            "ospf-buren",
            "zien",
            "alle",
            "interne"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m02-flash-01",
          "type": "flashcard",
          "sectionId": "2.1",
          "sectionTitle": "OSPF Router ID",
          "front": "Wat moet je kunnen uitleggen over OSPF Router ID?",
          "back": "De router-ID is een 32-bits identificator en hoeft geen bereikbaar IPv4-adres te zijn. IOS kiest expliciete router-id, anders hoogste loopbackadres, anders hoogste actieve interfaceadres. Wijziging van de router-ID vereist doorgaans herstart van het OSPF-proces of een reload; dubbele IDs voorkomen betrouwbare LSDB-synchronisatie.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "ospf",
            "router",
            "router-id",
            "32-bits",
            "identificator",
            "hoeft",
            "geen"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m02-flash-02",
          "type": "flashcard",
          "sectionId": "2.2",
          "sectionTitle": "Point-to-Point OSPF Networks",
          "front": "Wat moet je kunnen uitleggen over Point-to-Point OSPF Networks?",
          "back": "Activeer OSPF met network plus wildcard en area, of direct op de interface met ip ospf process-id area area-id. Het process-id is lokaal en hoeft tussen buren niet gelijk te zijn. Op point-to-pointnetwerken is geen DR/BDR nodig. passive-interface voorkomt Hellos op gebruikers-LANs maar blijft het aangesloten netwerk adverteren.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "point-to-point",
            "ospf",
            "networks",
            "activeer",
            "network",
            "plus",
            "wildcard"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m02-flash-03",
          "type": "flashcard",
          "sectionId": "2.3",
          "sectionTitle": "Multiaccess OSPF Networks",
          "front": "Wat moet je kunnen uitleggen over Multiaccess OSPF Networks?",
          "back": "Op Ethernet reduceert een DR/BDR het aantal volledige adjacencies. Hoogste interfacepriority wint; priority 0 sluit een router uit. Bij gelijke priority wint de hoogste router-ID. De verkiezing is niet-preemptive: een later gestarte betere kandidaat neemt de rol niet automatisch over. DROTHERs zijn onderling normaal 2-Way.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "multiaccess",
            "ospf",
            "networks",
            "ethernet",
            "reduceert",
            "dr/bdr",
            "aantal"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m02-flash-04",
          "type": "flashcard",
          "sectionId": "2.4",
          "sectionTitle": "Modify and Verify Single-Area OSPFv2",
          "front": "Wat moet je kunnen uitleggen over Modify and Verify Single-Area OSPFv2?",
          "back": "Hello/dead timers, area, authenticatie, MTU en netwerktype moeten compatibel zijn. Cost kan direct worden gezet of uit interfacebandbreedte en reference bandwidth voortkomen. Advertiseer een aanwezige default route met default-information originate. Controleer eerst of de ASBR zelf 0.0.0.0/0 in zijn routingtabel heeft.",
          "tags": [
            "single-area",
            "ospfv2",
            "configuration",
            "modify",
            "and",
            "verify",
            "hello/dead",
            "timers",
            "area",
            "authenticatie"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-02.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 3,
        "title": "Network Security Concepts",
        "summary": "Herken dreigingsactoren, aanvalsvormen en verdedigingslagen en verbind technische maatregelen met vertrouwelijkheid, integriteit en beschikbaarheid."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 4
      },
      "multipleChoice": [
        {
          "id": "ccna3-m03-mc-01",
          "type": "multiple-choice",
          "sectionId": "3.1",
          "sectionTitle": "Threat Landscape and Actors",
          "prompt": "Welke maatregel beperkt laterale beweging na een endpointcompromis?",
          "choices": [
            "Segmentatie",
            "Een langere banner",
            "Een extra DNS-alias",
            "Alleen NAT"
          ],
          "correctIndex": 0,
          "answer": "Segmentatie",
          "explanation": "Segmentatie verkleint bereikbare zones en afdwingpunten.",
          "tags": [
            "network",
            "security",
            "concepts",
            "threat",
            "landscape",
            "and",
            "actors",
            "maatregel",
            "beperkt",
            "laterale"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m03-mc-02",
          "type": "multiple-choice",
          "sectionId": "3.2",
          "sectionTitle": "Malware and Common Network Attacks",
          "prompt": "Welke cryptografische functie levert vooral integriteitsbewijs?",
          "choices": [
            "Hashfunctie",
            "NAT",
            "DHCP",
            "QoS"
          ],
          "correctIndex": 0,
          "answer": "Hashfunctie",
          "explanation": "Een gewijzigde invoer hoort een andere digest te produceren.",
          "tags": [
            "network",
            "security",
            "concepts",
            "malware",
            "and",
            "common",
            "attacks",
            "cryptografische",
            "functie",
            "levert"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m03-mc-03",
          "type": "multiple-choice",
          "sectionId": "3.3",
          "sectionTitle": "Protocol Vulnerabilities",
          "prompt": "Waarom is defense in depth nuttig?",
          "choices": [
            "Een tweede laag kan een falende eerste laag opvangen.",
            "Elke laag gebruikt hetzelfde wachtwoord.",
            "Het verwijdert de noodzaak voor logging.",
            "Het maakt patches overbodig."
          ],
          "correctIndex": 0,
          "answer": "Een tweede laag kan een falende eerste laag opvangen.",
          "explanation": "Onafhankelijke controles verkleinen single points of failure.",
          "tags": [
            "network",
            "security",
            "concepts",
            "protocol",
            "vulnerabilities",
            "defense",
            "depth",
            "nuttig"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m03-diag-01",
          "type": "diagnostic",
          "sectionId": "3.3",
          "sectionTitle": "Protocol Vulnerabilities",
          "prompt": "Een dienst ontvangt enorme UDP-antwoorden op verzoeken met een vervalst slachtofferadres. Welke aanval past het best?",
          "choices": [
            "Reflectie/amplificatie",
            "VLAN pruning",
            "OSPF summarization",
            "Duplex mismatch"
          ],
          "correctIndex": 0,
          "answer": "Reflectie/amplificatie",
          "explanation": "UDP maakt bronspoofing en reflectie via veel grotere antwoorden mogelijk.",
          "tags": [
            "network",
            "security",
            "concepts",
            "protocol",
            "vulnerabilities",
            "dienst",
            "ontvangt",
            "enorme",
            "udp-antwoorden",
            "verzoeken"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m03-diag-02",
          "type": "diagnostic",
          "sectionId": "3.4",
          "sectionTitle": "Security Best Practices and Cryptography",
          "prompt": "Een bestand is niet geheim, maar iedere ongeautoriseerde wijziging moet aantoonbaar zijn. Welke techniek past primair?",
          "choices": [
            "Cryptografische hash",
            "NAT overload",
            "DHCP snooping",
            "QoS shaping"
          ],
          "correctIndex": 0,
          "answer": "Cryptografische hash",
          "explanation": "Een hash levert een controleerbare digest voor integriteit.",
          "tags": [
            "network",
            "security",
            "concepts",
            "best",
            "practices",
            "and",
            "cryptography",
            "bestand",
            "niet",
            "geheim"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m03-flash-01",
          "type": "flashcard",
          "sectionId": "3.1",
          "sectionTitle": "Threat Landscape and Actors",
          "front": "Wat moet je kunnen uitleggen over Threat Landscape and Actors?",
          "back": "Cyberrisico ontstaat door de combinatie van dreiging, kwetsbaarheid en impact. Interne fouten, georganiseerde criminaliteit, hacktivisten en statelijke actoren verschillen in middelen en motief. Indicatoren en threat intelligence helpen prioriteren, maar assetinventaris, patching en least privilege blijven de basis.",
          "tags": [
            "network",
            "security",
            "concepts",
            "threat",
            "landscape",
            "and",
            "actors",
            "cyberrisico",
            "ontstaat",
            "combinatie"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m03-flash-02",
          "type": "flashcard",
          "sectionId": "3.2",
          "sectionTitle": "Malware and Common Network Attacks",
          "front": "Wat moet je kunnen uitleggen over Malware and Common Network Attacks?",
          "back": "Virussen hebben een hostbestand nodig; worms verspreiden zelfstandig; trojans misleiden de gebruiker; ransomware versleutelt of blokkeert data. Social engineering richt zich op menselijke beslissingen. Reconnaissance, access en denial-of-service kunnen elkaar opvolgen. Spoofing vervalst identiteit; man-in-the-middle onderschept of wijzigt verkeer.",
          "tags": [
            "network",
            "security",
            "concepts",
            "malware",
            "and",
            "common",
            "attacks",
            "virussen",
            "hebben",
            "hostbestand"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m03-flash-03",
          "type": "flashcard",
          "sectionId": "3.3",
          "sectionTitle": "Protocol Vulnerabilities",
          "front": "Wat moet je kunnen uitleggen over Protocol Vulnerabilities?",
          "back": "IP biedt op zichzelf geen bronauthenticatie. Fragmentatie, spoofing en ICMP-misbruik vragen filtering en rate limits zonder legitieme foutmeldingen volledig te blokkeren. TCP is gevoelig voor SYN-flooding en sessiemisbruik; UDP heeft geen handshake en is bruikbaar voor reflectie/amplificatie. DNS, DHCP, HTTP en e-mail vragen elk eigen bescherming.",
          "tags": [
            "network",
            "security",
            "concepts",
            "protocol",
            "vulnerabilities",
            "biedt",
            "zichzelf",
            "geen",
            "bronauthenticatie.",
            "fragmentatie"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m03-flash-04",
          "type": "flashcard",
          "sectionId": "3.4",
          "sectionTitle": "Security Best Practices and Cryptography",
          "front": "Wat moet je kunnen uitleggen over Security Best Practices and Cryptography?",
          "back": "Defense in depth combineert segmentatie, AAA, patches, back-ups, monitoring, fysieke beveiliging en een incidentplan. Geen enkele maatregel dekt alle aanvalspaden. Symmetrische encryptie is snel; asymmetrische cryptografie helpt bij sleuteluitwisseling en digitale handtekeningen. Hashes leveren integriteitsbewijs; certificaten binden een publieke sleutel aan een identiteit.",
          "tags": [
            "network",
            "security",
            "concepts",
            "best",
            "practices",
            "and",
            "cryptography",
            "defense",
            "depth",
            "combineert"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-03.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 4,
        "title": "ACL Concepts",
        "summary": "Ontwerp IPv4-ACLs met correcte volgorde, wildcardmaskers en plaatsing voordat je ze op interfaces toepast."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m04-mc-01",
          "type": "multiple-choice",
          "sectionId": "4.1",
          "sectionTitle": "Purpose and Operation of ACLs",
          "prompt": "Wat gebeurt er bij de eerste passende ACE?",
          "choices": [
            "De bijbehorende actie wordt uitgevoerd en verdere ACEs worden niet bekeken.",
            "Alle ACEs worden opgeteld.",
            "Alleen de laatste ACE telt.",
            "De route wordt altijd verwijderd."
          ],
          "correctIndex": 0,
          "answer": "De bijbehorende actie wordt uitgevoerd en verdere ACEs worden niet bekeken.",
          "explanation": "ACL-verwerking is first match.",
          "tags": [
            "acl",
            "concepts",
            "purpose",
            "and",
            "operation",
            "acls",
            "gebeurt",
            "eerste",
            "passende",
            "ace"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m04-mc-02",
          "type": "multiple-choice",
          "sectionId": "4.2",
          "sectionTitle": "Wildcard Masks",
          "prompt": "Welke wildcard hoort bij een /26-subnetmasker?",
          "choices": [
            "0.0.0.63",
            "255.255.255.192",
            "0.0.0.192",
            "255.255.255.63"
          ],
          "correctIndex": 0,
          "answer": "0.0.0.63",
          "explanation": "255.255.255.192 omgekeerd is 0.0.0.63.",
          "tags": [
            "acl",
            "concepts",
            "wildcard",
            "masks",
            "hoort",
            "26-subnetmasker"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m04-mc-03",
          "type": "multiple-choice",
          "sectionId": "4.3",
          "sectionTitle": "ACL Design Guidelines and Types",
          "prompt": "Waar plaats je een extended ACL doorgaans?",
          "choices": [
            "Dicht bij de bron",
            "Dicht bij de bestemming",
            "Alleen op loopbacks",
            "Uitsluitend outbound"
          ],
          "correctIndex": 0,
          "answer": "Dicht bij de bron",
          "explanation": "Zo wordt ongewenst verkeer vroeg gestopt.",
          "tags": [
            "acl",
            "concepts",
            "design",
            "guidelines",
            "and",
            "types",
            "waar",
            "plaats",
            "extended",
            "doorgaans"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m04-diag-01",
          "type": "diagnostic",
          "sectionId": "4.1",
          "sectionTitle": "Purpose and Operation of ACLs",
          "prompt": "Een pakket matcht ACE 20. ACE 30 zou het verkeer toestaan, maar ACE 20 weigert het. Wat gebeurt er?",
          "choices": [
            "Het pakket wordt bij ACE 20 geweigerd",
            "ACE 30 overschrijft ACE 20",
            "De ACL telt beide acties op",
            "De route kiest de ACE met laagste cost"
          ],
          "correctIndex": 0,
          "answer": "Het pakket wordt bij ACE 20 geweigerd",
          "explanation": "ACLs stoppen bij de eerste match.",
          "tags": [
            "acl",
            "concepts",
            "purpose",
            "and",
            "operation",
            "acls",
            "pakket",
            "matcht",
            "ace",
            "20."
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m04-diag-02",
          "type": "diagnostic",
          "sectionId": "4.3",
          "sectionTitle": "ACL Design Guidelines and Types",
          "prompt": "Je wilt HTTPS van één gebruikers-LAN naar één server toestaan en al het overige vroeg blokkeren. Welk ACL-type en welke plaatsing passen?",
          "choices": [
            "Extended ACL dicht bij de bron",
            "Standard ACL dicht bij de bron",
            "Standard ACL dicht bij de bestemming zonder poort",
            "Alleen een VTY access-class"
          ],
          "correctIndex": 0,
          "answer": "Extended ACL dicht bij de bron",
          "explanation": "Een extended ACL kan bron, bestemming, protocol en poort vroeg in het pad matchen.",
          "tags": [
            "acl",
            "concepts",
            "design",
            "guidelines",
            "and",
            "types",
            "wilt",
            "https",
            "gebruikers-lan",
            "server"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m04-flash-01",
          "type": "flashcard",
          "sectionId": "4.1",
          "sectionTitle": "Purpose and Operation of ACLs",
          "front": "Wat moet je kunnen uitleggen over Purpose and Operation of ACLs?",
          "back": "Een ACL bestaat uit geordende ACEs. IOS stopt bij de eerste match; zonder match geldt een impliciete deny any aan het einde. Inbound filtering gebeurt vóór de routebeslissing; outbound filtering erna. Eén IPv4-ACL per protocol, richting en interface kan actief zijn.",
          "tags": [
            "acl",
            "concepts",
            "purpose",
            "and",
            "operation",
            "acls",
            "bestaat",
            "geordende",
            "aces.",
            "ios"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m04-flash-02",
          "type": "flashcard",
          "sectionId": "4.2",
          "sectionTitle": "Wildcard Masks",
          "front": "Wat moet je kunnen uitleggen over Wildcard Masks?",
          "back": "Een wildcardbit 0 moet overeenkomen; bit 1 wordt genegeerd. Een subnetwildcard is meestal het omgekeerde masker, bijvoorbeeld /24 naar 0.0.0.255. host 192.0.2.10 is gelijk aan 192.0.2.10 0.0.0.0; any is gelijk aan 0.0.0.0 255.255.255.255. Niet-contigue wildcards zijn mogelijk maar lastiger te beoordelen.",
          "tags": [
            "acl",
            "concepts",
            "wildcard",
            "masks",
            "wildcardbit",
            "moet",
            "overeenkomen",
            "bit",
            "genegeerd.",
            "subnetwildcard"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m04-flash-03",
          "type": "flashcard",
          "sectionId": "4.3",
          "sectionTitle": "ACL Design Guidelines and Types",
          "front": "Wat moet je kunnen uitleggen over ACL Design Guidelines and Types?",
          "back": "Standaard-ACLs kijken alleen naar bron-IPv4 en staan doorgaans dicht bij de bestemming. Extended ACLs kijken ook naar protocol, bestemming en poorten en staan meestal dicht bij de bron. Specifieke regels horen vóór algemene regels. Gebruik remark, sequence numbers en een expliciet wijzigingsplan; test eerst zonder beheerconnectiviteit af te snijden.",
          "tags": [
            "acl",
            "concepts",
            "design",
            "guidelines",
            "and",
            "types",
            "standaard-acls",
            "kijken",
            "alleen",
            "bron-ipv4"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-04.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 5,
        "title": "ACLs for IPv4 Configuration",
        "summary": "Configureer, wijzig en verifieer standaard- en extended IPv4-ACLs zonder legitiem beheer- of retourverkeer te blokkeren."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 4
      },
      "multipleChoice": [
        {
          "id": "ccna3-m05-mc-01",
          "type": "multiple-choice",
          "sectionId": "5.1",
          "sectionTitle": "Configure Standard IPv4 ACLs",
          "prompt": "Welk commando past een ACL op VTY-lijnen toe?",
          "choices": [
            "access-class",
            "ip access-group",
            "service-policy",
            "ip nat inside"
          ],
          "correctIndex": 0,
          "answer": "access-class",
          "explanation": "VTY gebruikt access-class.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "configure",
            "standard",
            "welk",
            "commando",
            "past",
            "acl"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m05-mc-02",
          "type": "multiple-choice",
          "sectionId": "5.2",
          "sectionTitle": "Modify IPv4 ACLs",
          "prompt": "Waarom zijn sequence numbers nuttig?",
          "choices": [
            "Je kunt gericht regels invoegen of verwijderen.",
            "Ze versleutelen de ACL.",
            "Ze kiezen de routingmetric.",
            "Ze activeren stateful inspectie."
          ],
          "correctIndex": 0,
          "answer": "Je kunt gericht regels invoegen of verwijderen.",
          "explanation": "Sequence numbers maken gecontroleerd onderhoud mogelijk.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "modify",
            "sequence",
            "numbers",
            "nuttig"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m05-mc-03",
          "type": "multiple-choice",
          "sectionId": "5.3",
          "sectionTitle": "Secure VTY Access with an ACL",
          "prompt": "Wat matcht tcp established?",
          "choices": [
            "TCP-pakketten met ACK of RST gezet",
            "Elke nieuwe TCP-SYN",
            "Alle UDP-antwoorden",
            "Alleen HTTPS"
          ],
          "correctIndex": 0,
          "answer": "TCP-pakketten met ACK of RST gezet",
          "explanation": "Het is een eenvoudige vlagcontrole, geen sessietabel.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "secure",
            "vty",
            "access",
            "with",
            "acl",
            "matcht"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m05-diag-01",
          "type": "diagnostic",
          "sectionId": "5.3",
          "sectionTitle": "Secure VTY Access with an ACL",
          "prompt": "SSH werkt vanaf iedere host terwijl alleen 192.0.2.50 beheer mag uitvoeren. Welke ontbrekende maatregel is het waarschijnlijkst?",
          "choices": [
            "Een inbound access-class op de VTY-lijnen",
            "Een outbound NAT-regel",
            "Een hogere OSPF-cost",
            "Een LLDP-filter"
          ],
          "correctIndex": 0,
          "answer": "Een inbound access-class op de VTY-lijnen",
          "explanation": "VTY-bronnen worden met access-class beperkt.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "secure",
            "vty",
            "access",
            "with",
            "acl",
            "ssh"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m05-diag-02",
          "type": "diagnostic",
          "sectionId": "5.4",
          "sectionTitle": "Configure Extended IPv4 ACLs",
          "prompt": "DNS via UDP werkt, maar grote DNS-antwoorden via TCP falen. Welke ACL-omissie past het best?",
          "choices": [
            "TCP poort 53 is niet toegestaan",
            "ICMP echo is niet toegestaan",
            "SSH ontbreekt",
            "De wildcard is host 0.0.0.0"
          ],
          "correctIndex": 0,
          "answer": "TCP poort 53 is niet toegestaan",
          "explanation": "DNS gebruikt vooral UDP, maar kan voor grote antwoorden of zoneoverdracht TCP 53 gebruiken.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "configure",
            "extended",
            "dns",
            "via",
            "udp",
            "werkt"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m05-flash-01",
          "type": "flashcard",
          "sectionId": "5.1",
          "sectionTitle": "Configure Standard IPv4 ACLs",
          "front": "Wat moet je kunnen uitleggen over Configure Standard IPv4 ACLs?",
          "back": "Genummerde standaard ACLs gebruiken 1–99 of 1300–1999; named ACLs zijn leesbaarder en ondersteunen sequencebeheer. Ze matchen alleen het bronadres. Pas toe met ip access-group naam in|out. Controleer dat verkeer de gekozen interface werkelijk in die richting passeert.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "configure",
            "standard",
            "genummerde",
            "standaard",
            "gebruiken",
            "1300"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m05-flash-02",
          "type": "flashcard",
          "sectionId": "5.2",
          "sectionTitle": "Modify IPv4 ACLs",
          "front": "Wat moet je kunnen uitleggen over Modify IPv4 ACLs?",
          "back": "In named ACL-configuratiemodus kun je een ACE via sequence number verwijderen en op een nieuw nummer invoegen. Resequence maakt ruimte zonder de logica te veranderen. Wijzig live filters gecontroleerd: leg baseline vast, behoud een out-of-band pad en controleer hit counters na elke stap.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "modify",
            "named",
            "acl-configuratiemodus",
            "kun",
            "ace",
            "via"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m05-flash-03",
          "type": "flashcard",
          "sectionId": "5.3",
          "sectionTitle": "Secure VTY Access with an ACL",
          "front": "Wat moet je kunnen uitleggen over Secure VTY Access with an ACL?",
          "back": "access-class filtert inkomende VTY-sessies op bronadres; dit is anders dan ip access-group op een dataplane-interface. Combineer met SSH en login local of AAA. Een management-ACL is geen vervanging voor sterke authenticatie. Test vanaf een toegestane én geweigerde bron.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "secure",
            "vty",
            "access",
            "with",
            "acl",
            "access-class"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m05-flash-04",
          "type": "flashcard",
          "sectionId": "5.4",
          "sectionTitle": "Configure Extended IPv4 ACLs",
          "front": "Wat moet je kunnen uitleggen over Configure Extended IPv4 ACLs?",
          "back": "Extended ACEs noemen protocol, bron, bestemming en optioneel bron- of bestemmingspoort. established matcht alleen TCP met ACK of RST en is geen volledige stateful firewall. Gebruik eq voor één service, range voor poortbereik en icmp-types wanneer alleen specifieke controlemeldingen zijn toegestaan.",
          "tags": [
            "acls",
            "for",
            "ipv4",
            "configuration",
            "configure",
            "extended",
            "aces",
            "noemen",
            "protocol",
            "bron"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-05.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 6,
        "title": "NAT for IPv4",
        "summary": "Vertaal private en publieke IPv4-adressen met static NAT, dynamic NAT en PAT en diagnoseer vertalingen stap voor stap."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 5
      },
      "multipleChoice": [
        {
          "id": "ccna3-m06-mc-01",
          "type": "multiple-choice",
          "sectionId": "6.1",
          "sectionTitle": "NAT Characteristics and Terminology",
          "prompt": "Welke NAT-vorm deelt één publiek adres via poorten?",
          "choices": [
            "PAT",
            "Static NAT zonder overload",
            "OSPF",
            "GRE"
          ],
          "correctIndex": 0,
          "answer": "PAT",
          "explanation": "PAT gebruikt Layer-4-poorten om sessies te onderscheiden.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "characteristics",
            "and",
            "terminology",
            "nat-vorm",
            "deelt",
            "publiek",
            "adres"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m06-mc-02",
          "type": "multiple-choice",
          "sectionId": "6.2",
          "sectionTitle": "Static NAT",
          "prompt": "Wat gebeurt bij een uitgeputte dynamic-NAT-pool?",
          "choices": [
            "Nieuwe vertalingen kunnen niet worden aangemaakt.",
            "IOS schakelt automatisch over op IPv6.",
            "Alle bestaande entries verdwijnen.",
            "De ACL wordt een permit any."
          ],
          "correctIndex": 0,
          "answer": "Nieuwe vertalingen kunnen niet worden aangemaakt.",
          "explanation": "Zonder beschikbaar global adres kan geen nieuwe mapping ontstaan.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "static",
            "gebeurt",
            "uitgeputte",
            "dynamic-nat-pool"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m06-mc-03",
          "type": "multiple-choice",
          "sectionId": "6.3",
          "sectionTitle": "Dynamic NAT",
          "prompt": "Waar begin je bij ontbrekende NAT-vertalingen?",
          "choices": [
            "Controleer routing, interface-rollen en selectie-ACL.",
            "Wis altijd eerst de configuratie.",
            "Verander OSPF-area.",
            "Schakel logging uit."
          ],
          "correctIndex": 0,
          "answer": "Controleer routing, interface-rollen en selectie-ACL.",
          "explanation": "Deze drie voorwaarden bepalen of verkeer de NAT-regel bereikt en matcht.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "dynamic",
            "waar",
            "begin",
            "ontbrekende",
            "nat-vertalingen"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m06-diag-01",
          "type": "diagnostic",
          "sectionId": "6.4",
          "sectionTitle": "PAT",
          "prompt": "Tientallen inside-hosts verschijnen met hetzelfde publieke adres maar verschillende bronpoorten. Welke functie zie je?",
          "choices": [
            "PAT/overload",
            "Static NAT",
            "NAT64 zonder poorten",
            "OSPF ECMP"
          ],
          "correctIndex": 0,
          "answer": "PAT/overload",
          "explanation": "PAT onderscheidt gelijktijdige vertalingen met Layer-4-poorten.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "pat",
            "tientallen",
            "inside-hosts",
            "verschijnen",
            "hetzelfde",
            "publieke",
            "adres"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m06-diag-02",
          "type": "diagnostic",
          "sectionId": "6.3",
          "sectionTitle": "Dynamic NAT",
          "prompt": "De eerste vijf hosts krijgen een dynamic-NAT-vertaling; de zesde niet, hoewel routing en ACL kloppen. Wat is waarschijnlijk?",
          "choices": [
            "De publieke NAT-pool is uitgeput",
            "De DR is gewijzigd",
            "De switch heeft geen native VLAN",
            "NTP is niet gesynchroniseerd"
          ],
          "correctIndex": 0,
          "answer": "De publieke NAT-pool is uitgeput",
          "explanation": "Dynamic NAT zonder overload heeft voor iedere gelijktijdige mapping een pooladres nodig.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "dynamic",
            "eerste",
            "vijf",
            "hosts",
            "krijgen",
            "dynamic-nat-vertaling",
            "zesde"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m06-flash-01",
          "type": "flashcard",
          "sectionId": "6.1",
          "sectionTitle": "NAT Characteristics and Terminology",
          "front": "Wat moet je kunnen uitleggen over NAT Characteristics and Terminology?",
          "back": "Inside local is het bronadres zoals binnen gezien; inside global vertegenwoordigt die host buiten. Outside local/global beschrijven de externe host vanuit beide perspectieven. NAT spaart publieke IPv4-adressen en verbergt interne adressering, maar doorbreekt end-to-end-adressering en kan protocollen met ingebedde adressen bemoeilijken.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "characteristics",
            "and",
            "terminology",
            "inside",
            "local",
            "bronadres",
            "zoals"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m06-flash-02",
          "type": "flashcard",
          "sectionId": "6.2",
          "sectionTitle": "Static NAT",
          "front": "Wat moet je kunnen uitleggen over Static NAT?",
          "back": "Static NAT levert een vaste één-op-één mapping en past bij een intern aangeboden dienst. De publieke mapping moet extern naar de NAT-router worden gerouteerd. Markeer interfaces met ip nat inside/outside; de mapping alleen bepaalt niet automatisch firewallbeleid.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "static",
            "levert",
            "vaste",
            "n-op-",
            "mapping",
            "past",
            "intern"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m06-flash-03",
          "type": "flashcard",
          "sectionId": "6.3",
          "sectionTitle": "Dynamic NAT",
          "front": "Wat moet je kunnen uitleggen over Dynamic NAT?",
          "back": "Dynamic NAT koppelt toegestane inside-localadressen tijdelijk aan een pool van publieke adressen. Is de pool vol, dan wachten nieuwe hosts tot een vertaling verloopt. De ACL selecteert te vertalen bronnen en is hier geen directe permit/deny-filter op de interface.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "dynamic",
            "koppelt",
            "toegestane",
            "inside-localadressen",
            "tijdelijk",
            "pool",
            "publieke"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m06-flash-04",
          "type": "flashcard",
          "sectionId": "6.4",
          "sectionTitle": "PAT",
          "front": "Wat moet je kunnen uitleggen over PAT?",
          "back": "PAT multiplexeert veel inside-localhosts op één of enkele publieke adressen met unieke Layer-4-poorten; overload activeert dit gedrag. Een interfaceadres kan als inside global dienen. Retourverkeer wordt aan de translation table gekoppeld; unsolicited inbound verkeer heeft geen bestaande entry.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "pat",
            "multiplexeert",
            "veel",
            "inside-localhosts",
            "enkele",
            "publieke",
            "adressen"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m06-flash-05",
          "type": "flashcard",
          "sectionId": "6.5",
          "sectionTitle": "NAT Verification and NAT64",
          "front": "Wat moet je kunnen uitleggen over NAT Verification and NAT64?",
          "back": "Diagnoseer in volgorde: interfaceadres/routing, inside/outside-markering, ACL-match, translation en return route. clear ip nat translation verwijdert state en verstoort actieve sessies. NAT64 kan IPv6-clients met IPv4-diensten laten communiceren, maar is een migratiemechanisme; dual stack behoudt native bereikbaarheid waar mogelijk.",
          "tags": [
            "nat",
            "for",
            "ipv4",
            "verification",
            "and",
            "nat64",
            "diagnoseer",
            "volgorde",
            "interfaceadres/routing",
            "inside/outside-markering"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-06.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 7,
        "title": "WAN Concepts",
        "summary": "Vergelijk WAN-topologieën en transportopties op bereik, beheer, SLA, kosten, beveiliging en redundantie."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m07-mc-01",
          "type": "multiple-choice",
          "sectionId": "7.1",
          "sectionTitle": "Purpose and Operations of WANs",
          "prompt": "Wat markeert de demarc?",
          "choices": [
            "De grens tussen klant- en providerverantwoordelijkheid",
            "Het begin van elke VLAN",
            "De OSPF DR",
            "De DHCP-lease"
          ],
          "correctIndex": 0,
          "answer": "De grens tussen klant- en providerverantwoordelijkheid",
          "explanation": "De demarc maakt beheer- en storingsverantwoordelijkheid duidelijk.",
          "tags": [
            "wan",
            "concepts",
            "purpose",
            "and",
            "operations",
            "wans",
            "markeert",
            "demarc"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m07-mc-02",
          "type": "multiple-choice",
          "sectionId": "7.2",
          "sectionTitle": "Traditional and Modern WAN Connectivity",
          "prompt": "Welke metric raakt real-time spraak sterk?",
          "choices": [
            "Jitter",
            "Hostnaam",
            "VLAN-naam",
            "Flashgeheugen"
          ],
          "correctIndex": 0,
          "answer": "Jitter",
          "explanation": "Variatie in pakketvertraging verstoort playout.",
          "tags": [
            "wan",
            "concepts",
            "traditional",
            "and",
            "modern",
            "connectivity",
            "metric",
            "raakt",
            "real-time",
            "spraak"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m07-mc-03",
          "type": "multiple-choice",
          "sectionId": "7.3",
          "sectionTitle": "Internet-Based Connectivity",
          "prompt": "Waarom is internettransport vaak met VPN gecombineerd?",
          "choices": [
            "Voor authenticatie en vertrouwelijkheid over een onbetrouwbaar netwerk",
            "Om NAT altijd te verwijderen",
            "Om latency nul te maken",
            "Om een publieke SLA te garanderen"
          ],
          "correctIndex": 0,
          "answer": "Voor authenticatie en vertrouwelijkheid over een onbetrouwbaar netwerk",
          "explanation": "Een VPN beschermt de overlay, niet de fysieke performance.",
          "tags": [
            "wan",
            "concepts",
            "internet-based",
            "connectivity",
            "internettransport",
            "vaak",
            "vpn",
            "gecombineerd"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m07-diag-01",
          "type": "diagnostic",
          "sectionId": "7.1",
          "sectionTitle": "Purpose and Operations of WANs",
          "prompt": "Twee WAN-verbindingen vallen tegelijk uit bij één kabelbreuk buiten het gebouw. Welke ontwerpfout blijkt?",
          "choices": [
            "Beide logische paden delen dezelfde fysieke last mile",
            "De SLA bevat te veel metrics",
            "De CE gebruikt een hostname",
            "De provider gebruikt Ethernet"
          ],
          "correctIndex": 0,
          "answer": "Beide logische paden delen dezelfde fysieke last mile",
          "explanation": "Logische redundantie helpt niet wanneer beide paden één fysieke failure domain delen.",
          "tags": [
            "wan",
            "concepts",
            "purpose",
            "and",
            "operations",
            "wans",
            "twee",
            "wan-verbindingen",
            "vallen",
            "tegelijk"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m07-diag-02",
          "type": "diagnostic",
          "sectionId": "7.3",
          "sectionTitle": "Internet-Based Connectivity",
          "prompt": "Een thuiswerker bereikt internet, maar bedrijfsverkeer over de remote-access VPN heeft zeer hoge jitter. Welke eigenschap onderzoek je eerst?",
          "choices": [
            "Kwaliteit en congestie van de internet-underlay",
            "De OSPF DR in het datacenter",
            "De flashhash van de router",
            "De LLDP-neighbornaam"
          ],
          "correctIndex": 0,
          "answer": "Kwaliteit en congestie van de internet-underlay",
          "explanation": "De VPN-overlay blijft afhankelijk van latency, verlies en jitter in de underlay.",
          "tags": [
            "wan",
            "concepts",
            "internet-based",
            "connectivity",
            "thuiswerker",
            "bereikt",
            "internet",
            "maar",
            "bedrijfsverkeer",
            "remote-access"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m07-flash-01",
          "type": "flashcard",
          "sectionId": "7.1",
          "sectionTitle": "Purpose and Operations of WANs",
          "front": "Wat moet je kunnen uitleggen over Purpose and Operations of WANs?",
          "back": "Een WAN verbindt geografisch gescheiden LANs. De klant beheert CPE/CE; de provider beheert zijn PE- en kerninfrastructuur. Een demarcation point scheidt verantwoordelijkheden. Bandbreedte, latency, jitter, verlies, beschikbaarheid en SLA bepalen of een verbinding een toepassing ondersteunt. Redundantie moet fysieke en providerafhankelijkheden meenemen.",
          "tags": [
            "wan",
            "concepts",
            "purpose",
            "and",
            "operations",
            "wans",
            "verbindt",
            "geografisch",
            "gescheiden",
            "lans."
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m07-flash-02",
          "type": "flashcard",
          "sectionId": "7.2",
          "sectionTitle": "Traditional and Modern WAN Connectivity",
          "front": "Wat moet je kunnen uitleggen over Traditional and Modern WAN Connectivity?",
          "back": "Leased lines leveren voorspelbaar point-to-pointtransport maar kunnen duur zijn. Provider Ethernet en MPLS bieden beheerde schaal; oudere circuit- of celltechnieken zijn grotendeels legacy. SD-WAN gebruikt policies en meerdere underlays om verkeer centraal te sturen. De overlay neemt niet weg dat iedere underlay nog bereik, capaciteit en beveiliging nodig heeft.",
          "tags": [
            "wan",
            "concepts",
            "traditional",
            "and",
            "modern",
            "connectivity",
            "leased",
            "lines",
            "leveren",
            "voorspelbaar"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m07-flash-03",
          "type": "flashcard",
          "sectionId": "7.3",
          "sectionTitle": "Internet-Based Connectivity",
          "front": "Wat moet je kunnen uitleggen over Internet-Based Connectivity?",
          "back": "Broadband, fiber, cable, DSL, cellular en satelliet verschillen in asymmetrie, latency, datalimiet en beschikbaarheid. Internettransport vraagt doorgaans een VPN voor vertrouwelijkheid en authenticatie. Remote-access VPN bedient individuele gebruikers; site-to-site VPN verbindt netwerken. Een tweede internetprovider helpt alleen als stroom, last mile en edgeapparatuur ook voldoende redundant zijn.",
          "tags": [
            "wan",
            "concepts",
            "internet-based",
            "connectivity",
            "broadband",
            "fiber",
            "cable",
            "dsl",
            "cellular",
            "satelliet"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-07.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 8,
        "title": "VPN and IPsec Concepts",
        "summary": "Begrijp VPN-modellen en hoe IPsec met IKE, security associations, ESP en cryptografische algoritmen een beveiligde tunnel vormt."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m08-mc-01",
          "type": "multiple-choice",
          "sectionId": "8.1",
          "sectionTitle": "VPN Technology and Types",
          "prompt": "Welk IPsec-protocol biedt doorgaans encryptie?",
          "choices": [
            "ESP",
            "AH",
            "ARP",
            "LLDP"
          ],
          "correctIndex": 0,
          "answer": "ESP",
          "explanation": "ESP kan confidentiality en integriteit leveren.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "technology",
            "types",
            "welk",
            "ipsec-protocol",
            "biedt",
            "doorgaans"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m08-mc-02",
          "type": "multiple-choice",
          "sectionId": "8.2",
          "sectionTitle": "IPsec Services and Protocols",
          "prompt": "Welke taak voert IKE uit vóór IPsec-dataverkeer?",
          "choices": [
            "Peers authenticeren en SAs/sleutels onderhandelen",
            "Ethernetframes schakelen",
            "DHCP-leases uitdelen",
            "QoS-queues legen"
          ],
          "correctIndex": 0,
          "answer": "Peers authenticeren en SAs/sleutels onderhandelen",
          "explanation": "IKE bouwt het control-planevertrouwen voor IPsec.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "services",
            "protocols",
            "taak",
            "voert",
            "ike",
            "ipsec-dataverkeer"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m08-mc-03",
          "type": "multiple-choice",
          "sectionId": "8.3",
          "sectionTitle": "IKE and Cryptographic Choices",
          "prompt": "Wat beschermt tunnel mode?",
          "choices": [
            "Het volledige oorspronkelijke IP-pakket in een nieuw pakket",
            "Alleen de TCP-poort",
            "Alleen de Ethernet-FCS",
            "Uitsluitend DNS"
          ],
          "correctIndex": 0,
          "answer": "Het volledige oorspronkelijke IP-pakket in een nieuw pakket",
          "explanation": "Tunnel mode kapselt het originele pakket in.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "ike",
            "cryptographic",
            "choices",
            "beschermt",
            "tunnel",
            "mode"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m08-diag-01",
          "type": "diagnostic",
          "sectionId": "8.3",
          "sectionTitle": "IKE and Cryptographic Choices",
          "prompt": "IKEv2 staat READY, maar IPsec encap/decap blijft nul tijdens verkeer. Wat is de waarschijnlijkste volgende controle?",
          "choices": [
            "Traffic selectors en routes",
            "CDP op de accesspoort",
            "NTP-stratum",
            "STP root priority"
          ],
          "correctIndex": 0,
          "answer": "Traffic selectors en routes",
          "explanation": "Een gezonde IKE SA bewijst niet dat interessant verkeer de IPsec selectors matcht.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "ike",
            "cryptographic",
            "choices",
            "ikev2",
            "staat",
            "ready"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m08-diag-02",
          "type": "diagnostic",
          "sectionId": "8.2",
          "sectionTitle": "IPsec Services and Protocols",
          "prompt": "Een site-to-site VPN moet het volledige oorspronkelijke IP-pakket tussen gateways beschermen. Welke mode past?",
          "choices": [
            "Tunnel mode",
            "Transport mode",
            "Access mode",
            "Passive mode"
          ],
          "correctIndex": 0,
          "answer": "Tunnel mode",
          "explanation": "Tunnel mode kapselt het volledige oorspronkelijke pakket in een nieuw IP-pakket.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "services",
            "protocols",
            "site-to-site",
            "moet",
            "volledige",
            "oorspronkelijke"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m08-flash-01",
          "type": "flashcard",
          "sectionId": "8.1",
          "sectionTitle": "VPN Technology and Types",
          "front": "Wat moet je kunnen uitleggen over VPN Technology and Types?",
          "back": "Een VPN creëert een logische private verbinding over een gedeeld netwerk. Site-to-site koppelt gateways en netwerken; remote access koppelt een endpoint aan een organisatie. Client-based VPN gebruikt software; clientless toegang beperkt zich vaak tot webapplicaties. Full tunnel stuurt al het verkeer via de organisatie, split tunnel alleen geselecteerde prefixes.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "technology",
            "types",
            "cre",
            "ert",
            "logische",
            "private"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m08-flash-02",
          "type": "flashcard",
          "sectionId": "8.2",
          "sectionTitle": "IPsec Services and Protocols",
          "front": "Wat moet je kunnen uitleggen over IPsec Services and Protocols?",
          "back": "IPsec kan data-origin authentication, integriteit, anti-replay en vertrouwelijkheid leveren. AH authenticeert maar versleutelt niet; ESP is gebruikelijk en kan encryptie plus authenticatie bieden. Transport mode beschermt de payload van het oorspronkelijke IP-pakket; tunnel mode kapselt het volledige oorspronkelijke pakket in en past bij gateway-naar-gateway VPNs.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "services",
            "protocols",
            "data-origin",
            "authentication",
            "integriteit",
            "anti-replay"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m08-flash-03",
          "type": "flashcard",
          "sectionId": "8.3",
          "sectionTitle": "IKE and Cryptographic Choices",
          "front": "Wat moet je kunnen uitleggen over IKE and Cryptographic Choices?",
          "back": "IKE authenticeert peers, onderhandelt algoritmen en maakt SAs en sleutelmateriaal. De peers moeten proposals, identiteit, authenticatie en traffic selectors compatibel configureren. Gebruik actuele combinaties zoals AES, SHA-2 en sterke Diffie-Hellmangroepen volgens organisatiebeleid. PFS zorgt dat nieuwe IPsec-sleutels niet uitsluitend van eerder sleutelmateriaal afhangen.",
          "tags": [
            "vpn",
            "and",
            "ipsec",
            "concepts",
            "ike",
            "cryptographic",
            "choices",
            "authenticeert",
            "peers",
            "onderhandelt"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-08.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 9,
        "title": "QoS Concepts",
        "summary": "Classificeer netwerkverkeer en beheer congestie met marking, queuing, shaping, policing en een passend QoS-model."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m09-mc-01",
          "type": "multiple-choice",
          "sectionId": "9.1",
          "sectionTitle": "Network Transmission Quality",
          "prompt": "Welke QoS-tool buffert excess verkeer om de verzendsnelheid af te vlakken?",
          "choices": [
            "Shaping",
            "Policing",
            "NAT",
            "OSPF"
          ],
          "correctIndex": 0,
          "answer": "Shaping",
          "explanation": "Shaping vertraagt pakketten via een wachtrij.",
          "tags": [
            "qos",
            "concepts",
            "network",
            "transmission",
            "quality",
            "qos-tool",
            "buffert",
            "excess",
            "verkeer",
            "verzendsnelheid"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m09-mc-02",
          "type": "multiple-choice",
          "sectionId": "9.2",
          "sectionTitle": "Traffic Characteristics and Queuing",
          "prompt": "Waarom begrens je een priority queue?",
          "choices": [
            "Om starvation van andere classes te voorkomen",
            "Om DSCP te verwijderen",
            "Om ARP te versnellen",
            "Om routes samen te vatten"
          ],
          "correctIndex": 0,
          "answer": "Om starvation van andere classes te voorkomen",
          "explanation": "Onbegrensde prioriteit kan alle capaciteit opeisen.",
          "tags": [
            "qos",
            "concepts",
            "traffic",
            "characteristics",
            "and",
            "queuing",
            "begrens",
            "priority",
            "queue"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m09-mc-03",
          "type": "multiple-choice",
          "sectionId": "9.3",
          "sectionTitle": "QoS Models and Tools",
          "prompt": "Welk model werkt met geaggregeerde serviceklassen?",
          "choices": [
            "DiffServ",
            "Best effort zonder classes",
            "ARP",
            "STP"
          ],
          "correctIndex": 0,
          "answer": "DiffServ",
          "explanation": "DiffServ classificeert en markeert gedragaggregaten.",
          "tags": [
            "qos",
            "concepts",
            "models",
            "and",
            "tools",
            "welk",
            "model",
            "werkt",
            "geaggregeerde",
            "serviceklassen"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m09-diag-01",
          "type": "diagnostic",
          "sectionId": "9.2",
          "sectionTitle": "Traffic Characteristics and Queuing",
          "prompt": "Tijdens congestie werkt spraak goed, maar alle businessdata valt bijna stil. Welke QoS-fout is waarschijnlijk?",
          "choices": [
            "Een onbegrensde priority queue veroorzaakt starvation",
            "Shaping gebruikt een buffer",
            "DSCP is zichtbaar",
            "De WAN-link heeft een SLA"
          ],
          "correctIndex": 0,
          "answer": "Een onbegrensde priority queue veroorzaakt starvation",
          "explanation": "Strict priority moet begrensd worden zodat andere classes capaciteit houden.",
          "tags": [
            "qos",
            "concepts",
            "traffic",
            "characteristics",
            "and",
            "queuing",
            "tijdens",
            "congestie",
            "werkt",
            "spraak"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m09-diag-02",
          "type": "diagnostic",
          "sectionId": "9.3",
          "sectionTitle": "QoS Models and Tools",
          "prompt": "Verkeer boven 20 Mbit/s wordt niet gedropt maar tijdelijk gebufferd en gelijkmatiger verzonden. Welke techniek is actief?",
          "choices": [
            "Shaping",
            "Policing",
            "NAT",
            "ARP inspection"
          ],
          "correctIndex": 0,
          "answer": "Shaping",
          "explanation": "Shaping buffert excess verkeer om de gemiddelde rate af te vlakken.",
          "tags": [
            "qos",
            "concepts",
            "models",
            "and",
            "tools",
            "verkeer",
            "boven",
            "mbit/s",
            "niet",
            "gedropt"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m09-flash-01",
          "type": "flashcard",
          "sectionId": "9.1",
          "sectionTitle": "Network Transmission Quality",
          "front": "Wat moet je kunnen uitleggen over Network Transmission Quality?",
          "back": "Congestie veroorzaakt delay, jitter en packet loss. Serialization, propagation, processing en queuing dragen elk bij aan end-to-end latency. Real-timeverkeer verdraagt weinig delay en jitter; TCP-data kan verlies vaak herstellen maar throughput daalt. Een baseline moet per richting en tijdvenster worden gemeten.",
          "tags": [
            "qos",
            "concepts",
            "network",
            "transmission",
            "quality",
            "congestie",
            "veroorzaakt",
            "delay",
            "jitter",
            "packet"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m09-flash-02",
          "type": "flashcard",
          "sectionId": "9.2",
          "sectionTitle": "Traffic Characteristics and Queuing",
          "front": "Wat moet je kunnen uitleggen over Traffic Characteristics and Queuing?",
          "back": "Voice is klein, periodiek en gevoelig voor vertraging; video is bursty en bandbreedte-intensief; data varieert sterk. Classificatie gebruikt betrouwbare kenmerken en marking bewaart de klasse downstream. FIFO behandelt aankomstvolgorde; class-based queuing reserveert middelen; een strict priority queue helpt real-timeverkeer maar moet begrensd zijn om starvation te voorkomen.",
          "tags": [
            "qos",
            "concepts",
            "traffic",
            "characteristics",
            "and",
            "queuing",
            "voice",
            "klein",
            "periodiek",
            "gevoelig"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m09-flash-03",
          "type": "flashcard",
          "sectionId": "9.3",
          "sectionTitle": "QoS Models and Tools",
          "front": "Wat moet je kunnen uitleggen over QoS Models and Tools?",
          "back": "Best effort geeft geen differentiatie. IntServ reserveert per flow maar schaalt beperkt; DiffServ classificeert en markeert aggregaten en is gangbaar in ondernemingsnetwerken. Policing dropt of remarkt boven limiet; shaping buffert om een gemiddelde rate af te vlakken. Congestion avoidance zoals WRED kan vroeg selectief droppen.",
          "tags": [
            "qos",
            "concepts",
            "models",
            "and",
            "tools",
            "best",
            "effort",
            "geeft",
            "geen",
            "differentiatie."
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-09.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 10,
        "title": "Network Management",
        "summary": "Ontdek buren, synchroniseer tijd, verzamel telemetry en logs en beheer configuraties en IOS-images gecontroleerd."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 5
      },
      "multipleChoice": [
        {
          "id": "ccna3-m10-mc-01",
          "type": "multiple-choice",
          "sectionId": "10.1",
          "sectionTitle": "Device Discovery with CDP and LLDP",
          "prompt": "Welk protocol is de vendorneutrale buurontdekking?",
          "choices": [
            "LLDP",
            "CDP",
            "HSRP",
            "PAT"
          ],
          "correctIndex": 0,
          "answer": "LLDP",
          "explanation": "LLDP is IEEE-gestandaardiseerd.",
          "tags": [
            "network",
            "management",
            "device",
            "discovery",
            "with",
            "cdp",
            "and",
            "lldp",
            "welk",
            "protocol"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m10-mc-02",
          "type": "multiple-choice",
          "sectionId": "10.2",
          "sectionTitle": "NTP",
          "prompt": "Welke syslogseverity is het meest ernstig?",
          "choices": [
            "0",
            "7",
            "100",
            "255"
          ],
          "correctIndex": 0,
          "answer": "0",
          "explanation": "Emergencies gebruikt severity 0.",
          "tags": [
            "network",
            "management",
            "ntp",
            "syslogseverity",
            "meest",
            "ernstig"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m10-mc-03",
          "type": "multiple-choice",
          "sectionId": "10.3",
          "sectionTitle": "SNMP and Syslog",
          "prompt": "Waarom verifieer je een IOS-imagehash?",
          "choices": [
            "Om integriteit van het bestand te controleren",
            "Om OSPF-cost te berekenen",
            "Om DHCP te starten",
            "Om VLANs te verwijderen"
          ],
          "correctIndex": 0,
          "answer": "Om integriteit van het bestand te controleren",
          "explanation": "De hash detecteert beschadiging of een verkeerd bestand.",
          "tags": [
            "network",
            "management",
            "snmp",
            "and",
            "syslog",
            "verifieer",
            "ios-imagehash"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m10-diag-01",
          "type": "diagnostic",
          "sectionId": "10.2",
          "sectionTitle": "NTP",
          "prompt": "Logregels van verschillende routers zijn niet betrouwbaar op tijd te ordenen. Welke basisdienst ontbreekt waarschijnlijk?",
          "choices": [
            "NTP-synchronisatie",
            "PAT overload",
            "EtherChannel",
            "PortFast"
          ],
          "correctIndex": 0,
          "answer": "NTP-synchronisatie",
          "explanation": "Gesynchroniseerde klokken zijn nodig voor betrouwbare eventcorrelatie.",
          "tags": [
            "network",
            "management",
            "ntp",
            "logregels",
            "verschillende",
            "routers",
            "niet",
            "betrouwbaar",
            "tijd",
            "ordenen."
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m10-diag-02",
          "type": "diagnostic",
          "sectionId": "10.5",
          "sectionTitle": "IOS Image Management and Licensing",
          "prompt": "Een nieuwe IOS-image staat in flash, maar na reboot start de oude versie. Wat controleer je eerst?",
          "choices": [
            "Bootvariable en imagepad",
            "De DHCP-pool",
            "De HSRP-priority",
            "De VLAN-naam"
          ],
          "correctIndex": 0,
          "answer": "Bootvariable en imagepad",
          "explanation": "De bootconfiguratie bepaalt welk geldig image bij het opstarten wordt gekozen.",
          "tags": [
            "network",
            "management",
            "ios",
            "image",
            "and",
            "licensing",
            "nieuwe",
            "ios-image",
            "staat",
            "flash"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m10-flash-01",
          "type": "flashcard",
          "sectionId": "10.1",
          "sectionTitle": "Device Discovery with CDP and LLDP",
          "front": "Wat moet je kunnen uitleggen over Device Discovery with CDP and LLDP?",
          "back": "CDP is Cisco-eigen; LLDP is vendorneutraal. Beide leren direct aangesloten buren, poortnamen en capabilities en zijn nuttig voor topologie en foutlokalisatie. Discovery lekt informatie op onbetrouwbare poorten. Schakel het globaal of per interface uit waar geen infrastructuurburen horen.",
          "tags": [
            "network",
            "management",
            "device",
            "discovery",
            "with",
            "cdp",
            "and",
            "lldp",
            "cisco-eigen",
            "vendorneutraal."
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m10-flash-02",
          "type": "flashcard",
          "sectionId": "10.2",
          "sectionTitle": "NTP",
          "front": "Wat moet je kunnen uitleggen over NTP?",
          "back": "NTP maakt logcorrelatie, certificaatvalidatie en incidentanalyse betrouwbaar. Stratum beschrijft afstand tot een referentieklok; een lager nummer is dichterbij, niet automatisch veiliger. Gebruik meerdere vertrouwde bronnen en authenticatie waar ondersteund. timezone verandert presentatie; NTP synchroniseert de onderliggende tijd.",
          "tags": [
            "network",
            "management",
            "ntp",
            "maakt",
            "logcorrelatie",
            "certificaatvalidatie",
            "incidentanalyse",
            "betrouwbaar.",
            "stratum",
            "beschrijft"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m10-flash-03",
          "type": "flashcard",
          "sectionId": "10.3",
          "sectionTitle": "SNMP and Syslog",
          "front": "Wat moet je kunnen uitleggen over SNMP and Syslog?",
          "back": "SNMP manager vraagt objecten uit of ontvangt traps/informs van agents. SNMPv3 biedt authenticatie en privacy; community strings van v1/v2c zijn gedeelde geheimen zonder sterke bescherming. Syslog severity loopt van 0 emergencies tot 7 debugging. Kies buffer, externe server en trapniveau zodat belangrijke events behouden blijven zonder ruisexplosie.",
          "tags": [
            "network",
            "management",
            "snmp",
            "and",
            "syslog",
            "manager",
            "vraagt",
            "objecten",
            "ontvangt",
            "traps/informs"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m10-flash-04",
          "type": "flashcard",
          "sectionId": "10.4",
          "sectionTitle": "Router and Switch File Maintenance",
          "front": "Wat moet je kunnen uitleggen over Router and Switch File Maintenance?",
          "back": "running-config staat in RAM; startup-config in NVRAM. Kopieer configuraties naar een gecontroleerde repository en verifieer inhoud en herstelprocedure. Bestandssystemen en beschikbare ruimte verschillen per platform. Gebruik dir, show file systems en verify vóór je een image als bootdoel instelt.",
          "tags": [
            "network",
            "management",
            "router",
            "and",
            "switch",
            "file",
            "maintenance",
            "running-config",
            "staat",
            "ram"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m10-flash-05",
          "type": "flashcard",
          "sectionId": "10.5",
          "sectionTitle": "IOS Image Management and Licensing",
          "front": "Wat moet je kunnen uitleggen over IOS Image Management and Licensing?",
          "back": "Een IOS-upgrade vraagt platformcompatibiliteit, voldoende geheugen, image-integriteit, bootvariable, configuratieback-up en rollbackplan. Verwijder oude recoveryimages niet zonder bewezen alternatief. Licensing verschilt per platform en release. Controleer status en entitlement, maar sla geen tokens of accountgegevens in projectbestanden op.",
          "tags": [
            "network",
            "management",
            "ios",
            "image",
            "and",
            "licensing",
            "ios-upgrade",
            "vraagt",
            "platformcompatibiliteit",
            "voldoende"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-10.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 11,
        "title": "Network Design",
        "summary": "Ontwerp een schaalbaar, modulair en fouttolerant campusnetwerk en kies hardware en routing op basis van meetbare eisen."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 3
      },
      "multipleChoice": [
        {
          "id": "ccna3-m11-mc-01",
          "type": "multiple-choice",
          "sectionId": "11.1",
          "sectionTitle": "Hierarchical Network Design",
          "prompt": "Welke laag aggregeert access en past vaak beleid toe?",
          "choices": [
            "Distribution",
            "Endpoint",
            "Internet",
            "Physical media"
          ],
          "correctIndex": 0,
          "answer": "Distribution",
          "explanation": "Distribution vormt de beleids- en aggregatiegrens.",
          "tags": [
            "network",
            "design",
            "hierarchical",
            "laag",
            "aggregeert",
            "access",
            "past",
            "vaak",
            "beleid",
            "toe"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m11-mc-02",
          "type": "multiple-choice",
          "sectionId": "11.2",
          "sectionTitle": "Scalable Network Characteristics",
          "prompt": "Wat verkleint een modulair ontwerp?",
          "choices": [
            "De blast radius van storingen en wijzigingen",
            "Het aantal IP-adressen tot nul",
            "De noodzaak voor monitoring",
            "Elke vorm van latency"
          ],
          "correctIndex": 0,
          "answer": "De blast radius van storingen en wijzigingen",
          "explanation": "Gestandaardiseerde blokken isoleren effecten.",
          "tags": [
            "network",
            "design",
            "scalable",
            "characteristics",
            "verkleint",
            "modulair",
            "ontwerp"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m11-mc-03",
          "type": "multiple-choice",
          "sectionId": "11.3",
          "sectionTitle": "Hardware and Routing Design",
          "prompt": "Welke factor hoort bij PoE-switchselectie?",
          "choices": [
            "Totaal vermogensbudget met marge",
            "Alleen hostnamen",
            "OSPF router-ID",
            "NAT poolnaam"
          ],
          "correctIndex": 0,
          "answer": "Totaal vermogensbudget met marge",
          "explanation": "Alle gevoede endpoints moeten binnen het budget passen.",
          "tags": [
            "network",
            "design",
            "hardware",
            "and",
            "routing",
            "factor",
            "hoort",
            "poe-switchselectie"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m11-diag-01",
          "type": "diagnostic",
          "sectionId": "11.2",
          "sectionTitle": "Scalable Network Characteristics",
          "prompt": "Een ontwerp heeft dubbele uplinks, maar beide eindigen op dezelfde voeding en hetzelfde chassis. Welk risico blijft?",
          "choices": [
            "Een gedeeld single point of failure",
            "Te veel route summarization",
            "Een te lage DSCP-waarde",
            "Een dubbele router-ID"
          ],
          "correctIndex": 0,
          "answer": "Een gedeeld single point of failure",
          "explanation": "Redundantie moet ook chassis, voeding en fysieke paden omvatten.",
          "tags": [
            "network",
            "design",
            "scalable",
            "characteristics",
            "ontwerp",
            "heeft",
            "dubbele",
            "uplinks",
            "maar",
            "beide"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m11-diag-02",
          "type": "diagnostic",
          "sectionId": "11.3",
          "sectionTitle": "Hardware and Routing Design",
          "prompt": "Een access-switch heeft genoeg poorten maar valt uit zodra alle telefoons en APs vermogen vragen. Welke capaciteit is onderschat?",
          "choices": [
            "Het PoE-budget",
            "De OSPF reference bandwidth",
            "De NTP-stratumwaarde",
            "De NAT-pool"
          ],
          "correctIndex": 0,
          "answer": "Het PoE-budget",
          "explanation": "Poortdichtheid garandeert niet dat het totale benodigde PoE-vermogen beschikbaar is.",
          "tags": [
            "network",
            "design",
            "hardware",
            "and",
            "routing",
            "access-switch",
            "heeft",
            "genoeg",
            "poorten",
            "maar"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m11-flash-01",
          "type": "flashcard",
          "sectionId": "11.1",
          "sectionTitle": "Hierarchical Network Design",
          "front": "Wat moet je kunnen uitleggen over Hierarchical Network Design?",
          "back": "Het accesslaagmodel verbindt endpoints, distribution aggregeert en past beleid toe, core transporteert snel en voorspelbaar. In kleinere locaties kan collapsed core distribution en core combineren. Modulariteit beperkt blast radius en maakt capaciteit, adressen en veranderingen herhaalbaar. Redundantie moet convergentie én failure domains bewust ontwerpen.",
          "tags": [
            "network",
            "design",
            "hierarchical",
            "accesslaagmodel",
            "verbindt",
            "endpoints",
            "distribution",
            "aggregeert",
            "past",
            "beleid"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m11-flash-02",
          "type": "flashcard",
          "sectionId": "11.2",
          "sectionTitle": "Scalable Network Characteristics",
          "front": "Wat moet je kunnen uitleggen over Scalable Network Characteristics?",
          "back": "Schaalbaarheid vraagt hiërarchie, samenvatting, gestandaardiseerde blokken, redundantie, EtherChannel en voorspelbare routing. Beschikbaarheid is een end-to-end eigenschap, niet alleen dubbele links. Meet utilization, error rates, flowverdeling en convergentietijd voordat je uitbreidt. Overprovisioning zonder baseline verplaatst soms alleen het knelpunt.",
          "tags": [
            "network",
            "design",
            "scalable",
            "characteristics",
            "schaalbaarheid",
            "vraagt",
            "rarchie",
            "samenvatting",
            "gestandaardiseerde",
            "blokken"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m11-flash-03",
          "type": "flashcard",
          "sectionId": "11.3",
          "sectionTitle": "Hardware and Routing Design",
          "front": "Wat moet je kunnen uitleggen over Hardware and Routing Design?",
          "back": "Kies switches op poortdichtheid, forwarding rate, buffers, uplinks, PoE-budget, redundante voedingen en feature/licentiebehoefte. Datasheets moeten bij worst-case profiel passen. Layer-3 naar access verkleint STP-domeinen; Layer-2 access kan operationeel eenvoudiger zijn. Kies IGP, summarization en default routes op topologie en beheerbaarheid, niet op gewoonte.",
          "tags": [
            "network",
            "design",
            "hardware",
            "and",
            "routing",
            "kies",
            "switches",
            "poortdichtheid",
            "forwarding",
            "rate"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-11.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 12,
        "title": "Network Troubleshooting",
        "summary": "Werk systematisch van symptoom naar oorzaak met documentatie, baselines, laaggerichte tests en bewijs na herstel."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 4
      },
      "multipleChoice": [
        {
          "id": "ccna3-m12-mc-01",
          "type": "multiple-choice",
          "sectionId": "12.1",
          "sectionTitle": "Network Documentation and Baselines",
          "prompt": "Wat doe je vóór een configuratiewijziging in een diagnose?",
          "choices": [
            "Een toetsbare hypothese en baseline vastleggen",
            "Alle counters wissen zonder notitie",
            "De router reloaden",
            "Alle ACLs verwijderen"
          ],
          "correctIndex": 0,
          "answer": "Een toetsbare hypothese en baseline vastleggen",
          "explanation": "Zo weet je wat de test hoort te bewijzen.",
          "tags": [
            "network",
            "troubleshooting",
            "documentation",
            "and",
            "baselines",
            "doe",
            "configuratiewijziging",
            "diagnose"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m12-mc-02",
          "type": "multiple-choice",
          "sectionId": "12.2",
          "sectionTitle": "Troubleshooting Process and Methods",
          "prompt": "Welke fout past bij veel late collisions?",
          "choices": [
            "Duplex-mismatch",
            "Verkeerde DNS-suffix",
            "Ontbrekende NTP-peer",
            "Te lage OSPF-priority"
          ],
          "correctIndex": 0,
          "answer": "Duplex-mismatch",
          "explanation": "Late collisions zijn een klassiek Ethernetduplexsignaal.",
          "tags": [
            "network",
            "troubleshooting",
            "process",
            "and",
            "methods",
            "fout",
            "past",
            "veel",
            "late",
            "collisions"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m12-mc-03",
          "type": "multiple-choice",
          "sectionId": "12.3",
          "sectionTitle": "Troubleshooting Tools and Symptoms",
          "prompt": "Waarom controleer je het returnpath?",
          "choices": [
            "Stateful filtering en NAT kunnen asymmetrische flows breken",
            "Omdat switches altijd asymmetrisch routeren",
            "Om VLANnamen te wijzigen",
            "Om CDP te versleutelen"
          ],
          "correctIndex": 0,
          "answer": "Stateful filtering en NAT kunnen asymmetrische flows breken",
          "explanation": "Een sessie heeft werkend verkeer in beide richtingen nodig.",
          "tags": [
            "network",
            "troubleshooting",
            "tools",
            "and",
            "symptoms",
            "controleer",
            "returnpath"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m12-diag-01",
          "type": "diagnostic",
          "sectionId": "12.3",
          "sectionTitle": "Troubleshooting Tools and Symptoms",
          "prompt": "Een Ethernetlink blijft up, maar toont veel late collisions en zeer slechte throughput. Wat is de waarschijnlijkste oorzaak?",
          "choices": [
            "Duplex-mismatch",
            "Verkeerde DNS-suffix",
            "Ontbrekende default-information originate",
            "Te veel NTP-peers"
          ],
          "correctIndex": 0,
          "answer": "Duplex-mismatch",
          "explanation": "Late collisions zijn een klassiek symptoom van een duplexconflict.",
          "tags": [
            "network",
            "troubleshooting",
            "tools",
            "and",
            "symptoms",
            "ethernetlink",
            "blijft",
            "maar",
            "toont",
            "veel"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m12-diag-02",
          "type": "diagnostic",
          "sectionId": "12.4",
          "sectionTitle": "Troubleshoot IP Connectivity",
          "prompt": "Een ping naar het server-IP werkt, maar HTTPS niet. Welke conclusie is correct?",
          "choices": [
            "Layer-3-bereik is bewezen, de applicatiepoort nog niet",
            "De volledige applicatie is gezond",
            "DNS is zeker de oorzaak",
            "De return route kan nooit het probleem zijn"
          ],
          "correctIndex": 0,
          "answer": "Layer-3-bereik is bewezen, de applicatiepoort nog niet",
          "explanation": "Ping bewijst niet dat TCP 443, TLS of de applicatie zelf werkt.",
          "tags": [
            "network",
            "troubleshooting",
            "troubleshoot",
            "connectivity",
            "ping",
            "server-ip",
            "werkt",
            "maar",
            "https",
            "niet."
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m12-flash-01",
          "type": "flashcard",
          "sectionId": "12.1",
          "sectionTitle": "Network Documentation and Baselines",
          "front": "Wat moet je kunnen uitleggen over Network Documentation and Baselines?",
          "back": "Actuele fysieke/logische diagrammen, adresplannen, VLANs, circuits, dependencies en configuratieversies versnellen diagnose. Zonder baseline is “traag” niet kwantificeerbaar. Leg normale latency, throughput, CPU, memory, interfaceerrors en route/neighborstates vast op representatieve tijden. Bescherm gevoelige configuratiegegevens.",
          "tags": [
            "network",
            "troubleshooting",
            "documentation",
            "and",
            "baselines",
            "actuele",
            "fysieke/logische",
            "diagrammen",
            "adresplannen",
            "vlans"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m12-flash-02",
          "type": "flashcard",
          "sectionId": "12.2",
          "sectionTitle": "Troubleshooting Process and Methods",
          "front": "Wat moet je kunnen uitleggen over Troubleshooting Process and Methods?",
          "back": "Definieer probleem, impact en wijzigingen; verzamel feiten; vorm een toetsbare hypothese; test de minst risicovolle stap; implementeer gecontroleerd; verifieer en documenteer. Bottom-up start fysiek, top-down bij applicatie, divide-and-conquer bij een logisch middenpunt. Follow-the-path volgt het echte datapad en is vaak effectiever dan willekeurige show-commando’s.",
          "tags": [
            "network",
            "troubleshooting",
            "process",
            "and",
            "methods",
            "definieer",
            "probleem",
            "impact",
            "wijzigingen",
            "verzamel"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m12-flash-03",
          "type": "flashcard",
          "sectionId": "12.3",
          "sectionTitle": "Troubleshooting Tools and Symptoms",
          "front": "Wat moet je kunnen uitleggen over Troubleshooting Tools and Symptoms?",
          "back": "LEDs, cable tester, TDR, protocol analyzer, SPAN, syslog, SNMP en flowdata zien verschillende lagen. Kies het minst ingrijpende instrument dat de hypothese kan falsificeren. Fysieke fouten tonen CRC, runts, giants of flaps; duplexproblemen geven late collisions en slechte throughput; congestie geeft output drops zonder noodzakelijk fysieke errors.",
          "tags": [
            "network",
            "troubleshooting",
            "tools",
            "and",
            "symptoms",
            "leds",
            "cable",
            "tester",
            "tdr",
            "protocol"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m12-flash-04",
          "type": "flashcard",
          "sectionId": "12.4",
          "sectionTitle": "Troubleshoot IP Connectivity",
          "front": "Wat moet je kunnen uitleggen over Troubleshoot IP Connectivity?",
          "back": "Test oplopend: lokale stack, eigen gateway, buurresolution, route, ACL/NAT, remote gateway, dienst. Een succesvolle ping bewijst niet dat DNS, TCP-poort of applicatie gezond is. Controleer bronadres en VRF/context. Asymmetrische routing kan stateful firewalls en NAT breken ondanks correcte forward route.",
          "tags": [
            "network",
            "troubleshooting",
            "troubleshoot",
            "connectivity",
            "test",
            "oplopend",
            "lokale",
            "stack",
            "eigen",
            "gateway"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-12.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 13,
        "title": "Network Virtualization",
        "summary": "Leg uit hoe cloud, hypervisors, virtual switching, overlays en SDN fysieke resources abstraheren en programmeerbaar maken."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 4
      },
      "multipleChoice": [
        {
          "id": "ccna3-m13-mc-01",
          "type": "multiple-choice",
          "sectionId": "13.1",
          "sectionTitle": "Cloud Computing",
          "prompt": "Wat scheidt een VRF?",
          "choices": [
            "Routingtables",
            "Elektrische voedingen",
            "DNS-recordtypes",
            "Syslogseverities"
          ],
          "correctIndex": 0,
          "answer": "Routingtables",
          "explanation": "VRFs bieden meerdere geïsoleerde routingcontexten.",
          "tags": [
            "network",
            "virtualization",
            "cloud",
            "computing",
            "scheidt",
            "vrf"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m13-mc-02",
          "type": "multiple-choice",
          "sectionId": "13.2",
          "sectionTitle": "Virtualization Fundamentals",
          "prompt": "Wat is een type-1 hypervisor?",
          "choices": [
            "Een hypervisor die direct op hardware draait",
            "Een browserextensie",
            "Een NAT-type",
            "Een OSPF-pakket"
          ],
          "correctIndex": 0,
          "answer": "Een hypervisor die direct op hardware draait",
          "explanation": "Type 1 is bare metal.",
          "tags": [
            "network",
            "virtualization",
            "fundamentals",
            "type-1",
            "hypervisor"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m13-mc-03",
          "type": "multiple-choice",
          "sectionId": "13.3",
          "sectionTitle": "Network Infrastructure Virtualization",
          "prompt": "Wat betekent southbound in SDN?",
          "choices": [
            "De interface van controller naar netwerkapparaten",
            "De gebruikersportal naar applicaties",
            "Een fysieke kabelrichting",
            "Alleen internetverkeer"
          ],
          "correctIndex": 0,
          "answer": "De interface van controller naar netwerkapparaten",
          "explanation": "Southbound programmeert of bevraagt infrastructuur.",
          "tags": [
            "network",
            "virtualization",
            "infrastructure",
            "betekent",
            "southbound",
            "sdn"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m13-diag-01",
          "type": "diagnostic",
          "sectionId": "13.3",
          "sectionTitle": "Network Infrastructure Virtualization",
          "prompt": "Twee tenants gebruiken overlappende IP-prefixes zonder elkaars routes te zien. Welke abstractie past het best?",
          "choices": [
            "Afzonderlijke VRFs",
            "Eén gedeelde global routing table",
            "Alleen een native VLAN",
            "NTP authentication"
          ],
          "correctIndex": 0,
          "answer": "Afzonderlijke VRFs",
          "explanation": "VRFs bieden geïsoleerde routingtabellen en ondersteunen overlappende adressen.",
          "tags": [
            "network",
            "virtualization",
            "infrastructure",
            "twee",
            "tenants",
            "gebruiken",
            "overlappende",
            "ip-prefixes",
            "zonder",
            "elkaars"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m13-diag-02",
          "type": "diagnostic",
          "sectionId": "13.4",
          "sectionTitle": "Software-Defined Networking",
          "prompt": "De controller is tijdelijk onbereikbaar, maar bestaande flows blijven volgens de laatste policy doorlopen. Welke scheiding zie je?",
          "choices": [
            "Control plane en data plane",
            "Inside en outside NAT",
            "Access en trunk",
            "Voice en video queue"
          ],
          "correctIndex": 0,
          "answer": "Control plane en data plane",
          "explanation": "De dataplane kan bestaande forwardingstate behouden terwijl de controller niet beschikbaar is.",
          "tags": [
            "network",
            "virtualization",
            "software-defined",
            "networking",
            "controller",
            "tijdelijk",
            "onbereikbaar",
            "maar",
            "bestaande",
            "flows"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m13-flash-01",
          "type": "flashcard",
          "sectionId": "13.1",
          "sectionTitle": "Cloud Computing",
          "front": "Wat moet je kunnen uitleggen over Cloud Computing?",
          "back": "Cloud levert on-demand resources uit gedeelde pools met automatisering en meetbaar gebruik. IaaS, PaaS en SaaS verschuiven de beheergrens tussen klant en provider. Public, private, hybrid en community cloud beschrijven eigendom en plaatsing. Beschikbaarheid, dataresidentie, exitstrategie en shared responsibility blijven ontwerpvragen.",
          "tags": [
            "network",
            "virtualization",
            "cloud",
            "computing",
            "levert",
            "on-demand",
            "resources",
            "gedeelde",
            "pools",
            "automatisering"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m13-flash-02",
          "type": "flashcard",
          "sectionId": "13.2",
          "sectionTitle": "Virtualization Fundamentals",
          "front": "Wat moet je kunnen uitleggen over Virtualization Fundamentals?",
          "back": "Een type-1 hypervisor draait direct op hardware; type-2 op een host-OS. VMs bevatten een volledig guest-OS; containers delen doorgaans de hostkernel en zijn lichter maar hebben een andere isolatiegrens. vNICs koppelen workloads aan virtual switches. Resource overcommit kan efficiënt zijn maar veroorzaakt contention; monitor CPU ready, memory pressure, storage latency en netwerkqueues.",
          "tags": [
            "network",
            "virtualization",
            "fundamentals",
            "type-1",
            "hypervisor",
            "draait",
            "direct",
            "hardware",
            "type-2",
            "host-os."
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m13-flash-03",
          "type": "flashcard",
          "sectionId": "13.3",
          "sectionTitle": "Network Infrastructure Virtualization",
          "front": "Wat moet je kunnen uitleggen over Network Infrastructure Virtualization?",
          "back": "VRF virtualiseert routingtables; VLAN/EVPN/VXLAN segmenteren Layer 2 en overlays; tunnels scheiden logische topologie van de fysieke underlay. Elke abstractielaag vraagt eigen observability. NFV draait functies zoals firewall of router als software. Schaalbaarheid verbetert alleen wanneer dataplane-capaciteit, state, orchestration en failure handling goed zijn ontworpen.",
          "tags": [
            "network",
            "virtualization",
            "infrastructure",
            "vrf",
            "virtualiseert",
            "routingtables",
            "vlan/evpn/vxlan",
            "segmenteren",
            "layer",
            "overlays"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m13-flash-04",
          "type": "flashcard",
          "sectionId": "13.4",
          "sectionTitle": "Software-Defined Networking",
          "front": "Wat moet je kunnen uitleggen over Software-Defined Networking?",
          "back": "SDN scheidt beleidsbeslissingen logisch van forwarding en gebruikt een controller voor gecentraliseerde intent en automatisering. De control plane kan logisch centraal maar fysiek redundant zijn. Northbound APIs bedienen applicaties en intent; southbound protocollen/programmeerinterfaces sturen netwerkapparaten. Closed loop combineert telemetry, analyse en gecontroleerde wijziging.",
          "tags": [
            "network",
            "virtualization",
            "software-defined",
            "networking",
            "sdn",
            "scheidt",
            "beleidsbeslissingen",
            "logisch",
            "forwarding",
            "gebruikt"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-13.json"
    },
    {
      "schemaVersion": 1,
      "courseId": "ccna3-ensa",
      "module": {
        "id": 14,
        "title": "Network Automation",
        "summary": "Gebruik gestructureerde data, APIs, REST, configuratiebeheer en intent-based networking om herhaalbare en controleerbare netwerkveranderingen te bouwen."
      },
      "counts": {
        "multipleChoice": 3,
        "diagnostic": 2,
        "flashcards": 5
      },
      "multipleChoice": [
        {
          "id": "ccna3-m14-mc-01",
          "type": "multiple-choice",
          "sectionId": "14.1",
          "sectionTitle": "Automation Overview",
          "prompt": "Welke HTTP-methode leest normaal een resource?",
          "choices": [
            "GET",
            "DELETE",
            "PATCH",
            "CONNECT als configuratiemethode"
          ],
          "correctIndex": 0,
          "answer": "GET",
          "explanation": "GET is bedoeld voor retrieval.",
          "tags": [
            "network",
            "automation",
            "overview",
            "http-methode",
            "leest",
            "normaal",
            "resource"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m14-mc-02",
          "type": "multiple-choice",
          "sectionId": "14.2",
          "sectionTitle": "Data Formats",
          "prompt": "Wat betekent idempotent configuratiebeheer?",
          "choices": [
            "Herhaalde uitvoering convergeert naar dezelfde gewenste eindstate.",
            "Elke run maakt een nieuwe interface.",
            "Alle fouten worden genegeerd.",
            "De API gebruikt geen TLS."
          ],
          "correctIndex": 0,
          "answer": "Herhaalde uitvoering convergeert naar dezelfde gewenste eindstate.",
          "explanation": "Een tweede run hoeft geen extra wijziging te maken.",
          "tags": [
            "network",
            "automation",
            "data",
            "formats",
            "betekent",
            "idempotent",
            "configuratiebeheer"
          ],
          "provenance": "original-ccna3-study-question"
        },
        {
          "id": "ccna3-m14-mc-03",
          "type": "multiple-choice",
          "sectionId": "14.3",
          "sectionTitle": "APIs and REST",
          "prompt": "Wat sluit de IBN-feedbacklus?",
          "choices": [
            "Assurance en telemetry vergelijken actuele state met intent.",
            "Een statische banner",
            "Alleen een VLAN-naam",
            "Een handmatige ping zonder doelwaarde"
          ],
          "correctIndex": 0,
          "answer": "Assurance en telemetry vergelijken actuele state met intent.",
          "explanation": "Closed-loop assurance detecteert afwijking en voedt bijsturing.",
          "tags": [
            "network",
            "automation",
            "apis",
            "and",
            "rest",
            "sluit",
            "ibn-feedbacklus"
          ],
          "provenance": "original-ccna3-study-question"
        }
      ],
      "diagnostic": [
        {
          "id": "ccna3-m14-diag-01",
          "type": "diagnostic",
          "sectionId": "14.3",
          "sectionTitle": "APIs and REST",
          "prompt": "Een automatiseringsjob herhaalt na een timeout een POST en maakt twee objecten. Welk ontwerpdetail ontbrak?",
          "choices": [
            "Veilige idempotentie of een idempotency key",
            "Een hogere OSPF-priority",
            "Een LLDP-neighbor",
            "Een groter PoE-budget"
          ],
          "correctIndex": 0,
          "answer": "Veilige idempotentie of een idempotency key",
          "explanation": "Niet-idempotente retries kunnen zonder deduplicatie dubbele side effects veroorzaken.",
          "tags": [
            "network",
            "automation",
            "apis",
            "and",
            "rest",
            "automatiseringsjob",
            "herhaalt",
            "timeout",
            "post",
            "maakt"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        },
        {
          "id": "ccna3-m14-diag-02",
          "type": "diagnostic",
          "sectionId": "14.4",
          "sectionTitle": "Configuration Management",
          "prompt": "Een tweede configuratierun toont opnieuw dezelfde wijzigingen terwijl het apparaat al correct staat. Welke eigenschap ontbreekt?",
          "choices": [
            "Idempotentie",
            "Encryptie van syslog",
            "PAT",
            "DR-preemption"
          ],
          "correctIndex": 0,
          "answer": "Idempotentie",
          "explanation": "Een idempotente run convergeert en rapporteert daarna geen onnodige wijziging.",
          "tags": [
            "network",
            "automation",
            "configuration",
            "management",
            "tweede",
            "configuratierun",
            "toont",
            "opnieuw",
            "dezelfde",
            "wijzigingen"
          ],
          "provenance": "original-ccna3-diagnostic-scenario"
        }
      ],
      "flashcards": [
        {
          "id": "ccna3-m14-flash-01",
          "type": "flashcard",
          "sectionId": "14.1",
          "sectionTitle": "Automation Overview",
          "front": "Wat moet je kunnen uitleggen over Automation Overview?",
          "back": "Automatisering verlaagt variatie en versnelt herhaalbare taken, maar vermenigvuldigt ook fouten. Begin met een bron van waarheid, kleine scope, idempotentie, dry run, review en rollback. Orchestration coördineert meerdere systemen en stappen. Een script is pas operationeel betrouwbaar met inputvalidatie, logging, foutafhandeling, secretsbeheer en tests.",
          "tags": [
            "network",
            "automation",
            "overview",
            "automatisering",
            "verlaagt",
            "variatie",
            "versnelt",
            "herhaalbare",
            "taken",
            "maar"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m14-flash-02",
          "type": "flashcard",
          "sectionId": "14.2",
          "sectionTitle": "Data Formats",
          "front": "Wat moet je kunnen uitleggen over Data Formats?",
          "back": "JSON gebruikt objecten, arrays, strings, numbers, booleans en null. YAML is mensvriendelijk maar inspringing en impliciete types vragen aandacht. XML gebruikt geneste tags en attributen. Een schema en versiecontract voorkomen dat syntactisch geldige maar semantisch verkeerde data wordt toegepast. Normaliseer adressen, interfaces en units vóór vergelijking.",
          "tags": [
            "network",
            "automation",
            "data",
            "formats",
            "json",
            "gebruikt",
            "objecten",
            "arrays",
            "strings",
            "numbers"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m14-flash-03",
          "type": "flashcard",
          "sectionId": "14.3",
          "sectionTitle": "APIs and REST",
          "front": "Wat moet je kunnen uitleggen over APIs and REST?",
          "back": "Een API definieert een contract. REST werkt met resources en HTTP-methoden: GET leest, POST maakt of start, PUT vervangt, PATCH wijzigt gedeeltelijk en DELETE verwijdert. Statuscodes, headers, authenticatie, pagination en rate limits horen bij het contract. GET hoort safe te zijn; idempotentie betekent dat herhaling hetzelfde eindresultaat geeft, niet dat elk antwoord identiek is.",
          "tags": [
            "network",
            "automation",
            "apis",
            "and",
            "rest",
            "api",
            "definieert",
            "contract.",
            "werkt",
            "resources"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m14-flash-04",
          "type": "flashcard",
          "sectionId": "14.4",
          "sectionTitle": "Configuration Management",
          "front": "Wat moet je kunnen uitleggen over Configuration Management?",
          "back": "Agentless tools verbinden vanaf een controller; agent-based systemen draaien een component op nodes. Declaratieve modellen beschrijven gewenste state, imperatieve scripts de exacte stappen. Templates scheiden variabele data van configuratielogica. Idempotente runs veranderen niets wanneer state al klopt; drift detection vergelijkt actuele state met source of truth.",
          "tags": [
            "network",
            "automation",
            "configuration",
            "management",
            "agentless",
            "tools",
            "verbinden",
            "vanaf",
            "controller",
            "agent-based"
          ],
          "provenance": "original-ccna3-study-flashcard"
        },
        {
          "id": "ccna3-m14-flash-05",
          "type": "flashcard",
          "sectionId": "14.5",
          "sectionTitle": "Intent-Based Networking and Controllers",
          "front": "Wat moet je kunnen uitleggen over Intent-Based Networking and Controllers?",
          "back": "IBN vertaalt zakelijke intent naar beleid, implementeert dit via een controller en gebruikt assurance om resultaat continu te vergelijken met bedoeling. Dit is een closed-loopproces. Controllerplatforms zoals Cisco Catalyst Center combineren inventory, design, policy, provisioning en assurance. Menselijke goedkeuring blijft passend voor brede of risicovolle wijzigingen.",
          "tags": [
            "network",
            "automation",
            "intent-based",
            "networking",
            "and",
            "controllers",
            "ibn",
            "vertaalt",
            "zakelijke",
            "intent"
          ],
          "provenance": "original-ccna3-study-flashcard"
        }
      ],
      "filename": "modules/module-14.json"
    }
  ]
};
