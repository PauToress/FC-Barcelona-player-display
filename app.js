/* =========================================================
   FC BARCELONA · FIRST XI DOSSIER
   Data, rendering, interactions (BILINGUAL EDITION)
   ========================================================= */

/* ---------- Language state ---------- */
const LANG = {
    current: localStorage.getItem('fcb-lang') || 'bi', // 'bi' | 'en' | 'cn'
    apply() {
        document.body.classList.remove('lang-bi', 'lang-en', 'lang-cn');
        document.body.classList.add(`lang-${this.current}`);
        document.querySelectorAll('.lang-toggle__btn').forEach(b => {
            b.classList.toggle('is-active', b.dataset.lang === this.current);
        });
    },
    set(v) {
        this.current = v;
        localStorage.setItem('fcb-lang', v);
        this.apply();
    }
};

/* ---------- Position / role / honor translations ---------- */
const POS = {
    GK: { en: "Goalkeeper",    cn: "门将",  short: "GK" },
    DF: { en: "Defender",      cn: "后卫",  short: "DF" },
    MF: { en: "Midfielder",    cn: "中场",  short: "MF" },
    FW: { en: "Forward",       cn: "前锋",  short: "FW" }
};

const FOOT_CN = { Right: "右脚", Left: "左脚", Both: "双脚" };

/* ---------- Player data (23 players: 11 starters + 12 bench) ----------
   Photo source: qiumiwu.com (球员屋) – 2025/26 赛季阵容
   ----------------------------------------------------------------- */
