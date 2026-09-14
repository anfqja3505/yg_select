// YG SELECT | database.js

//============================================검색창 db
const searchDatabase = {
    popularProducts: [// 실시간 인기 상품
        {id: 1, name: "#BIGBANG GOOD LUCK DOLL KEYRING", link: "#"},
        {id: 2, name: "#TREASURE BRICK SET", link: "#"},
        {id: 3, name: "#TREASURE POUCH", link: "#"},
        {id: 4, name: "JISOO Single Album [CLICK] VINYL VER.", link: "#"},
        {id: 5, name: "#TREASURE CLICKER KEYRING", link: "#"},
        {id: 6, name: "#BABYMONSTER MINI PLUSH KEYRING", link: "#"},
        {id: 7, name: "#BABYMONSTER HORN EMOJI PLUSH CUSHION", link: "#"}
    ],
    popularKeywords: [// 인기 검색어
        {rank: 1, keyword: "BabyMonster", link: "#"},
        {rank: 2, keyword: "BlackPink", link: "#"},
        {rank: 3, keyword: "BigBang", link: "#"},
        {rank: 4, keyword: "AKMU", link: "#"},
        {rank: 5, keyword: "Treasure", link: "#"},
        {rank: 6, keyword: "Winner", link: "#"},
        {rank: 7, keyword: "KRUNK", link: "#"}
    ]
};
//=================================아티스트 db
const artistDB = [
    {
        name: "WINNER",
        src: "./images/artist/winner.jpg",
        link: "#",
    },
    {
        name: "BIGBANG",
        src: "./images/artist/bigbang.jpg",
        link: "#",
    },
    {
        name: "TREASURE",
        src: "./images/artist/treasure.jpg",
        link: "#",
    },
    {
        name: "BLACKPINK",
        src: "./images/artist/blackpink.jpg",
        link: "#",
    },
    {
        name: "BABYMONSTER",
        src: "./images/artist/babymonster.jpg",
        link: "#",
    }
];