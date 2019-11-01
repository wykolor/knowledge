/**
 * writeBy kolor 2019-10-20 16:30
 *
 */
var sketchPad = {
  cavs: document.getElementById("cavs"), // canvas操作对象
  ctxt: cavs.getContext("2d"), // 笔触
  bool: false,
  btn_container: document.getElementById("btns"),
  colorBtn: document.getElementById("colorChange"),
  lineRuler: document.getElementById("lineRuler"),
  imgArr: [],
  init: function() {
    this.ctxt.lineGap = "round"; // 线条起始和结尾是样式
    this.ctxt.lineJoin = "round"; // 线条转弯样式
    this.drawing();
    this.btnsAllFn();
  },
  // 实现画笔方法
  drawing: function() {
    var that = this, // 保留this指向 that始终指向sketchPad
      cavs = this.cavs,
      c_left = cavs.offsetLeft,
      c_top = cavs.offsetTop;
    // 鼠标落下事件
    this.cavs.onmousedown = function(e) {
      that.bool = true;
      var c_x = e.pageX - c_left,
        c_y = e.pageY - c_top; // 获取鼠标落在cavs元素上的时候的位置
      that.ctxt.beginPath(); //保证每一笔都是新开始的一笔
      that.ctxt.moveTo(c_x, c_y); // 落笔点
      // 把上一步的画像截图存下来，push进数组进行保存
      var img = that.ctxt.getImageData(
        0,
        0,
        that.cavs.offsetWidth,
        that.cavs.offsetHeight
      );
      that.imgArr.push(img);
    };
    // 鼠标移动事件
    this.cavs.onmousemove = function(e) {
      if (that.bool) {
        that.ctxt.lineTo(e.pageX - c_left, e.pageY - c_top);
        that.ctxt.stroke();
      }
    };
    // 鼠标抬起事件
    this.cavs.onmouseup = function(e) {
      that.ctxt.closePath();
      that.bool = false;
    };
    // 鼠标离开事件
    this.cavs.onmouseleave = function(e) {
      that.ctxt.closePath();
      that.bool = false;
    };
  },
  btnsAllFn: function() {
    var that = this;
    this.btn_container.onclick = function(e) {
      switch (e.target.id) {
        case "cleanBoard":
          // 清屏
          that.ctxt.clearRect(
            0,
            0,
            that.cavs.offsetWidth,
            that.cavs.offsetHeight
          );
          break;
        case "eraser":
          that.ctxt.strokeStyle = "#fff";
          // 橡皮
          break;
        case "rescind":
          if (that.imgArr.length > 0) {
            // 就把存入的截图画像的最后一张放进画板
            that.ctxt.putImageData(that.imgArr.pop(), 0, 0);
          }
          // 撤销
          break;
      }
    };
    this.colorBtn.onchange = function() {
      that.ctxt.strokeStyle = this.value;
    };
    this.lineRuler.onchange = function() {
      that.ctxt.lineWidth = this.value;
    };
  }
};

sketchPad.init();