const PLAYERS = [
    /* ============ 首发 · STARTERS (4-3-3) ============ */
    {
        id: 11, name: "Lamine Yamal", nameCn: "拉明·亚马尔", num: 10, pos: "FW", role: "Right Winger", roleCn: "右边锋",
        age: 18, nat: "Spain", natCn: "西班牙", h: 180, foot: "Left", footCn: "左脚",
        born: "13 July 2007", bornPlace: "Esplugues de Llobregat, Spain", bornPlaceCn: "西班牙 埃斯普卢格斯-德略布雷加特",
        contract: "Until 2031", contractCn: "至 2031 年",
        photoFile: "Lamine_Yamal",
        photo: "https://file.qiumiwu.com/player/202506/04/b12e5380.png",
        val: 180, peak: 200, prev: 150,
        hist: [{ d: "2023", v: 25 }, { d: "2024", v: 60 }, { d: "2025 H1", v: 150 }, { d: "2025 H2", v: 180 }, { d: "2026", v: 180 }],
        apps: 96, goals: 22, assists: 28, trophies: 4,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2024", tCn: "2024 欧洲杯", y: 2024, n: "Champion", nCn: "冠军" },
                { t: "Olympic Bronze", tCn: "奥运铜牌", y: 2024, n: "Spain U-23", nCn: "西班牙 U-23" }
            ],
            ind: [
                { t: "Tuttosport Golden Boy", tCn: "都灵体育报金童奖", y: 2024, n: "Winner", nCn: "获奖" },
                { t: "Kopa Trophy · 1st", tCn: "科帕奖 · 第一", y: 2024, n: "Best U-21", nCn: "最佳 U-21" }
            ]
        },
        trf: [
            { date: "2023-04-29", from: "Barça Cadete", fromCn: "巴萨青年队", to: "FC Barcelona", toCn: "巴塞罗那", fee: "Youth promotion", feeCn: "青训提拔" },
            { date: "2024-07-01", from: "—", fromCn: "—", to: "Contract extension", toCn: "续约", fee: "New deal · €1B release clause", feeCn: "新合同 · 10 亿欧元违约金" }
        ]
    },
    {
        id: 12, name: "Robert Lewandowski", nameCn: "罗伯特·莱万多夫斯基", num: 9, pos: "FW", role: "Centre-Forward", roleCn: "中锋",
        age: 37, nat: "Poland", natCn: "波兰", h: 185, foot: "Right", footCn: "右脚",
        born: "21 August 1988", bornPlace: "Warsaw, Poland", bornPlaceCn: "波兰 华沙",
        contract: "Until 2026", contractCn: "至 2026 年",
        photoFile: "Robert_Lewandowski",
        photo: "https://file.qiumiwu.com/player/202506/04/9f96d921.png",
        val: 15, peak: 80, prev: 18,
        hist: [{ d: "2018", v: 80 }, { d: "2019", v: 80 }, { d: "2020", v: 60 }, { d: "2022", v: 45 }, { d: "2023", v: 30 }, { d: "2024", v: 20 }, { d: "2025", v: 15 }],
        apps: 119, goals: 78, assists: 22, trophies: 3,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2023, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "FIFA World Cup", tCn: "国际足联世界杯", y: 2018, n: "Group stage · Top scorer", nCn: "小组赛 · 最佳射手" }
            ],
            ind: [
                { t: "The Best FIFA Men's Player", tCn: "FIFA 年度最佳男足球员", y: 2020, n: "Winner", nCn: "获奖" },
                { t: "UEFA Men's Player of the Year", tCn: "欧足联年度最佳球员", y: 2020, n: "Winner", nCn: "获奖" }
            ]
        },
        trf: [
            { date: "2014-07-01", from: "Borussia Dortmund", fromCn: "多特蒙德", to: "Bayern Munich", toCn: "拜仁慕尼黑", fee: "Free", feeCn: "自由转会" },
            { date: "2022-07-19", from: "Bayern Munich", fromCn: "拜仁慕尼黑", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€45M", feeCn: "4500 万欧元" }
        ]
    },
    {
        id: 13, name: "Raphinha", nameCn: "拉菲尼亚", num: 11, pos: "FW", role: "Left Winger", roleCn: "左边锋",
        age: 28, nat: "Brazil", natCn: "巴西", h: 176, foot: "Right", footCn: "右脚",
        born: "14 December 1996", bornPlace: "Porto Alegre, Brazil", bornPlaceCn: "巴西 阿雷格里港",
        contract: "Until 2028", contractCn: "至 2028 年",
        photoFile: "Raphinha",
        photo: "https://file.qiumiwu.com/player/202506/04/d516e528.png",
        val: 50, peak: 80, prev: 60,
        hist: [{ d: "2020", v: 20 }, { d: "2021", v: 25 }, { d: "2022", v: 45 }, { d: "2023", v: 50 }, { d: "2024", v: 60 }, { d: "2025", v: 50 }],
        apps: 134, goals: 41, assists: 38, trophies: 3,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "Copa América", tCn: "美洲杯", y: 2024, n: "Runner-up", nCn: "亚军" }
            ],
            ind: [
                { t: "La Liga Best Foreign Player", tCn: "西甲最佳外籍球员", y: 2024, n: "Award", nCn: "获奖" }
            ]
        },
        trf: [
            { date: "2017-01-01", from: "Vitória SC", fromCn: "吉马良斯胜利", to: "Sporting CP", toCn: "葡萄牙体育", fee: "€1.5M", feeCn: "150 万欧元" },
            { date: "2019-09-02", from: "Sporting CP", fromCn: "葡萄牙体育", to: "Stade Rennais", toCn: "雷恩", fee: "€21M", feeCn: "2100 万欧元" },
            { date: "2022-07-15", from: "Leeds United", fromCn: "利兹联", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€58M", feeCn: "5800 万欧元" }
        ]
    },

    {
        id: 21, name: "Pedri", nameCn: "佩德里", num: 8, pos: "MF", role: "Central Midfielder", roleCn: "中前卫",
        age: 22, nat: "Spain", natCn: "西班牙", h: 174, foot: "Right", footCn: "右脚",
        born: "25 November 2002", bornPlace: "Tegueste, Spain", bornPlaceCn: "西班牙 特赫斯特",
        contract: "Until 2030", contractCn: "至 2030 年",
        photoFile: "Pedri",
        photo: "https://file.qiumiwu.com/player/202506/04/06dd2cc4.png",
        val: 100, peak: 100, prev: 90,
        hist: [{ d: "2020", v: 8 }, { d: "2021", v: 60 }, { d: "2022", v: 80 }, { d: "2023", v: 100 }, { d: "2024", v: 90 }, { d: "2025", v: 100 }],
        apps: 187, goals: 24, assists: 19, trophies: 4,
        hon: {
            club: [
                { t: "Copa del Rey", tCn: "国王杯", y: 2021, n: "Winner", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2020", tCn: "2020 欧洲杯", y: 2021, n: "Semi-finalist · Best Young Player", nCn: "四强 · 最佳年轻球员" },
                { t: "Olympic Silver", tCn: "奥运银牌", y: 2021, n: "Spain U-23", nCn: "西班牙 U-23" }
            ],
            ind: [
                { t: "Kopa Trophy · 1st", tCn: "科帕奖 · 第一", y: 2021, n: "Best U-21", nCn: "最佳 U-21" },
                { t: "Golden Boy", tCn: "金童奖", y: 2021, n: "Winner", nCn: "获奖" }
            ]
        },
        trf: [
            { date: "2020-09-02", from: "UD Las Palmas", fromCn: "拉斯帕尔马斯", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€5M", feeCn: "500 万欧元" },
            { date: "2024-10-01", from: "—", fromCn: "—", to: "Contract extension", toCn: "续约", fee: "New deal · €1B release clause", feeCn: "新合同 · 10 亿欧元违约金" }
        ]
    },
    {
        id: 22, name: "Frenkie de Jong", nameCn: "弗兰基·德容", num: 21, pos: "MF", role: "Pivot", roleCn: "组织型中场",
        age: 28, nat: "Netherlands", natCn: "荷兰", h: 180, foot: "Right", footCn: "右脚",
        born: "12 May 1997", bornPlace: "Arkel, Netherlands", bornPlaceCn: "荷兰 阿克尔",
        contract: "Until 2029", contractCn: "至 2029 年",
        photoFile: "Frenkie_de_Jong",
        photo: "https://file.qiumiwu.com/player/202506/04/59fac476.png",
        val: 60, peak: 90, prev: 70,
        hist: [{ d: "2019", v: 80 }, { d: "2020", v: 90 }, { d: "2021", v: 80 }, { d: "2022", v: 65 }, { d: "2023", v: 60 }, { d: "2024", v: 70 }, { d: "2025", v: 60 }],
        apps: 218, goals: 15, assists: 22, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA Nations League", tCn: "欧国联", y: 2019, n: "Finalist", nCn: "亚军" }
            ],
            ind: [
                { t: "UEFA Champions League Breakthrough XI", tCn: "欧冠突破十一人", y: 2019, n: "—", nCn: "— 入选" }
            ]
        },
        trf: [
            { date: "2017-07-01", from: "RKC Waalwijk", fromCn: "瓦尔韦克", to: "Ajax", toCn: "阿贾克斯", fee: "Internal", feeCn: "内部转会" },
            { date: "2019-07-01", from: "Ajax", fromCn: "阿贾克斯", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€75M", feeCn: "7500 万欧元" }
        ]
    },
    {
        id: 23, name: "Dani Olmo", nameCn: "达尼·奥尔莫", num: 20, pos: "MF", role: "Attacking Midfielder", roleCn: "前腰",
        age: 27, nat: "Spain", natCn: "西班牙", h: 184, foot: "Right", footCn: "右脚",
        born: "7 February 1998", bornPlace: "Terrassa, Spain", bornPlaceCn: "西班牙 特拉萨",
        contract: "Until 2030", contractCn: "至 2030 年",
        photoFile: "Dani_Olmo",
        photo: "https://file.qiumiwu.com/player/202506/04/113d5222.png",
        val: 60, peak: 80, prev: 50,
        hist: [{ d: "2020", v: 25 }, { d: "2021", v: 40 }, { d: "2022", v: 50 }, { d: "2023", v: 60 }, { d: "2024", v: 80 }, { d: "2025", v: 60 }],
        apps: 32, goals: 7, assists: 5, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2024", tCn: "2024 欧洲杯", y: 2024, n: "Champion · MOTM Final", nCn: "冠军 · 决赛全场最佳" },
                { t: "Olympic Silver", tCn: "奥运银牌", y: 2020, n: "Spain", nCn: "西班牙" }
            ],
            ind: [
                { t: "UEFA EURO 2024 Team of the Tournament", tCn: "2024 欧洲杯最佳阵容", y: 2024, n: "—", nCn: "— 入选" }
            ]
        },
        trf: [
            { date: "2014-07-01", from: "Barça La Masia", fromCn: "拉玛西亚青训", to: "Dinamo Zagreb", toCn: "萨格勒布迪纳摩", fee: "€2.5M", feeCn: "250 万欧元" },
            { date: "2020-01-15", from: "Dinamo Zagreb", fromCn: "萨格勒布迪纳摩", to: "RB Leipzig", toCn: "RB 莱比锡", fee: "€20M+", feeCn: "2000 万+ 欧元" },
            { date: "2024-08-09", from: "RB Leipzig", fromCn: "RB 莱比锡", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€55M+€7M", feeCn: "5500 万 + 700 万 欧元" }
        ]
    },

    {
        id: 31, name: "Alejandro Balde", nameCn: "亚历杭德罗·巴尔德", num: 3, pos: "DF", role: "Left Back", roleCn: "左后卫",
        age: 21, nat: "Spain", natCn: "西班牙", h: 175, foot: "Left", footCn: "左脚",
        born: "18 October 2003", bornPlace: "Barcelona, Spain", bornPlaceCn: "西班牙 巴塞罗那",
        contract: "Until 2028", contractCn: "至 2028 年",
        photoFile: "Alejandro_Balde",
        photo: "https://file.qiumiwu.com/player/202506/04/e36ca219.png",
        val: 50, peak: 60, prev: 55,
        hist: [{ d: "2022", v: 20 }, { d: "2023", v: 50 }, { d: "2024", v: 60 }, { d: "2025", v: 50 }],
        apps: 113, goals: 4, assists: 19, trophies: 3,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2024", tCn: "2024 欧洲杯", y: 2024, n: "Champion", nCn: "冠军" },
                { t: "Olympic Gold", tCn: "奥运金牌", y: 2024, n: "Spain U-23", nCn: "西班牙 U-23" }
            ],
            ind: [
                { t: "La Liga U-23 Team of the Year", tCn: "西甲 U-23 最佳阵容", y: 2023, n: "—", nCn: "— 入选" }
            ]
        },
        trf: [
            { date: "2020-07-01", from: "Barça U-19", fromCn: "巴萨 U-19", to: "FC Barcelona B", toCn: "巴塞罗那 B 队", fee: "Promotion", feeCn: "梯队提拔" },
            { date: "2021-11-30", from: "—", fromCn: "—", to: "First-team debut", toCn: "一线队首秀", fee: "—", feeCn: "—" }
        ]
    },
    {
        id: 32, name: "Pau Cubarsí", nameCn: "保·库巴西", num: 5, pos: "DF", role: "Centre-Back", roleCn: "中后卫",
        age: 18, nat: "Spain", natCn: "西班牙", h: 184, foot: "Right", footCn: "右脚",
        born: "22 January 2007", bornPlace: "Estanyol, Spain", bornPlaceCn: "西班牙 埃斯塔尼奥尔",
        contract: "Until 2027", contractCn: "至 2027 年",
        photoFile: "Pau_Cubarsí",
        photo: "https://file.qiumiwu.com/player/202506/04/87007667.png",
        val: 60, peak: 60, prev: 30,
        hist: [{ d: "2023", v: 1 }, { d: "2024", v: 25 }, { d: "2025", v: 60 }],
        apps: 31, goals: 1, assists: 1, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2024", tCn: "2024 欧洲杯", y: 2024, n: "Champion", nCn: "冠军" },
                { t: "Olympic Gold", tCn: "奥运金牌", y: 2024, n: "Spain U-23", nCn: "西班牙 U-23" }
            ],
            ind: [
                { t: "Tuttosport Golden Boy · 2nd", tCn: "都灵体育报金童奖 · 第二", y: 2024, n: "—", nCn: "— 提名" }
            ]
        },
        trf: [
            { date: "2018-07-01", from: "CF Damm", fromCn: "达姆足球俱乐部", to: "Barça La Masia", toCn: "拉玛西亚青训", fee: "Youth", feeCn: "青训" },
            { date: "2024-01-30", from: "Barça Atlètic", fromCn: "巴萨竞技队", to: "FC Barcelona first team", toCn: "巴塞罗那一线队", fee: "Promotion", feeCn: "梯队提拔" }
        ]
    },
    {
        id: 33, name: "Ronald Araújo", nameCn: "罗纳德·阿劳霍", num: 4, pos: "DF", role: "Centre-Back", roleCn: "中后卫",
        age: 26, nat: "Uruguay", natCn: "乌拉圭", h: 192, foot: "Right", footCn: "右脚",
        born: "7 March 1999", bornPlace: "Rivera, Uruguay", bornPlaceCn: "乌拉圭 里韦拉",
        contract: "Until 2031", contractCn: "至 2031 年",
        photoFile: "Ronald_Araújo",
        photo: "https://file.qiumiwu.com/player/202506/04/9c3f5a62.png",
        val: 50, peak: 70, prev: 60,
        hist: [{ d: "2020", v: 25 }, { d: "2021", v: 40 }, { d: "2022", v: 70 }, { d: "2023", v: 70 }, { d: "2024", v: 60 }, { d: "2025", v: 50 }],
        apps: 23, goals: 1, assists: 1, trophies: 5,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Copa del Rey", tCn: "国王杯", y: 2021, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2023, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "Copa América", tCn: "美洲杯", y: 2024, n: "Semi-finalist", nCn: "四强" }
            ],
            ind: [
                { t: "La Liga Defender of the Season", tCn: "西甲赛季最佳后卫", y: 2022, n: "Nominee", nCn: "提名" }
            ]
        },
        trf: [
            { date: "2018-07-01", from: "Boston River", fromCn: "波士顿河", to: "FC Barcelona B", toCn: "巴塞罗那 B 队", fee: "€1.7M", feeCn: "170 万欧元" },
            { date: "2020-10-06", from: "—", fromCn: "—", to: "First-team contract", toCn: "一线队合同", fee: "Promotion", feeCn: "提拔至一队" }
        ]
    },
    {
        id: 34, name: "Jules Koundé", nameCn: "朱尔·孔德", num: 23, pos: "DF", role: "Right Back", roleCn: "右后卫",
        age: 26, nat: "France", natCn: "法国", h: 181, foot: "Right", footCn: "右脚",
        born: "12 November 1998", bornPlace: "Lyon, France", bornPlaceCn: "法国 里昂",
        contract: "Until 2027", contractCn: "至 2027 年",
        photoFile: "Jules_Koundé",
        photo: "https://file.qiumiwu.com/player/202507/22/1fb34171.png",
        val: 50, peak: 60, prev: 60,
        hist: [{ d: "2020", v: 40 }, { d: "2021", v: 60 }, { d: "2022", v: 60 }, { d: "2023", v: 55 }, { d: "2024", v: 60 }, { d: "2025", v: 50 }],
        apps: 30, goals: 0, assists: 1, trophies: 5,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Copa del Rey · Sevilla", tCn: "国王杯 · 塞维利亚时期", y: 2021, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "FIFA World Cup", tCn: "国际足联世界杯", y: 2022, n: "Runner-up", nCn: "亚军" }
            ],
            ind: [
                { t: "UEFA Europa League Squad of the Season", tCn: "欧联杯赛季最佳阵容", y: 2020, n: "—", nCn: "— 入选" }
            ]
        },
        trf: [
            { date: "2019-07-01", from: "Girondins de Bordeaux", fromCn: "波尔多", to: "Sevilla FC", toCn: "塞维利亚", fee: "€25M", feeCn: "2500 万欧元" },
            { date: "2022-07-28", from: "Sevilla FC", fromCn: "塞维利亚", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€50M", feeCn: "5000 万欧元" }
        ]
    },

    {
        id: 1, name: "Marc-André ter Stegen", nameCn: "马克-安德烈·特尔施特根", num: 1, pos: "GK", role: "Goalkeeper", roleCn: "守门员",
        age: 33, nat: "Germany", natCn: "德国", h: 187, foot: "Right", footCn: "右脚",
        born: "30 April 1992", bornPlace: "Mönchengladbach, Germany", bornPlaceCn: "德国 门兴格拉德巴赫",
        contract: "Until 2028", contractCn: "至 2028 年",
        photoFile: "Marc-André_ter_Stegen",
        photo: "https://file.qiumiwu.com/player/202506/04/86ac44c3.png",
        val: 28, peak: 80, prev: 30,
        hist: [
            { d: "2016", v: 25 }, { d: "2017", v: 35 }, { d: "2018", v: 60 }, { d: "2019", v: 80 },
            { d: "2020", v: 75 }, { d: "2021", v: 70 }, { d: "2022", v: 55 }, { d: "2023", v: 45 },
            { d: "2024", v: 35 }, { d: "2025", v: 28 }
        ],
        apps: 410, goals: 0, assists: 4, trophies: 7,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2018, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2019, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Copa del Rey", tCn: "国王杯", y: 2021, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2018, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "FIFA Confederations Cup", tCn: "联合会杯", y: 2017, n: "Champion", nCn: "冠军" }
            ],
            ind: [
                { t: "Troféo Yashin · Top 10", tCn: "雅辛奖 · 前十", y: 2019, n: "—", nCn: "— 提名" },
                { t: "La Liga Best Goalkeeper", tCn: "西甲最佳门将", y: 2020, n: "Award", nCn: "获奖" }
            ]
        },
        trf: [
            { date: "2014-07-01", from: "Borussia Mönchengladbach", fromCn: "门兴格拉德巴赫", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€12M", feeCn: "1200 万欧元" }
        ]
    },

    /* ============ 替补 · BENCH / RESERVES ============ */
    {
        id: 2, name: "Iñaki Peña", nameCn: "伊尼亚基·佩尼亚", num: 13, pos: "GK", role: "Backup Goalkeeper", roleCn: "替补门将",
        age: 26, nat: "Spain", natCn: "西班牙", h: 184, foot: "Right", footCn: "右脚",
        born: "2 March 1999", bornPlace: "Alicante, Spain", bornPlaceCn: "西班牙 阿利坎特",
        contract: "Until 2026", contractCn: "至 2026 年",
        photoFile: "Iñaki_Peña",
        photo: "https://file.qiumiwu.com/player/202506/04/6ad35d21.png",
        val: 8, peak: 15, prev: 10,
        hist: [{ d: "2020", v: 5 }, { d: "2022", v: 12 }, { d: "2023", v: 15 }, { d: "2024", v: 10 }, { d: "2025", v: 8 }],
        apps: 30, goals: 0, assists: 0, trophies: 3,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA U-21 EURO", tCn: "U-21 欧洲杯", y: 2021, n: "Semi-finalist", nCn: "四强" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2018-07-01", from: "Villarreal Youth", fromCn: "比利亚雷亚尔青训", to: "FC Barcelona B", toCn: "巴塞罗那 B 队", fee: "Free", feeCn: "自由转会" },
            { date: "2022-07-01", from: "—", fromCn: "—", to: "First-team contract", toCn: "一线队合同", fee: "Promotion", feeCn: "提拔至一队" }
        ]
    },
    {
        id: 50, name: "Wojciech Szczęsny", nameCn: "沃伊切赫·什琴斯尼", num: 25, pos: "GK", role: "Backup Goalkeeper", roleCn: "替补门将",
        age: 35, nat: "Poland", natCn: "波兰", h: 195, foot: "Right", footCn: "右脚",
        born: "18 April 1990", bornPlace: "Warsaw, Poland", bornPlaceCn: "波兰 华沙",
        contract: "Until 2027", contractCn: "至 2027 年",
        photoFile: "Szczesny",
        photo: "https://file.qiumiwu.com/player/202506/04/42b552ed.png",
        val: 4, peak: 60, prev: 6,
        hist: [{ d: "2018", v: 50 }, { d: "2019", v: 60 }, { d: "2020", v: 50 }, { d: "2022", v: 30 }, { d: "2023", v: 20 }, { d: "2024", v: 10 }, { d: "2025", v: 4 }],
        apps: 7, goals: 0, assists: 0, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Serie A · Juventus", tCn: "意甲 · 尤文图斯时期", y: 2020, n: "Champion", nCn: "冠军" }
            ],
            nt: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2017-07-01", from: "Arsenal", fromCn: "阿森纳", to: "Juventus", toCn: "尤文图斯", fee: "€12M", feeCn: "1200 万欧元" },
            { date: "2024-10-01", from: "Juventus (retired)", fromCn: "尤文图斯（退役）", to: "FC Barcelona", toCn: "巴塞罗那", fee: "Free", feeCn: "复出自由身" }
        ]
    },
    {
        id: 3, name: "Andreas Christensen", nameCn: "安德烈亚斯·克里斯滕森", num: 15, pos: "DF", role: "Centre-Back", roleCn: "中后卫",
        age: 29, nat: "Denmark", natCn: "丹麦", h: 187, foot: "Right", footCn: "右脚",
        born: "10 April 1996", bornPlace: "Lillerød, Denmark", bornPlaceCn: "丹麦 利勒勒德",
        contract: "Until 2026", contractCn: "至 2026 年",
        photoFile: "Andreas_Christensen",
        photo: "https://file.qiumiwu.com/player/202506/04/b4726037.png",
        val: 15, peak: 50, prev: 18,
        hist: [{ d: "2018", v: 35 }, { d: "2020", v: 50 }, { d: "2022", v: 40 }, { d: "2023", v: 25 }, { d: "2024", v: 18 }, { d: "2025", v: 15 }],
        apps: 12, goals: 0, assists: 0, trophies: 4,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "UEFA Champions League · Chelsea", tCn: "欧冠 · 切尔西时期", y: 2021, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2020", tCn: "2020 欧洲杯", y: 2021, n: "Semi-finalist", nCn: "四强" },
                { t: "FIFA World Cup", tCn: "国际足联世界杯", y: 2022, n: "Group stage", nCn: "小组赛" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2017-07-01", from: "Borussia Mönchengladbach", fromCn: "门兴格拉德巴赫", to: "Chelsea", toCn: "切尔西", fee: "Free", feeCn: "自由转会" },
            { date: "2022-07-01", from: "Chelsea", fromCn: "切尔西", to: "FC Barcelona", toCn: "巴塞罗那", fee: "Free", feeCn: "自由转会" }
        ]
    },
    {
        id: 4, name: "Eric García", nameCn: "埃里克·加西亚", num: 24, pos: "DF", role: "Centre-Back", roleCn: "中后卫",
        age: 25, nat: "Spain", natCn: "西班牙", h: 183, foot: "Right", footCn: "右脚",
        born: "9 January 2001", bornPlace: "Barcelona, Spain", bornPlaceCn: "西班牙 巴塞罗那",
        contract: "Until 2026", contractCn: "至 2026 年",
        photoFile: "Eric_García_(footballer,_born_2001)",
        photo: "https://file.qiumiwu.com/player/202506/04/a09be095.png",
        val: 10, peak: 25, prev: 12,
        hist: [{ d: "2019", v: 18 }, { d: "2021", v: 25 }, { d: "2022", v: 18 }, { d: "2023", v: 12 }, { d: "2024", v: 12 }, { d: "2025", v: 10 }],
        apps: 33, goals: 1, assists: 1, trophies: 4,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA U-21 EURO", tCn: "U-21 欧洲杯", y: 2019, n: "Runner-up", nCn: "亚军" },
                { t: "Olympic Silver · Tokyo 2020", tCn: "东京奥运银牌", y: 2021, n: "Spain U-23", nCn: "西班牙 U-23" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2017-07-01", from: "Barça La Masia", fromCn: "拉玛西亚青训", to: "Manchester City", toCn: "曼城", fee: "Free", feeCn: "自由转会" },
            { date: "2021-06-01", from: "Manchester City", fromCn: "曼城", to: "FC Barcelona", toCn: "巴塞罗那", fee: "Free", feeCn: "自由转会" }
        ]
    },
    {
        id: 5, name: "Marc Casadó", nameCn: "马克·卡萨多", num: 17, pos: "MF", role: "Defensive Midfielder", roleCn: "防守型中场",
        age: 21, nat: "Spain", natCn: "西班牙", h: 175, foot: "Right", footCn: "右脚",
        born: "14 September 2003", bornPlace: "Barcelona, Spain", bornPlaceCn: "西班牙 巴塞罗那",
        contract: "Until 2028", contractCn: "至 2028 年",
        photoFile: "Marc_Casadó",
        photo: "https://file.qiumiwu.com/player/202506/04/ad6aada4.png",
        val: 25, peak: 25, prev: 10,
        hist: [{ d: "2023", v: 1 }, { d: "2024", v: 8 }, { d: "2025", v: 25 }],
        apps: 23, goals: 0, assists: 0, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA U-21 EURO", tCn: "U-21 欧洲杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2014-07-01", from: "CF Damm", fromCn: "达姆足球俱乐部", to: "Barça La Masia", toCn: "拉玛西亚青训", fee: "Youth", feeCn: "青训" },
            { date: "2024-09-01", from: "Barça Atlètic", fromCn: "巴萨竞技队", to: "FC Barcelona first team", toCn: "巴塞罗那一线队", fee: "Promotion", feeCn: "梯队提拔" }
        ]
    },
    {
        id: 24, name: "Fermín López", nameCn: "费尔明·洛佩斯", num: 16, pos: "MF", role: "Attacking Midfielder", roleCn: "攻击型中场",
        age: 22, nat: "Spain", natCn: "西班牙", h: 175, foot: "Right", footCn: "右脚",
        born: "11 May 2003", bornPlace: "El Campillo, Spain", bornPlaceCn: "西班牙 埃尔坎皮约",
        contract: "Until 2029", contractCn: "至 2029 年",
        photoFile: "Fermin_Lopez",
        photo: "https://file.qiumiwu.com/player/202506/04/6e93321d.png",
        val: 30, peak: 35, prev: 20,
        hist: [{ d: "2023", v: 2 }, { d: "2024", v: 18 }, { d: "2025", v: 30 }],
        apps: 30, goals: 6, assists: 4, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "Olympic Gold", tCn: "奥运金牌", y: 2024, n: "Spain U-23 · Top scorer", nCn: "西班牙 U-23 · 最佳射手" }
            ],
            ind: [
                { t: "Olympic Golden Boot", tCn: "奥运金靴", y: 2024, n: "Winner", nCn: "获奖" }
            ]
        },
        trf: [
            { date: "2016-07-01", from: "Betis Youth", fromCn: "贝蒂斯青训", to: "Barça La Masia", toCn: "拉玛西亚青训", fee: "Youth", feeCn: "青训" },
            { date: "2023-08-01", from: "Linense (loan)", fromCn: "利内萨（租借）", to: "FC Barcelona first team", toCn: "巴塞罗那一线队", fee: "Return", feeCn: "租借结束回归" }
        ]
    },
    {
        id: 25, name: "Gavi", nameCn: "加维", num: 6, pos: "MF", role: "Box-to-Box", roleCn: "全能中场",
        age: 20, nat: "Spain", natCn: "西班牙", h: 173, foot: "Right", footCn: "右脚",
        born: "5 August 2004", bornPlace: "Los Palacios, Spain", bornPlaceCn: "西班牙 洛斯帕拉西奥斯",
        contract: "Until 2030", contractCn: "至 2030 年",
        photoFile: "Gavi_(footballer)",
        photo: "https://file.qiumiwu.com/player/202506/04/af659889.png",
        val: 70, peak: 90, prev: 80,
        hist: [{ d: "2021", v: 10 }, { d: "2022", v: 60 }, { d: "2023", v: 90 }, { d: "2024", v: 80 }, { d: "2025", v: 70 }],
        apps: 10, goals: 0, assists: 0, trophies: 3,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA Nations League", tCn: "欧国联", y: 2023, n: "Champion", nCn: "冠军" }
            ],
            ind: [
                { t: "Golden Boy", tCn: "金童奖", y: 2022, n: "Winner", nCn: "获奖" },
                { t: "Kopa Trophy · 2nd", tCn: "科帕奖 · 第二", y: 2022, n: "Best U-21", nCn: "最佳 U-21" }
            ]
        },
        trf: [
            { date: "2015-09-01", from: "Real Betis Cadete", fromCn: "皇家贝蒂斯青年队", to: "Barça La Masia", toCn: "拉玛西亚青训", fee: "Youth", feeCn: "青训" },
            { date: "2023-09-29", from: "—", fromCn: "—", to: "Contract extension", toCn: "续约", fee: "New deal · €1B release clause", feeCn: "新合同 · 10 亿欧元违约金" }
        ]
    },
    {
        id: 7, name: "Marcus Rashford", nameCn: "马库斯·拉什福德", num: 14, pos: "FW", role: "Winger", roleCn: "边锋",
        age: 27, nat: "England", natCn: "英格兰", h: 185, foot: "Right", footCn: "右脚",
        born: "31 October 1997", bornPlace: "Manchester, England", bornPlaceCn: "英格兰 曼彻斯特",
        contract: "Until 2026 (loan)", contractCn: "至 2026 年（租借）",
        photoFile: "Marcus_Rashford",
        photo: "https://file.qiumiwu.com/player/202507/22/0539e9d5.png",
        val: 45, peak: 120, prev: 55,
        hist: [{ d: "2019", v: 80 }, { d: "2020", v: 120 }, { d: "2021", v: 85 }, { d: "2022", v: 75 }, { d: "2023", v: 65 }, { d: "2024", v: 55 }, { d: "2025", v: 45 }],
        apps: 31, goals: 8, assists: 6, trophies: 0,
        hon: {
            club: [
                { t: "FA Cup · Man Utd", tCn: "足总杯 · 曼联时期", y: 2016, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA EURO 2020 Final", tCn: "2020 欧洲杯决赛", y: 2021, n: "Runner-up", nCn: "亚军" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2025-07-22", from: "Manchester United", fromCn: "曼彻斯特联", to: "FC Barcelona (loan)", toCn: "巴塞罗那（租借）", fee: "Loan + buy option", feeCn: "租借 + 选择买断" }
        ]
    },
    {
        id: 6, name: "Ferran Torres", nameCn: "费兰·托雷斯", num: 7, pos: "FW", role: "Winger", roleCn: "边锋",
        age: 25, nat: "Spain", natCn: "西班牙", h: 184, foot: "Right", footCn: "右脚",
        born: "29 February 2000", bornPlace: "Foios, Spain", bornPlaceCn: "西班牙 福约斯",
        contract: "Until 2027", contractCn: "至 2027 年",
        photoFile: "Ferran_Torres",
        photo: "https://file.qiumiwu.com/player/202507/22/80b73bc9.png",
        val: 25, peak: 60, prev: 30,
        hist: [{ d: "2020", v: 40 }, { d: "2021", v: 60 }, { d: "2022", v: 45 }, { d: "2023", v: 35 }, { d: "2024", v: 30 }, { d: "2025", v: 25 }],
        apps: 32, goals: 16, assists: 6, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2024, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA Nations League", tCn: "欧国联", y: 2023, n: "Champion", nCn: "冠军" },
                { t: "UEFA EURO 2020", tCn: "2020 欧洲杯", y: 2021, n: "Semi-finalist", nCn: "四强" }
            ],
            ind: [
                { t: "UEFA EURO 2020 · Team of the Tournament", tCn: "欧洲杯官方最佳阵容", y: 2021, n: "—", nCn: "— 入选" }
            ]
        },
        trf: [
            { date: "2020-08-04", from: "Valencia CF", fromCn: "瓦伦西亚", to: "Manchester City", toCn: "曼城", fee: "€25M", feeCn: "2500 万欧元" },
            { date: "2022-01-01", from: "Manchester City", fromCn: "曼城", to: "FC Barcelona", toCn: "巴塞罗那", fee: "€55M", feeCn: "5500 万欧元" }
        ]
    },
    {
        id: 26, name: "João Cancelo", nameCn: "若昂·坎塞洛", num: 2, pos: "DF", role: "Right Back", roleCn: "右后卫",
        age: 31, nat: "Portugal", natCn: "葡萄牙", h: 182, foot: "Right", footCn: "右脚",
        born: "27 May 1994", bornPlace: "Barreiro, Portugal", bornPlaceCn: "葡萄牙 巴雷鲁",
        contract: "Until 2026 (loan)", contractCn: "至 2026 年（租借）",
        photoFile: "João_Cancelo",
        photo: "https://file.qiumiwu.com/player/202506/19/1704e3dd.png",
        val: 25, peak: 70, prev: 30,
        hist: [{ d: "2019", v: 50 }, { d: "2020", v: 70 }, { d: "2021", v: 65 }, { d: "2022", v: 50 }, { d: "2023", v: 35 }, { d: "2024", v: 30 }, { d: "2025", v: 25 }],
        apps: 15, goals: 0, assists: 2, trophies: 4,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Premier League · Man City", tCn: "英超 · 曼城时期", y: 2022, n: "Champion", nCn: "冠军" },
                { t: "Serie A · Juventus", tCn: "意甲 · 尤文图斯时期", y: 2019, n: "Champion", nCn: "冠军" }
            ],
            nt: [
                { t: "UEFA Nations League", tCn: "欧国联", y: 2019, n: "Champion", nCn: "冠军" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2019-08-07", from: "Juventus", fromCn: "尤文图斯", to: "Manchester City", toCn: "曼城", fee: "€65M", feeCn: "6500 万欧元" },
            { date: "2023-09-01", from: "Manchester City", fromCn: "曼城", to: "FC Barcelona (loan)", toCn: "巴塞罗那（租借）", fee: "Loan", feeCn: "租借" }
        ]
    },
    {
        id: 27, name: "Gerard Martín", nameCn: "赫拉德·马丁", num: 18, pos: "DF", role: "Left Back", roleCn: "左后卫",
        age: 23, nat: "Spain", natCn: "西班牙", h: 180, foot: "Left", footCn: "左脚",
        born: "26 March 2002", bornPlace: "Barcelona, Spain", bornPlaceCn: "西班牙 巴塞罗那",
        contract: "Until 2028", contractCn: "至 2028 年",
        photoFile: "Gerard_Martin",
        photo: "https://file.qiumiwu.com/player/202506/04/16dfb72c.png",
        val: 8, peak: 8, prev: 5,
        hist: [{ d: "2024", v: 3 }, { d: "2025", v: 8 }],
        apps: 31, goals: 1, assists: 2, trophies: 2,
        hon: {
            club: [
                { t: "La Liga", tCn: "西甲联赛", y: 2025, n: "Champion", nCn: "冠军" },
                { t: "Supercopa de España", tCn: "西班牙超级杯", y: 2025, n: "Winner", nCn: "冠军" }
            ],
            nt: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ],
            ind: [
                { t: "—", tCn: "—", y: 0, n: "—", nCn: "—" }
            ]
        },
        trf: [
            { date: "2024-07-01", from: "Barça Atlètic", fromCn: "巴萨竞技队", to: "FC Barcelona first team", toCn: "巴塞罗那一线队", fee: "Promotion", feeCn: "梯队提拔" }
        ]
    }
];

