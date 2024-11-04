exports.done = false;
var b = require('./b.js');
console.log(b.done);
console.log('在 a.js 之中，b.done = %j', b.done);
exports.done = true;
console.log('a.js 执行完毕');

// 在 b.js 之中，a.done = false
// b.js 执行完毕
// true
// 在 a.js 之中，b.done = true
// a.js 执行完毕