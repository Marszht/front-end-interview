{
  //
  function* sleep() {
    let res = yield setTimeout(() => {
      console.log('after 2s');
    }, 2000);
    console.log(res);
    return 2;
  }
  let sleepTimeout = sleep();

  // let value = sleepTimeout.next();
  // let va2 = sleepTimeout.next()
  // console.log(value.value, va2);
}

{
  // node 规定 callback 第一个参数必须是err，因为异步第一阶段结束后上下文环境已经不见了，
  // 如果第一阶段发生错误，需要通过参数传递给下一个阶段。
}

{
  function* gen(x) {
    try {
      var y = yield x + 2;
      console.log(y);
    } catch (e) {
      console.log(e);
    }
    return y;
  }

  var g = gen(1);
  // console.log(g.next());
  // console.log(g.next());
  // g.throw('出错了');
}

{
  // Thunk 函数转换器
  // var Thunk = function (fn) {
  //   return function () {
  //     var args = Array.prototype.slice.call(arguments); //
  //     return function (callback) {
  //       args.push(callback);
  //       return fn.apply(this, args);
  //     };
  //   };
  // };

  const Thunk = function (fn) {
    return function (...args) {
      return function (callback) {
        return fn.call(this, ...args, callback);
      };
    };
  };

  function f(a, cb) {
    cb(a);
  }
  const ft = Thunk(f);

  // ft(1)(console.log);
}

{
  const fs = require('fs');
  function thunkify(fn) {
    return function () {
      var args = new Array(arguments.length);
      var ctx = this;

      for (var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
      }

      return function (done) {
        var called;

        args.push(function () {
          if (called) return;
          called = true;
          done.apply(null, arguments);
        });

        try {
          fn.apply(ctx, args);
        } catch (err) {
          done(err);
        }
      };
    };
  }

  // function f(a, b, callback) {
  //   var sum = a + b;
  //   callback(sum);
  //   callback(sum);
  // }

  // var ft = thunkify(f); // 改成一个单函数参数的函数
  // var print = console.log.bind(console);
  // ft(1, 2)(print);

  var readFileThunk = thunkify(fs.readFile); // 返回一个函数

  var gen = function* () {
    var r1 = yield readFileThunk('/etc/fstab');
    console.log(r1.toString());
    var r2 = yield readFileThunk('/etc/shells');
    console.log(r2.toString());
  };

  var g = gen();
  var r1 = g.next();
  r1.value(function (err, data) {
    if (err) throw err;
    // 这个时候可以把控制权重新交给 generator函数，而且这个时候 callback 已经执行完了
    var r2 = g.next(data);
    r2.value(function (err, data) {
      if (err) throw err;
      g.next(data);
    });
  });
}
