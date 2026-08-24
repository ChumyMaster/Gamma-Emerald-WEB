/* Imágenes reales del juego, extraídas de las páginas oficiales
   de itch.io (UndreamedPanic) — Gamma Emerald EA + Demo */
export const IMG = {
  // Early Access
  gameplayGif:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxMC5naWY=/original/BhNvgN.gif",
  eaShot1:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxMy5wbmc=/original/5ztyIx.png",
  eaShot2:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxNS5wbmc=/original/qbBFX0.png",
  eaShot3:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxNy5wbmc=/original/OpO0L5.png",
  // Demo
  demoShot1:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0OS5wbmc=/original/zFlobw.png",
  demoShot2:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0OC5wbmc=/original/3gBp4u.png",
  demoShot3:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0NS5wbmc=/original/m7XoCl.png",
  demoShot4:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0NC5wbmc=/original/prGI5%2B.png",
  demoShot5:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0Ny5wbmc=/original/qoJmKn.png",
  demoShot6:
    "https://img.itch.zone/aW1hZ2UvMzUzNDMzOS8yMTA1MDM0Ni5wbmc=/original/8KHC1F.png",
  // Artes promocionales de la demo
  promoIsland:
    "https://img.itch.zone/aW1nLzIxMDY3ODg5LnBuZw==/original/Kdau7o.png",
  promoStory:
    "https://img.itch.zone/aW1nLzIxMDY3ODkzLnBuZw==/original/nc7gAH.png",
  promoHeader:
    "https://img.itch.zone/aW1nLzIxMDY3ODIzLnBuZw==/original/XNy1%2FF.png",
  controller:
    "https://img.itch.zone/aW1nLzIxMDg5OTQyLnBuZw==/original/FhTQqJ.png",
};

/* Sprites oficiales de los iniciales de Hoenn (el remake usa la línea clásica) */
const SPR = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const LINKS = {
  itch: "https://undreamedpanic.itch.io/gamma-emerald-ea",
  itchDemo: "https://undreamedpanic.itch.io/gamma-emerald-demo",
  gamejolt: "https://gamejolt.com/games/GammaEmerald/991301",
  discord: "https://discord.com/invite/JFtPDmy59u",
  trailer1: "https://youtu.be/WzZOoL1IHAU",
  trailer2: "https://youtu.be/jRWxsfQEgY0",
  trailer3: "https://youtu.be/QPCyVE7MZrE",
};

export const NAV = [
  { id: "trailer", label: "TRÁILER" },
  { id: "novedades", label: "NOVEDADES" },
  { id: "iniciales", label: "INICIALES" },
  { id: "region", label: "REGIÓN" },
  { id: "descargar", label: "DESCARGAR" },
  { id: "faq", label: "FAQ" },
];

export const TICKER = [
  "PUEBLO ALFALFA",
  "RUTA 101",
  "CIUDAD PETALIA",
  "BOSQUE PETALIA",
  "CIUDAD FÉRRICA",
  "PUEBLO AZULIZA",
  "CUEVA GRANITO",
  "CIUDAD PORTUAL",
  "RUTA 110",
  "CIUDAD MALVALONA",
];

export const TRAILERS = [
  {
    id: "WzZOoL1IHAU",
    tag: "TRANSMISIÓN 01",
    title: "Tráiler del remake",
    desc: "El vídeo que presentó Gamma Emerald al mundo: HD-2D, iluminación real y la región de Hoenn como nunca se había visto.",
    time: "OFICIAL",
  },
  {
    id: "jRWxsfQEgY0",
    tag: "TRANSMISIÓN 02",
    title: "Gameplay / avance",
    desc: "Combates por turnos, exploración y secretos en movimiento. Así se siente recorrer la región en Unreal Engine 5.",
    time: "GAMEPLAY",
  },
  {
    id: "QPCyVE7MZrE",
    tag: "DEVLOG · CANAL DEL AUTOR",
    title: "Gamma Emerald — 15 días",
    desc: "El devlog original desde el canal de UndreamedPanic: el punto de partida del proyecto, incrustado en la página de la demo.",
    time: "DEVLOG",
  },
];