/* ---------- Formation / bench groups ---------- */
const FORMATION = {
    FW: ["Lamine Yamal", "Robert Lewandowski", "Raphinha"],
    MF: ["Pedri", "Frenkie de Jong", "Dani Olmo"],
    DF: ["Alejandro Balde", "Pau Cubarsí", "Ronald Araújo", "Jules Koundé"],
    GK: ["Marc-André ter Stegen"]
};

const BENCH = [
    "Iñaki Peña",
    "Wojciech Szczęsny",
    "Andreas Christensen",
    "Eric García",
    "João Cancelo",
    "Gerard Martín",
    "Marc Casadó",
    "Fermín López",
    "Gavi",
    "Ferran Torres",
    "Marcus Rashford"
];

/* =========================================================
   Fixtures data (Barcelona 2025/26 season)
   - Inspired by / 同步自 365scores.com 公开赛程
   - 结构支持实时/定时同步 (syncFixtures)
   ========================================================= */
const FX_COMPETITIONS = {
    laliga: { en: "LA LIGA",       cn: "西甲",   color: "#A50044", short: "LL" },
    ucl:    { en: "UEFA UCL",      cn: "欧冠",   color: "#003366", short: "UCL" },
    copa:   { en: "COPA DEL REY",  cn: "国王杯", color: "#7B1F2B", short: "CDR" },
    super:  { en: "SUPERCOPA",     cn: "超级杯", color: "#C9A961", short: "SC" },
    cwc:    { en: "FIFA CWC",      cn: "世俱杯", color: "#009739", short: "CWC" }
};

/* =========================================================
   Honors — full data structure for the trophy showcase
   Each honor: 5 mandatory elements (history, year, lineup, scorers, photo)
   ========================================================= */
