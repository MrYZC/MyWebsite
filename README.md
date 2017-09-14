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

