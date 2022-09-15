import ymaps from 'ymaps';
import Choices from 'choices.js';

export const renderPartnerCity = (city) => `
  <a class="partners__offcanvas-item" href="${city.link}">${city.city}</a>
`;

export const renderPartnerOffcanvas = (region) => {
  // Offcanvas bar with list of cities of selected region
  const regionData = JSON.parse(region);

  const markup = `
    
      <div class="partners__offcanvas-title h1">${regionData.regionName}</div>
      <div class="partners__offcanvas-items">
        ${regionData.cities.map((el) => renderPartnerCity(el)).join('')}
      </div>
    
  `;
  document.querySelector('.partners__offcanvas').innerHTML = '';
  document
    .querySelector('.partners__offcanvas')
    .insertAdjacentHTML('afterbegin', markup);
};

export const partnersHover = (hoverSelector, targetContainer, targetItem) => {
  // hover effect on partners map on main page.
  document.querySelectorAll(hoverSelector).forEach((el) => {
    const partnerHover = el.dataset.hover;
    const partnerContainer = document.querySelector(targetContainer);
    const partnerArray = partnerHover.split(',').filter((elem) => {
      return elem != '';
    }); // make array and remove empty items if any

    if (partnerArray.length > 0) {
      // highlight product link when hover on appliance
      el.addEventListener('mouseenter', function () {
        partnerContainer.classList.add('hover');

        partnerArray.forEach((partnerItem) => {
          document
            .querySelectorAll(`${targetItem}[data-hover*=${partnerItem}]`)
            .forEach((item) => {
              item.classList.add('hover');
            });
        });
      });
      // remove highlight
      el.addEventListener('mouseleave', function () {
        partnerContainer.classList.remove('hover');

        partnerArray.forEach((partnerItem) => {
          document
            .querySelectorAll(`${targetItem}[data-hover*=${partnerItem}]`)
            .forEach((item) => {
              item.classList.remove('hover');
            });
        });
      });
    }
  });
};

export const partnersOpenSidebarRegion = () => {
  // open sidebar submenu if city is passed into url of partners page

  if (document.querySelector('.partners-page__list')) {
    const city = window.location.hash;
    console.log(city);

    if (city.length > 1) {
      const cityLink = document.querySelector(`a[href="${city}"]`);
      // find parent sidebar__mnav-section
      // if sidebar__mnav-section not .uk-open -> get index

      cityLink.click();

      // UIkit.scroll('#city-nn').scrollTo('#city-nn');
      //UIkit.scroll(`#${city}`, { offset: 700 });

      // Toggle sidebar menu item. Problem - causing scroll to move back to menu item.

      // const region = cityLink.closest('.sidebar__mnav-section');
      // console.log(region);

      // // get index of current region menu item
      // if (!region.classList.contains('uk-open')) {
      //   const parent = region.parentNode;
      //   // console.log(parent);

      //   const index = Array.prototype.indexOf.call(parent.children, region);
      //   console.log(index);

      //   UIkit.nav('.sidebar__mnav').toggle(index); // place index here
      // }
    }
  }
};

export const partnersMapClick = () => {
  // Open partner offcanvas bar when click on a map marker on main page
  if (document.querySelector('.partners__map')) {
    document.querySelectorAll('.partners__map-marker').forEach((marker) => {
      const region = marker.dataset.hover;
      marker.addEventListener('click', (e) => {
        e.preventDefault();
        if (
          document.querySelector(`.partners__item-link[data-hover=${region}]`)
        ) {
          document
            .querySelector(`.partners__item-link[data-hover=${region}]`)
            .click();
        }
      });
    });
  }
};

