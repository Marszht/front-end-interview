
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log("es",sum);
setTimeout(function() {
  console.log("first")
}, 2000)