//  手写原型继承

//  ES5的继承
function Parent () {
  this.age = 55;
}

Parent.prototype.getName = function () {
  return 'kolor'
}

function Child () {
  Parent.call(this); // 改变父类运行时this
}

// 将子类的原型关联到父类的原型 并找回构造器constructor
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    writable: true,
    enumerable: false,
    configurable: true
  }
})

let child = new Child();

child.getName(); // kolor
console.log(child.age); // 55


// ES6

class Animal {
  constructor(type) {
    this.type = type
  }
  getType() {
    return this.type
  }
}

class Dog extends Animal {
  constructor(type, name) {
    super(type)
    this.name = name
  }
  sayWords() {
    console.log('汪汪汪');
  }
}

let dog = new Dog('狗', '咖啡')