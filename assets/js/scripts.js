$(document).ready(function () {
   let maleVal=33
   let femaleVal=77

    var xValues = [`Male-${maleVal}%`, `FeMale-${femaleVal}%` ];
    var yValues = [maleVal, femaleVal];
    var barColors = [
        "#DDDD",
        "#8ec741",

    ];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },

    });
})


