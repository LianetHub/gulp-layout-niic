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


    initAnimation();


});


function initAnimation() {

}
