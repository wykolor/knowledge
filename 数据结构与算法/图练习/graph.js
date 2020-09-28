function Node(value) {
    this.value = value;
    this.neighbors = []
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

a.neighbors.push(b, c, e);
b.neighbors.push(a, c, d);
c.neighbors.push(a, b);
d.neighbors.push(b, e);
e.neighbors.push(a, d);

/**
 *
 *  图结构的深度遍历搜索
 * @param {*} node 
 * @param {*} targetValue
 * @param {*} funded 已经找过的节点
 */
function depthFirstSearch(node, targetValue, funded) {
    // 如果funded数组中已经包含了node，就代表节点已经看过了 直接返回
    if(funded.includes(node)) {
        return false;
    }
    // 如果传入的节点的值等于目标搜索值 则查询成功
    if (node.value === targetValue) return true;
    funded.push(node); // 将当前节点加入到funded
    // 否则就对下面的邻居进行深度遍历
    for (var i = 0; i < node.neighbors.length; i++) {
        const item = node.neighbors[i];
        if(depthFirstSearch(item, targetValue, funded)) {
            // 在其中一个节点的深搜过程中找到了
            return true;
        }
    }
    return false; // 所有节点的深搜过程中都没有找到值 就返回false
}

/**
 *
 *
 * @param {*} nodes 某一层的节点
 * @param {*} targetValue
 * @param {*} funded 已经找过的节点
 */
function breadthFirstSearch(nodes, targetValue, funded) {
    if (nodes.length === 0) return false; // 如果节点都不存在了就肯定找不到
    var nexts = [];
    for(var i = 0; i < nodes.length; i++) {
        if (nodes[i].value === targetValue) {
            // 如果在当前层的节点中找到了目标值
            return true;
        }
        // 如果没有找到，则把该节点添加进funded
        !funded.includes(nodes[i]) && funded.push(nodes[i]);
        // 然后过滤该节点的neighbors中没有在funded和nexts中的节点 赋值给nexts
        nexts = nexts.concat(nodes[i].neighbors.filter(item => !funded.includes(item) && !nexts.includes(item)));
    }
    // 进行下层寻找
    return breadthFirstSearch(nexts, targetValue, funded);
}


var result = breadthFirstSearch([a], 'f', []);
console.log('广度优先遍历', result)