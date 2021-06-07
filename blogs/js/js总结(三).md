---

title: js总结(三)
date: 2021-05-20
cover: http://browser9.qhimg.com/bdr/__85/t015d4f327880dddb26.jpg
tags:
  - js
categories:
  - JS知识

---

:::tip 涉及点
时间对象、定时器、BOM、DOM
:::
<!-- more -->

## 时间对象(Date)

创建：

> var time = new Date();

常用方法：

> `getFullYear()`
>
> 语法：时间对象.getFullYear();
>
> 返回值： 该时间对象的`年份信息`，数据类型为`number`
>
> `getMonth()`
>
> 语法：时间对象.getMonth();
>
> 返回值： 该时间对象的`月份信息`，数据类型为`number`
>
> `getDate()`
>
> 语法：时间对象.getMonth();
>
> 返回值： 该时间对象的`日期信息`，数据类型为`number`
>
> `getHours()`
>
> 语法：时间对象.getHours();
>
> 返回值： 该时间对象的`小时信息`，数据类型为`number`
>
> `getMinutes()`
>
> 语法：时间对象.getMinutes();
>
> 返回值： 该时间对象的`分钟信息`，数据类型为`number`
>
> `getSeconds()`
>
> 语法：时间对象.getSeconds();
>
> 返回值： 该时间对象的`秒信息`，数据类型为`number`
>
> `getDay()`
>
> 语法：时间对象.getDay();
>
> 返回值： 该时间对象的`周几信息`，数据类型为`number`；0表示周日
>
> `getTime()`
>
> 语法：时间对象.getTime();
>
> 返回值： 该时间对象的`时间戳`
>
> ​	
>
> ​	
>
> 设置时间：
>
> 使用set；例如：
>
> setFullYear();  //设置年

## 定时器

> `setTimeout()`
>
> => 语法： setTimeout(函数, 时间);
>
> => 时间到达，执行一遍结束
>
> => 延时定时器
>
> ​	
>
> `setInterval()`
>
> => 语法： setInterval(函数, 时间);
>
> => 每间隔固定时间，执行一遍函数
>
> => 间隔定时器
>
> ​	
>
> 清除定时器
>
> `clearInterval()`
>
> => 语法： clearInterval(要关闭的定时器返回值);
>
> clearTimeout()
>
> => 语法： clearTimeout(要关闭的定时器返回值);

## BOM

BOM的顶级对象是 `window`

> **浏览器可视区**
>
> => innerWidth、innerHeight
>
> => 共同点：包含滚动条尺寸

> **浏览器弹出层**
>
> `alert()`
>
> => 弹出一段提示文本；只有一个确定按钮
>
> `confirm()`
>
> => 弹出一段提示文本；有确定与取消两个按钮
>
> `prompt()`
>
> => 有一个input输入框，有确定与取消按钮
>
> 共同点： 弹出层弹出以后，如果用户没有点击按钮，表示当前弹出层没有结束

> **浏览器地址栏**
>
> 1、`href`
>
> 读取：
>
> console.log(window.location.href);
>
> 设置：
>
> btn.onclick = function() {
>
> ​	window.location.href  = 'https://www.baidu.com';
>
> }
>
> 2、`search`
>
> 读取：
>
> console.log(window.location.search);  //读取的是问号(?)及之后的数据
>
> 3、`back()`
>
> 语法：window.history.back();
>
> 作用： 回退到上一条历史记录
>
> 4、`forward()`
>
> 语法：window.history.forward();
>
> 作用： 前进到下一条历史记录
>
> 5、`go()`
>
> 语法：window.history.go(整数);
>
> 作用：正整数表示前进；0表示刷新当前页面；负整数表示后退

> 浏览器常见事件
>
> window.onload = function() {};  //页面所有资源加载完毕后执行
>
> window.onscroll= function() {};  //浏览器滚动条滚动时触发
>
> window.onresize= function() {};  //浏览器可视窗口改变时触发

> 浏览器卷去的宽度和高度
>
> document.documentElement.scrollTop;  //卷去的高度；必须要有DOCTYPE标签
>
> document.body.scrollTop;  //卷去的高度；必须没有DOCTYPE标签
>
> var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;  //兼容写法
>
> document.documentElement.scrollLeft;  //卷去的高度；必须要有DOCTYPE标签
>
> document.body.scrollLeft;  //卷去的高度；必须没有DOCTYPE标签
>
> var scrollLeft= document.body.scrollLeft || document.documentElement.scrollLeft || 0;  //兼容写法

