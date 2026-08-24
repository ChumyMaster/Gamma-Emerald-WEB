export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/6698f7de-0b1d-491f-a03c-6c91cda42c19/_result.png",
  battle: "https://image.qwenlm.ai/generated-images/9768e845-b036-4515-be1a-10d0e9ed9d17/_result.png",
  town: "https://image.qwenlm.ai/generated-images/b603941c-0ef7-402f-9feb-7a627d9a803a/_result.png",
  fox: "https://image.qwenlm.ai/generated-images/0eab8b3e-88f0-4af6-9e8e-301c21c2b8f9/_result.png",
  moth: "https://image.qwenlm.ai/generated-images/1e53951e-67fa-41eb-b088-e0d216fdaa0c/_result.png",
  drake: "https://image.qwenlm.ai/generated-images/fc38dae1-318c-4e95-8527-f469f7992034/_result.png",
  map: "https://image.qwenlm.ai/generated-images/a4eb5220-5dfe-45a6-af9a-fd01dac214ae/_result.png",
};

export const LINKS = {
  itch: "https://undreamedpanic.itch.io/gamma-emerald-ea",
  itchDemo: "https://undreamedpanic.itch.io/gamma-emerald-demo",
  gamejolt: "https://gamejolt.com/games/GammaEmerald/991301",
  trailer1: "https://youtu.be/WzZOoL1IHAU",
  trailer2: "https://youtu.be/jRWxsfQEgY0",
};

export const NAV = [
  { id: "trailer", label: "TRÁILER" },
  { id: "novedades", label: "NOVEDADES" },
  { id: "pokedex", label: "POKÉDEX GAMMA" },
  { id: "region", label: "REGIÓN" },
  { id: "descargar", label: "DESCARGAR" },
  { id: "faq", label: "FAQ" },
];

export const TICKER = [
  "PUEBLO ALBA",
  "RUTA GAMMA 7",
  "BOSQUE ESPECTRO",
  "CIUDAD PRISMA",
  "CUEVA VOLTIO",
  "ARRECIFE VERDE",
  "MONTE CENIT",
  "PUERTO NEBULOSA",
  "RUINAS AURORA",
  "LIGA GAMMA",
];

export const TRAILERS = [
  {
    id: "WzZOoL1IHAU",
    tag: "TRANSMISIÓN 01",
    title: "Tráiler oficial",
    desc: "El primer vistazo al remake HD-2D: la región, la tormenta gamma y el nuevo estilo visual.",
    time: "HD · 2D-HD",
  },
  {
    id: "jRWxsfQEgY0",
    tag: "TRANSMISIÓN 02",
    title: "Gameplay / avance",
    desc: "Combates, exploración y secretos en movimiento. Así se siente recorrer la región en Unreal Engine.",
    time: "GAMEPLAY",
  },
];

export const FEATURES = [
  {
    id: "hd2d",
    code: "N.01",
    title: "HD-2D EN UNREAL ENGINE",
    desc: "Sprites clásicos redibujados sobre escenarios 3D con profundidad de campo, luz volumétrica y clima dinámico. La nostalgia de la GBA con acabado de 2026.",
    points: ["Iluminación volumétrica", "Parallax 3D", "Clima en tiempo real"],
    big: true,
  },
  {
    id: "daynight",
    code: "N.02",
    title: "CICLO DÍA / NOCHE",
    desc: "El sol sale, cae y las estrellas toman el relevo. Ciertos Pokémon, eventos y tiendas solo aparecen según la hora.",
    points: ["4 fases de luz", "Eventos por horario"],
  },
  {
    id: "berries",
    code: "N.03",
    title: "SISTEMA DE BAYAS",
    desc: "Planta, riega y cosecha bayas en suelo fértil. Mézclalas para crear Pokécubos que potencian condiciones y amistades.",
    points: ["Cultivo por etapas", "Pokécubos"],
  },
  {
    id: "breeding",
    code: "N.04",
    title: "CRIANZA Y HUEVOS",
    desc: "Guardería completa con herencia de movimientos huevo, naturalezas e IVs. Incuba mientras exploras la región.",
    points: ["Movimientos huevo", "Naturalezas heredadas"],
  },
  {
    id: "tutors",
    code: "N.05",
    title: "TUTORES DE MOVIMIENTOS",
    desc: "Maestros repartidos por la región enseñan movimientos exclusivos a cambio de escamas y minerales gamma.",
    points: ["Tutores únicos", "Nuevas MTs"],
  },
];

