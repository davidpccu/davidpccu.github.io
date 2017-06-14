(function($) {
    'use strict';

    jQuery(document).ready(function() {


        /* Preloader */
        /* 網頁onloade， 塞入class */
        $(window).on('load', function() {
            $('body').addClass('loaded');
        });


        /* Smooth Scroll */
        /* 移動至特定區域滑動效果 */
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /* Scroll Naviagation Background Change with Sticky Navigation */
        /* 當滾輪像下滑時，nav 塞入class */

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });


        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });


        /* History slideanim */
        $(window).scroll(function() {
            $(".slideanim").each(function() {
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
            });
        });


        /* Scroll To Top */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });




        /* Typed.js */

        $(window).load(function() {
            $(".typing").typed({
                strings: ["I am Liwen Su.", "I Design Software.", "I Work at ColaTour.", "I have a Pure Passion Of Coding!"],
                typeSpeed: 50
            });
        });


        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });



        /* Statistics Counter */
        /* countUp.js 數字遞增效果 */
        $('.statistics').appear(function() {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });

    });

})(jQuery);
