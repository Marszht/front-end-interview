
function SuperType() {
  this.superProperty = false;
}
SuperType.prototype.getProperty = function() {
  return this.superProperty;
};

function SubType() {
  this.subProperty = true
};
// SubType 的原型链指向 SuperType的 实例对象
SubType.prototype = new SuperType();

SubType.prototype.getSubProperty = function() {
  return this.subProperty;
};


// 
