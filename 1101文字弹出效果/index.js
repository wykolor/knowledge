let poetrys = [
  "云想衣裳花想容，",
  "春风拂槛露华浓。",
  "若非群玉山头见，",
  "会向瑶台月下逢。"
];
// 获取最外层元素
let wrapper = document.getElementsByClassName("wrapper")[0];
// 初始化每个文字执行动画时间
let singleWordTime = 0.4;
// 初始化每列文字执行动画时间
let delayColTime = 0;
for (let i = 0; i < poetrys.length; i++) {
  // 创建一个p元素
  let eP = document.createElement("p");
  // 保存每一句诗词
  let poetry = poetrys[i];
  for (let j = 0; j < poetry.length; j++) {
    // 创建一个span标签
    let eSpan = document.createElement("span");
    // 把每个字作为span标签的内容
    eSpan.innerText = poetry[j];
    // 设置span执行的动画时间
    eSpan.style.transitionDelay = delayColTime + j * singleWordTime + "s";
    // 修改文字的透明度
    setTimeout(function() {
      eSpan.style.opacity = 1;
    }, 0);
    // 把span标签添加到p标签去
    eP.appendChild(eSpan);
  }
  //  计算每列文字执行的动画时间
  delayColTime += poetry.length * singleWordTime;
  // 把p标签添加到外层包裹元素上去
  wrapper.appendChild(eP);
}
