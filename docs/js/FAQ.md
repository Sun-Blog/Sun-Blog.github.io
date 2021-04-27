---
title: 常见问题解决方案
date: 2021-04-26
tags:
  - ajax
categories:
  - js

---

<Boxx/>

## Ajax - IE缓存问题

::: tip 方案一

在获取请求时，在URL后添加时间戳，这样每次请求时就不会调用缓存数据

:::

```javascript
xhr.open("GET",'http://127.0.0.1:8000/ie?t='+Date.now());
```

::: tip 方案二

使用jQuery ajax中提供了一个cache属性来解决浏览器的缓存问题；原理和方案一基本一致

:::

```javascript
$.ajax({
    url: 'your url',
    type: 'GET',
    dataType: 'json',
    cache: false,  // cache的默认值为true, 如果设为false, 它会强制请求的页面不会被浏览缓存。设置cache为false时会在query string中追加一个"_=[时间戳]"的参数
    data: { 'action': 'getinfo' },
    success: function(data) {
        // TODO code here.
    }
});
```

