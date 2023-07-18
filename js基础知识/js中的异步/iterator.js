{
  let arr = [1, 2, 3];
  let iteratorArr = arr[Symbol.iterator]();
  iteratorArr.next();
  // console.log(iteratorArr.next());
}

// { Array,NodeList, arguementArray, Set, Map, string, }
{
  const obj = {
    data: [1, 2, 3],
    index: 0,
    [Symbol.iterator]: function () {
      const self = this;
      let index = 0;
      return {
        next: function () {
          if (index < self.data.length) {
            return {
              value: self[index++],
              down: false,
            };
          } else {
            return {
              value: self[index++],
              down: false,
            };
          }
        },
      };
    },
  };
}

{
  let argumentArr = {
    length: 2,
    0: '1',
    1: '2',
    2: '3',
    [Symbol.iterator]: function () {
      let index = 0;
      let self = this;
      return {
        next: function () {
          if (index < self.length) {
            index++;
            return {
              value: 1, // self[index++]
              done: false,
            };
          } else {
            return {
              value: undefined,
              done: true,
            };
          }
        },
        return() {
          console.log('work??');
          return { done: true, value: 3 }; // 提前终止会调用 return 方法，但是没有改变value；
        },
      };
    },
  };
  for (let value of argumentArr) {
    if (value === '2') {
      console.log(value)
      break
    };
    console.log('value', value);
  }
}
