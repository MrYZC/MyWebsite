# mywebsite

> inner

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
原型就是一个普通对象，每个对象都有一个原型，object除外，原型能储存我们的方法，构造函数创建出来的实例对象能够引用原型中的方法。
查看原型
以前一般使用对象的__proto__属性，ES6推出后建议使用Object.getPrototypeOf()方法来获得对象的原型
闭包是什么？
专业说法： 当一个内部函数被其他外部函数之外的变量引用时就形成了一个闭包
还可以这么理解:
闭包就是一个具有封闭功能与包裹功能的数据结构，是为了实现具有私有访问空间的函数的，函数可以构成闭包是因为函数内部定义的1数据结构外部无法访问，即函数具有封闭性，函数可以封装代码既具有包裹性，所以函数可以形成闭包
创建闭包的最常见的方式就是在一个函数内部创建另外一个函数，通过另外一个函数访问这个函数的局部变量
前端错误的分类
	即时运行错误
	资源加载错误
错误的捕捉方式
	try...catch
	window.onerror
资源加载错误：
	object.onerror(如img,script)
	performance.getEntries()
	Error事件补获
	跨域的js运行错误
	Script error
	1.在script·标签增加crossorigin属性
	2.设置js资源响应头Access-Control-Allow-Orgin:*
	Event对象常见应用

	event.preventDefault()，阻止默认行为
	event.stopPropagartion(),阻止事件冒泡
	event.stopImmediatePropagation(),阻止剩余的事件处理函数执行并防止事件冒泡到事件树上，这个方法不接受任何参数
	event.currentTarget,返回绑定事件的元素
	event.target,返回触发事件的元素
	深拷贝和浅拷贝
	浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。深拷贝是重新复制一个对象，新对象和原对象不共享内存，修改新对象不会改变原对象
	var obj1 = {a: 10, b:20,c:30};
	var obj2 = obj1;
	var obj2 = Object.assign({}, obj1);
	var obj2 = Object.assign({}, obj1);
24.代码优化基本方法
减少HTTP请求
html优化：
1.使用语义化标签
2.减少iframe
3.避免重定向

css优化
1.布局代码写在前面
2.删除空样式
3.不滥用浮动，字体，需要加载的网络字体根据网站的需求再添加
4. 选择器性能优化
5. 避免使用表达式，避免使用id写样式

JS优化:
压缩
减少重复代码


图片优化
使用WebP
图片合并，css sprite技术

减少DOM操作
缓存已经访问过的元素
'离线'更新节点，再将它们添加到树种
避免使用JavaScrip输出页面布局-应该是css的事
使用JSON格式来进行数据交换
使用CDN加速
使用HTTP缓存： 添加Expires或Cache-Control信息头
使用DNS预处理
1.用meta信息告诉浏览器，当前页面要做DNS预解析：
<meta http-equiv="x-dns-prefetch" href="http://bdimg.share.baidu.com"/>
HTTPS的握手过程
1.浏览器将自己支持的一套加密规则发送给服务器
2.服务器从选中的一组加密算法与HASH算法，并将自己的身份信息以证书的形式发给浏览器。证书里包含了网站地址，加密
定义方法，用构造器构造对象具有动态上下文
//一个常见的'webpack'配置文件
  const webpack = require('webpack');
  const HtmlwebpackPlugin = require('html-webpack-plugin')
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  module.exports = {
  	entrty: __dirname + "app/main.js",
  	output: {
  		path: __dirname + "build"
  		filename: "bundle-[hash].js"
  	},
  	devtool: 'none',
  	devserver: {

  	},
  	moudle: {

  	}
  	plugins: [
		new webpack.BannerPlugin('版权所有,翻版必究'),
		new Html
  	]
  }
