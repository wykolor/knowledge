function unique(arr) {
    const res = []
    arr.forEach(item => {
        if (res.indexOf(item) < 0) {
            res.push(item)
        }
    })
    return res
}

// set的方式

function uniqueSet(arr) {
    const set = new Set(arr)
    return [...set]
}

const res = uniqueSet([10,29,32,32,43,2,3,3])
console.log(res);