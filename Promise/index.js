// Promise.resolve().then(() => {
//     console.log(1)
// }).catch(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }) // 1 3

// Promise.resolve().then(() => {
//     console.log(1)
//     throw new Error('error1')
// }).catch(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// })  // 1 2 3


// Promise.resolve().then(() => {
//     console.log(1)
//     throw new Error('error2')
// }).catch(() => {
//     console.log(2)
// }).catch(() => {
//     console.log(3)
// }) // 1 2

// async function fn() {
//     return 100
// }

// (async function () {
//     const a = fn()
//     const b = await fn()
//     console.log('a',a);
//     console.log('b', b)
// })()

// (async function () {
//     console.log("start")
//     const a = await 100
//     console.log('a', a)
//     const b = await Promise.resolve(200)
//     console.log('b', b)
//     const c = await Promise.reject(100)
//     console.log('c', c)
//     console.log('end')
// })()


// let p = Promise.resolve().then(() => {
//     console.log(100)
//     return Promise.reject()
// })
// console.log(p)

// async function fn() {
//     return Promise.reject()
// }

// async function fn2() {
//     console.log(fn());
//     console.log( await fn())
// }

// fn2()

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log("script start")

setTimeout(function () {
    console.log("setTimeout")
}, 0)

async1()

new Promise(function (resolve) {
    console.log("promise 1")
    resolve()
}).then(() => {
    console.log("promise 2")
})

console.log('script end')