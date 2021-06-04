---

title: js总结(六)
date: 2021-06-03
cover: http://browser9.qhimg.com/bdr/__85/t018093053d65f09033.jpg
tags:
  - js
categories:
  - JS知识

---

:::tip 定义
for of循环、Set数据结构、Map数据结构
:::
<!-- more -->
## for ... of循环

```javascript
// for() {} 遍历数组
// forEach() 遍历数组
// for...in循环，遍历对象
// for...of循环，可以遍历数组

// 语法： for(let value of 数组)
```

+ 区别：
  + **for in得到对象的key或数组,字符串的下标**
  + **for of和forEach一样,是直接得到值**
  + **for of不能用于对象**

## Set数据结构

```javascript
// 语法： new Set()
// 可以在实例化的时候传递一个数组；数组里的每一项数据就是set数据类型的每一个数据
// 特点：不接受重复数据
const s = new Set(['hello', 'world', '你好', '世界']);

// add()
// 语法：set数据类型.add(要添加的数据)
s.add(true);

// delete()
// 语法：set数据类型.delete(要删除的数据)
s.delete('世界');

// has()
// 语法：set数据类型.has(要判断的数据)
s.has('你好');

// clear()；清除所有数据
// 语法：set数据类型.clear()
s.clear();

// forEach()
// 语法：set数据类型.forEach(function(item, t, set) {})
s.forEach(function (item, t, set){
    console.log(item, t, set)
});

// for of 循环遍历
for(let value of s) {
    console.log(value);
}

// size属性
// 表示长度，Set数据结构里面有多少数据
console.log(s.size);
```

## Map数据结构

```javascript
// 语法： new Map();
const m = new Map([
    ['name','Jack'],
    [{'name','Jack'}, {'name','Rose'}]
])

// set()
// 语法： map数据结构.set(key,value);
m.set('age',18);

// get()
// 语法： map数据结构.get(key);
m.get('age');

// delete()
// 语法： map数据结构.delete(key);
m.delete('age');

// clear();清除所有数据
// 语法： map数据结构.clear();
m.clear();

// forEach()
// 语法： map数据结构.forEach(function(value, key, map) {});
m.forEach(function(value, key, map) {
    console.log(key, value, map)
});

// for of循环
for (let [key,value] of m) {
    console.log(key, value);
}

// has()
// 语法：map数据结构.has(key)
// 返回值：一个布尔值
m.has('age');

// size
// 判断map长度
m.size;
```

