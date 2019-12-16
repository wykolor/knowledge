/*
 * @Author: your name
 * @Date: 2019-12-11 17:41:56
 * @LastEditTime: 2019-12-12 11:22:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\1211diffDom\js\element.js
 */

/**
 * 实例化对象的工厂类
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
 * 创建元素对象
 *
 * @param {*} type 元素类型
 * @param {*} props 元素属性
 * @param {*} children 该元素的子节点
 * @returns
 */
function createElement(type, props, children) {
  return new Element(type, props, children);
}

/**
 * 设置节点属性
 *
 * @param {*} node 操作节点对象
 * @param {*} key 属性名
 * @param {*} value 属性值
 */
function setAttr(node, key, value) {
  switch (key) {
    case "value":
      if (
        node.tagName.toUpperCase() === "INPUT" ||
        node.tagName.toUpperCase() === "TEXTAREA"
      ) {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case "style":
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
  node.setAttribute(key, value);
}

/**
 * 创建虚拟DOM
 *
 * @param {*} eleObj // 虚拟DOM对象
 */
function render(eleObj) {
  let el = document.createElement(eleObj.type);
  for (let key in eleObj.props) {
    setAttr(el, key, eleObj.props[key]);
  }
  eleObj.children.forEach(child => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });

  return el;
}

/**
 *渲染真实DOM
 *
 * @param {*} el 要渲染的节点对象
 * @param {*} target 渲染操作数
 */
function renderDom(el, target) {
  target.appendChild(el);
}
