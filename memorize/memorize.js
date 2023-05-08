function memorize (fn) {
  let cache = new Map();

  const memorized = (...args) => {
    console.log("keys",[...cache])
   let key = JSON.stringify(args);
   if (cache.has(key)) {
     return cache.get(key);
   }
   let result = fn.apply(this, args);
   cache.set(key, result);
   return result;
  }
  return memorized;
}

module.exports = memorize;