// 创建一个对象

// 1. 工厂模式
function creatPerson(name, age) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sayHi = function () {
    return `Hi, ${name}`
  }
  return obj; 
}
let personFactory1 = creatPerson("mars", 12);
let personFactory2 = creatPerson("zht", 19);

// 缺点：没有办法标识对象类型

// 2. 构造函数模式

function Person (name, age){

}