export const partnersMapInit = () => {
  // initialize yandex map with partners elements markers
  const mapId = 'partners-map';
  const partnersMap = document.getElementById(mapId);
  if (partnersMap) {
    let mapCenter;

    const getMapCenter = () => {
      mapCenter = [56.349619, 43.80727];
      return mapCenter;
    };

    var gtMap = null;
    var myObjects = null;
    var GtClusterOptions = {
      preset: 'islands#darkGreenClusterIcons',
      groupByCoordinates: false,
      gridSize: 80,
      useMapMargin: true,
    };
    const mapSelect = document.querySelector('.partners-page__filter select');
    const partnerPopup = document.querySelector('.partners-page__popup');
    const partnerPopupInner = document.querySelector(
      '.partners-page__popup-inner'
    );
    const partnerPopupClose = document.querySelector(
      '.partners-page__popup-close'
    );

    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?apikey=d4e6eee7-7efa-4043-aaed-c08551d2d3d6&lang=ru_RU'
      )
      .then((maps) => {
        let mapW = partnersMap.offsetWidth,
          mapH = partnersMap.offsetHeight;

        let currentMapParams = {};
        // if (!!cityBounds) {
        //   currentMapParams = maps.util.bounds.getCenterAndZoom(
        //     cityBounds,
        //     [mapW, mapH],
        //     false,
        //     { margin: 30 }
        //   );
        //   if (currentMapParams.zoom > 15) {
        //     currentMapParams.zoom = 14;
        //   }
        // } else {
        currentMapParams = {
          center: [55.722801, 37.674],
          zoom: 15,
        };
        // }
        maps.option.presetStorage.add('gemotest#labs', {
          iconLayout: 'default#image',
          iconImageHref: '/local/templates/melsytech/assets/icon_geo@2x.png',
          iconImageSize: [48, 58],
          iconImageOffset: [-24, -58],
        });
        gtMap = new maps.Map(mapId, {
          center: currentMapParams['center'],
          zoom: currentMapParams['zoom'],
          controls: ['zoomControl'], // ,'fullscreenControl'
        });
        gtMap.behaviors.disable('scrollZoom');
        // ADD MARGIN ON THE RIGHT FOR INFO POPUPS
        // gtMap.margin.addArea({
        //   right: 100,
        //   top: 0,
        //   width: 310,
        //   height: 800,
        // });

        myObjects = maps.geoQuery(mapMarkers); // mapMarkers - is in html page

        // GET USER GEOLOCATION
        var geolocation = maps.geolocation;

        geolocation
          .get({
            provider: 'yandex',
            mapStateAutoApply: true,
          })
          .then(function (result) {
            // Красным цветом пометим положение, вычисленное через ip.
            // result.geoObjects.options.set('preset', 'islands#redCircleIcon');
            // result.geoObjects.get(0).properties.set({
            //   balloonContentBody: 'Мое местоположение',
            // });
            gtMap.geoObjects.add(result.geoObjects);
            // gtMap.setZoom(5);
          });

        // geolocation
        //   .get({
        //     provider: 'browser',
        //     mapStateAutoApply: true,
        //   })
        //   .then(function(result) {
        //     // Синим цветом пометим положение, полученное через браузер.
        //     // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        //     result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        //     gtMap.geoObjects.add(result.geoObjects);
        //   });

        // UPDATE MAP ON SELECT CHANGE
        mapSelect.addEventListener('change', function () {
          partnerPopup.classList.remove('uk-active');

          checkState();
        });

        // $('.gt-map__aside input, .gt-map__aside select').on('change', function() {
        //   checkState();
        // });

        const renderPartnerPopup = (partnerId, partnerData) => {
          const markup = `
                <div class="partner-teaser">
                  <div class="partners__item-title">${partnerData.name}</div>
                  <div class="partners__item-address">${partnerData.address}</div>
                  <div class="partners__item-phone">
                    <a href="tel:${partnerData.phone}">${partnerData.phone}</a>
                  </div>
                    
                </div>
            `; //<button class="partners__item-close"><svg><use xlink:href="#close"></use></svg></button>
          // <a class="partners__item-readmore" href="${partnerData.link}">Подробнее</a>

          partnerPopupInner.innerHTML = '';
          partnerPopupInner.insertAdjacentHTML('afterbegin', markup);
        };

        function checkState(regions) {
          var shownObjects,
            currentDoctorsId = mapSelect.value;
          //currentServiceId = $('.gt-map__services input:checked');

          shownObjects = myObjects;

          if (regions != undefined) {
            // $('.js-map-city')
            //   .val('0')
            //   .trigger('chosen:updated');
            var shownRegionParts = [];
            regions.forEach((val) => {
              shownRegionParts.push(
                shownObjects.search('properties.poi_region = "' + val + '"')
              );
            });
            shownObjects = new ymaps.GeoQueryResult();
            shownRegionParts.forEach((shownPart) => {
              try {
                var iterator = shownPart.getIterator();
                while ((obj = iterator.getNext())) {
                  if (obj.properties == undefined) break;
                  shownObjects = shownObjects.add(obj);
                }
              } catch (ex) {}
            });
          }

          console.log(currentDoctorsId);

          if (currentDoctorsId != '') {
            shownObjects = shownObjects.search(
              'properties.poi_doctors != null'
            );
            // currentDoctorsId.forEach(function() {
            shownObjects = shownObjects.search(
              'properties.poi_doctors rlike "_' + currentDoctorsId + '_"'
            );
            // });
            console.log(shownObjects);
          }

          gtMap.geoObjects.removeAll();

          var objCnt = shownObjects.getLength();
          if (objCnt > 0) {
            var iterator = shownObjects.getIterator();
            var clusterer = shownObjects.clusterize(GtClusterOptions);
            gtMap.geoObjects.add(clusterer);

            clusterer.events.add('click', function (e) {
              var target = e.get('target'),
                type = e.get('type');
              if (typeof target.getGeoObjects == 'undefined') {
                // Click on map marker
                // 1 click on same marker twice - close popup
                // 2 click on another marker - change data in popup
                // 3 position the popup near the clicked marker

                const markerId = target.properties.get('poi_id');

                // get markers data from global object in html page
                const mapMarkersData = JSON.parse(mapMarkersJson);

                // console.log('show popup');
                // console.log(markerId);
                // console.log(mapMarkersData[markerId]);

                // show//hide popups only if marker data found
                if (mapMarkersData[markerId]) {
                  if (partnerPopup.dataset.partner === markerId) {
                    partnerPopup.classList.toggle('uk-active');
                  } else {
                    partnerPopup.dataset.partner = markerId;

                    renderPartnerPopup(markerId, mapMarkersData[markerId]);
                    partnerPopup.classList.add('uk-active');
                  }
                } else {
                  partnerPopup.classList.remove('uk-active');
                }

                // gemotest
                // $.ajax({
                //   url: '/ajax/labInfoPopup.php',
                //   data: { ID: target.properties.get('poi_id') },
                //   success: function(data) {
                //     $('#popup-offices-map-balloon').html(data);
                //     func.jsScroll();
                //     $('#popup-offices-map').show();
                //   },
                // });
                return false;
              }
            });
          }
        }

        // FIRST INIT ADD OBJECTS TO MAP
        checkState();
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));

    // MAP select

    // close popup on close icon
    partnerPopupClose.addEventListener('click', () => {
      partnerPopup.classList.remove('uk-active');
      partnerPopup.dataset.partner = '';
    });
  }
};

