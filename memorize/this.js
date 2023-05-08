// 函数直接调用
function foo() {
  // 不是动态去创建的，在定义的时候就已经绑定了，global 里面没有a
  console.log(this.a); // undefined
}
var a = 1;
foo(); // 函数直接调用，指向global || window

function foo1() {
  console.log(a);
}
var a = 1;
foo1(); // 1

// 隐式调用

// new 操作符

// 强制绑定（call，bind，apply）

// 箭头函数

// 1.
function a() {
  this.name = 'mars1';
  return () => {
    this.name = 'mars2';
    return () => {
      this.name = 'mars3';
      console.log(this.name);
    };
  };
}
console.log(a()()());

// 2.
{
  const person = {
    name: 'Alice',
    sayName: () => {
      console.log(this);
      console.log(this.name);
    },
  };

  person.sayName(); // undeined
}

{
  const person = {
    name: 'Alice',
    sayName() {
      console.log(this.name);
    },
    sayNameWithArrow: () => {
      console.log(this.name);
    },
  };
  person.sayName();
  person.sayNameWithArrow();
}
{
  const person = {
    name: 'Alice',
    sayName() {
      console.log(this.name);
    },
    sayNameWithArrow: () => {
      console.log(this.name);
    },
  };
  person.sayName();
  person.sayNameWithArrow();
}

{
  const person = {
    name: 'Alice',
    sayName() {
      // this.name = "mars";
      setTimeout(() => {
        console.log(this.name);
      }, 1000);
      setTimeout(function(){
        console.log(this.name);
      }, 1000);
    },
  };
  person.sayName();
}

// 3
{
  const x = 10;
  const foo = () => {
    const x = 20;
    const bar = () => {
      console.log(x); 
    };
    bar();
  };

  foo();
}

{
  const person = {
    name: 'Alice',
    sayName() {
      console.log(this.name);
    },
    sayNameWithArrow: () => {
      console.log(this.name);
    },
  };
  person.sayName(); // 输出 'Alice'
  let outSayName = person.sayName;
  outSayName(); // undefined
  // 由于 sayNameWithArrow 是箭头函数，它的 this 绑定继承自外部词法作用域，
  // 因此这里输出 undefined，而不是 'Alice'
  person.sayNameWithArrow(); // 输出 'undefined'
  console.log(person);
}

// 面试题
const a = {
  b: 2,
  foo: function () {
    console.log(this.b);
  },
};

function b(foo) {
  // 输出什么？
  foo();
}

b(a.foo);


{
  function add(a, b) {
    return a + b;
  }
  let b = new add(1,2);
  console.log(b)
}