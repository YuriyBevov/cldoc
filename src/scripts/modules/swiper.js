import Swiper, { Navigation, Thumbs, EffectFade, Pagination, Autoplay } from 'swiper';
Swiper.use([Thumbs, EffectFade, Navigation, Pagination, Autoplay]);

const sliders = document.querySelectorAll('.main-slider');

if(sliders) {
  sliders.forEach(slider => {

    let isAutoplayEnabled = false;
    slider.classList.contains('autoplay') ?
    isAutoplayEnabled = true : isAutoplayEnabled = false;

    let btnNext = slider.parentNode.querySelector('.slider-section-button-next');
    let btnPrev = slider.parentNode.querySelector('.slider-section-button-prev');

    let speed = 300;

    isAutoplayEnabled ? speed = 3000 : speed = 300;

    new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centerInsufficientSlides: true,
      speed,

      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      autoplay: isAutoplayEnabled,
    });
  });
};
