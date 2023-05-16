{
  // function SuperType() {
  //   this.superProperty = false;
  // }
  // SuperType.prototype.getProperty = function () {
  //   return this.superProperty;
  // };

  // function SubType() {
  //   this.subProperty = true;
  // }
  // // SubType 的原型链指向 SuperType的 实例对象
  // SubType.prototype = new SuperType();

  // SubType.prototype.getSubProperty = function () {
  //   return this.subProperty;
  // };

  // let subTypeInstance = new SubType();

  // console.log(subTypeInstance.getProperty());
  // console.log(subTypeInstance.superProperty);
  // console.log(subTypeInstance.subProperty);
}

//

{
  function SuperType(property) {
    this.superProperty = property;
  }
  SuperType.prototype.getProperty = function () {
    return this.superProperty;
  };
  
  function SubType() {
    SuperType.call(this, true);

    this.subProperty = true;
  }
  SubType.prototype.getSubProperty = function () {
    return this.subProperty;
  };
  
  let subTypeInstance = new SubType();
  // console.log(subTypeInstance.getProperty());
  console.log(subTypeInstance instanceof  SubType); // true 
  console.log(subTypeInstance instanceof  Object); // true
  console.log(subTypeInstance instanceof  SuperType); // false
  console.log(subTypeInstance.superProperty);
  // console.log(subTypeInstance.subProperty);
}
