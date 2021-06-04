---

title: js总结(一)
date: 2021-05-06
cover: http://browser9.qhimg.com/bdr/__85/t01846b3cf9202caed4.jpg
tags:
  - js
categories:
  - JS知识

---

函数、arguments、预解析、作用域、对象、数据类型的存储、数组
<!-- more -->
## 函数

### 声明式函数

```javascript
// 可以在声明之前调用，也可以在声明之后调用
function 函数名() {
    // TODO
}
```

### 赋值式函数

```javascript
// 只能在声明之后调用
var 函数名 = function () {
    // TODO
}
```

:::tip 注意

函数名后带 ( ) ，是立即执行函数，不带 ( ) 只表示函数

:::

## arguments

定义：

​	`表示所有实参的集合（伪数组）`

属性：

​	`length：表示arguments中有多少数据`

​	`下标（索引）：操作arguments中具体的某一数据`

## 预解析

定义：

​	`在当前作用域下, JS 代码执行之前，浏览器会默认把带有 var 和 function 声明的变量在内存中进行提前声明或者定义`

变量预解析：

​	`变量提升（变量预解析）： 变量的声明会被提升到当前作用域的最上面，变量的赋值不会提升。`

```javascript
console.log(num);  // 结果是多少？
var num = 10;      // ？
// 结果：undefined
```

:::tip 注意

变量提升只提升声明，不提升赋值

:::

函数预解析：

`函数提升： 函数的声明会被提升到当前作用域的最上面，但是不会调用函数。`

```javascript
fn();
function fn() {
    console.log('打印');
}
// 结果：控制台打印字符串 --- ”打印“ 
```

:::tip 注意

函数声明代表函数整体，所以函数提升后，函数名代表整个函数，但是函数并没有被调用

:::

函数表达式声明函数问题：

`函数表达式创建函数，会执行变量提升，此时接收函数的变量名无法正确的调用`

```javascript
fn();
var  fn = function() {
    console.log('想不到吧');
}
// 结果：报错提示 ”fn is not a function"
```

:::tip 解释

该段代码执行之前，会做变量声明提升，fn在提升之后的值是undefined；而fn调用是在fn被赋值为函数体之前，此时fn的值是undefined，所以无法正确调用

:::

## 作用域

`全局作用域：打开一个页面就是一个全局作用域`

`私有作用域（局部作用域）：只有函数生成私有作用域`

## 对象

### 创建方式

```javascript
// 字面量创建，可以通过 key:value 的形式直接添加数据
var obj = {name:'jack'}

// 内置构造函数创建
var obj = new Object();
```

### 操作语法

点语法

```javascript
var obj = new Object();

// 添加
obj.name = 'jack'; // 对象名.成员名 = 值
// 删除
delete obj.name; //delete 对象名.成员名
// 修改
obj.name = 'tom'; // 对象名.成员名 = 值；有就是修改，无就是添加
// 查询
console.log(obj.name); // 对象名.成员名；当成员不存在时，返回undefined
```

数组关联语法

```javascript
var obj = new Object();

// 添加
obj['name'] = 'jack'; // 对象名['成员名'] = 值
// 删除
delete obj['name']; // delete 对象名['成员名']
// 修改
obj['name'] = 'tom'; // 对象名['成员名'] = 值；有就是修改，无就是添加
// 查询
console.log(obj['name']); // 对象名['成员名']
```

:::warning

在控制台打印时会出现两种情况：现在的结果及最终的结果

当不展开时，显示的是当前的样子；当展开时，显示的是最终结果

解决：

1、直接打印想要获取的值

2、使用console.table()

:::

:::tip for...in与for..of

1、for...in 循环：只能获得对象的键名，不能获得键值；for...of 循环：允许遍历获得键值

2、对于普通对象，没有部署原生的 iterator 接口，直接使用 for...of 会报错

3、for...in 循环不仅遍历数字键名，还会遍历手动添加的其它键，甚至包括原型链上的键。for...of 则不会这样

4、for...of 循环可以与break、continue 和 return 配合使用，跳出循环

5、无论是 for...in 还是 for...of 都不能遍历出 Symbol 类型的值，遍历 Symbol 类型的值需要用 Object.getOwnPropertySymbols() 方法

总之，for...in 循环主要是为了遍历对象而生，不适用于遍历数组

for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象

