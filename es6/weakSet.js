
let weakSet = new WeakSet()
let set = new Set()
let key = 'name'
let key1 = 19
set.add(key)
set.add(key1)

console.log(weakSet, set);

key = null

let func = function () {}
let arr = [] || undefined
weakSet.add(func)
weakSet.add(arr)
console.log(weakSet);
/**
 * WeakSet 构造函数不接受任何原始值
 *  WeakSet 是弱引用
 * 
 * 
 * */ 

for (const key of set) {
  console.log(key)
}