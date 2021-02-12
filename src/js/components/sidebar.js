export const sidebarSectionInit = () => {
  if (document.querySelector('.page--appliance-catalog')) {
    const sectCode = window.location.hash.replace(/^#/, ''); // get hash
    if (sectCode != '') {
      const sectLink = document.querySelector(`a[data-section="${sectCode}"]`); // find menu section
      const sect = sectLink.closest('.sidebar__mnav-section');
      if (!sect.classList.contains('uk-open')) {
        // check if it's opened already
        const parent = sect.parentNode;
        const index = Array.prototype.indexOf.call(parent.children, sect);
        UIkit.nav('.sidebar__mnav').toggle(index); // place index here
      }
    }
  }
};