[参考](https://www.cnblogs.com/rogerwu/p/10738776.html)

:::

## 数据类型的存储

### 数据类型

基本数据类型：Number、String、Boolean、Undefined、Null

复杂数据类型：Function、Object

### 存储

基本数据类型：存储在栈中

复杂数据类型：值存储在堆中，地址值存储在栈中

## 数组

### 创建

```javascript
// 字面量创建
var arr = [];

// 内置构造函数创建
var arr = new Array();
```

### 数据操作

```javascript
// 字面量创建直接添加数据
var arr = ['hello','world'];

// 内置构造函数直接添加数据
var arr = new Array(10); // 一个参数代表数组长度为10
var arr = new Array(10,20,30); // 多个参数代表数组中存在的数据
```

### 常用方法

push()、pop()、unshift()、shift()

```javascript
// push()；直接操作原始数组
// 语法：数组.push(数据1,数据2,数据3,...)；
// 作用：将数据追加至末尾；
// 返回值：得到的新数组
var arr = ['hello','world'];
var res = arr.push('你好');

// pop()；直接操作原始数组
// 语法：数组.pop()；
// 作用：删除数组的最后一个数据；
// 返回值：被删除的数据
var arr = ['hello','world'];
var res = arr.pop();

// unshift()；直接操作原始数组
// 语法：数组.unshift(数据1,数据2,数据3,...)；
// 作用：在数组最前面插入数据；
// 返回值：插入后的数据长度
var arr = ['hello','world'];
var res = arr.unshift('你好');

// shift()；直接操作原始数组
// 语法：数组.shift()；
// 作用：删除数组最前面的一个数据；
// 返回值：被删除的数据
var arr = ['hello','world'];
var res = arr.shift();
```

reverse()、sort()、splice()、concat()、slice()、join()

```javascript
// reverse()；直接操作原始数组
// 语法：数组.reverse()；
// 作用：反转数组；
// 返回值：反转后的数组
var arr = ['hello','world'];
var res = arr.reverse();

// sort()；直接操作原始数组
// 语法：数组.sort()；
// 作用：数组排序；
// 返回值：排序后的数组
var arr = [1,11,21,32,12,43];
var res = arr.sort();

// splice()；直接操作原始数组
// 语法：数组.splice(开始索引，截取个数)；
// 作用：截取数组，替换新内容；
// 返回值：截取的数组
var arr = ['hello','world','jack','tom'];
var res = arr.splice(1,2); // ["world", "jack"]

// concat()；直接操作原始数组
// 语法：数组.concat(数组1,数据2,...)；
// 作用：如果是数组，将数组拆开，并将里面的每一项追加到原数组后，如果是数据，那么直接追加；
// 返回值：追加后的数组
var arr = ['hello','world','jack','tom'];
var res = arr.concat([10,20]); // ['hello','world','jack','tom','10','20'];

// slice()
// 语法：数组.slice(开始索引,结束索引) - 包前不包后，索引可以为负整数；
// 作用：获取数组里的某些数据；
// 返回值：获取的数组
var arr = ['hello','world','jack','tom'];
var res = arr.slice(1,2); // ["world"]

// join()
// 语法：数组.join('连接符号')；
// 作用：将数组中的数据使用连接符号连接在一起，默认为逗号(,)；
// 返回值：连接好的内容，是一个String类型
var arr = ['hello','world','jack','tom'];
var res = arr.join('-'); // hello-world-jack-tom
```

indexOf()、lastIndexOf()、forEach()、map()

```javascript
// indexOf()
// 语法：数组.indexOf(数据,开始索引)，开始索引 可不写；
// 作用：正向查看数组里面指定数据的索引；
// 返回值：有数据，返回第一个满足条件的数据索引；无数据返回-1
var arr = ['hello','world','jack','tom','hello'];
var res = arr.indexOf('hello');  // 0

// lastIndexOf()
// 语法：数组.lastIndexOf(数据,开始索引)，开始索引 可不写；
// 作用：反向查看数组里面指定数据的索引；
// 返回值：有数据，返回第一个满足条件的数据索引；无数据返回-1
var arr = ['hello','world','jack','tom','hello'];
var res = arr.lastIndexOf('hello');  // 4

// forEach()
// 语法：数组.forEach(function(item,index,arr) {})，item：数组每一项，index：数组每一项的索引，arr：原始数组；
// 作用：取代for循环的作用，遍历数组；
// 返回值：没有返回值
var arr = ['hello','world','jack','tom','hello'];
var res = arr.forEach(function(item,index,arr) {
    console.log(index, item);
});
 
// map()
// 语法：数组.map(function(item,index,arr) {})，item：数组每一项，index：数组每一项的索引，arr：原始数组；
// 作用：取代for循环的作用，遍历数组；
// 返回值：返回新数组，里面是对原始数组每一个数据的操作，返回值数组一定和原始数组长度一样
var arr = [10,100,1000];
var res = arr.map(function(item,index,arr) {
    console.log(index, item, arr);
});
```

filter()、every()、some()、flat()

```javascript
// filter()
// 语法：数组.filter(function(item,index,arr) {})，item：数组每一项，index：数组每一项的索引，arr：原始数组；
// 作用：过滤原始数组中的数据，将满足条件的放在新数组里面；
// 返回值：返回新数组，里面是原始数组中所有满足提那件的项
var arr = [10,100,1000];
var res = arr.filter(function(item,index,arr) {
    return item > 100;
});
console.log(res); // [1000]

// every()
// 语法：数组.every(function(item,index,arr) {})，item：数组每一项，index：数组每一项的索引，arr：原始数组；
// 作用：判断原始数组中是不是每一项都满足条件
// 返回值：返回布尔值；满足为true，不满足为false
var arr = [10,100,1000];
var res = arr.every(function(item,index,arr) {
    return item > 100;
});
console.log(res); // false

// some()
// 语法：数组.some(function(item,index,arr) {})，item：数组每一项，index：数组每一项的索引，arr：原始数组；
// 作用：判断原始数组中是不是有某一项满足条件
// 返回值：返回布尔值；满足为true，不满足为false
var arr = [10,100,1000];
var res = arr.some(function(item,index,arr) {
    return item > 1000;
});
console.log(res); // false

// flat()
// 语法：数组.flat(数字)；
// 作用：多维数组转为一维数组
// 返回值：转换后的数组
var arr = [10,100,[20,25,[42,56,19]]];
var res = arr.flat(Infinity);
console.log(res); // [10, 100, 20, 25, 42, 56, 19]
```

