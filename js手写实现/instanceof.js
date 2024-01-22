// instanceof 怎么实现的?
// instanceof 用于检测构造函数的proptotype 属性是否出现在某个实例对象的原型链上。
// 可以往原型链上找

// 原型链：
// obj（实例对象） instanceof Obj（某个构造函数） true;
// obj.__proto__ === Obj.prototype // true
// 需要一层一层的向上遍历原型链  比如说 obj instanceof Object => true  
// 过程就是  obj.__proto__ === Car.prototype true obj.__proto__.__proto__ === Object
const myInstanceof = function (obj, Obj) {
  const prototype = Obj.prototype;
  while (true) {
    if (obj === null || obj === undefined) return false;
    if (obj.__proto__ === prototype) return true;
    obj = obj.__proto__;
  }
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(myInstanceof(auto, Car));
console.log(myInstanceof(auto, Object));
// console.log(myInstanceof(Car.prototype, Object))
