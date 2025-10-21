import LinkedList from './linked-list';
var Stack = /** @class */function () {
  function Stack(maxStep) {
    if (maxStep === void 0) {
      maxStep = 10;
    }
    this.linkedList = new LinkedList();
    this.maxStep = maxStep;
  }
  Object.defineProperty(Stack.prototype, "length", {
    get: function get() {
      return this.linkedList.toArray().length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 判断栈是否为空，如果链表中没有头部元素，则栈为空
   */
  Stack.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * 是否到定义的栈的最大长度，如果达到最大长度后，不再允许入栈
   */
  Stack.prototype.isMaxStack = function () {
    return this.toArray().length >= this.maxStep;
  };
  /**
   * 访问顶端元素
   */
  Stack.prototype.peek = function () {
    if (this.isEmpty()) {
      return null;
    }
    // 返回头部元素，不删除元素
    return this.linkedList.head.value;
  };
  Stack.prototype.push = function (value) {
    this.linkedList.prepend(value);
    if (this.length > this.maxStep) {
      this.linkedList.deleteTail();
    }
  };
  Stack.prototype.pop = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };
  Stack.prototype.toArray = function () {
    return this.linkedList.toArray().map(function (node) {
      return node.value;
    });
  };
  Stack.prototype.clear = function () {
    while (!this.isEmpty()) {
      this.pop();
    }
  };
  return Stack;
}();
export default Stack;