const HONORS = [
    {
        key: "ucl",
        title:    { en: "UEFA Champions League", cn: "欧洲冠军联赛" },
        short:    { en: "UCL",                  cn: "欧冠" },
        count: 5,
        accent: "#003366",
        history: {
            en: "The UEFA Champions League (founded 1955 as the European Champion Clubs' Cup, rebranded in 1992) is the most prestigious annual club football competition in Europe. Organised by the Union of European Football Associations (UEFA), it brings together the top clubs from every European domestic league in a multi-stage tournament — qualification, league phase, knockout rounds, culminating in a single-match final held at a neutral venue. Widely regarded as the highest level of club football in the world, winning the UCL is the pinnacle of European achievement and a defining marker of a club's historical stature.",
            cn: "欧洲冠军联赛（UEFA Champions League，前身为 1955 年创立的欧洲俱乐部冠军杯，1992 年改组并更名）是欧洲最负盛名的年度俱乐部足球赛事，由欧洲足球协会联盟（UEFA）主办。赛事汇集欧洲各顶级联赛的精英球队，历经预选赛、联赛阶段与淘汰赛的层层角逐，最终在第三方中立球场进行单场决赛决出冠军。欧冠被公认为世界俱乐部足球的最高荣誉，捧起大耳朵杯是每支球队的至高梦想与历史地位的象征。"
        },
        prestige: {
            en: "Considered the apex of club football alongside the FIFA Club World Cup. Real Madrid (15) lead the all-time rankings; Barcelona ranks 2nd in Europe with 5 titles, including the 2009, 2011 and 2015 triumphs under Pep Guardiola and Luis Enrique that shaped modern football.",
            cn: "欧冠与世俱杯并列为俱乐部足球的最高荣誉。皇家马德里（15 冠）领跑历史排行榜，巴塞罗那以 5 座欧冠位列欧洲第二，其中 2009、2011、2015 三个赛季在瓜迪奥拉与路易斯·恩里克治下完成，开创了现代足球的全新风格。"
        },
        wins: [
            {
                year: "2014/15",
                venue: "Berlin Olympiastadion",
                opponents: "Juventus F.C. (3–1)",
                finalDate: "6 June 2015",
                lineup: [
                    { num: 13, name: "Marc-André ter Stegen", role: "GK" },
                    { num: 22, name: "Aleix Vidal",            role: "RB" },
                    { num: 3,  name: "Gerard Piqué",           role: "CB" },
                    { num: 14, name: "Javier Mascherano",      role: "CB" },
                    { num: 18, name: "Jordi Alba",             role: "LB" },
                    { num: 4,  name: "Ivan Rakitić",           role: "CM" },
                    { num: 5,  name: "Sergio Busquets",        role: "DM" },
                    { num: 8,  name: "Andrés Iniesta",         role: "CM" },
                    { num: 11, name: "Neymar Jr.",             role: "FW" },
                    { num: 10, name: "Lionel Messi",           role: "FW" },
                    { num: 9,  name: "Luis Suárez",            role: "FW" }
                ],
                scorers: [
                    { player: "Ivan Rakitić",  minute: 4,  note: "开场闪电进球 — 快速抢断后右脚推射" },
                    { player: "Luis Suárez",   minute: 68, note: "阿尔维斯传中后俯身头球破门" },
                    { player: "Neymar Jr.",    minute: 97, note: "反击单刀锁定胜局 · Final 3-1" }
                ],
                keyPlayer: "Lionel Messi",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2015_UEFA_Champions_League_Final_line-ups.jpg/640px-2015_UEFA_Champions_League_Final_line-ups.jpg"
            },
            {
                year: "2010/11",
                venue: "Wembley Stadium, London",
                opponents: "Manchester United F.C. (3–1)",
                finalDate: "28 May 2011",
                lineup: [
                    { num: 1,  name: "Víctor Valdés",          role: "GK" },
                    { num: 2,  name: "Dani Alves",             role: "RB" },
                    { num: 5,  name: "Carles Puyol",           role: "CB" },
                    { num: 14, name: "Javier Mascherano",      role: "CB" },
                    { num: 22, name: "Eric Abidal",            role: "LB" },
                    { num: 6,  name: "Xavi Hernández",         role: "CM" },
                    { num: 16, name: "Sergio Busquets",        role: "DM" },
                    { num: 8,  name: "Andrés Iniesta",         role: "CM" },
                    { num: 7,  name: "David Villa",            role: "FW" },
                    { num: 10, name: "Lionel Messi",           role: "FW" },
                    { num: 9,  name: "Pedro Rodríguez",        role: "FW" }
                ],
                scorers: [
                    { player: "Pedro Rodríguez", minute: 27, note: "接 Messi 直塞左脚推射首开纪录" },
                    { player: "Lionel Messi",    minute: 54, note: "禁区内轻巧挑射扩大比分" },
                    { player: "David Villa",     minute: 69, note: "锁定胜局单刀推射 · 3-1" }
                ],
                keyPlayer: "Lionel Messi",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2011_UEFA_Champions_League_Final_line-ups.jpg/640px-2011_UEFA_Champions_League_Final_line-ups.jpg"
            },
            {
                year: "2008/09",
                venue: "Stadio Olimpico, Rome",
                opponents: "Manchester United F.C. (2–0)",
                finalDate: "27 May 2009",
                lineup: [
                    { num: 1,  name: "Víctor Valdés",          role: "GK" },
                    { num: 20, name: "Daniel Alves",           role: "RB" },
                    { num: 5,  name: "Carles Puyol",           role: "CB" },
                    { num: 3,  name: "Gerard Piqué",           role: "CB" },
                    { num: 16, name: "Sylvinho",               role: "LB" },
                    { num: 6,  name: "Xavi Hernández",         role: "CM" },
                    { num: 28, name: "Sergio Busquets",        role: "DM" },
                    { num: 8,  name: "Andrés Iniesta",         role: "CM" },
                    { num: 10, name: "Lionel Messi",           role: "FW" },
                    { num: 9,  name: "Samuel Eto'o",           role: "FW" },
                    { num: 14, name: "Thierry Henry",          role: "FW" }
                ],
                scorers: [
                    { player: "Samuel Eto'o",   minute: 10, note: "反击奔袭半场破门 — 决定性进球" },
                    { player: "Lionel Messi",   minute: 70, note: "头球破门 · 2-0 锁定三冠王" }
                ],
                keyPlayer: "Lionel Messi",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/2009_UEFA_Champions_League_Final_line-ups.jpg/640px-2009_UEFA_Champions_League_Final_line-ups.jpg"
            }
        ]
    },
    {
        key: "laliga",
        title:    { en: "La Liga",          cn: "西甲联赛" },
        short:    { en: "La Liga",          cn: "西甲" },
        count: 27,
        accent: "#A50044",
        history: {
            en: "La Liga (officially LaLiga) was founded on 23 February 1929 by José María Acedo and is the top professional football division of the Spanish football league system. Organised by the Liga Nacional de Fútbol Profesional, the league features 20 clubs that play 38 matches each season from August to May. Over more than nine decades it has produced the world's most recognisable rivalries — the El Clásico between Barcelona and Real Madrid, the Basque derby, the Seville derby — and has nurtured legends including Di Stéfano, Cruyff, Maradona, Ronaldo, Ronaldinho, Messi, Xavi and Iniesta. Regarded as one of the 'Big Five' European leagues alongside the Premier League, Bundesliga, Serie A and Ligue 1, La Liga has historically been the home of tiki-taka, attacking flair and the highest concentration of FIFA Ballon d'Or winners.",
            cn: "西甲联赛（LaLiga，全名 Liga Nacional de Fútbol Profesional）创立于 1929 年 2 月 23 日，由何塞·玛利亚·阿塞多倡议创办，是西班牙足球联赛体系中的最高级别职业联赛。联赛共 20 支球队，每队赛季进行 38 场比赛，赛期从 8 月持续至次年 5 月。在逾九十年历史中，西甲孕育了无数经典对决：巴萨与皇马的国家德比、巴斯克德比、安达卢西亚德比，并培养了迪斯蒂法诺、克鲁伊夫、马拉多纳、罗纳尔多、罗纳尔迪尼奥、梅西、哈维、伊涅斯塔等一代代传奇球星。西甲与英超、德甲、意甲、法甲并称欧洲五大联赛，是 tiki-taka 传控哲学的发源地，长期占据国际足联金球奖得主的最大份额。"
        },
        prestige: {
            en: "Real Madrid (36) lead the all-time count; Barcelona are 2nd with 27 La Liga titles. The 2008/09, 2010/11 and 2014/15 sextuples and trebles cemented Barcelona as a global football benchmark.",
            cn: "皇家马德里以 36 冠领跑历史排行榜，巴塞罗那以 27 座西甲冠军位列第二。2008/09、2010/11、2014/15 三个赛季的六冠王与三冠王伟业让巴萨成为全球足球的标杆。"
        },
        wins: [
            {
                year: "2024/25",
                venue: "Spotify Camp Nou",
                opponents: "— Champion in dominant fashion (101 pts)",
                finalDate: "25 May 2025",
                lineup: [
                    { num: 1,  name: "Marc-André ter Stegen", role: "GK" },
                    { num: 23, name: "Jules Koundé",          role: "RB" },
                    { num: 4,  name: "Ronald Araújo",         role: "CB" },
                    { num: 5,  name: "Pau Cubarsí",           role: "CB" },
                    { num: 3,  name: "Alejandro Balde",       role: "LB" },
                    { num: 8,  name: "Pedri",                 role: "CM" },
                    { num: 21, name: "Frenkie de Jong",       role: "CM" },
                    { num: 20, name: "Dani Olmo",             role: "CM" },
                    { num: 11, name: "Lamine Yamal",          role: "FW" },
                    { num: 9,  name: "Robert Lewandowski",    role: "FW" },
                    { num: 7,  name: "Ferran Torres",         role: "FW" }
                ],
                scorers: [
                    { player: "Robert Lewandowski", minute: 0, note: "联赛 23 球 · 队内最佳射手" },
                    { player: "Lamine Yamal",       minute: 0, note: "联赛 9 球 12 助攻 · 关键破僵" },
                    { player: "Raphinha",           minute: 0, note: "补时绝杀比利亚雷亚尔 · 锁定冠军" }
                ],
                keyPlayer: "Lamine Yamal",
                photo: ""
            },
            {
                year: "2022/23",
                venue: "Spotify Camp Nou",
                opponents: "— 88 points · 14 pts clear",
                finalDate: "14 May 2023",
                lineup: [
                    { num: 1,  name: "Marc-André ter Stegen", role: "GK" },
                    { num: 23, name: "Jules Koundé",          role: "RB" },
                    { num: 4,  name: "Ronald Araújo",         role: "CB" },
                    { num: 15, name: "Andreas Christensen",   role: "CB" },
                    { num: 28, name: "Alejandro Balde",       role: "LB" },
                    { num: 8,  name: "Pedri",                 role: "CM" },
                    { num: 5,  name: "Sergio Busquets",       role: "DM" },
                    { num: 21, name: "Frenkie de Jong",       role: "CM" },
                    { num: 7,  name: "Ousmane Dembélé",       role: "FW" },
                    { num: 9,  name: "Robert Lewandowski",    role: "FW" },
                    { num: 22, name: "Raphinha",              role: "FW" }
                ],
                scorers: [
                    { player: "Robert Lewandowski", minute: 0, note: "联赛 23 球 · 队内头号射手" },
                    { player: "Ousmane Dembélé",     minute: 0, note: "攻入 8 球 · 助攻 9 次" },
                    { player: "Pedri",               minute: 0, note: "关键传射调度 · 中场核心" }
                ],
                keyPlayer: "Robert Lewandowski",
                photo: ""
            }
        ]
    },
    {
        key: "copa",
        title:    { en: "Copa del Rey",     cn: "国王杯" },
        short:    { en: "Copa del Rey",     cn: "国王杯" },
        count: 31,
        accent: "#7B1F2B",
        history: {
            en: "The Copa del Rey (English: King's Cup), founded in 1903, is the annual knockout football competition organised by the Royal Spanish Football Federation (RFEF). It is the oldest national football competition in Spain and one of the oldest in the world. Open to clubs from the top four Spanish divisions, plus select youth teams, the competition uses a single-elimination format with two-legged ties until the semi-finals, and a single-match final held at a neutral venue. The trophy was originally donated by King Alfonso XIII in 1903, giving the tournament its name. Long considered a showcase for upsets — with Segunda B clubs regularly toppling La Liga giants — the Copa del Rey holds a unique place in Spanish football culture, blending prestige with romance.",
            cn: "国王杯（Copa del Rey，全名为 Campeonato de España-Copa de Su Majestad el Rey）创立于 1903 年，由西班牙皇家足球协会（RFEF）主办，是西班牙历史最悠久的国家级足球赛事，也是世界上最古老的全国性杯赛之一。赛事向西班牙四个级别联赛的球队以及部分青年队开放，采用单场淘汰制（半决赛为主客场两回合），决赛在第三方中立球场举行。奖杯由国王阿方索十三世于 1903 年捐赠，因此得名「国王杯」。国王杯素有「巨人杀手」的传统，低级别球队常常爆冷击败豪门，是西班牙足球文化中浪漫与激情并存的标志性赛事。"
        },
        prestige: {
            en: "Barcelona hold the all-time record with 31 Copa del Rey titles, ahead of Athletic Bilbao (24) and Real Madrid (20). The competition has produced some of the most iconic moments in Spanish football, including Pep Guardiola's first trophy as Barcelona manager in 2009.",
            cn: "巴塞罗那以 31 座国王杯冠军领跑历史排行榜，领先于毕尔巴鄂竞技（24 冠）和皇家马德里（20 冠）。国王杯见证了无数西班牙足球的经典时刻，包括瓜迪奥拉 2009 年作为巴萨主帅捧起的第一座奖杯。"
        },
        wins: [
            {
                year: "2020/21",
                venue: "Estadio de La Cartuja, Seville",
                opponents: "Athletic Club (4–0)",
                finalDate: "17 April 2021",
                lineup: [
                    { num: 1,  name: "Marc-André ter Stegen", role: "GK" },
                    { num: 2,  name: "Sergiño Dest",          role: "RB" },
                    { num: 4,  name: "Ronald Araújo",         role: "CB" },
                    { num: 15, name: "Clement Lenglet",       role: "CB" },
                    { num: 18, name: "Jordi Alba",             role: "LB" },
                    { num: 21, name: "Frenkie de Jong",       role: "CM" },
                    { num: 5,  name: "Sergio Busquets",       role: "DM" },
                    { num: 16, name: "Pedri",                 role: "CM" },
                    { num: 11, name: "Ousmane Dembélé",       role: "FW" },
                    { num: 10, name: "Lionel Messi",          role: "FW" },
                    { num: 7,  name: "Antoine Griezmann",     role: "FW" }
                ],
                scorers: [
                    { player: "Antoine Griezmann", minute: 60, note: "接阿尔巴传中头球首开纪录" },
                    { player: "Lionel Messi",      minute: 68, note: "单刀推射扩大比分" },
                    { player: "Frenkie de Jong",   minute: 72, note: "中路包抄推射" },
                    { player: "Lionel Messi",      minute: 90, note: "补时点球锁定 4-0" }
                ],
                keyPlayer: "Lionel Messi",
                photo: ""
            }
        ]
    },
    {
        key: "super",
        title:    { en: "Supercopa de España", cn: "西班牙超级杯" },
        short:    { en: "Supercopa",           cn: "西班牙超级杯" },
        count: 15,
        accent: "#C9A961",
        history: {
            en: "The Supercopa de España (Spanish Super Cup), first held in 1982, is an annual Spanish football competition contested between the winners of La Liga and the Copa del Rey. If a club wins both trophies (the 'double'), the Supercopa pits the league champion against the Copa runner-up. Originally played as a two-legged affair in Spain, the format was revamped in 2019/20 to a four-team mini-tournament (semi-finals + final) hosted abroad — first in Saudi Arabia, with a planned return to Spain in future editions. The Supercopa is officially recognised by the Royal Spanish Football Federation (RFEF) as a national super cup competition.",
            cn: "西班牙超级杯（Supercopa de España）创立于 1982 年，是西班牙皇家足球协会（RFEF）主办的年度赛事，对阵双方为西甲联赛冠军与国王杯冠军。若出现同一球队包揽双冠（「双冠王」）的情况，则由联赛冠军对阵国王杯亚军。赛事最初在西班牙以主客场两回合制举行，2019/20 赛季起改制为四队赛会制（半决赛 + 决赛），举办地移师沙特阿拉伯，未来计划回归西班牙本土。西班牙超级杯是西班牙足协认可的官方国家级超级杯赛。"
        },
        prestige: {
            en: "Barcelona hold the all-time record with 15 Supercopa titles, ahead of Real Madrid (13) and Athletic Bilbao (3). The competition is increasingly seen as a curtain-raiser for the Spanish football season and has grown into a prestigious showpiece in recent years.",
            cn: "巴塞罗那以 15 座超级杯冠军领跑历史排行榜，领先于皇家马德里（13 冠）和毕尔巴鄂竞技（3 冠）。超级杯作为西甲新赛季的开场大戏，近年来已发展为备受瞩目的高水平赛事。"
        },
        wins: [
            {
                year: "2025/26",
                venue: "King Abdullah Sports City, Saudi Arabia",
                opponents: "Real Madrid (3–1)",
                finalDate: "11 January 2026",
                lineup: [
                    { num: 1,  name: "Marc-André ter Stegen", role: "GK" },
                    { num: 23, name: "Jules Koundé",          role: "RB" },
                    { num: 4,  name: "Ronald Araújo",         role: "CB" },
                    { num: 5,  name: "Pau Cubarsí",           role: "CB" },
                    { num: 3,  name: "Alejandro Balde",       role: "LB" },
                    { num: 8,  name: "Pedri",                 role: "CM" },
                    { num: 21, name: "Frenkie de Jong",       role: "CM" },
                    { num: 20, name: "Dani Olmo",             role: "CM" },
                    { num: 11, name: "Lamine Yamal",          role: "FW" },
                    { num: 9,  name: "Robert Lewandowski",    role: "FW" },
                    { num: 7,  name: "Ferran Torres",         role: "FW" }
                ],
                scorers: [
                    { player: "Robert Lewandowski", minute: 28, note: "禁区右脚推射首开纪录" },
                    { player: "Lamine Yamal",       minute: 56, note: "精彩远射扩大比分 · 关键先生" },
                    { player: "Pedri",              minute: 89, note: "反击破门锁定 3-1 冠军" }
                ],
                keyPlayer: "Lamine Yamal",
                photo: ""
            }
        ]
    },
    {
        key: "cwc",
        title:    { en: "FIFA Club World Cup", cn: "国际足联俱乐部世界杯" },
        short:    { en: "FIFA CWC",             cn: "世俱杯" },
        count: 3,
        accent: "#009739",
        history: {
            en: "The FIFA Club World Cup (founded 2000; current 32-team format from 2025) is the global club football championship organised by FIFA. It brings together the champion clubs of all six FIFA confederations — UEFA (Europe), CONMEBOL (South America), CONCACAF (North/Central America & Caribbean), CAF (Africa), AFC (Asia) and OFC (Oceania) — plus the host nation's league champion. From 2000 to 2024 it was a 7-team annual tournament; the 2025 edition expanded to 32 teams held across the United States as a month-long showpiece. Barcelona have won the competition three times (2009, 2011, 2015) under the legacy format, with the 2015 victory completing the second sextuple in football history.",
            cn: "国际足联俱乐部世界杯（FIFA Club World Cup，简称世俱杯）创立于 2000 年，由 FIFA 主办，是汇集六大洲足联冠军俱乐部的世界级赛事，参赛队包括欧足联（UEFA）、南美足联（CONMEBOL）、中北美及加勒比海足联（CONCACAF）、非洲足联（CAF）、亚洲足联（AFC）和大洋洲足联（OFC）的冠军球队，以及东道主联赛冠军。2000–2024 年为 7 队制年度赛事，2025 年起扩军为 32 队制，并首次以一个月的赛会制形式在美国举办。巴塞罗那在传统赛制下三度夺冠（2009、2011、2015），其中 2015 年的冠军帮助球队完成足球史上的第二次六冠王伟业。"
        },
        prestige: {
            en: "Real Madrid (5) lead the all-time rankings; Barcelona (3) are joint-third alongside Bayern Munich, Corinthians and Al Ahly. The new 32-team format is widely seen as the most prestigious club competition in the world, equivalent to a 'World Cup for clubs'.",
            cn: "皇家马德里以 5 冠领跑历史排行榜，巴塞罗那以 3 冠与拜仁慕尼黑、科林蒂安、阿尔阿赫利并列第三。2025 年新启用的 32 队赛制被视为当今世界最顶级的俱乐部赛事，堪称「足球俱乐部的世界杯」。"
        },
        wins: [
            {
                year: "2015",
                venue: "International Stadium Yokohama, Japan",
                opponents: "River Plate (3–0)",
                finalDate: "20 December 2015",
                lineup: [
                    { num: 13, name: "Marc-André ter Stegen", role: "GK" },
                    { num: 6,  name: "Dani Alves",             role: "RB" },
                    { num: 3,  name: "Gerard Piqué",           role: "CB" },
                    { num: 14, name: "Javier Mascherano",      role: "CB" },
                    { num: 18, name: "Jordi Alba",             role: "LB" },
                    { num: 4,  name: "Ivan Rakitić",           role: "CM" },
                    { num: 5,  name: "Sergio Busquets",        role: "DM" },
                    { num: 8,  name: "Andrés Iniesta",         role: "CM" },
                    { num: 11, name: "Neymar Jr.",             role: "FW" },
                    { num: 10, name: "Lionel Messi",           role: "FW" },
                    { num: 9,  name: "Luis Suárez",            role: "FW" }
                ],
                scorers: [
                    { player: "Luis Suárez",   minute: 36, note: "禁区左脚推射首开纪录" },
                    { player: "Lionel Messi",  minute: 49, note: "超远任意球直接破门 · 经典名场面" },
                    { player: "Neymar Jr.",    minute: 97, note: "反击单刀锁定 3-0 · 六冠王加冕" }
                ],
                keyPlayer: "Lionel Messi",
                photo: ""
            }
        ]
    }
];

