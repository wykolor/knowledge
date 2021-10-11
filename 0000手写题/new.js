
/**
 *  手写new的实现
 *  1.创建对象
 *  2.构建新对象的原型
 *  3.绑定this到新对象
 *  4.返回值判断：如果构造方法执行之后返回的是对象，则返回构造函数的返回值，否则返回创建的新对象
 *
 * @param {*} _constructor 函数
 * @param {*} args 函数参数
 * @return {*} 
 */
function new_oprater(_constructor, ...args) {
  // 创建新对象并将新对象的原型挂载到构造函数的原型上去
  let obj = Object.create(_constructor.prototype);

  // 执行构造函数，并将this绑定到新对象上去，并返回结果
  let res = _constructor.apply(obj, args);
  
  // 判断返回值
  return res instanceof Object ? res : obj;

}

function new_fn(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, args);
  return res instanceof Object ? res: obj
}