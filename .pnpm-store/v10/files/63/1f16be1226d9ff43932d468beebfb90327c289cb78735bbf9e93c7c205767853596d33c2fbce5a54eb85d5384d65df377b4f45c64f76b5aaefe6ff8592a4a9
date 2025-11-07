"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _linkedList = _interopRequireDefault(require("./linked-list"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Queue = /** @class */function () {
  function Queue() {
    this.linkedList = new _linkedList.default();
  }
  /**
   * 队列是否为空
   */
  Queue.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * 读取队列头部的元素， 不删除队列中的元素
   */
  Queue.prototype.peek = function () {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  };
  /**
   * 在队列的尾部新增一个元素
   * @param value
   */
  Queue.prototype.enqueue = function (value) {
    this.linkedList.append(value);
  };
  /**
   * 删除队列中的头部元素，如果队列为空，则返回 null
   */
  Queue.prototype.dequeue = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };
  Queue.prototype.toString = function (callback) {
    return this.linkedList.toString(callback);
  };
  return Queue;
}();
var _default = Queue;
exports.default = _default;