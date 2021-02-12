import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import { variables, elements } from './variables';

export let procedureSliders = () => {
  if (document.querySelector('.procedures__slider--01')) {
    var swiperProcedures = new Swiper('.procedures__slider--01', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: variables.swiperSpeed,
      loop: true,
      loopedSlides: 6,
      slidesPerView: '1',
      grabCursor: false,
      allowTouchMove: false,
      navigation: {
        nextEl: '.procedures__slider--01-nav--right',
        prevEl: '.procedures__slider--01-nav--left',
      },
      keyboard: true,
      onSlideChangeEnd: function(e) {
        console.log(e);
      },
    });

    var swiperProceduresItems = new Swiper('.procedures__slider-right--01', {
      effect: 'slide',

      loop: true,
      loopedSlides: 6,
      slidesPerView: 'auto',
    });

    // control each swiper
    swiperProceduresItems.controller.control = swiperProcedures;
    swiperProcedures.controller.control = swiperProceduresItems;
  }
};

export let procedureSliders02 = () => {
  if (document.querySelector('.procedures__slider--02')) {
    var swiperProcedures02 = new Swiper('.procedures__slider--02', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: variables.swiperSpeed,
      loop: true,
      loopedSlides: 6,
      slidesPerView: '1',
      grabCursor: false,
      allowTouchMove: false,
      navigation: {
        nextEl: '.procedures__slider--02-nav--right',
        prevEl: '.procedures__slider--02-nav--left',
      },
      keyboard: true,
      onSlideChangeEnd: function(e) {
        console.log(e);
      },
    });

    var swiperProceduresItems02 = new Swiper('.procedures__slider-right--02', {
      effect: 'slide',

      loop: true,
      loopedSlides: 6,
      slidesPerView: 'auto',
    });

    // control each swiper
    swiperProceduresItems02.controller.control = swiperProcedures02;
    swiperProcedures02.controller.control = swiperProceduresItems02;
  }
};

export let reviewsSlider = () => {
  if (document.querySelector('.reviews__right-slider')) {
    var swiperReviews = new Swiper('.reviews__right-slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: variables.swiperSpeed,
      loop: true,
      slidesPerView: '1',
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.reviews__slider-nav--right',
        prevEl: '.reviews__slider-nav--left',
      },
      keyboard: true,
    });
  }
};
export let newsSlider = () => {
  if (document.querySelector('.news__slider')) {
    var swiperNews = new Swiper('.news__slider', {
      effect: 'slide',
      fadeEffect: {
        crossFade: true,
      },
      speed: variables.swiperSpeed,
      loop: true,
      slidesPerView: 'auto',
      allowTouchMove: true,
      navigation: {
        nextEl: '.news__slider-nav--right',
        prevEl: '.news__slider-nav--left',
      },
      keyboard: true,
    });
  }
};

export let catalogSlider = () => {
  if (document.querySelector('.index__catalog-slider')) {
    var swiperProcedures = new Swiper('.index__catalog-slider', {
      loop: true,
      loopedSlides: 6,
      speed: variables.swiperSpeed,
      slidesPerView: 'auto',
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.index__catalog-slider-nav--right',
        prevEl: '.index__catalog-slider-nav--left',
      },
      keyboard: true,
      onSlideChangeEnd: function(e) {
        console.log(e);
      },
    });
  }
};

export let productAdvantagesSlider = () => {
  if (document.querySelector('.product-section-advantages__slider')) {
    var swiperAdvantages = new Swiper('.product-section-advantages__slider', {
      // loop: true,
      // loopedSlides: 6,
      speed: variables.swiperSpeed,
      slidesPerView: 'auto',
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.product-section-advantages__nav--right',
        prevEl: '.product-section-advantages__nav--left',
      },
      keyboard: true,
    });
  }
};

export let applianceProductsSlider = () => {
  if (document.querySelector('.appliance-section-products__slider')) {
    var swiperProducts = new Swiper('.appliance-section-products__slider', {
      // loop: true,
      // loopedSlides: 6,
      speed: variables.swiperSpeed,
      slidesPerView: 'auto',
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.appliance-section-products__nav--right',
        prevEl: '.appliance-section-products__nav--left',
      },
      keyboard: true,
    });
  }
};

// Init multiple swipers by data-attribute with specific settings
export const historyYearSwipers = () => {
  // const historySlideCount = (swiper, swip) => ;

  const swipers = document.querySelectorAll('[data-swiper="swiper"]');
  swipers.forEach((swip) => {
    let dataSwiper = new Swiper(swip, {
      loop: true,
      // loopedSlides: 6,
      speed: variables.swiperSpeed,
      slidesPerView: 1,
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: swip.querySelector('.slider__arrow--right'),
        prevEl: swip.querySelector('.slider__arrow--left'),
      },
      keyboard: true,
      on: {
        slideChange: (swiper) => {
          const slideCurrent = swip.querySelector('.history__swiper-current');
          const slideOverall = swip.querySelector('.history__swiper-overall');

          slideCurrent.innerHTML = swiper.realIndex + 1;
          slideOverall.innerHTML =
            swiper.slides.length - swiper.loopedSlides * 2;
        },
      },
    });
  });
};

export const resultSwiper = () => {
  let swiperResults = new Swiper('.results__slider', {
    // loop: true,
    // loopedSlides: 6,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    speed: variables.swiperSpeed,
    slidesPerView: 1,
    grabCursor: false,
    allowTouchMove: false,
    watchSlidesVisibility: true, //fix disabled slide item on page load
    navigation: {
      nextEl: '.results__slider-nav--right',
      prevEl: '.results__slider-nav--left',
    },
    keyboard: false,
  });
};

// Init multiple swipers by data-attribute with specific settings
export const resultsSwipers = () => {
  // const historySlideCount = (swiper, swip) => ;

  const swipers = document.querySelectorAll('[data-swiper="results"]');
  swipers.forEach((swip) => {
    let dataSwiper = new Swiper(swip, {
      loop: true,
      // loopedSlides: 6,
      speed: variables.swiperSpeed,
      slidesPerView: 'auto',
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: swip.querySelector('.results__slider-right-arrow--right'),
        prevEl: swip.querySelector('.results__slider-right-arrow--left'),
      },
      // keyboard: true,
      nested: true,
    });
  });
};

// let historySlider = () => {
//   if (document.querySelector('.history__accordion-slider')) {
//     var swiperHistory = new Swiper('.history__accordion-slider', {
//       loop: true,
//       // loopedSlides: 6,
//       slidesPerView: 1,
//       grabCursor: false,
//       allowTouchMove: true,
//       navigation: {
//         nextEl: '.history__accordion-slider-nav--right',
//         prevEl: '.history__accordion-slider-nav--left',
//       },
//       keyboard: true,
//       on: {
//         slideChange: historySlideCount,
//       },
//     });
//   }
// };
