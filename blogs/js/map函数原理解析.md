---

title: map函数原理解析
date: 2021-05-08
cover: http://browser9.qhimg.com/bdr/__85/t010478e9c2b48947dc.jpg
tags:
  - js
categories:
  - JS知识

---

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。



-  map不改变原数组
-  map返回数组元素操作后的值，就是一定有返回值
-  map遍历一次产生一个返回值

```javascript
var arr = [1,4,9,16];
const map1 = arr.map(x => x *2);
console.log(map1); // [2,8,18,32]
```

而如下写时：

```javascript
var arr = [1, 4, 9, 16];
const map1 = arr.map(x => {
    if (x == 4) {
        return x * 2;
    }
});
console.log(map1); // [undefined, 8, undefined, undefined]
```

为什么会出现`undefined`呢？这就要分析`map`的底层原理了。

```javascript
var arr = [10,100,1000];

// 自定义map函数
function myMap(fn) {
    var newArr = [];
    // fn就是调用myMap时传递的函数
    // this就是调用myMap的那个数组
    for(let i = 0; i < this.length; i++) {
        // 在for循环中，this[i]就是数组每一项，i就是每一项的索引，this就是原始数组
        var res = fn(this[i], i, this);
        newArr.push(res); // 将每次循环数据，push进newArr中
    }
    return newArr;
}

// 向Array对象添加新的方法；将myMap方法放在Array.prototype上
Array.prototype.myMap = myMap;

var res = arr.myMap(function(item, index, arr) {
    console.log(item, index, arr);
    return item * 1.3;
})

console.log(res); // [13, 130, 1300]
```

参考：

[Array.prototype](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype)

[视频讲解](https://www.bilibili.com/video/BV14y4y1q754?p=81&spm_id_from=pageDriver)