---
title: ECharts数据可视化
date: 2021-06-08
cover: http://p3.qhimg.com/bdr/__85/t01b08f2829ce29e123.jpg
tags:
  - Echarts
categories:
  - Other指南

---

:::tip 涉及点
通用配置、柱状图、折线图、饼图、仪表盘
:::
<!-- more -->

## 特点

> + 丰富的可视化类型
>
> + 流数据的支持
>
> + 移动端优化
>
> + 跨平台使用
>
> ......

## 基本使用

> + 引入echarts.js文件
> + 准备一个呈现图表的盒子
> + 初始化echarts实例对象
> + 准备配置项
> + 将配置向设置给echarts实例对象

## 通用配置

### 标题  title

```javascript
// 文字样式  textStyle
title: {
    text: '商品销量',
        textStyle: {
            color: 'red',
        },
},
    
// 标题边框  borderWidth、borderColor、borderRadius
title: {
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 5
},
    
// 标题位置  left、top、right、bottom
title: {
    left: 60,
    top: 10,
},
```



### 提示  tooltip

```javascript
// 触发类型  trigger
	// item、axis
tooltip: {
   // trigger: 'item',  // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
    trigger: 'axis',  // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
},
    
// 触发时机  triggerOn
    // mousemove、click
tooltip: {
    triggerOn: 'click',  // 鼠标点击时触发
    // triggerOn: 'mousemove',  // 鼠标移动时触发
},
    
// 格式化  formatter
    // 字符串模板、回调函数
tooltip: {
    // 字符串模板
   // formatter: `
   //     {b}销量为{c}
   // `,
    // 回调函数
    formatter: function(arg) {
        // console.log(arg);
        return arg.name + '的销量是' + arg.value
    },
},
```



### 工具按钮  toolbox

```javascript
// 内置有导出图片、数据视图、动态类型切换、数据区域缩放、重置
toolbox: {
    feature: {
        saveAsImage: {},  // 导出图片
        dataView: {},  // 数据视图
        restore: {},  // 重置按钮
        dataZoom: {},  // 区域缩放  需要先选中
        magicType: {  // 图表类型切换
            type: ['bar','line']
        },
    }
},
```



### 图例  legend

```javascript
// 用于筛选系列，需要和series配合使用
legend: {
    data: ['销量1','销量2']
},

series: [{
    name: '销量1',
    type: 'bar',
    data: yData1,
},{
    name: '销量2',
    type: 'bar',
    data: yData2,
}]
```



## 柱状图

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>ECharts</title>

    <!-- 引入echarts.js文件 -->
    <script src="echarts.min.js"></script>
</head>

<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>

    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
	    var xData = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"];
         var yData = [5, 20, 36, 10, 10, 20];

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            
            legend: {
                data: ['销量']
            },
            
            xAxis: {
                type: 'category',  // 设置类目轴
                data: xData,
            },
            
            yAxis: {
                type: 'value',  // 设置数值轴
            },
            
            series: [{
                name: '销量',
                
                // 决定图表类型  bar：柱状图  line：折线图  pie：饼状图
                // 参考：https://echarts.apache.org/zh/option.html#series
                type: 'bar',
                
                // 配置最大值、最小值
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                
                // 配置平均值上
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                
                // 数值显示
                label: {
                    show: true,  // 是否显示
                    rotate: 60,  // 数值旋转角度
                    position: 'top',  // 数值显示位置
                },
                
                // 设置柱状图宽度
                barWidth: '40%',
                data: yData,
            }]
        };

        // 将配置向设置给echarts实例对象ss
        myChart.setOption(option);
    </script>
</body>

</html>
```

## 折线图

:::tip  注意

将 series 中的 type 设置为 line ，就可将柱状图改为折线图

:::

```javascript
// 标注区间
markArea: {
    data: [
        [
            {xAxis: '起始点'},
            {xAxis: '结束点'}
        ],
    ],
},
    
// 设置平滑曲线
smooth: true,
    
// 线条配置
lineStyle: {
    color: 'green',  // 设置线条颜色
    type: 'dashed',  // 设置线条样式
}
    
// 填充风格
areaStyle: {
    color: 'pink',
}
    
// 紧挨边缘
xAxis: {
    type: 'category',  // 设置类目轴
    data: xData,
    boundaryGap: false,
},

// Y轴脱离从 0 开始
yAxis: {
    type: 'value',  // 设置数值轴
    scale: true
},
```

## 饼图

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="./lib/echarts.min.js"></script>
</head>

<body>
    <div id="main" style="width: 600px;height:400px;"></div>

    <script>
        var myChart = echarts.init(document.getElementById('main'));
        var dataArr = [{ value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }];

        var option = {
            title: {
                text: '某站点用户访问来源',
                left: 'center',
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',  // 设置为饼图
                    data: dataArr,

                    radius: '50%',
                    // radius: ['50%', '75%'],  // 设置为圆环  第一个是内圆半径，第二个是外圆半径
                    // roseType: 'radius',  // 设置为南丁格尔图

                    selectedMode: 'multiple',  // 选中的效果  single：选中下一个，上一个被选中的回到原点  multiple：选中下一个，上一个不回到原点
                    selectedOffset: 30,  // 设置偏移量
                    
                    // 移入模块，阴影显示
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    </script>
</body>

</html>
```

## 地图

### 基本使用

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>ECharts</title>

    <!-- 引入echarts.js文件 -->
    <script src="./lib/echarts.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 800px;height:800px;"></div>

    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        $.get('json/map/china.json', function (ret) {
            echarts.registerMap('chinaMap', ret);
            var option = {
                geo: {
                    type: 'map',
                    map: 'chinaMap',  // chinaMap需要和registerMap中的第一个参数保持一致
                    roam: true,  // 设置拖动、缩放

                    // 设置默认显示标签（省份名称）
                    label: {
                        show: true,
                    },
                    zoom: 1,  // 设置初始缩放比例
                    center: [116.404409,39.913748],  // 设置地图中心点
                }
            }
            // 将配置向设置给echarts实例对象ss
            myChart.setOption(option);
        })
    </script>
</body>

</html>
```

### 常用配置

```javascript
series: [
    {
        data: airData,
        geoIndex: 0,  // 将数据与geo配置关联在一起
        type: 'map',
    },
    // 地图与散点图结合
    {
        type:"effectScatter",       //带有涟漪特效动画的散点（气泡）图。
        data:scaData,
        coordinateSystem:'geo',     //'geo',使用地理坐标系/ 该系列使用的坐标系，'cartesian2d',使用二维的直角坐标系/'polar'使用极坐标系，
        rippleEffect:{              //涟漪特效相关配置。
            scale:20,        // 波纹的最大缩放比例
            color:'blue',        //涟漪颜色
            period:2,       // 动画的周期，秒数
            brushType:'stroke'      // 波纹样式：'stroke'  ，'fill'
        }
    }
],
// 视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素
visualMap: {
    min: 0,
    max: 300,
    inRange: {
        color: ['white', 'red'],  // 控制颜色渐变范围
    },
    calculable: true,  // 设置滑块
}

```


