// 跳出循环

let arr = [1, 2, 3, 4];
{
  // for
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] > 2) return; // 跳出整个循环
    // if (i === 2) break; // 跳出整个循环
    // if (i === 2) continue; // 跳出当前循环
    // console.log('for', arr[i])
  }
  function test() {
    for (let i = 0; i < arr.length; i++) {
      // if (i >=2) return; // 跳出这个方法了
      if (i === 2) break; // 跳出这个方法了
      // if (arr[i] === 2) continue; // 跳出本次循环
      console.log('for', arr[i]);
    }
    return 2;
  }
  // let res = test();
  // console.log("jump", res)
}
// forEach
{
  arr.forEach(function (item) {
    // if (item === 2) return; // 跳出本次循环
    // if (item === 2) break; // Illegal break statement
    // if (item === 2) continue; // Illegal continue statement
    // console.log('forEach', item);
  });
  // console.log("jump")
  // function test() {
  //   arr.forEach(function (item) {
  //     if (item === 2) return;
  //     // if (item === 2) break;
  //     console.log('forEach fun', item);
  //   });
  //   return 2
  // }
  // let res = test();
  // console.log('first', res);
}
// for..in..
{
  for (let item in arr) {
    // if (item === '2') return;  // 退出整个循环，中断循环外的程序
    if (item === '2') break; // 跳出整个循环，不会中断后面程序
    // if (item === '2') continue; // 跳出当前循环，不会中断后面程序
    // console.log('for...in..', arr[item]); 
  }
  // console.log('for...in');
}
// for...of

{
  for (const item of arr) {
    // if (item === 2) return; // 跳出整个循环，中断循环外的程序
    // if (item === 2) break; // 跳出整个循环，不中断循环外的程序
    // if (item === 2) continue; // 跳出本次循环，不中断循环外的程序
    // console.log('for...of', item);
  }
  // console.log('for...of');
}
// map

{
  arr.map(function (item) {
    // if (item === 2) return; // 跳出当前循环，不中断循环外的程序
    // if (item === 2) break; // Illegal break statement
    // if (item === 2) continue; // Illegal continue statement˝
    // console.log('map', item);
  });
  // console.log('map');
}
// filter
{
  arr.filter(item => {
    if (item === 2) return; // 跳出本次循环，不中断循环外的程序
    // if (item === 2) break; // Illegal break statement
    // if (item === 2) continue; // Illegal continue statement
    // console.log('filter', item);
  });
  // let res = arr.filter(Boolean) // [1, "" . 0, 3] => [1.3]
  // console.log(res)
  // console.log('filter');
}

// some 只要有一个符合就会提前退出循环。
{
  let res = arr.some(function (item) {
    if (item >= 9) return true; // 跳整个前循环，不中断循环外的程序
    // if (item === 2) return false; // 跳整个前循环，不中断循环外的程序
    // if (item === 2)  continue; // Illegal continue statement
    // if (item === 2)  break; // Illegal break statement
    // console.log('some', item);
  });
  // console.log('some', res);
}

// every 能不能退出需要看 循环的条件，默认是全部遍历，跟some 一样 
{
  let res = arr.every(item => {
    console.log("every", item);
    if (item >= 1) return true;
  })
  console.log("every", res);
}

