import { variables } from './variables';

export const scrollTop = () => {
  const scrollTopButton = document.querySelector('.scrolltop__button');
  const scrollTopContainer = document.querySelector('.scrolltop');
  const scrollTopPlaceholder = document.querySelector(
    '.scrolltop__placeholder'
  );

  const scrollFunction = () => {
    if (
      document.body.scrollTop > variables.scrollTopOffset ||
      document.documentElement.scrollTop > variables.scrollTopOffset
    ) {
      scrollTopButton.classList.add('active');
    } else {
      scrollTopButton.classList.remove('active');
    }
  };

  if (scrollTopButton) {
    window.onscroll = () => {
      scrollFunction();
    };
    scrollTopButton.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  }

  const footer = document.querySelector('.footer__bottom');

  const options = {
    rootMargin: '0px',
    threshold: 0.0,
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('entry: ', entry.intersectionRatio);
      if (entry.intersectionRatio >= 0.001) {
        console.log('intersect');
        scrollTopContainer.classList.add('static');
        scrollTopPlaceholder.classList.add('uk-hidden');
      } else {
        scrollTopContainer.classList.remove('static');
        scrollTopPlaceholder.classList.remove('uk-hidden');
      }
    });
  }, options);

  io.observe(footer);
};
