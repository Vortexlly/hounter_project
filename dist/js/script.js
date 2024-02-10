$(document).ready(function(){
  $('.featured__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    nextArrow: $('.featured__btn__prev'),
    prevArrow: $('.featured__btn__next'),
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true
  });
});

$(document).ready(function(){
  $('.promo__peoples').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'linear'
  });
});

$(document).ready(function(){
  $('.review__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    dotsClass: "review__dots",
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true
  });
});

$('.review__dots .review__dots-item').click(function(){
  var index = $(this).index();
  $('.review__wrapper').slick('slickGoTo', index);
});

$('.review__wrapper').on('afterChange', function(event, slick, currentSlide){
  $('.review__dots .review__dots-item_active').removeClass('review__dots-item_active');
  $('.review__dots .review__dots-item').eq(currentSlide).addClass('review__dots-item_active');
});

const slider = document.querySelector('.slick-track');
console.log(slider);