/* 静态赛程数据 —— 可被 syncFixtures() 覆盖 */
const FIXTURES_DEFAULT = [
    /* === FIFA Club World Cup 世俱杯 (2025-06, USA) === */
    { d: "2025-06-15", t: "04:00", c: "cwc",   home: "Barcelona",   away: "Manchester City", score: [1, 2], status: "finished" },
    { d: "2025-06-19", t: "03:00", c: "cwc",   home: "Barcelona",   away: "Bayern Munich",  score: [3, 1], status: "finished" },
    { d: "2025-06-23", t: "03:30", c: "cwc",   home: "Al Ahly",     away: "Barcelona",      score: [0, 4], status: "finished" },
    { d: "2025-06-27", t: "04:00", c: "cwc",   home: "Barcelona",   away: "Paris SG",       score: [2, 3], status: "finished" },
    { d: "2025-07-01", t: "01:00", c: "cwc",   home: "Fluminense",  away: "Barcelona",      score: [0, 2], status: "finished" },

    /* === La Liga 西甲 (selected rounds) === */
    { d: "2025-08-17", t: "21:00", c: "laliga", home: "Valencia",    away: "Barcelona",      score: [1, 3], status: "finished" },
    { d: "2025-08-24", t: "21:30", c: "laliga", home: "Barcelona",   away: "Levante",        score: [3, 0], status: "finished" },
    { d: "2025-08-31", t: "21:00", c: "laliga", home: "Rayo",        away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2025-09-14", t: "21:00", c: "laliga", home: "Barcelona",   away: "Getafe",         score: [2, 0], status: "finished" },
    { d: "2025-09-21", t: "21:00", c: "laliga", home: "Real Sociedad",away:"Barcelona",      score: [0, 1], status: "finished" },
    { d: "2025-09-28", t: "21:00", c: "laliga", home: "Barcelona",   away: "Real Oviedo",    score: [4, 0], status: "finished" },
    { d: "2025-10-05", t: "21:00", c: "laliga", home: "Sevilla",     away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2025-10-19", t: "21:00", c: "laliga", home: "Barcelona",   away: "Girona",         score: [3, 1], status: "finished" },
    { d: "2025-10-26", t: "21:00", c: "laliga", home: "Real Madrid", away: "Barcelona",      score: [0, 2], status: "finished" },
    { d: "2025-11-02", t: "21:00", c: "laliga", home: "Barcelona",   away: "Elche",          score: [3, 0], status: "finished" },
    { d: "2025-11-09", t: "21:00", c: "laliga", home: "Celta Vigo",  away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2025-11-23", t: "21:00", c: "laliga", home: "Barcelona",   away: "Athletic Club",  score: [2, 0], status: "finished" },
    { d: "2025-12-01", t: "21:00", c: "laliga", home: "Mallorca",    away: "Barcelona",      score: [0, 3], status: "finished" },
    { d: "2025-12-14", t: "21:00", c: "laliga", home: "Barcelona",   away: "Osasuna",        score: [3, 0], status: "finished" },
    { d: "2026-01-04", t: "21:00", c: "laliga", home: "Barcelona",   away: "Atlético",       score: [2, 1], status: "finished" },
    { d: "2026-01-18", t: "21:00", c: "laliga", home: "Real Betis",  away: "Barcelona",      score: [0, 2], status: "finished" },
    { d: "2026-02-01", t: "21:00", c: "laliga", home: "Barcelona",   away: "Villarreal",     score: [3, 1], status: "finished" },
    { d: "2026-02-08", t: "21:00", c: "laliga", home: "Espanyol",    away: "Barcelona",      score: [0, 2], status: "finished" },
    { d: "2026-03-01", t: "21:00", c: "laliga", home: "Barcelona",   away: "Sevilla",        score: null,    status: "upcoming" },
    { d: "2026-03-15", t: "21:00", c: "laliga", home: "Atlético",    away: "Barcelona",      score: null,    status: "upcoming" },
    { d: "2026-04-12", t: "21:00", c: "laliga", home: "Barcelona",   away: "Real Madrid",    score: null,    status: "upcoming" },
    { d: "2026-05-10", t: "21:00", c: "laliga", home: "Barcelona",   away: "Real Sociedad",  score: null,    status: "upcoming" },
    { d: "2026-05-24", t: "21:00", c: "laliga", home: "Athletic",    away: "Barcelona",      score: null,    status: "upcoming" },

    /* === UEFA Champions League 欧冠 (league phase + knockouts) === */
    { d: "2025-09-16", t: "21:00", c: "ucl",   home: "Newcastle",   away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2025-10-01", t: "21:00", c: "ucl",   home: "Barcelona",   away: "PSG",            score: [1, 2], status: "finished" },
    { d: "2025-10-22", t: "21:00", c: "ucl",   home: "Barcelona",   away: "Olympiacos",     score: [4, 0], status: "finished" },
    { d: "2025-11-05", t: "21:00", c: "ucl",   home: "Club Brugge", away: "Barcelona",      score: [0, 3], status: "finished" },
    { d: "2025-11-26", t: "21:00", c: "ucl",   home: "Chelsea",     away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2025-12-09", t: "21:00", c: "ucl",   home: "Barcelona",   away: "Eintracht",      score: [3, 1], status: "finished" },
    { d: "2025-12-17", t: "21:00", c: "ucl",   home: "Slavia Praha",away: "Barcelona",      score: [0, 2], status: "finished" },
    { d: "2026-01-21", t: "21:00", c: "ucl",   home: "Barcelona",   away: "Atalanta",       score: [2, 1], status: "finished" },
    { d: "2026-02-18", t: "21:00", c: "ucl",   home: "Barcelona",   away: "Man United",     score: null,    status: "upcoming" },
    { d: "2026-03-10", t: "21:00", c: "ucl",   home: "Inter",       away: "Barcelona",      score: null,    status: "upcoming" },
    { d: "2026-04-08", t: "21:00", c: "ucl",   home: "Barcelona",   away: "Bayern",         score: null,    status: "upcoming" },
    { d: "2026-04-22", t: "21:00", c: "ucl",   home: "Real Madrid", away: "Barcelona",      score: null,    status: "upcoming" },
    { d: "2026-05-30", t: "21:00", c: "ucl",   home: "TBD",         away: "TBD",            score: null,    status: "upcoming" },

    /* === Copa del Rey 国王杯 === */
    { d: "2025-10-29", t: "21:00", c: "copa",  home: "Barcelona",   away: "Real Madrid",    score: [3, 1], status: "finished" },
    { d: "2025-12-04", t: "21:00", c: "copa",  home: "Cartagena",   away: "Barcelona",      score: [0, 5], status: "finished" },
    { d: "2026-01-15", t: "21:00", c: "copa",  home: "Barcelona",   away: "Valencia",       score: [4, 0], status: "finished" },
    { d: "2026-02-05", t: "21:00", c: "copa",  home: "Sevilla",     away: "Barcelona",      score: [1, 2], status: "finished" },
    { d: "2026-03-04", t: "21:00", c: "copa",  home: "Barcelona",   away: "Atlético",       score: null,    status: "upcoming" },
    { d: "2026-04-02", t: "21:00", c: "copa",  home: "Real Sociedad",away:"Barcelona",      score: null,    status: "upcoming" },

    /* === Spanish Super Cup 西超杯 (Saudi Arabia, Jan 2026) === */
    { d: "2026-01-08", t: "22:00", c: "super", home: "Barcelona",   away: "Athletic",       score: [2, 0], status: "finished" },
    { d: "2026-01-11", t: "22:00", c: "super", home: "Real Madrid", away: "Barcelona",      score: [1, 3], status: "finished" }
];

/* ---------- Static UI strings (bilingual) ---------- */
const T = {
    // topbar
    nav_home:     { en: "HOME",      cn: "首页" },
    nav_squad: { en: "SQUAD",       cn: "阵容" },
    nav_formation: { en: "FORMATION", cn: "阵型" },
    nav_bench: { en: "BENCH",       cn: "替补席" },
    nav_fixtures: { en: "FIXTURES",  cn: "赛程" },
    nav_stats: { en: "STATS",       cn: "数据" },
    nav_honors: { en: "HONORS",     cn: "荣誉" },
    season: { en: "SEASON 2025 / 26", cn: "2025 / 26 赛季" },
    // hero
    kicker: { en: "LA LIGA · 1ST TEAM ROSTER · LA MASIA DNA", cn: "西甲 · 一线队名单 · 拉玛西亚血统" },
    title_cn: { en: "巴塞罗那俱乐部",  cn: "巴塞罗那俱乐部" },
    title_es: { en: "Fútbol Club Barcelona",  cn: "Fútbol Club Barcelona" },
    lede: {
        en: "A dossier of FC Barcelona's 2025/26 first eleven — jersey numbers, careers, honours and the rise and fall of market value.",
        cn: "一份关于巴塞罗那 2025/26 赛季首发十一人的人物志——号码、轨迹、荣誉与身价的涨跌曲线。"
    },
    motto: { en: "MÉS QUE UN CLUB", cn: "不止是一家俱乐部" },
    motto_sub: { en: "MORE THAN A CLUB", cn: "MÉS QUE UN CLUB" },
    cta_squad: { en: "View Squad", cn: "查看首发名单" },
    cta_formation: { en: "4-3-3 Formation", cn: "4-3-3 阵型" },
    formation_label: { en: "FORMATION", cn: "阵型" },
    legend_gk: { en: "GOALKEEPER",  cn: "门将" },
    legend_def: { en: "DEFENDERS",  cn: "后卫" },
    legend_mid: { en: "MIDFIELDERS", cn: "中场" },
    legend_att: { en: "FORWARDS",   cn: "前锋" },
    // section: starters
    sec_starters_num: "02 / XI",
    sec_starters_title: { en: "STARTING LINEUP",  cn: "首发阵容" },
    sec_starters_sub: {
        en: "Click any player to view full profile, honours, transfers and Transfermarkt valuation.",
        cn: "点击任意球员，查看完整资料、荣誉、转会记录与德转身价走势。"
    },
    // section: bench
    sec_bench_num: "02.B / XII-XIX",
    sec_bench_title: { en: "SUBSTITUTES & RESERVES", cn: "替补与轮换" },
    sec_bench_sub: {
        en: "Squad rotation, tactical alternatives and injury cover for the 2025/26 campaign.",
        cn: "2025/26 赛季的阵容轮换、战术替代与伤补方案。"
    },
    // section: honors
    sec_honors_num:   { en: "05 / HONORS",     cn: "05 / 荣誉" },
    sec_honors_title: { en: "THE SHOWCASE",    cn: "荣誉陈列" },
    sec_honors_sub:   { en: "Trophy case — 5 major competitions, 81 trophies total", cn: "俱乐部历史奖杯陈列 · 5 大赛事 81 座奖杯" },
    // modal tabs
    tab_profile: { en: "Profile",    cn: "个人资料" },
    tab_honors:  { en: "Honors",     cn: "荣誉" },
    tab_transfers: { en: "Transfers", cn: "转会记录" },
    tab_value:   { en: "Market Value", cn: "德转身价" },
    // profile labels
    prof_name: { en: "Full Name",          cn: "全名" },
    prof_pos:  { en: "Position",           cn: "位置" },
    prof_age:  { en: "Age",                cn: "年龄" },
    prof_nat:  { en: "Nationality",        cn: "国籍" },
    prof_height: { en: "Height",            cn: "身高" },
    prof_foot: { en: "Preferred Foot",     cn: "惯用脚" },
    prof_dob:  { en: "Date of Birth",      cn: "出生日期" },
    prof_bp:   { en: "Birthplace",         cn: "出生地" },
    prof_num:  { en: "Squad Number",       cn: "球衣号码" },
    prof_contract: { en: "Contract",      cn: "合同期" },
    // stat strip
    stat_apps: { en: "APPEARANCES", cn: "出场数" },
    stat_apps_hint: { en: "FOR FCB", cn: "代表巴萨" },
    stat_goals: { en: "GOALS", cn: "进球" },
    stat_goals_hint: { en: "COMPETITIVE", cn: "正式比赛" },
    stat_assists: { en: "ASSISTS", cn: "助攻" },
    stat_assists_hint: { en: "COMPETITIVE", cn: "正式比赛" },
    stat_trophies: { en: "TROPHIES", cn: "奖杯" },
    stat_trophies_hint: { en: "SINCE DEBUT", cn: "自首秀以来" },
    // quick stats (modal hero)
    q_age: { en: "AGE", cn: "年龄" },
    q_height: { en: "HEIGHT", cn: "身高" },
    q_foot: { en: "FOOT", cn: "惯用脚" },
    q_contract: { en: "CONTRACT", cn: "合同期" },
    // honor groups
    hon_club: { en: "Club Honors · 俱乐部荣誉", cn: "俱乐部荣誉" },
    hon_nt:   { en: "National Team · 国家队荣誉", cn: "国家队荣誉" },
    hon_ind:  { en: "Individual · 个人荣誉", cn: "个人荣誉" },
    // value chart
    val_now:  { en: "Latest",  cn: "最新身价" },
    val_peak: { en: "Peak",    cn: "历史峰值" },
    val_yoy:  { en: "YoY Change", cn: "年度变化" },
    val_unit: { en: "Unit: € millions (Transfermarkt)", cn: "单位：百万欧元（数据来源：Transfermarkt 德转）" },
    val_source: { en: "Source: Transfermarkt", cn: "数据来源：德转" },
    val_none: { en: "No records", cn: "暂无记录" },
    // transfer
    trf_none: { en: "No transfers (academy graduate)", cn: "暂无转会记录（青训出身）" },
    // honor card labels
    la_liga: "LA LIGA", copa_rey: "COPA DEL REY", supercopa: "SUPERCOPA",
    ucl: "UCL", cwc: "FIFA CWC",
    // footer
    footer_copy: { en: "© FC BARCELONA · FIRST XI DOSSIER", cn: "© 巴塞罗那足球俱乐部 · 首发人物志" },
    footer_design: { en: "DESIGNED IN BLAUGRANA", cn: "用红蓝军团色设计" },
    footer_fans: { en: "FOR FANS, BY FANS", cn: "为球迷 · 由球迷" },
    // honor section
    honor_laliga: { en: "LA LIGA", cn: "西甲" },
    honor_copa:   { en: "COPA DEL REY", cn: "国王杯" },
    honor_ucl:    { en: "UCL", cn: "欧冠" },
    honor_super:  { en: "SUPERCOPA", cn: "超级杯" },
    honor_cwc:    { en: "FIFA CWC", cn: "世俱杯" },

    // fixtures section
    sec_fixtures_num:  { en: "02.C / MATCHES", cn: "02.C / 比赛" },
    sec_fixtures_title:{ en: "FIXTURES & RESULTS", cn: "赛程与结果" },
    sec_fixtures_sub:  { en: "数据来源：365scores.com  ·  包含西甲、欧冠、国王杯、西超杯、世俱杯", cn: "Data source: 365scores.com  ·  La Liga, UCL, Copa, Supercopa, CWC" },
    fx_all:            { en: "ALL · 全部",      cn: "全部" },
    fx_laliga:         { en: "LA LIGA · 西甲",  cn: "西甲" },
    fx_ucl:            { en: "UCL · 欧冠",      cn: "欧冠" },
    fx_copa:           { en: "COPA · 国王杯",   cn: "国王杯" },
    fx_super:          { en: "SUPER · 超级杯",  cn: "超级杯" },
    fx_cwc:            { en: "CWC · 世俱杯",    cn: "世俱杯" },
    fx_sort_label:     { en: "Sort · 排序",     cn: "排序" },
    fx_sort_newest:    { en: "Newest first · 最新优先", cn: "最新优先" },
    fx_sort_oldest:    { en: "Oldest first · 最早优先", cn: "最早优先" },
    fx_sort_upcoming:  { en: "Upcoming · 待比赛", cn: "待比赛" },
    fx_empty:          { en: "暂无比赛数据 · No matches", cn: "暂无比赛数据" },
    fx_src_prefix:     { en: "数据源：", cn: "Data source: " },
    fx_cache_tag:      { en: "缓存于 localStorage", cn: "Cached in localStorage" },
    fx_status_finished:{ en: "FT",        cn: "完赛" },
    fx_status_live:    { en: "LIVE",      cn: "进行中" },
    fx_status_upcoming:{ en: "KO",        cn: "开球" },
    fx_status_postponed:{en: "PP",        cn: "延期" },
    fx_vs:             { en: "VS",        cn: "VS" },

    // home page
    mod_squad_t:    { en: "SQUAD · Full Roster",        cn: "SQUAD · 全员名单" },
    mod_squad_d:    { en: "23 players (11 starters + 12 subs) with position / number filters.", cn: "23 名球员（11 首发 + 12 替补），可按位置 / 号码筛选。" },
    mod_formation_t:{ en: "FORMATION · 4-3-3 Layout",   cn: "FORMATION · 4-3-3 阵型" },
    mod_formation_d:{ en: "Visual pitch layout of the starting XI with line highlighting.",        cn: "首发十一人在球场上的位置排布，每条线单独高亮。" },
    mod_bench_t:    { en: "BENCH · Substitutes",        cn: "BENCH · 替补席" },
    mod_bench_d:    { en: "12 substitutes and rotation options, with full details.",                cn: "12 名替补与轮换球员的详细资料。" },
    mod_fixtures_t: { en: "FIXTURES · Match Schedule",  cn: "FIXTURES · 赛程" },
    mod_fixtures_d: { en: "All competitions: La Liga, UCL, Copa, Supercopa, CWC.",                  cn: "西甲、欧冠、国王杯、西超杯、世俱杯全部赛事结果与待比赛。" },
    mod_honors_t:   { en: "HONORS · Trophy Case",       cn: "HONORS · 荣誉陈列" },
    mod_honors_d:   { en: "27 La Liga · 31 Copa · 5 UCL · 15 Supercopa · 3 CWC.",                    cn: "俱乐部历史奖杯陈列：27 西甲、31 国王杯、5 欧冠、15 超级杯、3 世俱杯。" },
    sec_spot_num:   { en: "02 / FOCUS",                cn: "02 / 焦点" },
    sec_spot_title: { en: "FOCUS PLAYERS",             cn: "焦点球员" },
    sec_spot_sub:   { en: "Top 3 market-value players — click for full profile.", cn: "德转身价排名前三的核心球员 —— 点击查看完整资料。" },
    cta_bench:      { en: "Bench · 替补席",            cn: "替补席" },
    cta_fixtures:   { en: "Fixtures · 赛程",           cn: "赛程" },

    // page heroes
    sec_squad_num:    { en: "01 / SQUAD",     cn: "01 / 阵容" },
    sec_squad_title:  { en: "FULL SQUAD",     cn: "全员名单" },
    sec_squad_sub:    { en: "23 players · 11 starters + 12 subs · filter by position / number · click for details", cn: "23 名球员 · 11 首发 + 12 替补 · 按位置/号码筛选 · 点击查看详细资料" },
    sec_formation_num:{ en: "02 / FORMATION", cn: "02 / 阵型" },
    sec_formation_title: { en: "4-3-3 STARTING XI", cn: "4-3-3 首发十一人" },
    sec_formation_sub:   { en: "Pitch layout of starting XI · hover a line to highlight · click a player for details", cn: "首发十一人在球场上的位置排布 · 悬停高亮单条线 · 点击球员查看完整资料" },
    sec_bench_num:    { en: "03 / BENCH",     cn: "03 / 替补席" },
    sec_bench_title:  { en: "SUBSTITUTES & RESERVES", cn: "替补与轮换" },
    sec_bench_sub:    { en: "12 subs and rotation options · click a card for full details", cn: "12 名替补与轮换球员 · 点击卡片查看完整资料" },

    // position chips
    fx_gk: { en: "GK · 门将",  cn: "门将" },
    fx_df: { en: "DF · 后卫",  cn: "后卫" },
    fx_mf: { en: "MF · 中场",  cn: "中场" },
    fx_fw: { en: "FW · 前锋",  cn: "前锋" }
};

/* Helper to render a bilingual string from a {en, cn} object.
   If the two values are identical, render once (no separator). */
function biStr(obj) {
    if (!obj) return "";
    if (typeof obj === 'string') return obj;
    if (LANG.current === 'en') return obj.en;
    if (LANG.current === 'cn') return obj.cn;
    /* deduplicate: if EN and CN are the same (e.g. official names like
       "巴塞罗那俱乐部" / "Fútbol Club Barcelona"), render only once */
    if (obj.en === obj.cn) return obj.en;
    return `<span class="en">${obj.en}</span><span class="bi-sep"> · </span><span class="cn">${obj.cn}</span>`;
}

/* Helper to get a value with EN/CN pair (returns HTML) */
function biField(enVal, cnVal) {
    if (LANG.current === 'en') return `<span class="en">${enVal}</span>`;
    if (LANG.current === 'cn') return `<span class="cn">${cnVal}</span>`;
    return `<span class="en">${enVal}</span><span class="bi-sep"> · </span><span class="cn">${cnVal}</span>`;
}

/* ---------- Photo URL helper with localStorage cache ---------- */
const PHOTO_CACHE_KEY = "fcb-photo-cache-v1";
function loadPhotoCache() {
    try { return JSON.parse(localStorage.getItem(PHOTO_CACHE_KEY) || "{}"); }
    catch { return {}; }
}
function savePhotoCache(cache) {
    try { localStorage.setItem(PHOTO_CACHE_KEY, JSON.stringify(cache)); } catch {}
}
function photoURL(p) {
    if (!p.photoFile) return "";
    // direct URL field takes priority (real photo)
    if (p.photo) return p.photo;
    // fallback: Wikimedia FilePath
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.photoFile)}.jpg?width=480`;
}
function markPhotoResult(name, ok) {
    const cache = loadPhotoCache();
    cache[name] = ok ? "ok" : "fail";
    cache[name + "_ts"] = Date.now();
    savePhotoCache(cache);
}
function shouldTryPhoto(name) {
    const cache = loadPhotoCache();
    // skip retry within 1 hour if previously failed
    if (cache[name] === "fail") {
        const ts = cache[name + "_ts"] || 0;
        if (Date.now() - ts < 3600 * 1000) return false;
    }
    return true;
}
function imgTagWithCache(p, extraClass = "card__photo") {
    if (!shouldTryPhoto(p.name)) return "";  // skip; SVG fallback will be shown
    return `<img class="${extraClass}" src="${photoURL(p)}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer"
        onload="markPhotoResult('${p.name.replace(/'/g, "\\'")}', true)"
        onerror="markPhotoResult('${p.name.replace(/'/g, "\\'")}', false);this.classList.add('is-failed')" />`;
}

/* ---------- SVG portrait fallback ---------- */
function portraitSVG(player, opts = {}) {
    const { large = false } = opts;
    const accent = player.pos === "GK" ? "#C9A961"
                  : player.pos === "DF" ? "#004D98"
                  : player.pos === "MF" ? "#A50044"
                  : "#0A2540";
    const bgFrom = "#ECE3D2";
    const bgTo   = "#F5EFE6";
    const num    = player.num;
    const skin   = "#E5C8A6";

    return `
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${player.name} portrait placeholder">
      <defs>
        <linearGradient id="bg-${player.id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgFrom}"/>
          <stop offset="100%" stop-color="${bgTo}"/>
        </linearGradient>
        <linearGradient id="jr-${player.id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity=".7"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="240" height="240" fill="url(#bg-${player.id})"/>
      <rect x="0" y="0" width="240" height="48" fill="#A50044" opacity=".9"/>
      <rect x="0" y="48" width="240" height="12" fill="#0A2540"/>
      <rect x="0" y="60" width="240" height="6" fill="#C9A961"/>
      <circle cx="120" cy="130" r="86" fill="${accent}" opacity=".08"/>
      <circle cx="120" cy="130" r="68" fill="${accent}" opacity=".12"/>
      <circle cx="120" cy="108" r="32" fill="${skin}"/>
      <path d="M88 108 Q88 76 120 76 Q152 76 152 108 Q152 96 144 90 Q132 84 120 84 Q108 84 96 90 Q88 96 88 108 Z" fill="#0A2540" opacity=".9"/>
      <rect x="110" y="138" width="20" height="14" fill="${skin}"/>
      <path d="M64 220 Q64 168 110 154 L130 154 Q176 168 176 220 Z" fill="url(#jr-${player.id})"/>
      <path d="M104 156 L120 170 L136 156" fill="none" stroke="#F5EFE6" stroke-width="2"/>
      <path d="M70 218 L70 200 L82 196 L82 218 Z" fill="#004D98" opacity=".85"/>
      <path d="M158 218 L158 200 L170 196 L170 218 Z" fill="#A50044" opacity=".85"/>
      <text x="120" y="208" text-anchor="middle" font-family="Anton, sans-serif" font-size="46" fill="#F5EFE6" font-weight="700">${num}</text>
      <text x="${large ? 200 : 220}" y="232" text-anchor="end" font-family="Anton, sans-serif" font-size="${large ? 120 : 80}" fill="${accent}" opacity=".14" font-weight="700">${num}</text>
    </svg>`;
}

/* ---------- Card HTML for starter ---------- */
function starterCardHTML(p, i) {
    return `
    <article class="card" data-pos="${p.pos}" data-id="${p.id}" style="--d:${(i * 70) + 60}ms" tabindex="0" role="button" aria-label="${p.name} 详情">
        <div class="card__head">
            <div class="card__num">${p.num}<small>${biField(p.role, p.roleCn)}</small></div>
            <div class="card__pos"><span>${p.pos}</span></div>
        </div>
        <div class="card__portrait">
            ${portraitSVG(p)}
            ${imgTagWithCache(p)}
        </div>
        <h3 class="card__name">${biField(p.name, p.nameCn)}</h3>
        <div class="card__meta">
            <span>${biField(POS[p.pos].en, POS[p.pos].cn)}</span>
            <strong>€${p.val}M</strong>
        </div>
    </article>`;
}

/* ---------- Card HTML for bench ---------- */
function benchCardHTML(p, i) {
    return `
    <article class="bcard" data-pos="${p.pos}" data-id="${p.id}" style="--d:${(i * 50) + 60}ms" tabindex="0" role="button" aria-label="${p.name} 详情">
        <div class="bcard__photo">
            ${portraitSVG(p)}
            ${imgTagWithCache(p, "card__photo bcard__photo--img")}
        </div>
        <div class="bcard__body">
            <div class="bcard__head">
                <span class="bcard__num">${p.num}</span>
                <span class="bcard__pos">${p.pos} <em>·</em> ${biField(POS[p.pos].en, POS[p.pos].cn)}</span>
            </div>
            <h3 class="bcard__name">${biField(p.name, p.nameCn)}</h3>
            <div class="bcard__role">${biField(p.role, p.roleCn)}</div>
            <div class="bcard__foot">
                <span class="bcard__nat">${biField(p.nat, p.natCn)}</span>
                <span class="bcard__val">€${p.val}M</span>
            </div>
        </div>
    </article>`;
}

/* Squad-grid card (used in /squad.html) — wider layout with detailed chips */
function squadCardHTML(p, i) {
    return `
    <article class="scard" data-pos="${p.pos}" data-id="${p.id}" style="--d:${(i * 30) + 60}ms" tabindex="0" role="button" aria-label="${p.name} 详情">
        <div class="scard__photo">
            ${portraitSVG(p)}
            ${imgTagWithCache(p, "card__photo scard__photo--img")}
            <span class="scard__num">${p.num}</span>
        </div>
        <div class="scard__body">
            <h3 class="scard__name">${biField(p.name, p.nameCn)}</h3>
            <div class="scard__role">${biField(p.role, p.roleCn)} <em>·</em> ${biField(POS[p.pos].en, POS[p.pos].cn)}</div>
            <div class="scard__chips">
                <span class="scard__chip">${p.age}<em> · </em>${biField('AGE', '岁')}</span>
                <span class="scard__chip">${p.nat} · ${p.natCn}</span>
                <span class="scard__chip">${p.h}cm</span>
                <span class="scard__chip">${p.foot} · ${p.footCn}</span>
            </div>
            <div class="scard__val">€${p.val}M</div>
        </div>
    </article>`;
}

/* ---------- Render all cards ---------- */
function renderAll() {
    // pitch formation rows (formation page)
    Object.entries(FORMATION).forEach(([pos, names]) => {
        const row = document.querySelector(`.pitch__row[data-row="${pos}"]`);
        if (!row) return;
        names.forEach((name, i) => {
            const p = PLAYERS.find(x => x.name === name);
            if (!p) return;
            const html = starterCardHTML(p, i);
            row.insertAdjacentHTML('beforeend', html);
        });
    });

    // bench grid (bench page)
    const bench = document.getElementById('bench-grid');
    if (bench) {
        bench.innerHTML = '';
        BENCH.forEach((name, i) => {
            const p = PLAYERS.find(x => x.name === name);
            if (!p) return;
            bench.insertAdjacentHTML('beforeend', benchCardHTML(p, i));
        });
    }

    // squad grid (squad page) — show all 23 players with filter
    const squad = document.getElementById('squad-grid');
    if (squad) {
        const q = (squad.dataset.q || '').toLowerCase();
        const all = PLAYERS.slice().sort((a, b) => {
            if (a.num != null && b.num != null) return a.num - b.num;
            return a.name.localeCompare(b.name);
        });
        all.forEach((p, i) => {
            if (q) {
                const hay = [p.name, p.nameCn, p.role, p.roleCn, p.nat, p.natCn, String(p.num)].join(' ').toLowerCase();
                if (!hay.includes(q)) return;
            }
            squad.insertAdjacentHTML('beforeend', squadCardHTML(p, i));
        });
        // re-wire clicks after dynamic injection
        wireCardClicks();
    }

    wireCardClicks();
    setupRevealObserver();
}

function wireCardClicks() {
    /* event delegation — works for dynamically injected cards */
    if (window.__fcbCardWired) return;
    window.__fcbCardWired = true;
    document.addEventListener('click', e => {
        const el = e.target.closest('.card, .bcard, .scard, .player-card');
        if (!el) return;
        const id = parseInt(el.dataset.id, 10);
        if (!id) return;
        const p = PLAYERS.find(x => x.id === id);
        if (p) openModal(p);
    });
    document.addEventListener('keydown', e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const el = e.target.closest('.card, .bcard, .scard, .player-card');
        if (!el) return;
        e.preventDefault();
        el.click();
    });
}

