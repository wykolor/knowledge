/**
 *
 *
 * @param {*} arr
 * @param {*} i1
 * @param {*} i2
 */
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}
/**
 *
 *  选择排序
 * @param {*} arr
 */
function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = arr[i];
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    swap(arr, i, index);
  }
}
/**
 *冒泡排序
 *
 * @param {*} arr
 */
function bobulleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}


/**
 *
 *
 * @param {*} arr
 */
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var temp = arr[i];
      for (var j = i; j >= 0; j--) {
        if (j > 0 && arr[j - 1] > temp) {
          arr[j] = arr[j - 1];
        } else {
          arr[j] = temp;
          break;
        }
      }
    }
  }
}
var arr = [1, 4, 3, 5, 7, 6, 2];
console.log(arr);
insertSort(arr);
console.log(arr);