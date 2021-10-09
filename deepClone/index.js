/**
 *  深拷贝
 * @param {*} obj 
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }

    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            obj[key] = deepClone(obj[key])
        }
    }

    return result
}