class EventEmitter {
    constructor() {
      this.events = {}
    }

    on(type, callback) {
      if (!this.events) this.events = Object.create(null);
      if (!this.events[type]) {
        this.events[type] = [callback]
      } else {
        this.events[type].push(callback)
      }
    }

    off(type, callback) {
        if (!this.events[type]) return;
        // 一个参数都没有传 就清除实例上面所有的事件
        if (!type && !callback) {
            this.events = {}
        } else if (!callback) {
            // 如果只只传入了事件名
            this.events[type] = []
        } else {
            this.events[type] = this.events[type].filter(item => item !== callback)
        }
    }
    
    // 只执行一次订阅事件
    once(type, callback) {
      function cb(...args) {
        callback.apply(this, args)
        this.off(type, cb)
      }
      this.on(type, cb)
    }

    emit(type, ...args) {
      this.events[type] && this.events[type].forEach(item => {
        item.apply(this, args)
      })
    }
  }

  const event = new EventEmitter();

  const handle = (...args) => {
    console.log('监听', args)
  }

  event.on('kolor', handle)
  event.once('kolor', handle)
  event.on('kolor', () => {
    console.log("多次执行")
  })
  event.emit('kolor', 1,2,3,4)