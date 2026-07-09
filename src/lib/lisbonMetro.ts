export type Municipality = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  bank: "north" | "south";
  rent: string;
  studentFit: number;
  hasDetail: boolean;
};

export type Freguesia = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  rent: string;
  safety: number;
  transport: number;
  nightlife: number;
  studentFit: number;
  commute: string;
  bestFor: string;
  caution: string;
  bairros: string[];
  hasBairroZoom?: boolean;
};

export type Bairro = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
};

export type Listing = {
  id: string;
  title: string;
  rent: number;
  type: string;
  source: string;
  featured?: boolean;
  riskNote?: string;
  lat: number;
  lng: number;
  description: string;
  rooms: number;
  sizeSqm: number;
  availableFrom: string;
  amenities: string[];
  sourceUrl?: string;
  homeUniversityFriendly?: boolean;
};

export const municipalities: Municipality[] = [
  { slug: "lisboa", name: "Lisbon", lat: 38.70775, lng: -9.13659, bank: "north", rent: "€650–€1,300/mo", studentFit: 8.0, hasDetail: true },
  { slug: "amadora", name: "Amadora", lat: 38.75896, lng: -9.23652, bank: "north", rent: "€550–€800/mo", studentFit: 6.0, hasDetail: false },
  { slug: "cascais", name: "Cascais", lat: 38.69689, lng: -9.42045, bank: "north", rent: "€900–€1,400/mo", studentFit: 6.5, hasDetail: false },
  { slug: "loures", name: "Loures", lat: 38.83087, lng: -9.16845, bank: "north", rent: "€550–€800/mo", studentFit: 5.5, hasDetail: false },
  { slug: "mafra", name: "Mafra", lat: 38.93698, lng: -9.32824, bank: "north", rent: "€500–€750/mo", studentFit: 4.5, hasDetail: false },
  { slug: "odivelas", name: "Odivelas", lat: 38.79043, lng: -9.17926, bank: "north", rent: "€550–€800/mo", studentFit: 5.8, hasDetail: false },
  { slug: "oeiras", name: "Oeiras", lat: 38.69258, lng: -9.31231, bank: "north", rent: "€750–€1,150/mo", studentFit: 6.8, hasDetail: false },
  { slug: "sintra", name: "Sintra", lat: 38.83554, lng: -9.35224, bank: "north", rent: "€600–€900/mo", studentFit: 5.0, hasDetail: false },
  { slug: "vila-franca-de-xira", name: "Vila Franca de Xira", lat: 38.91206, lng: -8.98892, bank: "north", rent: "€500–€750/mo", studentFit: 4.2, hasDetail: false },
  { slug: "alcochete", name: "Alcochete", lat: 38.75605, lng: -8.96084, bank: "south", rent: "€550–€800/mo", studentFit: 4.0, hasDetail: false },
  { slug: "almada", name: "Almada", lat: 38.68313, lng: -9.15763, bank: "south", rent: "€650–€950/mo", studentFit: 6.2, hasDetail: false },
  { slug: "barreiro", name: "Barreiro", lat: 38.63407, lng: -9.04786, bank: "south", rent: "€500–€750/mo", studentFit: 4.5, hasDetail: false },
  { slug: "moita", name: "Moita", lat: 38.65240, lng: -8.99353, bank: "south", rent: "€500–€700/mo", studentFit: 3.8, hasDetail: false },
  { slug: "montijo", name: "Montijo", lat: 38.70608, lng: -8.97464, bank: "south", rent: "€550–€800/mo", studentFit: 4.0, hasDetail: false },
  { slug: "palmela", name: "Palmela", lat: 38.56960, lng: -8.90117, bank: "south", rent: "€500–€750/mo", studentFit: 3.5, hasDetail: false },
  { slug: "seixal", name: "Seixal", lat: 38.64222, lng: -9.10727, bank: "south", rent: "€550–€800/mo", studentFit: 4.8, hasDetail: false },
  { slug: "sesimbra", name: "Sesimbra", lat: 38.44369, lng: -9.09963, bank: "south", rent: "€600–€900/mo", studentFit: 4.2, hasDetail: false },
  { slug: "setubal", name: "Setúbal", lat: 38.52418, lng: -8.89323, bank: "south", rent: "€550–€850/mo", studentFit: 4.5, hasDetail: false },
];

