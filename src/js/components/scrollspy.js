export const productSidebarNavScrollspy = () => {
  if (document.querySelector('.scrollspy')) {
    UIkit.scrollspyNav('.scrollspy', {
      closest: 'li',
      offset: window.innerHeight / 3,
    });
  }

  // TODO ADD CHECK IF SCROLLSPY ALREADY INITED. can update offset with: UIkit.scrollspyNav('.page-content__sidebar-nav').offset = newOffset
};
