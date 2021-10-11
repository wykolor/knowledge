// 数组扁平化
function flattn(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }

    const isDeep = arr.some(item => item instanceof Array);

    if (!isDeep) {
        return arr
    }

    const res = Array.prototype.concat.apply([], arr);
    return flattn(res);
}

function flattern(arr) {
    if (!Array.isArray(arr)) return arr;
    return arr.reduce((prev, next) => {
        return prev.concat(next instanceof Array ? flattern(next) : next)
    }, [])
}

const arr = [1, 2, [3.4, [45, 6656, 540]]];
console.log(flattern('arr'));