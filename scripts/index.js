// YG SELECT | index.js
// 헤더
const menu_list_a = document.querySelectorAll('.menu_list li > a');//메뉴리스트
const search_btn = document.querySelector('#search_btn');//검색버튼
const search_popup = document.querySelector('.search_popup');//검색창
const search_close_btn = document.querySelector('.search_popup .close_btn');//검색창 닫기버튼
const popular_pd = document.querySelector('.popular_pd');//실시간 인기 상품
const popular_search = document.querySelector('.popular_search');//인기검색어
const m_t_menu = document.querySelector('.m_t_menu')//태블릿 모바일 전체메뉴
const t_m_menu_btn = document.querySelector('#t_m_menu_btn');//태블릿 모바일 전체메뉴 버튼
const t_m_btnImg = document.querySelector('#t_m_menu_btn img');//태블릿 모바일 전체메뉴 버튼 이미지
// 2행 아티스트영역
const swiper_wrapper = document.querySelector('.artist_swiper .swiper-wrapper');//아티스트 슬라이드
// 3행 new 영역
const tab_button = document.querySelectorAll('.new_tab_menu button');//탭메뉴
const new_content = document.querySelectorAll('.new_content')//신상품 내용
const new_product_list = document.querySelectorAll('.new_product_list');//신상품 리스트 ul
// 4행 앨범 영역
const album_tab_btn = document.querySelectorAll('.album_tab_menu li button')
const album_bnr = document.querySelector('.album_bnr img');//앨범 메인배너
const album_title_img = document.querySelector('.album_title_img')//앨범 정보
// 띠배너(YGSELECT) 
const banner_wrap = document.querySelector('.banner_wrap');
const line_banner_text = document.querySelector('.line_banner_text');
const banner_span = document.querySelector('.line_banner_text span');
// 5행 베스트
const bestWrapper = document.querySelector('.best_detail .swiper-wrapper');
// 6행 이벤트
const eventWrapper = document.querySelector('.event_slide .swiper-wrapper');

// ================================================================= Swiper
const heroSwiper = new Swiper('.hero_bnr',{// 히어로배너 swiper
    slidesPerView:1,

});
const artistSwiper = new Swiper('.artist_swiper',{// 아티스트 swiper
    slidesPerView:'auto',
    centeredSlides: true,
    loop:true,
    loopedSlides: 2,
    speed:2500,
    autoplay: {
        delay: 1000,          
    },
    breakpoints: {
        680: {// 데스크탑 및 태블릿
            spaceBetween: 50, 
        },
        0: {// 모바일
            spaceBetween: 20,
        }
    },
});
const bestSwiper = new Swiper('.best_detail',{ //베스트 스와이퍼
    slidesPerView:1,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    breakpoints: {
        901: {
            slidesPerView: 2,
        }
    },
})
const eventSwiper = new Swiper('.event_slide', {//이벤트 스와이퍼
    slidesPerView: 3,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    breakpoints: {
        901: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1401: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    },
    scrollbar: {
        el: '.event_wrap .swiper-scrollbar',
        draggable: true,
    },
});

//===================================================================== 스크롤
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#aritst_sec h2',
    {
        y:-100,
        opacity: 0,
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:'#aritst_sec',
            start:'top 70%',
            markers:true,
        }
    }
)

gsap.fromTo('#new_sec h2',
    {
        y:-100,
        opacity: 0,
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:'#new_sec',
            start:'top 70%',
            markers:true,
        }
    }
)

gsap.fromTo('#best_sec h2',
    {
        y:-100,
        opacity: 0,
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:'#best_sec',
            start:'top 70%',
            markers:true,
        }
    }
)

gsap.fromTo('#event_sec h2',
    {
        y:-100,
        opacity: 0,
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:'#event_sec',
            start:'top 80%',
            markers:true,
        }
    }
)

gsap.fromTo('#album_sec .album_wrap .album_bnr',
    {
        x:-200,
        opacity: 0,
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:'#album_sec',
            start:'top 80%',
            markers:true,
        }
    }
)

gsap.fromTo('#album_sec .album_wrap .album_detail',
    {
        x:200,
        opacity: 0,
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:'#album_sec',
            start:'top 90%',
            markers:true,
        }
    }
)

window.addEventListener('load', function() {
    setTimeout(function() {
        if (artistSwiper && artistSwiper.autoplay) {
            artistSwiper.autoplay.stop();
            artistSwiper.autoplay.start(); 
        }
    }, 100);
});

search_btn.addEventListener('click',()=>{/* 검색버튼 */
    if(m_t_menu.classList.contains('active')){
        m_t_menu.classList.remove('active')
    }
    search_popup.classList.toggle('active')
});
search_close_btn.addEventListener('click',()=>{/* 닫기버튼 */
    search_popup.classList.remove('active')
});
menu_list_a.forEach((target)=>{/* 메뉴 호버시 닫기 */
    target.addEventListener('mouseenter',()=>{
        search_popup.classList.remove('active')
    });
});

// t_m_menu_btn.addEventListener('click',()=>{/* 모바일 태블릿 전체메뉴 */
//     if(search_popup.classList.contains('active')){
//         search_popup.classList.remove('active')
//     }
//     m_t_menu.classList.toggle('active')
// });

