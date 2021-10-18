const PENDING = "PENDING";
const FUFILLED = "FUFILLED";
const REJECTED = "REJECTED";
class Promise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    status = PENDING;
    value = null;
    reason = null;
    onFulFilledCallback = [];
    onRejectCallback = [];
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FUFILLED
        }
        this.value = value;
        // 依次执行之前缓存过的回调函数
        while (this.onFulFilledCallback.length) {
            this.onFulFilledCallback.shift()(value)
        }
    }
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
        }
        this.reason = reason;
        while (this.onRejectCallback.length) {
            this.onRejectCallback.shift()(reason)
        }
    }

    then(onFulFilled, onReject) {
        if (this.status === FUFILLED) {
            onFulFilled(this.value)
        } else if (this.status === REJECTED) {
            onReject(this.reason)
        } else if (this.status === PENDING) {
            // 缓存回调
            this.onFulFilledCallback.push(onFulFilled);
            this.onRejectCallback.push(onReject);
        }
    }
}
    
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 2000); 
  })
  
  promise.then(value => {
    console.log(1)
    console.log('resolve', value)
  })
   
  promise.then(value => {
    console.log(2)
    console.log('resolve', value)
  })
  
  promise.then(value => {
    console.log(3)
    console.log('resolve', value)
  })
