let obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
}

let obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
    //  如果其中一个不是对象，就直接进行全等比较
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2
    }

    // 如果已经是全等相等（比如是同一个引用）
    if (obj1 === obj2) {
        return true
    }
    // 获取两个对象的属性个数

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    // 如果属性个数都不等大话就直接返回false
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }

    // 以obj1为基准，和obj2依次递归比较
    for (let key in obj1) {
        // 比较当前的key value
        const res = isEqual(obj1[key], obj2[key]);
        if (!res) {
            return false
        }
    }
    
    return true
}

console.log(isEqual(obj1, obj2));