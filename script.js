var ctx = document.getElementById('exampels1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Пример Один',
            backgroundColor: 'rgb(2, 142, 143, 0.7)',
            borderColor: 'rgb(2, 168, 991, 175, 176)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Пример Два',
            backgroundColor: 'rgb(2, 168, 99, 0.5)',
            borderColor: 'rgb(1, 139, 79)',
            data: [10, 5, 2, 20, 45, 30, 0]
        }]
    },

    // Configuration options go here
    options: {}
});

