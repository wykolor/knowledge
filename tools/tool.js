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
