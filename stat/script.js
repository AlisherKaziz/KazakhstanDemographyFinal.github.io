var ctx = document.getElementById('exampels1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Женщины', 'Мужчины'],
        datasets: [{
            label: 'Количество человек',
            backgroundColor:[ 'rgb(255, 133, 239)',
                              'rgb(110, 165, 255)' ],
            borderColor: 'rgb( 0, 0, 0)',
            data: [2096899, 1842028]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx2 = document.getElementById('stat2').getContext('2d');
var chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Городское населние', 'Вне городское'],
        datasets: [{
            label:['Городское населние', 'Вне городское'],
            backgroundColor:[ 'rgb(41, 148, 77)',
                              'rgb(41, 148, 77, 0.5)' ],
            borderColor: 'rgb( 0, 0, 0)',
            data: [46833, 4044000]
        }]
    },

    // Configuration options go here
    options: {}
});