function setupRevealObserver() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('is-in');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.card, .bcard').forEach(c => io.observe(c));
}

/* =========================================================
   Fixtures module
   - localStorage cache w/ TTL (6h)
   - syncFixtures() 注入来自 API 的最新数据
   ========================================================= */
const FX_CACHE_KEY = "fcb-fixtures-v1";
const FX_CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

function loadFixturesFromCache() {
    try {
        const raw = localStorage.getItem(FX_CACHE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (Date.now() - (data.ts || 0) > FX_CACHE_TTL_MS) return null;
        return data.list;
    } catch { return null; }
}
function saveFixturesToCache(list) {
    try { localStorage.setItem(FX_CACHE_KEY, JSON.stringify({ ts: Date.now(), list })); } catch {}
}
function getFixtures() {
    const cached = loadFixturesFromCache();
    if (cached) return { list: cached, source: "cache" };
    return { list: FIXTURES_DEFAULT, source: "default" };
}

/* 异步刷新函数 —— 真实场景下可改为 fetch('https://api/.../team/132/matches') */
async function syncFixtures(apiUrl) {
    try {
        if (!apiUrl) return false;
        const r = await fetch(apiUrl, { mode: "cors" });
        if (!r.ok) return false;
        const list = await r.json();
        if (Array.isArray(list) && list.length) {
            saveFixturesToCache(list);
            renderFixtures();
            return true;
        }
    } catch (e) { console.warn("[fixtures] sync failed:", e); }
    return false;
}

const FX_STATE = { filter: "all", sort: "desc" };

function isFcb(name) { return /^Barcelona$/i.test(name); }

function fmtDay(d) {
    const dt = new Date(d + "T00:00:00");
    const dd = String(dt.getDate()).padStart(2, "0");
    const mm = dt.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const wd = dt.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
    const yy = String(dt.getFullYear());
    return { d: dd, m: mm, w: wd, y: yy };
}

function renderCrest(name) {
    /* Bulletproof team badge — renders an inline SVG element.
       No external images, no clipPath, no ID collisions, no
       font dependencies. Pure shapes + text. FC Barcelona gets
       a Blaugrana split, everyone else gets a flat colored
       disk with 3-letter monogram. */
    const v = teamVisual(name);
    const fcb = v.fcb === true;

    if (fcb) {
        /* Barcelona: red+blue split via two filled circles half-overlapping
           a clean white center disc + gold "FCB" monogram. */
        return `<span class="fx__crest is-fcb" data-team="${name}" title="${name}" aria-label="${name} crest">
        <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%;">
            <circle cx="22" cy="32" r="30" fill="#A50044"/>
            <circle cx="42" cy="32" r="30" fill="#0A2540"/>
            <circle cx="32" cy="32" r="22" fill="#FFFFFF"/>
            <text x="32" y="38" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="13" font-weight="900" fill="#A50044" letter-spacing="0.3">FCB</text>
            <line x1="8" y1="50" x2="56" y2="50" stroke="#C9A961" stroke-width="1.5"/>
        </svg>
    </span>`;
    }

    /* Generic badge: full disk in team color + contrasting monogram. */
    return `<span class="fx__crest" data-team="${name}" title="${name}" aria-label="${name} crest">
        <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%;">
            <circle cx="32" cy="32" r="30" fill="${v.color}" stroke="${v.border || 'rgba(10,37,64,.25)'}" stroke-width="2"/>
            <circle cx="32" cy="32" r="22" fill="${v.color2}" opacity="0.18"/>
            <text x="32" y="40" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-size="20" font-weight="900" fill="${v.color2}" letter-spacing="0.5">${v.init}</text>
        </svg>
    </span>`;
}

function renderFixtureRow(fx) {
    const comp = FX_COMPETITIONS[fx.c] || { en: fx.c, cn: fx.c, color: "#888" };
    const compBi = biStr(comp);
    const dt = fmtDay(fx.d);
    const homeBi = isFcb(fx.home) ? `<span class="en">Barcelona</span><span class="bi-sep"> · </span><span class="cn">巴塞罗那</span>`
                               : biStr({ en: fx.home, cn: teamCn(fx.home) });
    const awayBi = isFcb(fx.away) ? `<span class="en">Barcelona</span><span class="bi-sep"> · </span><span class="cn">巴塞罗那</span>`
                               : biStr({ en: fx.away, cn: teamCn(fx.away) });
    const statusMap = { finished: T.fx_status_finished, live: T.fx_status_live, upcoming: T.fx_status_upcoming, postponed: T.fx_status_postponed };
    const statusKey = fx.status || "upcoming";
    const statusBi = biStr(statusMap[statusKey] || T.fx_status_upcoming);
    const homeCrest = renderCrest(fx.home);
    const awayCrest = renderCrest(fx.away);
    /* build full date in DD/MM/YYYY for the top-right corner */
    const dtFull = new Date(fx.d + "T00:00:00");
    const fullDate = `${String(dtFull.getDate()).padStart(2,"0")}/${String(dtFull.getMonth()+1).padStart(2,"0")}/${dtFull.getFullYear()}`;

    /* center column: comp badge + time + score or KO */
    let centerHtml;
    if (fx.score) {
        centerHtml = `
            <div class="fx__center-comp">${compBi}</div>
            <div class="fx__center-score">
                <span class="hl">${fx.score[0]}</span><span class="vs">-</span><span class="hl">${fx.score[1]}</span>
            </div>
            <div class="fx__center-status">${statusBi}</div>`;
    } else {
        centerHtml = `
            <div class="fx__center-comp">${compBi}</div>
            <div class="fx__center-time">${fx.t}</div>
            <div class="fx__center-ko">${biStr(T.fx_status_upcoming)}</div>`;
    }

    return `
    <article class="fx" data-c="${fx.c}" data-d="${fx.d}" style="--comp-color:${comp.color}">
        <span class="fx__fulldate">${fullDate}</span>
        <div class="fx__date" aria-label="${dt.y} 年 ${dt.m} ${dt.d} 日 ${dt.w}">
            <span class="y">${dt.y}</span>
            <span class="d">${dt.d}</span>
            <span class="m">${dt.m}</span>
            <span class="w">${dt.w}</span>
        </div>
        <div class="fx__home ${isFcb(fx.home) ? "is-barcelona" : ""}">
            <span class="fx__home-name">${homeBi}</span>
            ${homeCrest}
        </div>
        <div class="fx__center">${centerHtml}</div>
        <div class="fx__away ${isFcb(fx.away) ? "is-barcelona" : ""}">
            ${awayCrest}
            <span class="fx__away-name">${awayBi}</span>
        </div>
    </article>`;
}

function teamCn(name) {
    /* 常用球队中文名映射 */
    const m = {
        "Barcelona": "巴塞罗那",
        "Real Madrid": "皇家马德里",
        "Atlético": "马德里竞技",
        "Athletic": "毕尔巴鄂竞技",
        "Athletic Club": "毕尔巴鄂竞技",
        "Sevilla": "塞维利亚",
        "Real Sociedad": "皇家社会",
        "Real Betis": "皇家贝蒂斯",
        "Villarreal": "比利亚雷亚尔",
        "Valencia": "瓦伦西亚",
        "Getafe": "赫塔费",
        "Girona": "赫罗纳",
        "Rayo": "巴列卡诺",
        "Osasuna": "奥萨苏纳",
        "Celta Vigo": "塞尔塔",
        "Mallorca": "马略卡",
        "Las Palmas": "拉斯帕尔马斯",
        "Leganés": "莱加内斯",
        "Espanyol": "西班牙人",
        "Alavés": "阿拉维斯",
        "Levante": "莱万特",
        "Elche": "埃尔切",
        "Real Oviedo": "奥维多",
        "Eibar": "埃瓦尔",
        "Cartagena": "卡塔赫纳",
        "Manchester City": "曼城",
        "Manchester United": "曼联",
        "Man United": "曼联",
        "Chelsea": "切尔西",
        "Arsenal": "阿森纳",
        "Liverpool": "利物浦",
        "Tottenham": "热刺",
        "Bayern Munich": "拜仁慕尼黑",
        "Bayern": "拜仁慕尼黑",
        "Borussia Dortmund": "多特蒙德",
        "Eintracht": "法兰克福",
        "PSG": "巴黎圣日耳曼",
        "Paris SG": "巴黎圣日耳曼",
        "Marseille": "马赛",
        "Lyon": "里昂",
        "Monaco": "摩纳哥",
        "Juventus": "尤文图斯",
        "Inter": "国际米兰",
        "AC Milan": "AC 米兰",
        "Roma": "罗马",
        "Napoli": "那不勒斯",
        "Atalanta": "亚特兰大",
        "Newcastle": "纽卡斯尔",
        "Al Ahly": "阿尔阿赫利",
        "Fluminense": "弗鲁米嫩塞",
        "Boca Juniors": "博卡青年",
        "River Plate": "河床",
        "Palmeiras": "帕尔梅拉斯",
        "Olympiacos": "奥林匹亚科斯",
        "Slavia Praha": "布拉格斯拉维亚",
        "Club Brugge": "布鲁日"
    };
    return m[name] || name;
}

/* =========================================================
   Team crests — generates an inline SVG badge for each team
   using their official primary color and 3-letter abbreviation.
   Inline SVG = no 404s, no CORS, no external dependencies,
   instant load, perfect for editorial display.
   ========================================================= */
const TEAM_VISUAL = {
    "Barcelona":         { color: "#A50044", color2: "#0A2540", init: "FCB", fcb: true },
    "Real Madrid":       { color: "#FFFFFF", color2: "#0A2540", init: "RMA", border: "#0A2540" },
    "Atlético":          { color: "#CB3524", color2: "#FFFFFF", init: "ATM" },
    "Atlético Madrid":   { color: "#CB3524", color2: "#FFFFFF", init: "ATM" },
    "Athletic":          { color: "#CB3524", color2: "#FFFFFF", init: "ATH" },
    "Athletic Club":     { color: "#CB3524", color2: "#FFFFFF", init: "ATH" },
    "Sevilla":           { color: "#D71920", color2: "#FFFFFF", init: "SEV" },
    "Real Sociedad":     { color: "#0067B1", color2: "#FFFFFF", init: "RSO" },
    "Real Betis":         { color: "#00954C", color2: "#FFFFFF", init: "BET" },
    "Villarreal":        { color: "#FFE114", color2: "#005187", init: "VIL" },
    "Valencia":          { color: "#EE3522", color2: "#FFFFFF", init: "VAL" },
    "Getafe":            { color: "#005CA9", color2: "#FFFFFF", init: "GET" },
    "Girona":            { color: "#CD2534", color2: "#FFFFFF", init: "GIR" },
    "Rayo":              { color: "#FFFFFF", color2: "#CB3524", init: "RAY", border: "#CB3524" },
    "Osasuna":           { color: "#0A2D5E", color2: "#A50044", init: "OSA" },
    "Celta Vigo":        { color: "#8ECCE6", color2: "#0A2D5E", init: "CEL" },
    "Mallorca":          { color: "#CD2534", color2: "#000000", init: "MLL" },
    "Espanyol":          { color: "#003F87", color2: "#FFFFFF", init: "ESP" },
    "Alavés":            { color: "#0F47AF", color2: "#FFFFFF", init: "ALA" },
    "Las Palmas":        { color: "#FFD400", color2: "#0A2D5E", init: "LPA" },
    "Leganés":           { color: "#0A2D5E", color2: "#FFFFFF", init: "LEG" },
    "Levante":           { color: "#A50044", color2: "#0A2540", init: "LEV" },
    "Elche":             { color: "#056937", color2: "#FFFFFF", init: "ELC" },
    "Real Oviedo":       { color: "#0A2D5E", color2: "#FFFFFF", init: "OVI" },
    "Eibar":             { color: "#A50044", color2: "#0A2540", init: "EIB" },
    "Cartagena":         { color: "#000000", color2: "#FFFFFF", init: "CAR" },
    "Manchester City":   { color: "#6CABDD", color2: "#FFFFFF", init: "MCI" },
    "Manchester United": { color: "#DA291C", color2: "#FBE122", init: "MUN" },
    "Man United":        { color: "#DA291C", color2: "#FBE122", init: "MUN" },
    "Chelsea":           { color: "#034694", color2: "#FFFFFF", init: "CHE" },
    "Arsenal":           { color: "#EF0107", color2: "#FFFFFF", init: "ARS" },
    "Liverpool":         { color: "#C8102E", color2: "#F6EB61", init: "LIV" },
    "Tottenham":         { color: "#0A2540", color2: "#FFFFFF", init: "TOT" },
    "Newcastle":         { color: "#241F20", color2: "#FFFFFF", init: "NEW" },
    "Bayern Munich":     { color: "#DC052D", color2: "#0066B2", init: "FCB" },
    "Bayern":            { color: "#DC052D", color2: "#0066B2", init: "FCB" },
    "Borussia Dortmund": { color: "#FDE100", color2: "#000000", init: "BVB" },
    "Eintracht":         { color: "#000000", color2: "#E10019", init: "SGE" },
    "PSG":               { color: "#004170", color2: "#DA291C", init: "PSG" },
    "Paris SG":          { color: "#004170", color2: "#DA291C", init: "PSG" },
    "Marseille":         { color: "#2FAEE0", color2: "#FFFFFF", init: "OM" },
    "Lyon":              { color: "#1A4B9B", color2: "#FFFFFF", init: "OL" },
    "Monaco":            { color: "#E7192F", color2: "#FFFFFF", init: "ASM" },
    "Juventus":          { color: "#000000", color2: "#FFFFFF", init: "JUV" },
    "Inter":             { color: "#0033A0", color2: "#000000", init: "INT" },
    "AC Milan":          { color: "#FB090B", color2: "#000000", init: "MIL" },
    "Roma":              { color: "#8E1F2F", color2: "#F5A01B", init: "ROM" },
    "Napoli":            { color: "#0E84B5", color2: "#FFFFFF", init: "NAP" },
    "Atalanta":          { color: "#1E71B8", color2: "#000000", init: "ATA" },
    "Al Ahly":           { color: "#E30613", color2: "#FFFFFF", init: "AHL" },
    "Fluminense":        { color: "#7A003C", color2: "#006437", init: "FLU" },
    "Boca Juniors":      { color: "#0E2D87", color2: "#FCE300", init: "BOC" },
    "River Plate":       { color: "#FFFFFF", color2: "#CB3524", init: "RIV", border: "#CB3524" },
    "Palmeiras":         { color: "#006437", color2: "#FFFFFF", init: "PAL" },
    "Olympiacos":        { color: "#C8102E", color2: "#FFFFFF", init: "OLY" },
    "Slavia Praha":      { color: "#D8121F", color2: "#FFFFFF", init: "SLV" },
    "Club Brugge":       { color: "#003F87", color2: "#FFD400", init: "CLB" }
};

function teamVisual(name) {
    if (!name || name === "TBD" || name === "?") {
        return { color: "#999", color2: "#666", init: "TBD", border: "#999" };
    }
    if (TEAM_VISUAL[name]) return TEAM_VISUAL[name];
    if (name === "Atlético") return TEAM_VISUAL["Atlético Madrid"];
    /* fall back: derive from name */
    return {
        color: "#3A5F8F", color2: "#FFFFFF",
        init: teamInitials(name)
    };
}

function teamCrestUrl(name) { return null; /* not used — we render inline SVG instead */ }

function teamInitials(name) {
    if (!name) return "TBD";
    if (name === "TBD" || name === "?") return "TBD";
    const map = {
        "Barcelona": "FCB", "Real Madrid": "RMA", "Atlético": "ATM",
        "Athletic": "ATH", "Athletic Club": "ATH",
        "Real Sociedad": "RSO", "Real Betis": "BET", "Real Oviedo": "OVI",
        "Sevilla": "SEV", "Cartagena": "CAR", "PSG": "PSG", "Paris SG": "PSG"
    };
    return map[name] || name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
}

function renderFixtures() {
    const list = document.getElementById("fx-list");
    const empty = document.getElementById("fx-empty");
    const tag = document.getElementById("fx-cache-tag");
    if (!list) return;
    const { list: matches, source } = getFixtures();
    if (tag) {
        tag.textContent = LANG.current === "en"
            ? (source === "cache" ? "loaded from cache · TTL 6h" : "static fallback · expires in 6h")
            : (source === "cache" ? "已从缓存读取 · 有效期 6 小时" : "静态默认数据 · 6 小时后过期");
    }
    let view = matches.slice();
    if (FX_STATE.filter !== "all") view = view.filter(m => m.c === FX_STATE.filter);
    if (FX_STATE.sort === "desc") view.sort((a, b) => b.d.localeCompare(a.d));
    else if (FX_STATE.sort === "asc") view.sort((a, b) => a.d.localeCompare(b.d));
    else if (FX_STATE.sort === "upcoming") {
        const now = new Date().toISOString().slice(0, 10);
        view = view.filter(m => m.status === "upcoming" || m.d >= now);
        view.sort((a, b) => a.d.localeCompare(b.d));
    }
    if (!view.length) {
        list.innerHTML = "";
        empty.hidden = false;
        return;
    }
    empty.hidden = true;
    list.innerHTML = view.map(renderFixtureRow).join("");
    /* Intersection reveal (with safety fallback) */
    if (!("IntersectionObserver" in window)) {
        list.querySelectorAll(".fx").forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
        });
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.style.opacity = "1";
                en.target.style.transform = "translateX(0)";
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.01, rootMargin: "0px 0px -10% 0px" });
    list.querySelectorAll(".fx").forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateX(-12px)";
        el.style.transition = `opacity .4s ${i * 30}ms ease, transform .4s ${i * 30}ms ease`;
        io.observe(el);
    });
    /* Safety net: if IO never fires (e.g. items are above the fold
       and threshold isn't met, or browser bug), force them visible
       after 800ms no matter what. */
    setTimeout(() => {
        list.querySelectorAll(".fx").forEach(el => {
            if (el.style.opacity === "0") {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
            }
        });
    }, 800);
}

