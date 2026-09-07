(function (root) {
  const diagrams = [
    {
      id: 'arp-request', title: 'ARP Request', category: 'Flows', file: 'ARP Request.pdf', pages: 2,
      summary: 'ARP-pakketvelden en de broadcast-request/unicast-reply-stroom.',
      prompts: [
        ['Welk Ethernet-doeladres gebruikt een ARP Request?', 'FF:FF:FF:FF:FF:FF (broadcast)', ['00:00:00:00:00:00', 'Het MAC-adres van de gateway', '01:00:5E:00:00:01']],
        ['Welke EtherType-waarde duidt ARP aan?', '0x0806', ['0x0800', '0x86DD', '0x8100']],
        ['Welke opcode gebruikt een ARP Request?', '1', ['2', '6', '8']],
        ['Wat staat vóór de reply in het target-MAC-veld van de request?', '00:00:00:00:00:00', ['FF:FF:FF:FF:FF:FF', 'Het MAC-adres van de zender', 'Het MAC-adres van de switch']],
        ['Hoe wordt de ARP Reply normaal verstuurd?', 'Unicast naar de aanvrager', ['Broadcast naar het subnet', 'Multicast naar alle routers', 'Alleen als IP-broadcast']],
        ['Wat doet een host met een ARP Request waarvan het target-IP niet overeenkomt?', 'Het pakket negeren', ['Een negatieve reply sturen', 'Het pakket routen', 'Het source-IP wijzigen']]
      ]
    },
    {
      id: 'dhcpv4-request', title: 'DHCPv4 Request', category: 'Flows', file: 'DHCPv4 Request.pdf', pages: 1,
      summary: 'DORA en de kortere unicast lease-renewal.',
      prompts: [
        ['Wat is de juiste DORA-volgorde?', 'Discover, Offer, Request, Acknowledge', ['Discover, Request, Offer, Acknowledge', 'Offer, Discover, Acknowledge, Request', 'Request, Offer, Discover, Acknowledge']],
        ['Hoe verstuurt een nieuwe client DHCP Discover?', 'Broadcast', ['Unicast', 'Anycast', 'Alleen multicast']],
        ['Hoe verstuurt de client de eerste DHCP Request?', 'Broadcast', ['Altijd unicast', 'Alleen naar de default gateway', 'Layer-2 unicast']],
        ['Welke twee berichten vormen de normale lease-renewal?', 'Request en ACK', ['Discover en Offer', 'Offer en Request', 'Discover en ACK']],
        ['Hoe verstuurt de client een renewal Request volgens het diagram?', 'Unicast', ['Broadcast', 'Multicast', 'Anycast']]
      ]
    },
    {
      id: 'ethernet-pinouts', title: 'Ethernet Cable Pinouts', category: 'Layer 1', file: 'Ethernet Cable Pinouts.pdf', pages: 1,
      summary: 'T568A/T568B-kleuren, straight-through en crossover.',
      prompts: [
        ['Welke kleur zit op pin 1 bij T568A?', 'Groen/wit', ['Oranje/wit', 'Blauw', 'Bruin/wit']],
        ['Welke kleur zit op pin 1 bij T568B?', 'Oranje/wit', ['Groen/wit', 'Oranje', 'Groen']],
        ['Welke pinnen zenden bij 10/100 Mbps?', '1 en 2', ['3 en 6', '4 en 5', '7 en 8']],
        ['Welke pinnen ontvangen bij 10/100 Mbps?', '3 en 6', ['1 en 2', '4 en 5', '7 en 8']],
        ['Welke connectoren gebruikt een typische half-crossover?', 'T568A aan de ene kant en T568B aan de andere', ['T568A aan beide kanten', 'T568B aan beide kanten', 'Alleen TIA/EIA 568-B2']],
        ['Hoeveel aderparen gebruikt Gigabit Ethernet bidirectioneel?', 'Vier paren', ['Eén paar', 'Twee paren', 'Drie paren']]
      ]
    },
    {
      id: 'ipv4-header', title: 'IPv4 Header', category: 'Headers', file: 'IPv4 Header.pdf', pages: 1,
      summary: 'De vaste IPv4-headervelden in bitvolgorde.',
      prompts: [
        ['Welke velden openen de IPv4-header?', 'Version en IHL', ['DSCP en ECN', 'TTL en Protocol', 'Source en Destination']],
        ['Welk veld staat direct na ECN?', 'Total Length', ['Identification', 'Header Checksum', 'Protocol']],
        ['Welke fragmentatievelden volgen op Total Length?', 'Identification, Flags en Fragment Offset', ['TTL, Protocol en Checksum', 'Source, Destination en Options', 'IHL, DSCP en ECN']],
        ['Wat staat tussen Fragment Offset en Header Checksum?', 'Time to Live en Protocol', ['Source en Destination', 'Version en IHL', 'Options en Padding']],
        ['Hoe groot is een IPv4-adresveld in de header?', '32 bits', ['16 bits', '64 bits', '128 bits']],
        ['Welk veld kan de IPv4-header langer dan 20 bytes maken?', 'Options', ['ECN', 'Flags', 'Protocol']]
      ]
    },
    {
      id: 'ipv4-ranges', title: 'IPv4 Reserved Ranges', category: 'Addressing', file: 'IPv4 Reserved Ranges.pdf', pages: 1,
      summary: 'Belangrijke private, speciale, documentatie- en multicast-ranges.',
      prompts: [
        ['Welke drie blokken zijn privé volgens RFC1918?', '10.0.0.0/8, 172.16.0.0/12 en 192.168.0.0/16', ['100.64.0.0/10, 127.0.0.0/8 en 169.254.0.0/16', '192.0.2.0/24, 198.51.100.0/24 en 203.0.113.0/24', '224.0.0.0/4, 240.0.0.0/4 en 255.255.255.255/32']],
        ['Welke range is IPv4-loopback?', '127.0.0.0/8', ['169.254.0.0/16', '100.64.0.0/10', '224.0.0.0/4']],
        ['Welke range is link-local/APIPA?', '169.254.0.0/16', ['127.0.0.0/8', '192.0.2.0/24', '240.0.0.0/4']],
        ['Welke range is shared address space voor CGNAT?', '100.64.0.0/10', ['10.0.0.0/8', '198.51.100.0/24', '203.0.113.0/24']],
        ['Welke drie blokken zijn documentatienetwerken?', '192.0.2.0/24, 198.51.100.0/24 en 203.0.113.0/24', ['10.0.0.0/8, 172.16.0.0/12 en 192.168.0.0/16', '0.0.0.0/8, 127.0.0.0/8 en 169.254.0.0/16', '224.0.0.0/4, 240.0.0.0/4 en 255.255.255.255/32']],
        ['Welke range is multicast?', '224.0.0.0/4', ['240.0.0.0/4', '255.255.255.255/32', '0.0.0.0/0']]
      ]
    },
    {
      id: 'ipv6-header', title: 'IPv6 Header', category: 'Headers', file: 'IPv6 Header.pdf', pages: 1,
      summary: 'De compacte vaste IPv6-header van 40 bytes.',
      prompts: [
        ['Welke drie velden vormen de eerste 32 bits?', 'Version, Traffic Class en Flow Label', ['Payload Length, Next Header en Hop Limit', 'Source, Destination en Flow Label', 'Version, IHL en DSCP']],
        ['Wat volgt direct op Flow Label?', 'Payload Length', ['Hop Limit', 'Source Address', 'Next Header']],
        ['Welke velden volgen op Payload Length?', 'Next Header en Hop Limit', ['Traffic Class en Flow Label', 'Checksum en Options', 'Flags en Fragment Offset']],
        ['Hoe groot is het Source Address-veld?', '128 bits', ['32 bits', '64 bits', '256 bits']],
        ['Hoe groot is de vaste IPv6-header?', '40 bytes', ['20 bytes', '32 bytes', '60 bytes']],
        ['Welk IPv4-veld ontbreekt uit de vaste IPv6-header?', 'Header Checksum', ['Source Address', 'Payload Length', 'Hop Limit']]
      ]
    },
    {
      id: 'ipv6-ranges', title: 'IPv6 Reserved Ranges', category: 'Addressing', file: 'IPv6 Reserved Ranges.pdf', pages: 2,
      summary: 'Belangrijke IPv6-prefixes voor unicast, documentatie en speciale functies.',
      prompts: [
        ['Wat is de IPv6 default route?', '::/0', ['::/128', '::1/128', '2000::/3']],
        ['Wat is het IPv6 loopback-adres?', '::1/128', ['::/128', 'fe80::/10', 'fc00::/7']],
        ['Welke prefix is link-local unicast?', 'fe80::/10', ['fc00::/7', 'ff00::/8', '2001:db8::/32']],
        ['Welke prefix is unique local?', 'fc00::/7', ['fe80::/10', '2000::/3', '3fff::/20']],
        ['Welke prefix is multicast?', 'ff00::/8', ['2000::/3', 'fe80::/10', '64:ff9b::/96']],
        ['Welke prefix is het klassieke documentatieblok?', '2001:db8::/32', ['2001::/32', '2002::/16', '100::/64']],
        ['Welke prefix bevat global-unicastadressen?', '2000::/3', ['fc00::/7', 'ff00::/8', '::/8']],
        ['Welke prefix is IPv4-mapped IPv6?', '::ffff:0:0/96', ['64:ff9b::/96', '2002::/16', '::/96']]
      ]
    },
    {
      id: 'mac-frame-headers', title: 'MAC Frame Headers', category: 'Headers', file: 'MAC Frame Headers.pdf', pages: 2,
      summary: 'Ethernet II/802.3, 802.1Q-tagging en 802.11-framevelden.',
      prompts: [
        ['Wat volgt op de Ethernet-preamble?', 'Start Frame Delimiter (SFD)', ['Destination MAC', 'Source MAC', 'Length/EtherType']],
        ['Wat is de MAC-adresvolgorde in een Ethernet-frame?', 'Destination MAC, daarna Source MAC', ['Source MAC, daarna Destination MAC', 'Gateway MAC, daarna Host MAC', 'Source IP, daarna Destination IP']],
        ['Welke TPID identificeert normaal een 802.1Q-tag?', '0x8100', ['0x0800', '0x0806', '0x86DD']],
        ['Uit welke subvelden bestaat de 802.1Q TCI?', 'PCP, DEI en VID', ['TTL, DSCP en ECN', 'TPID, FCS en SFD', 'Version, IHL en Flags']],
        ['Hoeveel bruikbare VLAN-ID’s laat de 12-bit VID toe?', '4094', ['4096', '1024', '8192']],
        ['Welke velden kunnen in een 802.11 MAC-header vier adressen dragen?', 'Address 1, 2, 3 en 4', ['Source, Destination en Gateway', 'BSSID en twee IP-adressen', 'Alleen Source en Destination']],
        ['Welk veld sluit het Ethernet-frame af?', 'FCS/CRC', ['SFD', 'EtherType', 'Padding']]
      ]
    },
    {
      id: 'network-message', title: 'Network Message', category: 'Flows', file: 'Network Message.pdf', pages: 1,
      summary: 'Beslissingen en framewissels van bronhost tot doelhost.',
      prompts: [
        ['Hoe bepaalt een host of de bestemming lokaal is?', 'IP-adres en subnetmasker vergelijken', ['Alleen de ARP-cache lezen', 'De DNS-server vragen', 'De switch-MAC-tabel lezen']],
        ['Welk MAC-adres gebruikt een host voor verkeer naar een ander netwerk?', 'Het MAC-adres van de default gateway', ['Het MAC-adres van de eindbestemming', 'Een multicast-MAC', 'Het MAC-adres van de DNS-server']],
        ['Wat verandert bij elke router-hop?', 'Het Layer-2-frame wordt opnieuw opgebouwd', ['Het bron- en doel-IP wisselen', 'De transportpoorten verdwijnen', 'De payload wordt opnieuw versleuteld']],
        ['Wat controleert een router vóór doorsturen?', 'Firewall/forwardingregels en routing table', ['Alleen DNS en DHCP', 'De ARP-cache van de bronhost', 'De applicatieheader']],
        ['Wat gebeurt er als de benodigde ARP-resolutie mislukt?', 'Het pakket wordt niet in een bruikbaar frame doorgestuurd', ['De router verzint een MAC-adres', 'Het IP-adres wordt gebroadcast', 'De bestemming stuurt automatisch een FIN']]
      ]
    },
    {
      id: 'osi-graph', title: 'OSI Graph', category: 'Models', file: 'OSI Graph.pdf', pages: 1,
      summary: 'Encapsulatie, PDU-namen en de zeven OSI-lagen.',
      prompts: [
        ['Wat is de juiste volgorde van laag 7 naar laag 1?', 'Application, Presentation, Session, Transport, Network, Data Link, Physical', ['Physical, Data Link, Network, Transport, Session, Presentation, Application', 'Application, Session, Presentation, Network, Transport, Data Link, Physical', 'Application, Transport, Network, Session, Presentation, Data Link, Physical']],
        ['Welke PDU hoort bij Layer 4 TCP?', 'Segment', ['Packet', 'Frame', 'Datagram']],
        ['Welke PDU hoort bij Layer 4 UDP?', 'Datagram', ['Segment', 'Packet', 'Frame']],
        ['Welke PDU hoort bij Layer 3?', 'Packet', ['Segment', 'Frame', 'Bitstream']],
        ['Welke PDU hoort bij Layer 2?', 'Frame', ['Packet', 'Segment', 'Data']],
        ['Op welke laag vinden serialisatie, encoding en signaling plaats?', 'Layer 1 - Physical', ['Layer 2 - Data Link', 'Layer 3 - Network', 'Layer 7 - Application']]
      ]
    },
    {
      id: 'tcp-handshakes', title: 'TCP Handshakes', category: 'Flows', file: 'TCP Handshakes.pdf', pages: 1,
      summary: 'Drieweg-handshake en vierstaps sessiebeëindiging.',
      prompts: [
        ['Wat is de TCP three-way-handshake?', 'SYN, SYN-ACK, ACK', ['SYN, ACK, FIN', 'ACK, SYN-ACK, SYN', 'FIN, FIN-ACK, ACK']],
        ['Welke ACK-waarde stuurt Host B na SYN met SEQ=n?', 'n+1', ['n', 'm', 'm+1']],
        ['Welke ACK-waarde stuurt Host A na SYN-ACK met SEQ=m?', 'm+1', ['m', 'n', 'n+1']],
        ['Wat is de getoonde beëindigingsvolgorde?', 'FIN, ACK, FIN, ACK', ['FIN, FIN-ACK, ACK', 'ACK, FIN, ACK, FIN', 'RST, ACK']],
        ['Waarom duurt normale TCP-beëindiging vaak vier stappen?', 'Elke richting wordt afzonderlijk gesloten en bevestigd', ['Er zijn twee DNS-lookups nodig', 'TCP gebruikt twee IP-headers', 'De switch moet beide MAC-adressen leren']]
      ]
    },
    {
      id: 'tcp-header', title: 'TCP Header', category: 'Headers', file: 'TCP Header.pdf', pages: 1,
      summary: 'TCP-headervelden en de zes klassieke control flags.',
      prompts: [
        ['Welke velden openen de TCP-header?', 'Source Port en Destination Port', ['Sequence en Acknowledgement', 'Checksum en Urgent Pointer', 'Window en Flags']],
        ['Wat volgt op de poortvelden?', 'Sequence Number en Acknowledgement Number', ['Flags en Window', 'Options en Data', 'Checksum en Urgent Pointer']],
        ['Welke velden delen de 32 bits na Acknowledgement Number?', 'Header Length, Reserved, Flags en Window', ['Source Port, Destination Port en Flags', 'Checksum, Options en Data', 'Sequence, ACK en Window']],
        ['Wat staat direct na Window?', 'Checksum en Urgent Pointer', ['Options en Data', 'Sequence en ACK', 'Header Length en Reserved']],
        ['Wat is de klassieke TCP-flagvolgorde in het diagram?', 'URG, ACK, PSH, RST, SYN, FIN', ['SYN, ACK, FIN, RST, PSH, URG', 'ACK, SYN, RST, FIN, URG, PSH', 'URG, PSH, ACK, SYN, RST, FIN']],
        ['Welke flag zet een verbinding actief op?', 'SYN', ['FIN', 'RST', 'PSH']]
      ]
    },
    {
      id: 'known-ports', title: 'TCP/UDP Known Ports', category: 'Ports', file: 'TCP-UDP Known Ports.pdf', pages: 2,
      summary: 'De belangrijkste well-known systeem- en applicatiepoorten.',
      prompts: [
        ['Welke poort gebruikt SSH?', '22', ['21', '23', '25']],
        ['Welke poort gebruikt DNS?', '53', ['42', '67', '69']],
        ['Welke poorten gebruiken DHCPv4-server en -client?', '67 en 68', ['53 en 54', '546 en 547', '161 en 162']],
        ['Welke poorten gebruiken HTTP en HTTPS?', '80 en 443', ['20 en 21', '110 en 995', '389 en 636']],
        ['Welke poort gebruikt NTP?', '123', ['118', '143', '161']],
        ['Welke poorten gebruiken SNMP en SNMP Trap?', '161 en 162', ['67 en 68', '389 en 445', '546 en 547']],
        ['Welke poort gebruikt BGP?', '179', ['143', '161', '389']],
        ['Welke poorten gebruiken DHCPv6-client en -server?', '546 en 547', ['67 en 68', '464 en 465', '587 en 636']],
        ['Welke poort gebruikt LDAP over SSL?', '636', ['389', '443', '614']],
        ['Welke poorten gebruiken IMAPS en POP3S?', '993 en 995', ['143 en 110', '992 en 993', '587 en 636']]
      ]
    },
    {
      id: 'udp-header', title: 'UDP Header', category: 'Headers', file: 'UDP Header.pdf', pages: 1,
      summary: 'De vier vaste UDP-headervelden en de payload.',
      prompts: [
        ['Welke velden vormen de eerste 32 bits van UDP?', 'Source Port en Destination Port', ['Length en Checksum', 'Sequence en ACK', 'Version en IHL']],
        ['Welke velden vormen de tweede 32 bits van UDP?', 'Length en Checksum', ['Source en Destination Port', 'Flags en Window', 'Protocol en TTL']],
        ['Hoe groot is de UDP-header?', '8 bytes', ['4 bytes', '12 bytes', '20 bytes']],
        ['Wat volgt direct op de UDP-checksum?', 'Data', ['Options', 'Sequence Number', 'Urgent Pointer']],
        ['Hoe breed is elk vast UDP-headerveld?', '16 bits', ['8 bits', '32 bits', '64 bits']]
      ]
    },
    {
      id: 'xstp-bpdu', title: 'xSTP BPDU', category: 'Headers', file: 'xSTP BPDU.pdf', pages: 1,
      summary: 'BPDU common header, timers en RSTP/MSTP-vlaggen.',
      prompts: [
        ['Welke velden openen de BPDU common header?', 'Protocol ID, Version, Message Type en Flags', ['Root ID, Cost, Sender ID en Port ID', 'Message Age, Max Age, Hello en Forward Delay', 'TC, Proposal, Learning en Forwarding']],
        ['Welke identificatie volgt op Flags?', 'Root Bridge ID', ['Sender Bridge ID', 'Port ID', 'Root Path Cost']],
        ['Wat staat tussen Root Bridge ID en Sender Bridge ID?', 'Root Path Cost', ['Port ID', 'Message Age', 'Forward Delay']],
        ['Wat is de timervolgorde na Port ID?', 'Message Age, Max Age, Hello Time, Forward Delay', ['Hello Time, Message Age, Forward Delay, Max Age', 'Max Age, Forward Delay, Hello Time, Message Age', 'Message Age, Hello Time, Max Age, Forward Delay']],
        ['Welke BPDU flag is bit 0?', 'Topology Change (TC)', ['Proposal', 'Agreement', 'Topology Change Ack']],
        ['Welke BPDU flag is bit 7?', 'Topology Change Ack (TCA)', ['Topology Change', 'Forwarding', 'Agreement']],
        ['Welke versie activeert MSTP Extensions in het diagram?', 'Version 3', ['Version 1', 'Version 2', 'Version 4']]
      ]
    }
  ].map((diagram) => ({
    ...diagram,
    prompts: diagram.prompts.map(([question, answer, distractors], index) => ({ id: `${diagram.id}-${index + 1}`, question, answer, options: [answer, ...distractors] }))
  }));

  root.DIAGRAM_TRAINER = Object.freeze({
    VERSION: 1,
    DIAGRAMS: Object.freeze(diagrams),
    questionCount: diagrams.reduce((count, diagram) => count + diagram.prompts.length, 0)
  });
  if (typeof module !== 'undefined' && module.exports) module.exports = root.DIAGRAM_TRAINER;
})(typeof window === 'undefined' ? globalThis : window);
