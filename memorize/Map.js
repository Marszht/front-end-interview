// 传统对象只能用字符串当作key
let a = {};
let b = {};
b[a] = "mars";
console.log(b) // {[object Object]: "mars"}

// Map
let map = new Map();
let k1 = 1;
let k2 = "1";
let k3 = {name: "mars"};
map.set(k1, 1);
map.set(k2, 2);
map.set(k3, k3); // 返回Map
// console.log(map);
let keysarr = map.keys();
console.log(keysarr)
for (const key in keysarr) {
  console.log(key)
};


// Map 转 数组
// ... 扩展运算符
const maparr = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
let keys = maparr.keys();
console.log(...maparr);

maparr.forEach((value, key, map) => console.log(key));

// 数组转化为 Map
new Map([
  [1, 'one'],
  [{a: "mars"}, "two"],
])

//  Map 转化为对象


