// sliding menu underline
export const menuUnderline = () => {
  const underline = document.querySelector('.header__target');
  const links = document.querySelectorAll('.header__nav-item');
  const header = document.querySelector('.header__nav');

  // find and underline active item
  // follow cursor to underline hovered item
  // return underline back to active item on mouse leave menu

  const getActiveItem = () =>
    document.querySelector('.header__nav-item--active');

  const mouseenterFunc = (e) => {
    let _this;
    const activeSubItem = document.querySelector(
      '.header__company-menu-item--active'
    );
    const activeItem = document.querySelector('.header__nav-item--active');

    // if subitem is active - find it's parent and add active class to it
    if (activeSubItem) {
      const activeItemParent = activeSubItem.closest('.header__dropdown');
      if (activeItemParent) {
        const activeItem = activeItemParent.previousElementSibling;
        activeItem.classList.add('header__nav-item--active');
      }
    }

    // define item to underline
    if (e && e.target.classList.contains('header__nav-item')) {
      _this = e.target;
    } else if (getActiveItem()) {
      _this = getActiveItem();
    } else _this = document.querySelector('.header__nav-item-dummy');

    const width = _this.offsetWidth;
    const height = _this.offsetHeight;
    const left = _this.offsetLeft;
    const top = _this.offsetTop;

    underline.style.width = `${width}px`;
    underline.style.height = `${height}px`;
    underline.style.left = `${left}px`;
    underline.style.top = `${top}px`;
    underline.style.transform = 'none';
  };

  mouseenterFunc();

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', (e) => {
      mouseenterFunc(e);
    });
  }
  header.addEventListener('mouseleave', (e) => {
    mouseenterFunc(e);
  }); // return underline to active item

  function resizeFunc() {
    mouseenterFunc();
  }
  window.addEventListener('resize', resizeFunc);
};
