---

title: js总结(四)
date: 2021-05-25
tags:
  - js
categories:
  - js

---

<articleTop></articleTop>

## DOM节点

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