export type Fakaemon = {
  num: string;
  name: string;
  types: { label: string; color: string }[];
  desc: string;
  ability: string;
  stats: { label: string; value: number }[];
  img: string;
  glow: string;
};

export const FAKEMON: Fakaemon[] = [
  {
    num: "#G-001",
    name: "RAIKITSU",
    types: [
      { label: "ELÉCTRICO", color: "#ffd23f" },
      { label: "HADA", color: "#ff7ad1" },
    ],
    desc: "Acumula tormentas enteras en sus nueve colas. Cuando la energía gamma se desborda, el aire huele a ozono durante kilómetros.",
    ability: "ESTÁTICA GAMMA",
    stats: [
      { label: "PS", value: 64 },
      { label: "ATQ", value: 92 },
      { label: "DEF", value: 70 },
      { label: "VEL", value: 118 },
    ],
    img: IMG.fox,
    glow: "rgba(255, 210, 63, 0.28)",
  },
  {
    num: "#G-002",
    name: "MUSGARIA",
    types: [
      { label: "PLANTA", color: "#4ade80" },
      { label: "BICHO", color: "#a3e635" },
    ],
    desc: "Dispersa esporas luminosas que germinan donde caen. Los bosques que habita brillan en verde durante la noche.",
    ability: "ESPESURA FÚNGICA",
    stats: [
      { label: "PS", value: 78 },
      { label: "ATQ", value: 66 },
      { label: "DEF", value: 88 },
      { label: "VEL", value: 61 },
    ],
    img: IMG.moth,
    glow: "rgba(74, 222, 128, 0.28)",
  },
  {
    num: "#G-003",
    name: "MARELDRAK",
    types: [
      { label: "AGUA", color: "#53d8ff" },
      { label: "DRAGÓN", color: "#b18cff" },
    ],
    desc: "Su aleta dorsal emite la firma gamma que guía a los bancos de peces. Los pescadores del Arrecife lo llaman «la linterna del fondo».",
    ability: "CORRIENTE ABISAL",
    stats: [
      { label: "PS", value: 71 },
      { label: "ATQ", value: 104 },
      { label: "DEF", value: 77 },
      { label: "VEL", value: 96 },
    ],
    img: IMG.drake,
    glow: "rgba(83, 216, 255, 0.28)",
  },
];

export const ROUTES = [
  {
    name: "PUEBLO ALBA",
    type: "Inicio",
    desc: "El punto de partida. Un pueblo costero donde la Profesora Haya reparte los iniciales y el viento trae el primer rumor de la tormenta gamma.",
    x: 20,
    y: 66,
    color: "#5dff8f",
  },
  {
    name: "RUTA GAMMA 7",
    type: "Ruta",
    desc: "Campos de hierba alta atravesados por relámpagos verdes. Aquí los entrenadores novatos libran sus primeros combates dobles.",
    x: 36,
    y: 50,
    color: "#ffc857",
  },
  {
    name: "BOSQUE ESPECTRO",
    type: "Zona especial",
    desc: "Un bosque que solo se abre de noche. Las esporas de Musgaria iluminan senderos que desaparecen al amanecer.",
    x: 30,
    y: 28,
    color: "#b18cff",
  },
  {
    name: "CIUDAD PRISMA",
    type: "Ciudad · Gimnasio",
    desc: "La gran metrópolis del centro: mercado de bayas, club de combates y el Gimnasio de tipo Eléctrico, alimentado por la propia tormenta.",
    x: 55,
    y: 58,
    color: "#53d8ff",
  },
  {
    name: "CUEVA VOLTIO",
    type: "Mazmorra",
    desc: "Galerías imantadas donde las brújulas giran solas. En su núcleo duerme un mineral gamma puro… y algo que lo custodia.",
    x: 68,
    y: 34,
    color: "#ff7a9e",
  },
  {
    name: "MONTE CENIT",
    type: "Cima final",
    desc: "La cumbre sobre las nubes. Solo quien complete las ocho medallas puede ascender hasta la Liga Gamma y su Alto Mando.",
    x: 82,
    y: 16,
    color: "#8dffb0",
  },
];

