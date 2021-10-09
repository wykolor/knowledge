
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error('图片加载失败')
            reject(err)
        }

        img.src = src
    })
}

loadImage('.....').then(res => {
    console.log('加载图片', res)
}).catch(err => {
    console.log('err', err.message)
})