const input1 = document.getElementById("input1");

function throtte(fn, delay) {
    let prev = Date.now();
    return function () {
        let now = Date.now();
        if (now - prev >= delay) {
            fn.apply(this, arguments);
            prev = Date.now()
        }
    }
}



input1.addEventListener("keyup", throtte((e) => {
    console.log(e.target.value)
  }, 1000));
  