写一个Angular2的Hello World应用相当简单，分三步走：
1 .引入Angular预定义类型
import {Component, View, bootstrap} from "angular2/angular2";
//实现一个Angular2组件
//实现一个Angular组件也很简单，定义一个类，然后给这个类添加注释：
@Component({selector:"ez-app"})
@view({template:"<h1>Hello,Angular</h1>"})
class EzApp{}
将组件渲染到DOM上，需要使用自举/bootstrap函数
bootstrap(EzApp);
function loadImageAsync(url) {
	return new Promise(function(resolve, reject){
		let image = new Image();
		image.onload = function(){
		resolve(image);
		};
		image.onerror = function(){
		reject(new Error('Could not load at' + url));
		};
	image.src = url;
	});
}
{
	let getJSON = function(url) {
		let promise = new Promise(function(resolve, reject){
			let client = new XMLHttpRequest();
			client.open("GET", url);
			client.onreadystatechange = hander;
			client.responseType = "json";
			client.setRequestHeader("Accept", "application/json");
			client.send();
			function handler(){
				if (this.readyState !==4) {
					return;
				}
				if (this.status ===200) {
					resolve(this.response);
				} else {
					reject(new Error(this.statusText));
				}
			};
		});
		return promise;
	};
	getJSON("/posts.json").then(function(json) {
		console.log('Contens:' + json);
	}, function(error) {
		console.error('出错了', error);
	});
}
{
	const prelaodImage = function(path){
		return new Promise(function(resolve,reject){
			let image =new Image();
			image.onload = resolve;
			image.onerror = reject;
			image.src = path;
		});
	};
}

//使用Generator来管理流程，用Promise异步管理
{
	function getFoo(){
		return new Promise(function(resolve, reject){
			resolve('foo');
		});
	}
	let g = function*(){
		try{
			let foo = yield getFoo();
			console.log(foo)
		} catch(e){
			console.log(e)
		}
	};
	function run(generator){
		let it = genetator();
		function go(result){
			if(result.done) return result.value;
			return result.value.then(function(value){
				return go(it.next(value));
			}, function(error){
				return go(it.throw(error));
			});
		}
		go(it.next());
	}
	run(g);
}
//bad
const a = 'foobar'
const b = 'foo' + a + 'bar';

//acceptable
function getFullName(user){
	const firstName = user.firstName;
	const lastName = user.lastName;
}
function getFullName({firstName, lastName}){

}
function processInput(input){
	return {left, right, top, bottom};
}
const {left, right} = processInput(input);
4. 对象
单行定义的对象，最后一个不以逗号结尾
对象尽量静态化，一旦定义就不要随意添加新的属性，如果添加属性不可避免，就要使用Object.assign
const a = {};
Object.assign(a, {x: 3});

var ref = 'some value';

//bad
const atom = {
	ref: ref,
	value: 1,
	addValue: function(value){
		return atom.value + value;
	},
};
const itemCopy = [...items];
const itemCopy = [...items];
const itemCopy = [...items];
const itemCopy = [...items];
Math.max(...[14,3,77])
{
	let arr1 = [0, 1, 2];
	let arr2 = [3, 4, 5];

}
new Date(...[2015,1,1]);
[...arr1, ...arr2, ...arr3]
list.slice(1,1,4)//删掉index为1，长度为1的数组里面的元素替换为4
//函数的返回值
{
	let dateFields = readDateFields(datebase);
	let d = new Date(...dateFields);
}
//扩展运算符还可以将字符串转化为真正的数组
[...hello];
立即执行函数可以写成箭头函数的形式
(()=>{
	console.log('Welcome to the Internet');
})();
//那些需要使用函数表达式的场合，尽量使用箭头函数来代替，因为这样更简洁，而且绑定了this
[1, 2, 3].map(function(x){
	return x*x;
});
[1, 2, 3].map(x => x * x);
const boundMethod = (...params) => method.apply(this.params);
//简单的，单行的，不会复用的函数劲量采用箭头函数。如果函数体较为复杂，
//行数较多，还是应该采取传统的写法
function divide(a, b, option = false) {

}
function(a,b,{ option = false} = {}){

}
//使用默认值语法去设置参数的默认值
function handleThing(opts = {}) {

}

