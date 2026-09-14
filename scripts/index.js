// YG SELECT | index.js
/* 헤더 */
const menu_list_a = document.querySelectorAll('.menu_list li > a')//메뉴리스트
const search_btn = document.querySelector('#search_btn')//검색버튼
const search_popup = document.querySelector('.search_popup')//검색창
const search_close_btn = document.querySelector('.search_popup .close_btn')//검색창 닫기버튼
const popular_pd = document.querySelector('.popular_pd')//실시간 인기 상품
const popular_search = document.querySelector('.popular_search')//인기검색어
const m_t_menu = document.querySelector('.m_t_menu')//태블릿 모바일 전체메뉴
const t_m_menu_btn = document.querySelector('#t_m_menu_btn')//태블릿 모바일 전체메뉴 버튼
const m_t_close_btn = document.querySelector('.m_t_close_btn')//전체메뉴 닫기 버튼
/* 2행 아티스트영역 */
const swiper_wrapper = document.querySelector('.artist_swiper .swiper-wrapper');//아티스트 슬라이드


const heroSwiper = new Swiper('.hero_bnr',{// 히어로배너 swiper
    slidesPerView:1,

})
const artistSwiper = new Swiper('.artist_swiper',{// 아티스트 swiper
    slidesPerView:'auto',
    spaceBetween: 50,
    centeredSlides: true,
    loop:true,
})

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

t_m_menu_btn.addEventListener('click',()=>{/* 모바일 태블릿 전체메뉴 */
    if(search_popup.classList.contains('active')){
        search_popup.classList.remove('active')
    }
    m_t_menu.classList.toggle('active')
})
m_t_close_btn.addEventListener('click',()=>{/* 닫기버튼 */
    m_t_menu.classList.remove('active')
})

//===================================검색창 

for(let i=0; i<7; i++){//인기상품
    const popularPdLi = document.createElement('li');
    popularPdLi.innerHTML += `<a href="${searchDatabase.popularProducts[i].link}">${searchDatabase.popularProducts[i].name}</a>`;
    popular_pd.appendChild(popularPdLi);
}

for(let i=0; i<7; i++){//검색순위
    const popularSearchLi = document.createElement('li');
    popularSearchLi.innerHTML += `<a href="${searchDatabase.popularKeywords[i].link}">${searchDatabase.popularKeywords[i].rank}. ${searchDatabase.popularKeywords[i].keyword}</a>`;
    popular_search.appendChild(popularSearchLi);
}

//==================================아티스트

artistDB.forEach(target => {
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