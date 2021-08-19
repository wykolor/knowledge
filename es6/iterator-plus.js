/**
 *捕获错误的生成器
 *
 */
function *createIterator() {
  let first = yield 1;
  let second;
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
 */
function *createIterator1() {
  yield 1;
  yield 2;
  return;
  yield3;
  yield 4;
}

let iterator1 = createIterator1()

