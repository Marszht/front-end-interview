// 扁平化数组
// [1, [[2, 3], 4], [5, 6]]

let arr = [1, [[2, 3], 4], [5, 6]];

// 使用 reduce 实现
const flatReduce = function (arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatReduce(cur) : cur);
  }, []);
};

let flatReduceArr = flatReduce(arr);
console.log(flatReduceArr);

// 使用 yield
const flatYield = function* (arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      yield* flatYield(arr[i]);
    }
  } else {
    yield arr;
  }
};

let flatYieldArr = [...flatYield(arr)];
console.log(flatYieldArr);

// 使用for 循环
const flatFor = function (arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatFor(arr[i])
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};
