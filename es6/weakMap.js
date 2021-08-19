var date = new Date()
console.log(1, new Date() - date);

setTimeout(() => {
  console.log(2, new Date() - date);
}, 500);

Promise.resolve().then(() => {
  console.log('55555')
  setTimeout(() => {
    console.log(3, new Date() - date)
  }, 500);
})
while (new Date() - date < 1000) {}
console.log(4, new Date() - date)