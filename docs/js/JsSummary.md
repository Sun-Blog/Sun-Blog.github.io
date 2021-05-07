---
title: js总结
date: 2021-05-06
tags:
  - js
categories:
  - js

---

<articleTop></articleTop>

## 函数

### 声明式函数

```javascript
// 可以在声明之前调用，也可以在声明之后调用
function 函数名() {
    // TODO
}
```

### 赋值式函数

```javascript
// 只能在声明之后调用
var 函数名 = function () {
    // TODO
}
```

:::tip 注意

函数名后带 ( ) ，是立即执行函数，不带 ( ) 只表示函数

:::

## arguments

定义：

​	`表示所有实参的集合（伪数组）`

属性：

​	`length：表示arguments中有多少数据`

​	`下标（索引）：操作arguments中具体的某一数据`

## 预解析

定义：

​	`在当前作用域下, JS 代码执行之前，浏览器会默认把带有 var 和 function 声明的变量在内存中进行提前声明或者定义`

变量预解析：

​	`变量提升（变量预解析）： 变量的声明会被提升到当前作用域的最上面，变量的赋值不会提升。`

```javascript
console.log(num);  // 结果是多少？
var num = 10;      // ？
// 结果：undefined
```

:::tip 注意

变量提升只提升声明，不提升赋值

:::

函数预解析：

`函数提升： 函数的声明会被提升到当前作用域的最上面，但是不会调用函数。`

```javascript
fn();
function fn() {
    console.log('打印');
}
// 结果：控制台打印字符串 --- ”打印“ 
```

:::tip 注意

函数声明代表函数整体，所以函数提升后，函数名代表整个函数，但是函数并没有被调用

:::

函数表达式声明函数问题：

`函数表达式创建函数，会执行变量提升，此时接收函数的变量名无法正确的调用`

```javascript
fn();
var  fn = function() {
    console.log('想不到吧');
}
// 结果：报错提示 ”fn is not a function"
```

:::tip 解释

该段代码执行之前，会做变量声明提升，fn在提升之后的值是undefined；而fn调用是在fn被赋值为函数体之前，此时fn的值是undefined，所以无法正确调用

:::

## 作用域

`全局作用域：打开一个页面就是一个全局作用域`

`私有作用域（局部作用域）：只有函数生成私有作用域`