function wireFixtures() {
    const chips = document.querySelectorAll("#fx-chips .fx-chip");
    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => { c.classList.remove("is-active"); c.setAttribute("aria-selected", "false"); });
            chip.classList.add("is-active");
            chip.setAttribute("aria-selected", "true");
            FX_STATE.filter = chip.dataset.fx;
            renderFixtures();
        });
    });
    const sortEl = document.getElementById("fx-sort");
    if (sortEl) sortEl.addEventListener("change", e => { FX_STATE.sort = e.target.value; renderFixtures(); });
}

/* ---------- Modal ---------- */
function openModal(p) {
    document.activeElement?.blur?.();
    const m = document.getElementById('modal');
    m.setAttribute('aria-hidden', 'false');
    m.classList.add('is-open');
    document.body.classList.add('is-locked');

    // Hero
    document.getElementById('modal-portrait').innerHTML = portraitSVG(p, { large: true }) +
        imgTagWithCache(p, "card__photo modal__photo--img");
    document.getElementById('modal-num').textContent = p.num;
    document.getElementById('modal-pos').innerHTML = `<span>${p.pos}</span>`;
    document.getElementById('modal-name').innerHTML = biField(p.name, p.nameCn);
    document.getElementById('modal-sub').innerHTML =
        `${biField(p.role, p.roleCn)} · ${biField(p.nat, p.natCn)} · #${p.num}`;
    document.getElementById('modal-quick').innerHTML = `
        <div><span>${biStr(T.q_age)}</span><strong>${p.age}</strong></div>
        <div><span>${biStr(T.q_height)}</span><strong>${p.h} ${LANG.current === 'cn' ? '厘米' : 'cm'}</strong></div>
        <div><span>${biStr(T.q_foot)}</span><strong>${biField(p.foot, p.footCn)}</strong></div>
        <div><span>${biStr(T.q_contract)}</span><strong>${biField(p.contract, p.contractCn)}</strong></div>
    `;

    // Stats strip
    document.getElementById('modal-stats').innerHTML = `
        <div class="stat"><span class="stat__label">${biStr(T.stat_apps)}</span>
            <span class="stat__value">${p.apps}</span>
            <span class="stat__hint">${biStr(T.stat_apps_hint)}</span></div>
        <div class="stat"><span class="stat__label">${biStr(T.stat_goals)}</span>
            <span class="stat__value">${p.goals}</span>
            <span class="stat__hint">${biStr(T.stat_goals_hint)}</span></div>
        <div class="stat"><span class="stat__label">${biStr(T.stat_assists)}</span>
            <span class="stat__value">${p.assists}</span>
            <span class="stat__hint">${biStr(T.stat_assists_hint)}</span></div>
        <div class="stat"><span class="stat__label">${biStr(T.stat_trophies)}</span>
            <span class="stat__value">${p.trophies}</span>
            <span class="stat__hint">${biStr(T.stat_trophies_hint)}</span></div>
    `;

    // Profile
    const posEn = `${POS[p.pos].en} · ${p.role}`;
    const posCn = `${POS[p.pos].cn} · ${p.roleCn}`;
    document.getElementById('panel-profile').innerHTML = `
        <div><dt>${biStr(T.prof_name)}</dt><dd>${biField(p.name, p.nameCn)}</dd></div>
        <div><dt>${biStr(T.prof_pos)}</dt><dd>${biField(posEn, posCn)}</dd></div>
        <div><dt>${biStr(T.prof_age)}</dt><dd>${p.age}</dd></div>
        <div><dt>${biStr(T.prof_nat)}</dt><dd>${biField(p.nat, p.natCn)}</dd></div>
        <div><dt>${biStr(T.prof_height)}</dt><dd>${p.h} ${LANG.current === 'cn' ? '厘米' : 'cm'}</dd></div>
        <div><dt>${biStr(T.prof_foot)}</dt><dd>${biField(p.foot, p.footCn)}</dd></div>
        <div><dt>${biStr(T.prof_dob)}</dt><dd>${p.born}</dd></div>
        <div><dt>${biStr(T.prof_bp)}</dt><dd>${biField(p.bornPlace, p.bornPlaceCn)}</dd></div>
        <div><dt>${biStr(T.prof_num)}</dt><dd>#${p.num}</dd></div>
        <div><dt>${biStr(T.prof_contract)}</dt><dd>${biField(p.contract, p.contractCn)}</dd></div>
    `;

    // Honors
    const honList = (arr) => arr.length
        ? `<ul>${arr.map(h => `<li><span>${biField(h.t, h.tCn)}</span><strong>${h.y} · ${biField(h.n, h.nCn)}</strong></li>`).join("")}</ul>`
        : `<ul><li><span>${biField("—", "—")}</span><strong>${biField("—", "—")}</strong></li></ul>`;
    document.getElementById('panel-honors').innerHTML = `
        <div class="honor-group"><h4>${biStr(T.hon_club)}</h4>${honList(p.hon.club)}</div>
        <div class="honor-group"><h4>${biStr(T.hon_nt)}</h4>${honList(p.hon.nt)}</div>
        <div class="honor-group" style="grid-column:1/-1"><h4>${biStr(T.hon_ind)}</h4>${honList(p.hon.ind)}</div>
    `;

    // Transfers
    if (p.trf.length) {
        document.getElementById('panel-transfers').innerHTML = p.trf.map(t => `
            <li>
                <span class="transfers__date">${t.date}</span>
                <div class="transfers__body">
                    <div class="transfers__pair">
                        <span>${biField(t.from, t.fromCn)}</span>
                        <em>→</em>
                        <span>${biField(t.to, t.toCn)}</span>
                    </div>
                    <span class="transfers__fee">${biField(t.fee, t.feeCn)}</span>
                </div>
            </li>
        `).join("");
    } else {
        document.getElementById('panel-transfers').innerHTML =
            `<li><span class="transfers__date">—</span><div class="transfers__body">${biStr(T.trf_none)}</div></li>`;
    }

    // Value
    document.getElementById('value-now').textContent = `€${p.val}M`;
    document.getElementById('value-peak').textContent = `€${p.peak}M`;
    const delta = p.val - p.prev;
    const pct = p.prev ? ((delta / p.prev) * 100).toFixed(1) : "0.0";
    const $d = document.getElementById('value-delta');
    $d.classList.remove('up', 'down', 'flat');
    if (delta > 0)      { $d.classList.add('up');   $d.innerHTML = biField(`▲ +${pct}%`, `▲ +${pct}%`); }
    else if (delta < 0) { $d.classList.add('down'); $d.innerHTML = biField(`▼ ${pct}%`, `▼ ${pct}%`); }
    else                { $d.classList.add('flat'); $d.innerHTML = biField(`■ 0.0%`, `■ 0.0%`); }

    document.getElementById('value-label-now').innerHTML = biStr(T.val_now);
    document.getElementById('value-label-peak').innerHTML = biStr(T.val_peak);
    document.getElementById('value-label-yoy').innerHTML = biStr(T.val_yoy);
    document.getElementById('value-legend').innerHTML = `${biStr(T.val_unit)} <span class="bi-sep">·</span> ${biStr(T.val_source)}`;

    renderValueChart(p);
    setActiveTab('profile');
}

function closeModal() {
    const m = document.getElementById('modal');
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
}

/* ---------- Tabs ---------- */
function setActiveTab(name) {
    document.querySelectorAll('.tab').forEach(t => {
        const active = t.dataset.tab === name;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
        // update tab text
        if (t.dataset.tab === 'profile')     t.innerHTML = biStr(T.tab_profile);
        if (t.dataset.tab === 'honors')      t.innerHTML = biStr(T.tab_honors);
        if (t.dataset.tab === 'transfers')   t.innerHTML = biStr(T.tab_transfers);
        if (t.dataset.tab === 'value')       t.innerHTML = biStr(T.tab_value);
    });
    document.querySelectorAll('.panel').forEach(pn => {
        const active = pn.dataset.panel === name;
        pn.classList.toggle('is-active', active);
        if (active) pn.removeAttribute('hidden'); else pn.setAttribute('hidden', '');
    });
}

