// 使用promise 写一个 睡眠函数

{
  // function sleep(time) {
  //   return new Promise(function (resolve, reject) {
  //     console.log("consoel right now")
  //     setTimeout(() => {
  //       resolve(1);
  //     }, time);
  //   });
  // }
  // sleep(3000).then(() => {
  //   console.log("sleep: 3000" )
  // })
}

{
  // const p1 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve(2), 1000);
  // });
  // const p2 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve(p1), 1000);
  // });
  // p2.then(result => console.log(result)).catch(error => console.log(error));
}

{
  // let p1 = new Promise(function (resolve, reject) {
  //   reject(1);
  // });
  // p1.then(res => {
  //   console.log('then 1', res);
  //   return res;
  // })
  //   .then(res => {
  //     console.log('then 2', res);
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //     throw new Error('3');
  //   })
  //   .then(res => {
  //     console.log('then 3', res);
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //   });
}

{
  // const someAsyncThing = function () {
  //   return new Promise(function (resolve, reject) {
  //     // 下面一行会报错，因为x没有声明
  //     resolve(x + 2);
  //   });
  // };
  // someAsyncThing().then(function () {
  //   console.log('everything is great');
  // });
  // setTimeout(() => {
  //   console.log(123);
  // }, 2000);
  // Uncaught (in promise) ReferenceError: x is no
}

// Promise.resolve() 包裹成一个promise 对象，可以用来处理 当一个对象不是promise的情况

// Promise。prototype.catch()

// Promise.prototype.then

// Promise.prototype.finally() 可以用来处理

// Promise.all 可以用来包装多个请求 都被resolved的情况，catch中的的情况也执行放到resolved

{
  // let thenable = {
  //   then: function (resolve, reject) {
  //     resolve(42);
  //   },
  // };
  // let p1 = Promise.resolve(thenable);
  // console.log(p1);
  // // p1.then(function (value) {
  // //   console.log(value); // 42
  // // });
}

{
  // setTimeout(function () {
  //   console.log('three');
  // }, 0);
  // let p1 = new Promise((resolve, reject) => {
  //   console.log('p1');
  //   resolve(1);
  // });
  // p1.then(res => {
  //   console.log(res);
  //   throw new Error('err', res);
  // })
  //   .catch(err => {
  //     console.log('error', err);
  //     return 4;
  //   })
  //   .then(res => {
  //     console.log(res);
  //   });
  // Promise.resolve().then(function () {
  //   console.log('two');
  // });
  // console.log('one');
}
// p1 one 1 two err 1 three

{
  // const f = () => {
  //   console.log("1")
  //   return Promise.resolve(2)};
  // new Promise(resolve => {
  //   resolve(f());
  //   console.log('one');
  // }).then(res => {
  //   console.log(res);
  // });
  // console.log('next');
  // now one next
}

{
  // Promise.try = function (fn) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       resolve(fn())
  //     } catch (err) {
  //       reject(err)
  //     }
  //   })
  // }
  // const f = () => console.log('now');
  // const f1 =  () => {
  //   console.log('f1');
  //   return x;
  //   // throw new Error("error")
  // }
  // Promise.try(f).then(res => {
  //   // console.log(res)
  // });
  // Promise.try(f1).catch(err => {
  //   console.log(err);
  // });
  // console.log('next');
}

{
  let p1 = new Promise((resolve, reject) => resolve(3));
  let p2 = Promise.resolve(2);
  let p3 = Promise.reject(3);
  let arrPromises = [p1, p2, p3];

  p1.then(res => console.log(res))

  function handlePromiseAll(arrPromises) {
    let newArrPromises = arrPromises.map(promise => {
      let resultPromise =
        typeof promise?.then === 'function'
          ? promise
          : Promise.resolve(promise);
      return resultPromise.then(
        res => {
          console.log(res)
          return { status: 'success', data: res };
        },
        err => ({ status: 'fail', data: err })
      );
    });
    return newArrPromises;
  }
  Promise.all(handlePromiseAll(arrPromises))
    .then(res => {
      console.log({ res });
    })
    .catch(err => {
      console.log({ err });
    });
}
