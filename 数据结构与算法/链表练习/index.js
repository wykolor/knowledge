/*
 * @Author: kolor 王艳
 * @Date: 2019-11-22 09:10:29
 * @LastEditTime: 2019-11-28 14:56:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DHAPPd:\knowledge\数据结构与算法\1121\index.js
 */
/**
 * 手写链表结构，并实现以下功能：
 *      1. 遍历打印
 *      2. 获取链表的长度
 *      3. 通过下标获取链表中的某个数据
 *      4. 通过下标设置链表中的某个数据
 *      5. 在链表某一个节点之后加入一个新节点
 *      6. 在链表末尾加入一个新节点
 *      7. 删除一个链表节点
 *      8. 链表倒序
 * */

/**
 * 构造一个创建链表节点的工厂函数
 * @param value  节点的值
 * */

function Node(value) {
  if (this instanceof Node) {
    this.value = value;
    this.next = null;
  } else {
    return new Node(value);
  }
}
/**
 * 实例化三个节点，并串联成一个链表
 * */

var node1 = new Node("node1");
var node2 = new Node("node2");
var node3 = new Node("node3");
node1.next = node2;
node2.next = node3;

/**
 * 给到一个链表 打印出它的所有值
 * @param root 根节点
 * */

function print(root) {
  // 如果传入的节点为空 就退出
  if (!root) return;
  console.log(root.value);
  print(root.next);
}
print(node1);

/**
 * 获取链表的长度
 * @param root 根节点
 * */

function nodeLen(root) {
  // 如果没有节点 长度为0
  if (!root) return 0;
  // 有节点的情况下 长度至少为1 计算了自己的长度之后依次去计算她的下一个节点
  return 1 + nodeLen(root.next);
}
console.log(nodeLen(node1));

/**
 * 根据下标获取链表中的某个数据
 * @param root 链表
 * @param index 链表下标
 */
function getValue(root, index) {
  /**
   * @param {*} node 表示某个节点
   * @param {*} i 该节点是第几个节点
   * */

  function _getValue(node, i) {
    //   如果节点为空 返回空值
    if (!node) return null;
    //   如果传入的节点为一个 直接返回节点的值
    if (!node.next) return node.value;
    if (i == index) {
      return node.value;
    } else {
      return _getValue(node.next, i + 1);
    }
  }
  return _getValue(root, 0);
}

/**
 * 根据下标设置某个链表的中的数据
 * @param root 根节点
 * @param index 下标
 * @param newValue 设置的新值
 * */

function setValue(root, index, newValue) {
  function _setValue(node, i) {
    //   如果节点为空 返回空值
    if (!node) return null;
    //   如果传入的节点为一个 直接返回节点的值
    if (!node.next) node.value = newValue;
    if (i == index) {
      node.value = newValue;
    } else {
      _setValue(node.next, i + 1);
    }
  }
  _setValue(root, 0);
}
// setValue(node1, 0, "我是node1更改后的值啊啊");
// print(node1);

/**
 * 在链表的某一个节点后面插入一个新的节点
 * @param node 在该节点后面插入
 * @param newNodeValue 新节点的内容
 * */

function insertAfter(node, newNodeValue) {
  // 创建一个新的节点
  var newNode = new Node(newNodeValue);
  // 新节点的地址指向它上一个节点的地址指向
  newNode.next = node.next;
  // 它上一个节点的地址指向指向新节点
  node.next = newNode;
}
// insertAfter(node2, "我是插入的node");
// insertAfter(node3, "我还是");
// insertAfter(node1, "我ye是");
// print(node1);

function push(root, newNodeValue) {
  // 如果节点为空
  if (!root) return;
  // 如果传入发已经是最后一个节点 也就是该链表只有一个节点的时候
  if (!root.next) {
    // 创建一个新的节点
    var newNode = new Node(newNodeValue);
    root.next = newNode;
  } else {
    // 否则继续向下寻址最后一个节点
    push(root.next, newNodeValue);
  }
}
// push(node2, "我是插入最后的节点");
// print(node1);

/**
 * 删除一个链表的节点
 * @param root 根节点
 * @param nodeValue 传入需删除节点的内容
 * */
function deleteNode(root, nodeValue) {
  if (!root || root.next) return null;
  if (root.next.value == nodeValue) {
    root.next = root.next.next;
  } else {
    deleteNode(node.next, nodeValue);
  }
}