export const lisbonFreguesias: Freguesia[] = [
  {
    slug: "carnide",
    name: "Carnide",
    lat: 38.7598932,
    lng: -9.1896195,
    description: "A quieter, more affordable residential district in the north-west, good value but further from the main student and nightlife hubs.",
    rent: "€650–€900/mo",
    safety: 7.9,
    transport: 7.2,
    nightlife: 4.5,
    studentFit: 6.2,
    commute: "30–40 min to major universities",
    bestFor: "Affordable residential living, green areas, families",
    caution: "Distance from central nightlife and most campuses",
    bairros: ["Az. Torre do Fato", "Bairro da Horta Nova", "Bairro Novo de Carnide", "Bairro Padre Cruz", "Carnide", "Quinta da Luz", "Quinta do Bom Nome", "Telheiras"],
  },
  {
    slug: "lumiar",
    name: "Lumiar",
    lat: 38.7685509,
    lng: -9.1624841,
    description: "A modern northern residential district anchored by the Telheiras area, well liked by young professionals and students who don't need to be downtown.",
    rent: "€700–€1,000/mo",
    safety: 8.1,
    transport: 7.8,
    nightlife: 5.8,
    studentFit: 7.9,
    commute: "20–30 min to major universities",
    bestFor: "Popular with young professionals, Telheiras metro, residential calm",
    caution: "Less central, relies on metro for access to downtown",
    bairros: ["Alameda das Linhas Torres", "Alta de Lisboa Sul", "Alto da Faia", "Bairro da Cruz Vermelha", "Bairro das Mouras", "Bairro Tóbis", "Carriche", "Garcia de Resende", "Lumiar", "Paço do Lumiar", "Parque Europa", "Quinta das Pedreiras", "Quinta do Lambert", "Quinta dos Alcoutins", "Telheiras"],
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    lat: 38.7860598,
    lng: -9.1533613,
    description: "A residential district at Lisbon's northern edge, affordable and green but the furthest from the main university and nightlife areas.",
    rent: "€650–€950/mo",
    safety: 7.7,
    transport: 7.0,
    nightlife: 4.2,
    studentFit: 6.0,
    commute: "30–45 min to major universities",
    bestFor: "Affordable northern residential living, green spaces",
    caution: "Farthest from central campuses and nightlife",
    bairros: ["Alta de Lisboa Centro", "Alta de Lisboa Norte", "Alto do Chapeleiro", "Ameixoeira - Noroeste", "Ameixoeira", "Bairro das Galinheiras", "Bairro dos Sete Céus", "Charneca", "Quinta da Torrinha - Norte", "Quinta da Torrinha", "Quinta de Sant'Ana", "Quinta do Grafanil", "Santa Clara"],
  },
  {
    slug: "sao-domingos-de-benfica",
    name: "São Domingos de Benfica",
    lat: 38.7466028,
    lng: -9.1765868,
    description: "A residential district home to Lisbon Zoo and Benfica's stadium, calm and reasonably priced but light on nightlife.",
    rent: "€700–€1,000/mo",
    safety: 8.1,
    transport: 7.3,
    nightlife: 5.0,
    studentFit: 6.8,
    commute: "25–35 min to major universities",
    bestFor: "Zoo and stadium area, residential calm, decent value",
    caution: "Limited nightlife and a longer commute to central campuses",
    bairros: ["Alto dos Moinhos", "Avenida dos Combatentes", "Bairro das Furnas", "Bairro de São João", "Bairro dos Soeiros", "Bairro Grandella", "Bairro Novo de Benfica", "Benfica", "Laranjeiras", "Palhavã", "Quinta dos Barros"],
  },
  {
    slug: "benfica",
    name: "Benfica",
    lat: 38.7481712,
    lng: -9.1994775,
    description: "A traditional, affordable residential district built around Benfica's stadium, practical but with limited nightlife and match-day disruption.",
    rent: "€650–€950/mo",
    safety: 7.8,
    transport: 7.0,
    nightlife: 5.0,
    studentFit: 6.6,
    commute: "25–40 min to major universities",
    bestFor: "Football culture (S.L. Benfica), affordable residential living",
    caution: "Match-day crowds and traffic around the stadium",
    bairros: ["Bairro da Boavista", "Bairro das Pedralvas", "Bairro de Santa Cruz", "Bairro do Charquinho", "Benfica", "Calhariz de Benfica"],
  },
  {
    slug: "campolide",
    name: "Campolide",
    lat: 38.727895,
    lng: -9.1646135,
    description: "A hillside district close to Nova SBE and several university buildings, popular with students for its short commute despite steep streets.",
    rent: "€700–€1,050/mo",
    safety: 7.7,
    transport: 7.6,
    nightlife: 6.0,
    studentFit: 8.2,
    commute: "10–20 min to major universities",
    bestFor: "Nova SBE campus proximity, mixed student housing, hillside views",
    caution: "Steep streets and uneven mix of housing quality",
    bairros: ["Amoreiras", "Bairro Calçada dos Mestres", "Bairro da Liberdade", "Bairro da Serafina", "Campolide", "José Malhoa", "Quinta da Bela Flor"],
  },
  {
    slug: "areeiro",
    name: "Areeiro",
    lat: 38.7413849,
    lng: -9.1321846,
    description: "A calm, central residential area well served by two metro lines, popular with graduate students who want quiet with good connectivity.",
    rent: "€750–€1,100/mo",
    safety: 8.0,
    transport: 8.3,
    nightlife: 6.2,
    studentFit: 7.6,
    commute: "15–25 min to major universities",
    bestFor: "Central residential living, good metro access, quieter students",
    caution: "Limited nightlife compared to neighboring Arroios",
    bairros: ["Arco do Cego", "Areeiro", "Avenida de Roma", "Avenida Gago Coutinho", "Avenidas Novas", "Avenidas Novas - Sul", "Bairro da GNR", "Bairro dos Actores", "Bairro dos Aliados", "Bairro Portugal Novo", "Casal Vistoso", "Olaias"],
  },
  {
    slug: "alvalade",
    name: "Alvalade",
    lat: 38.7473212,
    lng: -9.1395885,
    description: "A well-planned mid-century residential district around Campo Grande, safe and orderly with good transport but a quieter evening scene.",
    rent: "€800–€1,150/mo",
    safety: 8.3,
    transport: 8.2,
    nightlife: 6.0,
    studentFit: 7.8,
    commute: "15–25 min to major universities",
    bestFor: "Planned residential grid, families, Sporting CP fans, calm streets",
    caution: "Higher rents for a mostly residential feel",
    bairros: ["Avenida de Roma", "Avenida Gago Coutinho", "Avenidas Novas", "Bairro das Estacas", "Bairro das Fonsecas", "Bairro de Alvalade", "Bairro de S. Miguel", "Bairro S. João de Deus", "Campo Grande", "Entrecampos", "Estados Unidos da América - Oeste", "Estados Unidos da América - Este", "Pote de Água", "Quinta dos Barros", "São João de Brito"],
  },
  {
    slug: "arroios",
    name: "Arroios",
    lat: 38.7312586,
    lng: -9.1394358,
    description: "One of Lisbon's most multicultural and creative districts, with a strong international-student following, though parts near Intendente can feel rough after dark.",
    rent: "€700–€1,050/mo",
    safety: 7.6,
    transport: 8.5,
    nightlife: 8.2,
    studentFit: 8.3,
    commute: "15–25 min to major universities",
    bestFor: "Multicultural, bohemian, international students, food scene",
    caution: "Some streets feel run-down at night around Intendente/Martim Moniz",
    bairros: ["Arroios", "Bairro Andrade", "Bairro Camões", "Bairro Castelinhos", "Bairro Catarino", "Bairro das Colónias", "Bairro de Inglaterra", "Bairro Santana", "Desterro", "Estefania", "Graça", "Intendente", "Martim Moniz", "Mastro - Bemposta", "Penha de França", "Picoas", "S. Bernardino", "Santa Bárbara", "São Lázaro", "Torel - Norte", "Torel"],
  },
  {
    slug: "penha-de-franca",
    name: "Penha de França",
    lat: 38.7261609,
    lng: -9.1269126,
    description: "A working-class district next to Arroios that's steadily gentrifying, offering good value and a genuine local feel close to the city center.",
    rent: "€700–€1,000/mo",
    safety: 7.5,
    transport: 7.9,
    nightlife: 6.8,
    studentFit: 7.5,
    commute: "15–25 min to major universities",
    bestFor: "Up-and-coming, good value near Arroios, mixed community",
    caution: "Still gentrifying, some pockets feel less polished",
    bairros: ["Afonso III", "Arroios", "Bairro do Alto do Pina", "Bairro Horizonte", "Bairro Lopes", "Estrada de Chelas", "Paiva Couceiro", "Penha de França", "Santos-o-Novo", "Sapadores", "Vale de Santo António", "Vale Escuro"],
  },
  {
    slug: "avenidas-novas",
    name: "Avenidas Novas",
    lat: 38.7364362,
    lng: -9.1498249,
    description: "Practical, central-north area with strong transport and good access to universities.",
    rent: "€750–€1,100/mo",
    safety: 8.5,
    transport: 8.8,
    nightlife: 7.0,
    studentFit: 8.7,
    commute: "10–25 min to major universities",
    bestFor: "University access, transport, balanced lifestyle",
    caution: "Competitive demand during semester start",
    bairros: ["Avenidas Novas", "Bairro Azul", "Bairro de Londres", "Bairro Santos", "Entrecampos", "Envolvente Gulbenkian", "Parque", "Picoas", "São Sebastião da Pedreira"],
    hasBairroZoom: true,
  },
  {
    slug: "olivais",
    name: "Olivais",
    lat: 38.7683121,
    lng: -9.1174618,
    description: "A quieter residential district near Lisbon Airport, more affordable but with occasional aircraft noise and a longer commute to central campuses.",
    rent: "€700–€1,000/mo",
    safety: 7.9,
    transport: 7.4,
    nightlife: 5.2,
    studentFit: 6.9,
    commute: "25–35 min to major universities",
    bestFor: "Affordable residential living near the airport, calm streets",
    caution: "Aircraft noise in parts close to the airport",
    bairros: ["Alfredo Bensaúde", "Bairro da Encarnação", "Olivais Norte", "Olivais Sul", "Olivais Velho", "Quinta das Gandieiras (Candeeiros)", "Quinta do Morgado"],
  },
  {
    slug: "campo-de-ourique",
    name: "Campo de Ourique",
    lat: 38.7153262,
    lng: -9.1679353,
    description: "Residential, safe and local, good for people who prefer calm over nightlife.",
    rent: "€700–€1,000/mo",
    safety: 8.6,
    transport: 7.5,
    nightlife: 6.5,
    studentFit: 8.0,
    commute: "25–40 min to major universities",
    bestFor: "Calmer lifestyle, safety, local feel",
    caution: "Fewer student-focused listings",
    bairros: ["Amoreiras", "Av. de Ceuta", "Campo de Ourique", "Estrela", "Maria Pia", "Santa Isabel", "São Bento", "Sete Moinhos"],
  },
  {
    slug: "estrela",
    name: "Estrela",
    lat: 38.7108223,
    lng: -9.1596848,
    description: "An elegant, leafy district home to Estrela Garden and many embassies, safe and central but among the pricier options for students.",
    rent: "€900–€1,300/mo",
    safety: 8.7,
    transport: 8.0,
    nightlife: 6.5,
    studentFit: 7.4,
    commute: "20–30 min to major universities",
    bestFor: "Upscale living, embassies, gardens, Lapa's calm elegance",
    caution: "One of the more expensive areas for students",
    bairros: ["Alcântara", "Av. de Ceuta", "Estrela", "Janelas Verdes", "Lapa", "Madragoa", "Maria Pia", "Necessidades", "Santos", "São Bento", "São Bento - Sul", "Vinte e Quatro de Julho"],
  },
  {
    slug: "misericordia",
    name: "Misericórdia",
    lat: 38.7114084,
    lng: -9.1507477,
    description: "Home to Bairro Alto and Chiado, Lisbon's most famous nightlife and shopping district — extremely central but noisy at night and pricey.",
    rent: "€900–€1,350/mo",
    safety: 7.6,
    transport: 8.8,
    nightlife: 9.2,
    studentFit: 7.7,
    commute: "15–25 min to major universities",
    bestFor: "Bairro Alto and Chiado nightlife, shopping, very central",
    caution: "Loud at night and among the most expensive central areas",
    bairros: ["Aterro da Boavista", "Bairro Alto", "Bairro da Bica", "Chiado", "Conde Barão", "Príncipe Real", "Santa Catarina", "São Bento", "São Paulo"],
  },
  {
    slug: "santo-antonio",
    name: "Santo António",
    lat: 38.7220648,
    lng: -9.1514289,
    description: "The upscale business core around Avenida da Liberdade and Marquês de Pombal — extremely well connected but priced accordingly.",
    rent: "€900–€1,350/mo",
    safety: 8.2,
    transport: 8.7,
    nightlife: 7.5,
    studentFit: 7.6,
    commute: "10–20 min to major universities",
    bestFor: "Avenida da Liberdade area, central business district, very connected",
    caution: "High rents reflecting the prime central location",
    bairros: ["Amoreiras", "Avenida", "Bairro Barata Salgueiro", "Bairro Camões", "Bairro da Cotovia", "Bairro do Andaluz", "Castilho-Rodrigo da Fonseca", "Mãe d'Água", "Marquês de Pombal", "Parque Mayer", "Picoas", "Santa Marta", "São Mamede", "Torel"],
  },
  {
    slug: "santa-maria-maior",
    name: "Santa Maria Maior",
    lat: 38.7122372,
    lng: -9.135738,
    description: "Lisbon's historic tourist core, covering Baixa, parts of Alfama, and Rossio — stunning and central, but tourist pressure inflates prices and short-term-rental risk.",
    rent: "€850–€1,250/mo",
    safety: 7.3,
    transport: 8.5,
    nightlife: 8.5,
    studentFit: 7.2,
    commute: "20–30 min to major universities",
    bestFor: "Historic core, Alfama/Baixa/Chiado charm, tourists and nightlife",
    caution: "Tourist-heavy with some deposit-scam-prone short-term listings",
    bairros: ["Alfama", "Avenida", "Baixa Pombalina", "Castelo", "Chiado", "Martim Moniz", "Mouraria", "Rossio", "Rua da Palma", "São Lázaro", "Sé"],
  },
  {
    slug: "sao-vicente",
    name: "São Vicente",
    lat: 38.7183477,
    lng: -9.1250713,
    description: "A historic hillside district covering Graça and part of Alfama, known for its viewpoints and a growing nightlife scene, though steep streets and tourism push up prices.",
    rent: "€750–€1,100/mo",
    safety: 7.4,
    transport: 7.6,
    nightlife: 7.8,
    studentFit: 7.3,
    commute: "20–30 min to major universities",
    bestFor: "Graça viewpoints, historic charm, up-and-coming nightlife",
    caution: "Steep hills and some tourist-driven price pressure",
    bairros: ["Alfama", "Bairro América", "Bairro Ermida", "Bairro Estrela d'Ouro", "Bairro Operário", "Barbadinhos", "Graça", "Quinta do Ferro", "Santa Apolónia", "Santa Engrácia", "São Vicente", "Sapadores", "Vale de Santo António"],
  },
  {
    slug: "ajuda",
    name: "Ajuda",
    lat: 38.7046757,
    lng: -9.1996035,
    description: "A hillside residential area near Belém's monuments, calm and green but removed from the university and nightlife core.",
    rent: "€650–€950/mo",
    safety: 8.0,
    transport: 6.8,
    nightlife: 4.5,
    studentFit: 6.5,
    commute: "30–45 min to major universities",
    bestFor: "Quiet residential living near Belém, green spaces, family-friendly",
    caution: "Fewer nightlife options and longer commute to central campuses",
    bairros: ["Ajuda", "Alto da Ajuda", "Alto do Restelo", "Bairro da GNR - Ajuda", "Bairro Dois de Maio", "Bairro dos Sargentos", "Bairro Novo da Memória", "Boa Hora", "Caramão da Ajuda", "Casalinho da Ajuda", "Cruzeiro", "Envolvente ao Palácio Nacional da Ajuda", "Rio Seco", "Ajuda Norte"],
  },
  {
    slug: "belem",
    name: "Belém",
    lat: 38.7055415,
    lng: -9.2132265,
    description: "Lisbon's monumental riverside quarter, beautiful and safe but touristy, quiet at night, and furthest from the main university cluster.",
    rent: "€800–€1,150/mo",
    safety: 8.4,
    transport: 7.0,
    nightlife: 4.8,
    studentFit: 6.4,
    commute: "30–45 min to major universities",
    bestFor: "Museums, monuments, riverside walks, calm family living",
    caution: "Tourist crowds and one of the longest commutes to central universities",
    bairros: ["Ajuda", "Alto do Restelo", "Bairro das Casas Económicas do Restelo", "Bairro de Caselas", "Bairro Novo da Memória", "Bairro Novo de Belém", "Belém", "Bom Sucesso", "Junqueira", "Pedrouços", "Restelo", "Belém Norte"],
  },
  {
    slug: "alcantara",
    name: "Alcântara",
    lat: 38.7038836,
    lng: -9.1823883,
    description: "A former industrial riverside district turned creative hub (LX Factory), with popular nightlife along the docks but mixed housing quality.",
    rent: "€750–€1,050/mo",
    safety: 7.5,
    transport: 7.8,
    nightlife: 7.8,
    studentFit: 7.0,
    commute: "20–30 min to major universities",
    bestFor: "River-front bars and clubs, creative/warehouse scene, LX Factory",
    caution: "Nightlife noise near the docks and uneven housing stock quality",
    bairros: ["Alcântara", "Alto de Santo Amaro", "Av. de Ceuta", "Bairro Calvário", "Bairro do Alvito", "Junqueira", "Quinta do Jacinto", "Rio Seco", "Alcântara Norte"],
  },
  {
    slug: "beato",
    name: "Beato",
    lat: 38.7317082,
    lng: -9.1074964,
    description: "A former industrial riverside area rapidly redeveloping around Lisbon's growing tech and innovation scene, with lower rents but still-developing infrastructure.",
    rent: "€700–€1,000/mo",
    safety: 7.4,
    transport: 6.5,
    nightlife: 5.5,
    studentFit: 6.8,
    commute: "30–40 min to major universities",
    bestFor: "Emerging tech/creative hub (Beato Innovation District), lower rents",
    caution: "Still under redevelopment, patchy public transport",
    bairros: ["Bairro Carlos Botelho", "Bairro Novo do Grilo", "Beato", "Estrada de Chelas", "Estrada de Marvila", "Madre de Deus", "Olaias", "Picheleira", "Quinta do Ourives", "Xabregas"],
  },
  {
    slug: "marvila",
    name: "Marvila",
    lat: 38.7460112,
    lng: -9.1056191,
    description: "A former industrial zone now known for craft breweries and art galleries in converted warehouses, cheaper but still uneven in infrastructure and safety.",
    rent: "€650–€950/mo",
    safety: 7.0,
    transport: 6.2,
    nightlife: 6.8,
    studentFit: 6.5,
    commute: "30–40 min to major universities",
    bestFor: "Warehouse breweries and galleries, lower rents, creative crowd",
    caution: "Uneven safety and infrastructure across the district",
    bairros: ["Bairro da Flamenga", "Bairro da Prodac", "Bairro das Amendoeiras", "Bairro das Salgadas", "Bairro do Armador", "Bairro do Condado", "Bairro do Vale Formoso de Cima", "Bairro dos Alfinetes", "Bairro dos Lóios", "Bairro J", "Bairro Marquês de Abrantes", "Bairro Prodac Norte", "Bela Vista", "Braço de Prata", "Estrada de Marvila", "Marvila", "Quinta do Ourives", "Matinha"],
  },
  {
    slug: "parque-das-nacoes",
    name: "Parque das Nações",
    lat: 38.7638712,
    lng: -9.0953729,
    description: "Modern, safe and clean, but usually more expensive and less student-centered.",
    rent: "€850–€1,300/mo",
    safety: 8.8,
    transport: 8.4,
    nightlife: 6.8,
    studentFit: 7.2,
    commute: "30–45 min to major universities",
    bestFor: "Modern apartments, safety, riverfront lifestyle",
    caution: "Expensive and further from traditional student areas",
    bairros: ["Bairro dos Retornados", "Cabo Ruivo", "Casal dos Machados", "Estrada de Moscavide", "Parque das Nações - Centro", "Parque das Nações - Norte", "Parque das Nações - Sul", "Quinta das Laranjeiras"],
  },
];