export const FEATURES = [
  {
    id: "hd2d",
    code: "N.01",
    title: "HD-2D EN UNREAL ENGINE 5",
    desc: "Toda la ruta de Pueblo Alfalfa a Ciudad Malvalona reconstruida tile a tile: sprites clásicos sobre escenarios 3D con luz volumétrica, profundidad de campo y animaciones 100% nuevas hechas a mano (Aseprite + Blender).",
    points: ["Luces en tiempo real", "Tile a tile", "Sin assets genéricos"],
    img: IMG.eaShot2,
    big: true,
  },
  {
    id: "daynight",
    code: "N.02",
    title: "CICLO DÍA / NOCHE",
    desc: "El sol sale y cae en tiempo real, y los encuentros salvajes se ajustan según la hora. Algunas cosas solo pasan de noche.",
    points: ["Encuentros por horario", "4 fases de luz"],
  },
  {
    id: "berries",
    code: "N.03",
    title: "BAYAS EN RELOJ REAL",
    desc: "El cultivo va sincronizado con tu reloj de verdad: plantar y regar funciona con el tiempo IRL y las bayas tardan ~8 horas reales en crecer.",
    points: ["Ciclo IRL de 8 h", "Pokécubos"],
  },
  {
    id: "breeding",
    code: "N.04",
    title: "CRIANZA COMPLETA",
    desc: "La Guardería está implementada al completo: huevos, herencia y crianza de shinies — perfecto para cazar variocolor con amigos vía P2P.",
    points: ["Guardería al 100%", "Caza shiny"],
  },
  {
    id: "tutors",
    code: "N.05",
    title: "TUTORES Y MTs",
    desc: "Tutores de movimientos por toda la región. Las MTs ya no ocupan la mochila: se enseñan directamente desde la pantalla «Cambiar movimiento».",
    points: ["MTs sin mochila", "Tutores únicos"],
  },
  {
    id: "ace",
    code: "N.06",
    title: "TU AS TE SIGUE",
    desc: "Tu Pokémon líder sale de la Poké Ball y camina contigo por el overworld. Un detalle que cambia cómo se siente cada ruta.",
    points: ["Compañero visible", "Fuera de la ball"],
    img: IMG.eaShot3,
  },
  {
    id: "p2p",
    code: "N.07",
    title: "INTERCAMBIO P2P",
    desc: "Intercambio peer-to-peer integrado: completa la Pokédex de variocolor con tus amigos… o en solitario, tú decides.",
    points: ["Peer-to-peer", "Dex compartida"],
  },
  {
    id: "rematch",
    code: "N.08",
    title: "REVANCHAS INFINITAS",
    desc: "En el 2.º piso de cada Centro Pokémon puedes revocar a cualquier entrenador (necesitas las medallas Piedra, Nudillo y Dinamo).",
    points: ["2.º piso del Centro", "3 medallas clave"],
  },
];

export type Starter = {
  num: string;
  name: string;
  types: { label: string; color: string }[];
  desc: string;
  ability: string;
  stats: { label: string; value: number }[];
  img: string;
  glow: string;
  accent: string;
};

export const STARTERS: Starter[] = [
  {
    num: "#252",
    name: "TREECKO",
    types: [{ label: "PLANTA", color: "#4ade80" }],
    desc: "Pokémon Geco Bosque. Las ventosas de sus patas le dejan trepar muros y techos. Mantiene la sangre fría incluso frente a rivales enormes.",
    ability: "ESPESURA",
    stats: [
      { label: "PS", value: 45 },
      { label: "ATQ", value: 45 },
      { label: "DEF", value: 35 },
      { label: "VEL", value: 70 },
    ],
    img: SPR(252),
    glow: "rgba(74, 222, 128, 0.3)",
    accent: "#4ade80",
  },
  {
    num: "#255",
    name: "TORCHIC",
    types: [{ label: "FUEGO", color: "#ff8a5c" }],
    desc: "Pokémon Polluelo. Guarda una llama dentro de su vientre; si lo abrazas, notarás su calorcito. Pequeño, pero escupe brasas de 1.000 °C.",
    ability: "MAR LLAMAS",
    stats: [
      { label: "PS", value: 45 },
      { label: "ATQ", value: 60 },
      { label: "DEF", value: 40 },
      { label: "VEL", value: 45 },
    ],
    img: SPR(255),
    glow: "rgba(255, 138, 92, 0.3)",
    accent: "#ff8a5c",
  },
  {
    num: "#258",
    name: "MUDKIP",
    types: [{ label: "AGUA", color: "#53d8ff" }],
    desc: "Pokémon Pez Lodo. La aleta de su cabeza percibe las corrientes de agua y aire. En tierra puede levantar rocas mucho más pesadas que él.",
    ability: "TORRENTE",
    stats: [
      { label: "PS", value: 50 },
      { label: "ATQ", value: 70 },
      { label: "DEF", value: 50 },
      { label: "VEL", value: 40 },
    ],
    img: SPR(258),
    glow: "rgba(83, 216, 255, 0.3)",
    accent: "#53d8ff",
  },
];

