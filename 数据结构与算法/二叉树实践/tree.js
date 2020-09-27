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

/**
 * 深度优先检测某个值是否在二叉树中
 *
 * @param {*} root
 * @param {*} targetValue
 */
function deepFirstSearch(root, targetValue) {
    // 如果入的节点为空
    if (!root) return false; 
    // 如果要检测的值就是根节点的值
    if (root.value === targetValue) { 
        return true 
    } else {
        // 如果根节点的值不是目标值，则依次查询根的左节点，右节点
       return deepFirstSearch(root.left, targetValue) || deepFirstSearch(root.right, targetValue);
    }
}

/**
 *
 * 广度优先检测某个值是否在二叉树中
 * @param {*} nodes 数组 某一层的所有节点
 * @param {*} targetValue
 */
function breadthFirstSearch(nodes, targetValue) {
    if (nodes.length === 0) return false; // 搜不到
    var nexts = []; // 下一层的节点
    for (var i = 0; i < nodes.length ; i++) {
        // 如果在当层中搜到
        if (nodes[i].value === targetValue) {
            return true;
        } else {
            // 否则就把节点的下一层左右节点添加进下一层节点中去
            if(nodes[i].left) {
                nexts.push(nodes[i].left)
            }
            if(nodes[i].right) {
                nexts.push(nodes[i].right)
            }
        }
    }
    // 再进行下一层的搜索
    return breadthFirstSearch(nexts, targetValue);
}

/**
 * 比较两颗树的不同
 *
 * @param {*} originRoot
 * @param {*} newRoot
 */
function diff(originRoot, newRoot) {
    var result = []; // 用于存放两棵树的不同
    // 如果两棵树都是空的
    if(!originRoot && !newRoot) {
        return [];
    } else if (!originRoot && newRoot) {
        // 如果原来树是空的，新树有数据则为新增
        result.push({
            type: '新增',
            originNode: originRoot,
            newNode: newRoot
        })
    } else if (originRoot && !newRoot) {
        // 如果原来的树有数据， 新树为空则为删除
        result.push({
            type: '删除',
            originNode: originRoot,
            newNode: newRoot
        })
    } else if (originRoot.value !== newRoot.value) {
        // 修改
        result.push({
            type: '修改',
            originNode: originRoot,
            newNode: newRoot
        })
        // 还需继续比较左右子节点
        var resultLeft = diff(originRoot.left, newRoot.left);
        var resultRight = diff(originRoot.right, newRoot.right);
        // 将后续的差异汇总到最开始的一开始的不同
        result = [...result, ...resultLeft, ...resultRight]
    } else {
        // 两个节点一样继续向后比较
        var resultLeft = diff(originRoot.left, newRoot.left);
        var resultRight = diff(originRoot.right, newRoot.right);
        // 将后续的差异汇总到最开始的一开始的不同
        result = [...result, ...resultLeft, ...resultRight]
    }
    return result;
}
// var root1 = getTree('abcd', 'cbda');
// var root2 = getTree('afkes', 'kfase');
// console.log('比较两棵树的不同', diff(root1, root2))