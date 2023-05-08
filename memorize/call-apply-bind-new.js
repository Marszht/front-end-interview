// 手写 call bind apply
let penson = {
  name: 'mars',
  sayHi: function (arg) {
    console.log(`Hi, ${this.name}`, arg);
  },
};
function callFun(arg) {
  this.sayHi(arg);
}
// call
// 1. 绑定this
// 2. 可选参数传递
Function.prototype.myCall = function (thisObj, ...args) {
  // 用于简单判断 当 this为 null 的时候 this 指向为 window
  context = thisObj || window;
  //  1：先将函数设为指定绑定对象的属性，
  //2：然后再执行它
  // 3： 再删除它
  context.fn = this; // myCall 中的this 隐式绑定 到 callFun
  const result = context.fn(args); // 这里相当于 又是隐式绑定 到context 也就是 penson 中 对象调用
  delete context.fn;
  return result;
};
callFun.myCall(penson, 1, 2, 3);

// apply
// 1. 绑定this
// 2. 可选参数数组传递
Function.prototype.myApply = function (thisObj, args) {
  let context = thisObj || window;
  context.fn = this;
  const res = context.fn(args);
  delete context.fn;
  return res;
};

callFun.myApply(penson, [1, 2, 3]);

// apply 开发小技巧 把数组各项添加到另一个数组，改变原数组，就不用concat （创建一个新数组），或者遍历了
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
// console.log(array); // ["a", "b", 0, 1, 2]

// bind
// bind() 方法创建一个新的函数，在 bind() 被调用时，
// 这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。
Function.prototype.myBind = function () {
  return (thisObj, ...args) =>  { // 使用箭头函数，将this 绑定到 callFun
    console.log(thisObj, ...args);
    context = thisObj || window;
    context.fn = this;
    const result = context.fn(args);
    delete context.fn;
    return result;
  };
};

callFun.myBind()(penson, 1, 2, 3);

// new 的手写
// 1. 新生成了一个对象
// 2. 链接到原型
// 3. 绑定 this
// 4. 返回新对象
