/* Original Dutch study material aligned to CCNA SRWE. No official exam items. */
window.CCNA2_COURSE = {
  id: 'ccna2-srwe',
  title: 'CCNA2 · Switching, Routing & Wireless Essentials',
  version: '2026-08-20',
  note: 'Eigen cursusnotities en oefenvragen. Introductielessen x.0 zijn bewust overgeslagen.',
  modules: [
    {
      id: 1, title: 'Basic Device Configuration', color: '#ff7043',
      summary: 'Configureer en controleer een switch of router veilig vanaf de eerste boot: beheeradres, poorten, SSH en rechtstreeks verbonden netwerken.',
      diagram: { type: 'management', nodes: ['Admin-pc', 'S1', 'R1', 'LAN'], links: [[0,1,'SSH'],[1,2,'trunk/uplink'],[2,3,'gateway']] },
      sections: [
        { id:'1.1', title:'Configure a Switch with Initial Settings', points:[
          'Een Layer-2-switch heeft geen IP-adres nodig om frames te schakelen. Voor beheer op afstand krijgt een SVI (interface vlan) wel een adres; de SVI wordt pas line protocol up wanneer de VLAN bestaat en minstens één poort in die VLAN actief is.',
          'Beveilig privileged EXEC met enable secret, versleutel leesbare wachtwoorden met service password-encryption, stel een banner in en sla de actieve configuratie op in startup-config.',
          'Voor beheer buiten het lokale subnet gebruikt een Layer-2-switch ip default-gateway. Een multilayer switch met ip routing gebruikt routes en geen ip default-gateway.'
        ], commands:`hostname S1\nno ip domain-lookup\nenable secret <STERK_GEHEIM>\nservice password-encryption\nbanner motd # Alleen bevoegde toegang #\ninterface vlan 99\n ip address 192.0.2.2 255.255.255.0\n no shutdown\nexit\nip default-gateway 192.0.2.1\ncopy running-config startup-config`, verify:['show running-config','show startup-config','show ip interface brief','show interfaces vlan 99'] },
        { id:'1.2', title:'Configure Switch Ports', points:[
          'Configureer een eindapparaatpoort expliciet als accesspoort. Beschrijvingen, snelheid en duplex moeten aan beide uiteinden overeenkomen; autonegotiation is normaal de veiligste keuze tenzij het ontwerp vaste waarden vereist.',
          'Auto-MDIX herkent rechte en crossover-kabels wanneer de interface dit ondersteunt. Duplex-mismatch veroorzaakt late collisions, FCS-fouten en zeer slechte prestaties, ook als de link up blijft.',
          'De interfacecounters zijn diagnostisch bewijs: kijk naar input errors, CRC/FCS, collisions, late collisions en drops en vergelijk beide uiteinden.'
        ], commands:`interface range gigabitEthernet 0/1-4\n description USER_PORTS\n switchport mode access\n spanning-tree portfast\n no shutdown`, verify:['show interfaces status','show interfaces counters errors','show interfaces gigabitEthernet 0/1','show controllers ethernet-controller'] },
        { id:'1.3', title:'Secure Remote Access', points:[
          'SSH versleutelt beheer; Telnet niet. IOS heeft een hostname, domeinnaam, RSA-sleutelpaar, lokale gebruiker en VTY-login via de lokale database nodig.',
          'Beperk de VTY-lijnen tot SSH. RSA 2048 bit is een bruikbare labkeuze; productiebeleid kan langere sleutels, AAA en management-ACL’s eisen.',
          'De SSH-client moet het beheer-IP kunnen bereiken en de juiste gebruikersnaam gebruiken. Een falende sessie kan netwerk-, sleutel-, VTY- of authenticatieproblemen hebben.'
        ], commands:`ip domain-name lab.example\nusername admin privilege 15 secret <STERK_GEHEIM>\ncrypto key generate rsa modulus 2048\nip ssh version 2\nline vty 0 15\n login local\n transport input ssh\n exec-timeout 10 0`, verify:['show ip ssh','show ssh','show users','ssh -l admin 192.0.2.2'] },
        { id:'1.4', title:'Basic Router Configuration', points:[
          'Een routerinterface vormt een Layer-3-grens en heeft meestal een uniek subnetadres. no shutdown is vereist; administratively down betekent dat de interface softwarematig is uitgezet.',
          'IPv6-routing wordt globaal ingeschakeld met ipv6 unicast-routing. Een interface kan tegelijk een IPv4-adres, IPv6-GUA en automatisch gevormd link-local adres hebben.',
          'Een beschrijving legt het doel en de buur vast en versnelt storingsanalyse.'
        ], commands:`hostname R1\nipv6 unicast-routing\ninterface gigabitEthernet 0/0/0\n description LAN_A\n ip address 192.0.2.1 255.255.255.0\n ipv6 address 2001:db8:1::1/64\n no shutdown`, verify:['show ip interface brief','show ipv6 interface brief','show interfaces description','show running-config interface g0/0/0'] },
        { id:'1.5', title:'Verify Directly Connected Networks', points:[
          'Een actieve interface plaatst een connected route (C) voor het subnet en een local host route (L /32 of /128) voor het eigen adres in de routingtabel.',
          'Gebruik eerst show ip interface brief voor status, daarna show route voor Layer 3 en pas dan ping/traceroute. Test oplopend: loopback, eigen interface, lokale buur, remote doel.',
          'IPv6-neighbors verschijnen in show ipv6 neighbors; dit is het NDP-equivalent van de IPv4 ARP-cache.'
        ], commands:`show ip route connected\nshow ipv6 route connected\nshow arp\nshow ipv6 neighbors\nping 192.0.2.10\ntraceroute 198.51.100.10`, verify:['Interface is up/up','Connected en local routes aanwezig','Buuradres resolveert naar een MAC-adres','End-to-end ping slaagt'] }
      ],
      lab:{ title:'Beveiligde beheertoegang', task:'Bouw pc—S1—R1. Configureer VLAN 99 als management-VLAN, SSH op beide apparaten, dual-stack op de routeruplink en bewijs bereikbaarheid met show-commando’s en pings.', success:['Geen Telnet op VTY','S1 is vanaf een ander subnet via de gateway bereikbaar','Running-config is opgeslagen','Interfacefouten blijven nul'] },
      pitfalls:['Een SVI zonder actieve poort blijft down/down.','Een vergeten no shutdown geeft administratively down.','Een default gateway op een host moet in hetzelfde lokale subnet liggen.'],
      questions:[
        {q:'Waarom kan een switch frames blijven doorsturen zonder beheer-IP?',o:['Switching gebruikt de MAC-adrestabel op Layer 2.','ARP levert altijd een automatisch beheer-IP.','Elke switchpoort krijgt een routingtabel.','STP deelt een IP-adres uit.'],a:0,e:'Het beheer-IP is voor IP-beheer; Ethernet-switching zelf is Layer 2.'},
        {q:'Welke combinatie maakt versleutelde VTY-aanmelding met een lokale gebruiker mogelijk?',o:['login local en transport input ssh','password cisco en transport output telnet','enable password en login','service password-encryption en no login'],a:0,e:'login local raadpleegt de lokale gebruikersdatabase; transport input ssh blokkeert Telnet.'},
        {q:'Een switchpoort toont veel late collisions. Wat is de meest waarschijnlijke oorzaak?',o:['Duplex-mismatch','Onjuist default gateway','Ontbrekende RSA-sleutel','Verkeerde VLAN-naam'],a:0,e:'Late collisions passen bij een half/full-duplexconflict of fysiek gedeeld medium.'},
        {q:'Wat betekent administratively down?',o:['De interface is met shutdown uitgezet.','Er bestaat geen ARP-entry.','De lijn heeft een native-VLAN mismatch.','De interface heeft geen DNS-server.'],a:0,e:'De administratieve status komt rechtstreeks van shutdown/no shutdown.'}
      ]
    },
    {
      id:9,title:'FHRP Concepts',color:'#00d2d3',
      summary:'Maak de default gateway hoog beschikbaar met een virtueel IP/MAC en begrijp HSRP-verkiezing, preemption en tracking.',
      diagram:{type:'fhrp',nodes:['Clients','Virtual GW','R1 ACTIVE','R2 STANDBY','WAN'],links:[[0,1,'VIP'],[1,2,'forward'],[1,3,'backup'],[2,4,'uplink'],[3,4,'uplink']]},
      sections:[
        {id:'9.1',title:'First Hop Redundancy Protocols',points:[
          'Hosts hebben meestal één default gateway. Zonder FHRP blijft die configuratie naar een defecte router wijzen. Een FHRP laat meerdere routers één virtueel gateway-IP en -MAC presenteren.',
          'HSRP is Cisco-georiënteerd, VRRP is een open standaard en GLBP kan naast redundantie ook gateway-loadsharing leveren. Het cursuslab focust op HSRP.',
          'FHRP vervangt geen routingprotocol: de actieve gateway moet nog steeds routes naar externe netwerken hebben.'
        ],commands:`show standby brief\nshow standby`,verify:['Virtueel IP ligt in clientsubnet','Eén active en één standby','Clients gebruiken VIP, niet fysiek routeradres']},
        {id:'9.2',title:'HSRP',points:[
          'De router met de hoogste HSRP-priority wordt active; standaard is 100. Bij gelijke priority beslist het hoogste interface-IP. preempt laat een later terugkerende router met hogere priority de active-rol hernemen.',
          'HSRPv1 gebruikt voor IPv4 een virtueel MAC-patroon 0000.0c07.acXX; HSRPv2 ondersteunt meer groepen en gebruikt een ander patroon. Groep, versie, VIP en authenticatie moeten overeenkomen.',
          'Standaard hello/hold zijn typisch 3/10 seconden. Object tracking kan de priority verlagen wanneer bijvoorbeeld de WAN-uplink faalt, zodat een nog levende maar geïsoleerde router niet active blijft.'
        ],commands:`interface g0/0\n standby version 2\n standby 10 ip 192.0.2.1\n standby 10 priority 110\n standby 10 preempt\n standby 10 track g0/1 20`,verify:['show standby brief','show standby g0/0','Failover na shutdown uplink','ARP voor VIP wijst naar virtual MAC']}
      ],
      lab:{title:'Gatewayfailover',task:'Configureer R1 en R2 in HSRP-groep 10 met VIP 192.0.2.1. Maak R1 preferred active, track de WAN-link en voer een continue ping uit terwijl je die link onderbreekt.',success:['R1 active, R2 standby','Clientgateway is VIP','Tracking veroorzaakt gecontroleerde rolwissel','Herstel + preempt brengt preferred rol terug']},
      pitfalls:['Zonder preempt neemt een teruggekeerde router met hogere priority de rol niet automatisch terug.','HSRP beschermt alleen het first-hop pad dat je correct trackt.','Clients mogen niet het fysieke interface-IP als gateway gebruiken.'],
      questions:[
        {q:'Welke HSRP-router wordt normaal active?',o:['De hoogste priority, daarna hoogste IP als tiebreaker','De laagste MAC','De laagste priority','De router met meeste routes ongeacht priority'],a:0,e:'Priority is de primaire verkiezingswaarde.'},
        {q:'Waarom is standby preempt nodig?',o:['Om een terugkerende router met hogere priority de active-rol te laten hernemen','Om DHCP te relayen','Om STP te versnellen','Om het virtuele IP te versleutelen'],a:0,e:'Zonder preemption blijft de huidige active doorgaans actief zolang hij gezond is.'},
        {q:'Welk adres configureert een host als gateway in HSRP?',o:['Het virtuele IP','Het fysieke R1-adres','Het broadcastadres','Het HSRP-multicastadres'],a:0,e:'Het virtuele adres blijft stabiel over een failover.'},
        {q:'Wat lost HSRP niet op?',o:['Een ontbrekende route na de actieve gateway','Uitval van één gatewayrouter','Wijziging van het virtuele MAC bij failover','First-hop beschikbaarheid'],a:0,e:'FHRP levert een redundante first hop, maar geen volledige routingoplossing.'}
      ]
    },
    {
      id:10,title:'LAN Security Concepts',color:'#ff6b6b',
      summary:'Herken endpoint-, toegangs- en Layer-2-aanvallen en koppel elke dreiging aan de juiste verdedigingslaag.',
      diagram:{type:'security',nodes:['Attacker','Access switch','Legit client','DHCP/AAA','Gateway'],links:[[0,1,'spoof/flood'],[2,1,'trusted endpoint'],[1,3,'bindings/auth'],[1,4,'uplink']]},
      sections:[
        {id:'10.1',title:'Endpoint Security',points:[
          'Endpoints zijn aanvalsoppervlak én springplank. Basismaatregelen zijn patches, antimalware/EDR, hostfirewall, least privilege, sterke authenticatie, back-ups en gebruikersbewustzijn.',
          'Network access control kan identiteit en device posture controleren voordat volledige netwerktoegang wordt verleend. Segmentatie beperkt laterale beweging wanneer een endpoint toch wordt gecompromitteerd.',
          'Beschikbaarheid, integriteit en vertrouwelijkheid (CIA) helpen impact classificeren; logging en tijdsynchronisatie ondersteunen detectie en onderzoek.'
        ],commands:`show logging\nshow clock\nshow ntp associations`,verify:['Beheerprotocollen versleuteld','Onnodige services uit','Logs gaan naar bewaakte bestemming']},
        {id:'10.2',title:'Access Control',points:[
          'AAA scheidt Authentication (wie ben je), Authorization (wat mag je) en Accounting (wat deed je). Lokale accounts zijn een fallback; centrale RADIUS/TACACS+ schaalt en auditeert beter.',
          '802.1X gebruikt supplicant, authenticator (switch/AP) en authentication server. Tot succesvolle authenticatie is normale datatoegang beperkt.',
          'Beheer plane, control plane en data plane vragen elk eigen bescherming. Een management-VLAN alleen is geen authenticatie of encryptie.'
        ],commands:`aaa new-model\nusername fallback privilege 15 secret <GEHEIM>\nline vty 0 15\n transport input ssh`,verify:['Authenticatiepad en fallback getest','Minimale privileges','Accounting/logging beschikbaar']},
        {id:'10.3',title:'Layer 2 Security Threats',points:[
          'Layer 2 vertrouwt vaak impliciet op lokale deelnemers. Veelvoorkomende bedreigingen zijn MAC-flooding, VLAN hopping, DHCP starvation/rogue DHCP, ARP spoofing, IP/MAC spoofing en STP-manipulatie.',
          'Verdediging is gelaagd: port security, vaste access/trunkconfiguratie, DHCP snooping, Dynamic ARP Inspection, IP Source Guard en BPDU Guard/Root Guard.',
          'Trust nooit alle accesspoorten. Uplinks naar echte infrastructuur zijn selectief trusted; eindgebruikerpoorten blijven untrusted.'
        ],commands:`show port-security\nshow ip dhcp snooping\nshow ip arp inspection\nshow spanning-tree inconsistentports`,verify:['Trustgrenzen gedocumenteerd','Accesspoorten hard ingesteld','Beschermingsfeatures per VLAN actief']},
        {id:'10.4',title:'MAC Address Table Attack',points:[
          'Bij MAC flooding vult een aanvaller de CAM/MAC-tabel met vele vervalste bronadressen. Wanneer legitieme bestemmingen onbekend worden, floodt de switch frames en ontstaat kans op afluisteren en overbelasting.',
          'Port security begrenst het aantal toegestane bron-MAC’s per accesspoort en kan statisch, dynamisch of sticky leren.',
          'Violation modes: protect dropt zonder melding/counter zoals restrict; restrict dropt en logt/telt; shutdown zet de poort err-disabled (standaard).'
        ],commands:`switchport port-security\nswitchport port-security maximum 2\nswitchport port-security mac-address sticky\nswitchport port-security violation restrict`,verify:['show port-security interface f0/1','show port-security address','Maximum past bij telefoon + pc']},
        {id:'10.5',title:'LAN Attacks',points:[
          'VLAN hopping ontstaat via ongewenste trunkonderhandeling of double tagging. Hard accessmode, DTP uit, ongebruikte native VLAN en beperkte allowed-lijsten verkleinen het risico.',
          'DHCP starvation put leases uit; een rogue server levert kwaadaardige gateway/DNS. DHCP snooping valideert berichten, markeert server-uplinks trusted en bouwt bindings.',
          'ARP spoofing vervalst IP–MAC-koppelingen. DAI controleert ARP op untrusted poorten tegen DHCP-snoopingbindings of ARP ACL’s.',
          'STP-aanvallen proberen root te worden. BPDU Guard beschermt edgepoorten; Root Guard voorkomt superieure BPDUs op een plaats waar nooit een root hoort.'
        ],commands:`switchport nonegotiate\nip dhcp snooping\nip dhcp snooping vlan 10,20\ninterface g0/1\n ip dhcp snooping trust\nip arp inspection vlan 10,20`,verify:['show ip dhcp snooping binding','show ip arp inspection statistics','show interfaces trunk']}
      ],
      lab:{title:'Dreiging naar maatregel',task:'Maak een tabel met acht aanvalsscenario’s. Demonstreer in Packet Tracer minstens rogue DHCP, MAC-limit violation en een ontvangen BPDU op een edgepoort; leg per geval detectiesignaal en herstel vast.',success:['Elke aanval heeft preventie + verificatie','Trusted poorten alleen richting infrastructuur','Logs/counters tonen blokkering','Legitiem verkeer blijft werken']},
      pitfalls:['Een poort trusted maken is een veiligheidsbeslissing, geen generieke fix.','DAI zonder correcte bindings kan legitieme statische hosts blokkeren.','Port security beveiligt niet automatisch trunks of routed ports.'],
      questions:[
        {q:'Welke feature beschermt tegen een rogue DHCP-server op een accesspoort?',o:['DHCP snooping','PortFast','DTP desirable','HSRP'],a:0,e:'DHCP snooping dropt serverberichten vanaf untrusted interfaces.'},
        {q:'Waartegen beschermt DAI?',o:['Ongeldige ARP IP–MAC-koppelingen','Een fout DNS-record','STP root election','SSH brute force'],a:0,e:'DAI valideert ARP-inhoud tegen vertrouwde bindings.'},
        {q:'Welke port-security mode zet standaard de poort err-disabled bij overtreding?',o:['shutdown','restrict','protect','monitor'],a:0,e:'Shutdown is de standaard violation action.'},
        {q:'Waarom is dynamic auto op een gebruikerspoort riskant?',o:['Een aanvaller kan trunkonderhandeling proberen.','Het schakelt DHCP uit.','Het maakt de poort routed.','Het verwijdert de MAC-tabel.'],a:0,e:'Hard accessmode voorkomt een ongewenste DTP-trunk.'}
      ]
    },
    {
      id:11,title:'Switch Security Configuration',color:'#ee5253',
      summary:'Configureer port security, VLAN-hoppingbescherming, DHCP snooping, DAI en STP-guards als één samenhangende accesslaag.',
      diagram:{type:'secure-access',nodes:['User','Secure access port','S1','Trusted uplink','DHCP server'],links:[[0,1,'max MAC'],[1,2,'untrusted'],[2,3,'trust'],[3,4,'server']]},
      sections:[
        {id:'11.1',title:'Implement Port Security',points:[
          'Port security werkt op statische accesspoorten en soms statische trunks, platformafhankelijk. Stel eerst de switchportmode in, activeer port security en bepaal maximum, leerwijze, aging en violation mode.',
          'Sticky learning schrijft geleerde adressen in running-config; sla de configuratie op als ze na reload behouden moeten blijven. Voice+pc vereist doorgaans minstens twee veilige MAC-posities.',
          'Bij err-disable: onderzoek eerst het vreemde MAC-adres, verwijder de oorzaak en herstel daarna gecontroleerd met shutdown/no shutdown of passend recoverybeleid.'
        ],commands:`interface f0/1\n switchport mode access\n switchport access vlan 10\n switchport voice vlan 20\n switchport port-security\n switchport port-security maximum 2\n switchport port-security mac-address sticky\n switchport port-security violation restrict`,verify:['show port-security','show port-security interface f0/1','show port-security address']},
        {id:'11.2',title:'Mitigate VLAN Attacks',points:[
          'Zet alle endpointpoorten expliciet access en ongebruikte poorten shutdown in een parking-VLAN. Configureer trunks expliciet, zet DTP uit en laat alleen vereiste VLANs toe.',
          'Gebruik een ongebruikte native VLAN en laat native VLANs exact overeenkomen. Double-tagging profiteert van ongetagde native frames; ontwerp voorkomt dat gebruikersverkeer in de native VLAN zit.'
        ],commands:`interface range f0/1-20\n switchport mode access\ninterface g0/1\n switchport mode trunk\n switchport trunk native vlan 999\n switchport trunk allowed vlan 10,20,99\n switchport nonegotiate`,verify:['show interfaces trunk','show interfaces switchport','Geen userpoort in native VLAN']},
        {id:'11.3',title:'Mitigate DHCP Attacks',points:[
          'Activeer DHCP snooping globaal en per VLAN. Alleen links richting bevoegde DHCP-server/relay zijn trusted; clientpoorten zijn standaard untrusted.',
          'Rate limiting op untrusted poorten beperkt starvation, maar een te lage waarde kan echte clients of telefoon+pc-combinaties blokkeren.',
          'De snooping binding database koppelt VLAN, MAC, IP, lease en interface en voedt DAI/IP Source Guard.'
        ],commands:`ip dhcp snooping\nip dhcp snooping vlan 10,20\ninterface g0/1\n ip dhcp snooping trust\ninterface range f0/1-20\n ip dhcp snooping limit rate 15`,verify:['show ip dhcp snooping','show ip dhcp snooping binding','show ip dhcp snooping statistics']},
        {id:'11.4',title:'Mitigate ARP Attacks',points:[
          'DAI is per VLAN actief en inspecteert ARP op untrusted poorten. Geldigheid komt meestal uit de DHCP-snoopingdatabase; statische hosts vragen een passende ARP ACL of statische binding.',
          'Uplink/trunk naar vertrouwde switchinfrastructuur kan trusted zijn. Maak nooit gebruikerspoorten trusted om een bindingprobleem te omzeilen.',
          'Optionele validatie van bron-MAC, bestemming-MAC en IP verhoogt controle maar moet met het echte verkeer getest worden.'
        ],commands:`ip arp inspection vlan 10,20\ninterface g0/1\n ip arp inspection trust\nip arp inspection validate src-mac dst-mac ip`,verify:['show ip arp inspection','show ip arp inspection interfaces','show ip arp inspection statistics']},
        {id:'11.5',title:'Mitigate STP Attacks',points:[
          'PortFast + BPDU Guard is het standaardpatroon voor echte edgepoorten. Een ontvangen BPDU wijst daar op verkeerde bekabeling of een ongeautoriseerde switch.',
          'Root Guard hoort op een link waar downstream nooit root mag worden; bij een superieure BPDU gaat de poort root-inconsistent en herstelt wanneer de BPDUs stoppen.',
          'Loop Guard beschermt tegen een unidirectioneel/control-planeverlies waarbij BPDUs verdwijnen op een non-designated pad. Kies guards op basis van het beoogde poortrolmodel.'
        ],commands:`interface range f0/1-20\n spanning-tree portfast\n spanning-tree bpduguard enable\ninterface g0/2\n spanning-tree guard root`,verify:['show spanning-tree inconsistentports','show errdisable recovery','show spanning-tree interface f0/1 detail']}
      ],
      lab:{title:'Harden een accessswitch',task:'Pas een volledige veilige baseline toe op S1: parking-VLAN, statische trunk, PortFast/BPDU Guard, port security, DHCP snooping en DAI. Test zowel legitieme DHCP/ARP als drie overtredingen.',success:['Normale client krijgt lease en gateway','Rogue server geblokkeerd','Vreemd MAC geteld/geblokkeerd','Onverwachte BPDU schakelt edgepoort uit']},
      pitfalls:['DHCP snooping en DAI moeten in de juiste VLANs actief zijn.','Sticky adressen zijn pas duurzaam na opslaan.','Een te brede trusted-zone maakt inspectie nutteloos.'],
      questions:[
        {q:'Welke database gebruikt DAI gewoonlijk voor dynamische hosts?',o:['De DHCP-snooping binding database','De DNS-cache','De STP topology database','De routing table'],a:0,e:'Snooping levert de gevalideerde IP–MAC–VLAN–poortbinding.'},
        {q:'Wat moet je doen voor een legitieme statische host onder DAI?',o:['Een passende ARP ACL of statische binding voorzien','De accesspoort altijd trusted maken','DTP inschakelen','HSRP preempt uitschakelen'],a:0,e:'Statische hosts verschijnen niet vanzelf in DHCP-bindings.'},
        {q:'Welke combinatie hoort op een echte endpointpoort?',o:['PortFast en BPDU Guard','Root Guard en trunk desirable','LACP passive en DAI trust','HSRP en ip routing'],a:0,e:'Snelle edgeconvergentie plus blokkering van onverwachte BPDUs.'},
        {q:'Waarom configureer je DHCP rate limiting voorzichtig?',o:['Legitieme bursts kunnen anders een poort err-disable maken.','Het verandert de VLAN-ID.','Het verlaagt HSRP-priority.','Het wist sticky MACs.'],a:0,e:'De limiet moet passen bij normaal clientgedrag en platformactie.'}
      ]
    },
    {
      id:12,title:'WLAN Concepts',color:'#0abde3',
      summary:'Begrijp 802.11-media, AP-architecturen, associatie, CAPWAP, radiokanalen, dreigingen en moderne WLAN-beveiliging.',
      diagram:{type:'wireless',nodes:['Wi-Fi client','Lightweight AP','CAPWAP','WLC','LAN'],links:[[0,1,'802.11'],[1,2,'tunnel'],[2,3,'control/data'],[3,4,'802.3']]},
      sections:[
        {id:'12.1',title:'Introduction to Wireless',points:[
          'Wi-Fi gebruikt een gedeeld half-duplex radiomedium. CSMA/CA probeert collisions te vermijden met luisteren, willekeurige backoff en acknowledgements; collisions kunnen niet betrouwbaar tijdens zenden gedetecteerd worden.',
          'Een BSS bestaat rond één AP/BSSID. Meerdere AP’s met hetzelfde SSID kunnen een ESS vormen voor roaming. Een IBSS/ad hoc-netwerk heeft geen infrastructuur-AP.',
          'RF-kwaliteit hangt af van signaalsterkte, SNR, interferentie, obstakels, frequentie en kanaalbreedte; meer vermogen is niet automatisch beter.'
        ],commands:`show wireless stats client detail`,verify:['SSID/BSSID onderscheiden','Client ziet bruikbare SNR','Kanaalplan vermijdt overmatige overlap']},
        {id:'12.2',title:'WLAN Components',points:[
          'Autonomous AP’s voeren control- en datafuncties lokaal uit. Lightweight AP’s worden centraal door een WLC beheerd; cloud-managed is een derde operationeel model.',
          'Antennes kunnen omnidirectioneel of directioneel zijn. Gain vormt het stralingspatroon; wettelijke EIRP-limieten tellen zendervermogen, kabelverlies en antennewinst samen.',
          'PoE voedt AP’s via Ethernet. Switchpoort, PoE-budget, uplinkcapaciteit en VLAN-trunking moeten bij het AP/WLAN-ontwerp passen.'
        ],commands:`show power inline\nshow interfaces status`,verify:['AP krijgt voldoende PoE','Management- en client-VLANpad correct','Antenne/plaatsing past bij dekking']},
        {id:'12.3',title:'WLAN Operation',points:[
          'Een client ontdekt AP’s passief via beacons of actief via probe requests/responses, kiest een BSS en doorloopt 802.11-authenticatie en association; hogere beveiligingshandshakes volgen daarna.',
          'Managementframes regelen discovery, authentication en association; controlframes ondersteunen mediumtoegang; dataframes dragen gebruikersverkeer.',
          'Roamingbeslissing ligt meestal bij de client. Consistente SSID/security en voldoende overlap helpen, maar te veel overlap verhoogt co-channel contention.'
        ],commands:`show wireless client summary`,verify:['Client geassocieerd met bedoelde WLAN','Authenticatie en DHCP voltooid','Roaming behoudt bruikbare connectiviteit']},
        {id:'12.4',title:'CAPWAP Operation',points:[
          'CAPWAP koppelt lightweight AP en WLC. De controltunnel is versleuteld; datatunnel kan centraal clientverkeer transporteren. CAPWAP gebruikt IP, zodat AP en WLC routed van elkaar kunnen staan.',
          'Een AP ontdekt controllers via onder meer lokale broadcast, DHCP option 43, DNS of eerder opgeslagen informatie. Daarna volgen join, configuratie en operationele toestand.',
          'Split-MAC verdeelt tijdkritische 802.11-functies naar het AP en centrale beleids-/beheerfuncties naar de WLC.'
        ],commands:`show ap summary\nshow capwap client state`,verify:['AP heeft WLC ontdekt en joined','Managementreachability en tijd correct','CAPWAP controlpad up']},
        {id:'12.5',title:'Channel Management',points:[
          '2,4 GHz heeft weinig niet-overlappende 20-MHz-kanalen; in veel regio’s worden 1, 6 en 11 gebruikt. 5 en 6 GHz bieden meer kanalen maar andere dekking/regelgeving.',
          'Adjacent-channel interference ontstaat bij overlappende kanalen; co-channel interference is eigenlijk gedeelde airtime tussen cellen op hetzelfde kanaal.',
          'Brede kanalen verhogen pieksnelheid maar verbruiken meer spectrum en hergebruik wordt moeilijker. Ontwerp op capaciteit, niet alleen dekking.'
        ],commands:`show advanced 802.11a channel\nshow advanced 802.11b channel`,verify:['Kanaal en vermogen passen bij buren','Geen onnodig brede kanalen','DFS/regiovereisten gerespecteerd']},
        {id:'12.6',title:'WLAN Threats',points:[
          'Bedreigingen omvatten rogue AP, evil twin, sniffing, spoofing, deauthentication/disassociation en RF-jamming. Een rogue AP is elk niet-goedgekeurd AP; een evil twin imiteert bewust een betrouwbaar SSID.',
          'Jamming is een beschikbaarheidsaanval op het medium en kan niet enkel met encryptie worden opgelost. Spectrum-analyse en fysieke/RF-lokalisatie zijn nodig.',
          'Open netwerken leveren geen linklaagvertrouwelijkheid; een captive portal is geen vervanging voor WPA-beveiliging.'
        ],commands:`show rogue ap summary`,verify:['Rogue-classificatie gecontroleerd','Management frame protection waar mogelijk','Monitoring detecteert afwijkingen']},
        {id:'12.7',title:'Secure WLANs',points:[
          'WEP en TKIP zijn verouderd. WPA2 gebruikt AES-CCMP; WPA3 versterkt persoonlijke authenticatie met SAE en enterpriseopties. Ondersteuning hangt af van clients en infrastructuur.',
          'Personal gebruikt een gedeeld geheim; Enterprise gebruikt 802.1X/EAP met een RADIUS-server en unieke identiteiten. Enterprise is beter beheersbaar en intrekbaar.',
          'Bescherm managementframes met 802.11w/PMF waar ondersteund en segmenteer gast-, IoT- en bedrijfsclients met eigen beleid.'
        ],commands:`show wlan summary\nshow radius summary`,verify:['Geen WEP/TKIP','AES-CCMP actief','Enterprise WLAN bereikt RADIUS','Gastverkeer gescheiden']}
      ],
      lab:{title:'WLAN-ontwerp op papier en in Packet Tracer',task:'Ontwerp één corporate WPA2-Enterprise WLAN en één geïsoleerd gast-WLAN. Teken AP/WLC/CAPWAP, VLANs, RADIUS, DHCP en kanaalplan; test associatie, lease en segmentatie.',success:['Corporate gebruikt 802.1X/AES','Gast heeft geen intern bereik','AP joined WLC','Kanalen overlappen niet onnodig']},
      pitfalls:['Een SSID is de netwerknaam; BSSID identificeert een specifieke radio/BSS.','Captive portal betekent niet dat radioframes versleuteld zijn.','Breder kanaal is niet automatisch hogere totale capaciteit in drukke RF-omgeving.'],
      questions:[
        {q:'Waarom gebruikt Wi-Fi CSMA/CA en geen klassieke collision detection?',o:['Een radio kan tijdens zenden niet betrouwbaar naar collisions luisteren.','Wi-Fi is full duplex.','AP’s hebben geen MAC-adres.','CAPWAP voorkomt alle collisions.'],a:0,e:'Het gedeelde half-duplex radiomedium vraagt preventie en acknowledgements.'},
        {q:'Wat is een BSSID meestal?',o:['Het MAC-adres dat een specifieke BSS/AP-radio identificeert','De leesbare WLAN-naam','Het management-IP van de WLC','De RADIUS-gebruikersnaam'],a:0,e:'SSID kan door meerdere AP’s gedeeld worden; BSSID maakt de cel specifiek.'},
        {q:'Welke optie is geschikt voor individuele bedrijfsidentiteiten?',o:['WPA2/WPA3 Enterprise met 802.1X','WEP shared key','Open met captive portal','WPA2 Personal met één PSK'],a:0,e:'802.1X koppelt clients aan afzonderlijke accounts/certificaten via AAA.'},
        {q:'Welke CAPWAP-tunnel is standaard beveiligd?',o:['De controltunnel','Altijd alle dataverkeer end-to-end','De DHCP-broadcast','De RF-beacon'],a:0,e:'CAPWAP beveiligt control messaging; datapadgedrag hangt van implementatie/configuratie af.'}
      ]
    },
    {
      id:5,title:'STP Concepts',color:'#54a0ff',
      summary:'Voorkom Layer-2-lussen met STP/RSTP, voorspel root- en poortselectie en stuur het spanning-tree-pad bewust.',
      diagram:{type:'stp',nodes:['S1 ROOT','S2','S3','LAN'],links:[[0,1,'FWD'],[0,2,'FWD'],[1,2,'ALT/BLK'],[2,3,'FWD']]},
      sections:[
        {id:'5.1',title:'Purpose of STP',points:[
          'Redundante Layer-2-links verbeteren beschikbaarheid maar veroorzaken zonder luspreventie broadcast storms, MAC-table instability en meerdere kopieën van hetzelfde frame. Ethernet heeft geen TTL die een lus vanzelf stopt.',
          'STP bouwt een logisch lusvrije boom door overtollige paden te blokkeren en kan een geblokkeerd pad activeren wanneer het actieve pad faalt.',
          'BPDUs dragen bridge- en padinformatie. Switches blijven BPDUs verwerken op geblokkeerde/alternate poorten; blokkeren betekent geen normale dataforwarding, niet dat de poort fysiek uit staat.'
        ],commands:`show spanning-tree\nshow spanning-tree vlan 10`,verify:['Eén root bridge per VLAN/instance','Redundante topologie heeft een alternate/blocking pad','Geen onverwachte topology changes']},
        {id:'5.2',title:'STP Operations',points:[
          'De laagste Bridge ID wint root: eerst priority (met extended system ID/VLAN), daarna MAC-adres. Alle poorten op de root bridge zijn designated en forwarding.',
          'Elke niet-root switch kiest één root port met het laagste totale root path cost. Op elk segment wint één designated port; overige redundante poorten worden non-designated of alternate.',
          'Bij gelijke kosten beslissen achtereenvolgens lagere upstream bridge ID, lagere upstream port priority en lager port ID. Kosten zijn gebaseerd op linkbandbreedte.',
          'Klassiek 802.1D gebruikt blocking, listening, learning en forwarding; RSTP vereenvoudigt tot discarding, learning en forwarding en convergeert sneller met proposal/agreement.'
        ],commands:`show spanning-tree vlan 10 detail\nshow spanning-tree interface g0/1 detail`,verify:['Root ID en local Bridge ID correct gelezen','Root port wijst naar laagste-cost pad','Port roles passen bij het diagram']},
        {id:'5.3',title:'Evolution of STP',points:[
          'PVST+ draait een 802.1D-instance per VLAN; Rapid PVST+ gebruikt 802.1w-gedrag per VLAN. MST bundelt meerdere VLANs in een kleiner aantal instances.',
          'PortFast laat een edge/accesspoort direct forwarding worden, maar schakelt STP niet uit. Gebruik het alleen richting eindapparaten.',
          'BPDU Guard zet een PortFast-poort err-disabled zodra een BPDU binnenkomt en beschermt tegen een ongewenste switch. Root Guard en Loop Guard beschermen andere specifieke invarianten.'
        ],commands:`spanning-tree mode rapid-pvst\nspanning-tree vlan 10 root primary\ninterface range f0/1-20\n spanning-tree portfast\n spanning-tree bpduguard enable`,verify:['show spanning-tree summary','show spanning-tree inconsistentports','show errdisable recovery']}
      ],
      lab:{title:'Root en failover voorspellen',task:'Bouw een driehoek van drie switches met VLAN 10. Noteer Bridge IDs en kosten, voorspel alle rollen, forceer S1 als root primary en onderbreek daarna één forwarding link.',success:['Voorspelling klopt met show spanning-tree','Er blijft precies één logisch pad','Alternate poort neemt over','Endpointpoorten gebruiken PortFast + BPDU Guard']},
      pitfalls:['Rootkeuze gebeurt op de laagste Bridge ID, niet de hoogste priority.','Een geblokkeerde STP-poort blijft BPDUs ontvangen.','PortFast hoort niet op een onbeheerde switch-naar-switchlink.'],
      questions:[
        {q:'Welke switch wordt STP-root?',o:['De switch met de laagste Bridge ID','De switch met de meeste poorten','De switch met de hoogste MAC','De default gateway'],a:0,e:'Priority en daarna MAC vormen de verkiezingsbasis.'},
        {q:'Welke poort kiest een niet-root switch als root port?',o:['Het pad met de laagste totale root path cost','De poort met hoogste poortnummer','Elke trunkpoort','De poort met de meeste VLANs'],a:0,e:'STP vergelijkt eerst de gecumuleerde kosten naar de root.'},
        {q:'Wat doet BPDU Guard bij een BPDU op een beschermde edgepoort?',o:['De poort err-disable zetten','De switch root maken','De VLAN verwijderen','De BPDU flooden naar hosts'],a:0,e:'Dit voorkomt dat een onverwachte bridge via een edgepoort de topologie beïnvloedt.'},
        {q:'Welke RSTP-status stuurt gebruikersframes door?',o:['Forwarding','Discarding','Learning','Listening'],a:0,e:'Alleen forwarding leert én stuurt normale frames door; learning stuurt ze nog niet door.'}
      ]
    },
    {
      id:6,title:'EtherChannel',color:'#5f27cd',
      summary:'Bundel compatibele fysieke links tot één logische Port-Channel met LACP, PAgP of statische mode en diagnoseer bundelproblemen.',
      diagram:{type:'etherchannel',nodes:['S1','Gi0/1','Po1','Gi0/2','S2'],links:[[0,1,'member'],[1,2,'LACP'],[0,3,'member'],[3,4,'bundle'],[2,4,'logical']]},
      sections:[
        {id:'6.1',title:'EtherChannel Operation',points:[
          'EtherChannel combineert meerdere gelijksoortige links in één logische interface. STP ziet de Port-Channel als één link, waardoor alle gebundelde capaciteit bruikbaar kan zijn zonder parallelle STP-blokkering.',
          'Load balancing kiest per flow een member op basis van een hash, bijvoorbeeld bron-/bestemmings-MAC of IP. Eén flow wordt normaal niet over alle links gespreid; de totale bundel profiteert van meerdere flows.',
          'LACP is IEEE 802.1AX/802.3ad-gebaseerd met active/passive. PAgP is Cisco-eigen met desirable/auto. Statische on-mode onderhandelt niet en vereist een foutloze configuratie aan beide zijden.'
        ],commands:`show etherchannel summary\nshow etherchannel load-balance`,verify:['Protocol LACP/PAgP zoals ontworpen','Port-Channel is up','Members tonen gebundelde status P']},
        {id:'6.2',title:'Configure EtherChannel',points:[
          'Memberpoorten moeten compatibel zijn: snelheid, duplex, switchportmode, access-VLAN of trunk-native/allowed VLANs. Configureer consistente kenmerken bij voorkeur op interface range vóór channel-group.',
          'LACP active initieert; passive reageert. Active–active en active–passive werken, passive–passive niet. PAgP desirable–auto of desirable–desirable werkt; auto–auto niet.',
          'Configureer gemeenschappelijke Layer-2-eigenschappen ook op interface port-channel zodat de logische interface de bedoeling vastlegt.'
        ],commands:`interface range g0/1-2\n switchport mode trunk\n switchport trunk allowed vlan 10,20,99\n channel-group 1 mode active\n no shutdown\ninterface port-channel 1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,99`,verify:['show interfaces port-channel 1','show interfaces trunk','show lacp neighbor']},
        {id:'6.3',title:'Verify and Troubleshoot EtherChannel',points:[
          'In show etherchannel summary betekent SU doorgaans Layer 2 en in use; membervlag P betekent bundled. Suspended of stand-alone wijst op protocol- of parameterconflict.',
          'Vergelijk beide uiteinden: channel-groupnummer hoeft lokaal niet gelijk te zijn, maar protocol/modes moeten compatibel zijn en alle poortkenmerken moeten overeenkomen.',
          'Pas structurele wijzigingen op de Port-Channel toe en verifieer daarna de members. Verwijder en herbouw alleen gecontroleerd wanneer configs inconsistent zijn.'
        ],commands:`show etherchannel summary\nshow etherchannel port-channel\nshow interfaces g0/1 etherchannel\nshow lacp neighbor\nshow running-config interface port-channel 1`,verify:['Alle bedoelde members P','Geen suspended links','Trunkdetails aan beide kanten gelijk','STP toont Po1, niet elk member als apart pad']}
      ],
      lab:{title:'LACP-bundel met storing',task:'Bundel twee gigabitlinks tussen S1 en S2 met LACP. Laat VLANs 10/20 toe, genereer meerdere verkeersstromen, trek één member los en bewijs dat Po1 up blijft.',success:['Active–passive of active–active onderhandelt','Beide members aanvankelijk P','Failover behoudt connectiviteit','Herstel voegt member opnieuw toe']},
      pitfalls:['Passive–passive vormt geen LACP-channel.','Een allowed-VLAN mismatch kan een member suspenden.','Een enkele flow krijgt niet noodzakelijk de som van alle linksnelheden.'],
      questions:[
        {q:'Welke LACP-combinatie vormt geen kanaal?',o:['passive–passive','active–passive','active–active','active met een correct LACP-peer'],a:0,e:'Ten minste één zijde moet actief LACP-berichten initiëren.'},
        {q:'Hoe ziet STP een Layer-2 EtherChannel?',o:['Als één logische poort','Als afzonderlijke onafhankelijke lussen','Als een routerinterface','Als één VLAN'],a:0,e:'De Port-Channel is de STP-interface.'},
        {q:'Welke eigenschap moet tussen members overeenkomen?',o:['Trunk/access-parameters','Lokale channel-group-ID op beide switches','Interfacebeschrijving','MAC-adres'],a:0,e:'Incompatibele Layer-2-parameters verhinderen bundeling; lokale groepsnummers mogen verschillen.'},
        {q:'Wat betekent membervlag P gewoonlijk in show etherchannel summary?',o:['De poort is in de bundle','De poort is passive','De poort is geparkeerd','PAgP is verplicht'],a:0,e:'P staat voor bundled in port-channel.'}
      ]
    },
    {
      id:7,title:'DHCPv4',color:'#10ac84',
      summary:'Automatiseer IPv4-configuratie met DORA, IOS DHCP-pools, relay agents en clientconfiguratie.',
      diagram:{type:'dhcp',nodes:['Client','Relay R1','DHCP server','Gateway'],links:[[0,1,'DISCOVER'],[1,2,'relay'],[2,1,'OFFER'],[1,3,'lease']]},
      sections:[
        {id:'7.1',title:'DHCPv4 Concepts',points:[
          'Een nieuwe client gebruikt DORA: DHCPDISCOVER, DHCPOFFER, DHCPREQUEST en DHCPACK. Omdat de client aanvankelijk geen bruikbaar adres of serveradres kent, begint de uitwisseling met broadcasts.',
          'Een lease bevat minimaal adres en masker en vaak default gateway (option 3), DNS (option 6) en leasetijd. Een client probeert rond T1 de lease unicast te vernieuwen en later via rebinding breder te zoeken.',
          'Routers sturen broadcasts niet standaard door. ip helper-address op de client-LAN-interface zet relevante UDP-broadcasts om naar unicast richting een server in een ander subnet.'
        ],commands:`show ip dhcp binding\nshow ip dhcp pool\nshow ip dhcp server statistics`,verify:['Lease komt uit het juiste subnet','Gateway en DNS kloppen','Geen overlap met statische adressen']},
        {id:'7.2',title:'Configure a Cisco IOS DHCPv4 Server',points:[
          'Sluit infrastructuuradressen uit vóór poolallocatie. De network-regel definieert het uitdeelnetwerk; default-router moet een bereikbaar adres in dat subnet zijn.',
          'IOS kiest de pool op basis van de ontvangende interface of het relay-informatieveld (giaddr). Eén router kan meerdere pools voor verschillende LANs hosten.',
          'Controleer bindings én poolgebruik. Een lege pool, verkeerde mask of ontbrekende route naar het clientnetwerk kan de uitgifte stoppen.'
        ],commands:`ip dhcp excluded-address 192.0.2.1 192.0.2.20\nip dhcp pool USERS\n network 192.0.2.0 255.255.255.0\n default-router 192.0.2.1\n dns-server 203.0.113.53\n domain-name lab.example\n lease 7`,verify:['show ip dhcp pool','show ip dhcp binding','show running-config | section dhcp']},
        {id:'7.3',title:'Configure a DHCPv4 Client',points:[
          'Een IOS-interface kan zelf client zijn met ip address dhcp, bijvoorbeeld een kleine kantoorrouter aan een providerzijde.',
          'Een relay hoort op de interface die de clientbroadcast ontvangt, niet op de server-facing interface. Het helper-adres is het unicastadres van de DHCP-server.',
          'Bij troubleshooting volg je het proces: ziet de client link, verlaat DISCOVER de VLAN, ontvangt relay/server het verzoek, bestaat een passende pool en keert OFFER/ACK via het retourpad terug?'
        ],commands:`interface g0/0/0\n ip address dhcp\n no shutdown\n! Relay op client-LAN\ninterface g0/0/1\n ip helper-address 203.0.113.10`,verify:['show ip interface brief','show dhcp lease','debug ip dhcp server events (alleen gecontroleerd in lab)']}
      ],
      lab:{title:'Centraal DHCP met relay',task:'Plaats clients in twee routed LANs en één DHCP-server in een derde subnet. Maak twee pools, sluit gateways uit en configureer helper-address op beide clientinterfaces.',success:['Beide clients krijgen adres uit eigen pool','Gateway/DNS correct','Server ziet twee scopes','Renew werkt zonder configuratiewijziging']},
      pitfalls:['ip helper-address staat aan de clientzijde.','Uitgesloten adressen moeten binnen het relevante netwerk liggen.','Een DHCP-server heeft ook een retourroute naar het relay/clientsubnet nodig.'],
      questions:[
        {q:'Wat is de juiste DORA-volgorde?',o:['Discover, Offer, Request, Acknowledge','Discover, Request, Offer, Acknowledge','Offer, Discover, Acknowledge, Request','Request, Offer, Discover, Acknowledge'],a:0,e:'De client ontdekt, server biedt, client vraagt en server bevestigt.'},
        {q:'Waar configureer je ip helper-address?',o:['Op de routerinterface die clientbroadcasts ontvangt','Op elke client','Alleen op de DHCP-serverinterface','Op de switchconsole'],a:0,e:'De relay onderschept de broadcast op het clientsubnet.'},
        {q:'Welke DHCP-optie levert normaal de default gateway?',o:['Option 3','Option 6','Option 53','Option 82'],a:0,e:'Option 3 is de routeroptie; option 6 is DNS.'},
        {q:'Welke opdracht voorkomt dat een gatewayadres wordt uitgedeeld?',o:['ip dhcp excluded-address','deny dhcp any','no service dhcp pool','ip helper-address'],a:0,e:'Excluded ranges worden buiten de dynamische allocatie gehouden.'}
      ]
    },
    {
      id:8,title:'SLAAC and DHCPv6',color:'#1dd1a1',
      summary:'Ken IPv6-GUA-toewijzing via SLAAC, stateless/stateful DHCPv6 en relay en lees de RA M- en O-flags correct.',
      diagram:{type:'ipv6',nodes:['IPv6 client','R1 RA','DHCPv6 server','2001:db8::/64'],links:[[0,1,'RS/RA'],[0,2,'DHCPv6'],[1,3,'prefix']]},
      sections:[
        {id:'8.1',title:'IPv6 GUA Assignment',points:[
          'Een host kan een GUA handmatig, via SLAAC, via stateless DHCPv6 of via stateful DHCPv6 krijgen. De router levert via ICMPv6 Router Advertisements minimaal prefix- en gatewayinformatie.',
          'De default gateway wordt bij IPv6 uit de RA geleerd, niet uit DHCPv6. Een host vormt naast GUA’s ook een link-local adres en voert Duplicate Address Detection uit.',
          'De interface identifier kan via EUI-64 of een privacy/stabiel willekeurig mechanisme gevormd worden; moderne clients hoeven dus geen zichtbaar MAC-afgeleid adres te gebruiken.'
        ],commands:`ipv6 unicast-routing\ninterface g0/0\n ipv6 address 2001:db8:10::1/64\n no shutdown`,verify:['show ipv6 interface g0/0','show ipv6 neighbors','Host heeft GUA, link-local en default router']},
        {id:'8.2',title:'SLAAC',points:[
          'Bij SLAAC gebruikt de host de RA-prefix met A-flag om zelf een adres te vormen. De router verstuurt periodieke RA’s en antwoordt op Router Solicitations.',
          'M=0 en O=0 betekent alleen SLAAC voor adressering en geen aanvullende DHCPv6-informatie. RDNSS kan DNS in RA aanbieden, maar de CCNA-labben focussen vaak op DHCPv6 voor DNS.',
          'SLAAC houdt op de router geen leasebinding bij; NDP toont alleen actuele neighbors.'
        ],commands:`interface g0/0\n no ipv6 nd managed-config-flag\n no ipv6 nd other-config-flag`,verify:['show ipv6 interface g0/0','RA flags correct','Clientadres ligt in aangekondigde /64']},
        {id:'8.3',title:'DHCPv6',points:[
          'Stateless DHCPv6: SLAAC levert het adres, DHCPv6 levert extra opties zoals DNS; RA O=1, M=0. Stateful DHCPv6: server leaset het adres; RA M=1.',
          'DHCPv6 gebruikt UDP 546 aan clientzijde en UDP 547 aan server/relayzijde. De basisuitwisseling gebruikt Solicit, Advertise, Request en Reply.',
          'Ook bij stateful DHCPv6 blijft de default router afkomstig uit RA. Een DHCPv6-lease alleen is dus niet voldoende voor off-link bereikbaarheid.'
        ],commands:`ipv6 dhcp pool V6-INFO\n dns-server 2001:db8:53::53\n domain-name lab.example`,verify:['show ipv6 dhcp pool','show ipv6 dhcp binding','RA-flag past bij stateless/stateful ontwerp']},
        {id:'8.4',title:'Configure Stateless DHCPv6 Server',points:[
          'Maak een pool met DNS/domein, koppel hem aan het LAN-interface en zet de other-config-flag. De host houdt zijn SLAAC-adres.',
          'De interface heeft een /64-prefix nodig die via RA wordt aangekondigd; suppress-ra zou dit ontwerp breken.'
        ],commands:`ipv6 dhcp pool STATELESS\n dns-server 2001:db8:53::53\n domain-name lab.example\ninterface g0/0\n ipv6 nd other-config-flag\n ipv6 dhcp server STATELESS`,verify:['show ipv6 interface g0/0','Clientadres via SLAAC','DNS-optie via DHCPv6']},
        {id:'8.5',title:'Configure Stateful DHCPv6 Server',points:[
          'Definieer een address prefix in de DHCPv6-pool, koppel de pool en zet de managed-config-flag. IOS- en clientondersteuning kan labgedrag beïnvloeden.',
          'De host leert zijn default router nog steeds via RA en gebruikt DHCPv6 voor het globale adres en opties.'
        ],commands:`ipv6 dhcp pool STATEFUL\n address prefix 2001:db8:20::/64\n dns-server 2001:db8:53::53\ninterface g0/1\n ipv6 nd managed-config-flag\n ipv6 dhcp server STATEFUL`,verify:['show ipv6 dhcp binding','show ipv6 dhcp pool','Clientdefault-route verwijst naar router link-local']},
        {id:'8.6',title:'Configure DHCPv6 Relay Agent',points:[
          'Een relay stuurt DHCPv6-berichten tussen een clientlink en een server op een ander IPv6-netwerk. Configureer de relay destination op het client-facing interface.',
          'Routing en link-local/global reachability tussen relay en server moeten vooraf werken. RA’s voor de clientprefix blijven door de lokale router geleverd.'
        ],commands:`interface g0/0\n ipv6 dhcp relay destination 2001:db8:100::10 g0/1`,verify:['show ipv6 dhcp interface','Serverbindings verschijnen','Client ontvangt opties/adres en RA-gateway']}
      ],
      lab:{title:'Vergelijk drie IPv6-methoden',task:'Gebruik drie LANs: puur SLAAC, stateless DHCPv6 en stateful DHCPv6 via relay. Noteer per client de bron van GUA, DNS en default gateway.',success:['M/O-flags correct','Alle clients hebben link-local + GUA','Default gateway komt overal uit RA','Stateful server toont binding']},
      pitfalls:['DHCPv6 levert geen default gateway.','O=1 wijst op overige informatie; M=1 op beheerde adresconfiguratie.','Een /64 is de normale SLAAC-prefixlengte.'],
      questions:[
        {q:'Waar leert een IPv6-host zijn default gateway?',o:['Uit een Router Advertisement','Uit de DHCPv6 address prefix','Uit DNS','Uit Duplicate Address Detection'],a:0,e:'RA’s kondigen de default router aan, ook bij stateful DHCPv6.'},
        {q:'Welke RA-flags passen bij stateless DHCPv6?',o:['M=0, O=1','M=1, O=0','M=0, O=0 met uitsluitend stateful adressen','M=1, O=1 is verplicht'],a:0,e:'SLAAC verzorgt het adres; O vraagt aanvullende DHCPv6-opties.'},
        {q:'Welke UDP-poort gebruikt een DHCPv6-client?',o:['546','547','67','68'],a:0,e:'Client 546, server/relay 547.'},
        {q:'Wat houdt een SLAAC-router niet bij?',o:['Een centrale leasebinding voor elk toegekend adres','De lokale prefix','NDP-neighbors','RA-instellingen'],a:0,e:'De host vormt zelf het adres; er is geen DHCP-leaseadministratie.'}
      ]
    },
    {
      id: 2, title: 'Switching Concepts', color: '#ff9f43',
      summary: 'Begrijp hoe een switch MAC-adressen leert, frames doorstuurt en collision- en broadcastdomeinen begrenst.',
      diagram:{ type:'switching', nodes:['PC-A','S1','PC-B','S2','PC-C'], links:[[0,1,'Fa0/1'],[1,2,'Fa0/2'],[1,3,'Gi0/1'],[3,4,'Fa0/1']] },
      sections:[
        {id:'2.1',title:'Frame Forwarding',points:[
          'De switch leert het bron-MAC-adres van elk ontvangen frame en koppelt dit aan de inkomende poort en VLAN. Dynamische entries verouderen wanneer geen verkeer ze vernieuwt.',
          'Bij een bekende unicastbestemming stuurt de switch alleen via de gekoppelde poort. Unknown unicast, broadcast en relevante multicast worden binnen dezelfde VLAN via alle andere actieve poorten geflood.',
          'Store-and-forward ontvangt het hele frame en controleert FCS vóór forwarding; cut-through begint na het bestemmingsadres en verlaagt latency maar kan beschadigde frames doorgeven.',
          'Een switch gebruikt buffering per poort of uit gedeeld geheugen. Gedeeld geheugen helpt bij asymmetrische snelheden en tijdelijke bursts.'
        ],commands:`show mac address-table\nshow mac address-table dynamic\nclear mac address-table dynamic`,verify:['Bron-MAC verschijnt op de inkomende poort','Bekende unicast wordt niet naar andere accesspoorten geflood','MAC-entry staat in de juiste VLAN']},
        {id:'2.2',title:'Collision and Broadcast Domains',points:[
          'Elke switchpoort is een afzonderlijk collision domain; full duplex schakelt botsingen uit. Een hub deelt één collision domain en werkt half duplex.',
          'Een VLAN vormt een broadcast domain. Routers en multilayer-switches begrenzen broadcasts; gewone Layer-2-switches verspreiden ze binnen de VLAN.',
          'Microsegmentation geeft elke endpoint een eigen switchpoort en dus eigen bandbreedte. Congestie kan nog steeds optreden bij oversubscribed uplinks.'
        ],commands:`show interfaces status\nshow interfaces switchport\nshow vlan brief`,verify:['Elke accesspoort is aan precies één operationele access-VLAN gekoppeld','Uplinks hebben voldoende capaciteit','Full duplex aan beide uiteinden']}
      ],
      lab:{title:'MAC-learning observeren',task:'Leeg de dynamische MAC-tabel, stuur één ping van PC-A naar PC-B en noteer na ARP en ICMP welke bronadressen op welke poorten geleerd zijn.',success:['Je voorspelt de eerste flooded frames','Daarna wordt unicast gericht doorgestuurd','Je verklaart waarom broadcasts de router niet passeren']},
      pitfalls:['De switch leert van het bronadres, niet van het bestemmingsadres.','Een switch breekt broadcastdomeinen alleen met VLAN-segmentatie; een router routeert ertussen.','FCS-fouten worden met store-and-forward gedetecteerd vóór verzending.'],
      questions:[
        {q:'Wat doet een switch met een frame waarvan het bestemmings-MAC onbekend is?',o:['Flooden binnen dezelfde VLAN behalve de inkomende poort','Naar de default gateway sturen','Altijd droppen','Over alle VLANs flooden'],a:0,e:'Unknown unicast flooding blijft beperkt tot de betreffende VLAN.'},
        {q:'Welke informatie gebruikt de switch om zijn MAC-tabel te leren?',o:['Bron-MAC en inkomende poort','Bestemmings-IP en uitgaande poort','Bron-IP en ARP-timeout','Bestemmings-MAC en default gateway'],a:0,e:'Elke ontvangen framebron onthult waar dat MAC-adres bereikbaar is.'},
        {q:'Wat is een belangrijk voordeel van store-and-forward?',o:['FCS-controle vóór forwarding','Geen framebuffer nodig','Broadcasts worden gerouteerd','MAC-learning wordt uitgeschakeld'],a:0,e:'Het volledige frame is beschikbaar voor lengte- en FCS-validatie.'},
        {q:'Hoeveel collision domains heeft een switch met acht actieve full-duplex accesspoorten?',o:['Acht','Eén','Twee','Nul fysieke segmenten'],a:0,e:'Elke switchpoort vormt zijn eigen segment, ook al ontstaan in full duplex feitelijk geen collisions.'}
      ]
    },
    {
      id:3,title:'VLANs',color:'#feca57',
      summary:'Segmenteer een switched netwerk met VLANs, accesspoorten en 802.1Q-trunks en voorkom ongewenste DTP-onderhandeling.',
      diagram:{type:'vlan',nodes:['PC VLAN10','S1','802.1Q trunk','S2','PC VLAN20'],links:[[0,1,'access 10'],[1,2,'tagged'],[2,3,'tagged'],[3,4,'access 20']]},
      sections:[
        {id:'3.1',title:'Overview of VLANs',points:[
          'Een VLAN is een logisch broadcast domain. Segmentatie beperkt broadcasts, scheidt beleid en laat afdelingen onafhankelijk van fysieke switchlocatie groeperen.',
          'Typische rollen zijn data-, voice-, management-, native- en ongebruikte/parking-VLAN. VLAN 1 bestaat standaard en draagt meerdere controleprotocollen; gebruik voor beheer en ongebruikte poorten liever expliciete andere VLANs.',
          'Hosts in verschillende VLANs hebben Layer-3-routing nodig, ook wanneer ze op dezelfde fysieke switch aangesloten zijn.'
        ],commands:`show vlan brief\nshow interfaces switchport`,verify:['Elke gebruikerspoort heeft de bedoelde access-VLAN','Managementverkeer gebruikt een afzonderlijke VLAN','Ongebruikte poorten staan uit en in een parking-VLAN']},
        {id:'3.2',title:'VLANs in a Multi-Switched Environment',points:[
          'Een 802.1Q-trunk draagt frames van meerdere VLANs. De tag bevat onder meer een 12-bits VLAN-ID; de native VLAN wordt standaard ongetagd verzonden.',
          'Beide trunkuiteinden moeten dezelfde native VLAN en compatibele allowed-VLAN lijst hebben. Een mismatch veroorzaakt lekken, waarschuwingen of onbereikbaarheid.',
          'Voice VLAN laat een Cisco IP-phone spraakframes getagd verzenden terwijl een aangesloten pc ongetagd in de access/data-VLAN werkt. QoS-trust hoort bij een gecontroleerd ontwerp.'
        ],commands:`interface g0/1\n switchport mode trunk\n switchport trunk native vlan 999\n switchport trunk allowed vlan 10,20,99,999\n switchport nonegotiate`,verify:['show interfaces trunk','show interfaces g0/1 switchport','show vlan brief']},
        {id:'3.3',title:'VLAN Configuration',points:[
          'Maak de VLAN eerst in de VLAN-database, geef een betekenisvolle naam en wijs accesspoorten expliciet toe. De configuratie van een poort kan naar een niet-bestaande VLAN verwijzen, maar de poort blijft dan inactief.',
          'Verplaats poorten gecontroleerd met interface range. Controleer na wijzigingen zowel VLAN-lidmaatschap als spanning-tree-status.',
          'Een VLAN verwijderen verwijdert niet automatisch de switchport access vlan-regel; herplaats betrokken poorten vóór verwijdering.'
        ],commands:`vlan 10\n name USERS\nvlan 20\n name VOICE\nvlan 999\n name PARKING\ninterface range f0/1-12\n switchport mode access\n switchport access vlan 10`,verify:['show vlan brief','show interfaces status','show spanning-tree vlan 10']},
        {id:'3.4',title:'VLAN Trunks',points:[
          'Configureer trunks statisch op infrastructuurlinks. Beperk allowed VLANs tot wat werkelijk over de link moet en gebruik een ongebruikte native VLAN aan beide kanten.',
          'Een accesspoort voegt intern VLAN-context toe; bij een trunk voegt 802.1Q voor niet-native VLANs een tag in. Aan de ontvangende accesspoort wordt de tag vóór aflevering verwijderd.',
          'Troubleshoot volgorde: fysieke link, administratieve/operationele mode, native VLAN, allowed/active VLANs, STP forwarding en MAC-learning.'
        ],commands:`show interfaces trunk\nshow interfaces g0/1 switchport\nshow spanning-tree interface g0/1`,verify:['Status trunking','Encapsulation dot1q','Native VLAN gelijk','Benodigde VLANs allowed én active']},
        {id:'3.5',title:'Dynamic Trunking Protocol',points:[
          'DTP is Cisco-eigen en onderhandelt access of trunk. Dynamic desirable initieert actief; dynamic auto wacht. Auto–auto vormt geen trunk; desirable–auto doorgaans wel.',
          'Voor voorspelbaarheid en veiligheid: accesspoorten switchport mode access; trunks switchport mode trunk en waar ondersteund switchport nonegotiate.',
          'DTP is niet hetzelfde als VTP: DTP onderhandelt linkmodus, VTP verspreidt VLAN-database-informatie.'
        ],commands:`interface g0/1\n switchport mode trunk\n switchport nonegotiate\ninterface range f0/1-24\n switchport mode access`,verify:['show dtp interface g0/1','show interfaces trunk','Geen onverwachte dynamische trunk']}
      ],
      lab:{title:'Twee-switch VLAN-ontwerp',task:'Maak VLAN 10, 20, 99 en 999 op twee switches. Bouw een statische trunk, beperk allowed VLANs en bewijs dat gelijke VLANs over de trunk communiceren terwijl VLAN 10 en 20 zonder router gescheiden blijven.',success:['Native VLAN 999 aan beide zijden','DTP uit op statische trunk','Allowed-lijst minimaal','Ongebruikte poorten shutdown in VLAN 999']},
      pitfalls:['Native-VLAN mismatch is een configuratiefout, geen routingprobleem.','VLAN aanwezig op S1 betekent niet dat ze automatisch op S2 bestaat.','Een allowed VLAN moet ook lokaal bestaan en door STP forwarden.'],
      questions:[
        {q:'Welke VLAN wordt op een standaard 802.1Q-trunk ongetagd verzonden?',o:['De native VLAN','De management-VLAN','Altijd VLAN 1 ongeacht configuratie','De voice VLAN'],a:0,e:'De geconfigureerde native VLAN gebruikt op de trunk normaal ongetagde frames.'},
        {q:'Welke DTP-combinatie vormt normaal geen trunk?',o:['dynamic auto aan beide kanten','dynamic desirable met dynamic auto','trunk met trunk','dynamic desirable aan beide kanten'],a:0,e:'Geen van beide auto-poorten initieert de trunkonderhandeling.'},
        {q:'Een accesspoort verwijst naar een verwijderde VLAN. Wat gebeurt er?',o:['De poort wordt inactief voor die VLAN.','De poort valt automatisch terug naar VLAN 1.','De switch maakt de VLAN opnieuw.','De poort wordt een trunk.'],a:0,e:'De poortconfiguratie blijft verwijzen naar de ontbrekende VLAN, maar kan geen verkeer doorgeven.'},
        {q:'Wat controleer je eerst na een native-VLAN mismatchmelding?',o:['De trunkconfiguratie aan beide linkuiteinden','De DNS-configuratie van hosts','De SSH RSA-sleutel','De routing metric'],a:0,e:'De native VLAN moet op beide kanten van dezelfde 802.1Q-link overeenkomen.'}
      ]
    },
    {
      id:4,title:'Inter-VLAN Routing',color:'#48dbfb',
      summary:'Routeer verkeer tussen VLANs via legacy fysieke interfaces, router-on-a-stick of SVIs op een multilayer switch en los fouten systematisch op.',
      diagram:{type:'router-stick',nodes:['VLAN10','S1 trunk','R1 subinterfaces','VLAN20'],links:[[0,1,'access'],[1,2,'802.1Q'],[2,3,'routed']]},
      sections:[
        {id:'4.1',title:'Inter-VLAN Routing Operation',points:[
          'Inter-VLAN verkeer verlaat het bronbroadcastdomein via een default gateway. De router verwijdert het inkomende Layer-2-frame, neemt een routebeslissing en bouwt een nieuw frame voor de doel-VLAN.',
          'Legacy routing gebruikt één fysieke routerinterface per VLAN en schaalt slecht. Router-on-a-stick gebruikt subinterfaces op één trunk. Een multilayer switch gebruikt SVIs en hardwarematige routing.',
          'De hostgateway is het router- of SVI-adres in hetzelfde subnet als de host; niet het managementadres van een Layer-2-switch.'
        ],commands:`show ip route\nshow arp\ntraceroute 192.0.2.20`,verify:['Bronhost bereikt zijn gateway','Router heeft connected routes voor beide VLANs','Doelhost heeft juiste retourgateway']},
        {id:'4.2',title:'Router-on-a-Stick Inter-VLAN Routing',points:[
          'Maak één router-subinterface per VLAN. encapsulation dot1q koppelt de subinterface aan de VLAN-ID; een optioneel native-argument moet bij de switch-native VLAN passen.',
          'Het fysieke routerinterface krijgt geen IP-adres, maar moet no shutdown zijn. De switchlink naar de router is een statische trunk.',
          'Alle inter-VLAN traffic deelt dezelfde fysieke link; capaciteit en single point of failure zijn ontwerpbeperkingen.'
        ],commands:`interface g0/0/0\n no ip address\n no shutdown\ninterface g0/0/0.10\n encapsulation dot1q 10\n ip address 192.0.2.1 255.255.255.0\ninterface g0/0/0.20\n encapsulation dot1q 20\n ip address 198.51.100.1 255.255.255.0`,verify:['show ip interface brief','show interfaces g0/0/0.10','show interfaces trunk','show ip route connected']},
        {id:'4.3',title:'Inter-VLAN Routing using Layer 3 Switches',points:[
          'Een multilayer switch routeert tussen SVIs wanneer ip routing actief is. Elke VLAN heeft een up/up SVI met een gatewayadres nodig.',
          'Een fysieke uplink kan met no switchport een routed port worden. Zo’n poort behoort niet aan een VLAN en krijgt rechtstreeks een IP-adres.',
          'Voor externe bestemmingen is een default of dynamische route nodig; Layer-2 accessswitches blijven een default gateway gebruiken voor eigen beheer.'
        ],commands:`ip routing\ninterface vlan 10\n ip address 192.0.2.1 255.255.255.0\n no shutdown\ninterface vlan 20\n ip address 198.51.100.1 255.255.255.0\n no shutdown\ninterface g1/0/24\n no switchport\n ip address 203.0.113.2 255.255.255.252`,verify:['show ip route','show interfaces status','show ip interface brief','ping tussen VLAN-hosts']},
        {id:'4.4',title:'Troubleshoot Inter-VLAN Routing',points:[
          'Werk laag voor laag: kabel en interface, VLAN-bestaan en accesslidmaatschap, trunk/native/allowed, subinterface-encapsulation of SVI-status, IP/mask/gateway en tenslotte routes/ACL’s.',
          'Een SVI is vaak down omdat de VLAN ontbreekt of geen enkele Layer-2-poort in die VLAN up en forwarding is. Een router-subinterface kan up/up lijken terwijl de VLAN-ID verkeerd is.',
          'Test gericht: host→eigen gateway, router→host in elke VLAN, daarna end-to-end. Controleer ARP/MAC-tabellen om de breukzijde te bepalen.'
        ],commands:`show vlan brief\nshow interfaces trunk\nshow interfaces switchport\nshow ip interface brief\nshow ip route\nshow arp\nshow mac address-table`,verify:['Elke fout is gekoppeld aan één laag en één link','Na herstel bestaan retourroute en ARP-resolutie','Geen native/allowed mismatch']}
      ],
      lab:{title:'Drie methoden vergelijken',task:'Bouw eerst router-on-a-stick voor VLAN 10 en 20. Migreer daarna dezelfde gateways naar SVIs op een multilayer switch en documenteer welk apparaat bij elke methode routeert.',success:['Hosts houden correcte gateways','Trunks en encapsulation-ID’s kloppen','ip routing staat alleen waar nodig','End-to-end en retourpad bewezen']},
      pitfalls:['Het fysieke routerinterface bij router-on-a-stick moet actief zijn, ook zonder IP-adres.','Een Layer-3-switch routeert niet tussen SVIs zolang ip routing ontbreekt.','Een verkeerde hostmasker kan lokale/remote beslissingen verkeerd maken.'],
      questions:[
        {q:'Waar wordt bij router-on-a-stick de VLAN-ID aan een Layer-3-interface gekoppeld?',o:['Met encapsulation dot1q op de router-subinterface','Met switchport access vlan op het fysieke routerinterface','Met ip default-gateway op de switch','Met spanning-tree vlan op de host'],a:0,e:'Elke subinterface verwerkt de 802.1Q-frames van de opgegeven VLAN.'},
        {q:'Welke globale opdracht laat een multilayer switch tussen SVIs route­ren?',o:['ip routing','switchport mode trunk','ip default-gateway','router rip'],a:0,e:'ip routing activeert IPv4-forwarding op het Layer-3-switchplatform.'},
        {q:'Een SVI is down/down. Welke oorzaak is waarschijnlijk?',o:['De VLAN bestaat niet of heeft geen actieve Layer-2-poort.','De router heeft te veel routes.','SSH versie 2 ontbreekt.','De host gebruikt DHCP.'],a:0,e:'De SVI-line protocol-status is gekoppeld aan de operationele VLAN.'},
        {q:'Wat is de eerste gerichte ping bij een inter-VLAN storing?',o:['Van de host naar zijn eigen default gateway','Direct naar een internetadres','Naar de DNS-servernaam','Naar de switchconsole'],a:0,e:'Hiermee toets je lokale adressering, VLAN-pad en gatewayinterface vóór verdere routing.'}
      ]
    },
    {
      id:13,title:'WLAN Configuration',color:'#2e86de',
      summary:'Configureer een thuis/filiaal-WLAN en controllergebaseerde WPA2-Personal en WPA2-Enterprise WLANs en diagnoseer clientproblemen.',
      diagram:{type:'wlc-config',nodes:['Client','AP','WLC','RADIUS','DHCP/VLAN'],links:[[0,1,'SSID'],[1,2,'CAPWAP'],[2,3,'802.1X'],[2,4,'dynamic interface']]},
      sections:[
        {id:'13.1',title:'Remote Site WLAN Configuration',points:[
          'Een SOHO-router combineert vaak WAN-router, NAT, DHCP, switch en AP. Wijzig standaardbeheercredentials, beheeradres, SSID en beveiliging; schakel WPS en ongebruikte remote administration uit.',
          'Gebruik WPA2-AES of WPA3 wanneer alle clients dit ondersteunen, een lange unieke passphrase en een afzonderlijk gastnetwerk. Kies kanaal en breedte op basis van de RF-omgeving.',
          'Controleer de volledige keten: associatie, beveiligingshandshake, DHCP, default gateway, DNS en internetroute/NAT.'
        ],commands:`Client checks: SSID → security → IP lease → gateway ping → DNS lookup`,verify:['Geen fabriekswachtwoord','WEP/TKIP/WPS uit','Gastnetwerk geïsoleerd','Beheer alleen vanaf vertrouwd LAN']},
        {id:'13.2',title:'Configure a Basic WLAN on WLC',points:[
          'Maak of kies eerst de client-VLAN/dynamic interface, definieer daarna WLAN-ID, profielnaam en SSID, koppel het WLAN aan de juiste interface en activeer het pas na security/QoS-instellingen.',
          'Een WLAN kan zichtbaar bestaan maar disabled zijn. Controleer daarom zowel administratieve enable-state als AP-groep/policy-toewijzing.',
          'Voor WPA2-Personal selecteer AES/CCMP en PSK. Test met een echte client dat associatie én DHCP via de gekoppelde VLAN werken.'
        ],commands:`WLC GUI: WLANs → Create New → ID/Profile/SSID → Interface/VLAN → Security WPA2/AES → PSK → Enable`,verify:['show wlan summary','Clientdetail toont juiste WLAN/VLAN','DHCP-adres uit juiste scope']},
        {id:'13.3',title:'Configure WPA2 Enterprise WLAN on WLC',points:[
          'Registreer de RADIUS-server met IP, gedeeld geheim en juiste poorten; configureer dezelfde client/NAS-informatie op RADIUS. Daarna koppel je WPA2/AES met 802.1X aan het WLAN.',
          'De supplicant kiest een EAP-methode en moet servercertificaten correct valideren. Foute tijd, CA-trust, identiteit of shared secret veroorzaakt authenticatiefalen.',
          'Gebruik accounting wanneer vereist en beperk fallback. Het RADIUS shared secret is tussen WLC en server, niet het gebruikerswachtwoord.'
        ],commands:`WLC GUI: Security → AAA → RADIUS Authentication → Add\nWLAN Security: WPA2/AES + 802.1X → select RADIUS server`,verify:['RADIUS-server bereikbaar','AAA-log toont accept of concrete reject','Clientcertificaat/credentials geldig','Client krijgt daarna DHCP']},
        {id:'13.4',title:'Troubleshoot WLAN Issues',points:[
          'Classificeer de fase: ziet de client SSID/beacon, kan hij authenticeren/associëren, krijgt hij DHCP, bereikt hij gateway/DNS en werkt de applicatie? Elke fase heeft andere bewijzen.',
          'Controleer RF (afstand, interferentie, kanaal, SNR), clientcompatibiliteit, security/EAP, WLC mapping/VLAN, wired trunk, DHCP en routing in die volgorde.',
          'Een client met 169.254/16 heeft vaak wel link maar geen IPv4-lease. Een herhaald credentialprompt wijst eerder op 802.1X/EAP dan op radio.'
        ],commands:`show wireless client summary\nshow client detail <MAC>\nshow ap summary\nshow wlan summary\nshow radius auth statistics`,verify:['Probleemfase geïsoleerd','Wired en wireless VLAN-identiteit gelijk','Logs ondersteunen conclusie']}
      ],
      lab:{title:'Twee WLANs op WLC',task:'Maak STAFF met WPA2-Enterprise en GUEST met WPA2-Personal of open gastbeleid in eigen VLAN. Test een succesvolle stafflogin, foute login, gastlease en blokkering van gast→intern.',success:['AP joined','Beide SSIDs correct gemapt','RADIUS accept/reject zichtbaar','Gastsegmentatie bewezen']},
      pitfalls:['Een enabled SSID zonder correcte VLAN/DHCP levert wel associatie maar geen bruikbaar netwerk.','RADIUS shared secrets moeten exact overeenkomen.','Los eerst de falende fase op; reset niet blind de hele WLAN-configuratie.'],
      questions:[
        {q:'Een Wi-Fi-client associeert maar krijgt 169.254.x.x. Welke fase faalt waarschijnlijk?',o:['DHCP/adrestoewijzing','RF-discovery','802.11-beaconing','SSID-advertentie'],a:0,e:'Een link-local IPv4-adres verschijnt wanneer geen DHCP-lease verkregen wordt.'},
        {q:'Wat wordt bij een WLC aan een WLAN gekoppeld om clientverkeer in de juiste VLAN te plaatsen?',o:['Een dynamic interface/VLAN of policy profile','De AP-consolekabel','Alleen het RADIUS shared secret','Het BSSID als subnetmasker'],a:0,e:'De WLAN-policy mapping bepaalt de wired VLAN/segmentcontext.'},
        {q:'Wat is het RADIUS shared secret?',o:['Een geheim tussen authenticator/WLC en RADIUS-server','Het wachtwoord dat alle Wi-Fi-gebruikers delen','De WPA2-encryptiesleutel van elke sessie','Het AP-managementadres'],a:0,e:'Het beveiligt/verifieert de AAA-relatie, niet de individuele gebruikerslogin.'},
        {q:'Welke troubleshootingvolgorde is het meest efficiënt?',o:['RF/SSID → authenticatie → DHCP → gateway/DNS → applicatie','DNS → applicatie → antenne → VLAN','Factory reset → nieuw SSID → routing','Alleen signaalsterkte controleren'],a:0,e:'De fasen volgen de werkelijke opbouw van een clientsessie.'}
      ]
    },
    {
      id:14,title:'Routing Concepts',color:'#8395a7',
      summary:'Volg de forwardingbeslissing van host tot router, lees IPv4/IPv6-routetabellen en vergelijk statische en dynamische routebronnen.',
      diagram:{type:'routing',nodes:['Host A','R1','R2','R3','Host B'],links:[[0,1,'default GW'],[1,2,'next hop'],[2,3,'best route'],[3,4,'connected']]},
      sections:[
        {id:'14.1',title:'Path Determination',points:[
          'Een host bepaalt met eigen adres en masker/prefix of de bestemming lokaal is. Lokaal: resolveer doel-MAC. Remote: stuur het frame naar de MAC van de default gateway terwijl het IP-bestemmingsadres eind-tot-eind gelijk blijft.',
          'Elke router zoekt de meest specifieke overeenkomst: longest prefix match. /28 wint dus van /24 en van /0, ongeacht dat de default route ook overeenkomt.',
          'Wanneer meerdere routebronnen exact dezelfde prefix leveren, kiest de router eerst de laagste administrative distance; binnen hetzelfde protocol beslist de metric.'
        ],commands:`show ip route 198.51.100.25\nshow ipv6 route 2001:db8:20::25`,verify:['Langste prefix geïdentificeerd','Routebron/AD/metric gelezen','Next hop of exitinterface bereikbaar']},
        {id:'14.2',title:'Packet Forwarding',points:[
          'Een router verwijdert het ontvangen Layer-2-frame, valideert/verwerkt het IP-pakket, verlaagt IPv4 TTL of IPv6 Hop Limit, kiest een route en encapsuleert opnieuw voor de volgende link.',
          'De Layer-2-bron- en bestemmingsadressen veranderen per hop. De Layer-3-adressen blijven normaal gelijk zonder NAT. ARP bedient IPv4-next-hops; NDP bedient IPv6-neighbors.',
          'Cisco Express Forwarding gebruikt een Forwarding Information Base (FIB) en adjacency table om forwarding snel en schaalbaar uit te voeren.'
        ],commands:`show ip cef\nshow adjacency\nshow arp\nshow ipv6 neighbors`,verify:['Next-hop adjacency resolved','TTL/Hop Limit daalt per router','Retourpad bestaat']},
        {id:'14.3',title:'Basic Router Configuration Review',points:[
          'Een betrouwbare baseline bevat hostname, veilige toegang, interfacebeschrijvingen, correcte dual-stack adressen, no shutdown, opgeslagen configuratie en eventueel logging/NTP.',
          'show ip interface brief toont niet het masker; gebruik show running-config interface of show interfaces voor detail. up/down wijst vaak op Layer-2-line-protocolproblemen; down/down eerder fysiek.'
        ],commands:`show running-config\nshow interfaces description\nshow ip interface brief\nshow ipv6 interface brief`,verify:['Alle gebruikte interfaces up/up','Adresschema zonder overlap','Configuratie opgeslagen']},
        {id:'14.4',title:'IP Routing Table',points:[
          'Routecodes tonen bron, bijvoorbeeld C connected, L local, S static en protocolcodes. Een parent/child-weergave kan subnetten groeperen; let steeds op de concrete prefix.',
          'Een route-entry vermeldt prefix, routebron/AD, metric, next hop, ouderdom en/of exitinterface. Direct connected routes hebben geen remote next hop.',
          'Een gateway of last resort is de kandidaat-default route. Ontbreekt een match én default route, dan dropt de router het pakket en kan ICMP unreachable terugkeren.'
        ],commands:`show ip route\nshow ip route connected\nshow ipv6 route\nshow ip protocols`,verify:['Default route herkenbaar als /0','Local /32 of /128 onderscheiden van connected subnet','Route naar elk labnetwerk aanwezig']},
        {id:'14.5',title:'Static and Dynamic Routing',points:[
          'Statische routes zijn voorspelbaar en protocolarm maar vereisen handmatig onderhoud. Dynamische protocollen ontdekken/topologie-updaten routes en schalen beter, met extra control traffic en ontwerpcomplexiteit.',
          'Administrative distance vergelijkt verschillende bronnen voor dezelfde prefix; lagere is geloofwaardiger. Connected is 0, static standaard 1; protocolwaarden verschillen.',
          'Equal-cost routes kunnen load sharing leveren. Een floating static route krijgt bewust een hogere AD en verschijnt pas wanneer de betere route verdwijnt.'
        ],commands:`show ip route static\nshow ip protocols\nshow running-config | include ^ip route`,verify:['Primaire en backuproute onderscheiden','AD niet verward met metric','Route verdwijnt wanneer recursive next hop onbereikbaar wordt']}
      ],
      lab:{title:'Routebeslissing hardop verklaren',task:'Geef R1 routes /0, /16, /24 en /28 naar verschillende next hops. Voorspel voor tien doeladressen de winnende route en verifieer met show ip route <adres> en traceroute.',success:['Alle keuzes volgen longest prefix','AD alleen bij gelijke prefix vergeleken','L2-adressen per hop correct beschreven','Retourpad meegenomen']},
      pitfalls:['Longest prefix match gaat vóór AD wanneer prefixlengtes verschillen.','Het IP-bestemmingsadres verandert niet per routerhop zonder NAT.','Een route in de tabel garandeert geen retourroute.'],
      questions:[
        {q:'Welke route wint voor 192.0.2.130 als /0, /24 en /25 beschikbaar zijn en alle matchen?',o:['De /25','De route met laagste AD ongeacht prefix','De /0','De oudste route'],a:0,e:'De meest specifieke, langste prefix wint.'},
        {q:'Wat verandert normaal op elke routerhop?',o:['De Layer-2 bron- en bestemmingsadressen','De IP-bron en IP-bestemming','Het TCP-poortnummer','De applicatiedata'],a:0,e:'De router bouwt voor elke uitgaande link een nieuw frame.'},
        {q:'Wanneer vergelijkt een router administrative distance?',o:['Bij routes naar exact dezelfde prefix uit verschillende bronnen','Tussen elke /24 en /25','Bij ARP-resolutie','Bij keuze van switchpoort'],a:0,e:'AD bepaalt welke routebron voor eenzelfde bestemming/prefix wordt vertrouwd.'},
        {q:'Wat gebeurt zonder passende route of default route?',o:['De router dropt het pakket.','De router floodt het pakket.','De switch leert de bestemming.','DHCP maakt een route.'],a:0,e:'Routers flooden onbekende IP-bestemmingen niet.'}
      ]
    },
    {
      id:15,title:'IP Static Routing',color:'#576574',
      summary:'Configureer en verifieer IPv4/IPv6 network-, default-, floating- en hostroutes met juiste next-hopresolutie.',
      diagram:{type:'static-route',nodes:['LAN A','R1','R2','R3/ISP','LAN B'],links:[[0,1,'connected'],[1,2,'static next-hop'],[2,3,'default'],[3,4,'host/network']]},
      sections:[
        {id:'15.1',title:'Static Routes',points:[
          'Een static route bevat bestemmingsprefix plus next-hop, exitinterface of beide. Next-hop-only is recursively: IOS zoekt daarna hoe de next hop bereikbaar is. Fully specified geeft next hop én interface.',
          'Op point-to-point links kan een exitinterface-route duidelijk zijn. Op multiaccess Ethernet kan alleen een exitinterface onnodige ARP/NDP voor vele doelen veroorzaken; gebruik daar doorgaans next hop of fully specified.',
          'IPv6-static routes gebruiken prefix/length en een IPv6-next-hop. Bij alleen een link-local next hop moet de exitinterface worden vermeld omdat hetzelfde link-local adres op meerdere links kan bestaan.'
        ],commands:`ip route 198.51.100.0 255.255.255.0 192.0.2.2\nipv6 route 2001:db8:20::/64 2001:db8:12::2\nipv6 route 2001:db8:30::/64 g0/0 fe80::2`,verify:['show ip route static','show ipv6 route static','Next hop resolved via connected route']},
        {id:'15.2',title:'Configure IP Static Routes',points:[
          'Ontwerp beide richtingen. R1→LAN B zonder R2/R3→LAN A geeft een heenpad maar geen bruikbare sessie. Voeg alleen noodzakelijke, niet-overlappende routes toe.',
          'Verifieer eerst dat next hop rechtstreeks bereikbaar is, daarna dat route in RIB staat, vervolgens ping met relevante source en tenslotte traceroute/end-to-end.',
          'Een verkeerde mask/prefix is gevaarlijker dan een tikfout: hij kan een te brede route installeren en verkeer naar het verkeerde pad trekken.'
        ],commands:`ip route 10.20.0.0 255.255.0.0 192.0.2.2\nping 10.20.0.1 source 192.0.2.1\ntraceroute 10.20.0.10`,verify:['Prefix exact','Next hop in rechtstreeks verbonden subnet','Retourroute aanwezig']},
        {id:'15.3',title:'Configure IP Default Static Routes',points:[
          'Een IPv4-default route is 0.0.0.0/0; IPv6 gebruikt ::/0. Ze vangen alleen pakketten waarvoor geen specifiekere route bestaat.',
          'Een stubrouter wijst typisch default naar upstream. De upstreamrouter heeft nog routes naar de stub-LANs nodig; default routing is geen automatische routeadvertentie.',
          'Gateway of last resort verschijnt wanneer een bruikbare IPv4-default in de tabel staat.'
        ],commands:`ip route 0.0.0.0 0.0.0.0 203.0.113.1\nipv6 route ::/0 2001:db8:ff::1`,verify:['show ip route | include Gateway|0.0.0.0','show ipv6 route ::/0','Specifieke route wint nog steeds van default']},
        {id:'15.4',title:'Configure Floating Static Routes',points:[
          'Geef de backupstatic een hogere AD dan de primaire routebron. Zolang de primaire route aanwezig is, blijft de floating route buiten de actieve routingtabel of als niet-winnende kandidaat.',
          'De backup werkt alleen als zijn next hop zelf bereikbaar blijft en het retourpad ook omschakelt. Test door de primaire link gecontroleerd te onderbreken.',
          'Een static route volgt standaard alleen next-hopreachability, niet altijd end-to-end dienstgezondheid; geavanceerde tracking/IP SLA kan nodig zijn buiten CCNA-basis.'
        ],commands:`ip route 198.51.100.0 255.255.255.0 192.0.2.2 200\nipv6 route 2001:db8:20::/64 2001:db8:13::3 200`,verify:['Primaire route actief vóór storing','Floating route actief na storing','Convergentie en retourpad gemeten']},
        {id:'15.5',title:'Configure Static Host Routes',points:[
          'Een IPv4-hostroute gebruikt /32 en een IPv6-hostroute /128. Ze sturen slechts één exact adres en winnen door longest prefix van bredere routes.',
          'IOS maakt local /32-/128-routes voor eigen interfaceadressen; handmatige hostroutes dienen voor externe specifieke doelen, policy of uitzonderingen.',
          'Controleer dat een hostroute geen onbedoelde blackhole creëert wanneer het doel via een ander pad moet failoveren.'
        ],commands:`ip route 198.51.100.25 255.255.255.255 192.0.2.2\nipv6 route 2001:db8:20::25/128 2001:db8:12::2`,verify:['show ip route 198.51.100.25','show ipv6 route 2001:db8:20::25','Bredere route blijft voor andere hosts']}
      ],
      lab:{title:'Dual-stack static routing',task:'Bouw drie routers met twee eind-LANs. Configureer primaire network routes, stub-defaults, één floating backup en één hostroute voor IPv4 en IPv6. Test normaal pad en failover.',success:['Alle next hops connected bereikbaar','Heen- en retourroutes compleet','/32 en /128 winnen alleen voor doelhost','Backup verschijnt bij primaire storing']},
      pitfalls:['Een link-local IPv6-next-hop vereist een exitinterface.','Een hogere AD maakt een route backup, niet een hogere metric.','Een default route op de edge lost ontbrekende terugroutes upstream niet op.'],
      questions:[
        {q:'Welke IPv4-prefix is een hostroute?',o:['/32','/31','/24','/0'],a:0,e:'Een /32 matcht precies één IPv4-adres.'},
        {q:'Waarom vermeld je bij een IPv6 link-local next hop ook de exitinterface?',o:['Link-local adressen zijn alleen per link uniek.','IPv6 gebruikt geen routing table.','De prefix moet altijd /64 zijn.','NDP werkt alleen met globale adressen.'],a:0,e:'De interface bepaalt op welke link fe80::… bedoeld is.'},
        {q:'Hoe maak je een floating static route?',o:['Geef haar een hogere administrative distance dan de primaire route.','Gebruik een langere prefix dan elke primaire route.','Gebruik DTP passive.','Verlaag de metric van connected routes.'],a:0,e:'De hogere AD laat de route verliezen tot de betere bron verdwijnt.'},
        {q:'Welke route matcht alle IPv6-bestemmingen?',o:['::/0','fe80::/10','ff00::/8','::1/128'],a:0,e:'::/0 is de IPv6-default route.'}
      ]
    },
    {
      id:16,title:'Troubleshoot Static and Default Routes',color:'#222f3e',
      summary:'Volg pakketverwerking, isoleer fouten in static/default routes en herstel uitsluitend de bewezen oorzaak.',
      diagram:{type:'troubleshoot',nodes:['Source','R1 table','R2 next hop','R3 return table','Destination'],links:[[0,1,'local/remote?'],[1,2,'forward'],[2,3,'forward'],[3,4,'deliver']]},
      sections:[
        {id:'16.1',title:'Packet Processing with Static Routes',points:[
          'De bronhost beslist local of remote, resolveert doel of gateway met ARP/NDP en verzendt een frame. Elke router decapsuleert, longest-prefix-matcht, resolveert zijn next hop en encapsuleert opnieuw.',
          'Bij een recursive static route moet zowel de statische prefix als een route naar de next hop bestaan. Verdwijnt de resolutie, dan kan de static route uit de RIB verdwijnen.',
          'ICMP echo request en reply zijn onafhankelijke routed pakketten. Een succesvolle heenweg zonder terugroute geeft time-outs, geen halve ping.'
        ],commands:`show ip route <destination>\nshow ip route <next-hop>\nshow arp\ntraceroute <destination>`,verify:['Elke hop heeft forward route','Elke next hop is L2-resolved','Retourroute vanaf bestemming aanwezig']},
        {id:'16.2',title:'Troubleshoot IPv4 Static and Default Route Configuration',points:[
          'Begin met probleemscope en gewenste pad. Controleer interface up/up en adressen, connected routes, daarna de exacte bestemmingsprefix, mask, next hop/exitinterface en AD.',
          'Veel fouten: verkeerd netwerk/masker, next hop op verkeerd subnet, shutdown interface, ontbrekende retourroute, default naar verkeerde buur, te specifieke blackhole of floating AD lager dan bedoeld.',
          'Gebruik show running-config om intentie te zien en show ip route om geïnstalleerde werkelijkheid te zien. Een regel in running-config is niet noodzakelijk actief in de RIB.',
          'Gebruik ping met source om een specifieke routecontext te testen en traceroute om het laatste antwoordende hopgebied te vinden. Debug alleen beperkt in een lab; counters en tabellen zijn veiliger.'
        ],commands:`show ip interface brief\nshow ip route\nshow running-config | include ^ip route\nshow cdp neighbors detail\nping <doel> source <bron-interface>\ntraceroute <doel>`,verify:['Fout bewezen vóór wijziging','Exacte route-entry na fix actief','End-to-end + return path getest','Configuratie opgeslagen']}
      ],
      lab:{title:'Fault-isolation challenge',task:'Laat een partner vijf fouten plaatsen: shutdown, verkeerd masker, foute next hop, ontbrekende retourroute en verkeerde floating AD. Diagnoseer zonder eerst de configs te wijzigen en noteer symptoom→bewijs→oorzaak→fix→verificatie.',success:['Elke fix heeft vooraf bewijs','Geen factory reset of brede herbouw','Alle IPv4/IPv6-paden herstellen','Primaire/backupgedrag klopt']},
      pitfalls:['Running-config bewijst niet dat een route geïnstalleerd is.','Een ping vanaf de router gebruikt mogelijk een andere bron dan de LAN-host.','Verander niet meerdere variabelen tegelijk tijdens diagnose.'],
      questions:[
        {q:'Een static route staat in running-config maar niet in show ip route. Wat controleer je eerst?',o:['Of de next hop/exitinterface resolveerbaar en up is','Of DNS werkt','Of de switch VTP server is','Of de host een browser heeft'],a:0,e:'Een onbruikbare next hop voorkomt installatie in de actieve RIB.'},
        {q:'Waarom kan een router de bestemming pingen terwijl de LAN-host dat niet kan?',o:['De routerping kan een andere bron en dus ander retourpad gebruiken.','Routers negeren routetabellen bij ping.','Hosts gebruiken geen default gateway.','ICMP werkt alleen lokaal.'],a:0,e:'Test met dezelfde relevante broncontext als het probleemverkeer.'},
        {q:'Welke twee configuraties zijn nodig voor een geslaagde round trip?',o:['Een heenroute en een retourroute','Twee default gateways op elke host','DTP en VTP','Twee DNS-records'],a:0,e:'Request en reply worden onafhankelijk gerouteerd.'},
        {q:'Wat is de beste eerste troubleshootingactie?',o:['Scope, verwacht pad en actuele status vastleggen','Alle routes verwijderen en opnieuw beginnen','De router herladen','Elke interface trusted maken'],a:0,e:'Een bewijsgerichte baseline voorkomt dat symptomen worden gemaskeerd.'}
      ]
    }
  ]
};
