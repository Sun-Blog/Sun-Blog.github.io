---

title: js总结(二)
date: 2021-05-10
tags:
  - js
categories:
  - js

---

<articleTop></articleTop>

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
```



## 模板字符串

### 定义

使用`反引号(``)`表示

### 模板字符串与普通字符串的区别

1. 单引号和双引号定义的字符串不能换行；模板字符串可以换行
2. 单引号和双引号不能直接在字符串里解析变量；模板字符串可以，是要写 ${ 变量 };
3. 兼容性问题；es6语法，IE低版本不支持

