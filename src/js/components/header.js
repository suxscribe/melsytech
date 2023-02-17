export const headerScripts = () => {
  const headerSearch = document.querySelector('.header__search');
  if (headerSearch) {
    headerSearch.addEventListener('click', (e) => {
      document.querySelector('.header__search-input').focus();
      console.log('focus');
    });
  }
};

export const crossHover = (
  hoverSelector,
  targetContainer,
  targetItem,
  dataAttribute
) => {
  document.querySelectorAll(hoverSelector).forEach((el) => {
    const appliance = el.dataset[dataAttribute];
    const applianceContainer = document.querySelector(targetContainer);
    const applianceArray = appliance.split(',').filter((elem) => {
      return elem != '';
    }); // make array and remove empty items if any

    if (applianceArray.length > 0) {
      // highlight product link when hover on appliance
      el.addEventListener('mouseenter', function () {
        applianceContainer.classList.add('hover');

        applianceArray.forEach((applianceItem) => {
          document
            .querySelectorAll(
              `${targetItem}[data-${dataAttribute}*=${applianceItem}]`
            )
            .forEach((item) => {
              item.classList.add('hover');
            }); // *= - note that attribute value should be unique. Or will false match with numeric id's (eg region-01, region-010)
        });
      });
      // remove highlight
      el.addEventListener('mouseleave', function () {
        applianceContainer.classList.remove('hover');

        applianceArray.forEach((applianceItem) => {
          document
            .querySelectorAll(
              `${targetItem}[data-${dataAttribute}*=${applianceItem}]`
            )
            .forEach((item) => {
              item.classList.remove('hover');
            }); // *= - note that attribute value should be unique. Or will false match with numeric id's (eg region-01, region-010)
        });
      });
    }
  });
};

export const headerApplianceHover = () => {
  //function
  // hover selector
  // items container
  // items with data attribute

  UIkit.drop('.header__dropdown--appliance', {
    boundary: '.header',
    boundaryAlign: true,
    pos: 'bottom-left',
    offset: 0,
  });

  crossHover(
    '.header__dropdown-left [data-appliance]',
    '.header__appliance-items',
    '.header__appliance-item',
    'appliance'
  );
  crossHover(
    '.header__appliance-item[data-appliance]',
    '.header__dropdown-left',
    '.header__dropdown-left ',
    'appliance'
  );
};

export const initSearch = (selector) => {
  const searchForm = document.querySelector(selector),
    textInput = searchForm.search,
    clearBtn = textInput.nextSibling;

  clearBtn.style.visibility = textInput.value.length ? 'visible' : 'hidden';

  textInput.onkeyup = function () {
    // Show the clear button if text input value is not empty
    clearBtn.style.visibility = this.value.length ? 'visible' : 'hidden';
  };
  // Hide the clear button on click, and reset the input value
  clearBtn.onclick = function () {
    this.style.visibility = 'hidden';
    textInput.value = '';
  };
};
