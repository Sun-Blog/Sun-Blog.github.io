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
vue对象操作、组件、生命周期
:::
<!-- more -->

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

```javascript
// 注册组件（全局注册）
Vue.component('组件名',{
    // vue对象
})

// 使用组件
<body>
    <div id="app">
        <model></model>
    </div>
</body>

<script>
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

## 生命周期

![](https://img-blog.csdnimg.cn/20181103212250917.png)