t_m_menu_btn.addEventListener('click', () => {
    if (search_popup.classList.contains('active')) {
        search_popup.classList.remove('active');
    }
    m_t_menu.classList.toggle('active');
    if (m_t_menu.classList.contains('active')) {
        t_m_btnImg.src = './images/icon/close_btn.svg';
    } else {
        t_m_btnImg.src = './images/icon/t_m_menu_btn.svg';
    }
});

//===================================검색창 

for(let i=0; i<7; i++){//인기상품
    const popularPdLi = document.createElement('li');
    popularPdLi.innerHTML += `<a href="${searchDatabase.popularProducts[i].link}">${searchDatabase.popularProducts[i].name}</a>`;
    popular_pd.appendChild(popularPdLi);
};

for(let i=0; i<7; i++){//검색순위
    const popularSearchLi = document.createElement('li');
    popularSearchLi.innerHTML += `<a href="${searchDatabase.popularKeywords[i].link}">${searchDatabase.popularKeywords[i].rank}. ${searchDatabase.popularKeywords[i].keyword}</a>`;
    popular_search.appendChild(popularSearchLi);
};

//==================================아티스트

artistDB.forEach(target=>{
    const li = document.createElement('li');
    li.classList.add('swiper-slide')
    li.innerHTML = `
        <a href="${target.link}">
            <img src="${target.src}" alt="${target.name}">
            <h3>${target.name}</h3>
        </a>
    `;
    swiper_wrapper.appendChild(li);
});

//================================= NEW
new_product_list.forEach(ul=>{/* 신상품 li 복제 및 추가 */
    const newProductArtist = ul.dataset.artist;
    const newPdDB = newProductDB[newProductArtist];
    newPdDB.forEach(target=>{ 
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${target.link}">
                <p class="new_thum"><img src="${target.src}" alt="${target.name}"></div>
                <h3 class="new_name">${target.name}</h3>
                <p class="new_price">${target.price}</p>
            </a>
        `;
        ul.appendChild(li);
    });
});

tab_button.forEach((t, i)=>{
    if (!t) return;
    t.addEventListener('click',()=>{
        if (!new_content[i]) {return;}
        tab_button.forEach(t=>{t.classList.remove('active')});
        new_content.forEach(t=>{t.classList.remove('active')});
        t.classList.add('active');
        new_content[i].classList.add('active');
    });
})

//===================================앨범
album_tab_btn[0].classList.add('active');
album_bnr.src = newAlbumDB[0].Bigsrc;
album_title_img.innerHTML = `
    <h2>${newAlbumDB[0].name.toUpperCase()}</h2>
    <p>${newAlbumDB[0].smallTitle}</p>
    <p class="album_bnr_s"><img src="${newAlbumDB[0].src}" alt="${newAlbumDB[0].name}"></p>
    <p class="lp"><img src="./images/album/lp.png" alt=""></p>
`;

album_tab_btn.forEach((o, i)=>{
    o.addEventListener('click', ()=>{
        if (!newAlbumDB[i]) return;
        album_tab_btn.forEach((btn) => {btn.classList.remove('active')});
        o.classList.add('active');
        if (newAlbumDB[i]) {
            album_bnr.src = newAlbumDB[i].Bigsrc;
            album_title_img.innerHTML = `
                <h2>${newAlbumDB[i].name.toUpperCase()}</h2>
                <p>${newAlbumDB[i].smallTitle}</p>
                <p class="album_bnr_s"><img src="${newAlbumDB[i].src}" alt="${newAlbumDB[i].name}"></p>
                <p class="lp"><img src="./images/album/lp.png" alt=""></p>
            `;
        }
    });
});

//=================================================== YGSELECT 띠배너
for (let i=0; i<20; i++) {
    const cloneSpan = banner_span.cloneNode(true);
    line_banner_text.appendChild(cloneSpan);
}

const cloneGroup = line_banner_text.cloneNode(true);
banner_wrap.appendChild(cloneGroup);

//=================================================== BEST
for (const i of bestDB) {
    let bestHTML = '';
    for (const p of i.product) {
        bestHTML += `
            <a href="${p.pd_link}" class="product_info">
                <p class="best_thum"><img src="${p.src}" alt="${p.name}"></p>
                <p class="best_name">${p.name}</p>
                <p class="best_price">${p.price}</p>
            </a>
        `;
    }
    const li = document.createElement('li');
    li.classList.add('swiper-slide')
    li.innerHTML = `
        <div class="artist_best_wrap">
            <a href="${i.link}" class="best_bnr">
                <img src="${i.bannerSrc}" alt="${i.name}">
                <h1>${i.name}</h1>
            </a>
            <div class="best_product flex_row_b_c">
                ${bestHTML}
            </div>
        </div>
    `;
    bestWrapper.appendChild(li);
}

//========================================================event
for (const i of eventDB) {
    const li = document.createElement('li');
    li.classList.add('swiper-slide');
    li.innerHTML += `
        <a href="${i.link}" class="event_detail">
            <p class="event_thum">
                <img src="${i.src}" alt="${i.title}">
            </p>
            <h3>${i.title}</h3>
        </a>
    `;
    eventWrapper.prepend(li);
}