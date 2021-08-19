{
  let obj = {
      time: '2020--01-07',
      name: 'kolor'
  }
  let objProxy = new Proxy(obj, {
      get(target, key) {
          return target[key].replace('2020', '2021')
      },
      set(target, key, value) {
          console.log('设置了值', key, value)
      },
      has(target, key) {
          if(key === 'name') {
              return target[key]
          } else {
              return false;
          }
      },
      deleteProperty(tayget, key) {
          if (key === 'name') {
              delete tayget[key];
              return true;
          } else {
              return tayget[key];
          }
      }

  })

  console.log(objProxy.name)
  console.log('name' in objProxy, 'time' in objProxy);
  console.log(objProxy);
}

{
 let obj = {
     name: 'wangan',
     age: 18
 }
 console.log(Reflect.get(obj, 'name'));
 Reflect.set(obj, 'name', 'kolor wangyan');
 console.log(Reflect.get(obj, 'name'));
 console.log(Reflect.has(obj, 'age'));
}

{
  function validator(target, validator) {
      return new Proxy(target, {
          _validator: validator,
          set(target, key, value, proxy) {
              if(target.hasOwnProperty(key)) {
                  let va = this._validator[key];
                  if(!!va(value)) {
                      return Reflect.set(target, key, value, proxy);
                  } else {
                      throw Error(`不能设置${value}到${key}上`)
                  }
              } else {
                  throw Error(`${key} 不存在`);
              }
          }
      })
  }

  let validatorRules = {
      name(value) {
          return typeof value === "string";
      },
      age(value) {
          return typeof value === "number" && value > 18;
      }
  }

  class Person {
      constructor(name, age) {
          this.name = name;
          this.age = age;
          return validator(this, validatorRules)
      }
  }

  const person = new Person('wangyan', 19);
  console.log(person);
  person.name = 'wangchenyu';
  console.log(person);

}