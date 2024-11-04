//
// function debounce(wait, fun) {
//   let context, timeout, args;
//   return function () {
//     context = this;
//     clearTimeout(timeout);
//     args = arguments;
//     timeout = setTimeout(function () {
//       fun.apply(context, args);
//     }, wait);
//   };
// }

// function debounce(wait, fun, immediate = false) {
//   let context,
//     timeout,
//     args,
//     flag = true;
//   return function () {
//     context = this;
//     args = arguments;
//     clearTimeout(timeout);
//     if (flag) {
//       if (immediate) {
//         fun.apply(context, args);
//         flag = false;
//       }
//     } else {
//       timeout = setTimeout(function () {
//         fun.apply(context, args);
//         flag = true;
//       }, wait);
//     }
//   };
// }

// 第四版
function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}
window.debounce = debounce;
