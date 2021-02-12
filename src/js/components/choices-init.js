import Choices from 'choices.js';

export const choicesInit = () => {
  const selects = document.querySelectorAll('.js-choice');
  if (selects) {
    selects.forEach((select) => {
      const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        noResultsText: '',
        noChoicesText: '',
        shouldSort: false,
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
      });
    });
  }
};
