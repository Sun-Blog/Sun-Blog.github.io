---

title: js总结(五)
date: 2021-05-28
cover: http://browser9.qhimg.com/bdr/__85/t01e4c1a6fad8c7be4b.jpg
tags:
  - js
categories:
  - JS知识

---

:::tip 定义

阻止浏览器默认行为、自执行函数、this指向、改变this指向、ES6定义变量、箭头函数、模板字符串、三点运算符、解构赋值

:::
<!-- more -->

## 阻止浏览器默认行为

+ e.preventDefault()
  + 标准浏览器

+ e.returnValue = false;
  + IE低版本使用

## 自执行函数

+ 语法：
  + `(function() {})()`

## this指向

+ 定义：
  + this是一个使用在作用域内部的关键字
  + 全局很少用，大部分是在函数内部使用

+ 指向：

  + 全局使用：window

  + 函数使用：不管函数怎么定义，不管函数在哪定义，只看函数的调用（箭头函数除外）

    + 普通函数（直接调用 / 全局调用）
      + 函数名()：this 指向 window

    + 对象调用
      + 对象.函数名()：this 指向 `点之前的对象`

    + 定时器处理函数
      + setTimeout(function() {}, 0)：this指向window
      + setInterval(function() {}, 0)：this指向window

    + 事件处理函数
      + xxx.onclick = function() {}：this指向事件源
      + xxx.addEventListener('click', function() {})：this指向事件源

    + 自执行函数
      + (function() {})()：this指向window

## 改变this指向

+ `call()`
  + 语法：
    + fn.call();
    + obj.fn.call();
  + 参数：
    + 第一个参数，就是函数内部的 this 指向
    + 第二个参数开始，一次给函数传递参数
  + 特点：
    + 会立即执行函数（不适合用做定时器处理函数或者事件处理函数）
  + 作用
    + 伪数组借用数组方法
+ `apply()`
  + 语法
    + fn.apply();
    + obj.fn.apply();
  + 参数
    + 第一个参数：就是函数内部的 this 指向
    + 第二个参数：是一个数组或者伪数组，里面每一项依次给函数传递参数
  + 特点
    + 会立即执行函数（不适合用做定时器处理函数或者事件处理函数）
  + 作用
    + 可以以数组的形式给某些功能函数传参
+ `bind()`
  + 语法
    + fn.bind();
    + obj.fn.bind();
  + 参数
    + 第一个参数，就是函数内部的 this 指向
    + 从第二个参数开始，一次给函数传递参数
  + 特点
    + 不会立即调用函数
    + 会返回一个新的函数，一个已经改变好 this 指向的函数
  + 作用
    + 改变事件处理函数或者定时器处理函数的 this 指向

## ES6定义变量

### let、const、var区别

```javascript
// var会进行预解析；let和const不会进行预解析，必须先定义后使用
// var 可以声明重复变量名；let和const不能声明重复的变量名
// var没有块级作用域，let和const有块级作用域
```

### let、const区别

```javascript
// 声明不赋值；let为undefined，const则报错
// 是否允许修改；let允许修改，const定义的变量不允许修改，const定义的对象可修改
```

## 箭头函数

> 语法： () => ()
>
> + ()：形参位置
> + =>：箭头函数标志
> + ()：代码段

## 模板字符串

> 使用： 反引号( `` )
>
> 特点： 
>
> + 可以换行书写
> + 可以直接进行变量的拼接
> + 模板字符串可以调用函数

## 三点运算符

> + 展开运算符
> + 合并运算符

## 解构赋值

```javascript
// 解构数组；可以解构多维数组
let [变量1，变量2，...] = [数据1，数据2，...];

// 解构对象
let {key1, key2, ...} = {键值对1, 键值对2, ...};
```

