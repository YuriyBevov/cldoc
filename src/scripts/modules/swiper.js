import Swiper, {
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
  Autoplay,
} from "swiper";
Swiper.use([Thumbs, EffectFade, Navigation, Pagination, Autoplay]);

const topBannerSlider = document.querySelector(".top-banner .swiper");

if (topBannerSlider) {
  new Swiper(topBannerSlider, {
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
      el: ".top-banner .swiper-pagination",
      clickable: true,
    },
  });
}

const sliders = document.querySelectorAll(".main-slider");

if (sliders) {
  sliders.forEach((slider) => {
    let isAutoplayEnabled = false;
    slider.classList.contains("autoplay")
      ? (isAutoplayEnabled = true)
      : (isAutoplayEnabled = false);

    let btnNext = slider.parentNode.querySelector(
      ".slider-section-button-next"
    );
    let btnPrev = slider.parentNode.querySelector(
      ".slider-section-button-prev"
    );

    let speed = 300;

    isAutoplayEnabled ? (speed = 3000) : (speed = 300);

    new Swiper(slider, {
      slidesPerView: 1,
      breakpoints: {
        767: {
          slidesPerView: 2,
        },

        1139: {
          slidesPerView: 3,
        },
      },
      spaceBetween: 0,
      centerInsufficientSlides: false,
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
      pagination: {
        el: ".main-slider .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  });
}
