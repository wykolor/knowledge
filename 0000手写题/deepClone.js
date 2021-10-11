function deepClone(target) {
  const map = new WeakMap()
  
  function isObject(target) {
      return (typeof target === 'object' && target ) || typeof target === 'function'
  }

  function clone(data) {
      if (!isObject(data)) {
          return data
      }
      if ([Date, RegExp].includes(data.constructor)) {
          return new data.constructor(data)
      }
      if (typeof data === 'function') {
          return new Function('return ' + data.toString())()
      }
      const exist = map.get(data)
      if (exist) {
          return exist
      }
      if (data instanceof Map) {
          const result = new Map()
          map.set(data, result)
          data.forEach((val, key) => {
              if (isObject(val)) {
                  result.set(key, clone(val))
              } else {
                  result.set(key, val)
              }
          })
          return result
      }
      if (data instanceof Set) {
          const result = new Set()
          map.set(data, result)
          data.forEach(val => {
              if (isObject(val)) {
                  result.add(clone(val))
              } else {
                  result.add(val)
              }
          })
          return result
      }
      const keys = Reflect.ownKeys(data)
      const allDesc = Object.getOwnPropertyDescriptors(data)
      const result = Object.create(Object.getPrototypeOf(data), allDesc)
      map.set(data, result)
      keys.forEach(key => {
          const val = data[key]
          if (isObject(val)) {
              result[key] = clone(val)
          } else {
              result[key] = val
          }
      })
      return result
  }

  return clone(target)
}

function deepClone1(obj) {
    if (typeof obj !== 'object' || obj == null) {
        // 考虑传入的操作不是对象或者数组，或者是null
        return obj
    }

    let result = Array.isArray(obj) ? [] : {}

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone1[key]           
        }
    }

    return result
}