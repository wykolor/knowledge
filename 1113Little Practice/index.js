/**
 * 采用对象式编程 变量不会受污染
 * 步骤：
 *  1、实现菜单栏的切换效果，切换时菜单栏激活样式变化，轮播图也跟着变化
 *  2、轮播图定时变化
 *  3、菜单栏的切换和轮播图的定时播放不互相影响(关键就是索引值统一，都是操作一个值)
 * */

var swiperHandle = {
    menuLi: document.querySelectorAll('.right-nav li'), // 菜单栏的li
    imgLi: document.querySelectorAll('.box li'), // 图片li
    wraper: document.getElementsByClassName('wrapper')[0], // wrapper盒子
    timer: null, // 初始化定时器id
    nowIndex: 0, // 记录轮播图当前执行的索引
    init: function () { // 初始化函数
        // 鼠标事件
        this.mouseHandle();
        // 自动播放事件
        this.play();
    },
    mouseHandle: function () {
        var _this = this;
        for (var i = 0; i < this.menuLi.length; i++) {
            this.menuLi[i].index = i;
            this.menuLi[i].onmouseenter = function () {
                _this.nowIndex = this.index;
                _this.move(_this.nowIndex);
            }
        };
        this.wraper.onmouseenter = function () {
            clearInterval(_this.timer);
        }
        this.wraper.addEventListener('mouseleave', function () {
            _this.play();
        })
    },
    play: function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.nowIndex++;
            if (_this.nowIndex == _this.menuLi.length) {
                _this.nowIndex = 0;
            }
            _this.move(_this.nowIndex);
        }, 1800)
    },
    move(index) {
        var activeLi = document.getElementsByClassName('active')[0];
        activeLi.className = "";
        this.menuLi[index].setAttribute('class', 'active');
        // 图片绑定
        var activeImg = document.getElementsByClassName('show')[0];
        activeImg.className = "";
        this.imgLi[index].setAttribute('class', 'show');
    }

};
swiperHandle.init();