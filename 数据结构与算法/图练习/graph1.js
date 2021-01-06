const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

let visited = new Set();
// 深度遍历
/**
 *深度遍历口诀：
 1. 访问根节点
 2. 对根节点的没有访问过的（不作该记录会形成无限递归，因为图是双向的，）相邻节点挨个进行深度优先遍历
 *
 * @param {*} n
 */

const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(i => {
        if(!visited.has(i)) {
            dfs(i)
        }
    })
}

dfs(2);

const visitedBfs = new Set();
visitedBfs.add(2);
/**
 *
 * 广度优先遍历
 * @param {*} n
 */
const bfs = (n) => {
    let q = [2];
    while(q.length) {
        const c = q.shift();
        console.log(c);
        graph[c].forEach(i => {
            if(!visitedBfs.has(i)) {
                q.push(i);
                visitedBfs.add(i)
            }
        })
    }    
}
bfs();