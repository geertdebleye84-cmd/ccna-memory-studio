/* Safe, side-effect-free command simulators for guided CLI practice. */
(function (root) {
  const TOPICS = [
    { id: 'ios-basic', profile: 'cisco', course: 'NetAcad 1', label: 'Basisconfiguratie & IOS-modi' },
    { id: 'ios-addressing', profile: 'cisco', course: 'NetAcad 1', label: 'IPv4/IPv6 & interfaces' },
    { id: 'ios-security', profile: 'cisco', course: 'NetAcad 1', label: 'Wachtwoorden, SSH & beheer' },
    { id: 'ios-switching', profile: 'cisco', course: 'NetAcad 1', label: 'Switching & verificatie' },
    { id: 'ios-vlan', profile: 'cisco', course: 'NetAcad 2', label: 'VLANs, trunks & inter-VLAN' },
    { id: 'ios-stp', profile: 'cisco', course: 'NetAcad 2', label: 'STP & EtherChannel' },
    { id: 'ios-dhcp', profile: 'cisco', course: 'NetAcad 2', label: 'DHCPv4/v6 & SLAAC' },
    { id: 'ios-routing', profile: 'cisco', course: 'NetAcad 2', label: 'Static routing' },
    { id: 'ios-ospf', profile: 'cisco', course: 'NetAcad 3', label: 'Single-area OSPFv2' },
    { id: 'ios-acl', profile: 'cisco', course: 'NetAcad 3', label: 'ACLs & netwerkbeveiliging' },
    { id: 'ios-nat', profile: 'cisco', course: 'NetAcad 3', label: 'NAT, QoS & WAN' },
    { id: 'ios-services', profile: 'cisco', course: 'NetAcad 3', label: 'NTP, syslog, CDP/LLDP & diagnose' },
    { id: 'ps-files', profile: 'powershell', course: 'Windows', label: 'Bestanden & navigatie' },
    { id: 'ps-process', profile: 'powershell', course: 'Windows', label: 'Processen & services' },
    { id: 'ps-network', profile: 'powershell', course: 'Windows', label: 'Netwerkdiagnose' },
    { id: 'ps-server', profile: 'powershell', course: 'Windows Server', label: 'Serverrollen & Active Directory' },
    { id: 'cmd-files', profile: 'cmd', course: 'Windows', label: 'Bestanden & navigatie' },
    { id: 'cmd-network', profile: 'cmd', course: 'Windows', label: 'IP, DNS & bereikbaarheid' },
    { id: 'cmd-system', profile: 'cmd', course: 'Windows Server', label: 'Systeem, users & services' }
  ];

  const EXERCISES = [
    ['c01','cisco','ios-basic','user','Ga naar privileged EXEC mode.','enable',['enable'],'`enable` (afgekort: `en`) wisselt van `>` naar `#`.'],
    ['c02','cisco','ios-basic','privileged','Open global configuration mode.','configure terminal',['configure-terminal'],'Gebruik `configure terminal`; `conf t` is een geldige unieke afkorting.'],
    ['c03','cisco','ios-basic','global','Wijzig de hostnaam in R1.','hostname R1',['hostname'],'In global config: `hostname R1`. De prompt verandert onmiddellijk.'],
    ['c04','cisco','ios-basic','global','Open interface GigabitEthernet0/0/0.','interface gigabitEthernet 0/0/0',['interface'],'Gebruik `interface gigabitEthernet 0/0/0` of bijvoorbeeld `int g0/0/0`.'],
    ['c05','cisco','ios-addressing','interface','Ken 192.168.10.1/24 toe met dotted-decimal mask.','ip address 192.168.10.1 255.255.255.0',['ip-address'],'IOS verwacht `ip address <adres> <subnetmasker>`.'],
    ['c06','cisco','ios-addressing','interface','Activeer de huidige interface.','no shutdown',['no-shutdown'],'`no shutdown` heft de administratieve shutdown op. `no sh` werkt ook.'],
    ['c07','cisco','ios-addressing','privileged','Toon een compact overzicht van alle IP-interfaces.','show ip interface brief',['show-ip-interface-brief'],'Gebruik `show ip interface brief`; `sh ip int br` is geldig.'],
    ['c08','cisco','ios-security','global','Configureer een versleuteld privileged wachtwoord.','enable secret class',['enable-secret'],'Gebruik `enable secret <wachtwoord>`; de simulator bewaart geen echt geheim.'],
    ['c09','cisco','ios-security','line','Sta alleen SSH toe op de huidige VTY-lijnen.','transport input ssh',['transport-ssh'],'Gebruik in line configuration mode `transport input ssh` om Telnet uit te sluiten.'],
    ['c10','cisco','ios-vlan','global','Maak VLAN 20 aan en open de VLAN-context.','vlan 20',['vlan'],'In global config: `vlan 20`.'],
    ['c11','cisco','ios-vlan','interface','Maak de huidige switchpoort een accesspoort.','switchport mode access',['switchport-mode-access'],'Gebruik `switchport mode access`.'],
    ['c12','cisco','ios-vlan','privileged','Toon de VLAN-tabel compact.','show vlan brief',['show-vlan-brief'],'Gebruik `show vlan brief`.'],
    ['c13','cisco','ios-stp','interface','Bundel de poort met LACP actief in channel-group 1.','channel-group 1 mode active',['channel-group'],'`active` en `passive` zijn LACP; `desirable` en `auto` horen bij PAgP.'],
    ['c14','cisco','ios-routing','global','Voeg een default IPv4-route via 192.0.2.1 toe.','ip route 0.0.0.0 0.0.0.0 192.0.2.1',['ip-route'],'Gebruik `ip route 0.0.0.0 0.0.0.0 <next-hop>`.'],
    ['c15','cisco','ios-ospf','global','Start OSPF proces 10.','router ospf 10',['router-ospf'],'`router ospf 10` opent router configuration mode.'],
    ['c16','cisco','ios-ospf','router','Adverteer 10.0.0.0/24 in area 0.','network 10.0.0.0 0.0.0.255 area 0',['ospf-network'],'OSPF gebruikt een wildcardmasker: /24 wordt `0.0.0.255`.'],
    ['c17','cisco','ios-dhcp','interface','Relay DHCP-verzoeken naar 192.0.2.10.','ip helper-address 192.0.2.10',['ip-helper'],'Plaats `ip helper-address <server>` op de client-facing routerinterface.'],
    ['c18','cisco','ios-services','privileged','Toon de IPv4-routingtabel.','show ip route',['show-ip-route'],'Gebruik `show ip route`. Voeg eventueel een protocolcode toe op echte IOS.'],
    ['c19','cisco','ios-switching','privileged','Toon de dynamisch geleerde MAC-adressen.','show mac address-table dynamic',['show-mac-dynamic'],'Gebruik `show mac address-table dynamic` om de forwarding entries te controleren.'],
    ['c20','cisco','ios-acl','global','Sta met standaard ACL 10 het netwerk 192.168.10.0/24 toe.','access-list 10 permit 192.168.10.0 0.0.0.255',['access-list-standard'],'Een standaard ACL gebruikt een wildcardmasker: `access-list 10 permit 192.168.10.0 0.0.0.255`.'],
    ['c21','cisco','ios-acl','interface','Pas ACL 10 inkomend toe op de huidige interface.','ip access-group 10 in',['ip-access-group'],'Gebruik `ip access-group 10 in` in interface configuration mode.'],
    ['c22','cisco','ios-nat','interface','Markeer de huidige LAN-interface als NAT inside.','ip nat inside',['ip-nat-inside'],'Gebruik `ip nat inside` op de LAN-zijde en `ip nat outside` op de WAN-zijde.'],
    ['c23','cisco','ios-nat','privileged','Toon de actieve NAT-vertalingen.','show ip nat translations',['show-nat-translations'],'Gebruik `show ip nat translations`; `show ip nat statistics` controleert de NAT-configuratie.'],
    ['c24','cisco','ios-services','global','Configureer 192.0.2.123 als NTP-server.','ntp server 192.0.2.123',['ntp-server'],'Gebruik `ntp server <ip-adres>` in global configuration mode.'],
    ['p01','powershell','ps-files','default','Toon de huidige locatie.','Get-Location',['ps-location'],'Gebruik `Get-Location`; alias `pwd` is ook geldig.'],
    ['p02','powershell','ps-files','default','Toon de items in de huidige map.','Get-ChildItem',['ps-list'],'Gebruik `Get-ChildItem`; `gci`, `dir` en `ls` zijn aliassen.'],
    ['p03','powershell','ps-process','default','Toon alle processen.','Get-Process',['ps-process'],'Gebruik `Get-Process` of alias `gps`.'],
    ['p04','powershell','ps-process','default','Toon services waarvan de naam met DNS begint.','Get-Service DNS*',['ps-service'],'Gebruik `Get-Service DNS*`; wildcards worden virtueel gesimuleerd.'],
    ['p05','powershell','ps-network','default','Test bereikbaarheid van server01.','Test-Connection server01',['ps-ping'],'Gebruik `Test-Connection server01` (of `ping server01`).'],
    ['p06','powershell','ps-network','default','Toon de IP-configuratie.','Get-NetIPConfiguration',['ps-ipconfig'],'Gebruik `Get-NetIPConfiguration`.'],
    ['p07','powershell','ps-server','default','Toon geïnstalleerde Windows Server-rollen.','Get-WindowsFeature',['ps-feature'],'Gebruik `Get-WindowsFeature`; deze trainer wijzigt geen rollen.'],
    ['p08','powershell','ps-server','default','Zoek de gebruiker Ada in Active Directory.','Get-ADUser Ada',['ps-aduser'],'Gebruik `Get-ADUser Ada`; de uitvoer komt uit de virtuele labdirectory.'],
    ['d01','cmd','cmd-files','default','Toon de huidige map.','cd',['cmd-cd'],'`cd` zonder argument toont de huidige map.'],
    ['d02','cmd','cmd-files','default','Toon de mapinhoud.','dir',['cmd-dir'],'Gebruik `dir`.'],
    ['d03','cmd','cmd-network','default','Toon de volledige IP-configuratie.','ipconfig /all',['cmd-ipconfig'],'Gebruik `ipconfig /all`.'],
    ['d04','cmd','cmd-network','default','Vraag het IP-adres van server01 op via DNS.','nslookup server01',['cmd-nslookup'],'Gebruik `nslookup server01`.'],
    ['d05','cmd','cmd-network','default','Test server01 met één echo request.','ping -n 1 server01',['cmd-ping'],'CMD gebruikt `ping -n 1 <host>` voor één request.'],
    ['d06','cmd','cmd-system','default','Toon de huidige gebruiker.','whoami',['cmd-whoami'],'Gebruik `whoami`.'],
    ['d07','cmd','cmd-system','default','Toon services en hun toestand.','sc query',['cmd-sc'],'Gebruik `sc query`; de servicegegevens zijn virtueel.'],
    ['d08','cmd','cmd-system','default','Toon lokale gebruikersaccounts.','net user',['cmd-net-user'],'Gebruik `net user`.']
  ].map(([id,profile,topic,startMode,prompt,answer,accept,explanation]) => ({id,profile,topic,startMode,prompt,answer,accept,explanation}));

  const ipv4 = /^((25[0-5]|2[0-4]\d|1?\d?\d)(\.|$)){4}$/;
  const validators = { word: /^\S+$/, number: /^\d+$/, ip: ipv4, mask: ipv4, interface: /^[a-z][a-z0-9/-]*(?:\s*\d[\d/]*)?$/i, rest: /.+/ };
  const C = (id, modes, syntax, output = '', change = null, explanation = '') => ({ id, modes, syntax, output, change, explanation });
  const CISCO = [
    C('enable',['user'],['enable'],'','privileged','Ga naar privileged EXEC mode.'),
    C('disable',['privileged'],['disable'],'','user'), C('configure-terminal',['privileged'],['configure','terminal'],'Enter configuration commands, one per line. End with CNTL/Z.','global'),
    C('show-running',['privileged'],['show','running-config'],'Building configuration...\n\nCurrent configuration : 1248 bytes\n!\nversion 17.9\nhostname {hostname}\n!'),
    C('show-startup',['privileged'],['show','startup-config'],'Using 1248 out of 524288 bytes\n!\nhostname {hostname}\n!'),
    C('show-ip-interface-brief',['user','privileged'],['show','ip','interface','brief'],'Interface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0/0   192.168.10.1    YES manual up                    up\nGigabitEthernet0/0/1   unassigned      YES unset  administratively down down\nVlan1                  unassigned      YES unset  up                    up'),
    C('show-ip-route',['privileged'],['show','ip','route'],'Codes: L - local, C - connected, S - static, O - OSPF\nGateway of last resort is 192.0.2.1 to network 0.0.0.0\n\nC    192.168.10.0/24 is directly connected, GigabitEthernet0/0/0\nL    192.168.10.1/32 is directly connected, GigabitEthernet0/0/0\nS*   0.0.0.0/0 [1/0] via 192.0.2.1'),
    C('show-ipv6-route',['privileged'],['show','ipv6','route'],'IPv6 Routing Table - 5 entries\nC   2001:DB8:10::/64 [0/0]\n    via GigabitEthernet0/0/0, directly connected'),
    C('show-vlan-brief',['privileged'],['show','vlan','brief'],'VLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/1, Gi0/2\n20   USERS                            active    Gi0/3'),
    C('show-trunk',['privileged'],['show','interfaces','trunk'],'Port        Mode         Encapsulation  Status        Native vlan\nGi0/1       on           802.1q         trunking      1'),
    C('show-stp',['privileged'],['show','spanning-tree'],'VLAN0001\n  Spanning tree enabled protocol rstp\n  Root ID    Priority    32769\n  Bridge ID  Priority    32769'),
    C('show-etherchannel',['privileged'],['show','etherchannel','summary'],'Group  Port-channel  Protocol    Ports\n1      Po1(SU)         LACP        Gi0/1(P) Gi0/2(P)'),
    C('show-ospf-neighbor',['privileged'],['show','ip','ospf','neighbor'],'Neighbor ID     Pri   State           Dead Time   Address         Interface\n2.2.2.2           1   FULL/DR         00:00:33    10.0.0.2        GigabitEthernet0/0/1'),
    C('show-mac-dynamic',['privileged'],['show','mac','address-table','dynamic'],'          Mac Address Table\n-------------------------------------------\nVlan    Mac Address       Type        Ports\n  20    00d0.ba11.2201    DYNAMIC     Gi0/3'),
    C('show-nat-translations',['privileged'],['show','ip','nat','translations'],'Pro  Inside global     Inside local       Outside local      Outside global\nicmp 203.0.113.10:7    192.168.10.20:7   198.51.100.8:7    198.51.100.8:7'),
    C('copy-run-start',['privileged'],['copy','running-config','startup-config'],'Destination filename [startup-config]? \nBuilding configuration...\n[OK]'),
    C('ping',['user','privileged'],['ping',':word'],'Type escape sequence to abort.\nSending 5, 100-byte ICMP Echos to {0}, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms'),
    C('hostname',['global'],['hostname',':word'],'',({session,args}) => { session.hostname = args[0]; }),
    C('interface',['global'],['interface',':rest'],'',({session,args}) => { session.context = args[0].replace(/\s+/g,''); session.mode='interface'; }),
    C('vlan',['global'],['vlan',':number'],'',({session,args}) => { session.context = args[0]; session.mode='vlan'; }),
    C('router-ospf',['global'],['router','ospf',':number'],'',({session,args}) => { session.context = args[0]; session.mode='router'; }),
    C('line-vty',['global'],['line','vty',':number',':number'],'',({session,args}) => { session.context=`vty ${args.join(' ')}`; session.mode='line'; }),
    C('line-console',['global'],['line','console',':number'],'',({session,args}) => { session.context=`con ${args[0]}`; session.mode='line'; }),
    C('enable-secret',['global'],['enable','secret',':word']), C('service-password',['global'],['service','password-encryption']),
    C('domain-name',['global'],['ip','domain-name',':word']), C('username',['global'],['username',':word','secret',':word']),
    C('ipv6-routing',['global'],['ipv6','unicast-routing']), C('ip-route',['global'],['ip','route',':ip',':mask',':ip']),
    C('access-list-standard',['global'],['access-list',':number','permit',':ip',':mask']), C('ntp-server',['global'],['ntp','server',':ip']),
    C('name',['vlan'],['name',':word']),
    C('description',['interface'],['description',':rest']), C('ip-address',['interface'],['ip','address',':ip',':mask']),
    C('ipv6-address',['interface'],['ipv6','address',':word']), C('shutdown',['interface'],['shutdown'],'Interface administratively disabled'),
    C('no-shutdown',['interface'],['no','shutdown'],'%LINK-3-UPDOWN: Interface changed state to up'),
    C('switchport-mode-access',['interface'],['switchport','mode','access']), C('switchport-mode-trunk',['interface'],['switchport','mode','trunk']),
    C('switchport-access-vlan',['interface'],['switchport','access','vlan',':number']), C('native-vlan',['interface'],['switchport','trunk','native','vlan',':number']),
    C('portfast',['interface'],['spanning-tree','portfast'],'%Warning: portfast should only be enabled on ports connected to a single host.'),
    C('bpduguard',['interface'],['spanning-tree','bpduguard','enable']), C('channel-group',['interface'],['channel-group',':number','mode',':word']),
    C('ip-helper',['interface'],['ip','helper-address',':ip']), C('transport-ssh',['line'],['transport','input','ssh']),
    C('ip-access-group',['interface'],['ip','access-group',':number',':word']), C('ip-nat-inside',['interface'],['ip','nat','inside']), C('ip-nat-outside',['interface'],['ip','nat','outside']),
    C('login-local',['line'],['login','local']), C('login',['line'],['login']), C('password',['line'],['password',':word']),
    C('ospf-network',['router'],['network',':ip',':mask','area',':number']), C('passive-interface',['router'],['passive-interface',':rest']),
    C('router-id',['router'],['router-id',':ip'])
  ];

  function prompt(session) {
    if (session.profile === 'powershell') return `PS ${session.path}>`;
    if (session.profile === 'cmd') return `${session.path}>`;
    const h=session.hostname, c=session.context;
    return ({user:`${h}>`,privileged:`${h}#`,global:`${h}(config)#`,interface:`${h}(config-if)#`,vlan:`${h}(config-vlan)#`,router:`${h}(config-router)#`,line:`${h}(config-line)#`})[session.mode];
  }
  function tokenise(line) { return String(line).trim().match(/"[^"]*"|'[^']*'|\S+/g)?.map(x=>x.replace(/^("|')|("|')$/g,'')) || []; }
  function literalMatch(input, literal) { return input.length > 0 && literal.toLowerCase().startsWith(input.toLowerCase()); }
  function matchCisco(command, tokens) {
    if (tokens.length > command.syntax.length) return null;
    const args=[];
    for(let i=0;i<tokens.length;i++) {
      const spec=command.syntax[i], value=tokens[i];
      if(spec.startsWith(':')) { const kind=spec.slice(1); if(kind==='rest') { const rest=tokens.slice(i).join(' '); return validators.rest.test(rest) ? {args:[...args,rest],complete:true} : null; } if(!validators[kind].test(value)) return null; args.push(value); }
      else if(!literalMatch(value,spec)) return null;
    }
    return {args,complete:tokens.length===command.syntax.length};
  }
  function marker(line,index=0) { return `${line}\n${' '.repeat(Math.max(0,index))}^\n% Invalid input detected at '^' marker.`; }
  function executeCisco(session,line) {
    const raw=line.trim();
    if(!raw) return {ok:true,output:'',commandId:'empty'};
    if(raw==='?' || raw.endsWith(' ?')) return {ok:true,output:helpCisco(session,raw.replace(/\s*\?$/,'')),commandId:'help'};
    if(/^end$/i.test(raw) || raw==='\x1a') { session.mode='privileged'; session.context=''; return {ok:true,output:'',commandId:'end'}; }
    if(/^exit$/i.test(raw)) { session.mode=({privileged:'user',global:'privileged',interface:'global',vlan:'global',router:'global',line:'global'})[session.mode]||'user'; session.context=''; return {ok:true,output:'',commandId:'exit'}; }
    const tokens=tokenise(raw), available=CISCO.filter(c=>c.modes.includes(session.mode));
    const matches=available.map(c=>({c,m:matchCisco(c,tokens)})).filter(x=>x.m);
    const complete=matches.filter(x=>x.m.complete);
    if(complete.length>1) return {ok:false,output:`% Ambiguous command:  "${raw}"`,error:'ambiguous',explanation:'Typ meer letters tot het commando uniek is; gebruik `?` om de kandidaten te zien.'};
    if(complete.length===1) {
      const {c,m}=complete[0];
      if(typeof c.change==='string') { session.mode=c.change; session.context=''; }
      else if(typeof c.change==='function') c.change({session,args:m.args});
      return {ok:true,output:String(c.output||'').replaceAll('{hostname}',session.hostname).replace(/\{(\d+)\}/g,(_,i)=>m.args[Number(i)]||''),commandId:c.id,args:m.args,canonical:c.syntax.join(' ')};
    }
    if(matches.length) return {ok:false,output:'% Incomplete command.',error:'incomplete',explanation:`Het commando is nog niet compleet. Mogelijke vorm: ${matches[0].c.syntax.map(x=>x.startsWith(':')?`<${x.slice(1)}>`:x).join(' ')}`};
    const first=tokens[0]||'', alternatives=available.filter(c=>literalMatch(first,c.syntax[0])).slice(0,4);
    return {ok:false,output:marker(raw,Math.max(0,raw.lastIndexOf(tokens.at(-1)||''))),error:'invalid',explanation:alternatives.length?`Controleer de syntaxis. In deze modus begint een geldig commando bijvoorbeeld met: ${[...new Set(alternatives.map(x=>x.syntax[0]))].join(', ')}.`:`'${first}' is niet beschikbaar in ${session.mode} mode. Controleer de prompt of ga eerst naar de juiste IOS-modus.`};
  }
  function helpCisco(session,prefix='') {
    const tokens=tokenise(prefix), available=CISCO.filter(c=>c.modes.includes(session.mode));
    const candidates=available.filter(c=>tokens.every((t,i)=>c.syntax[i] && (c.syntax[i].startsWith(':') || literalMatch(t,c.syntax[i]))));
    const index=tokens.length;
    const words=[...new Set(candidates.map(c=>c.syntax[index]).filter(Boolean).map(x=>x.startsWith(':')?`<${x.slice(1)}>`:x))];
    if(!words.length && candidates.some(c=>c.syntax.length===tokens.length)) return '<cr>';
    return words.sort().map(x=>`  ${x.padEnd(24)} ${x.startsWith('<')?'argument':'command keyword'}`).join('\n') || '% Unrecognized command';
  }
  function completeCisco(session,line) {
    const tokens=tokenise(line), trailing=/\s$/.test(line), partial=trailing?'':(tokens.pop()||''), prefix=tokens;
    const candidates=CISCO.filter(c=>c.modes.includes(session.mode)&&prefix.every((t,i)=>c.syntax[i]&&(c.syntax[i].startsWith(':')||literalMatch(t,c.syntax[i]))));
    const index=prefix.length, words=[...new Set(candidates.map(c=>c.syntax[index]).filter(x=>x&&!x.startsWith(':')&&literalMatch(partial,x)))];
    return words.length===1 ? [...prefix,words[0]].join(' ')+(candidates.some(c=>c.syntax.length>index+1)?' ':'') : line;
  }

  function executePowerShell(session,line) {
    const raw=line.trim(), tokens=tokenise(raw), name=(tokens.shift()||'').toLowerCase();
    if(!name) return {ok:true,output:'',commandId:'empty'};
    const commands={
      'get-location':['ps-location',()=>session.path],pwd:['ps-location',()=>session.path],
      'get-childitem':['ps-list',()=>`    Directory: ${session.path}\n\nMode   LastWriteTime        Length Name\n----   -------------        ------ ----\nd----   20/08/2026 10:00           Labs\n-a---   20/08/2026 10:02       842 notes.txt`],gci:null,dir:null,ls:null,
      'set-location':['ps-set-location',()=>{if(!tokens[0]) throw new Error('Missing an argument for parameter Path.'); session.path=tokens[0].replace('/','\\'); return '';}],cd:null,
      'get-process':['ps-process',()=>` NPM(K)    PM(M)      CPU(s)      Id  ProcessName\n ------    -----      ------      --  -----------\n     28    72.40        3.18    4240  explorer\n     19    41.02        0.84    5512  powershell`],gps:null,
      'get-service':['ps-service',()=>`Status   Name               DisplayName\n------   ----               -----------\nRunning  Dnscache           DNS Client\nRunning  DNS                DNS Server`],
      'test-connection':['ps-ping',()=>`Source        Destination     IPV4Address      Latency(ms)\nCLIENT01      ${tokens[0]||'server01'}        192.0.2.10       1`],ping:null,
      'get-netipconfiguration':['ps-ipconfig',()=>`InterfaceAlias       : Ethernet0\nIPv4Address          : 192.0.2.25\nIPv4DefaultGateway   : 192.0.2.1\nDNSServer             : 192.0.2.10`],
      'get-windowsfeature':['ps-feature',()=>`Display Name                                            Name                       Install State\n------------                                            ----                       -------------\n[X] DNS Server                                          DNS                            Installed\n[X] Active Directory Domain Services                   AD-Domain-Services             Installed`],
      'get-aduser':['ps-aduser',()=>`DistinguishedName : CN=${tokens[0]||'Ada'},OU=Lab,DC=example,DC=local\nEnabled           : True\nName              : ${tokens[0]||'Ada'}\nSamAccountName    : ${(tokens[0]||'ada').toLowerCase()}`]
    };
    commands.gci=commands.dir=commands.ls=commands['get-childitem']; commands.cd=commands['set-location']; commands.gps=commands['get-process']; commands.ping=commands['test-connection'];
    const cmd=commands[name];
    if(!cmd) return {ok:false,output:`${raw.split(/\s/)[0]} : The term '${raw.split(/\s/)[0]}' is not recognized as the name of a cmdlet, function, script file, or operable program.`,error:'not-found',explanation:'Controleer de Verb-Noun-naam of gebruik een geldige PowerShell-alias.'};
    try{return {ok:true,output:cmd[1](),commandId:cmd[0],args:tokens};}catch(error){return {ok:false,output:`${name}: ${error.message}`,error:'parameter',explanation:'Een verplichte parameter of waarde ontbreekt.'};}
  }
  function executeCmd(session,line) {
    const raw=line.trim(), tokens=tokenise(raw), name=(tokens.shift()||'').toLowerCase(); if(!name)return {ok:true,output:'',commandId:'empty'};
    const table={cd:['cmd-cd',()=>{if(tokens[0])session.path=tokens[0];return session.path;}],dir:['cmd-dir',()=>` Directory of ${session.path}\n\n20/08/2026  10:00    <DIR>          Labs\n20/08/2026  10:02               842 notes.txt\n               1 File(s)            842 bytes`],ipconfig:['cmd-ipconfig',()=>`Windows IP Configuration\n\nEthernet adapter Ethernet0:\n   IPv4 Address. . . . . . . . . . . : 192.0.2.25\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.0.2.1`],nslookup:['cmd-nslookup',()=>`Server:  dc01.example.local\nAddress:  192.0.2.10\n\nName:    ${tokens[0]||'server01'}\nAddress:  192.0.2.20`],ping:['cmd-ping',()=>`Pinging ${tokens.at(-1)||'server01'} [192.0.2.20] with 32 bytes of data:\nReply from 192.0.2.20: bytes=32 time<1ms TTL=128\n\nPing statistics for 192.0.2.20:\n    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss)`],whoami:['cmd-whoami',()=>`example\\student`],sc:['cmd-sc',()=>`SERVICE_NAME: DNS\n        TYPE               : 10  WIN32_OWN_PROCESS\n        STATE              : 4  RUNNING`],net:['cmd-net-user',()=>`User accounts for \\SERVER01\n-------------------------------------------------------------------------------\nAdministrator            DefaultAccount           labadmin\nThe command completed successfully.`],cls:['cmd-cls',()=>'']};
    const cmd=table[name]; if(!cmd)return {ok:false,output:`'${raw.split(/\s/)[0]}' is not recognized as an internal or external command,\noperable program or batch file.`,error:'not-found',explanation:'Controleer de spelling en gebruik een commando dat in CMD beschikbaar is.'};
    if(name==='net'&&tokens[0]?.toLowerCase()!=='user')return {ok:false,output:'The syntax of this command is:\nNET USER',error:'syntax',explanation:'Voor lokale accounts is de vorm `net user`.'};
    return {ok:true,output:cmd[1](),commandId:cmd[0],args:tokens};
  }
  function createSession(profile='cisco',startMode) { return {profile,mode:startMode||(profile==='cisco'?'user':'default'),hostname:profile==='cisco'?'Router':'',context:'',path:'C:\\Lab'}; }
  function execute(session,line) { return session.profile==='cisco'?executeCisco(session,line):session.profile==='powershell'?executePowerShell(session,line):executeCmd(session,line); }
  function complete(session,line) { return session.profile==='cisco'?completeCisco(session,line):line; }
  root.CLI_TRAINER={TOPICS,EXERCISES,createSession,prompt,execute,complete,helpCisco};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.CLI_TRAINER;
})(typeof window!=='undefined'?window:globalThis);