export const ROUTES = [
  {
    name: "PUEBLO ALFALFA",
    type: "Inicio · Casa del Profesor",
    desc: "El punto de partida del remake. Aquí vive el Profesor Abedul, recibes a tu inicial y comienza el camino… tras el choque de la tormenta gamma.",
    img: IMG.demoShot1,
    color: "#5dff8f",
  },
  {
    name: "RUTA 101",
    type: "Primera ruta",
    desc: "Hierba alta, Poochyenas y el rescate del profesor con su maletín. Los primeros combates de toda una generación, rehechos en HD-2D.",
    img: IMG.eaShot1,
    color: "#ffc857",
  },
  {
    name: "CIUDAD PETALIA",
    type: "Ciudad · Gimnasio de Normal",
    desc: "La primera ciudad de verdad: tienda, Centro Pokémon y el gimnasio de Norman — aunque la revancha contra él tendrá que esperar.",
    img: IMG.demoShot2,
    color: "#53d8ff",
  },
  {
    name: "BOSQUE PETALIA",
    type: "Bosque · primer Equipo Magma",
    desc: "El primer bosque del viaje, con su claro de cortes, bichos por todas partes y el primer encuentro con los reclutas del Equipo Magma.",
    img: IMG.demoShot3,
    color: "#8dffb0",
  },
  {
    name: "CIUDAD FÉRRICA",
    type: "Gimnasio 1 · Medalla Piedra",
    desc: "La ciudad de la piedra. Rocco y sus Pokémon de tipo Roca custodian la primera medalla del Early Access entre edificios de roca tallada.",
    img: IMG.demoShot4,
    color: "#b18cff",
  },
  {
    name: "PUEBLO AZULIZA",
    type: "Gimnasio 2 · Medalla Nudillo",
    desc: "Playa, cueva y gimnasio de lucha. Marcial espera en el tatami; la Cueva Granito, con sus espeleólogos, guarda los primeros objetos raros.",
    img: IMG.demoShot5,
    color: "#ff7a9e",
  },
  {
    name: "CIUDAD PORTUAL",
    type: "Puerto · Museo Marino",
    desc: "Mercado, astillero y el Museo Marino donde se cuece el siguiente choque con el Equipo Magma. El mar se abre hacia la Ruta 110.",
    img: IMG.demoShot6,
    color: "#ffc857",
  },
  {
    name: "CIUDAD MALVALONA",
    type: "Gimnasio 3 · Medalla Dinamo",
    desc: "El límite actual del Early Access. Eric y su gimnasio eléctrico cierran las 3 medallas disponibles… y el Casino ya abrió sus puertas.",
    img: IMG.eaShot2,
    color: "#8dffb0",
  },
];

export const VERSIONS = [
  {
    ver: "v2.1.0",
    name: "DEMO",
    date: "15 · MAY · 2025",
    state: "ANTIGUA",
    notes: [
      "Historia aparte en una isla misteriosa (no es canon)",
      "★ 4.7 / 5 con 341 valoraciones en itch.io",
      "Sustituida por el Early Access — ¡no la confundas!",
    ],
  },
  {
    ver: "v1.13.1",
    name: "EARLY ACCESS",
    date: "15 · AGO · 2026",
    state: "ACTUAL",
    notes: [
      "Pueblo Alfalfa → Ciudad Malvalona, tile a tile",
      "3-6 h de juego · 3 gimnasios · 233+ comentarios",
      "★ 4.97 / 5 en itch.io · 1.3 GB · Windows",
      "Intercambio P2P, bayas IRL y as que te sigue",
    ],
  },
  {
    ver: "v1.0",
    name: "JUEGO COMPLETO",
    date: "PRÓXIMAMENTE",
    state: "EN DESARROLLO",
    notes: [
      "El siguiente tramo: más allá de Ciudad Malvalona",
      "Más Pokémon + Pokédex Nacional",
      "Localización a otros idiomas",
    ],
  },
];

