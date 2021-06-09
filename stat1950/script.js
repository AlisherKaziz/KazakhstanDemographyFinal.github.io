var ctx = document.getElementById('exampels1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1950', '1954', '1958', '1962', '1966', '1970', '1974', '1978', '1982', '1986', '1988'],
        datasets: [{
            label: 'Результаты перепеси',
            backgroundColor: ['rgb(2, 142, 143, 0.7)'],
            borderColor: 'rgb(2, 168, 991, 175, 176)',
            data: [6591600, 7637000, 9169000, 10732000, 12047000, 13009000, 13847000, 14501000,15253000,16028000, 16332000]
        }]
    },

    // Configuration options go here
    options: {}
});
