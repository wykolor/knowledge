function createIterator(items) {
  var i = 0;
  return {
    next: function() {
      var done = (i >= items.length);
      var value = !done ? items[i++] : undefined
      return { done, value }
    }
  }
}

var iterator = createIterator([1, 2, 3])
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function *createIterator1() {
  console.log('这是第一次');
  yield 1;
  console.log('这是第二次');
  yield 2;
  console.log('这是第三次');
  yield 3;
}

var iterator1 = createIterator1()
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());



function *createIterator2(items) {
  for (let index = 0; index < items.length; index++) {
    yield items[index];
  }
}

var iterator = createIterator2(['kolor', 'wangyan', 'jiaer'])
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());


let createIterator3 = (items) => {

}