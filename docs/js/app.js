"use strict";


document.addEventListener("DOMContentLoaded", function () {
    //  Fancybox
    if (typeof Fancybox !== "undefined" && Fancybox !== null) {
        Fancybox.bind("[data-fancybox]", {
            dragToClose: false,
            closeExisting: true
        });
    }

    document.addEventListener('click', function (e) {
        const target = e.target;
        const header = document.querySelector('.header');

        // menu
        if (target.closest('[data-menu-toggler]')) {
            header.classList.toggle('open-menu');
        }

        if (target.closest('.menu__link')) {
            header.classList.remove('open-menu');
        }

    })

    // sliders
    if (document.querySelector('.testing-lab__slider')) {
        new Swiper('.testing-lab__slider', {
            slidesPerView: "auto",
            spaceBetween: 14,
            breakpoints: {
                767.98: {
                    slidesPerView: "auto",
                    spaceBetween: 35,
                },
                991.98: {
                    slidesPerView: 3,
                    spaceBetween: 35,
                }
            }
        })
    }

    if (document.querySelector('.gallery__slider')) {
        new Swiper('.gallery__slider', {
            slidesPerView: "auto",
            spaceBetween: 16,
            navigation: {
                nextEl: ".gallery__next",
                prevEl: ".gallery__prev"
            }
        })
    }

    initAnimation();


});


function initAnimation() {

}
