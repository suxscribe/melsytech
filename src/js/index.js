//import UIkit from 'uikit';
import UIkit from './vendor/uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);
import ymaps from 'ymaps';
import Choices from 'choices.js';
// import readmore from './components/readmore.js';
import Readmore from 'readmore-js';

import ripple from './components/ripple';

import gsap from 'gsap';
import Splitting from 'splitting';

import { variables, elements } from './components/variables';
import { productSidebarNavScrollspy } from './components/scrollspy';

import {
  closeOffcanvasIfScroll,
  setVh,
  introAnimation,
} from './components/helpers';

import {
  procedureSliders,
  procedureSliders02,
  reviewsSlider,
  newsSlider,
  catalogSlider,
  productAdvantagesSlider,
  applianceProductsSlider,
  historyYearSwipers,
  resultsSwipers,
  resultSwiper,
  contentSlider,
} from './components/swipers';
import { companyMap } from './components/company-map';
import { choicesInit } from './components/choices-init';
import {
  headerScripts,
  crossHover,
  headerApplianceHover,
  initSearch,
} from './components/header';
import { footerAccordion } from './components/footer';
import {
  partnersMapClick,
  partnersOpenSidebarRegion,
  partnersMapInit,
  partnersRegionMap,
  partnersListChoicesInit,
} from './components/partners';
import { validateForms } from './components/forms';
import { reviewsSpoilers, reviewsFilterUtils } from './components/reviews';
import { productTabsScroll } from './components/product';
import { catalogChoicesInit, catalogSectionFilter } from './components/catalog';
import { sidebarSectionInit } from './components/sidebar';
import { menuUnderline } from './components/menu-underline';
import { scrollTop } from './components/scrolltop.js';

window.UIkit = UIkit; // fix not difined bug

// loads the Icon plugin
UIkit.use(Icons);

// some svg magic. SVG to shadow root
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../svg/', true, /\.svg$/));

// set default offset of scroll
UIkit.mixin(
  {
    data: {
      offset: variables.scrollOffset,
    },
  },
  'scroll'
);

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
  // COMMON SCRIPTS
  initSearch('.offcanvas__search-form');
  initSearch('.header__search-form');

  headerScripts();
  headerApplianceHover();

  closeOffcanvasIfScroll();
  footerAccordion();

  choicesInit();
  catalogChoicesInit();

  // try to reinit choices on form refresh
  // document.querySelectorAll('.form-wrap').forEach((form) => {
  //   form.addEventListener(
  //     'DOMSubtreeModified',
  //     function(ev) {
  //       console.log('form reloaded');

  //       choicesInit();
  //     },
  //     false
  //   );
  // });

  setVh();
  validateForms();

  // INITIALIZE SWIPERS
  catalogSlider();
  procedureSliders();
  procedureSliders02();
  reviewsSlider();
  newsSlider();
  productAdvantagesSlider();
  applianceProductsSlider();
  contentSlider();
  // historySlider();
  historyYearSwipers(); // Init multiple swi-кшпре
  resultsSwipers();
  resultSwiper();

  companyMap(); // load map on company page

  // scrollspy navs calculate correct offset
  productSidebarNavScrollspy();

  productTabsScroll();

  // Partners on main page

  partnersMapClick();
  partnersRegionMap();
  partnersListChoicesInit();

  crossHover(
    '.partners__item-link',
    '.partners__map',
    '.partners__map-marker',
    'hover'
  );
  crossHover(
    '.partners__map-marker',
    '.partners__list',
    '.partners__item-link',
    'hover'
  );

  partnersOpenSidebarRegion();
  partnersMapInit();

  sidebarSectionInit(); // toggle menu item if in hash

  // Page-specific scripts
  // partnersRemoveActive();
  catalogSectionFilter(); // init corresponding filter in catalog root page

  // close appliance dropdown menu button
  const applianceDropdownClose = document.querySelector(
    '.header__dropdown-close'
  );
  if (applianceDropdownClose) {
    applianceDropdownClose.addEventListener('click', () => {
      document
        .querySelector('.header__dropdown--appliance')
        .classList.remove('uk-open');
      document.querySelector('.uk-navbar-dropbar').style.height = 0;
    });
  }

  reviewsFilterUtils(); // reinit sidebar sticky to fix overlap
  scrollTop();

  const readmore = new Readmore('.reviews__item-text', {
    speed: 75,
    moreLink: '<a href="#" class="reviews__item-text-readmore">Развернуть</a>',
    lessLink: '',
    afterToggle: () => {
      UIkit.grid('.reviews__list', { masonry: true });
    },
  });
});

// Wait for everything to load
window.addEventListener('load', function () {
  introAnimation();
  menuUnderline();
});
