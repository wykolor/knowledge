/**
 * 对象深拷贝
 *
 * @param {*} obj
 * @return {*} 
 */
function deepClone(obj) {
    if (typeof obj !== "object" || typeof obj === "function" || obj == null) {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone(obj)
        }
    }

    return result;
}

/**
 *
 * 函数防抖
 * @param {*} fn
 * @param {number} [delay=500]
 * @return {*} 
 */
function debounce(fn, delay = 500) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay)
    }
}

/**
 * 函数节流 
 *
 * @param {*} fn
 * @param {number} [delay=1000]
 */
function throtte(fn, delay = 1000) {
    let prev = Date.now();
    return function (...args) {
        const now = Date.now();
        if (now - prev >= delay) {
            fn.apply(this, args);
            prev = Date.now();
        }
    }
}