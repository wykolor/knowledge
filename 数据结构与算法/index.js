function Node(value) {
  this.value = value;
  this.next = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");

a.next = b;
b.next = c;

function print(root) {
  // while (root) {
  //   console.log(root.value);
  //   root = root.next;
  // }

  if (!root) return null;
  console.log(root.value);
  print(root.next);
}

function nodeLength(node) {
  if (!node) {
    return 0;
  } else {
    return 1 + nodeLength(node.next);
  }
}

function getValues(node, index) {
  function _getValues(root, i) {
    if (!root) return null;
    if (!root.next) return root.value;
    if (i == index) {
      return root.value;
    } else {
      return _getValues(root.next, i + 1);
    }
  }
  return _getValues(node, 0);
}

// console.log(getValues(a, 0));

function setValues(node, index, newValue) {
  function _setValues(root, i) {
    if (!root) return null;
    if (!root.next) {
      root.value = newValue;
    }
    if (i === index) {
      root.value = newValue;
    } else {
      _setValues(root.next, i + 1);
    }
  }
  return _setValues(node, 0);
}

function insertAfter(node, newNodeValue) {
  var newNode = new Node(newNodeValue);
  newNode.next = node.next;
  node.next = newNode;
}

function push(node, newNodeValue) {
  if (!node) return;
  if (!node.next) {
    var newNode = new Node(newNodeValue);
    node.next = newNode;
  } else {
    push(node.next, newNodeValue);
  }
}

function removeNode(node, nodeValue) {
  if (!node || !node.next) return null;
  if (node.next.value === nodeValue) {
    node.next = node.next.next;
  } else {
    removeNode(node.next, nodeValue);
  }
}

function removeNodeIndex(node, index) {
  function _removeNodeIndex(root, i) {
    if (!root || !root.next) return null;
    if (i === index) {
      root.next = root.next.next;
    } else {
      _removeNodeIndex(root.next, i + 1);
    }
  }
  return _removeNodeIndex(node, 0);
}
removeNodeIndex(c, 3);
print(a);
console.log(a);
