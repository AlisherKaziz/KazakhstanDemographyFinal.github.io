var ctx = document.getElementById('exampels1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Акмолинская область', 'Актюбинская область', 'Алматинская область', 'Атырауская область', 'ЗКО', 'Жамбылская область', 'Карагандинская область','Костанайская область','Кызылординская область', 'Мангистауская область', 'ЮКО', 'Павлодарская область', 'СКО', 'ВКО', 'город Алматы'],
        datasets: [{
            label: 'Количество человек',
            backgroundColor:[ '#02B0B1',
                              '#015092',
                              '#192F82',
                              '#4C1F7C',
                              '#860D74',
                              '#BB1219',
                              '#BD322F',
                              '#C56C1A',
                              '#C38611',
                              '#CDC000',
                              '#599C35',
                              '#008A4E',
                              '#01AFB0',
                               'rgb(187,18,25, 0.3)',
                               'rgb(33,67,157, 0.4)'],
            borderColor: 'rgb( 0, 0, 0)',
            data: [1345.6, 732.6, 1642.9, 424.7, 629.5, 1038.7, 1745.4, 1223.8, 574.5, 324.2, 1823.5, 942.3, 912.1, 1767.2, 1071.9]
        }]
    },

    // Configuration options go here
    options: {}
});