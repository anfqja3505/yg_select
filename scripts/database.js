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
    },
    {
        name: "AKMU",
        src: "./images/artist/akmu.jpg",
        link: "#",
    },
    {
        name: "2NE1",
        src: "./images/artist/2ne1.jpg",
        link: "#",
    },
    {
        name: "EUNJIONE",
        src: "./images/artist/eunjiwon.jpg",
        link: "#",
    }
];

//==========================================NEW 상품 DB
const newProductDB = {
    bigbang: [
        { src: "./images/new/bigbang/newpd1.jpg", name: "BIGBANG TOUR REUSABLE BAG_L", price: "10,000원", link: "#" },
        { src: "./images/new/bigbang/newpd2.jpg", name: "BIGBANG TOUR REUSABLE BAG_M", price: "8,000원", link: "#" },
        { src: "./images/new/bigbang/newpd3.jpg", name: "BIGBANG TOUR SLOGAN TOWEL", price: "18,000원", link: "#" },
        { src: "./images/new/bigbang/newpd4.jpg", name: "BIGBANG OFFICIAL LIGHT STICK V.4", price: "35,000원", link: "#" },
        { src: "./images/new/bigbang/newpd5.jpg", name: "BIGBANG10 THE COLLECTION: A TO Z", price: "50,000원", link: "#" },
        { src: "./images/new/bigbang/newpd6.jpg", name: "BIGBANG ALBUM BADGE COLLECTION", price: "24,000원", link: "#" }
    ],
    blackpink: [
        { src: "./images/new/blackpink/bpnewpd1.jpg", name: "[BP Heritage] Chambit Norigae Keyring_PINK", price: "30,000원", link: "#" },
        { src: "./images/new/blackpink/bpnewpd2.jpg", name: "[BP Heritage] Chambit Norigae Keyring_BLACK", price: "30,000원", link: "#" },
        { src: "./images/new/blackpink/bpnewpd3.jpg", name: "[BP Heritage] Pink Moon Jar", price: "100,000원", link: "#" },
        { src: "./images/new/blackpink/bpnewpd4.jpg", name: "[BP Heritage] Punggyeong Wind Chime", price: "80,000원", link: "#" },
        { src: "./images/new/blackpink/bpnewpd5.jpg", name: "[KOREAEDITION] BLACKPINK KEYRING", price: "16,000원", link: "#" },
        { src: "./images/new/blackpink/bpnewpd6.jpg", name: "[KOREAEDITION] BLACKPINK T-SHIRT_MUGUNGHWA", price: "52,000원", link: "#" }
    ]
};

//===========================================앨범 DB
const newAlbumDB = [
    {
        name: "bigbang",
        smallTitle: "20th Anniversary [BiiiG]",
        Bigsrc: "./images/album/bigbang/main_bigbang.jpg",
        src : "./images/album/bigbang/bigbang_biiig.png",
    },{
        name: "blackpink",
        smallTitle: "8th Anniversary [DEADLINE]",
        Bigsrc: "./images/album/blackpink/main_blackpink.png",
        src : "./images/album/blackpink/blackpink_deadline.png",
    }

]