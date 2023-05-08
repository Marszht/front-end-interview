const memorize = require('./memorize');
const memorizeSum = require('./test');

// 1，1，2，3，5
const fib = (n) => {
  if ( n <= 2 ) return 1;
  return fib(n-1) + fib(n-2);
}

let a = memorize(fib);
a(3)
a(3)

memorizeSum();

