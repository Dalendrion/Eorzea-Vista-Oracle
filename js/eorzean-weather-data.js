var Weather = {
    ASTROMAGNETIC_STORM: "Astro&shy;magnetic Storm",
    BLIZZARDS: "Blizzards",
    CLEAR_SKIES: "Clear Skies",
    CLOUDS: "Clouds",
    DUST_STORMS: "Dust Storms",
    FAIR_SKIES: "Fair Skies",
    FOG: "Fog",
    GALES: "Gales",
    GLOOM: "Gloom",
    HEAT_WAVES: "Heat Waves",
    MOON_DUST: "Moon Dust",
    RAIN: "Rain",
    SHOWERS: "Showers",
    SNOW: "Snow",
    THUNDER: "Thunder",
    THUNDERSTORMS: "Thunder&shy;storms",
    UMBRAL_STATIC: "Umbral Static",
    UMBRAL_WIND: "Umbral Wind",
    WIND: "Wind"
};

var Region = {
    LA_NOSCEA: "La Noscea",
    THE_BLACK_SHROUD: "The Black Shroud",
    THANALAN: "Thanalan",
    COERTHAS: "Coerthas",
    MOR_DHONA: "Mor Dhona",
    ABALATHIAS_SPINE: "Abalathia's Spine",
    DRAVANIA: "Dravania",
    GYR_ABANIA: "Gyr Abania",
    OTHARD: "Othard",
    HINGASHI: "Hingashi",
    THE_FORBIDDEN_LAND_EUREKA: "The Forbidden Land, Eureka",
    NORVRANDT: "Norvrandt",
    THE_NORTHERN_EMPTY: "The Northern Empty",
    ILSABARD: "Ilsabard",
    THE_SEA_OF_STARS: "The Sea of Stars",
    THE_WORLD_UNSUNDERED: "The World Unsundered",
    YOK_TURAL: "Yok Tural",
    XAK_TURAL: "Xak Tural",
    UNLOST_WORLD: "Unlost World",
    UNKNOWN: "???",
};

var Expansion = {
    A_REALM_REBORN: "A Realm Reborn",
    HEAVENSWARD: "Heavensward",
    STORMBLOOD: "Stormblood",
    SHADOWBRINGERS: "Shadowbringers",
    ENDWALKER: "Endwalker",
    DAWNTRIAL: "Dawntrial"
};

