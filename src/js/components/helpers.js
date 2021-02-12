import UIkit from 'uikit';
import Splitting from 'splitting';
import gsap from 'gsap';
import { elements } from './variables';

export const closeOffcanvasIfScroll = () => {
  // close offcanvas on mobile on scroll navigation
  // 1 listen for click on a link with uk-scroll on an offcanvas element
  // 2 close this offcanvas element
  document.querySelectorAll('[uk-offcanvas]').forEach((offcanvas) => {
    offcanvas.addEventListener('click', (ev) => {
      if (ev.target.hasAttribute('uk-scroll')) {
        UIkit.offcanvas(offcanvas).hide();
      }
    });
  });
};

export const setVh = () => {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Fade the page out when click on a link
export const pageFadeOut = () => {
  document.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      event.preventDefault();
      elements.preloader.classList.remove('preloader--hidden');
      // need to wait for animation to finish
      window.location = event.target.href;

      // console.log(event.target);
    }
  });
};

export const introAnimation = () => {
  elements.preloader.classList.add('preloader--hidden');

  var tl = gsap.timeline();
  tl.from('.header', { duration: 1, y: -40, opacity: 0 }, 0);

  if (document.querySelector('.intro__content-1')) {
    Splitting({ target: '.intro__content-1', by: 'words' });

    // tl.from('.intro__content-1', { duration: 1, y: -40, opacity: 0 }, 1);
    document.querySelectorAll('.intro__content-1 .word').forEach((word) => {
      tl.from(
        word,
        { duration: 0.3, ease: 'power2.out', x: -40, opacity: 0 },
        '=-0.2'
      );
    });
    tl.from('.intro__content-2', { duration: 1, y: 40, opacity: 0 }, '=-0.5');
    tl.from('.scrolldown', { duration: 1, y: 40, opacity: 0 }, '=-0.5');
  }
};
