function PersonType(name) {
  this.name = name
}

PersonType.prototype.sayName = function() {
  console.log(this, this.name);
}

var person = new PersonType('王艳');

person.sayName()

console.log(person instanceof PersonType);

// 存在原型继承的特性，所以也是Object的实例
console.log(person instanceof Object);

// var sayName = person.sayName
// sayName()