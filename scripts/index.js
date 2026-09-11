// YG SELECT | index.js
const menu_list_a = document.querySelectorAll('menu_list li > a')
const search_btn = document.querySelector('#search_btn')
const search_popup = document.querySelector('.search_popup')

const heroSwiper = new Swiper('.hero_bnr',{/* 히어로배너 swiper */

})

search_btn.addEventListener('click',()=>{/* 검색버튼 */
    search_popup.classList.toggle('active')

})