---
title: Ajax、fetch与axios
date: 2021-04-25
cover: http://browser9.qhimg.com/bdr/__85/t015343fb0658b3cffd.jpg
tags:
  - js
categories:
  - JS指南

---

[**「Ajax」:**](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)

::: tip

全称`Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）`最早出现的发送后端请求技术，隶属于原始js中，核心使用`XMLHttpRequest`对象，多个请求之间如果有先后关系的话，就会出现回调地狱。

:::

[**「Jquery Ajax」:**](https://jquery.com/)

::: tip

是 jQuery 底层 AJAX 实现。简单易用的高层实现见 `$.get`, `$.post` 等。`$.ajax()` 返回其创建的 `XMLHttpRequest` 对象。大多数情况下你无需直接操作该函数，除非你需要操作不常用的选项，以获得更多的灵活性。[jQuery ajax - ajax() 方法](https://www.w3school.com.cn/jquery/ajax_ajax.asp)

:::

[**「Axios」:**](http://www.axios-js.com/)

::: tip

`axios`不是原生JS的，需要进行安装，它不但可以在客户端使用，也可以在nodejs端使用。Axios也可以在请求和响应阶段进行拦截。同样也是基于[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象的。特性：从浏览器中创建 XMLHttpRequests、从 node.js 创建 http 请求、支持 Promise API、拦截请求和响应等。[Axios 中文文档传送门](http://www.axios-js.com/zh-cn/docs/)

:::

[**「Fetch」:**](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

::: tip

`Fetch` 提供了对 `Request` 和 `Response` （以及其他与网络请求有关的）对象的通用定义。使之今后可以被使用到更多地应用场景中：无论是`service workers`、`Cache API`、又或者是其他`处理请求和响应的方式`，甚至是任何一种需要你自己在程序中生成响应的方式。`Fetch`号称是AJAX的替代品，是在ES6出现的，使用了ES6中的[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象。Fetch是基于`promise`设计的。`Fetch`的代码结构比起`ajax`简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js。`Fetch`函数就是原生js，没有使用`XMLHttpRequest`对象。

:::

## Ajax

1. 创建 XMLHttpRequest 对象

2. 创建 HTTP 请求（调用 open 方法设置基本请求信息）

3. 发送请求

4. 注册事件

5. 获取返回数据，对页面进行更新

   ```javascript
   //1.创建 Ajax 对象
   if (window.XMLHttpRequest) {
     var oAjax = new XMLHttpRequest();
   } else {
     var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
   }
   
   //2.创建HTTP请求
   oAjax.open("GET", url, true);
   
   //3.发送请求
   oAjax.send();
   
   //4.注册事件
   oAjax.onreadystatechange = function() {
     if (oAjax.readyState == 4) {
       if (oAjax.status == 200) {
         //5.获取返回数据
         fnSucc(oAjax.responseText);
       } else {
         //alert('失败了');
         if (fnFaild) {
           fnFaild();
         }
       }
     }
   };
   ```

## JQueryAjax

```javascript
var list = {}; 
$.ajax({
    //请求方式 POST || GET
    type : "POST", 
    //请求的媒体类型
    contentType: "application/json;charset=UTF-8",
    //请求地址
    url : "http://127.0.0.1/xxxx/",
    //数据，json字符串
    data : JSON.stringify(list),
    //请求成功
    success : function(result) {
        console.log(result);
    },
    //请求失败，包含具体的错误信息
    error : function(e){
        console.log(e.status);
        console.log(e.responseText);
    }
});
```

下面的表格列出了 jQuery AJAX 方法：

| 方法                | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| `$.ajax()`          | 执行异步 AJAX 请求                                           |
| `$.ajaxPrefilter()` | 在每个请求发送之前且被 `$.ajax()` 处理之前，处理自定义 `Ajax` 选项或修改已存在选项 |
| `$.ajaxSetup()`     | 为将来的 `AJAX` 请求设置默认值                               |
| `$.ajaxTransport()` | 创建处理 Ajax 数据实际传送的对象                             |
| `$.get()`           | 使用 AJAX 的 `HTTP GET` 请求从服务器加载数据                 |
| `$.getJSON()`       | 使用 `HTTP GET` 请求从服务器加载 JSON 编码的数据             |
| `$.getScript()`     | 使用 AJAX 的 HTTP GET 请求从服务器加载并执行 JavaScript      |
| `$.param()`         | `创建数组或对象的序列化`表示形式（可用于 AJAX 请求的 URL 查询字符串） |
| `$.post()`          | 使用 AJAX 的 HTTP POST 请求从服务器加载数据                  |
| `ajaxComplete()`    | 规定 AJAX 请求`完成时运行`的函数                             |
| `ajaxError()`       | 规定 AJAX 请求`失败时运行`的函数                             |
| `ajaxSend()`        | 规定 AJAX 请求`发送之前运行`的函数                           |
| `ajaxStart()`       | 规定第一个 AJAX 请求`开始时运行`的函数                       |
| `ajaxStop()`        | 规定所有的 AJAX 请求`完成时运行`的函数                       |
| `ajaxSuccess()`     | 规定 AJAX 请求`成功完成时运行`的函数                         |
| `load()`            | 从服务器加载数据，并把返回的数据放置到指定的元素中           |
| `serialize()`       | 编码表单元素集为`字符串`以便提交                             |
| `serializeArray()`  | 编码表单元素集为 `names` 和 `values` 的数组                  |

## axios

简单实用

```javascript
axios({
    method: 'GET',
    url: url,
})
.then(res => {console.log(res)})
.catch(err => {console.log(err)})
```

并发请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));

```

## fetch

- 第一个参数是 URL

- 第二个是可选参数，可以控制不同配置的 init 对象

- 使用了  JavaScript Promises 来处理结果/回调

  基本语法：

```javascript
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log("Oops, error", e));

```

封装：

```javascript
window.Fetch = (url, option) => {
  return new Promise((resolve, reject) => {
    let data = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, _/_",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: {},
    };
    data = JSON.parse(
      (JSON.stringify(data) + JSON.stringify(option)).replace(/}{/, ",")
    );
    fetch(url, data)
      .then((res) => {
        // .text()：返回字符串
        // .json()：返回一个 JSON 对象
        // .formData()：返回一个 FormData 对象
        // .blob()：返回一个 blob 对象
        // .arrayBuffer()：返回一个二进制数组
        resolve(res.json());
      })
      .catch(function(res) {
        reject(res);
      });
  });
};
```

参考文章：

[从ajax到fetch、axios](https://juejin.cn/post/6844903590058786824)

[Ajax,jQuery ajax,axios和fetch介绍、区别以及优缺点](https://juejin.cn/post/6844903922021203975)