export const partnersRegionMap = () => {
  const partnersRegionsLinks = document.querySelectorAll(
    '.partners__item-link'
  );
  if (partnersRegionsLinks) {
    partnersRegionsLinks.forEach((partnerLink) => {
      partnerLink.addEventListener('click', () => {
        renderPartnerOffcanvas(partnerLink.dataset.region);
      });
    });
  }
};

export const partnersListChoicesInit = () => {
  const partnerSelect = document.querySelector('.js-choice--partners-list');
  if (partnerSelect) {
    const choices = new Choices(partnerSelect, {
      searchEnabled: false,
      itemSelectText: '',
      noResultsText: '',
      noChoicesText: '',
      shouldSort: false,
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
    });
    const choicesOffcanvas = new Choices(
      document.querySelector('.js-choice--partners-list-offcanvas'),
      {
        searchEnabled: false,
        itemSelectText: '',
        noResultsText: '',
        noChoicesText: '',
        shouldSort: false,
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
      }
    );

    partnerSelect.addEventListener('choice', (e) => {
      // console.log('choice');
      checkRegions();
      checkSidebarRegions();
    });

    // pass click on dropdown element to hidden filter element

    const filterControls = document.querySelectorAll(
      '.partners-page__filter-donor > li'
    );
    if (filterControls.length > 0) {
      choices.passedElement.element.addEventListener('choice', (e) => {
        // console.log(e.detail.choice.id);
        const filterControlId = e.detail.choice.id - 1;
        filterControls[filterControlId].click();
      });
      choicesOffcanvas.passedElement.element.addEventListener('choice', (e) => {
        // console.log(e.detail.choice.id);
        const filterControlId = e.detail.choice.id - 1;
        filterControls[filterControlId].click();
      });
    }
  }
};

const checkRegions = () => {
  console.log('check regions');

  //todo hide city block if no partners inside
  //todo show city block if partners inside

  //todo hide region block if no cities inside
  //todo show region block if
};

const checkSidebarRegions = () => {
  console.log('check sidebar regions');
};
