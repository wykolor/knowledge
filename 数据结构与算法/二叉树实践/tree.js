/**
 *
 * 构建一个二叉树节点
 * @param {*} value
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.left = b;
a.right = e;
b.left = c;
b.right = d;
e.left = f;

/**
 *前序遍历
 *
 * @param {*} root
 */
function DLR(root) {
    if (!root) return;
    console.log(root.value);
    DLR(root.left);
    DLR(root.right);
}
 
/**
 *中序遍历
 *
 * @param {*} root
 */
function LDR(root) {
    if (!root) return;
    LDR(root.left);
    console.log(root.value);
    LDR(root.right);
}

/**
 *后序遍历
 *
 * @param {*} root
 */
function LRD(root) {
    if (!root) return;
    LRD(root.left);
    LRD(root.right);
    console.log(root.value);
}

LRD(a);

