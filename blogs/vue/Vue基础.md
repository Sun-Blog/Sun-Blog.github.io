---
title: Vue基础
date: 2021-06-19
cover: http://browser9.qhimg.com/bdr/__85/t016ad88ddaf2ae2d92.jpg
tags:
  - Vue
categories:
  - Vue指南
---

:::tip 涉及点
简介、插值表达式、vue常用指令、事件修饰符、计算属性、监听属性、虚拟dom与diff算法、v-if与v-show、v-for列表渲染
:::
<!-- more -->

## 简介

> **MVVM模式**
>
> + Model： 模型层，在这里表示JavaScript对象
>
> + View： 视图层，在这里表示DOM（HTML操作的元素）
>
> + ViewModel： 连接视图和数据的中间件，Vue.js就是MVVM中的ViewModel层的实现者
>
>   核心：实现了`DOM监听`与`数据绑定`

:::warning  注意

Vue.js的两大核心要素：数据驱动、组件化

:::

```javascript
new Vue({
    el: '',  // 挂载点
    data: {
        // 数据；键值对形式
    },
    methods: {
        // 方法
    }
})
```

## 插(差)值表达式

> 插值表达式是用在 html 中被绑定的元素中的，目的是通过插值表达式来获取 vue 对象中的属性和方法

```javascript
// vue对象中的属性是哪里提供的
new Vue({
    data:{},  // 这个data就提供了属性
})

// vue对象中的方法是哪里提供的
new Vue({
    methods:{  // 这个methods就提供了方法
        sayHi:function(){
            alert('hello vue');
        }
    },
})
```

## Vue中的指令

+ 这些关键字都是作为 html 页面的标签中的属性

### v-on

```javascript
// v-model 是将标签的 value 值与 vue 实例中的 data 属性值进行绑定
<div id = 'app'>
    请输入您的专业：<input type = 'text' v-model = 'major' />
	我是一位 {{ major }} 程序员
</div>

new Vue({
    el: '#app',  // 挂载点
    data: {
        major: 'java',
    },
})
```

### v-on（ 简写为 @ ）

```javascript
// v-on 通过配合具体的事件名，来帮顶 vue 中定义的函数
<div id = 'app'>
    请输入您的专业：<input type = 'text' @input = 'changeMajor' />
    我是一位 {{ major }} 程序员
</div>

new Vue({
    el: '#app',  // 挂载点
    data: {
      major: 'java',  
    },
    methods: {
        changeMajor:function(e) {
            this.major = e.target.value;
        }
    }
})
```

### v-bind（ 简写为 : ）

```javascript
<div id='app'>
    <a :href="link">百度</a>
</div>

new Vue({
    el: '#app', // 挂载点
    data: {
        link: 'https://www.baidu.com/'
    }
})

```

### v-once

```javascript
// 使用此指令时，改标签中的插值表达式，只获取一次数据，之后数据的变化不影响此插值表达式的值
<p v-once>
    {{ title }}
</P>
```

### v-html、v-text

```javascript
<div id="app">
    // 插值表达式、v-text不能解析html元素，只会照样输出
    <p>{{hello}}</p>
    <p v-text = 'hello'></p>
    <p v-html = 'hello'></p>
</div>

new Vue({
    el: '#app',
    data: {
        hello:'<span>hello world</span>'
    }
})

```

![](https://img-blog.csdnimg.cn/20200710205417657.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI1NTAzOTQ5,size_16,color_FFFFFF,t_70)

## 事件修饰符

```javascript
// 修饰符是由点开头的指令后缀来表示的

<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

:warning:使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

## 计算属性（computed）

> 计算出来的结果，保存在属性中，内存中运行：虚拟DOM。计算属性可以理解成缓存，是为了避免每次调用都需要进行计算产生的系统开销。vue特有的

```javascript
// 定义
computed(){
    
}

// 与普通函数的区别
// 与普通函数的区别是，普通函数是写在methods{}中，调用普通函数需要加上()
// 计算属性调用或绑定不需要加(),如果没有修改，则多次调用，计算属性的值不会有改变。

<body>
    <!--view层-->
    <div id="app">
        <p>currentTime1 {{currentTime1()}}</p>
        <p>currentTime2 {{currentTime2}}</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        var vm = new Vue({
            // Model：数据
            el: "#app",
            data: {
            },
            methods: {
                currentTime1: function () {
                    //var time = Date.now();
                    return Date.now();
                }
            },
            computed: {
                currentTime2: function () {
                    //var time = Date.now();
                    return Date.now();
                }
            }
        });
    </script>
</body>
```

## 监听属性（watch）

```javascript
// 通过 watch 给属性绑定函数，当属性的值发生变化时，该函数就会自动被调用。
// 用时可以接收两个参数，第一个参数是属性改变后的值，第二个参数是属性改变前的值

<body>
    <div id="app">
        {{ title }}
        <input type="text" v-model='title'>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                title: 'hello vue',
            },
            watch: {
                title: function (newValue, oldValue) {
                    console.log(newValue + ':' + oldValue);
                }
            }
        })
    </script>
</body>
```

## 虚拟dom与diff算法

> 浏览器解析一个html大致分为五步：创建DOM tree –> 创建Style Rules -> 构建Render tree -> 布局Layout –> 绘制Painting。每次对真实dom进行操作的时候，浏览器都会从构建dom树开始从头到尾执行一遍流程。真实的dom操作代价昂贵，操作频繁还会引起页面卡顿影响用户体验，**虚拟DOM的出现也是为了减弱频繁的大面积重绘引发的性能问题**

***虚拟dom在执行dom的更新操作后，虚拟dom不会直接操作真实dom，而是将更新的diff内容保存到本地js对象中，然后一次性attach到dom树上，通知浏览器进行dom绘制避免大量无谓的计算。***

**虚拟DOM和真实DOM的区别：**

+ 虚拟DOM不会进行排版与重绘操作
+ 真实DOM频繁排版与重绘的效率是相当低的
+ 虚拟DOM进行频繁修改，然后一次性比较并修改真实DOM中需要改的部分，最后并在真实DOM中进行排版与重绘，减少过多DOM节点排版与重绘损耗
+ 虚拟DOM有效降低大面积（真实DOM节点）的重绘与排版，因为最终与真实DOM比较差异，可以只渲染局部

## v-show和v-if

> `v-show`和`v-if`在用法上是相同的，也就是说`v-show=布尔值变量`是true的时候，就会显示内容，是false的时候就不显示内容，但是`v-show`改变的是元素的样式，不显示内容时样式是：`display=none`,而`v-if`是直接让元素消失和直接添加元素，效率上，`v-show`更高

## v-for

使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**

```javascript
<ul id='app'>
  <li v-for="(item, index) in items">
      {{ index }} - {{ item.message }}
  </li>
</ul>

var example2 = new Vue({
  el: '#app',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

// 0-Foo
// 1-Bar
```
