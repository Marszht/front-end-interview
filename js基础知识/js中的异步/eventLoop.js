{
  // console.log(1)

  // setTimeout(() => {
  //   console.log(2)
  // }, 0)

  // new Promise((resolve, reject) => {
  //   console.log('new Promise')
  //   resolve()
  // }).then(() => {
  //   console.log('then')
  // })

  // console.log(3)
}

{
  console.log(1)

  setTimeout(() => {
    console.log(2)
  }, 0)

  async function fun() {
    console.log('4');
    return '5'
  }
  let a = fun()
  a.then(res => {
    console.log(res);
  })
  new Promise((resolve, reject) => {
    console.log('new Promise')
    resolve()
  }).then(() => {
    console.log('then')
  }).then(() => {
    console.log('then2');

  })

  console.log(3)
}

{
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  async function async2() {
    console.log('async2')
  }
  console.log('script start')
  setTimeout(function () {
    console.log('settimeout')
  })
  async1()
  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function () {
    console.log('promise2')
  })
  console.log('script end')
}

// script start    async1 start   async2   promise1  script end    async1 end  promise2  settimeout


{

  function getName(name) {
    console.log(2);
    return new Promise((resolve) => {
      console.log('3');
      resolve(`hello, ${name}`)
    })
  }
  // async await
  async function fun(params) {
    console.log(1);
    let res = await getName('mars')
    console.log(res);
  }

  fun().then(res => {
    console.log(res);
  })
}

{
  setTimeout(function () {
    console.log('定时器开始啦')
  });

  new Promise(function (resolve) {
    console.log('马上执行for循环啦');
    for (var i = 0; i < 10000; i++) {
      i == 99 && resolve();
    }
  }).then(function () {
    console.log('执行then函数啦')
  });

  console.log('代码执行结束');
}

// 马上执行for循环啦 => 代码执行结束 => 执行then函数啦 => 定时器开始啦

{
  console.log('1');

  setTimeout(function () {
    console.log('2');
    process.nextTick(function () {
      console.log('3');
    })
    new Promise(function (resolve) {
      console.log('4');
      resolve();
    }).then(function () {
      console.log('5')
    })
  }, 1000)
  process.nextTick(function () {
    console.log('6');
  })
  new Promise(function (resolve) {                                         //  1  7 6 8 2  4 3 5 9 11 10 12
    console.log('7');
    resolve();
  }).then(function () {
    console.log('8')
  })

  setTimeout(function () {
    console.log('9');
    process.nextTick(function () {
      console.log('10');
    })
    new Promise(function (resolve) {
      console.log('11');
      resolve();
    }).then(function () {
      console.log('12')
    })
  })
}