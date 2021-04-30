---
title: jQuery总结
date: 2021-04-28
tags:
  - jQuery
categories:
  - js

---
<articleTop></articleTop>
## 基本语法

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

## 区别

jQuery入口函数与window.onload入口函数的区别：

```javascript
// 1. window.onload入口函数不能写多个，但是jQuery入口函数可以写多个
// 2. 执行时机不同：jQuery入口函数快于window.onload入口函数
	// jQuery入口函数等待页面dom树加载完后执行
	// window.onload等待页面上所有的资源（dom树、外部css、js链接、图片）都加载完毕后执行
```

## 文件结构

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

## dom对象与jQuery对象互转

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

## 常用API

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

## 选择器

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

## 事件

:::tip

mouseover：在鼠标移动到选取的元素及其子元素上时触发

mouseenter：只在鼠标移动到选取元素上时触发

mouseleave：鼠标指针离开被选元素时触发

:::

## 类操作

:::danger

addClass：添加类

removeClass：移除类

hasClass：判断类

toggleClass：切换类

:::

## 动画

:::tip

show(params，callback)：不加参数，直接显示，添加时间，动效显示（宽高透明度一起改变）

hide(params,callback)：不加参数，直接隐藏，添加时间，动效隐藏（宽高透明度一起改变）

toggle(params)：元素是隐藏状态就显示，是显示状态就隐藏（宽高透明度一起改变）

slideDown(params，callback)：可不写参数，不写参数，执行默认效果（高度透明度一起改变）

slideUp(params，callback)：可不写参数，不写参数，执行默认效果（高度透明度一起改变）

slideToggle(params，callback)：元素是隐藏状态就显示，是显示状态就隐藏（高度透明度一起改变）

fadeIn(params，callback)：不给参数，相当于执行normal；显示（改变的是透明度）

fadeOut(params，callback)：不给参数，相当于执行normal；隐藏（改变的是透明度）

fadeToggle(params，callback)：不给参数，相当于执行normal；元素是隐藏状态就显示，是显示状态就隐藏（改变的是透明度）

fadeTo(params1，params2)：参数一执行时间，参数二为透明度淡入值

animate：

​		语法一：animate(styles(属性),speed(时长),easing(运动效果),callback)

​		语法二：animate(styles,options)

stop(true，true)：参数一：是否清除队列；参数二：是否跳转到最终效果；不写参数，默认是两个false

:::

## 节点操作

```javascript
// 获取内容，html()不传参
$('#div1').html();

// 设置内容，html()传参
$('#div1').html('111');

// 添加节点，append()；作为最后一个元素添加
var newLi = $('<li>添加的内容</li>');
$('#ul').append(newLi);

// 添加节点，prepend()；作为第一个元素添加
var newLi = $('<li>添加的内容</li>');
$('#ul').prepend(newLi);

// 添加节点，before()；作为兄弟元素添加，添加到ul之前
var newLi = $('<li>添加的内容</li>');
$('#ul').before(newLi);

// 添加节点，after()；作为兄弟元素添加，添加到ul之后
var newLi = $('<li>添加的内容</li>');
$('#ul').after(newLi);

// 添加节点，appendTo()；子元素.appendTo(父元素)，把子元素作为父元素最后一个插入
var newLi = $('<li>添加的内容</li>');
newLi.appendTo($('#ul'));
 
// 清空元素，empty()
$('#ul').empty();

// 移除某一元素，remove()
$('#li1').remove();

// 克隆节点，clone()；方法参数为true会把事件一起克隆，false不会克隆，不给参数默认是false
var li1 = $('#li1').clone();
$('body').append(li1);

// 设置或获取表单元素的值，val()，不传参是获取，传参是设置
$('#input').val();
```

## 属性操作

```javascript
// 设置属性，attr()
$('img').attr(属性,属性值);

// 获取属性，attr()
$('img').attr(属性);

// 移除属性，removeAttr()
$('img').removeAttr(属性);
```

:::warning

对于checked、selected、disabled这类boolean类型的属性来说，不能用`attr`方法，只能用`prop`方法

:::

## on注册事件(重点)

### 注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定
$(selector).on('click',function() {
    
});
```

### 注册事件委托

```javascript
// 表示给$(selector)绑定代理事件，必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on('click', 'span', function() {
    
});
```

