/*
 * @Author: your name
 * @Date: 2019-12-11 17:40:44
 * @LastEditTime: 2019-12-11 18:05:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\1211diffDom\js\index.js
 */

let virtualDom = createElement("ul", { class: "list" }, [
  createElement("li", { class: "list-item" }, ["a"]),
  createElement("li", { class: "list-item" }, ["b"]),
  createElement("li", { class: "list-item" }, ["c"])
]);
let el = render(virtualDom);
console.log(virtualDom);
console.log(el);
