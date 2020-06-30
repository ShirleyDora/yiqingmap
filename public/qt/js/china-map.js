function getData() {
    // let str = localStorage.getItem('data');
    // let data = JSON.parse(str);
    let arr = [];
    chinadata.newslist.forEach(item => {
        arr.push({
            name: item.provinceShortName, // 省的名字
            value: item.confirmedCount, // 累计确诊
            current: item.currentConfirmedCount, // 当前确诊
            suspected: item.suspectedCount, // 疑似
            cured: item.curedCount, // 治愈
            dead: item.deadCount // 死亡
        })
    });
    arr.push({
        name: '南海诸岛', // 省的名字
        value: '未统计', // 累计确诊
        current: '未统计', // 当前确诊
        suspected: '未统计', // 疑似
        cured: '未统计', // 治愈
        dead: '未统计' // 死亡
    })
    return arr;
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chinaMap'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: ' ',
        textStyle: {
            fontSize: '10'
        },
        subtext: ' ',
        subtextStyle: {
            fontSize: '8'
        },
        left: 'center',
        top: 10
    },
    series: [{
        type: 'map',
        map: 'china',
        data: getData(),
        label: {
            show: true,
            fontSize:8,
            color:'white'
        }
    }],
    tooltip: {
        triggerOn: 'mousemove',
        formatter: function (params) {
            // console.log(params);
            return `累计确诊：${params.data.value}<br/>
                当前确诊：${params.data.current}<br />
                治愈人数：${params.data.cured}<br />
                死亡人数：${params.data.dead}`;
        },
    },
    visualMap: [{
        type: 'piecewise',
        pieces: [
            { gt: 10000 },
            { gt: 5000, lte: 10000 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { gt: 1000, lte: 5000 },
            { gt: 500, lte: 1000 },
            { gt: 100, lte: 500 },
            { gt: 10, lte: 100 },
            { gt: 0, lte: 10 }    // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        textStyle:{
            color:'white'
        },
        inRange: {
            color: ['#ffcfc3', '#eda595', '#d27b64', '#d5462a', '#a8352e', '#6a211d', '#562a2a']
        },
        // showLabel: {
        //     show: true
        // }
    }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
  });