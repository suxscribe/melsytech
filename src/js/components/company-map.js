import ymaps from 'ymaps';

export const companyMap = () => {
  const mapBlock = document.querySelector('.company__map');
  if (mapBlock) {
    const coordinates = JSON.parse(
      decodeURIComponent(mapBlock.dataset.coordinates)
    );
    console.log(coordinates);

    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?apikey=7831c6db-8a7f-49d5-a7b7-c567b1e05675&lang=ru_RU'
      )
      .then((maps) => {
        const myMap = new maps.Map('map', {
          center: coordinates,
          zoom: 16,
          controls: [],
        });
        myMap.controls.add('zoomControl', {
          left: 5,
          top: 60,
        });
        myMap.behaviors.disable('scrollZoom');

        var myPlacemark1 = new maps.Placemark(
          coordinates,
          {
            hintContent: 'ул. Торфяная, 30',
            balloonContent: '603139, г. Нижний Новгород, ул.Торфяная, 30 ',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../assets/icon_geo@2x.png',
            iconImageSize: [48, 58],
            iconImageOffset: [-24, -58],
          }
        );
        myMap.geoObjects.add(myPlacemark1);
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));
  }
};
