/* Real assets pulled from the official itch.io pages */
export const IMG = {
  cover:
    "https://img.itch.zone/aW1nLzIxMDUwMTAyLnBuZw==/original/JitqyK.png",
  gameplayGif:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxMC5naWY=/original/BhNvgN.gif",
  eaShot1:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxMy5wbmc=/original/5ztyIx.png",
  eaShot2:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxNS5wbmc=/original/qbBFX0.png",
  eaShot3:
    "https://img.itch.zone/aW1hZ2UvNDg4NjQ3OC8yOTI3NjMxNy5wbmc=/original/OpO0L5.png",
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
  promoIsland:
    "https://img.itch.zone/aW1nLzIxMDY3ODg5LnBuZw==/original/Kdau7o.png",
  promoStory:
    "https://img.itch.zone/aW1nLzIxMDY3ODkzLnBuZw==/original/nc7gAH.png",
  promoHeader:
    "https://img.itch.zone/aW1nLzIxMDY3ODIzLnBuZw==/original/XNy1%2FF.png",
  controller:
    "https://img.itch.zone/aW1nLzIxMDg5OTQyLnBuZw==/original/FhTQqJ.png",
};

export const GALLERY: { src: string; tag: string }[] = [
  { src: IMG.eaShot1, tag: "EARLY ACCESS · ROUTE 101" },
  { src: IMG.eaShot2, tag: "EARLY ACCESS · BATTLE" },
  { src: IMG.eaShot3, tag: "EARLY ACCESS · OVERWORLD" },
  { src: IMG.demoShot1, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.demoShot2, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.demoShot3, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.demoShot4, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.demoShot5, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.demoShot6, tag: "CLASSIC DEMO · CAPTURE" },
  { src: IMG.promoHeader, tag: "OFFICIAL KEY ART" },
  { src: IMG.promoStory, tag: "TEAM MAGMA · KEY ART" },
  { src: IMG.promoIsland, tag: "THE ISLAND · KEY ART" },
];

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
  { id: "trailer", label: "TRAILERS" },
  { id: "novedades", label: "FEATURES" },
  { id: "iniciales", label: "STARTERS" },
  { id: "region", label: "REGION" },
  { id: "descargar", label: "DOWNLOAD" },
  { id: "faq", label: "FAQ" },
];

export const TICKER = [
  "LITTLEROOT TOWN",
  "ROUTE 101",
  "OLD WOODS",
  "PETALBURG CITY",
  "ROUTE 104",
  "PETALBURG WOODS",
  "RUSTBORO CITY",
  "ROUTE 116",
  "RUSTURF TUNNEL",
  "MAUVILLE CITY",
];

export const TRAILERS = [
  {
    id: "WzZOoL1IHAU",
    tag: "BROADCAST 01",
    title: "Official Trailer",
    desc: "The first look at the HD-2D remake: the region, the gamma storm and the brand-new visual style.",
    time: "HD-2D",
  },
  {
    id: "jRWxsfQEgY0",
    tag: "BROADCAST 02",
    title: "Gameplay Showcase",
    desc: "Battles, exploration and secrets in motion. This is what it feels like to roam Hoenn rebuilt in Unreal Engine.",
    time: "GAMEPLAY",
  },
  {
    id: "QPCyVE7MZrE",
    tag: "DEVLOG",
    title: "Gamma Emerald — 15 Days",
    desc: "UndreamedPanic's original devlog: two weeks of building the remake from absolute scratch.",
    time: "DEV CHANNEL",
  },
];

export const FEATURES = [
  {
    id: "hd2d",
    code: "F.01",
    title: "HD-2D IN UNREAL ENGINE 5",
    desc: "Classic sprites redrawn over 3D stages with depth of field, volumetric lighting and real-time weather. The whole path from Littleroot to Mauville — every interior included — built tile by tile. Nostalgia with a 2026 finish.",
    points: ["Volumetric lighting", "3D parallax", "Real-time weather"],
    big: true,
    img: IMG.eaShot2,
  },
  {
    id: "daynight",
    code: "F.02",
    title: "DAY / NIGHT CYCLE",
    desc: "The sun rises, sets, and the stars take over. Wild encounters may shift with the time of day — some Pokémon only show up after dark.",
    points: ["4 light phases", "Time-based encounters"],
  },
  {
    id: "berries",
    code: "F.03",
    title: "BERRY SYSTEM",
    desc: "Plant, water and harvest berries in fertile soil — growth runs on your real-world clock: 8 real hours per crop. Mix them into Pokéblocks and boost your bonds.",
    points: ["Real-time growth", "Pokéblocks"],
  },
  {
    id: "breeding",
    code: "F.04",
    title: "EGG BREEDING",
    desc: "A fully implemented Day Care: egg moves, inherited Natures and IVs. Hatch your next ace while you explore the region.",
    points: ["Egg moves", "Inherited Natures"],
  },
  {
    id: "tutors",
    code: "F.05",
    title: "MOVE TUTORING",
    desc: "Masters scattered across Hoenn teach exclusive moves in exchange for Heart Scales. TMs are taught straight from the Move screen, not the bag.",
    points: ["Exclusive moves", "Heart Scales"],
  },
  {
    id: "as",
    code: "F.06",
    title: "YOUR ACE FOLLOWS YOU",
    desc: "Your lead Pokémon walks right beside you outside its Poké Ball — through tall grass, caves, gyms and every town along the way.",
    points: ["Visible partner", "Out of its Ball"],
    img: IMG.eaShot3,
  },
  {
    id: "p2p",
    code: "F.07",
    title: "P2P TRADING",
    desc: "Built-in peer-to-peer trading: shiny hunt with your friends and complete a shared shiny dex… or go solo, your call.",
    points: ["Peer-to-peer", "Shared dex"],
  },
  {
    id: "rematch",
    code: "F.08",
    title: "ENDLESS REMATCHES",
    desc: "On the 2nd floor of every Pokémon Center you can rematch any trainer — once you hold the Stone, Knuckle and Dynamo badges.",
    points: ["Center 2nd floor", "3 key badges"],
  },
];

