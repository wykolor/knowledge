const input1 = document.getElementById("input1");
let timer = null;
// input1.addEventListener("keyup", function () {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     console.log(input1.value)
//     timer = null;
//   }, 1000);
// })

function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay);
  }
}

input1.addEventListener("keyup", debounce(() => {
}, 1000));
