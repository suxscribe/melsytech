// override scroll offset on product page

// Smooth scroll back to tab top
export const productTabsScroll = () => {
  const scrollToOffset = (targetCls, offsetCls) => {
    const yOffset = document.querySelector(offsetCls).offsetHeight;
    const scrollTo = document.querySelector(targetCls);
    const y =
      scrollTo.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  document.querySelectorAll('.product__tabs-item a').forEach((item) => {
    item.addEventListener('click', () => {
      scrollToOffset('#product__content', '.product__top');

      // .scrollIntoView({
      //   behavior: 'smooth'
      // });
    });
  });
};