export type Starter = {
  id: string;
  dex: string;
  name: string;
  type: string;
  color: string;
  confetti: string[];
  desc: string;
  ability: string;
  stats: { label: string; value: number }[];
  sprites: { front: string; shiny: string; back: string };
  art: string;
};

export const STARTERS: Starter[] = [
  {
    id: "treecko",
    dex: "#252",
    name: "TREECKO",
    type: "GRASS",
    color: "#4ade80",
    confetti: ["#4ade80", "#a7f3d0", "#16a34a", "#fde68a"],
    desc: "The Wood Gecko Pokémon. The tiny hooks on its feet let it scale sheer walls and ceilings. It stays icy-cool even against towering foes.",
    ability: "OVERGROW",
    stats: [
      { label: "HP", value: 45 },
      { label: "ATK", value: 45 },
      { label: "DEF", value: 35 },
      { label: "SPD", value: 70 },
    ],
    sprites: {
      front: "https://play.pokemonshowdown.com/sprites/gen5/treecko.png",
      shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/treecko.png",
      back: "https://play.pokemonshowdown.com/sprites/gen5-back/treecko.png",
    },
    art: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
  },
  {
    id: "torchic",
    dex: "#255",
    name: "TORCHIC",
    type: "FIRE",
    color: "#ff8a5c",
    confetti: ["#ff8a5c", "#fbbf24", "#f97316", "#fde68a"],
    desc: "The Chick Pokémon. A flame burns inside its belly — hug one and you'll feel its warmth. Small, but it spits embers hotter than 1,800 °F.",
    ability: "BLAZE",
    stats: [
      { label: "HP", value: 45 },
      { label: "ATK", value: 60 },
      { label: "DEF", value: 40 },
      { label: "SPD", value: 45 },
    ],
    sprites: {
      front: "https://play.pokemonshowdown.com/sprites/gen5/torchic.png",
      shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/torchic.png",
      back: "https://play.pokemonshowdown.com/sprites/gen5-back/torchic.png",
    },
    art: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
  },
  {
    id: "mudkip",
    dex: "#258",
    name: "MUDKIP",
    type: "WATER",
    color: "#53d8ff",
    confetti: ["#53d8ff", "#38bdf8", "#2563eb", "#bae6fd"],
    desc: "The Mud Fish Pokémon. The fin on its head senses shifting currents of water and air. On land it can lift boulders many times its own weight.",
    ability: "TORRENT",
    stats: [
      { label: "HP", value: 50 },
      { label: "ATK", value: 70 },
      { label: "DEF", value: 50 },
      { label: "SPD", value: 40 },
    ],
    sprites: {
      front: "https://play.pokemonshowdown.com/sprites/gen5/mudkip.png",
      shiny: "https://play.pokemonshowdown.com/sprites/gen5-shiny/mudkip.png",
      back: "https://play.pokemonshowdown.com/sprites/gen5-back/mudkip.png",
    },
    art: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
  },
];

export const ROUTES = [
  {
    name: "LITTLEROOT TOWN",
    type: "Start · Prof. Birch's Lab",
    desc: "The remake's starting point. Prof. Birch lives here: you pick your partner Pokémon and set off… right after the gamma storm hits.",
    img: IMG.demoShot1,
    color: "#6ee7b7",
  },
  {
    name: "ROUTE 101",
    type: "Route · First wild encounters",
    desc: "Tall grass, Poochyena and your very first battle. Route 101 is the classic warm-up — now with real-time lighting and night encounters.",
    img: IMG.eaShot1,
    color: "#fbbf24",
  },
  {
    name: "PETALBURG CITY",
    type: "City · First Gym",
    desc: "Home of the first Gym, led by Norman. A quiet town of canals and bridges where trainers stock up before the woods.",
    img: IMG.demoShot3,
    color: "#38bdf8",
  },
  {
    name: "PETALBURG WOODS",
    type: "Forest · Team Aqua hideout",
    desc: "A maze of giant trees and buzzing Bug-types, where Team Aqua sets its first ambush. Cut through it — literally, with Cut.",
    img: IMG.demoShot2,
    color: "#4ade80",
  },
  {
    name: "RUSTBORO CITY",
    type: "City · Stone-type Gym",
    desc: "Hoenn's industrial heart. Roxanne's Stone Gym awaits, alongside the Devon Corp — and a Team Aqua heist to stop.",
    img: IMG.demoShot4,
    color: "#fb7185",
  },
  {
    name: "MAUVILLE CITY",
    type: "City · Game Corner · EA end",
    desc: "The neon crossroads of Hoenn: bike shop, Game Corner and Wattson's Electric Gym. The Early Access roadblock sits just past it.",
    img: IMG.eaShot3,
    color: "#a78bfa",
  },
];

