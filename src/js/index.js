import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);
import ymaps from 'ymaps';
import Choices from 'choices.js';
import readmore from './components/readmore.js';
import ripple from './components/ripple';

import gsap from 'gsap';
import Splitting from 'splitting';

import { variables, elements } from './components/variables';
import { productSidebarNavScrollspy } from './components/scrollspy';

import {
  closeOffcanvasIfScroll,
  setVh,
  pageFadeOut,
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
  renderPartnerOffcanvas,
  partnersHover,
  partnersMapClick,
  partnersOpenSidebarRegion,
  partnersMapInit,
  partnersRegionMap,
  partnersListChoicesInit,
} from './components/partners';
import { validateForms } from './components/forms';
import { reviewsSpoilers } from './components/reviews';
import { productTabsScroll } from './components/product';
import { catalogChoicesInit, catalogSectionFilter } from './components/catalog';
import { sidebarSectionInit } from './components/sidebar';

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

  // sliding menu underline
  (function() {
    const target = document.querySelector('.header__target');
    const links = document.querySelectorAll('.header__nav-item');

    function mouseenterFunc() {
      // if (!this.parentNode.classList.contains('active')) {
      // for (let i = 0; i < links.length; i++) {
      //   if (links[i].parentNode.classList.contains('active')) {
      //     links[i].parentNode.classList.remove('active');
      //   }
      //   links[i].style.opacity = '0.25';
      // }

      this.parentNode.classList.add('active');
      this.style.opacity = '1';

      const width = this.getBoundingClientRect().width;
      const height = this.getBoundingClientRect().height;
      const left = this.offsetLeft;
      const top = this.offsetTop;

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.transform = 'none';
    }

    for (let i = 0; i < links.length; i++) {
      // links[i].addEventListener('click', (e) => e.preventDefault());
      links[i].addEventListener('mouseenter', mouseenterFunc);
    }
  })();

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
});

// Wait for everything to load
window.addEventListener('load', function() {
  introAnimation();
});
