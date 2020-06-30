$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('zhuzhuang'));
    var option = {
        tooltip: {

        },
        xAxis: {
            type: 'category',
            data: [],
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'bar',
            data: [],
        }]
    };
    $.ajax({
        url: '../../qt/data/zhexian.json', //写的假数据读取本地自己写的json,by Shirley,运行是node app.js
        type: 'get',
        dataType: 'json',
        data: {

        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert('请求失败');
        },
        success: function (result) {
            alert('操作成功');
            // console.log(result);
            var xAxis_data = [];
            var series_data = [];
            $.each(result, function (index, item) {
                // console.log(item.province)
                // console.log(item.number)

                xAxis_data.push(item.province);
                series_data.push(item.number);
            });

            option.xAxis.data = xAxis_data;
            option.series[0].data = series_data;
            myChart.setOption(option);
            window.addEventListener("resize", function () {myChart.resize(); })
        }
    })
})
$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('bingzhuang'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: []
        },
        series: [{
                name: '',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: []
            }

        ]
    };
   

    $.ajax({
        url: '../../qt/data/bintu.json', //因为给的接口失效，所以写的假数据读取本地自己写的json,by Shirley,运行是再jiaohumap文件下node app.js
        type: 'get',
        dataType: 'json',
        data: {

        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert('请求失败');
        },
        success: function (result) {
            alert('操作成功');
            var legend_data = [];
            var series_data = [];
            // console.log(result);
            $.each(result,function(index,item){
                // console.log(item)
                legend_data.push(item.name);
                series_data.push(item);
            })
            console.log(legend_data)
             option.legend.data = legend_data;
             option.series[0].data = series_data;
            myChart.setOption(option);
            window.addEventListener("resize", function () {myChart.resize(); })
        }
    })
})
