---

title: 回调函数
date: 2021-06-02
tags:
  - js
categories:
  - js

---

<articleTop></articleTop>

## 定义

> 把A函数当做参数传递到B函数内部；在B函数内部以形参的方式调用A函数；这种函数的点用方式，我们叫做回调函数(callback)

## 缺点

> 会调地狱；不停地在一个回调函数里面去进行第二个回调函数的操作；代码没有可读性和可维护性

## 解决方案

### promise

> 状态：
>
> 持续(pending)、成功(resolved)、失败(rejected)
>
> 语法：
>
> ```javascript
> new Promise(function (resolve, reject) {
>   // TODO
> }).then(function (res) {
>   console.log(res)
> }).catch(function (err) {
>   console.log(err)
> })
> 
> // Promise.all()
> // 语法：Promise.all([ promise对象1, promise对象2, ...]).then(function() {})
> // 缺点：必须全部成功，任何一个失败，那么最终一个结果也得不到
> ```

### async / await

> 语法：
>
> ```javascript
> async function 函数名() {
>   let obj = await getName({
>       return obj
>   })
> }
>  
>  
> 函数名().then(res=>{
>   //得到函数的返回值 
> })
> ```
>
> 目的：
>
> + 回调地狱的终极解决办法
> + 把异步代码写的看起来像同步代码