export const VERSIONS = [
  {
    ver: "v0.5",
    name: "DEMO",
    date: "15 · MAY · 2025",
    state: "DISPONIBLE",
    notes: [
      "Primer recorrido jugable: Pueblo Alba y rutas iniciales",
      "Sistema de combate redibujado en HD-2D",
      "★ 4.7 / 5 con más de 340 valoraciones",
    ],
  },
  {
    ver: "v0.9",
    name: "EARLY ACCESS",
    date: "15 · AGO · 2026",
    state: "ACTUAL",
    notes: [
      "Ciclo día/noche y clima dinámico",
      "Sistema de bayas y Pokécubos",
      "Crianza con huevos y tutores de movimientos",
      "Nuevas zonas: Bosque Espectro y Cueva Voltio",
    ],
  },
  {
    ver: "v1.0",
    name: "COMPLETA",
    date: "PRÓXIMAMENTE",
    state: "EN DESARROLLO",
    notes: [
      "Historia principal completa",
      "Liga Gamma y Alto Mando",
      "Formas gamma definitivas",
    ],
  },
];

export const REQUIREMENTS = {
  min: [
    ["SO", "Windows 10 64-bit"],
    ["CPU", "Intel i5-8400 · Ryzen 5 2600"],
    ["RAM", "8 GB"],
    ["GPU", "GTX 1050 Ti · RX 570"],
    ["Almacenamiento", "6 GB"],
  ],
  rec: [
    ["SO", "Windows 11 64-bit"],
    ["CPU", "Intel i7-10700 · Ryzen 7 3700X"],
    ["RAM", "16 GB"],
    ["GPU", "GTX 1660 Super · RX 5600 XT"],
    ["Almacenamiento", "6 GB en SSD"],
  ],
};

export const FAQS = [
  {
    q: "¿Gamma Emerald es gratis?",
    a: "Sí, 100%. Es un fangame sin ánimo de lucro: tanto la demo como el Early Access se descargan gratis desde itch.io y GameJolt. Nadie debería cobrarte por jugarlo.",
  },
  {
    q: "¿Es un juego oficial de Nintendo o Game Freak?",
    a: "No. Es un proyecto de fans creado por UndreamedPanic. No tiene afiliación con Nintendo, Game Freak ni The Pokémon Company, y este sitio web tampoco: es una fan page hecha por la comunidad.",
  },
  {
    q: "¿Necesito una ROM de Pokémon Esmeralda?",
    a: "No. Aunque reimagina la región clásica, Gamma Emerald es un ejecutable propio construido en Unreal Engine con arte HD-2D nuevo. Descargas, instalas y juegas: sin emuladores ni archivos externos.",
  },
  {
    q: "¿En qué plataformas puedo jugarlo?",
    a: "Por ahora en PC (Windows, con builds para Linux según la página oficial), descargable desde itch.io y GameJolt. Al ser un proyecto en Unreal Engine, no hay versiones para consola.",
  },
  {
    q: "¿Está disponible en español?",
    a: "El juego se publica originalmente en inglés. La comunidad trabaja en traducciones no oficiales — estate atento a los comentarios de itch.io y GameJolt, donde el propio UndreamedPanic publica avances.",
  },
  {
    q: "¿Cómo reporto un bug o doy mi opinión?",
    a: "El mejor canal son las secciones de comentarios/devlogs de itch.io y GameJolt. El Early Access se actualiza con feedback de la comunidad: tu reporte puede aparecer arreglado en el siguiente parche.",
  },
];