export const avenidasNovasBairros: Bairro[] = [
  { slug: "bairro-azul", name: "Bairro Azul", lat: 38.7351497, lng: -9.1563892 },
  { slug: "parque", name: "Parque", lat: 38.7282116, lng: -9.1530143 },
  { slug: "envolvente-gulbenkian", name: "Envolvente Gulbenkian", lat: 38.7372895, lng: -9.1548013 },
  { slug: "bairro-de-londres", name: "Bairro de Londres", lat: 38.7385, lng: -9.1465 },
  { slug: "avenidas-novas-centro", name: "Avenidas Novas", lat: 38.7433694, lng: -9.1471433 },
  { slug: "picoas", name: "Picoas", lat: 38.7303488, lng: -9.1469321 },
  { slug: "bairro-santos", name: "Bairro Santos", lat: 38.7319523, lng: -9.1435012 },
  { slug: "entrecampos", name: "Entrecampos", lat: 38.7470462, lng: -9.1482017 },
  { slug: "sao-sebastiao-da-pedreira", name: "São Sebastião da Pedreira", lat: 38.7340736, lng: -9.1538680 },
];

export const avenidasNovasListings: Listing[] = [
  {
    id: "ha-gulbenkian-room",
    title: "Bright room near Gulbenkian",
    rent: 820,
    type: "Room",
    source: "HousingAtlas",
    featured: true,
    lat: 38.7376,
    lng: -9.1552,
    description:
      "A bright, furnished room in a shared apartment two minutes from the Gulbenkian gardens, with a dedicated desk and fast wifi — ideal for a student who wants green space nearby without leaving the city center.",
    rooms: 1,
    sizeSqm: 14,
    availableFrom: "1 Sep 2026",
    amenities: ["Furnished", "Wifi included", "Washing machine", "Bills included"],
  },
  {
    id: "uniplaces-saldanha-studio",
    title: "Studio near Saldanha",
    rent: 1050,
    type: "Studio",
    source: "Uniplaces",
    lat: 38.7347193,
    lng: -9.1452467,
    description:
      "A compact, self-contained studio a short walk from Saldanha's shops, cafés, and metro interchange — good for a student who wants independence and easy access to the rest of the city.",
    rooms: 1,
    sizeSqm: 28,
    availableFrom: "15 Sep 2026",
    amenities: ["Furnished", "Private bathroom", "Kitchenette"],
    sourceUrl: "https://www.uniplaces.com",
  },
  {
    id: "housinganywhere-entrecampos-room",
    title: "Shared apartment in Entrecampos",
    rent: 760,
    type: "Room",
    source: "HousingAnywhere",
    lat: 38.7470462,
    lng: -9.1482017,
    description:
      "A room in a 3-bedroom shared apartment in Entrecampos, close to the metro and several university faculties — a practical option for students who don't mind flatmates.",
    rooms: 1,
    sizeSqm: 12,
    availableFrom: "1 Oct 2026",
    amenities: ["Furnished", "Shared kitchen", "Elevator"],
    sourceUrl: "https://housinganywhere.com",
  },
  {
    id: "spotahome-picoas-room",
    title: "Room near Picoas",
    rent: 690,
    type: "Room",
    source: "Spotahome",
    riskNote: "Higher caution",
    lat: 38.7303488,
    lng: -9.1469321,
    description:
      "A budget room near Picoas listed with limited photos and no verified reviews yet — worth extra diligence before committing given the caution flag.",
    rooms: 1,
    sizeSqm: 10,
    availableFrom: "Immediately",
    amenities: ["Furnished"],
    sourceUrl: "https://www.spotahome.com",
  },
  {
    id: "ha-campo-pequeno-room",
    title: "Modern room near Campo Pequeno",
    rent: 875,
    type: "Room",
    source: "HousingAtlas",
    homeUniversityFriendly: true,
    lat: 38.7425785,
    lng: -9.1456390,
    description:
      "A modern, recently renovated room in a quiet building near Campo Pequeno, within walking distance of Entrecampos and several university campuses. The landlord has previously hosted students from your home university and is familiar with what international students need.",
    rooms: 1,
    sizeSqm: 13,
    availableFrom: "1 Sep 2026",
    amenities: ["Furnished", "Wifi included", "Elevator", "Bills included"],
  },
];

