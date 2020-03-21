$(function(){
    var myChart = echarts.init(document.getElementById('box'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        xAxis: {
            data: ["2000","2005","2010","2015","2020"]
        },
        yAxis: {},
        series: [{
            type: 'line',
            data: [8, 9, 8, 8, 7]
        }]
    };

    myChart.setOption(option); 
});