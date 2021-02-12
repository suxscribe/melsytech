export const footerAccordion = () => {
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
          if (column.__uikit__ && column.__uikit__.hasOwnProperty('accordion'))
            column.__uikit__.accordion.$destroy();
        }
      });
  };

  footerAccordionInitDestroy();

  window.addEventListener('resize', (e) => {
    footerAccordionInitDestroy();
  });
};
