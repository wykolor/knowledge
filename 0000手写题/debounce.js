const input1 = document.getElementById("input1");

function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  }
}

input1.addEventListener("keyup", debounce((e) => {
  console.log(e.target.value)
}, 1000));
