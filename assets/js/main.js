/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */
const toggleMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');
const navMenu = document.querySelector('#nav-menu');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
})

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
    const mainImg = document.querySelector('.details__img'),
        smallImg = document.querySelectorAll('.details__small-img');
    smallImg.forEach(img => {
        img.addEventListener('click', () => {
            mainImg.src = img.src;
        })
    })

}

imgGallery();



/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 30,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        740: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
    },
});


/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
    spaceBetween: 30,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        tabContents.forEach(tabContent => {
            if (tabContent.classList.contains('active-tab')) {
                tabContent.classList.remove('active-tab');
            }
        })
        tabs.forEach(tab => {
            if (tab.classList.contains('active-tab')) {
                tab.classList.remove('active-tab');
            }
        })
        tab.classList.add('active-tab')
        document.querySelector(target).classList.add('active-tab')
    })
})



/*=============== DEALS TIME ===============*/
// const cdDeals = document.querySelectorAll('.countdown')
// console.log(cdDeals);
// cdDeals.forEach(cdDeal => {
//     let sec = Number(cdDeal.children[3].children[0].innerHTML);
//     let mins = Number(cdDeal.children[2].children[0].innerHTML);
//     let hours = Number(cdDeal.children[1].children[0].innerHTML);
//     let days = Number(cdDeal.children[0].children[0].innerHTML);
//     let dealTime = setInterval(() => {
//         sec -= 1;
//         if (sec === 0) {
//             if (mins === 0) {
//                 if (hours === 0) {
//                     if (days !== 0) {
//                         sec = 59;
//                         cdDeal.children[3].children[0].innerHTML = sec;
//                         mins = 59;
//                         cdDeal.children[2].children[0].innerHTML = mins;
//                         hours = 24;
//                         cdDeal.children[1].children[0].innerHTML = hours;
//                         days -= 1;
//                         cdDeal.children[0].children[0].innerHTML = days;
//                     } else {
//                         cdDeal.children[3].children[0].innerHTML = 0;
//                         clearInterval(dealTime);
//                     }

//                 } else {
//                     sec = 59;
//                     cdDeal.children[3].children[0].innerHTML = sec;
//                     mins = 59;
//                     cdDeal.children[2].children[0].innerHTML = mins;
//                     hours -= 1;
//                     cdDeal.children[1].children[0].innerHTML = hours;
//                 }
//             } else {
//                 sec = 59;
//                 cdDeal.children[3].children[0].innerHTML = sec;
//                 mins -= 1;
//                 cdDeal.children[2].children[0].innerHTML = mins;
//             }
//         } else {
//             cdDeal.children[3].children[0].innerHTML = sec;
//         }
//     }, 1000)
// })

/*=============== PAGINATION ===============*/
// const pagination = document.querySelectorAll('.pagination');
// pagination.forEach(page => {
//     page.addEventListener('click', () => {
//         // document.querySelector('.pagination__link.active').classList.remove('active');
//         page.classList.add('active');
//     })
// })