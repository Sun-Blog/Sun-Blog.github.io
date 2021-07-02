---
title: Vue进阶
date: 2021-06-28
cover: http://p6.qhimg.com/bdr/__85/t017979183edf68561b.jpg
tags:
  - Vue
categories:
  - Vue指南
---

:::tip 涉及点
生命周期、vue对象操作、组件
:::
<!-- more -->

## 生命周期

![](https://img-blog.csdnimg.cn/20181103212250917.png)

```javascript
var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello world'
        },
        template: '<div>我是模板内的{{message}}</div>',
        methods: {
            changeMsg () {
                this.message = 'goodbye world'
            }
        },
        beforeCreate() {
            console.log('------初始化前------')
            console.log(this.message)
            console.log(this.$el)
        },
        created () {
            console.log('------初始化完成------')
            console.log(this.message)
            console.log(this.$el)
        },
        beforeMount () {
            console.log('------挂载前---------')
            console.log(this.message)
            console.log(this.$el)
        },
        mounted () {
            console.log('------挂载完成---------')
            console.log(this.message)
            console.log(this.$el)
        },
        beforeUpdate () {
            console.log('------更新前---------')
            console.log(this.message)
            console.log(this.$el)
        },
        updated() {
            console.log('------更新后---------')
            console.log(this.message)
            console.log(this.$el)
        }
    })

```

![](https://img-blog.csdnimg.cn/20201225133212167.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNzI4Nw==,size_16,color_FFFFFF,t_70)



## Vue对象操作

> 可以通过一个Vue对象操作另一个Vue对象

```javascript
<body>
    <div id="app1">
        {{title}}
        <input type="button" @click="toUpCase" value="toUpCase"/>
        {{toLowCase}} 
    </div>
    <div id="app2">
        <input type="button" @click="changeV1Title" value="changeV1Title">
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <script>
        var v1 = new Vue({
            el:"#app1",
            data:{
                title:"hello vue!"
            },
            methods:{
                toUpCase:function(){
                    this.title = this.title.toUpperCase();
                }
            },
            computed:{
                toLowCase:function(){
                    return this.title.toLowerCase();
                }
            }
        });
        var v2 = new Vue({
            el:"#app2",
            methods:{
                changeV1Title:function(){
                    v1.title = "Hello Java"
                }
            }
        })
    </script>
</body>
```

> Vue对象操作另一个Vue对象的内容，维度有两个，操作属性、操作方法； 这些属性，是data或者computed里定义的

+ ref的使用
  + 在vue里面，往往使用ref属性来代替id属性的使用

```javascript
<button type="button" ref="mybtn" @click="show" />
this.$refs.mybtn.innerHTML = "hello"
```

+ mount使用
  + 实现了页面元素和vue对象的动态绑定，之前都是通过el的方式绑定，也可以通过mount实例属性进行绑定

```javascript
<body>
    <div id="app1"> 
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var v1 = new Vue({
            //这里没有用el绑定
            template:"<h1>hello</h1>"
        })
        //script执行到此处进行动态绑定
        v1.$mount("#app1");
    </script>
</body>
```

## 组件

> 组件化是Vue的一大特性，要想实现组件化，需要在页面中注册组件；注册方式分为全局注册和局部（本地）注册
>
> 当我们通过调用`Vue.component()`注册组件时，组件的注册是全局的；这意味着该组件可以在任意Vue示例下使用；如果注册的组件是挂载在某个实例中，那么就是一个局部组件

### 全局组件

```javascript
// 注册组件（全局组件）
Vue.component('组件名',{
    // vue对象
})

// ==============================================================================================

// 示例
<body>
    <div id="app">
        <model></model>
    </div>
</body>

<script>
    // 全局注册使用 component
    Vue.component('model', {
        template: "<div>{{ title }}<button @click = 'btnfn'>点击</button></div>",
        // 注意
        data:function(){
            return {
                title: 'Hello Vue',
            }
        },
        methods: {
            btnfn:function() {
                alert('Hello Vue')
            }
        },
    })

//必须绑定，才能使用组件
    new Vue({
        el: '#app'
    })
</script>
```

### 局部组件

```javascript
// 示例
var Component1 = {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}

// 注册组件，在使用ComponentA的components 选项中注册想要使用的组件
var Component2 = {
    // 局部注册使用 components
    components: {
        ' button-counter': Component1    //组件名称：选项对象
    },
    // ...
}
```

:warning:注意

1、当注册组件 (或者 prop) 时，可以使用 kebab-case (短横线分隔命名)、camelCase (驼峰式命名) 或 PascalCase (单词首字母大写命名)；不可使用类似`ComponentA`类型命名

2、被注册的组件要放在注册点前

### 组件抽离

```javascript
<body>
    <div id="app">
        <cpn></cpn>
    </div>

    // 方式一：script标签，类型必须是text/x-template
    <script type="text/x-template" id="cpn">
        <div>
            <h2>我是标题</h2>
            <p>我是内容</p>
        </div>
    </script>

    // 方式二：template标签
    <template id="cpn">
        <div>
            <h2>我是标题</h2>
            <p>我是内容</p>
        </div>
    </template>

    <script>
        Vue.component('cpn', {
            template: '#cpn',
        })

        new Vue({
            el: '#app',
            data: {

            }
        })
    </script>
</body>
```

### 组件通信

#### 父传子

```javascript
<body>
    <div id="app">
        <!-- 传参 -->
        <cpn :cmovies='movies'></cpn>
    </div>

    <!-- 组件模板 -->
    <template id="cpn">
        <div>
            <ul>
                <li v-for='item in cmovies'>{{ item }}</li>
            </ul>
        </div>
    </template>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
        // 注册组件
        const cpn = {
            template: '#cpn',
            // 接参
            props: {
                cmovies: Array,
            },
        }

        new Vue({
            el: '#app',
            data: {
                movies: ['我和我的家乡', '泰坦尼克号', '觉醒年代', '海贼王', '镇魂街'],
            },
            components: {
                cpn,
            }
        })
    </script>
</body>
```

