export function multiply(a, ...rest) {
  // 使用 reduce 更好
  return rest.reduce((acc, cur) => acc * cur, a);
}



// 如果使用递归，需要考虑
// 1. 退出条件
// 2， 递归内容

 function multiplyEleByRecursive(arr, index = 0) {
   if (index === arr.length) return 1;

   return arr[index] * multiplyEleByRecursive(arr, index+1)
 }

 let result = multiplyEleByRecursive([1,2,3]);
 console.log(result)