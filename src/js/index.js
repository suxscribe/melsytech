import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);

window.UIkit = UIkit; // fix not difined bug

// loads the Icon plugin
UIkit.use(Icons);

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../svg/', true, /\.svg$/));

// document.addEventListener('DOMContentLoaded', () => {
//   UIkit.util.on('.header__dropdown', 'beforehide', function(e) {
//     // do something
//     console.log(e);
//     e.preventDefault();
//     e.target.classList.add('classssss');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  (function() {
    const searchForm = document.querySelector('.header__search-form'),
      textInput = searchForm.search,
      clearBtn = textInput.nextSibling;

    clearBtn.style.visibility = textInput.value.length ? 'visible' : 'hidden';

    textInput.onkeyup = function() {
      // Show the clear button if text input value is not empty
      clearBtn.style.visibility = this.value.length ? 'visible' : 'hidden';
    };
    // Hide the clear button on click, and reset the input value
    clearBtn.onclick = function() {
      this.style.visibility = 'hidden';
      textInput.value = '';
    };
  })();

  if (document.querySelector('.page--index')) {
    var swiperProcedures = new Swiper('.index__catalog-slider', {
      
      loop: true,
      loopedSlides: 6,
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


    var swiperProcedures = new Swiper('.procedures__slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },

      loop: true,
      loopedSlides: 6,
      slidesPerView: '1',
      grabCursor: false,
      allowTouchMove: false,
      navigation: {
        nextEl: '.procedures__slider-nav--right',
        prevEl: '.procedures__slider-nav--left',
      },
      keyboard: true,
      onSlideChangeEnd: function(e) {
        console.log(e);
      },
    });

    var swiperProceduresItems = new Swiper('.procedures__slider-right', {
      effect: 'slide',

      loop: true,
      loopedSlides: 6,
      slidesPerView: 'auto',
    });

    // control each swiper
    swiperProcedures.controller.control = swiperProceduresItems;
    swiperProceduresItems.controller.control = swiperProcedures;

    var swiperReviews = new Swiper('.reviews__right-slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },

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

    // document.querySelector('.partners__item-link').addEventListener('click', e => {
    //   document.querySelectorAll('.partners__item-drop').forEach(el => {
    //     el.classList.remove('drop--active');
    //   })
    // });

    var swiperNews = new Swiper('.news__slider', {
      effect: 'slide',
      fadeEffect: {
        crossFade: true,
      },

      loop: true,
      slidesPerView: 'auto',
      allowTouchMove: true,
      navigation: {
        nextEl: '.news__slider-nav--right',
        prevEl: '.news__slider-nav--left',
      },
      keyboard: true,
    });

    function partnersRemoveActive() {
      document.querySelectorAll('.partners__right .uk-active').forEach((el) => {
        el.classList.remove('uk-active');
        // el.classList.add('removed');
        console.log('remove active');
      });
    }
    document.querySelectorAll('.partners__item-drop-close').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        partnersRemoveActive();
      });
    });

    partnersRemoveActive();
  } // page--index
});
