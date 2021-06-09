var ctx = document.getElementById('exampels1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1897', '1926','1939', '1950', '1989', '2001', '2009'],
        datasets: [{
            label: 'Статистика',
            backgroundColor: 'rgb(2, 142, 143, 0.7)',
            borderColor: 'rgb(2, 168, 991, 175, 176)',
            data: [4010000, 3713394, 2327625, 6591600, 16537000, 14800000, 16197000]
        }]
    },

    // Configuration options go here
    options: {}
});
