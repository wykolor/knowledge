let set = new Set()

set.add(1)

set.add('a')

console.log(set);

// console.log(set.has(1));
// console.log(set.has('12'));

// const deleteProp = set.delete(1)
// console.log(deleteProp, set);

// set.clear()
// console.log(set);

// set.forEach((index, value, set) => {
//   console.log(index, value, set);
//   if(value === 1) throw Error('错误')
// })

let arr = [1,2,3,4, [12,24,[2,5,6,[2,5]]]]

const flatten = (arr = []) => {
  console.log(arr)
  const result = [];
  (function flat(arr) {
    console.log(arr)
    arr.forEach(item => {
      if(Array.isArray(item)) {
        flat(item)
      } else {
        result.push(item)
      }
    })
  })(arr)

  return result
}

console.log(flatten(arr))

// forEach 遍历数组会自动跳过空元素
const eachFlat = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}


function flatten1(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten1(next) : next)
  }, [])
}

console.log(flatten1(arr))

console.log(arr.flat())
