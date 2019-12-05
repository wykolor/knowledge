/**
 * 收集工具方法
 * 2019-11-26 @By WYkolor
 * */

/**
 * 区分操作数的类型
 * @param target 操作数
 * */

function type(target) {
  var template = {
    "[object Object]": "object",
    "[object Array]": "array",
    "[object Boolean]": "boolean-object",
    "[object String]": "string-object",
    "[object Number]": "number-object"
  };
  if (target == null) {
    return "null";
  }
  if (typeof target == "object") {
    var str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return typeof target;
  }
}
/**
 * @param elem 操作DOM元素
 * @param type 事件类型
 * @param handle 事件处理程序
 * */
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) {
    // 兼容IE9以下
    elem.attachEvent('on' + type, function () {
      handle.call(elem); //默认该事件内部的this执行的是window,这里改变事件处理函数的this指向
    })
  } else {
    elem['on' + type] = handle
  }
}