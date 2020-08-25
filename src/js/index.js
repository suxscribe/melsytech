import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);
import ymaps from 'ymaps';
import Choices from 'choices.js';
import readmore from './components/readmore.js';

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

let procedureSliders = () => {
  if (document.querySelector('.procedures__slider--01')) {
    var swiperProcedures = new Swiper('.procedures__slider--01', {
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

let procedureSliders02 = () => {
  if (document.querySelector('.procedures__slider--02')) {
    var swiperProcedures02 = new Swiper('.procedures__slider--02', {
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

let reviewsSlider = () => {
  if (document.querySelector('.reviews__right-slider')) {
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
  }
};

let catalogSlider = () => {
  if (document.querySelector('.index__catalog-slider')) {
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
  }
};

let productAdvantagesSlider = () => {
  if (document.querySelector('.product-section-advantages__slider')) {
    var swiperAdvantages = new Swiper('.product-section-advantages__slider', {
      // loop: true,
      // loopedSlides: 6,
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

let applianceProductsSlider = () => {
  if (document.querySelector('.appliance-section-products__slider')) {
    var swiperProducts = new Swiper('.appliance-section-products__slider', {
      // loop: true,
      // loopedSlides: 6,
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

// Count current and total slide count on change

// Init multiple swipers by data-attribute with specific settings
const historyYearSwipers = () => {
  // const historySlideCount = (swiper, swip) => ;

  const swipers = document.querySelectorAll('[data-swiper="swiper"]');
  swipers.forEach((swip) => {
    let dataSwiper = new Swiper(swip, {
      loop: true,
      // loopedSlides: 6,
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
          const slideCurrent = swip.querySelector(
            '.history__accordion-slider-current'
          );
          const slideOverall = swip.querySelector(
            '.history__accordion-slider-overall'
          );

          slideCurrent.innerHTML = swiper.realIndex + 1;
          slideOverall.innerHTML =
            swiper.slides.length - swiper.loopedSlides * 2;
        },
      },
    });
  });
};

const companyMap = () => {
  const mapBlock = document.querySelector('.company__map');
  if (mapBlock) {
    const coordinates = JSON.parse(
      decodeURIComponent(mapBlock.dataset.coordinates)
    );
    console.log(coordinates);

    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?apikey=7831c6db-8a7f-49d5-a7b7-c567b1e05675&lang=ru_RU'
      )
      .then((maps) => {
        const myMap = new maps.Map('map', {
          center: coordinates,
          zoom: 16,
          controls: [],
        });
        myMap.controls.add('zoomControl', {
          left: 5,
          top: 60,
        });
        myMap.behaviors.disable('scrollZoom');

        var myPlacemark1 = new maps.Placemark(
          coordinates,
          {
            hintContent: 'ул. Торфяная, 30',
            balloonContent: '603139, г. Нижний Новгород, ул.Торфяная, 30 ',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../assets/icon_geo@2x.png',
            iconImageSize: [48, 58],
            iconImageOffset: [-24, -58],
          }
        );
        myMap.geoObjects.add(myPlacemark1);
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));
  }
};

const reviewsSpoilers = () => {
  document.querySelectorAll('.reviews__item-text').forEach((review) => {
    if (review.offsetHeight > 200) {
    }
  });
};

const headerScripts = () => {
  const headerSearch = document.querySelector('.header__search');
  if (headerSearch) {
    headerSearch.addEventListener('click', (e) => {
      document.querySelector('.header__search-input').focus();
      console.log('focus');
    });
  }
};

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
  // Search form clear button
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
  (function() {
    const searchForm = document.querySelector('.offcanvas__search-form'),
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

  headerScripts();

  const footerAccordion = () => {
    // on resize
    // if more than medium
    // destroy accordion
    // else
    // init accordion
    const footerAccordionInitDestroy = () => {
      document
        .querySelectorAll('.footer__column--accordion')
        .forEach((column) => {
          if (window.innerWidth < 640) {
            UIkit.accordion(column, {
              active: true,
            });
          } else {
            if (
              column.__uikit__ &&
              column.__uikit__.hasOwnProperty('accordion')
            )
              column.__uikit__.accordion.$destroy();
          }
        });
    };

    footerAccordionInitDestroy();
    window.addEventListener('resize', (e) => {
      footerAccordionInitDestroy();
    });
  };

  // INITIALIZE SWIPERS if present
  catalogSlider();

  procedureSliders();
  procedureSliders02();

  reviewsSlider();

  productAdvantagesSlider();

  applianceProductsSlider();

  // historySlider();

  historyYearSwipers(); // Init multiple swipers

  companyMap(); // load map on company page

  footerAccordion();

  // Page-specific scripts
  if (document.querySelector('.page--index')) {
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

  if (document.querySelector('.page--product')) {
    const scrollToOffset = (targetCls, offsetCls) => {
      const yOffset = document.querySelector(offsetCls).offsetHeight;
      const scrollTo = document.querySelector(targetCls);
      const y =
        scrollTo.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    // Smooth scroll back to tab top
    document.querySelectorAll('.product__tabs-item a').forEach((item) => {
      item.addEventListener('click', () => {
        scrollToOffset('#product__content', '.product__top');

        // .scrollIntoView({
        //   behavior: 'smooth'
        // });
      });
    });
  } // page--product

  if (document.querySelector('.page--partners')) {
    // DEFAULT MAP
    let mapCenter;

    const getMapCenter = () => {
      mapCenter = [56.349619, 43.80727];
      return mapCenter;
    };

    // ymaps
    //   .load(
    //     'https://api-maps.yandex.ru/2.1/?apikey=7831c6db-8a7f-49d5-a7b7-c567b1e05675&lang=ru_RU'
    //   )
    //   .then((maps) => {
    //     const myMap = new maps.Map('map', {
    //       center: getMapCenter(),
    //       zoom: 16,
    //       controls: [],
    //     });
    //     myMap.controls.add('zoomControl', {
    //       left: 5,
    //       top: 60,
    //     });
    //     myMap.behaviors.disable('scrollZoom');

    //     var myPlacemark1 = new maps.Placemark(
    //       [56.349619, 43.80727],
    //       {
    //         hintContent: 'ул. Торфяная, 30',
    //         balloonContent: '603139, г. Нижний Новгород, ул.Торфяная, 30 ',
    //       },
    //       {
    //         iconLayout: 'default#image',
    //         iconImageHref: '../assets/icon_geo@2x.png',
    //         iconImageSize: [48, 58],
    //         iconImageOffset: [-24, -58],
    //       }
    //     );
    //     myMap.geoObjects.add(myPlacemark1);
    //   })
    //   .catch((error) => console.log('Failed to load Yandex Maps', error));

    // TODO
    // 1 LOAD MAP
    // 2 MAKE OBJECT OF OBJECTS
    // 3 ADD OBJECT OF OBJECTS TO MAP

    var gtMap = null;
    var myObjects = null;
    var GtClusterOptions = {
      preset: 'islands#darkGreenClusterIcons',
      groupByCoordinates: false,
      gridSize: 80,
      useMapMargin: true,
    };

    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?apikey=7831c6db-8a7f-49d5-a7b7-c567b1e05675&lang=ru_RU'
      )
      .then((maps) => {
        var mapW = document.getElementById('map').offsetWidth,
          mapH = document.getElementById('map').offsetHeight;
        var cityBounds = [
          ['56.237211530656', '43.822442978636'],
          ['56.366485730423', '44.077699371947'],
        ];
        var currentMapParams = {};
        if (!!cityBounds) {
          currentMapParams = maps.util.bounds.getCenterAndZoom(
            cityBounds,
            [mapW, mapH],
            false,
            { margin: 30 }
          );
          if (currentMapParams.zoom > 15) {
            currentMapParams.zoom = 14;
          }
        } else {
          currentMapParams = {
            center: [55.722801, 37.674],
            zoom: 10,
          };
        }
        maps.option.presetStorage.add('gemotest#labs', {
          iconLayout: 'default#image',
          iconImageHref: '../assets/icon_geo@2x.png',
          iconImageSize: [48, 58],
          iconImageOffset: [-24, -58],
        });
        gtMap = new maps.Map('map', {
          center: currentMapParams['center'],
          zoom: currentMapParams['zoom'],
          controls: ['zoomControl'], // ,'fullscreenControl'
        });
        gtMap.behaviors.disable('scrollZoom');
        gtMap.margin.addArea({
          right: 100,
          top: 0,
          width: 310,
          height: 800,
        });
        myObjects = maps.geoQuery({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.249586999999998, 43.856462000000001],
              },
              properties: {
                poi_id: '109669',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u041a\u0438\u0440\u043e\u0432\u0430, \u0434. 8',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.283085404139001, 43.981540238778003],
              },
              properties: {
                poi_id: '96881',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_25_115_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u0413\u0430\u0433\u0430\u0440\u0438\u043d\u0430, \u0434. 66, \u043f\u043e\u043c. \u041f1',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.238179239262998, 43.956534805555997],
              },
              properties: {
                poi_id: '90294',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_25_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u0413\u0430\u0433\u0430\u0440\u0438\u043d\u0430, \u0434.101, \u043a\u043e\u0440\u043f. 4',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.346831815412003, 43.867681855820003],
              },
              properties: {
                poi_id: '83067',
                poi_service: '_74_8_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u042e\u0431\u0438\u043b\u0435\u0439\u043d\u044b\u0439 \u0431-\u0440, \u0434. 2',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.336608195598998, 43.919419921322998],
              },
              properties: {
                poi_id: '78219',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_25_27_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f, \u0434. 38',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.366485730423001, 43.822442978635998],
              },
              properties: {
                poi_id: '78118',
                poi_service: '_74_8_7_',
                poi_doctors: '_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u041a\u043e\u0440\u0430\u0431\u043b\u0435\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u0435\u0439, \u0434. 4',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.291581300548998, 44.004525991401998],
              },
              properties: {
                poi_id: '77975',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_25_27_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u0411\u0435\u043a\u0435\u0442\u043e\u0432\u0430, \u0434. 21/16',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.316196183365001, 43.997555807951997],
              },
              properties: {
                poi_id: '77868',
                poi_service: '_102_74_8_13_7_',
                poi_doctors: '_25_27_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u0417\u0432\u0435\u0437\u0434\u0438\u043d\u043a\u0430, \u0434. 7',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.313947568373003, 44.018695237434002],
              },
              properties: {
                poi_id: '72703',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_24_27_30_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u0412\u0430\u043d\u0435\u0435\u0432\u0430, \u0434. 6',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.282882086268003, 44.034590181139002],
              },
              properties: {
                poi_id: '68693',
                poi_service: '_74_8_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0431-\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u043a\u0430 \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430, \u0434. 4',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.295818334906997, 44.077699371946998],
              },
              properties: {
                poi_id: '68669',
                poi_service: '_74_8_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u041a\u0430\u0437\u0430\u043d\u0441\u043a\u043e\u0435 \u0448., \u0434. 4',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.289873467234997, 43.932516601852001],
              },
              properties: {
                poi_id: '61029',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u041b\u0435\u043d\u0438\u043d\u0430, \u0434. 26',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.260382171581, 43.857671660049],
              },
              properties: {
                poi_id: '30499',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u041f\u043b\u043e\u0442\u043d\u0438\u043a\u043e\u0432\u0430, \u0434. 3',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.237211530655998, 43.843292537723997],
              },
              properties: {
                poi_id: '17951',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u042f\u043d\u043a\u0438 \u041a\u0443\u043f\u0430\u043b\u044b, \u0434. 38',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.358122942705997, 43.852419421011],
              },
              properties: {
                poi_id: '16280',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u043f\u0440\u043e\u0441\u043f. \u0421\u043e\u044e\u0437\u043d\u044b\u0439, \u0434. 2',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [56.343892473445003, 43.931983205724997],
              },
              properties: {
                poi_id: '14062',
                poi_service: '_74_8_13_7_',
                poi_doctors: '_covid_cov_ifa_igm_cov_ifa_igg_',
                poi_city: '41194',
                poi_region: '81',
                list_city: null,
                list_address:
                  '\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434, \u0443\u043b. \u041a\u0430\u0440\u043b\u0430 \u041c\u0430\u0440\u043a\u0441\u0430, \u0434. 20',
              },
              options: { hasBalloon: true, preset: 'gemotest#labs' },
            },
          ],
        });

        // UPDATE MAP ON SELECT
        // $('.gt-map__aside input, .gt-map__aside select').on('change', function() {
        //   checkState();
        // });
        function checkState(regions) {
          var shownObjects;
          //currentDoctorsId = $('.gt-map__doctors  input:checked'),
          //currentServiceId = $('.gt-map__services input:checked');

          shownObjects = myObjects;

          if (regions != undefined) {
            // $('.js-map-city')
            //   .val('0')
            //   .trigger('chosen:updated');
            var shownRegionParts = [];
            regions.forEach((val) => {
              shownRegionParts.push(
                shownObjects.search('properties.poi_region = "' + val + '"')
              );
            });
            shownObjects = new ymaps.GeoQueryResult();
            shownRegionParts.forEach((shownPart) => {
              try {
                var iterator = shownPart.getIterator();
                while ((obj = iterator.getNext())) {
                  if (obj.properties == undefined) break;
                  shownObjects = shownObjects.add(obj);
                }
              } catch (ex) {}
            });
          }

          gtMap.geoObjects.removeAll();

          var objCnt = shownObjects.getLength();
          if (objCnt > 0) {
            var iterator = shownObjects.getIterator();
            var clusterer = shownObjects.clusterize(GtClusterOptions);
            gtMap.geoObjects.add(clusterer);
            clusterer.events.add('click', function(e) {
              var target = e.get('target'),
                type = e.get('type');
              if (typeof target.getGeoObjects == 'undefined') {
                // $.ajax({
                //   url: '/ajax/labInfoPopup.php',
                //   data: { ID: target.properties.get('poi_id') },
                //   success: function(data) {
                //     $('#popup-offices-map-balloon').html(data);
                //     func.jsScroll();
                //     $('#popup-offices-map').show();
                //   },
                // });
                return false;
              }
            });
          }
        }

        // FIRST INIT ADD OBJECTS TO MAP
        checkState();
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));

    // MAP select
    // Pass single element
    const element = document.querySelector('.js-choice');

    // Passing options (with default options)
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      noResultsText: '',
      noChoicesText: '',
      shouldSort: false,
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
    });

    // TODO
  }

  if (document.querySelector('.page--reviews')) {
    // update masonry grid
    //const reviewTexts = document.querySelectorAll('.reviews__item-text');
    // reviewsTexts.forEach((text) => {
    //   text.addEventListener('click', () => {
    //     UIkit.update(
    //       document.querySelector('.reviews__list'),
    //       (type = 'update')
    //     );
    //   });
    // });
  }
});
