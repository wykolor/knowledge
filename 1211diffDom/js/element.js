/*
 * @Author: your name
 * @Date: 2019-12-11 17:41:56
 * @LastEditTime: 2019-12-11 18:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\1211diffDom\js\element.js
 */

/**
 *
 *
 * @class Element
 */
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

/**
 *
 *
 * @param {*} type
 * @param {*} props
 * @param {*} children
 * @returns
 */
function createElement(type, props, children) {
  return new Element(type, props, children);
}

/**
 *
 *
 * @param {*} node
 * @param {*} key
 * @param {*} value
 */
function setAttr(node, key, value) {
  node.setAttribute(key, value);
}

/**
 *
 *
 * @param {*} eleObj // 虚拟DOM对象
 */
function render(eleObj) {
  let el = document.createElement(eleObj.type);
  for (let key in eleObj.props) {
    setAttr(el, key, eleObj.props[key]);
  }

  return el;
}
