import {mark} from './points_map'


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [53.518713897787244, 30.24022226477114],
        zoom: 9,
        controls: []
    });
    // if(configMap.rote){
    //     fjjfjjf
    // }

    // Создание экземпляра маршрута.
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Точки маршрута.
        // Обязательное поле.
        referencePoints: [
            [53.51263907097654, 30.24023899999998],
            [53.51437407098097, 30.232612499999963], // Красноармейский переулок 2
            [53.51793780400907, 30.243902258706505], // Быхавский рай исполком
            [53.51800254412895, 30.25947247887103], // Замок Сапеги
        ],
        params: {
            // "auto" (по умолчанию) — на автомобиле;
            // "masstransit" — на общественном транспорте;
            // "pedestrian" — пешеходный маршрут;
            // "bicycle" — маршрут на велосипеде.
            // Тип маршрута: на общественном транспорте.
            routingMode: "bicycle"
        }
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Включение режима редактирования и задание его настроек.
    multiRoute.editor.start({
        // При включении опции addWayPoints пользователи смогут создавать
        // путевые точки по клику на карте.
        // addWayPoints: false,
        // addWayPoints: true,
        // При включении опции removeWayPoints пользователи смогут удалять
        // путевые точки.
        // Для удаления точки нужно дважды кликнуть по ней.
        removeWayPoints: true,
        // При включении опции addMidPoints пользователи смогут создавать
        // новые промежуточные точки.
        // Чтобы создать промежуточную точку, нужно кликнуть по линии маршрута и,
        // удерживая кнопку, переместить точку в нужную позицию на карте.
        // Тип промежуточной точки (путевая или транзитная) задается в опции
        // editorMidPointsType.
        addMidPoints: true
    });
    // Доббавление точек
    // Вспомогательный класс, который можно использовать
// вместо GeoObject c типом геометрии «Point» (см. предыдущий пример)
//     var myPlacemark = new ymaps.Placemark([53.51492705289812,30.253719240966735]);
//     myMap.geoObjects.add(myPlacemark);

    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [53.51492705289812, 30.253719240966735], // координаты точки
    //         // balloonContent : 'Какая-то церковь',
    //     },
    //     properties: {
    //         // это выводиться по клику
    //         balloonContent: 'Какая-то церковь', // содержимое балуна геообъекта
    //         balloonContentHeader : 'Какая-то церковь', //содержимое заголовка балуна геообъекта
    //         // С боку
    //         iconCaption: 'Какая-то церковь',
    //         balloonContentBody: 'Какая-то церковь'
    //     }
    // });
    // var myPlacemark = new ymaps.Placemark(
    //     [53.51479915849485,30.24730339700312],
    //     {
    //         // это выводиться по клику
    //         balloonContent: 'Какая-то церковь', // содержимое балуна геообъекта
    //         balloonContentHeader : 'Какая-то церковь', //содержимое заголовка балуна геообъекта
    //         // С боку
    //         iconCaption: '=====',
    //         balloonContentBody: '<<<<<'
    //     }
    // );
    // Добавление на карту
    // var arrObj = [
    //     multiRoute, myGeoObject, myPlacemark
    // ]
    // for(var i = 0; i < arrObj.length; i++){
    //     myMap.geoObjects.add(arrObj[i]);
    // }

    // Test
    // console.log(mark.card)
    // console.log(mark.text)
    myMap.geoObjects.add(mapMark(mark.card, mark.text));
    myMap.geoObjects.add(mapMark(mark2.card, mark2.text));
    myMap.geoObjects.add(multiRoute);
});
function mapMark(card, obj) {
    return new ymaps.Placemark(
        card,
        obj
    );
}
