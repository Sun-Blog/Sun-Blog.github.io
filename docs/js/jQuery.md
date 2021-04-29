---
title: jQuery总结
date: 2021-04-28
tags:
  - jQuery
categories:
  - js

---
<articleTop></articleTop>
## 一、基本语法

```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// 写法一
$(document).ready(function(){
    // code
});

// 写法二
$(function(){
    // code
});
```

## 二、区别

jQuery入口函数与window.onload入口函数的区别：

```javascript
// 1. window.onload入口函数不能写多个，但是jQuery入口函数可以写多个
// 2. 执行时机不同：jQuery入口函数快于window.onload入口函数
	// jQuery入口函数等待页面dom树加载完后执行
	// window.onload等待页面上所有的资源（dom树、外部css、js链接、图片）都加载完毕后执行
```

## 三、文件结构

```javascript
// jQuery其实是一个自执行函数
(function(){
    // code...
    window.jQuery = window.$ = jQuery;
}());
```

:::tip 注意

jQuery对象是一个伪数组

:::

## 四、dom对象与jQuery对象互转

```javascript
// dom对象转jQuery对象
var div1 = document.getElementById('one');
var div2 = $(div1);

// jQuery对象转dom对象
// 方法一：使用下标取出
var divs = $('div');
var div1 = divs[0];

// 方法二：使用jQuery的get()方法
var divs = $('div');
var div2 = divs.get(1);
```

## 五、常用API

```javascript
// 文本
// 获取文本
$('#div1').text();

// 设置文本
$('#div1').text('111');

//样式
// 获取样式
$('#div1').css('width');

// 设置单样式
$('#div1').css('width','20px');

// 设置多样式
$('#div1').css({
    'width':'20px',
    height: 300,
});
```

## 六、选择器

### 基本选择器

| 名称       | 用法                | 描述                               |
| ---------- | ------------------- | ---------------------------------- |
| ID选择器   | `$('#id')`          | 获取指定ID的元素                   |
| 类选择器   | `$('.class')`       | 获取同一类class的元素              |
| 标签选择器 | `$('div')`          | 获取同一类标签的所有元素           |
| 并集选择器 | `$('div,p,li')`     | 使用逗号隔开，只要符合条件之一即可 |
| 交集选择器 | `$('div.redClass')` | 获取class为redClass的div元素       |

### 层级选择器

| 名称       | 用法         | 描述                                                         |
| ---------- | ------------ | ------------------------------------------------------------ |
| 子代选择器 | `$('ul>li')` | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素  |
| 后代选择器 | `$('ul li')` | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子层级等 |

### 过滤选择器

| 名称       | 用法                               | 描述                                     |
| ---------- | ---------------------------------- | ---------------------------------------- |
| :eq(index) | `$('li:eq(2)').css('color','red);` | 获取到的li元素中，选择索引号为2的元素    |
| :odd       | `$('li:odd').css('color','red);`   | 获取到的li元素中，选择索引号为奇数的元素 |
| :even      | `$('li:even').css('color','red);`  | 获取到的li元素中，选择索引号为偶数的元素 |

### 筛选选择器

| 名称               | 用法                       | 描述                              |
| ------------------ | -------------------------- | --------------------------------- |
| children(selector) | $('ul').children('li')     | 相当于$('ul>li')，子类选择器      |
| find(selector)     | $('ul').find('li')         | 相当于$('ul li')，后代选择器      |
| siblings(selector) | $('#first').siblings('li') | 查找兄弟节点，不包括自身          |
| parent()           | $('#first').parent()       | 查找父节点                        |
| eq(index)          | $('li').eq(2)              | 相当于$('li:eq(2)')，index从0开始 |
| next               | $('li').next()             | 找下一个兄弟                      |
| prev               | $('li').prev()             | 找上一个兄弟                      |

