
import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDevConfigData =[
  {
    id: 1,
    devid: "AITPL/001/002/019",
    battype: "Industrial",
    cellchem: "LFP",
    nocellS: 14,
    nocellP: 7,
    cellcapacity: 2.6,
    gpsstat: "On",
    warrentyperiod: "24 Months",
    domrng: "12 Apr 2021",
    phone: "08820563235",
    actions: "Running"
  },
  {
    id: 2,
    devid: "AITPL/001/002/014",
    battype: "Industrial",
    cellchem: "Li-ion",
    nocellS: 14,
    nocellP: 7,
    cellcapacity: 2.9,
    gpsstat: "Off",
    warrentyperiod: "12 Months",
    domrng: "21 Dec 2021",
    phone: "08585365234",
    actions: "Running"
  },
  {
    id: 3,
    devid: "AITPL/001/002/002",
    battype: "Domestic",
    cellchem: "LFP",
    nocellS: 14,
    nocellP: 9,
    cellcapacity: 2.9,
    gpsstat: "On",
    warrentyperiod: "18 Months",
    domrng: "22 March 2021",
    phone: "09932458695",
    actions: "Running"
  },
  {
    id: 4,
    devid: "AITPL/001/002/004",
    battype: "Domestic",
    cellchem: "Li-ion",
    nocellS: 14,
    nocellP: 8,
    cellcapacity: 2.6,
    gpsstat: "On",
    warrentyperiod: "30 Months",
    domrng: "13 Nov 2020",
    phone: "08101695683",
    actions: "Running"
  },
  {
    id: 5,
    devid: "AITPL/001/002/006",
    battype: "Industrial",
    cellchem: "Li-ion",
    nocellS: 16,
    nocellP: 9,
    cellcapacity: 2.9,
    gpsstat: "Off",
    warrentyperiod: "24 Months",
    domrng: "12 Dec 2022",
    phone: "08900235623",
    actions: "Running"
  },
  {
    id: 6,
    devid: "AITPL/001/002/003",
    battype: "Industrial",
    cellchem: "Li-ion",
    nocellS: 14,
    nocellP: 7,
    cellcapacity: 2.9,
    gpsstat: "On",
    warrentyperiod: "12 Months",
    domrng: "4 Jan 2023",
    phone: "986533247",
    actions: "Running"
  },
];

export const mockDataCustomers = [
  {
    id: 1,
    dop: "12Aug2022",
    name: "Swapan Nier",
    phone: "7797368652",
    address: "Mukundapur, Kolkata, WB",
    distributercode: "D22001",
    devid: "AITPL22/001/002/2356",
    actions: "Running"

  },
  {
    id: 2,
    dop: "12Aug2022",
    name: "Jamir Ahmed",
    phone: "9635452201",
    address: "Hatiara, Kolkata, WB",
    distributercode: "D22001",
    devid: "AITPL22/001/002/6593",
    actions: "Running"

  },
  {
    id: 3,
    dop: "23Nov2022",
    name: "Sudip Bhukta",
    phone: "8001639532",
    address: "Bansdroni, Kolkata, WB",
    distributercode: "D22003",
    devid: "AITPL22/001/002/1956",
    actions: "Paused"

  },
  {
    id: 4,
    dop: "22Dec2022",
    name: "Tapan Khan",
    phone: "8097368652",
    address: "Tangra, Kolkata, WB",
    distributercode: "D22001",
    devid: "AITPL22/001/002/1693",
    actions: "Running"

  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockDistributers = [
  { 
    id: 1,
    distributercode: "D2202",
    distributername: "Ramesh Riksaw",
    phone: 898556982,
    email: "rst2300@mailerrorred.com",
    address: "Mukundapur, Kol, WB",
    noofdevices: "Selled: 12, Stock: 5",
    actions: "Continue"
  },
  { 
    id: 2,
    distributercode: "D2201",
    distributername: "Sudip Herbal",
    phone: 9932655235,
    email: "sudip@gamil.com",
    address: "Bansdroni, Kol, WB",
    noofdevices: "Selled: 9, Stock: 0",
    actions: "Stopped"
  },
  { 
    id: 3,
    distributercode: "D2203",
    distributername: "Mondal Ricsaw",
    phone: 6992350016,
    email: "mondalcycle337@gmail.com",
    address: "Dumdum, Kol, WB",
    noofdevices: "Selled: 7, Stock: 4",
    actions: "On Demand"
  },
  { 
    id: 4,
    distributercode: "D2204",
    distributername: "Ramesh Riksaw",
    phone: 6295400389,
    email: "rameshg34@gmail.com",
    address: "Thane, Howrah, WB",
    noofdevices: "Selled: 1, Stock: 1",
    actions: "Not Secure"
  },
  { 
    id: 5,
    distributercode: "D2205",
    distributername: "Ashoke Das",
    phone: 8001236436,
    email: "ashokedas@hotmail.com",
    address: "Bangaon, Nadia, WB",
    noofdevices: "Selled: 17, Stock: 5",
    actions: "Oldest"
  },
];

export const mockDevices = [
  {
    usetype: "Domestic",
    noofdev: 732,
  },
  {
    usetype: "Automotive",
    noofdev: 451,
  },
  {
    usetype: "Industrial",
    noofdev: 107,
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
