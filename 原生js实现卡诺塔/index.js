// 定义汉诺塔的整体的一个数据结构
var hannota = {
	c1: [6, 5, 4, 3, 2, 1], // 代表每一根柱子
	c2: [],
	c3: []
};

var minWidth = 60; // 定义最小圆盘宽度
var step = 40; // 定义圆盘根据编号递增的宽度值
/**
 * 总体思路：
 * 更改每根柱子上面的圆盘，
 * 就是操作数组里面的元素，最终载渲染页面
 * 只要有圆盘的移动，都要进行页面渲染
 * */
// 渲染函数
function render() {
	renderColumn('c1');
	renderColumn('c2');
	renderColumn('c3');
	/**
	 * @param {*} cno
	 * 渲染柱子的函数，通过传入柱子id，渲染该柱子的子元素
	 * */
	function renderColumn(cno) {
		var divColumn = document.getElementById(cno);
		divColumn.innerHTML = '';
		var cValues = hannota[cno];
		// 遍历柱子元素
		for (var i = 0; i < cValues.length; i++) {
			var v = cValues[i];
			var item = document.createElement('div');
			item.className = 'item';
			item.style.width = minWidth + (v - 1) * step + 'px';
			divColumn.appendChild(item);
		}
	}
}
render();
/**
 * 移动函数
 * 从一个柱子移动到另外一个柱子，
 * 操作的对象是圆盘
 * @param {*} from 原始圆盘
 * @param {*} to 移动到哪一个圆盘 目标圆盘
 * 
 * 
 * */
function move(from, to) {
	// 如果from和同相等，移动到同一根柱子，则不执行
	if (from === to) {
		return;
	}
	var fromValues = hannota[from];
	// 如果原始圆盘为空
	if (fromValues.length === 0) {
		return;
	}
	var toValues = hannota[to];

	if (toValues.length === 0) {
		// 如果目标toValues为空，也可以移动
		_move();
	} else if (fromValues[fromValues.length - 1] < toValues[toValues.length - 1]) {
		// 原始柱子的最后一个圆盘值与目标圆盘的最后一个值进行比较，
		// fromValues的最后一个值小于toValues的最后一个值才能移动
		_move();
	} else {
		// 其他都不可以移动
		return false;
	}
	// 辅助移动函数
	function _move() {
		// 把原始柱子的最后一个圆盘去掉，加到目标圆盘的结尾
		toValues.push(fromValues.pop());
		// 渲染界面
		render();
	}

}

// 按钮执行函数
function clickHandler() {
	document.getElementById('buttons').onclick = function (e) {
		// 如果不是点的按钮的话
		if (e.target.tagName !== 'BUTTON') {
			return;
		} else {
			// 获取按钮自定义属性
			var from = e.target.getAttribute('from');
			var to = e.target.getAttribute('to');
			move(from, to);
		}

	}
}
clickHandler()