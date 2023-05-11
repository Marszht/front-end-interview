# 原型链

## 对象

### 创建一个对象

1. 工厂模式

```js
  function creatPerson(name, age) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayHi = function () {
      return `Hi, ${name}`;
    };
    return obj;
  }
  let personFactory1 = creatPerson('mars', 12);
  let personFactory2 = creatPerson('zht', 19);
```
缺点：不能标识 实例对象的类型，也就是 personFactory1， personFactory2 不能通过

### 访问

### 遍历

### 其他一些知识点

1. instanceof
2. typeof
3.

## 继承

## 类
