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

/**
 * 根据前序遍历和中序遍历的结果，得到一颗二叉树
 * 
 * 步骤： 
 * 首先进行错误预估 (如果前序和中序长度不等或者某个序列长度为0)
 * 1. 找出根的值，构建根节点
 * 2. 找出根节点在中序遍历中的索引值
 * 3. 找出左节点的前序遍历和中序遍历 递归getTree
 * 4. 找出右节点的前序遍历和中序遍历 递归getTree
 * 5. 最终根节点的left等于步骤3的结果
 * 6. 最终根节点的right等于步骤4的结果
 *
 * @param {*} dlr 前序遍历
 * @param {*} ldr 中序遍历
 */
function getTree(dlr, ldr) {

    dlr = dlr.split("");
    ldr = ldr.split("");
    if (dlr.length !== ldr.length) throw new Error('无效的数据');
    if (dlr.length === 0) return null;

    var rootValue = dlr[0]; // 找出根节点的值
    var root = new Node(rootValue); // 构建根节点

    var rootIndex = ldr.indexOf(rootValue); // 找出根节点在中序遍历中的索引
    // 分割出左节点的前序遍历和中序遍历
    var leftLdr = ldr.slice(0, rootIndex).join(""); // 左边节点的中序遍历
    var leftDlr = dlr.slice(1, leftLdr.length + 1).join(""); // 左节点的前序遍历
    root.left = getTree(leftDlr, leftLdr);
 
    var rightLdr = ldr.slice(rootIndex + 1).join(""); // 右节点的中序遍历
    var rightDlr = dlr.slice(leftLdr.length + 1).join(""); // 右节点的前序遍历
    root.right = getTree(rightDlr, rightLdr);

    return root; // 返回根节点
}

var root = getTree('abcdef', 'cbdafe');
console.log(root);

/**
 * 得到一棵树的深度
 * 思路：
 * 一棵树的深度等于左右节点的深度最大值加1
 * @param {*} root
 */
function getDeep(root) {
    if(!root) return 0;
    return Math.max(getDeep(root.left), getDeep(root.right)) + 1;
}

console.log(getDeep(root));

