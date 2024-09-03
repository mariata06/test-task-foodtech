/* global Swiper */
/* eslint-disable no-unused-vars */
const initFaqSlider = () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  window.addEventListener('resize', () => {
    swiper.update();
  });
};

/* eslint-enable no-unused-vars */

export {initFaqSlider};
