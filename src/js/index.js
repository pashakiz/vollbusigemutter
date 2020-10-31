import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = $('#page-preloader');
            if ( !preloader.hasClass('done') ) {
                preloader.addClass('done');
            }
        }, 1000);

        //mobile menu expand
        $('.header').on('click', '.header__nav-toggle', function(){
            let header_menu = $(this).closest('.header').find('.header-menu');
            if ( $('.header').hasClass('expand') ) {
                header_menu.slideUp(300);
                setTimeout(function() {
                    $('.header').removeClass('expand');
                }, 300);
            } else {
                header_menu.slideDown(300);
                $('.header').addClass('expand');
            }
        });

        //upload photo
        $('.custom-file-input').on('change', function(){
            let imageUrl = 'img/photos/ava.jpg';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')').addClass('is_photo');
        });

        //slider (Profile gallery) for mobile
        $('.owl-carousel.user-profile-slider').owlCarousel({
            items: 1,
            dots:true
        });

        //slider (Profile gallery) for desktop
        $('.owl-carousel.user-list_slider').owlCarousel({
            loop: true,
            dots: false,
            items: 4,
            margin: 24,
            autoWidth: true,
            responsive:{
                1200:{
                    margin: 25
                },
                1410:{
                    margin: 49
                }
            }
        });

        //slider (user_list extra) for mobile only
        owlUserListExtraInit();

    });

    function owlUserListExtraInit() {
        if (window.innerWidth < 1200) {
            document.querySelector('.user-list-extra').classList.add('owl-carousel');
            $('.owl-carousel.user-list-extra').owlCarousel({
                loop: true,
                dots: true,
                items: 2,
                margin: 22,
                autoWidth: true,
                responsive:{
                    768:{
                        items: 4
                    }
                }
            });
        } else {
            $('.owl-carousel.user-list-extra').owlCarousel('destroy');
            document.querySelector('.user-list-extra').classList.remove('owl-carousel');
        }
    }

    $(window).resize(function() {
        owlUserListExtraInit();
    });

});