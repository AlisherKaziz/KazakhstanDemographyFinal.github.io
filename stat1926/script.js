var ctx = document.getElementById('exampels1').getContext('2d');
var myBarChart = new Chart(ctx,{
    type:'bar',
data: {
    labels: ['Акмолинск', 'Кустанайский Округ', 'Семипалатинск', 'Уральск', 'Актюбинск', 'Адеивский уезд', 'Сырдарьинская губерния', 'Джетысуйская губерния', 'Каракалпакская автономная область'],
    datasets: [{
        label:'Распределение населения Казахстана по территории',
        backgroundColor: 'rgb(2, 142, 143, 0.7)',
        borderColor: 'rgb(2, 168, 991, 175, 176)',
        data: [1211552, 389336, 1310186, 638021, 468882, 135555, 1157080, 887845, 304541]
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
        labels: ['Городское населние', 'Вне городское'],
        datasets: [{
            label:['Городское населние', 'Вне городское'],
            backgroundColor:[ 'rgb(41, 148, 77, 0.5)','rgb(41, 148, 77)'],
            borderColor: 'rgb( 0, 0, 0)',
            data: [539249, 5963757]
        }]
    },

    // Configuration options go here
    options: {}
});
var ctx3 = document.getElementById('stat3').getContext('2d');
var chart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Казахи', 'Русские', 'Украинцы','Белорус','Немцы','Поляки','Молдоване','Евреи','Мордва','Татары','Каракалпаки','Киргизы','Узбеки','Таджики','Прочие'],
        datasets: [{
            label:['Городское населние', 'Вне городское'],
            backgroundColor:[ 'rgb(41, 148, 77, 0.5)','rgb(41, 148, 77)','rgb(41, 148, 79, 0.5)','rgb(41, 148, 89)','rgb(41, 187, 77, 0.5)','rgb(61, 148, 77)','rgb(31, 148, 77, 0.5)','rgb(41, 148, 107)','rgb(41, 148, 70, 0.5)'],
            borderColor: 'rgb( 0, 0, 0)',
            data: [57.1, 19.69, 13.23, 0.39, 0.78, 0.06, 0.04, 0.05, 0.42, 1.24, 1.82, 0.16, 3.3, 0.13, 1.6]
        }]
    },

    // Configuration options go here
    options: {}
});