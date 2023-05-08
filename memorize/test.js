const memorize = require('./memorize');

function sum (a, b) {
  return a + b;
}

const memorizeSum = memorize(sum);

memorizeSum(1,2);
memorizeSum(1,2);
module.exports = memorizeSum;
