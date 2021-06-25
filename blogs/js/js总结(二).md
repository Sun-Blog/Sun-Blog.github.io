---

title: js总结(二)
date: 2021-05-10
cover: http://browser9.qhimg.com/bdr/__85/t0154531e5acb137359.jpg
tags:
  - js
categories:
  - JS指南

---

:::tip 涉及点
字符串、模板字符串、本地缓存
:::
<!-- more -->
## 字符串

### 创建

```javascript
// 字面量创建
var str = "hello world";

// 内置构造函数创建
var str = new String('hello world');
```

:::tip 注意

字符串具有`length`属性及`下标`，但是只能获取不能设置，同时可以使用for循环遍历字符串

:::

### 常用方法

charAt()、charCodeAt()、substr()、split()

```javascript
// 说明：所有字符串方法都不会改变原始字符串

// charAt()
// 语法：字符串.chartAt(索引)
// 返回值：有该索引位置，就是索引位置字符；没有该索引位置，返回空
var str = "hello world";
var res = str.charAt(1);
console.log(res); // e

// charCodeAt()
// 语法：字符串.charCodeAt(索引)
// 返回值：该索引未知的字符编码(UTF-8编码)
var str = "hello world";
var res = str.charCodeAt(1);
console.log(res); // 101

// substr()
// 语法：字符串.substr(开始索引, 多少个)
// 作用：截取字符串
// 返回值：截取出来的字符串
var str = "hello world";
var res = str.substr(1,3);
console.log(res); // ell

// split()
// 语法：字符串.split()
// 作用：将字符串分割成字符串数组
// 返回值：字符串数组
var str = "hello world";
var res = str.split();
console.log(res); // ["hello world"]
```

indexOf()、lastIndexOf()、includes()、search()、match()、trim()

```javascript
// indexOf()
// 语法：字符串.indexOf(字符串片段,开始索引)
// 作用：在字符串里面查找指定字符串片段
// 返回值：查询到了就返回指定索引，没有查询到返回-1
var str = "hello world";
var res = str.indexOf('l',4);
console.log(res); // 9

// lastIndexOf()
// 语法：字符串.lastIndexOf(字符串片段,开始索引)
// 作用：在字符串里面查找指定字符串片段(从后向前)
// 返回值：查询到了就返回指定索引，没有查询到返回-1
var str = "hello world";
var res = str.lastIndexOf('wo');
console.log(res); // 6

// includes()
// 语法：字符串.includes(字符串片段)
// 作用：查找字符串里面是否包含该字符串片段
// 返回值：布尔值（true or false）
var str = "hello world";
var res = str.includes('wo');
console.log(res); // true

// search()
// 语法：字符串.search(字符串片段)
// 作用：查找字符串里面是否包含该字符串片段
// 返回值：存在返回指定索引，不存在返回-1
var str = "hello world";
var res = str.search('wo');
console.log(res); // 6

// match()
// 语法：字符串.match(字符串片段)
// 作用：查找字符串里面是否包含该字符串片段
// 返回值：是一个数组，里面是找到的字符串片段
var str = "hello world";
var res = str.match('wo');
console.log(res); // ["wo", index: 6, input: "hello world", groups: undefined]

// trim()
// 语法：字符串.trim()
// 作用：去除首尾空格
// 返回值：去除空格后的字符串
var str = "  hello world  ";
var res = str.trim('wo');
console.log(res); // hello world
```

## 模板字符串

### 定义

使用`反引号(``)`表示

### 模板字符串与普通字符串的区别

1. 单引号和双引号定义的字符串不能换行；模板字符串可以换行
2. 单引号和双引号不能直接在字符串里解析变量；模板字符串可以，是要写 ${ 变量 };
3. 兼容性问题；es6语法，IE低版本不支持

## 本地缓存

localStorage、sessionStorage

区别：

> localStorage  永久缓存，除非手动删除
>
> sessionStorage  会话缓存，关闭浏览器就没有了

共同点：

> 只能存储字符串格式的数据
>
> 若要存储对象结构的数据，需转换为json格式

语法：

> `localStorage`
>
> ​	localStorage.setItem('名字', '值');  //存储数据
>
> ​	localStorage.setItem('名字');  //获取数据
>
> ​	localStorage.removeItem('名字');  //删除数据
>
> ​	localStorage.clear();  //清空所有数据
>
> `sessionStorage`
>
> ​	sessionStorage.setItem('名字', '值');  //存储数据
>
> ​	sessionStorage.setItem('名字');  //获取数据
>
> ​	sessionStorage.removeItem('名字');  //删除数据
>
> ​	sessionStorage.clear();  //清空所有数据

