---
title: css常用片段
date: 2021-04-20
tags:
  - css
categories:
  - css
---

### 清除浮动

```css
// 清除浮动
.clearfix:after {
  content: "\00A0";
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
  clear: both;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}
```

### 水平垂直居中

```css
// 绝对定位方式且已知宽高
position: absolute;
top: 50%;
left: 50%;
margin-top: -3em;
margin-left: -7em;
width: 14em;
height: 6em;

// 绝对定位 ＋ 未知宽高 ＋ translate
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
// 需要补充浏览器前缀

// flex 轻松搞定水平垂直居中(未知宽高)
display: flex;
align-items: center;
justify-content: center;
```

### 文本末尾添加省略号

```css
// 宽度固定，适合单行显示...
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

// 宽度不固定，适合多行以及移动端显示
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```

### 制造文本的模糊效果

```css
color: transparent;
text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
```

### 移除常用标签的浏览器默认的 margin 和 padding

```css
body,p,h1,h2,h3,h4,h5,h6,dl,dd,ul,ol,th,td,button,figure,input,textarea,form {
  margin: 0;
  padding: 0;
}
```

### 参考文章

[55 个提高你 CSS 开发效率的必备片段](https://zhuanlan.zhihu.com/p/118436424)