export const REQUIREMENTS = {
  min: [
    ["SO", "Windows 10 (64-bit)"],
    ["RAM", "8 GB (rendimiento justo)"],
    ["GPU", "GTX 1060 · RX 580"],
    ["Almacenamiento", "5 GB"],
  ],
  rec: [
    ["SO", "Windows 11 (64-bit)"],
    ["RAM", "16 GB recomendado"],
    ["GPU", "Superior a GTX 1060"],
    ["Almacenamiento", "5 GB en SSD"],
  ],
};

export const CONTROLS = [
  ["Moverse", "WASD", "Stick izq / D-pad"],
  ["Pescar", "F", "X"],
  ["Interactuar / Confirmar", "Espacio / Enter", "A"],
  ["Cancelar / Volver", "Tab / Escape", "B"],
  ["Menú", "Escape / Tab", "Start"],
  ["Correr", "Shift izq", "B mantenido"],
  ["Cambiar en menú", "Q / E", "Bumpers"],
  ["Registrar / Bici", "R", "Select"],
];

export const FAQS = [
  {
    q: "¿Gamma Emerald es gratis?",
    a: "Sí, 100%. Es un fangame sin ánimo de lucro: el Early Access se descarga gratis desde itch.io y GameJolt (1.3 GB). El propio autor lo deja claro: «no se acepta dinero por este proyecto bajo ninguna forma».",
  },
  {
    q: "¿Es un juego oficial de Nintendo o Game Freak?",
    a: "No. Es un proyecto de fans creado íntegramente por UndreamedPanic (programación, arte, música, modelado 3D y UI), con ayuda puntual de la comunidad. No tiene afiliación con Nintendo, Game Freak, Creatures Inc. ni The Pokémon Company — y esta web tampoco.",
  },
  {
    q: "¿Necesito una ROM de Pokémon Esmeralda?",
    a: "No. Aunque reimagina la historia clásica de Esmeralda, Gamma Emerald es un ejecutable propio construido en Unreal Engine 5 con arte nuevo. Descargas, instalas y juegas: sin emuladores ni archivos externos.",
  },
  {
    q: "¿La demo y el Early Access son lo mismo?",
    a: "No. La demo de mayo de 2025 cuenta una historia no canon en una isla misteriosa entre Hoenn y Sinnoh. El Early Access de agosto de 2026 es el remake real de Esmeralda: de Pueblo Alfalfa a Ciudad Malvalona. Descarga siempre el EA.",
  },
  {
    q: "¿En qué plataformas puedo jugarlo?",
    a: "Por ahora solo PC (Windows 10/11 de 64 bits), desde itch.io y GameJolt. No hay versión móvil (el juego exige más memoria de la que manejan Android/iOS) ni builds para consola o macOS.",
  },
  {
    q: "¿Está disponible en español?",
    a: "El juego se publica en inglés. La localización está en la hoja de ruta del autor («What's next: Localization»). Mientras tanto, la comunidad comparte avances en el Discord oficial.",
  },
  {
    q: "¿Encontré un bug, qué hago?",
    a: "Únete al Discord oficial del proyecto, cuenta qué hacías cuando ocurrió y, si el juego crasheó, adjunta tu archivo Saved/Logs/ que está en la carpeta de instalación. El autor parchea rápido: la build 1.13.1 llegó solo 3 días después del lanzamiento.",
  },
];

export const CREDITS = [
  ["UndreamedPanic", "Programación · Arte · Música · Diseño · Modelado 3D · UI — TODO"],
  ["sewally3", "Sprites de entrenadores adicionales"],
  ["MrShyGuyBuddy", "Modelos de Ciudad Férrica"],
  ["AstralPixel", "Diseño del mando (arte de la demo)"],
];

export const TOOLS = ["UNREAL ENGINE 5", "VISUAL STUDIO", "BLENDER", "ASEPRITE"];
