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
生命周期、vue对象操作、组件、插槽
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

![](https://p26-tt.byteimg.com/origin/pgc-image/ad5cfccf0ccc498f97bb604e0da70b56.png)

> vue中，组件传参时，如果使用驼峰形式作为属性值时，不能直接原样书写，否则会接收不到数据；需要使用`-`分割，例如：cMives 变成 c-mives；但是在使用cli脚手架时，则不会出现这种问题，是因为脚手架内部对其进行了编译解析

#### 子传父

子组件通过$emit方法（用来触发事件,详情见[官网](https://cn.vuejs.org/v2/api/#vm-emit)）传递参数

```javascript
<body>
    <div id="app">
        outNum:{{outNum}}<br>
        <counter @outshow="mainshow"></counter>
    </div>

    <script>
        Vue.component("counter",{
            template:`<button @click="show(10)">show</button>`,
            methods:{
                show(num){
                    this.$emit("outshow",num)
                }
            }
        })


        var vm = new Vue({
            el:"#app",
            data:{
                outNum:''
            },
            methods:{
                mainshow(myoutnum){
                    this.outNum = myoutnum
                }
            }

        });
    </script>
</body>

```

## 插槽

slot (父组件 在子组件<slot> </slot>处插入内容)

Vue 实现了一套内容分发的 API，将`<slot>`元素作为承载分发内容的出口，这是vue文档上的说明。具体来说，slot就是可以让你在组件内添加内容的‘空间’。

### 单个插槽

**在子组件中使用 slot 做一个插槽，父组件中的内容就可以插到这个插槽里边。**

```javascript
<div id="app">                   
    <child-component>            
      <p>来自父组件的问候</p>  // 这看似是在子组件中写的内容，但其实这是属于父组件的作用域
    </child-component>         // 也就是说，其实这个 p元素 ，是父组件中的内容  
</div>                          

Vue.component('child-component', {
  template: `<div>
    <slot></slot>  // 在子组件中使用 slot 元素
  </div>`
})

var app = new Vue({
  el: '#app',
  data: {}
})
```

### 具名插槽

如果父组件中有很多内容都要放到子组件中，如果子组件中只有一个 slot（插槽）的话，那所有内容都挤到一起，显然是不合理的。所以我们需要多个 slot（插槽），并给每个 slot（插槽）起个名字，那么就能很方便的讲指定内容放到指定 slot（插槽）中

```javascript
<div id="app">
    <child-component>
      <p>离离原上草，</p>
      <p>一岁一枯荣。</p>
      <p>野火烧不尽，</p>
      <p>春风吹又生。</p>                      // 上面的四个 p 元素没名字？
      <address slot="footer">白居易</address>  // 用 slot 起名字
      <h2 slot="header">赋得古原草送别</h2>  // 用 slot 起名字
    </child-component>
</div>

Vue.component('child-component', {
  template: `<div>
    <slot name="header"></slot>  // 有 name
    <slot></slot>                // 没有 name ？这个先放着，后面再说
    <slot name="footer"></slot>  // 有 name
  </div>`
})

var app = new Vue({
  el: '#app',
  data: {}
})
```

[插槽参考链接](https://zhuanlan.zhihu.com/p/67202160)
