// import UIkit from 'uikit';

export const sidebarSectionInit = () => {
  if (document.querySelector('.page--appliance-catalog')) {
    const sidebarSectionToggle = (section) => {
      const sectCode = section || window.location.hash.replace(/^#/, ''); // get hash
      if (sectCode != '') {
        const sectLink = document.querySelector(
          `a[data-section="${sectCode}"]`
        ); // find menu section

        const sect = sectLink.closest('.sidebar__mnav-section');
        UIkit.drop('.header__dropdown--appliance').hide(false);

        if (!sect.classList.contains('uk-open')) {
          // check if it's opened already
          const parent = sect.parentNode;
          const index = Array.prototype.indexOf.call(parent.children, sect);
          UIkit.nav('.sidebar__mnav').toggle(index); // place index here
        }
      }
    };
    sidebarSectionToggle();
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('header__dropdown-menu-section')) {
        console.log(e.target.getAttribute('href').replace(/^.*#/, ''));
        const section = e.target.getAttribute('href').replace(/^.*#/, '');
        sidebarSectionToggle(section);
      }
    });
  }
};