//Map结构
注意区分Object和Map，只有模拟现实世界的实体对象时，
才使用Object。如果只是需要key：value的数据结构，使用Map
结构，因为Map结构有内建的遍历机制
{
	let map = new Map(arr);
	for(let key of map.keys()){
		console.log(key);
	}
	for(let value of map.values()){
		console.log(value);
	}
	for(let item of map.entries()){
		console.log(item[0],item[1]);
	}
}
总是用Class取代需要prototype的操作。因为Class的写法更简单
更易于理解
function Queue(contents = []){
	this._queue = [...contents];
}
Queue.prototype.pop = function() {
	const value = this._queue[0];
	this._queue.splice(0,1);
	return value;
}
// good
class Queue {
	constructor(contents = []){
		this._queue = [...contents];
	}
	pop() {
		const value = this._queue[0];
		this._queue.splice(0, 1);
		return value;
	}
}
//与Iterator接口的关系
//上一章说过，任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数
//调用该函数就会返回对象的一个遍历器对象

//由与Generator函数就是遍历器生成函数，因此可以把generator赋值给对象的Symbol.iterator属性，从而是该对象具有
//
//Iterator接口
let myIterable = {};
myIterable[symbol.iterator] = function* (){
	yield 1;
	yield 2;
	yield 3;
};
console.log([...myIterable]); //[1, 2, 3]

function* gen(){
	//some code
}
var g = gen();
g[Symbol.iterator]() ===g //true
2.next方法的参数
//yiled表达式本身没有返回值，或者说总是返回undefined
//next可以带一个参数，该参数就会被当上做上一个yield表达式的返回值
function* f(){
	for(let i = 0; true; i++) {
		let reset = yield i;
		if (reset) { i = -1;}
	}
}
let g = f();
g.next()
g.next()
g.next(true)
{
	function* foo(x) {
		let y = 2 * (yield(x+1))
		let z = yield(y / 3);
		return (x + y + z)
	}
	let a = foo(5);
	a.next();
	a.next();
	a.next();
	let b = foo(5);
	b.next();
	b.next(12);
	b.next(13);	
}
////////////////////////////////////
//利用Generator函数和for...of循环实现斐波那契数 //////////////////////////////////////
function* fibonacci() {
	let [prev, curr] = [curr, prev + curr];
	for(;;){
		[prev, curr] = [curr, prev +curr];
		yield curr;
	}
}
for(let n of fibonacci()) {
	if(n>1000) break;
	console.log(n);
}
//利用for...of循环，可以写出遍历任意对象的方法。
//原生的javascript对象没有遍历接口，无法使用for...of循环，通过
//通过Generator函数为它加上这个接口就可以了
function* objectEntries(obj){
	let proKeys = Reflect.ownKeys(obj);
	for(let propKey of propKeys){
		yield [propKey, obj[propKey]];
	}
}
let jane = {first:'jane', last: 'Doe'};
for (let [key, value] of objectEntriest(jane)){
	console.log(`${key}: ${value}`);
}
{
	function* objectEntriest() {
		let propKeys = Object.keys(this);
		for (let proKey of proKeys){
			yiled [propKey, this[propKey]]
		}
	}
	let jane ={first:'Jane', last: 'Doe'};
	jane[symbol].iterator = objectEntriest;
	for(let [key,value] of jane) {
		console.log(`${key}:${value}`);
	}
}
//除了for...of循环以外，扩展运算符（...),解构赋值,和array.from方法里面调用的都是
//遍历器接口。这意味着，它们可以将Generator返回的Iterator对象作为参数

function* numbers () {
	yield 1
	yield 2
	return 3
	yield 4
}
[...numbers()]
Array.from(number())//[1,2]
let[x,y] = numbers();
x //1
y //2
for (let n of numbers()){
	console.log(n)
}
4.Generator.prototype.throw()
//Generator函数返回的遍历器对象,都有一个throw方法,可以在函数体外抛出错误然后在Generator内捕获
//javascript中通过生成实例对象的方法通常是通过构造函数
下面是一个例子
function Point(x,y) {
	this.x = x;
	this.y = y;
}
Point.Prototype.toString = function () {
	return '(' + this.x + ',' +this.y+')';
};
let p = new Point(1,2);