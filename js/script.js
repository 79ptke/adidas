$(document).ready(function () {


            //스크롤 시 메뉴바 색상 변경
            //    $(function () {
            //        var $header = $('header');
            //        var $page = $('header');
            //        var $window = $(window);
            //        var pageOffsetTop = $page.offset().top;
            //
            //        $window.resize(function () {
            //            pageOffsetTop = $page.offset().top;
            //        });
            //
            //        $window.on('scroll', function () {
            //            if ($(window).scrollTop() > 80) {
            //                $("header").addClass("down");
            //            } else {
            //                $("header").removeClass("down");
            //            }
            //
            //        });
            //    });







            //햄버거 토글    
            $(".hamburger").click(function () {

                $(".moblie-nav-wrap").addClass('active');

            });

            $(".moblie-nav-wrap > .r-wrap > .X-btn,.moblie-nav-wrap > .r-wrap ").click(function () {

                $(".moblie-nav-wrap").removeClass('active');

            });


            //햄버거 안 메뉴    
            $(".moblie-nav-wrap > .l-wrap > .moblie-nav > ul > li").click(function () {

                if ($(this).hasClass("active") == true) {
                    $(this).removeClass("active");
                } else if ($(this).hasClass("active") == false) {

                    $(".moblie-nav-wrap > .l-wrap > .moblie-nav > ul > li").removeClass("active");
                    $(this).addClass("active");
                }
            });









            //메인 슬라이드
            var myswiper = new Swiper('.mySwiper', {

                effect: 'slide',
                keyboard: true,
                loop: true,
                autoplay: true,
                speed: 1000,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },


            });






            //2번째 슬라이드
            var swiperslide = new Swiper('.swiper-container.slide02', {

                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: true,
                speed: 600,

                breakpoints: {
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    960: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    580: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }



            });


            //3번째 슬라이드
            function SliderBox1__init() {
                $(".sports-slider-box-1 > .sports-photo").slick({
                    autoplay: true,
                    autoplaySpeed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows: false,
                    asNavFor: ".sports-slider-box-2 > .sports-photo"
                });
            }

            $('.sports-slider-box-2 > .sports-photo').slick({
                centerMode: true,
                centerPadding: '60px',
                asNavFor: ".sports-slider-box-1 > .sports-photo",
                slidesToShow: 3,
                variableWidth: true, //slide 너비 내 마음대로 조정

            });

            SliderBox1__init();

            //    $(function () {
            //        
            //    });
            //
            //    $(function () {
            //        SliderBox2__init();
            //    });









            //section05 탭 메뉴    
            $("section05 > .item-wrap > .btn-wrap > div").click(function () {

                var contents = $(this).index();

                $("section05 > .item-wrap > .btn-wrap > div").removeClass("on");
                $("section05 > .item-wrap > .btn-wrap > div").eq(contents).addClass("on");


                $("section05 > .item-wrap > .contents-wrap > div").removeClass("on");
                $("section05 > .item-wrap > .contents-wrap > div").eq(contents).addClass("on");

            });








                $(window).scroll(function () {
                    var heightScroll = $(this).scrollTop();
            
                    if (1000 <= heightScroll) {
                        $('.up-btnp').css('display', 'none');
                    } else {
                        $('.up-btn').css('display', 'block');
                    }
                });
            
            
            
                $('.up-btn').click(function () {
                    $('html, body').animate({
                        scrollTop: '0'
                    }, 800);
                });









            });
