function myInstanceof(left, right) {
  const prototype = right.prototype;
  let left = left.__proto__;

  while(true) {
    if (left === null) {
      return false
    }

    if(left === prototype) {
      return true
    }

    left = left.__proto__
  }
}

function instance(left, right) {
  let prototype = right.prototype;
  let leftProto = left.__proto__;
  while (true) {
    if (leftProto === null) {
      return false
    }

    if (leftProto === prototype) {
      return true
    }

    leftProto = leftProto.__proto__
  }

}