import lucai from "@/public/lucai.png";
import lucai1 from "@/public/lucai1.png";
import chuancai from "@/public/chuancai.png";
import chuancai1 from "@/public/chuancai1.png";
import yuecai from "@/public/yuecai.png";
import yuecai1 from "@/public/yuecai1.png";
import sucai from "@/public/sucai.png";
import sucai1 from "@/public/sucai1.png";

export const menu: CuisineType[] = [
  {
    name: "鲁菜",
    icon: lucai,
    icon1: lucai1,
    href: "/shandong/jinan",
    description:
      "鲁菜是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是",
    children: [
      {
        name: "济南菜",
        href: "/shandong/jinan",
        icon: lucai,
        icon1: lucai1,
        description: "济南经典名菜，造型优美，外酥里嫩，酸甜适口",
        children: [
          {
            name: "糖醋鲤鱼",
            tag: ["鲁菜", "济南菜", "酸甜口"],
            bgImgs: [
              "https://picsum.photos/200/300?random=10",
              "https://picsum.photos/200/300?random=11",
              "https://picsum.photos/200/300?random=12",
            ],
            thumb: "https://picsum.photos/200/300?random=13",
            description: "济南经典名菜，造型优美，外酥里嫩，酸甜适口",
            href: "/sweet-and-sour-carp",
            new: true,
          },
          {
            name: "九转大肠",
            tag: ["鲁菜", "济南菜", "咸香甜辣"],
            bgImgs: [
              "https://picsum.photos/200/300?random=14",
              "https://picsum.photos/200/300?random=15",
              "https://picsum.photos/200/300?random=16",
            ],
            thumb: "https://picsum.photos/200/300?random=17",
            description: "色泽红润，肥而不腻，五味俱全，是鲁菜代表菜之一",
            href: "/jiuzhuan-pork-intestines",
            new: true,
          },
          {
            name: "九转大肠",
            tag: ["鲁菜", "济南菜", "咸香甜辣"],
            bgImgs: [
              "https://picsum.photos/200/300?random=14",
              "https://picsum.photos/200/300?random=15",
              "https://picsum.photos/200/300?random=16",
            ],
            thumb: "https://picsum.photos/200/300?random=17",
            description: "色泽红润，肥而不腻，五味俱全，是鲁菜代表菜之一",
            href: "/jiuzhuan-pork-intestines2",
          },
          {
            name: "九转大肠",
            tag: ["鲁菜", "济南菜", "咸香甜辣"],
            bgImgs: [
              "https://picsum.photos/200/300?random=14",
              "https://picsum.photos/200/300?random=15",
              "https://picsum.photos/200/300?random=16",
            ],
            thumb: "https://picsum.photos/200/300?random=17",
            description: "色泽红润，肥而不腻，五味俱全，是鲁菜代表菜之一",
            href: "/jiuzhuan-pork-intestines1",
            new: true,
          },
        ],
      },
      {
        name: "胶东菜",
        href: "/shandong/jiaodong",
        children: [
          {
            name: "油焖大虾",
            tag: ["鲁菜", "胶东菜", "海鲜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=18",
              "https://picsum.photos/200/300?random=19",
              "https://picsum.photos/200/300?random=20",
            ],
            thumb: "https://picsum.photos/200/300?random=21",
            description: "选用渤海湾大虾，色泽红亮，鲜嫩入味，咸鲜适口",
            href: "/oil-braised-prawns",
            new: true,
          },
          {
            name: "清蒸加吉鱼",
            tag: ["鲁菜", "胶东菜", "清蒸"],
            bgImgs: [
              "https://picsum.photos/200/300?random=22",
              "https://picsum.photos/200/300?random=23",
              "https://picsum.photos/200/300?random=24",
            ],
            thumb: "https://picsum.photos/200/300?random=25",
            description: "原汁原味，鱼肉细嫩，汤汁鲜美，是胶东海鲜名菜",
            href: "/steamed-red-sea-bream",
          },
        ],
      },
    ],
  },
  {
    name: "川菜",
    icon: chuancai,
    icon1: chuancai1,
    href: "/sichuan/spicy",
    description:
      "川菜是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是",

    children: [
      {
        name: "麻辣菜",
        href: "/sichuan/spicy",
        icon: chuancai,
        icon1: chuancai1,
        children: [
          {
            name: "水煮鱼",
            tag: ["川菜", "麻辣", "江湖菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=26",
              "https://picsum.photos/200/300?random=27",
              "https://picsum.photos/200/300?random=28",
            ],
            thumb: "https://picsum.photos/200/300?random=29",
            description: "鱼肉滑嫩，麻辣鲜香，汤色红亮，是川菜经典麻辣菜品",
            href: "/sichuan-boiled-fish",
            new: true,
          },
          {
            name: "麻婆豆腐",
            tag: ["川菜", "麻辣", "家常菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=30",
              "https://picsum.photos/200/300?random=31",
              "https://picsum.photos/200/300?random=32",
            ],
            thumb: "https://picsum.photos/200/300?random=33",
            description: "豆腐细嫩，麻辣鲜香，酥香可口，是川菜代表家常菜",
            href: "/mapo-tofu",
            new: true,
          },
        ],
      },
      {
        name: "香辣菜",
        href: "/sichuan/aromatic",
        icon: chuancai,
        icon1: chuancai1,
        description:
          "香辣菜是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是",

        children: [
          {
            name: "辣子鸡",
            tag: ["川菜", "香辣", "下酒菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=34",
              "https://picsum.photos/200/300?random=35",
              "https://picsum.photos/200/300?random=36",
            ],
            thumb: "https://picsum.photos/200/300?random=37",
            description: "鸡肉外酥里嫩，干辣椒香气浓郁，越吃越香",
            href: "/sichuan-spicy-chicken",
          },
          {
            name: "宫保鸡丁",
            tag: ["川菜", "香辣", "酸甜口"],
            bgImgs: [
              "https://picsum.photos/200/300?random=38",
              "https://picsum.photos/200/300?random=39",
              "https://picsum.photos/200/300?random=40",
            ],
            thumb: "https://picsum.photos/200/300?random=41",
            description: "鸡丁滑嫩，花生酥脆，酸甜香辣平衡，老少皆宜",
            href: "/kung-pao-chicken",
          },
        ],
      },
    ],
  },
  {
    name: "粤菜",
    icon: yuecai,
    icon1: yuecai1,
    href: "/cantonese/guangzhou",
    description:
      "粤菜是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是",

    children: [
      {
        name: "广府菜",
        href: "/cantonese/guangzhou",
        children: [
          {
            name: "白切鸡",
            tag: ["粤菜", "广府菜", "清淡"],
            bgImgs: [
              "https://picsum.photos/200/300?random=42",
              "https://picsum.photos/200/300?random=43",
              "https://picsum.photos/200/300?random=44",
            ],
            thumb: "https://picsum.photos/200/300?random=45",
            description: "鸡肉鲜嫩，原汁原味，搭配姜葱蘸料，清爽不腻",
            href: "/white-cut-chicken",
            new: true,
          },
          {
            name: "烤乳猪",
            tag: ["粤菜", "广府菜", "宴席菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=46",
              "https://picsum.photos/200/300?random=47",
              "https://picsum.photos/200/300?random=48",
            ],
            thumb: "https://picsum.photos/200/300?random=49",
            description: "皮脆肉嫩，色泽金红，香气扑鼻，是粤菜宴席珍品",
            href: "/roast-suckling-pig",
          },
        ],
      },
      {
        name: "潮汕菜",
        href: "/cantonese/chaoshan",
        children: [
          {
            name: "潮汕牛肉火锅",
            tag: ["粤菜", "潮汕菜", "火锅"],
            bgImgs: [
              "https://picsum.photos/200/300?random=50",
              "https://picsum.photos/200/300?random=51",
              "https://picsum.photos/200/300?random=52",
            ],
            thumb: "https://picsum.photos/200/300?random=53",
            description: "选用新鲜黄牛肉，现切现涮，清汤锅底凸显牛肉鲜味",
            href: "/chaoshan-beef-hotpot",
          },
          {
            name: "蚝烙",
            tag: ["粤菜", "潮汕菜", "小吃"],
            bgImgs: [
              "https://picsum.photos/200/300?random=54",
              "https://picsum.photos/200/300?random=55",
              "https://picsum.photos/200/300?random=56",
            ],
            thumb: "https://picsum.photos/200/300?random=57",
            description: "生蚝鲜嫩，薯粉酥脆，搭配鱼露食用，风味独特",
            href: "/oyster-omelette",
          },
        ],
      },
    ],
  },
  {
    name: "苏菜",
    icon: sucai,
    icon1: sucai1,
    href: "/jiangsu/huaiyang",
    description:
      "苏菜是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常，是chy的日常",
    children: [
      {
        name: "淮扬菜",
        href: "/jiangsu/huaiyang",
        children: [
          {
            name: "扬州炒饭",
            tag: ["苏菜", "淮扬菜", "主食"],
            bgImgs: [
              "https://picsum.photos/200/300?random=58",
              "https://picsum.photos/200/300?random=59",
              "https://picsum.photos/200/300?random=60",
            ],
            thumb: "https://picsum.photos/200/300?random=61",
            description: "米饭粒粒分明，配料丰富，咸鲜适口，是淮扬经典主食",
            href: "/yangzhou-fried-rice",
            new: true,
          },
          {
            name: "松鼠鳜鱼",
            tag: ["苏菜", "淮扬菜", "宴席菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=62",
              "https://picsum.photos/200/300?random=63",
              "https://picsum.photos/200/300?random=64",
            ],
            thumb: "https://picsum.photos/200/300?random=65",
            description: "造型逼真如松鼠，外酥里嫩，酸甜适口，宴席必备名菜",
            href: "/squirrel-shaped-mandarin-fish",
          },
        ],
      },
      {
        name: "金陵菜",
        href: "/jiangsu/jinling",
        children: [
          {
            name: "盐水鸭",
            tag: ["苏菜", "金陵菜", "凉菜"],
            bgImgs: [
              "https://picsum.photos/200/300?random=66",
              "https://picsum.photos/200/300?random=67",
              "https://picsum.photos/200/300?random=68",
            ],
            thumb: "https://picsum.photos/200/300?random=69",
            description: "鸭肉细嫩，咸香入味，肥而不腻，是南京特色名菜",
            href: "/salted-duck",
            new: true,
          },
          {
            name: "鸭血粉丝汤",
            tag: ["苏菜", "金陵菜", "小吃"],
            bgImgs: [
              "https://picsum.photos/200/300?random=70",
              "https://picsum.photos/200/300?random=71",
              "https://picsum.photos/200/300?random=72",
            ],
            thumb: "https://picsum.photos/200/300?random=73",
            description: "鸭血滑嫩，粉丝劲道，汤汁鲜香，是南京街头经典小吃",
            href: "/duck-blood-vermicelli-soup",
          },
        ],
      },
    ],
  },
];
