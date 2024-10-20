// 函数执行的时候会有一个关联的变量对象，这个变量对象决定了那些数据可以被访问，
// 这个变量对象会有一个作用域链，这个作用域链决定了各级上下文中代码在访问变量和函数时的顺序。

var location = {
  href: 'aa'
}
function buildUrl() {
  let qs = "?debug=true";
  with (location) {
    let url = href + qs;
    console.log({ url });
  }
  return url; // undefined
}

console.log(buildUrl());

// 块级作用域  块级作用域由 最近的一对 {} 界定

{
  for (var i = 0; i < 10; ++i) {}
  console.log(i);

  const a = i;
  console.log(a);

  for (let j = 0; j < 10; ++j) {}
  console.log(j);   
}

// 闭包： 关键的三个 词： 执行上下文，作用域链，活动对象 （变量对象）
// 函数调用的时候会创建一个执行上下文，并创建一个作用域链。
// 正常情况，函数执行完毕，局部活动变量会被销毁，内存中只剩全局作用域，
// 而在闭包中，在返回的函数中还有包含函数活动对象的引用，
// 执行上下文作用域链会被销毁，但是活动对象仍然保留在内存中，直到匿名函数被销毁才会被销毁。