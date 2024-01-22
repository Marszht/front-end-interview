# JS 中的异步

## Promise

### Promise.prototype.then()
> 这是一个在原型链上的方法，用来接受Promise 对象的结果状态的值的一个方法。该方法也可以接受两个方法，一个方法用来处理fullfilled 的情况，一个用来处理rejected的情况

### Promise.prototype.catch()
> 接受之前promise 对象reject 的情况。是 `.then(null, rejection)`的别名

### Promise.prototype.finally()
> 用来处理 promise 对象不管最终状态是什么的回调。

### Promise.all([])
> 等所有的 promise 对象都resolved 之后返回一个结果数组

### Promise.race([])
> 只要其中一个promise有了最终态之后就返回，then 还是 catch 取决于最先处理完的

### Promise.allSeted()
> 用来确定一组异步操作是否都结束了（不管成功或失败） 跟all 不一样，all 是全部成功就行

### Promise.any()
> 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

### Promise.resolved()
> 可以将一个普通对象转为promise 对象

### Promise.reject()

## Iterator
> Iterator 就是一个遍历器一个接口，为不同的数据结构提供统一的访问机制
1. 为不同的数据结构提供统一的访问机制
2. 按照某种顺序访问数据结构
3. ES6 提供了一种新的遍历命令 Iterator 主要为for..of 提供消费

####  Iterator 遍历过程
1. 创建一个指针对象，指向数据结构的起始位置，也就是说，遍历器其实就是一个指针对象。
2. 第一次调用指针对象的next 方法，可以把指针对象指向数据结构的第一个成员
3. 不断调用指针对象的next方法，直到它指向数据结构的结束位置。  

一种数据结构，只要提供了Iterator接口也就是具有[Symbol.iterator] 就认为是可遍历的

有些数据原生具备Iterator 接口，数组，Set，Map，类数组（argument，Nodelisst，string



###  调用Iterator接口的场景
1. 解构赋值
2. 扩展运算符
3. yield*

## Generate
> * 函数执行后呢会返回一个遍历器 （指针）。注意⚠️是需要执行。
gererator 函数的 trow方法 跟全局的throw 方法不一样。
如果 Generator 函数 内部没有部署try...catch.... 模块则会被外部模块捕获到，如果部署了 try catch 则遍历器throw 抛出的错误不影响下一次遍历。



### next()
> yield 表达式本身没有返回值，next() 可以携带一个参数，该参数可以被当作上一个 yield 表达式的返回值。


### Generator.prototype.throw()
> 类似执行一次 generator.next(), throw() 跟全局的有区别

### Generator.prototype.return()
> 终止 generator继续执行，遍历器对象调用 return() 方法后会终止遍历。


#### next throw return的异同 
next：next(), 将 yield 表达式替换成一个值。
throw：throw(),将yield表达式替换成throw 语句
return：return(), 将yield表达式替换成return语句。

### Generator 的异步
协程： 多个进程相互协作共同完成异步任务

并行：就是可以中断，去执行其他的进程
并发：多个进程一起执行
串行：一个进程执行完，才能执行另一个

node 规定 callback 第一个参数必须是err，因为异步第一阶段结束后上下文环境已经不见了，
如果第一阶段发生错误，需要通过参数传递给下一个阶段。

## Async

