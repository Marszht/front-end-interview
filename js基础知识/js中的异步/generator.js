{
  function* helloWorldGenerator() {
    yield setTimeout(() => {
      console.log('hello');
    }, 3000);
    console.log('i print after 3000');
    // yield 'world';
    return 'ending';
  }
  // 返回了一个遍历器对象，遍历器对象，内部会调用[Symbol.iterator] 内置属性，然后返回一个具有next 方法的对象
  var hw = helloWorldGenerator();
  // console.log(hw.next());
  // console.log(hw.next());
  // console.log(hw.next());
  // for(let value of hw) {
  //   console.log(value)
  // }
}

{
  function* f() {
    // console.log('执行了！');
  }

  var generator = f();

  setTimeout(function () {
    generator.next();
  }, 2000);
}

{
  function wrapper(generatorFunction) {
    return function (...args) {
      let generatorObject = generatorFunction(...args);
      generatorObject.next();
      return generatorObject;
    };
  }

  const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
  });

  // wrapped().next('hello!');
}

{
  function* g() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
  }

  function log(generator) {
    var v;
    console.log('starting generator');
    try {
      v = generator.next();
      console.log('第一次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第二次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第三次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    console.log('caller done');
  }

  // log(g());

  // starting generator => 第一次运行next方法', 1 => throwing an exception => generator broke! =>
}

{
  var g = function* () {
    while (true) {
      try {
        yield;
      } catch (e) {
        console.log('catch', e);
        if (e != 'a') throw e;
        console.log('内部捕获', e);
      }
    }
  };

  var i = g();
  i.next();

  // try {
  //   i.throw("c");
  //   throw new Error('b');
  // } catch (e) {
  //   console.log('外部捕获', e);
  // }
}

{
  // function* gen() {
  //   try {
  //     yield 1;
  //   } catch (e) {
  //     console.log('内部捕获');
  //   }
  // }
  // var g = gen();
  // try {
  //   g.throw(1);
  // } catch (error) {
  //   console.log("error", error);
  // }
}

{
  var gen = function* gen() {
    try {
      yield 1;
    } catch (e) {
      yield 2;
    }
    yield 3;
  };

  var g = gen();
  // console.log(g.next()); // { value:1, done:false }
  // console.log(g.throw()); // { value:2, done:false }
  // console.log(g.next()); // { value:3, done:false }
  // console.log(g.next()); // // { value:undefined, done:true }
}

{
  // function* foo() {
  //   var x = yield 3;
  //   var y = x.toUpperCase();
  //   yield y;
  // }
  // var it = foo();
  // it.next(); // { value:3, done:false }
  // try {
  //   it.next(42);
  // } catch (err) {
  //   console.log(err);
  // }
}

// 试一下 Gererator 函数的异步操作
{
  function* foo() {
    let res = yield setTimeout(() => {
      return 2;
    }, 2000);
    console.log({ res });
    if (res >= 2) {
      console.log(res);
    }
  }
  // let f = foo();
  // console.log(f.next())
  // console.log(f.next())
}

{
  let read = (function* () {
    yield 'hello';
    yield* 'hello';
  })();

  // console.log(read.next().value)
  // console.log(read.next().value)
}

{
  function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
  }
  function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
  }

  console.log(logReturned(genFuncWithReturn()).next());
  let resu = [...logReturned(genFuncWithReturn())]; // 解构会遍历返回的遍历器对象。
  console.log(resu);
}

{
  //
  let ticking = true;
  let clock = function () {
    if (ticking) console.log('Tick!');
    else console.log('Tock!');
    ticking = !ticking;
  };

  const clockYield = function* () {
    while (true) {
      console.log('Tick!');
      yield;
      console.log('Tock!');
      yield;
    }
  }
  clock();
  clock();
  clock();
  let yielClock = clockYield();
  yielClock.next()
  yielClock.next()
  console.log(yielClock.next())
  
}
