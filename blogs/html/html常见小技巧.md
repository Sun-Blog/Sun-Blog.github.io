---
title: html常见小技巧
date: 2021-06-03
cover: http://browser9.qhimg.com/bdr/__85/t01323a95aa7f4dad7d.jpg
tags:
  - html
categories:
  - HTML知识
---

## 图片懒加载
+ 可以通过为图片文件添加loading="lazy"的属性来实现：


```javascript
<img src="image.png" loading="lazy" alt="lazy" width="200" height="200" />
```



## 输入提示

+ HTML通过`<datalist>`标签来实现。需要注意的是，使用时这个标签的id属性需要和input元素的list属性一致

```javascript
<label for="country">请选择喜欢的国家:</label>
<input list="countries" name="country" id="country">
<datalist id="countries">
  <option value="UK">
  <option value="Germany">
  <option value="USA">
  <option value="Japan">
  <option value="India">
  <option value="China">
</datalist>
```

## Picture标签

+ HTML提供了`<picture>`标签，允许我们来添加多张图片资源，并且根据不同的分辨率需求来展示不同的图片

```javascript
<picture>
  <source media="(min-width:768px)" srcset="med_flower.jpg">
  <source media="(min-width:495px)" srcset="small_flower.jpg">
  <img src="high_flower" style="width: auto;" />
</picture>
```

+ 我们可以定义不同区间的最小分辨率来确定图片素材，这个标签的使用有些类似`<audio>`和`<video>`标签

## Base URL

+ 当页面有大量的锚点跳转或者静态资源加载时，并且这些跳转或者资源都在统一的域名的场景时，我们可以通过`<base>`标签来简化这个处理。

```javascript
<head>
  <base href="https://www.weibo.com/" target="_blank">  
</head>
<body>
  <a href="jackiechan">成龙</a>
  <a href="kukoujialing">贾玲</a>
</body>
```

## 页面重定向（刷新）

+ 当我们希望实现一段时间后或者是立即重定向到另一个页面的功能时，我们可以直接通过HTML来实现。这个交互可以嵌入到HTML中，直接通过`<meta>`标签，设置`http-equiv="refresh"`来实现

```javascript
<meta http-equiv="refresh" content="4; URL='https://google.com' />
```

+ 这里`content`属性指定了重定向发生的秒数。值得一提的是，尽管谷歌声称这种形式的重定向和其他的重定向方式一样可用，但是使用这种类型的重定向其实并不是那么的优雅，往往会显得很突兀。因此，最好在某些特殊的情况下使用它，比如在长时间用户不活动之后再重定向到目标页面