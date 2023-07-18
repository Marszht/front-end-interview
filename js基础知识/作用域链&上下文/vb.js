// 变量对象
// virable object

var tem = "mars"

if (tem) {
  console.log(tem) // 在使用let、const 声明变量之前，变量都不可用，这个叫”暂时性死区“
  let tem = "zht"; // 其实也会被提升，
}