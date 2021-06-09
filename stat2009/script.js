var ctx = document.getElementById('exampels1').getContext('2d');
var myBarChart = new Chart(ctx,{
    type:'bar',
data: {
    labels: ['Всего','Казахи','Русские','Узбеки','Украинцы','Уйгуры','Татары','Немцы','другие'],
    datasets: [{
        label:'Всего 16 197 000 человек',
        backgroundColor:[ 'black',
                              '#02B0B1',
                              '#015092',
                              '#192F82',
                              '#4C1F7C',
                              '#860D74',
                              '#BB1219',
                              '#BD322F',
                              '#C56C1A'],
        borderColor: 'rgb(2, 168, 991, 175, 176)',
        data: [100, 61.12, 24, 2.96, 2.6, 1.54, 1.41, 1.38, 4.99]
    }]
},
options:{},
});
var ctx2 = document.getElementById('stat2').getContext('2d');
var chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Мусульмани', 'Христиане', 'Иудеи', 'Буддисты', 'Другие религии', 'Неверующие', 'Не дали ответа'],
        datasets: [{
            label:[],
            backgroundColor:[ 'rgb(41, 148, 77, 0.5)','rgb(41, 148, 77)','rgb(185, 130, 245)','rgb(106, 168, 235)','rgb(247, 190, 109)','rgb(240, 247, 109)','rgb(50, 168, 121)'],
            borderColor: 'rgb( 0, 0, 0)',
            data: [70.19, 26.17, 0.03, 0.09, 0.19, 2.81, 0.51]
        }]
    },

    // Configuration options go here
    options: {}
});