/* ---------- Value chart (SVG) ---------- */
function renderValueChart(p) {
    const container = document.getElementById('value-chart');
    container.innerHTML = "";
    const W = 800, H = 320, P = { t: 24, r: 24, b: 36, l: 48 };
    const data = p.hist;
    const ys = data.map(d => d.v);
    const maxY = Math.max(...ys) * 1.1 || 10;
    const xScale = (i) => P.l + (W - P.l - P.r) * (i / Math.max(1, data.length - 1));
    const yScale = (v) => H - P.b - (H - P.t - P.b) * (v / maxY);

    const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(d.v).toFixed(1)}`).join(" ");
    const areaPath = `${linePath} L${xScale(data.length - 1).toFixed(1)},${(H - P.b).toFixed(1)} L${xScale(0).toFixed(1)},${(H - P.b).toFixed(1)} Z`;

    const ticks = 5;
    const gridLines = Array.from({ length: ticks + 1 }, (_, i) => {
        const y = H - P.b - (H - P.t - P.b) * (i / ticks);
        const v = (maxY * i / ticks).toFixed(0);
        return `<line x1="${P.l}" y1="${y.toFixed(1)}" x2="${W - P.r}" y2="${y.toFixed(1)}"/>
                <text x="${P.l - 8}" y="${(y + 3).toFixed(1)}" text-anchor="end">${v}</text>`;
    }).join("");

    const xLabels = data.map((d, i) => {
        return `<text x="${xScale(i).toFixed(1)}" y="${H - P.b + 18}" text-anchor="middle">${d.d}</text>`;
    }).join("");

    const points = data.map((d, i) => {
        const isPeak = d.v === p.peak;
        return `<g class="point-group">
            <circle cx="${xScale(i).toFixed(1)}" cy="${yScale(d.v).toFixed(1)}" r="5" class="point ${isPeak ? "point--peak" : ""}"/>
            <text x="${xScale(i).toFixed(1)}" y="${(yScale(d.v) - 10).toFixed(1)}" text-anchor="middle" font-family="Oswald" font-size="11" fill="#0A2540">€${d.v}M</text>
        </g>`;
    }).join("");

    container.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#A50044" stop-opacity=".45"/>
                <stop offset="100%" stop-color="#A50044" stop-opacity="0"/>
            </linearGradient>
        </defs>
        <g class="grid">${gridLines}</g>
        <g class="axis">${xLabels}</g>
        <path class="area" d="${areaPath}"/>
        <path class="line" d="${linePath}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1">
            <animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.4s" fill="freeze"/>
        </path>
        <g class="points">${points}</g>
    </svg>`;
}

/* ---------- Apply static bilingual strings ---------- */
function applyStaticStrings() {
    // Topbar
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (T[key]) el.innerHTML = biStr(T[key]);
    });
    // Tab labels (regenerate later when modal opens too)
    document.querySelectorAll('.tab').forEach(t => {
        const k = t.dataset.tab;
        const map = { profile: T.tab_profile, honors: T.tab_honors, transfers: T.tab_transfers, value: T.tab_value };
        if (map[k]) t.innerHTML = biStr(map[k]);
    });
}

/* ---------- Events ---------- */
function wireEvents() {
    document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    document.querySelectorAll('.tab').forEach(t => {
        t.addEventListener('click', () => setActiveTab(t.dataset.tab));
    });

    // Language toggle
    document.querySelectorAll('.lang-toggle__btn').forEach(b => {
        b.addEventListener('click', () => {
            LANG.set(b.dataset.lang);
            applyStaticStrings();
            rerenderDynamic();
        });
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('modal').classList.contains('is-open')) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        if (!document.getElementById('modal').classList.contains('is-open')) return;
        const focusable = document.getElementById('modal').querySelectorAll("button, [tabindex='0']");
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
}

/* ---------- Boot ---------- */
function currentPage() {
    return (document.body.dataset.page || 'home').toLowerCase();
}

function rerenderDynamic() {
    /* clear all dynamic containers then re-render based on current page */
    document.querySelectorAll('.pitch__row').forEach(r => r.innerHTML = '');
    const bench = document.getElementById('bench-grid');
    if (bench) bench.innerHTML = '';
    const squad = document.getElementById('squad-grid');
    if (squad) squad.innerHTML = '';
    const lineup = document.getElementById('lineup-grid');
    if (lineup) lineup.innerHTML = '';
    const honorsDetail = document.getElementById('honors-detail');
    if (honorsDetail) honorsDetail.innerHTML = '';
    renderAll();
    /* home page may have highlight cards */
    if (currentPage() === 'home') renderHome();
    /* honors page detailed showcase */
    if (currentPage() === 'honors') renderHonors();
    renderFixtures();
}

function renderHome() {
    /* show 3 top market-value players as quick access cards on home */
    const spot = document.getElementById('home-stars');
    if (!spot) return;
    const top = PLAYERS.slice().sort((a, b) => (b.val || 0) - (a.val || 0)).slice(0, 3);
    spot.innerHTML = top.map(p => `
        <article class="player-card" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.name} 详情">
            <span class="player-card__num">${p.num}</span>
            <div class="player-card__photo">
                ${portraitSVG(p)}
                ${imgTagWithCache(p, "card__photo player-card__photo--img")}
            </div>
            <h3 class="player-card__name">${biField(p.name, p.nameCn)}</h3>
            <div class="player-card__role">${biField(p.role, p.roleCn)}</div>
            <div class="player-card__val">€${p.val}M</div>
        </article>`).join('');
}

/* =========================================================
   Honors renderer — full detailed showcase
   Each competition is rendered as a separate section with 5 elements:
   1) bilingual tournament history
   2) winning years
   3) starting lineup (11 players)
   4) goal scorers
   5) championship photo placeholder
   ========================================================= */
function honorWinBlockHTML(honor, win) {
    const lineupItems = win.lineup.map(p =>
        `<li class="honor__player" data-pos="${p.role}">
            <span class="honor__player-num">${p.num}</span>
            <span class="honor__player-name">${p.name}</span>
            <span class="honor__player-role">${p.role}</span>
        </li>`
    ).join("");

    const scorerItems = win.scorers.map(s => {
        const isKey = /绝杀|加冕|锁定|决定性|关键|经典|2-0|3-0|3-1|2-1|Final|补时/i.test(s.note || "");
        return `<li class="honor__scorer ${isKey ? 'is-key' : ''}">
            <span class="honor__scorer-min">${s.minute}'</span>
            <span class="honor__scorer-name">${s.player}</span>
            <span class="honor__scorer-note">${s.note}</span>
        </li>`;
    }).join("");

    const photoHTML = win.photo
        ? `<img src="${win.photo}" alt="${honor.title.en} ${win.year} Champions" class="honor__photo-img" loading="lazy" referrerpolicy="no-referrer"
              onerror="this.classList.add('is-failed');this.insertAdjacentHTML('afterend', '<div class=&quot;honor__photo-fallback&quot;><span>🏆</span><strong>${win.year}</strong><em>${honor.short.en} Champion</em></div>')" />`
        : `<div class="honor__photo-fallback"><span>🏆</span><strong>${win.year}</strong><em>${biField(honor.short.en, honor.short.cn)} Champion · 冠军合影</em></div>`;

    return `
    <article class="honor__win" style="--accent:${honor.accent}">
        <header class="honor__win-head">
            <div class="honor__win-year">
                <span class="honor__win-label">${biField("CHAMPIONSHIP YEAR · 夺冠年份", "夺冠年份")}</span>
                <strong class="honor__win-year-val">${win.year}</strong>
            </div>
            <div class="honor__win-meta">
                <span><em>${biField("Final · 决赛", "决赛")}</em> ${win.opponents}</span>
                <span><em>${biField("Venue · 场地", "场地")}</em> ${win.venue}</span>
                <span><em>${biField("Date · 日期", "日期")}</em> ${win.finalDate}</span>
            </div>
        </header>

        <div class="honor__win-grid">
            <section class="honor__panel honor__panel--lineup">
                <h4 class="honor__panel-title">
                    <span class="honor__panel-num">1</span>
                    <span class="en">STARTING LINEUP</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">夺冠主力阵容</span>
                </h4>
                <ol class="honor__lineup">${lineupItems}</ol>
            </section>

            <section class="honor__panel honor__panel--scorers">
                <h4 class="honor__panel-title">
                    <span class="honor__panel-num">2</span>
                    <span class="en">GOALSCORERS</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">进球功臣明细</span>
                </h4>
                <ul class="honor__scorers">${scorerItems}</ul>
                ${win.keyPlayer ? `
                <div class="honor__keyplayer">
                    <span class="en">MATCH-WINNER</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">关键先生</span>
                    <strong>${win.keyPlayer}</strong>
                </div>` : ''}
            </section>

            <section class="honor__panel honor__panel--photo">
                <h4 class="honor__panel-title">
                    <span class="honor__panel-num">3</span>
                    <span class="en">CHAMPIONSHIP PHOTO</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">夺冠合影</span>
                </h4>
                <div class="honor__photo">${photoHTML}</div>
                <figcaption class="honor__photo-cap">${biField(`${honor.title.en} Champion ${win.year}`, `${win.year} 赛季 ${honor.title.cn}冠军`)}</figcaption>
            </section>
        </div>
    </article>`;
}

function renderHonors() {
    const root = document.getElementById('honors-detail');
    if (!root) return;
    root.innerHTML = HONORS.map((honor, idx) => {
        const wins = honor.wins.map(w => honorWinBlockHTML(honor, w)).join("");
        return `
        <section class="honor-detail" id="honor-${honor.key}" style="--accent:${honor.accent}">
            <header class="honor-detail__head">
                <span class="honor-detail__num">${String(idx + 1).padStart(2, '0')}</span>
                <div class="honor-detail__title-wrap">
                    <h2 class="honor-detail__title">
                        <span class="en">${honor.title.en}</span>
                        <span class="bi-sep">·</span>
                        <span class="cn">${honor.title.cn}</span>
                    </h2>
                    <p class="honor-detail__count">
                        <span class="honor-detail__count-num">${honor.count}</span>
                        <span class="en">Trophies</span>
                        <span class="bi-sep">·</span>
                        <span class="cn">座奖杯</span>
                    </p>
                </div>
            </header>

            <div class="honor-detail__history">
                <h3 class="honor-detail__subhead">
                    <span class="honor-detail__subhead-num">A</span>
                    <span class="en">TOURNAMENT OVERVIEW</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">赛事完整科普</span>
                </h3>
                <div class="honor-detail__bi">
                    <p class="en">${honor.history.en}</p>
                    <p class="cn">${honor.history.cn}</p>
                </div>
                ${honor.prestige ? `
                <div class="honor-detail__prestige">
                    <span class="en">PRESTIGE · </span><span class="cn">赛事含金量：</span>${biField(honor.prestige.en, honor.prestige.cn)}
                </div>` : ''}
            </div>

            <div class="honor-detail__wins">
                <h3 class="honor-detail__subhead">
                    <span class="honor-detail__subhead-num">B</span>
                    <span class="en">CHAMPIONSHIP CAMPAIGNS</span>
                    <span class="bi-sep">·</span>
                    <span class="cn">夺冠战役</span>
                    <span class="honor-detail__subhead-count">${honor.wins.length} ${biField("seasons", "个赛季")}</span>
                </h3>
                ${wins}
            </div>
        </section>`;
    }).join("");

    /* Intersection reveal for each detail block */
    const blocks = root.querySelectorAll('.honor-detail');
    blocks.forEach(el => el.classList.add('is-pre'));
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('is-in');
                en.target.classList.remove('is-pre');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    blocks.forEach(el => io.observe(el));

    /* Safety fallback: if for any reason IO never fires (e.g. headless
       renderer, hidden tab, very tall first block), reveal everything
       after 900ms so the user always sees the full content. */
    setTimeout(() => {
        blocks.forEach(el => {
            if (!el.classList.contains('is-in')) {
                el.classList.add('is-in');
                el.classList.remove('is-pre');
            }
        });
    }, 900);
}

document.addEventListener('DOMContentLoaded', () => {
    LANG.apply();
    applyStaticStrings();
    rerenderDynamic();
    wireFixtures();
    wireEvents();

    /* squad-page filter chips + search */
    if (currentPage() === 'squad') wireSquadFilters();

    /* bench-page filter chips */
    if (currentPage() === 'bench') wireBenchFilters();

    /* formation-page interactions: highlight row on hover */
    if (currentPage() === 'formation') wireFormation();

    /* honors-page: click-to-scroll navigation for the summary cards */
    if (currentPage() === 'honors') wireHonorNav();

    /* nav active state */
    highlightActiveNav();
});

/* =========================================================
   Honors — click-to-scroll navigation
   Click a summary card (LA LIGA / COPA DEL REY / UCL / ...) to
   smooth-scroll to the matching detail block. Uses
   getBoundingClientRect + window.scrollTo with a manual offset
   to compensate for the sticky topbar. Highlights the
   currently-visible section in the summary grid.
   ========================================================= */
function wireHonorNav() {
    const cards = document.querySelectorAll('.honor-card--nav');
    if (!cards.length) return;

    /* 1) click handler — smooth scroll with topbar offset */
    const getTopbarOffset = () => {
        const tb = document.querySelector('.topbar');
        return tb ? tb.getBoundingClientRect().height + 12 : 80;
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const id = card.dataset.honorTarget;
            if (!id) return;
            const target = document.getElementById(id);
            if (!target) return;

            /* recompute offset live so sticky-topbar changes (mobile menu
               open, etc.) don't desync the destination */
            const top = target.getBoundingClientRect().top + window.pageYOffset - getTopbarOffset();

            window.scrollTo({
                top: Math.max(0, top),
                behavior: prefersReduced ? 'auto' : 'smooth'
            });

            /* update URL hash without page jump */
            if (history.replaceState) {
                history.replaceState(null, '', '#' + id);
            }

            /* visual active state on the card */
            cards.forEach(c => c.classList.remove('is-active'));
            card.classList.add('is-active');
            setTimeout(() => card.classList.remove('is-active'), 1200);

            /* move keyboard focus to the target for a11y */
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });

        /* keyboard activation (Enter / Space) */
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    /* 2) highlight the card whose section is currently in view */
    if ('IntersectionObserver' in window) {
        const nav = document.querySelector('.honors__grid');
        const sections = Array.from(cards).map(c => document.getElementById(c.dataset.honorTarget)).filter(Boolean);
        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    const id = en.target.id;
                    cards.forEach(c => c.classList.toggle('is-active', c.dataset.honorTarget === id));
                }
            });
        }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
        sections.forEach(s => io.observe(s));
    }

    /* 3) honor deep-links: if page loads with #honor-xxx, scroll there */
    if (location.hash && location.hash.startsWith('#honor-')) {
        const t = document.querySelector(location.hash);
        if (t) {
            /* wait for renderHonors to finish so the target exists */
            setTimeout(() => {
                const top = t.getBoundingClientRect().top + window.pageYOffset - getTopbarOffset();
                window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
            }, 200);
        }
    }
}

function highlightActiveNav() {
    const page = currentPage();
    document.querySelectorAll('.nav a').forEach(a => {
        const href = (a.getAttribute('href') || '').toLowerCase();
        a.classList.toggle('is-active', href === page + '.html' || (page === 'home' && href === 'index.html'));
    });
}

function wireSquadFilters() {
    const chips = document.querySelectorAll('#squad-chips .fx-chip, #squad-pos .fx-chip');
    const grid = document.getElementById('squad-grid');
    const search = document.getElementById('squad-search');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
            chip.classList.add('is-active');
            chip.setAttribute('aria-selected', 'true');
            grid.dataset.q = chip.dataset.q || '';
            if (search) search.value = '';
            rerenderDynamic();
        });
    });
    if (search) {
        let t;
        search.addEventListener('input', e => {
            clearTimeout(t);
            const v = e.target.value.trim();
            t = setTimeout(() => {
                grid.dataset.q = v;
                rerenderDynamic();
            }, 180);
        });
    }
}

function wireBenchFilters() {
    const chips = document.querySelectorAll('#bench-chips .fx-chip');
    const grid = document.getElementById('bench-grid');
    if (!chips.length || !grid) return;
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
            chip.classList.add('is-active');
            chip.setAttribute('aria-selected', 'true');
            const q = (chip.dataset.q || '').toUpperCase();
            grid.querySelectorAll('.bcard').forEach(c => {
                if (!q) { c.style.display = ''; return; }
                c.style.display = (c.dataset.pos === q) ? '' : 'none';
            });
        });
    });
}

function wireFormation() {
    /* hover pitch row -> highlight */
    const rows = document.querySelectorAll('.pitch__row');
    rows.forEach(r => {
        r.addEventListener('mouseenter', () => r.classList.add('is-highlight'));
        r.addEventListener('mouseleave', () => r.classList.remove('is-highlight'));
    });
}
