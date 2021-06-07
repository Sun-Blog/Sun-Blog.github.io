---

title: js总结(四)
date: 2021-05-25
cover: http://browser9.qhimg.com/bdr/__85/t01f658bda8d6cbf70e.jpg
tags:
  - js
categories:
  - JS知识

---

:::tip 涉及点
DOM节点操作、获取元素尺寸
:::
<!-- more -->

## DOM节点操作

### 获取节点

childNodes

>  + 语法：元素.childNodes
>  + 返回值：元素的所有 子节点(伪数组)

children

>  + 语法：元素.children
>  + 返回值：元素的所有 子元素节点(伪数组)

firstChild

>  + 语法：元素.firstChild
>  + 返回值：元素的第一个 子节点

firstElementChild

>  + 语法：元素.firstElementChild
>  + 返回值：元素的第一个 子元素节点

lastChild

>  + 语法：元素.lastChild
>  + 返回值：元素的最后一个 子节点

lastElementChild

>  + 语法：元素.lastElementChild
>  + 返回值：元素的最后一个 子元素节点

previousSibling

>  + 语法：元素.previousSibling
>  + 返回值：元素的上一个 兄弟节点

previousElementSibling

>  + 语法：元素.previousElementSibling
>  + 返回值：元素的上一个 兄弟元素节点

nextSibling

>  + 语法：元素.nextSibling
>  + 返回值：元素的下一个 兄弟节点

nextElementSibling

>  + 语法：元素.nextElementSibling
>  + 返回值：元素的下一个 兄弟元素节点

parentNode

> 语法：元素.parentNode
>
> 返回值：该元素的父节点

parentElement

> 语法：元素.parentElement
>
> 返回值：该元素的父元素节点

attributes

> 语法：元素.attributes
>
> 返回值：该元素的所有 属性节点

### 创建节点

createElement()

> 语法：document.createElement('标签名')
>
> 返回值：一个元素节点

createTextNode()

> 语法：document.createTextNode('文本内容')
>
> 返回值：一个文本节点，不是字符串

createAttribute()

> 语法：document.createAttribute('属性名')
>
> 返回值：一个属性节点

### 插入节点

appendChild()

> 语法：父节点.appendChild(子节点)
>
> 作用：把子节点插入到父节点里面，放在最后一个节点的位置

insertBefore()

> 语法：父节点.insertBefore(要插入的子节点，哪一个子节点前面)
>
> 作用：把子节点插入到指定父节点的指定子节点前面

### 删除节点

removeChild()

> 语法：父节点.removeChild(子节点)
>
> 作用：把子节点从父节点里移除

remove()

> 语法：子节点.remove()
>
> 作用：把自己移出父节点

### 替换节点

replaceChild()

> 语法：父节点.replaceChild(新节点，旧节点)
>
> 作用：在父节点下，用新节点替换旧节点

### 克隆节点

cloneNode

> 语法：节点.cloneNode(参数)
>
> + 参数选填，默认是false，不克隆后代节点；选填为true时，表示克隆所有后代节点
>
> 返回值：一个克隆好的节点

## 获取元素尺寸

```javascript
// offsetWidth 与 offsetHeight
+ 语法：
	-> 元素.offsetWidth
	-> 元素.offsetHeight
+ 得到：
	-> 元素的内容 + padding + border 区域的尺寸

// clientWidth 与 clientHeight
+ 语法：
	-> 元素.clientWidth
	-> 元素.clientHeight
+ 得到：
	-> 元素的内容 + padding 区域的尺寸  
```

:::warning

display:none  后，得到的值为0

:::

