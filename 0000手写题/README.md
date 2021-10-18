- 数组的常用方法有哪些？使用场景分别是什么？

push、pop、unshift、shift、map、reduce、filter、concat、sort、reverse、from、find、findIndex

- 浅拷贝和深拷贝的区别，实现方式？

```javascript
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
```

- 节流和防抖有什么区别，应用场景是什么

```javascript
    /**
     *
     * 函数防抖 频繁触发只触发一次 应用场景：搜索框 按钮点击 登陆按钮 点赞按钮
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
```

```javascript
    /**
     * 函数节流 频繁出发之后会改变触发频率 应用场景：onsize onscoll 监听滚动位置之类的
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
```

