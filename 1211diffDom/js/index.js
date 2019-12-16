/*
 * @Author: your name
 * @Date: 2019-12-11 17:40:44
 * @LastEditTime: 2019-12-12 10:23:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\1211diffDom\js\index.js
 */

let virtualDom = createElement(
  "ul",
  { class: "list", style: "color:red;font-size:16px;" },
  [
    createElement("li", { class: "list-item" }, ["a"]),
    createElement("li", { class: "list-item" }, ["b"]),
    createElement("li", { class: "list-item" }, ["c"])
  ]
);
let el = render(virtualDom);
renderDom(el, window.app);
console.log(virtualDom);
console.log(el);
