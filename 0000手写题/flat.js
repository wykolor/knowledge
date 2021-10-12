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

// 扁平化对象
function flatObj(obj) {
    let result = {}
    function _flatObj(key, value) {
        if (typeof value !== "object" || value == null) {
            if (key) {
                result[key] = value;
            }
        } else {
            for (const item in value) {
                if (value.length === 0 && key) {
                    result[key] = {}
                }
                if (Object.hasOwnProperty.call(value, item)) {
                    _flatObj(key ? `${key}.${item}` : `${item}`, value[item])
                }
            }
        }
    }
    _flatObj('', obj);
    return result;
}

const arr = [1, 2, [3.4, [45, 6656, 540]]];

const obj = {
    a: "123",
    name: {
        first: 'wang',
        second: 'yan'
    },
    age: [1,2,3,4]
}
console.log('object',flatObj(obj));