var Zone = {
    LIMSA_LOMINSA_UPPER_DECKS: {
        name: "Limsa Lominsa Upper Decks",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    LIMSA_LOMINSA_LOWER_DECKS: {
        name: "Limsa Lominsa Lower Decks",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    MIDDLE_LA_NOSCEA: {
        name: "Middle La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    LOWER_LA_NOSCEA: {
        name: "Lower La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    EASTERN_LA_NOSCEA: {
        name: "Eastern La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    WESTERN_LA_NOSCEA: {
        name: "Western La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    UPPER_LA_NOSCEA: {
        name: "Upper La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    OUTER_LA_NOSCEA: {
        name: "Outer La Noscea",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    WOLVES_DEN_PIER: {
        name: "Wolves' Den Pier",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    MIST: {
        name: "Mist",
        region: Region.LA_NOSCEA,
        expansion: Expansion.A_REALM_REBORN
    },
    
    OLD_GRIDANIA: {
        name: "Old Gridania",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    NEW_GRIDANIA: {
        name: "New Gridania",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    CENTRAL_SHROUD: {
        name: "Central Shroud",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    EAST_SHROUD: {
        name: "East Shroud",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    SOUTH_SHROUD: {
        name: "South Shroud",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    NORTH_SHROUD: {
        name: "North Shroud",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },
    THE_LAVENDER_BEDS: {
        name: "The Lavender Beds",
        region: Region.THE_BLACK_SHROUD,
        expansion: Expansion.A_REALM_REBORN
    },

    ULDAH_STEPS_OF_NALD: {
        name: "Ul'dah - Steps of Nald",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    ULDAH_STEPS_OF_THAL: {
        name: "Ul'dah - Steps of Thal",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    WESTERN_THANALAN: {
        name: "Western Thanalan",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    CENTRAL_THANALAN: {
        name: "Central Thanalan",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    EASTERN_THANALAN: {
        name: "Eastern Thanalan",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    SOUTHERN_THANALAN: {
        name: "Southern Thanalan",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    NORTHERN_THANALAN: {
        name: "Northern Thanalan",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },
    THE_GOBLET: {
        name: "The Goblet",
        region: Region.THANALAN,
        expansion: Expansion.A_REALM_REBORN
    },

    MOR_DHONA: {
        name: "Mor Dhona",
        region: Region.MOR_DHONA,
        expansion: Expansion.A_REALM_REBORN
    },

    ISHGARD_THE_PILLARS: {
        name: "Ishgard - The Pillars",
        region: Region.COERTHAS,
        expansion: Expansion.HEAVENSWARD
    },
    ISHGARD_FOUNDATION: {
        name: "Ishgard - Foundation",
        region: Region.COERTHAS,
        expansion: Expansion.HEAVENSWARD
    },
    EMPYREUM: {
        name: "Empyreum",
        region: Region.COERTHAS,
        expansion: Expansion.ENDWALKER
    },
    FIRMAMENT: {
        name: "The Firmament",
        region: Region.COERTHAS,
        expansion: Expansion.SHADOWBRINGERS
    },
    COERTHAS_CENTRAL_HIGHLANDS: {
        name: "Coerthas Central Highlands",
        region: Region.COERTHAS,
        expansion: Expansion.A_REALM_REBORN
    },
    COERTHAS_WESTERN_HIGHLANDS: {
        name: "Coerthas Western Highlands",
        region: Region.COERTHAS,
        expansion: Expansion.HEAVENSWARD
    },

    THE_SEA_OF_CLOUDS: {
        name: "The Sea of Clouds",
        region: Region.ABALATHIAS_SPINE,
        expansion: Expansion.HEAVENSWARD
    },
    AZYS_LLA: {
        name: "Azys Lla",
        region: Region.ABALATHIAS_SPINE,
        expansion: Expansion.HEAVENSWARD
    },

    THE_DRAVANIAN_FORELANDS: {
        name: "The Dravanian Forelands",
        region: Region.DRAVANIA,
        expansion: Expansion.HEAVENSWARD
    },
    THE_DRAVANIAN_HINTERLANDS: {
        name: "The Dravanian Hinterlands",
        region: Region.DRAVANIA,
        expansion: Expansion.HEAVENSWARD
    },
    THE_CHURNING_MISTS: {
        name: "The Churning Mists",
        region: Region.DRAVANIA,
        expansion: Expansion.HEAVENSWARD
    },
    IDYLLSHIRE: {
        name: "Idyllshire",
        region: Region.DRAVANIA,
        expansion: Expansion.HEAVENSWARD
    },

    RHALGRS_REACH: {
        name: "Rhalgr's Reach",
        region: Region.GYR_ABANIA,
        expansion: Expansion.STORMBLOOD
    },
    THE_FRINGES: {
        name: "The Fringes",
        region: Region.GYR_ABANIA,
        expansion: Expansion.STORMBLOOD
    },
    THE_PEAKS: {
        name: "The Peaks",
        region: Region.GYR_ABANIA,
        expansion: Expansion.STORMBLOOD
    },
    THE_LOCHS: {
        name: "The Lochs",
        region: Region.GYR_ABANIA,
        expansion: Expansion.STORMBLOOD
    },

    KUGANE: {
        name: "Kugane",
        region: Region.HINGASHI,
        expansion: Expansion.STORMBLOOD
    },
    SHIROGANE: {
        name: "Shirogane",
        region: Region.HINGASHI,
        expansion: Expansion.STORMBLOOD
    },
    
    THE_RUBY_SEA: {
        name: "The Ruby Sea",
        region: Region.OTHARD,
        expansion: Expansion.STORMBLOOD
    },
    YANXIA: {
        name: "Yanxia",
        region: Region.OTHARD,
        expansion: Expansion.STORMBLOOD
    },
    THE_AZIM_STEPPE: {
        name: "The Azim Steppe",
        region: Region.OTHARD,
        expansion: Expansion.STORMBLOOD
    },

    EUREKA_ANEMOS: {
        name: "Eureka Anemos",
        region: Region.THE_FORBIDDEN_LAND_EUREKA,
        expansion: Expansion.STORMBLOOD
    },
    EUREKA_PAGOS: {
        name: "Eureka Pagos",
        region: Region.THE_FORBIDDEN_LAND_EUREKA,
        expansion: Expansion.STORMBLOOD
    },
    EUREKA_PYROS: {
        name: "Eureka Pyros",
        region: Region.THE_FORBIDDEN_LAND_EUREKA,
        expansion: Expansion.STORMBLOOD
    },
    EUREKA_HYDATOS: {
        name: "Eureka Hydatos",
        region: Region.THE_FORBIDDEN_LAND_EUREKA,
        expansion: Expansion.STORMBLOOD
    },

    THE_CRYSTARIUM: {
        name: "The Crystarium",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    EULMORE: {
        name: "Eulmore",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    LAKELAND: {
        name: "Lakeland",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    KHOLUSIA: {
        name: "Kholusia",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    AMH_ARAENG: {
        name: "Amh Araeng",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    IL_MHEG: {
        name: "Il Mheg",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    THE_RAKTIKA_GREATWOOD: {
        name: "The Rak'tika Greatwood",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },
    THE_TEMPEST: {
        name: "The Tempest",
        region: Region.NORVRANDT,
        expansion: Expansion.SHADOWBRINGERS
    },

    RADZ_AT_HAN: {
        name: "Radz-at-Han",
        region: Region.ILSABARD,
        expansion: Expansion.ENDWALKER
    },
    THAVNAIR: {
        name: "Thavnair",
        region: Region.ILSABARD,
        expansion: Expansion.ENDWALKER
    },
    GARLEMALD: {
        name: "Garlemald",
        region: Region.ILSABARD,
        expansion: Expansion.ENDWALKER
    },

    OLD_SHARLAYAN: {
        name: "Old Sharlayan",
        region: Region.THE_NORTHERN_EMPTY,
        expansion: Expansion.ENDWALKER
    },
    LABYRINTHOS: {
        name: "Labyrinthos",
        region: Region.THE_NORTHERN_EMPTY,
        expansion: Expansion.ENDWALKER
    },
    
    MARE_LAMENTORUM: {
        name: "Mare Lamentorum",
        region: Region.THE_SEA_OF_STARS,
        expansion: Expansion.ENDWALKER
    },
    ULTIMA_THULE: {
        name: "Ultima Thule",
        region: Region.THE_SEA_OF_STARS,
        expansion: Expansion.ENDWALKER
    },
    SINUS_ARDORUM: {
        name: "Sinus Ardorum",
        region: Region.THE_SEA_OF_STARS,
        expansion: Expansion.ENDWALKER
    },

    ELPIS: {
        name: "Elpis",
        region: Region.THE_WORLD_UNSUNDERED,
        expansion: Expansion.ENDWALKER
    },

    UNNAMED_ISLAND: {
        name: "Unnamed Island",
        region: Region.UNKNOWN,
        expansion: Expansion.ENDWALKER
    },

    TULIYOLLAL: {
        name: "Tuliyollal",
        region: Region.YOK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },
    URQOPACHA: {
        name: "Urqopacha",
        region: Region.YOK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },
    KOZAMAUKA: {
        name: "Kozama'uka",
        region: Region.YOK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },
    YAK_TEL: {
        name: "Yak T'el",
        region: Region.YOK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },

    SOLUTION_NINE: {
        name: "Solution Nine",
        region: Region.XAK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },
    SHAALOANI: {
        name: "Shaaloani",
        region: Region.XAK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },
    HERITAGE_FOUND: {
        name: "Heritage Found",
        region: Region.XAK_TURAL,
        expansion: Expansion.DAWNTRIAL
    },

    LIVING_MEMORY: {
        name: "Living Memory",
        region: Region.UNLOST_WORLD,
        expansion: Expansion.DAWNTRIAL
    },

};

var Vista = [{
    number: "1",
    name: "Barracuda Piers",
    area: Area.LIMSA_LOMINSA_UPPER_DECKS,
    zone: "Limsa Lominsa Upper Decks",
    coordinates: { x: 9.5, y: 7.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "2",
    name: "The Astalicia",
    area: Area.LIMSA_LOMINSA_LOWER_DECKS,
    zone: "Limsa Lominsa Lower Decks",
    coordinates: { x: 7.1, y: 15.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "3",
    name: "Seasong Grotto",
    area: Area.MIDDLE_LA_NOSCEA,
    zone: "Middle La Noscea",
    coordinates: { x: 20.3, y: 19.1 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 5, until: 8 },
    emote: "/pray",
    completed: false
},{
    number: "4",
    name: "The Skylift",
    area: Area.MIDDLE_LA_NOSCEA,
    zone: "Middle La Noscea",
    coordinates: { x: 16.0, y: 17.3 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "5",
    name: "La Thagran Eastroad",
    area: Area.MIDDLE_LA_NOSCEA,
    zone: "Middle La Noscea",
    coordinates: { x: 25.3, y: 27.5 },
    weather: [ Weather.CLOUDS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "6",
    name: "The Salt Strand",
    area: Area.LOWER_LA_NOSCEA,
    zone: "Lower La Noscea",
    coordinates: { x: 23.1, y: 40.2 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "7",
    name: "Red Rooster Stead",
    area: Area.LOWER_LA_NOSCEA,
    zone: "Lower La Noscea",
    coordinates: { x: 33.5, y: 19.3 },
    weather: [ Weather.FOG ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "8",
    name: "Brewer's Beacon",
    area: Area.WESTERN_LA_NOSCEA,
    zone: "Western La Noscea",
    coordinates: { x: 29.9, y: 30.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "9",
    name: "The Leatherworkers' Guild",
    area: Area.OLD_GRIDANIA,
    zone: "Old Gridania",
    coordinates: { x: 12.8, y: 7.8 },
    weather: [ Weather.CLOUDS ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "10",
    name: "Apkallu Falls",
    area: Area.OLD_GRIDANIA,
    zone: "Old Gridania",
    coordinates: { x: 10.8, y: 6.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "11",
    name: "Bentbranch Meadows",
    area: Area.CENTRAL_SHROUD,
    zone: "Central Shroud",
    coordinates: { x: 21.8, y: 21.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/sit",
    completed: false
},{
    number: "12",
    name: "The Sanctum of the Twelve",
    area: Area.EAST_SHROUD,
    zone: "East Shroud",
    coordinates: { x: 17.6, y: 18.2 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/pray",
    completed: false
},{
    number: "13",
    name: "Little Solace",
    area: Area.EAST_SHROUD,
    zone: "East Shroud",
    coordinates: { x: 22.3, y: 26.2 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "14",
    name: "Royal Promenade",
    area: Area.ULDAH__STEPS_OF_THAL,
    zone: "Ul'dah - Steps of Thal",
    coordinates: { x: 11.1, y: 11.6 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/salute",
    completed: false
},{
    number: "15",
    name: "The Gold Court",
    area: Area.ULDAH__STEPS_OF_THAL,
    zone: "Ul'dah - Steps of Thal",
    coordinates: { x: 11.5, y: 11.2 },
    weather: [ Weather.CLOUDS ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "16",
    name: "The Jewel of the Desert",
    area: Area.WESTERN_THANALAN,
    zone: "Western Thanalan",
    coordinates: { x: 22.3, y: 22.3 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "17",
    name: "The Ruins of Sil'dih",
    area: Area.CENTRAL_THANALAN,
    zone: "Central Thanalan",
    coordinates: { x: 15.9, y: 22.9 },
    weather: [ Weather.FOG ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "18",
    name: "The Lonely Giant",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 19.5, y: 24.7 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 17, until: 18 },
    emote: "/comfort",
    completed: false
},{
    number: "19",
    name: "The Invisible City",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 14.3, y: 18.5 },
    weather: [ Weather.CLOUDS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "20",
    name: "Highbridge",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 21.0, y: 20.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/pray",
    completed: false
},{
    number: "21",
    name: "Woad Whisper Canyon",
    area: Area.MIDDLE_LA_NOSCEA,
    zone: "Middle La Noscea",
    coordinates: { x: 20.0, y: 13.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "22",
    name: "Summerford Farms",
    area: Area.MIDDLE_LA_NOSCEA,
    zone: "Middle La Noscea",
    coordinates: { x: 25.7, y: 17 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "23",
    name: "The Grey Fleet",
    area: Area.LOWER_LA_NOSCEA,
    zone: "Lower La Noscea",
    coordinates: { x: 31.5, y: 12.7 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "24",
    name: "Hidden Falls",
    area: Area.EASTERN_LA_NOSCEA,
    zone: "Eastern La Noscea",
    coordinates: { x: 32.6, y: 23.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/sit",
    completed: false
},{
    number: "25",
    name: "Gullperch Tower",
    area: Area.EASTERN_LA_NOSCEA,
    zone: "Eastern La Noscea",
    coordinates: { x: 29.6, y: 33.8 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "26",
    name: "The Navigator",
    area: Area.WESTERN_LA_NOSCEA,
    zone: "Western La Noscea",
    coordinates: { x: 26.9, y: 26.6 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/pray",
    completed: false
},{
    number: "27",
    name: "The Ship Graveyard",
    area: Area.WESTERN_LA_NOSCEA,
    zone: "Western La Noscea",
    coordinates: { x: 17.1, y: 36.2 },
    weather: [ Weather.GALES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "28",
    name: "Camp Skull Valley",
    area: Area.WESTERN_LA_NOSCEA,
    zone: "Western La Noscea",
    coordinates: { x: 22.8, y: 22.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "29",
    name: "Tidegate",
    area: Area.WESTERN_LA_NOSCEA,
    zone: "Western La Noscea",
    coordinates: { x: 19.4, y: 22.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "30",
    name: "Camp Bronze Lake",
    area: Area.UPPER_LA_NOSCEA,
    zone: "Upper La Noscea",
    coordinates: { x: 30.8, y: 22.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/lookout",
    completed: false
},{
    number: "31",
    name: "Thalaos",
    area: Area.UPPER_LA_NOSCEA,
    zone: "Upper La Noscea",
    coordinates: { x: 12.9, y: 22.0 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "32",
    name: "Jijiroon's Trading Post",
    area: Area.UPPER_LA_NOSCEA,
    zone: "Upper La Noscea",
    coordinates: { x: 29.1, y: 25.4 },
    weather: [ Weather.THUNDERSTORMS ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "33",
    name: "The Floating City of Nym",
    area: Area.OUTER_LA_NOSCEA,
    zone: "Outer La Noscea",
    coordinates: { x: 12.7, y: 15.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "34",
    name: "Camp Overlook",
    area: Area.OUTER_LA_NOSCEA,
    zone: "Outer La Noscea",
    coordinates: { x: 17.1, y: 16.3, z: 0.8 },
    weather: [ Weather.CLOUDS ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "35",
    name: "U'Ghamaro Mines",
    area: Area.OUTER_LA_NOSCEA,
    zone: "Outer La Noscea",
    coordinates: { x: 23.4, y: 11.7, z: 0.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "36",
    name: "The Hermit's Hovel",
    area: Area.OUTER_LA_NOSCEA,
    zone: "Outer La Noscea",
    coordinates: { x: 15.4, y: 10.1 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 18, until: 5 },
    emote: "/sit",
    completed: false
},{
    number: "37",
    name: "The Carline Canopy",
    area: Area.NEW_GRIDANIA,
    zone: "New Gridania",
    coordinates: { x: 14.3, y: 14.3 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "38",
    name: "The Lancer's Guild",
    area: Area.OLD_GRIDANIA,
    zone: "Old Gridania",
    coordinates: { x: 14.2, y: 5.9 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "39",
    name: "The Bannock",
    area: Area.CENTRAL_SHROUD,
    zone: "Central Shroud",
    coordinates: { x: 23.4, y: 19.9 },
    weather: [ Weather.RAIN, Weather.SHOWERS ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "40",
    name: "Haukke Manor",
    area: Area.CENTRAL_SHROUD,
    zone: "Central Shroud",
    coordinates: { x: 13.6, y: 23.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "41",
    name: "The Guardian Tree",
    area: Area.CENTRAL_SHROUD,
    zone: "Central Shroud",
    coordinates: { x: 16.3, y: 22.3 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "42",
    name: "Rainbow Bridge",
    area: Area.CENTRAL_SHROUD,
    zone: "Central Shroud",
    coordinates: { x: 26.5, y: 18.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 11, until: 13 },
    emote: "/lookout",
    completed: false
},{
    number: "43",
    name: "The Seedbed",
    area: Area.EAST_SHROUD,
    zone: "East Shroud",
    coordinates: { x: 20.9, y: 10.7 },
    weather: [ Weather.THUNDER ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "44",
    name: "Buscarron's Druthers",
    area: Area.SOUTH_SHROUD,
    zone: "South Shroud",
    coordinates: { x: 17.8, y: 20.1 },
    weather: [ Weather.THUNDERSTORMS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "45",
    name: "South Shroud Landing",
    area: Area.SOUTH_SHROUD,
    zone: "South Shroud",
    coordinates: { x: 14.7, y: 33.9 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "46",
    name: "Urth's Gift",
    area: Area.SOUTH_SHROUD,
    zone: "South Shroud",
    coordinates: { x: 33.3, y: 23.9 },
    weather: [ Weather.FOG ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "47",
    name: "Quarrymill",
    area: Area.SOUTH_SHROUD,
    zone: "South Shroud",
    coordinates: { x: 25.4, y: 21.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "48",
    name: "Ixali Logging Grounds",
    area: Area.NORTH_SHROUD,
    zone: "North Shroud",
    coordinates: { x: 18.4, y: 19.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "49",
    name: "Fallen Neurolink",
    area: Area.NORTH_SHROUD,
    zone: "North Shroud",
    coordinates: { x: 15.8, y: 32.0 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "50",
    name: "Alder Springs",
    area: Area.NORTH_SHROUD,
    zone: "North Shroud",
    coordinates: { x: 15.4, y: 27.2 },
    weather: [ Weather.CLOUDS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "51",
    name: "Castrum Marinum",
    area: Area.WESTERN_THANALAN,
    zone: "Western Thanalan",
    coordinates: { x: 8.7, y: 5.2 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/lookout",
    completed: false
},{
    number: "52",
    name: "Vesper Bay",
    area: Area.WESTERN_THANALAN,
    zone: "Western Thanalan",
    coordinates: { x: 12.4, y: 14.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/point",
    completed: false
},{
    number: "53",
    name: "Black Brush Station",
    area: Area.CENTRAL_THANALAN,
    zone: "Central Thanalan",
    coordinates: { x: 21.4, y: 17.5 },
    weather: [ Weather.DUST_STORMS ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "54",
    name: "Gate of Nald",
    area: Area.CENTRAL_THANALAN,
    zone: "Central Thanalan",
    coordinates: { x: 18.5, y: 26.1 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/sit",
    completed: false
},{
    number: "55",
    name: "The Burning Wall",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 30.7, y: 26.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "56",
    name: "The Golden Bazaar",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 10.0, y: 16.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "57",
    name: "Thal's Respite",
    area: Area.EASTERN_THANALAN,
    zone: "Eastern Thanalan",
    coordinates: { x: 25.2, y: 14.7 },
    weather: [ Weather.SHOWERS ],
    time: { from: 18, until: 5 },
    emote: "/pray",
    completed: false
},{
    number: "58",
    name: "Nald's Reflection",
    area: Area.SOUTHERN_THANALAN,
    zone: "Southern Thanalan",
    coordinates: { x: 12.2, y: 22.9 },
    weather: [ Weather.FOG ],
    time: { from: 5, until: 8 },
    emote: "/pray",
    completed: false
},{
    number: "59",
    name: "Zahar'ak",
    area: Area.SOUTHERN_THANALAN,
    zone: "Southern Thanalan",
    coordinates: { x: 19.3, y: 20.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "60",
    name: "The Sagolii Desert",
    area: Area.SOUTHERN_THANALAN,
    zone: "Southern Thanalan",
    coordinates: { x: 21.3, y: 38.6 },
    weather: [ Weather.HEAT_WAVES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "61",
    name: "The Sunken Temple of Qarn",
    area: Area.SOUTHERN_THANALAN,
    zone: "Southern Thanalan",
    coordinates: { x: 23.8, y: 11.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "62",
    name: "Minotaur Malm",
    area: Area.SOUTHERN_THANALAN,
    zone: "Southern Thanalan",
    coordinates: { x: 14.6, y: 26.5 },
    weather: [ Weather.HEAT_WAVES ],
    time: { from: 5, until: 8 },
    emote: "/psych",
    completed: false
},{
    number: "63",
    name: "East Watchtower",
    area: Area.NORTHERN_THANALAN,
    zone: "Northern Thanalan",
    coordinates: { x: 22.2, y: 25.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/salute",
    completed: false
},{
    number: "64",
    name: "Ceruleum Pipeline",
    area: Area.NORTHERN_THANALAN,
    zone: "Northern Thanalan",
    coordinates: { x: 20.6, y: 29.5, z: 0.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "65",
    name: "Bluefog",
    area: Area.NORTHERN_THANALAN,
    zone: "Northern Thanalan",
    coordinates: { x: 20.8, y: 22.5 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "66",
    name: "Raubahn's Push",
    area: Area.NORTHERN_THANALAN,
    zone: "Northern Thanalan",
    coordinates: { x: 20.0, y: 17.7 },
    weather: [ Weather.CLOUDS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "67",
    name: "Abandoned Amajina Mythril Mine",
    area: Area.NORTHERN_THANALAN,
    zone: "Northern Thanalan",
    coordinates: { x: 26.4, y: 22.7 },
    weather: [ Weather.FOG ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "68",
    name: "The Nail",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 25.4, y: 29.9 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/lookout",
    completed: false
},{
    number: "69",
    name: "The Observatorium",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 25.5, y: 29.8 },
    weather: [ Weather.FOG ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "70",
    name: "The Frozen Fang",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 11.7, y: 15.8 },
    weather: [ Weather.BLIZZARDS ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "71",
    name: "The Holy See of Ishgard",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 12.8, y: 17.3, z: 1.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "72",
    name: "Boulder Downs",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 7.8, y: 28.9, z: 1.8 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/lookout",
    completed: false
},{
    number: "73",
    name: "The Fury's Gaze",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 7.9, y: 31.3 },
    weather: [ Weather.BLIZZARDS, Weather.SNOW ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "74",
    name: "Snowcloak",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 2.2, y: 21.4 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 8, until: 12 },
    emote: "/lookout",
    completed: false
},{
    number: "75",
    name: "Camp Dragonhead",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 26.5, y: 17.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "76",
    name: "The Steel Vigil",
    area: Area.COERTHAS_CENTRAL_HIGHLANDS,
    zone: "Coerthas Central Highlands",
    coordinates: { x: 28.2, y: 10.3 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 5, until: 8 },
    emote: "/lookout",
    completed: false
},{
    number: "77",
    name: "Castrum Centri",
    area: Area.MOR_DHONA,
    zone: "Mor Dhona",
    coordinates: { x: 9.8, y: 13.5 },
    weather: [ Weather.GLOOM ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "78",
    name: "The Crystal Tower",
    area: Area.MOR_DHONA,
    zone: "Mor Dhona",
    coordinates: { x: 27.4, y: 8.0, z: 0.6 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 18, until: 5 },
    emote: "/lookout",
    completed: false
},{
    number: "79",
    name: "Rathefrost",
    area: Area.MOR_DHONA,
    zone: "Mor Dhona",
    coordinates: { x: 18.6, y: 17.7 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 12, until: 17 },
    emote: "/lookout",
    completed: false
},{
    number: "80",
    name: "The Keeper of the Lake",
    area: Area.MOR_DHONA,
    zone: "Mor Dhona",
    coordinates: { x: 26.1, y: 11.2 },
    weather: [ Weather.FAIR_SKIES, Weather.CLEAR_SKIES ],
    time: { from: 17, until: 18 },
    emote: "/sit",
    completed: false
}];

var weatherTables = (function() {
    var weatherTables = {};
    weatherTables[Zone.LIMSA_LOMINSA_UPPER_DECKS.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 }
    ];
    weatherTables[Zone.LIMSA_LOMINSA_LOWER_DECKS.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 }
    ];
    weatherTables[Zone.MIDDLE_LA_NOSCEA.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 }
    ];
    weatherTables[Zone.LOWER_LA_NOSCEA.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 }
    ];
    weatherTables[Zone.EASTERN_LA_NOSCEA.name] = [
        { name: Weather.FOG, chance: 5 },
        { name: Weather.CLEAR_SKIES, chance: 45 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.RAIN, chance: 5 },
        { name: Weather.SHOWERS, chance: 5 }
    ];
    weatherTables[Zone.WESTERN_LA_NOSCEA.name] = [
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.GALES, chance: 10 }
    ];
    weatherTables[Zone.UPPER_LA_NOSCEA.name] = [
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDER, chance: 10 },
        { name: Weather.THUNDERSTORMS, chance: 10 }
    ];
    weatherTables[Zone.OUTER_LA_NOSCEA.name] = [
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 15 },
        { name: Weather.RAIN, chance: 15 }
    ];
    weatherTables[Zone.WOLVES_DEN_PIER.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDERSTORMS, chance: 10 }
    ];
    weatherTables[Zone.MIST.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 }
    ];
    weatherTables[Zone.OLD_GRIDANIA.name] = [
        { name: Weather.RAIN, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.NEW_GRIDANIA.name] = [
        { name: Weather.RAIN, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.CENTRAL_SHROUD.name] = [
        { name: Weather.THUNDER, chance: 5 },
        { name: Weather.RAIN, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.EAST_SHROUD.name] = [
        { name: Weather.THUNDER, chance: 5 },
        { name: Weather.RAIN, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.SOUTH_SHROUD.name] = [
        { name: Weather.FOG, chance: 5 },
        { name: Weather.THUNDERSTORMS, chance: 5 },
        { name: Weather.THUNDER, chance: 15 },
        { name: Weather.FOG, chance: 5 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.CLEAR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.NORTH_SHROUD.name] = [
        { name: Weather.FOG, chance: 5 },
        { name: Weather.SHOWERS, chance: 5 },
        { name: Weather.RAIN, chance: 15 },
        { name: Weather.FOG, chance: 5 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.CLEAR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.THE_LAVENDER_BEDS.name] = [
        { name: Weather.CLOUDS, chance: 5 },
        { name: Weather.RAIN, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.ULDAH_STEPS_OF_NALD.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.ULDAH_STEPS_OF_THAL.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.WESTERN_THANALAN.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.CENTRAL_THANALAN.name] = [
        { name: Weather.DUST_STORMS, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.EASTERN_THANALAN.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 },
        { name: Weather.SHOWERS, chance: 15 }
    ];
    weatherTables[Zone.SOUTHERN_THANALAN.name] = [
        { name: Weather.HEAT_WAVES, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.NORTHERN_THANALAN.name] = [
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.FAIR_SKIES, chance: 15 },
        { name: Weather.CLOUDS, chance: 30 },
        { name: Weather.FOG, chance: 50 }
    ];
    weatherTables[Zone.THE_GOBLET.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.MOR_DHONA.name] = [
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 15 },
        { name: Weather.GLOOM, chance: 30 },
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 25 }
    ];
    weatherTables[Zone.ISHGARD_FOUNDATION.name] = [
        { name: Weather.SNOW, chance: 60 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.ISHGARD_THE_PILLARS.name] = [
        { name: Weather.SNOW, chance: 60 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.EMPYREUM.name] = [
        { name: Weather.SNOW, chance: 5 },
        { name: Weather.FAIR_SKIES, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.FIRMAMENT.name] = [
        { name: Weather.SNOW, chance: 60 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 }
    ];
    weatherTables[Zone.COERTHAS_CENTRAL_HIGHLANDS.name] = [
        { name: Weather.BLIZZARDS, chance: 20 },
        { name: Weather.SNOW, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.COERTHAS_WESTERN_HIGHLANDS.name] = [
        { name: Weather.BLIZZARDS, chance: 20 },
        { name: Weather.SNOW, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 }
    ];
    weatherTables[Zone.THE_SEA_OF_CLOUDS.name] = [
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.UMBRAL_WIND, chance: 10 }
    ];
    weatherTables[Zone.AZYS_LLA.name] = [
        { name: Weather.FAIR_SKIES, chance: 35 },
        { name: Weather.CLOUDS, chance: 35 },
        { name: Weather.THUNDER, chance: 30 }
    ];
    weatherTables[Zone.THE_DRAVANIAN_FORELANDS.name] = [
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDER, chance: 10 },
        { name: Weather.DUST_STORMS, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.THE_DRAVANIAN_HINTERLANDS.name] = [
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.SHOWERS, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.THE_CHURNING_MISTS.name] = [
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.GALES, chance: 10 },
        { name: Weather.UMBRAL_STATIC, chance: 20 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.IDYLLSHIRE.name] = [
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.SHOWERS, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 30 },
        { name: Weather.FAIR_SKIES, chance: 30 }
    ];
    weatherTables[Zone.RHALGRS_REACH.name] = [
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDER, chance: 10 }
    ];
    weatherTables[Zone.THE_FRINGES.name] = [
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDER, chance: 10 }
    ];
    weatherTables[Zone.THE_PEAKS.name] = [
        { name: Weather.CLEAR_SKIES, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 50 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.DUST_STORMS, chance: 5 }
    ];
    weatherTables[Zone.THE_LOCHS.name] = [
        { name: Weather.CLEAR_SKIES, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.THUNDERSTORMS, chance: 10 }
    ];
    weatherTables[Zone.KUGANE.name] = [
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 20 }
    ];
    weatherTables[Zone.SHIROGANE.name] = [
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 20 }
    ];
    weatherTables[Zone.THE_RUBY_SEA.name] = [
        { name: Weather.THUNDER, chance: 10 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 25 }
    ];
    weatherTables[Zone.YANXIA.name] = [
        { name: Weather.SHOWERS, chance: 5 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 20 }
    ];
    weatherTables[Zone.THE_AZIM_STEPPE.name] = [
        { name: Weather.GALES, chance: 5 },
        { name: Weather.WIND, chance: 5 },
        { name: Weather.RAIN, chance: 7 },
        { name: Weather.FOG, chance: 8 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 25 }
    ];
    weatherTables[Zone.EUREKA_ANEMOS.name] = [
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.GALES, chance: 30 },
        { name: Weather.SHOWERS, chance: 30 },
        { name: Weather.SNOW, chance: 10 }
    ];
    weatherTables[Zone.EUREKA_PAGOS.name] = [
        { name: Weather.CLEAR_SKIES, chance: 10 },
        { name: Weather.FOG, chance: 18 },
        { name: Weather.HEAT_WAVES, chance: 18 },
        { name: Weather.SNOW, chance: 18 },
        { name: Weather.THUNDER, chance: 18 },
        { name: Weather.BLIZZARDS, chance: 18 }
    ];
    weatherTables[Zone.EUREKA_PYROS.name] = [
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.HEAT_WAVES, chance: 18 },
        { name: Weather.THUNDER, chance: 18 },
        { name: Weather.BLIZZARDS, chance: 18 },
        { name: Weather.UMBRAL_WIND, chance: 18 },
        { name: Weather.SNOW, chance: 18 }
    ];
    weatherTables[Zone.EUREKA_HYDATOS.name] = [
        { name: Weather.FAIR_SKIES, chance: 12 },
        { name: Weather.SHOWERS, chance: 22 },
        { name: Weather.GLOOM, chance: 22 },
        { name: Weather.THUNDERSTORMS, chance: 22 },
        { name: Weather.SNOW, chance: 22 }
    ];
    weatherTables[Zone.THE_CRYSTARIUM.name] = [
        { name: Weather.CLEAR_SKIES, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.THUNDERSTORMS, chance: 5 }
    ];
    weatherTables[Zone.EULMORE.name] = [
        { name: Weather.GALES, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.LAKELAND.name] = [
        { name: Weather.CLEAR_SKIES, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.THUNDERSTORMS, chance: 5 }
    ];
    weatherTables[Zone.KHOLUSIA.name] = [
        { name: Weather.GALES, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLEAR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.AMH_ARAENG.name] = [
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.DUST_STORMS, chance: 10 },
        { name: Weather.HEAT_WAVES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 20 }
    ];
    weatherTables[Zone.IL_MHEG.name] = [
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.THUNDERSTORMS, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 }
    ];
    weatherTables[Zone.THE_RAKTIKA_GREATWOOD.name] = [
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.UMBRAL_WIND, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 15 }
    ];
    weatherTables[Zone.THE_TEMPEST.name] = [
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 60 },
        { name: Weather.CLEAR_SKIES, chance: 20 }
    ];
    weatherTables[Zone.RADZ_AT_HAN.name] = [
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 15 },
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 20 }
    ];
    weatherTables[Zone.THAVNAIR.name] = [
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.SHOWERS, chance: 5 },
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 20 }
    ];
    weatherTables[Zone.GARLEMALD.name] = [
        { name: Weather.SNOW, chance: 45 },
        { name: Weather.THUNDER, chance: 5 },
        { name: Weather.RAIN, chance: 5 },
        { name: Weather.FOG, chance: 5 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.FAIR_SKIES, chance: 10 },
        { name: Weather.CLEAR_SKIES, chance: 5 }
    ];
    weatherTables[Zone.OLD_SHARLAYAN.name] = [
        { name: Weather.CLEAR_SKIES, chance: 10 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 15 },
        { name: Weather.SNOW, chance: 15 }
    ];
    weatherTables[Zone.LABYRINTHOS.name] = [
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.RAIN, chance: 15 }
    ];
    weatherTables[Zone.MARE_LAMENTORUM.name] = [
        { name: Weather.UMBRAL_WIND, chance: 15 },
        { name: Weather.MOON_DUST, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 70 }
    ];
    weatherTables[Zone.ULTIMA_THULE.name] = [
        { name: Weather.ASTROMAGNETIC_STORM, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 70 },
        { name: Weather.UMBRAL_WIND, chance: 15 }
    ];
    weatherTables[Zone.ELPIS.name] = [
        { name: Weather.CLOUDS, chance: 25 },
        { name: Weather.UMBRAL_WIND, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLEAR_SKIES, chance: 15 }
    ];
    weatherTables[Zone.UNNAMED_ISLAND.name] = [
        { name: Weather.CLEAR_SKIES, chance: 25 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 5 },
        { name: Weather.SHOWERS, chance: 5 }
    ];
    weatherTables[Zone.TULIYOLLAL.name] = [
        { name: Weather.CLEAR_SKIES, chance: 40 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 5 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 5 }
    ];
    weatherTables[Zone.URQOPACHA.name] = [
        { name: Weather.CLEAR_SKIES, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 30 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.WIND, chance: 10 },
        { name: Weather.SNOW, chance: 10 }
    ];
    weatherTables[Zone.KOZAMAUKA.name] = [
        { name: Weather.CLEAR_SKIES, chance: 25 },
        { name: Weather.FAIR_SKIES, chance: 35 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.SHOWERS, chance: 5 }
    ];
    weatherTables[Zone.YAK_TEL.name] = [
        { name: Weather.CLEAR_SKIES, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 40 },
        { name: Weather.CLOUDS, chance: 15 },
        { name: Weather.FOG, chance: 15 },
        { name: Weather.RAIN, chance: 15 },
    ];
    weatherTables[Zone.SOLUTION_NINE.name] = [
          { name: Weather.FAIR_SKIES, chance: 100 }
    ];
    weatherTables[Zone.SHAALOANI.name] = [
        { name: Weather.CLEAR_SKIES, chance: 5 },
        { name: Weather.FAIR_SKIES, chance: 45 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.DUST_STORMS, chance: 15 },
        { name: Weather.GALES, chance: 15 }
    ];
    weatherTables[Zone.HERITAGE_FOUND.name] = [
        { name: Weather.FAIR_SKIES, chance: 5 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FOG, chance: 15 },
        { name: Weather.RAIN, chance: 5 },
        { name: Weather.THUNDERSTORMS, chance: 5 },
        { name: Weather.UMBRAL_STATIC, chance: 50 }
    ];
    weatherTables[Zone.LIVING_MEMORY.name] = [
        { name: Weather.RAIN, chance: 10 },
        { name: Weather.FOG, chance: 10 },
        { name: Weather.CLOUDS, chance: 20 },
        { name: Weather.FAIR_SKIES, chance: 60 }
    ];
    weatherTables[Zone.SINUS_ARDORUM.name] = [
        { name: Weather.MOON_DUST, chance: 15 },
        { name: Weather.FAIR_SKIES, chance: 70 },
        { name: Weather.UMBRAL_WIND, chance: 15 }
    ];
    function normalizeWeatherTables(weatherTables) {
        for (var zone in weatherTables) {
            var weatherTable = weatherTables[zone];
            var cumulative = 0;
            var output = [];
            for (var i = 0; i < weatherTable.length; i += 1) {
                cumulative += weatherTable[i].chance;
                output.push({
                    threshold: cumulative,
                    name: weatherTable[i].name,
                    chance: weatherTable[i].chance
                });
            }
            weatherTables[zone] = output;
        }
    };
    normalizeWeatherTables(weatherTables);
    return weatherTables;
})();
