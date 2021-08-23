class PersonType {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this, this.name);
  }
}

const person = new PersonType('周杰伦');
person.sayName() 

console.log(person instanceof PersonType);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

console.log(person instanceof Object);

console.log(typeof PersonType);
console.log(PersonType.prototype);

// const person1 = new PersonType('王嘉尔');
// const sayName = person1.sayName
// sayName() // 报错 this是undefined

// class 的polyfill

let PersonClass = (function(){
  "use strict";
  const PersonClass = function(name) {
    if (typeof new.target === 'undefined') {
      throw new Error("必须通过关键字new调用构造函数")
    }
    this.name = name
  }

  Object.defineProperty(PersonClass.prototype, 'sayName', {
    value: function() {
      if (typeof new.target === 'undefined') {
        throw new Error("必须通过关键字new调用构造函数")
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  return PersonClass
}())

const personClass = new PersonClass('王艳')
console.log(personClass);