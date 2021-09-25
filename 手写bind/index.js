function fn(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'hahahah'
}

Function.prototype.bind1 = function () {
    const args = Array.prototype.slice.call(arguments);
    const t = args.shift();
    const self = this
    return function () {
        const selfArgs = Array.from(arguments)
        return self.apply(t, args.concat(selfArgs))
    }
}

const bindFn = fn.bind1({a: 100}, 10, 20)
const result = bindFn(30);
console.log(result)