> 浏览器滚动到指定位置
>
> scrollTo()
>
> 语法： 
>
> window.scrollTo(x坐标，y坐标);  //书写数字，不需要单位
>
> window.scrollTop({
>
> ​	top:纵向坐标,
>
> ​	left:横向坐标,
>
> ​	behavior:'smooth',  //滚动方式：平滑滚动
>
> })

## DOM

获取DOM元素

```javascript
// 非常规标签

// html
document.documElement
// head
document.head
// body
document.body

// 常规标签

getElementById()
// 语法：查找范围.getElementById('id名称')
// 查找范围：document或者一个元素
// 返回值：如果有这个id名匹配的元素，就返回这个元素；没有匹配的，就返回null

getElementsByTagName()
// 语法：查找范围.getElementsByTagName('标签名')
// 查找范围：document或者一个元素
// 返回值：是一个伪数组；如果有这个标签名匹配的元素，就返回这个元素；没有匹配的，就返回一个空的伪数组

getElementsByClassName()
// 语法：查找范围.getElementsByClassName('类名')
// 查找范围：document或者一个元素
// 返回值：是一个伪数组；如果有这个标签名匹配的元素，就返回这个元素；没有匹配的，就返回一个空的伪数组

getElementsByName()
// 语法：查找范围.getElementsByName('元素name属性的值')
// 查找范围：document或者一个元素
// 返回值：是一个伪数组；如果有这个标签名匹配的元素，就返回这个元素；没有匹配的，就返回一个空的伪数组

querySelector()
// 语法：查找范围.querySelector('选择器')
// 查找范围：document或者一个元素
// 返回值：如果找到选择器匹配的元素，返回第一个找到的内容；没有找到，返回null

querySelectorAll()
// 语法：查找范围.querySelectorAll('选择器')
// 查找范围：document或者一个元素
// 返回值：是一个伪数组；如果找到选择器匹配的元素，则有多少返回多少；没有找到，返回空的伪数组
```

操作元素属性

```javascript
// 元素属性：原生属性、自定义属性、H5自定义属性

// 原生属性
// 语法： 元素.属性名
// 读： 元素.属性名;
	// 获取元素该属性的值
// 写： 元素.属性名 = '值';
	// 设置该元素的该属性的值
// 注意：class除外，操作类名使用 元素.className

// 自定义属性
// setAttribute('属性名', '属性值')
	// 给元素标签设置属性
// getAttribute('属性名')
	// 获取元素上的属性值
// removeAttribute('属性名')
	// 删除元素上的属性

// H5自定义属性
// 直接操作dataset中的数据
// 获取
// 元素.dataset.名字
var str = div.dataset.hello;
// 设置
// 元素.dataset.名字 = '值'
div.dataset.hello = 'world';
```

操作元素类名

> 设置类名
>
> => 元素.className = 'box';
>
> 修改类名
>
> => 元素.className = '新值';
>
> 追加类名
>
> => 元素.className = 元素.className + '新类名';
>
> => 注意：新类名前有一个空格
>
>  
>
> H5提供的API
>
> `add()`
>
> => 语法：元素.classList.add('添加的类名')
>
> `remove()`
>
> => 语法：元素.classList.remove('移除的类名')
>
> `toggle()`
>
> => 语法：元素.classList.toggle('切换的类名')
>
> => 当元素有这个类名时，就删除；当元素没有这个类名时，就添加

操作元素文本内容

> `innerHTML`
>
> 读：获取元素内保部的所有内容
>
> => 以字符串的形式返回；包括子元素的内容及标签
>
> => 语法：元素.innerHTML;
>
> 写：设置元素内部的超文本内容
>
> => 完全覆盖式的书写；出现`html结构`时，自动解析
>
> => 语法：元素.innerHTML = '设置的内容';
>
> `innerText`
>
> 读：获取元素内部的所有文本内容
>
> => 包括子元素所有后代元素里面上午文本内容；标签内容不获取
>
> => 语法：元素.innerText
>
> 写：设置元素内部的文本内容
>
> => 语法：元素.innerText = '设置的内容'
>
> =>完全覆盖式的书写；出现`html结构`时，不会自动解析，原样输出
>
> `value`
>
> => 操作表单元素的 value 属性
>
> 读：获取表单元素的value值
>
> => 语法：元素.value
>
> 写： 设置表单元素的value值
>
> => 语法：元素.value = '设置的值'

获取元素样式

```javascript
// 元素样式：行内样式、非行内样式

// style方式(只能获取行内样式)
元素.style
// 获取到的内容是一个对象，里面包含元素所有可设置样式

// 获取非行内样式
// 标准浏览器
window.getComputedStyle(要获取样式的元素)
// IE低版本
currentStyle 属性
```

