$(document).ready(function() {
    $(".map-tab-list").on('click','li',function() {   
    event.stopPropagation();
    $(this).addClass("map-current").siblings().removeClass("map-current");  
    var index = $(this).index();
    console.log(index); 
    $(".map-tab-con .map-item").eq(index).show().siblings().hide();
  
    });
})



$(document).ready(function(){
    let myChart = echarts.init(document.getElementById('zhexian-map'));

// 指定图表的配置项和数据

let colors = ['#5793f3', '#d14a61', '#675bba'];


let option = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['2019 死亡人数', '2020 死亡人数'],
        textStyle: {
            fontSize: '8',
            color:colors
        },
    },
    grid: {
        top: 35,
        bottom: 20
    },
    xAxis: [
        {
            axisLabel: {
                fontSize:"8"
              },
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '死亡人数  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12']
        },
        {
            axisLabel: {
                fontSize:"8"
              },
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '治愈人数  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    },
                }
            },
            data: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12']
        }
    ],
    yAxis: [
        {
            axisLabel: {
                color: "white",
                fontSize:"8"
              },
            type: 'value'
        }
    ],
    series: [
        {   
            name: '2019 死亡人数',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '2020 死亡人数',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
}


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
    
  myChart.resize();
});
});



$(document).ready(function() {
    // 实例化对象
    let myChart = echarts.init(document.getElementById('leida-map'));

// 指定图表的配置项和数据
let option = {
    tooltip: {},
    legend: {
        data: ['疑似诊断人数', '累计确诊人数']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '北京', max: 5000},
            { name: '上海', max: 5000},
            { name: '广州', max: 5000},
            { name: '深圳', max: 5000},
            { name: '成都', max: 5000},
            { name: '武汉', max: 5000}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [300, 800, 100, 1300, 200, 2000],
                name: '疑似诊断人数'
            },
            {
                value: [500, 1400, 2800, 3100, 2100, 5000],
                name: '累计确诊人数'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function() {
  
    myChart.resize();
  });
});