export function getMunicipalityBySlug(slug: string): Municipality | undefined {
  return municipalities.find((m) => m.slug === slug);
}

export function getFreguesiaBySlug(slug: string): Freguesia | undefined {
  return lisbonFreguesias.find((f) => f.slug === slug);
}

export type ListingFilters = {
  types: string[];
  sources: string[];
  amenities: string[];
  minPrice: number;
  maxPrice: number;
  availableNow: boolean;
  homeUniversityFriendly: boolean;
};

export function getListingFilterOptions(listings: Listing[]) {
  const types = [...new Set(listings.map((l) => l.type))].sort();
  const sources = [...new Set(listings.map((l) => l.source))].sort();
  const amenities = [...new Set(listings.flatMap((l) => l.amenities))].sort();
  const prices = listings.map((l) => l.rent);
  const priceBounds = {
    min: prices.length ? Math.min(...prices) : 0,
    max: prices.length ? Math.max(...prices) : 0,
  };
  return { types, sources, amenities, priceBounds };
}

export function getDefaultListingFilters(listings: Listing[]): ListingFilters {
  const { priceBounds } = getListingFilterOptions(listings);
  return {
    types: [],
    sources: [],
    amenities: [],
    minPrice: priceBounds.min,
    maxPrice: priceBounds.max,
    availableNow: false,
    homeUniversityFriendly: false,
  };
}

export function filterListings(listings: Listing[], filters: ListingFilters): Listing[] {
  return listings.filter((listing) => {
    if (filters.types.length > 0 && !filters.types.includes(listing.type)) return false;
    if (filters.sources.length > 0 && !filters.sources.includes(listing.source)) return false;
    if (filters.amenities.length > 0 && !filters.amenities.every((a) => listing.amenities.includes(a))) {
      return false;
    }
    if (listing.rent < filters.minPrice || listing.rent > filters.maxPrice) return false;
    if (filters.availableNow && listing.availableFrom !== "Immediately") return false;
    if (
      filters.homeUniversityFriendly &&
      !(listing.source === "HousingAtlas" && listing.homeUniversityFriendly)
    ) {
      return false;
    }
    return true;
  });
}
