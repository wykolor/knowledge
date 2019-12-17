/**
 *
 * 删除某个元素的所有子节点
 * @param {*} el 父节点
 */
function removeAllChild(el) {
  var childNodes = el.childNodes,
    length = childNodes.length;
  for (var i = length - 1; i >= 0; i--) {
    el.removeChild(childNodes[i]);
  }
}
