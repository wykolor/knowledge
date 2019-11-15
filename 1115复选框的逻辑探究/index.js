/**
 *
 *利用立即执行函数实现变量私有化
 * */
(function() {
  // li列表
  var liList = document.getElementsByTagName("li"),
    liLen = liList.length;
  // 选择框列表
  var checkList = document
      .getElementsByTagName("ul")[0]
      .getElementsByTagName("input"),
    checkLen = checkList.length;
  // 全选按钮 /反选按钮
  var checkAll = document.getElementById("checkAll"),
    checkTurn = document.getElementById("checkTurn");
  // 可选颜色列表
  var colorList = ["pink", "#dde7eb", "#cde3ac"];
  // 给给个li动态添加颜色
  for (var i = 0; i < liLen; i++) {
    liList[i].style.backgroundColor = colorList[i % colorList.length];
    // 给每个li绑定事件
    liList[i].addEventListener("click", check);
  }

  function check(e) {
    // 选中状态计数器
    var count = 0;
    if (e.target.tagName === "INPUT" && !e.target.checked) {
      // 如果有一个以上的CheckBox是false，那么全选就不成立
      checkAll.checked = false;
    } else if (e.target.tagName === "INPUT" && e.target.checked) {
      // 遍历每个选择框，选择框为true的时候计数器增加
      for (var i = 0; i < checkLen; i++) {
        if (checkList[i].checked) {
          count++;
        }
      }
      // 当选择计数器和选择框个数相等时代表全部选l
      if (count === checkLen) {
        checkAll.checked = true;
      }
    }
  }

  // 全选
  checkAll.onclick = function() {
    for (var i = 0; i < checkLen; i++) {
      // 让所有的选择框和全选的选择状态一样就可以
      checkList[i].checked = this.checked;
    }
  };
  // 反选
  checkTurn.onclick = function() {
    var count = 0;
    for (var i = 0; i < checkLen; i++) {
      // 让每个选择和它最开始选择的相反就可以
      checkList[i].checked = !checkList[i].checked;

      if (checkList[i].checked) {
        count++;
      }
      // 当选择计数器和选择框个数相等时代表全部选l
      if (count === checkLen) {
        checkAll.checked = true;
      } else {
        checkAll.checked = false;
      }
    }
  };
})();