export const VERSIONS = [
  {
    ver: "v0.5",
    name: "CLASSIC DEMO",
    date: "MAY 15 · 2025",
    state: "AVAILABLE",
    notes: [
      "A self-contained island story (non-canon to the remake)",
      "Brand-new OST, puzzles and Legendary encounters",
      "★ 4.7/5 across 341 community ratings",
    ],
  },
  {
    ver: "v1.13.1",
    name: "EARLY ACCESS",
    date: "AUG 15 · 2026",
    state: "CURRENT BUILD",
    notes: [
      "Littleroot Town → Mauville City, built tile by tile",
      "3–6 hours of gameplay · 3 Gyms to conquer",
      "Day/night cycle, berries on a real clock, egg breeding",
      "Move tutors, P2P trading and your ace following you",
    ],
  },
  {
    ver: "v2.0",
    name: "FULL GAME",
    date: "COMING SOON",
    state: "IN DEVELOPMENT",
    notes: [
      "Everything past Mauville City",
      "More mons and the full National Dex",
      "Localization on the roadmap",
    ],
  },
];

export const REQUIREMENTS = {
  min: [
    ["OS", "Windows 10 (64-bit)"],
    ["RAM", "8 GB"],
    ["GPU", "GTX 1060 · RX 580"],
    ["Storage", "5 GB"],
  ],
  rec: [
    ["OS", "Windows 11 (64-bit)"],
    ["RAM", "16 GB"],
    ["GPU", "GTX 1060+ · RX 580+"],
    ["Storage", "5 GB · SSD"],
  ],
};

export const CONTROLS = [
  { action: "Move", kb: "WASD", pad: "Left stick / D-pad" },
  { action: "Fish", kb: "F", pad: "X" },
  { action: "Interact / Confirm", kb: "SPACE / ENTER", pad: "A" },
  { action: "Cancel / Back", kb: "TAB / ESC", pad: "B" },
  { action: "Run", kb: "LEFT SHIFT", pad: "Hold B" },
  { action: "Menu", kb: "ESC / TAB", pad: "START" },
  { action: "Register / Bike", kb: "R", pad: "SELECT" },
];

export const TOOLS = [
  "Unreal Engine 5",
  "Visual Studio",
  "Blender",
  "Aseprite",
];

export const STATS = [
  { value: 4.97, decimals: 2, suffix: " ★", label: "AVERAGE RATING ON ITCH.IO" },
  { value: 116, suffix: "+", label: "COMMUNITY RATINGS" },
  { value: 3, suffix: "", label: "GYMS IN THE EARLY ACCESS" },
  { value: 1.3, decimals: 1, suffix: " GB", label: "OF FREE HD-2D WORLD" },
];

export const FAQS = [
  {
    q: "Is Gamma Emerald free?",
    a: "Yes, 100%. It's a non-commercial fan project: both the classic demo and the Early Access download for free from itch.io and GameJolt. Nobody should ever charge you to play it.",
  },
  {
    q: "Is it an official Nintendo or Game Freak game?",
    a: "No. It's a fan project by UndreamedPanic with no affiliation to Nintendo, Game Freak, Creatures Inc. or The Pokémon Company — and neither is this website: it's a fan page made by the community.",
  },
  {
    q: "Do I need a Pokémon Emerald ROM?",
    a: "No. Even though it reimagines the classic region, Gamma Emerald is its own standalone build made in Unreal Engine 5 with brand-new HD-2D art. You download, install and play — no emulators, no extra files.",
  },
  {
    q: "Which platforms can I play on?",
    a: "PC only for now (Windows 10/11, 64-bit), downloadable from itch.io and GameJolt. Being an Unreal Engine project, there are no console or mobile builds — the minimum memory footprint alone exceeds what a phone can handle.",
  },
  {
    q: "Is it available in other languages?",
    a: "The game currently ships in English. Localization is on the author's roadmap — follow the page on itch.io and you'll be notified the moment the next build drops.",
  },
  {
    q: "How do I report a bug?",
    a: "The best channel is the official Discord: describe what you were doing when it happened and attach your Saved/Logs file if the game crashed. The itch.io and GameJolt comment sections work too.",
  },
];
