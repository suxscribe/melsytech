// sliding menu underline
export const menuUnderline = () => {
  const underline = document.querySelector('.header__target');
  const links = document.querySelectorAll('.header__nav-item');
  const header = document.querySelector('.header__nav');

  // find and underline active item
  // follow cursor to underline hovered item
  // return underline back to active item on mouse leave menu

  const mouseenterFunc = (e) => {
    let _this;
    if (e && e.target.classList.contains('header__nav-item')) _this = e.target;
    else _this = document.querySelector('.header__nav-item--active');

    // console.log(_this);

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
    // links[i].addEventListener('click', (e) => e.preventDefault());
    links[i].addEventListener('mouseenter', (e) => {
      mouseenterFunc(e);
    });
  }
  header.addEventListener('mouseleave', (e) => {
    mouseenterFunc(e);
  }); // return underline to active item

  function resizeFunc() {
    const active = document.querySelector('.header__nav-item--active');

    if (active) {
      mouseenterFunc();
    }
  }
  window.addEventListener('resize', resizeFunc);
};
