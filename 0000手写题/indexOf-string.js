
String.prototype.MyIndexOf = function (searchItem, fromIndex) {
    let len = this.length, index = -1;
    if (!fromIndex || fromIndex < 0) {
        fromIndex = 0
    }

    if (fromIndex >= len) {
        fromIndex = len
    }

    for (let i = fromIndex; i < len; i++) {
        if (searchItem === this[i]) {
            index = i
        }
    }

    return index;
}
