var defaultCompare = function defaultCompare(a, b) {
  return a - b;
};
var MinBinaryHeap = /** @class */function () {
  function MinBinaryHeap(compareFn) {
    if (compareFn === void 0) {
      compareFn = defaultCompare;
    }
    this.compareFn = compareFn;
    this.list = [];
  }
  MinBinaryHeap.prototype.getLeft = function (index) {
    return 2 * index + 1;
  };
  MinBinaryHeap.prototype.getRight = function (index) {
    return 2 * index + 2;
  };
  MinBinaryHeap.prototype.getParent = function (index) {
    if (index === 0) {
      return null;
    }
    return Math.floor((index - 1) / 2);
  };
  MinBinaryHeap.prototype.isEmpty = function () {
    return this.list.length <= 0;
  };
  MinBinaryHeap.prototype.top = function () {
    return this.isEmpty() ? undefined : this.list[0];
  };
  MinBinaryHeap.prototype.delMin = function () {
    var top = this.top();
    var bottom = this.list.pop();
    if (this.list.length > 0) {
      this.list[0] = bottom;
      this.moveDown(0);
    }
    return top;
  };
  MinBinaryHeap.prototype.insert = function (value) {
    if (value !== null) {
      this.list.push(value);
      var index = this.list.length - 1;
      this.moveUp(index);
      return true;
    }
    return false;
  };
  MinBinaryHeap.prototype.moveUp = function (index) {
    var parent = this.getParent(index);
    while (index && index > 0 && this.compareFn(this.list[parent], this.list[index]) > 0) {
      // swap
      var tmp = this.list[parent];
      this.list[parent] = this.list[index];
      this.list[index] = tmp;
      // [this.list[index], this.list[parent]] = [this.list[parent], this.list[index]]
      index = parent;
      parent = this.getParent(index);
    }
  };
  MinBinaryHeap.prototype.moveDown = function (index) {
    var _a;
    var element = index;
    var left = this.getLeft(index);
    var right = this.getRight(index);
    var size = this.list.length;
    if (left !== null && left < size && this.compareFn(this.list[element], this.list[left]) > 0) {
      element = left;
    } else if (right !== null && right < size && this.compareFn(this.list[element], this.list[right]) > 0) {
      element = right;
    }
    if (index !== element) {
      _a = [this.list[element], this.list[index]], this.list[index] = _a[0], this.list[element] = _a[1];
      this.moveDown(element);
    }
  };
  return MinBinaryHeap;
}();
export default MinBinaryHeap;