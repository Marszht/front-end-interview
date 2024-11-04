exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');

function add(a, b, rest) {
  console.log({ ...rest });
  let dd = { d: 3, ...rest }
  console.log(dd);
  return a + b
}

add(1, 2, { a: 3, c: 3 })

async function callAndroidFunction(key, jsonParams) {
  async function add(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data || '1');
      }, 4000);
    });
  }
  return add(jsonParams);
}

async function callNativeJSBridge(key, { flag, ...rest }) {
  let jsonParams = JSON.stringify(rest);
  if (flag === 'set') {
    return callAndroidFunction(jsonParams); // 这里也进行了调整，以确保它返回一个Promise
  } else {
    let response = await callAndroidFunction(); // 这里没有问题，因为callAndroidFunction现在返回一个Promise
    return JSON.parse(response);
  }
}

async function test() {
  let res = await callNativeJSBridge('add', { flag: 'get', name: 'mars'}); // 使用await等待结果，然后打印出来
  console.log("res:", res); // 使用await获取到的结果会在这里打印出来
}

test()


async function a(name) {
  if (name === 'mars') {
    console.log("object");
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(222)
      }, 2000)
    })
  }
}

async  function aa(parms) {
  let res = '';
  if (parms === 22) {
    res = await a()
  } else {
    res = '333'
  }
  return res
}

async function cc() {
  let cc = await aa(22)
  console.log(cc);
}
cc()