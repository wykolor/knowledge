/*
 * @Author: kolor
 * @Date: 2019-11-29 14:47:31
 * @LastEditTime: 2019-11-29 15:59:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\1129目录树\index.js
 */
var data = [
  {
    name: "node1",
    children: [
      {
        name: "node1-1",
        children: [
          {
            name: "node1-1-1",
            children: [
              {
                name: "node1-1-1-1"
              },
              {
                name: "node1-1-1-2"
              }
            ]
          }
        ]
      },
      {
        name: "node1-2",
        children: [
          {
            name: "node1-2-1"
          },
          {
            name: "node1-2-2"
          }
        ]
      }
    ]
  },
  {
    name: "node2",
    children: [
      {
        name: "node2-1",
        children: [
          {
            name: "node2-1-1"
          },
          {
            name: "node2-1-2",
            children: [
              {
                name: "node2-1-2-1"
              }
            ]
          }
        ]
      },
      {
        name: "node2-2",
        children: [
          {
            name: "node2-2-1"
          },
          {
            name: "node2-2-2"
          }
        ]
      }
    ]
  },
  {
    name: "node3",
    children: [
      {
        name: "node3-1",
        children: [
          {
            name: "node3-1-1"
          }
        ]
      },
      {
        name: "node3-2",
        children: [
          {
            name: "node3-2-1"
          },
          {
            name: "node3-2-2"
          }
        ]
      }
    ]
  },
  {
    name: "node4",
    children: [
      {
        name: "node4-1",
        children: [
          {
            name: "node4-1-1"
          },
          {
            name: "node4-1-2"
          }
        ]
      },
      {
        name: "node4-2",
        children: [
          {
            name: "node4-2-1"
          },
          {
            name: "node4-2-2",
            children: [
              {
                name: "node4-2-2-1"
              },
              {
                name: "node4-2-2-2"
              },
              {
                name: "node4-2-2-3"
              },
              {
                name: "node4-2-2-4"
              }
            ]
          }
        ]
      }
    ]
  }
];

/**
 *
 * 创建目录树结构
 * @param {*} data // 目录树数据
 * @param {*} parentNode // 父级节点
 */
var demo = document.getElementById("demo");
function treeCreateDom(data, parentNode) {
  //排错 如果父节点未传入 自己创建
  if (!parentNode) {
    parentNode = document.createElement("div");
    parentNode.className = "root";
  }
  // 遍历目录树数据
  data.forEach(function(item, index) {
    // 创建子节点
    var childNode = document.createElement("div");
    childNode.innerText = item.name;
    // 把子节点添加去父节点
    parentNode.appendChild(childNode);
    // 如果目录还有子目录的话 递归上面的方法
    if (item.children && item.children.length) {
      childNode.className = "next";
      treeCreateDom(item.children, childNode);
    }
    // 给节点绑定事件
    childNode.onclick = function(e) {
      e.stopPropagation();
      // 把类名列表(类数组)转换为数组之后使用数组的方法
      var flag = Array.from(this.classList).indexOf("show") == -1;
      // var flag = this.classList.contains("show");
      if (flag) {
        this.classList.add("show");
      } else {
        this.classList.remove("show");
      }
    };
  });
  return parentNode;
}

var treeDom = treeCreateDom(data);
demo.appendChild(treeDom);
