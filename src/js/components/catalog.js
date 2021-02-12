import Choices from 'choices.js';
import UIkit from 'uikit';

export const catalogChoicesInit = () => {
  const catalogSelect = document.querySelector('.js-choice--catalog');
  if (catalogSelect) {
    const choices = new Choices(catalogSelect, {
      searchEnabled: false,
      itemSelectText: '',
      noResultsText: '',
      noChoicesText: '',
      shouldSort: false,
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
    });

    // pass click on dropdown element to hidden filter element

    const filterControls = document.querySelectorAll(
      '.catalog__sections-item a'
    );
    if (filterControls.length > 0) {
      choices.passedElement.element.addEventListener('choice', (e) => {
        console.log(e.detail.choice.id);
        const filterControlId = e.detail.choice.id - 1;
        filterControls[filterControlId].click();
      });
    }
  }
};

export const catalogSectionFilter = () => {
  const filterComp = UIkit.getComponent(
    document.querySelector('.catalog__content[uk-filter]'),
    'filter'
  );
  const urlParams = new URLSearchParams(window.location.search); // replace with window.location.search
  if (urlParams.has('filter')) {
    const filterVal = urlParams.get('filter');
    console.log('filter:' + filterVal);

    // var filter = document.querySelector('.js-filter');
    // var filterBar = document.querySelector('.catalog__sections');
    // var activeFilter = document.querySelector(
    //   'a[uk-filter-control="[data-tags*=\'' + filterVal + '\']"]'
    // );
    // UIkit.filter(filterBar, {
    //   target: filter,
    //   selActive: activeFilter,
    // });
    // UIkit.update();

    document.querySelectorAll('a[uk-filter-control]').forEach((item) => {
      item.classList.remove('uk-active');

      if (
        item.getAttribute('uk-filter-control') === `[data-tags*='${filterVal}']`
      ) {
        item.classList.add('uk-active');
        filterComp.apply(item);
      }
    });
  }
};
