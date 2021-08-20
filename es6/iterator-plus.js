/**
 *捕获错误的生成器
 *
 */
function *createIterator() {
  let first = yield 1;
  let second;
  // 捕获错误的throw也会继续执行后续代码，因为生成器内部捕获了错误
  try {
    second = yield first + 2
  } catch (error) {
    second = 9
  }
  yield second + 3;
}

let iterator = createIterator()

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.throw(new Error('error 了')));
console.log(iterator.next());


/**
 *
 * 生成器的返回语句
 * return 语句返回指定的返回值，只会在返回对象中出现一次，在后续的调用中对象中value 又被赋值给undefined
 */
function *returnIterator() {
  yield 1;
  yield 2;
  return 3
  yield 3;
  yield 4;
}

let iterator1 = returnIterator()

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next()); // { value: 3, done: true }
console.log(iterator1.next()); // { value: undefined, done: true }

/**
 *
 * 委托生成器
 * 
 * 生成器中的return语句返回的值，无论以何种方式调用生成器的next方法，都无法访问到返回值，因为return的值只在
 */

function *createNumberIterator() {
  yield 1;
  yield 2;
  return 3;
}

function *createColorIterator() {
  yield 'red';
  yield 'pink';
}

function *createCombinedIterator() {
  yield *createNumberIterator();
  yield *createColorIterator();
  yield 'game over';
}

function *createRepeatIterator(count) {
  for (let index = 0; index < count; index++) {
    yield 'repeat'
  }
}

function *createCombinedIterator1() {
  const result = yield *createNumberIterator();
  yield *createRepeatIterator(result)
  yield * 'hello'
}

const combineIterator = createCombinedIterator();
console.log(combineIterator.next());
console.log(combineIterator.next());
console.log(combineIterator.next());
console.log(combineIterator.next());
console.log(combineIterator.next());
console.log(combineIterator.next());

console.log('*******************************');
const combineIterator1 = createCombinedIterator1()
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
console.log(combineIterator1.next());
