"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkedListNode = void 0;
var defaultComparator = function defaultComparator(a, b) {
  if (a === b) {
    return true;
  }
  return false;
};
/**
 * 链表中单个元素节点
 */
var LinkedListNode = /** @class */function () {
  function LinkedListNode(value, next) {
    if (next === void 0) {
      next = null;
    }
    this.value = value;
    this.next = next;
  }
  LinkedListNode.prototype.toString = function (callback) {
    return callback ? callback(this.value) : "".concat(this.value);
  };
  return LinkedListNode;
}();
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */function () {
  function LinkedList(comparator) {
    if (comparator === void 0) {
      comparator = defaultComparator;
    }
    this.head = null;
    this.tail = null;
    this.compare = comparator;
  }
  /**
   * 将指定元素添加到链表头部
   * @param value
   */
  LinkedList.prototype.prepend = function (value) {
    // 在头部添加一个节点
    var newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  };
  /**
   * 将指定元素添加到链表中
   * @param value
   */
  LinkedList.prototype.append = function (value) {
    var newNode = new LinkedListNode(value);
    // 如果不存在头节点，则将创建的新节点作为头节点
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // 将新节点附加到链表末尾
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  };
  /**
   * 删除指定元素
   * @param value 要删除的元素
   */
  LinkedList.prototype.delete = function (value) {
    if (!this.head) {
      return null;
    }
    var deleteNode = null;
    // 如果删除的是头部元素，则将next作为头元素
    while (this.head && this.compare(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    var currentNode = this.head;
    if (currentNode !== null) {
      // 如果删除了节点以后，将next节点前移
      while (currentNode.next) {
        if (this.compare(currentNode.next.value, value)) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // 检查尾部节点是否被删除
    if (this.compare(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deleteNode;
  };
  /**
   * 查找指定的元素
   * @param param0
   */
  LinkedList.prototype.find = function (_a) {
    var _b = _a.value,
      value = _b === void 0 ? undefined : _b,
      _c = _a.callback,
      callback = _c === void 0 ? undefined : _c;
    if (!this.head) {
      return null;
    }
    var currentNode = this.head;
    while (currentNode) {
      // 如果指定了 callback，则按指定的 callback 查找
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // 如果指定了 value，则按 value 查找
      if (value !== undefined && this.compare(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };
  /**
   * 删除尾部节点
   */
  LinkedList.prototype.deleteTail = function () {
    var deletedTail = this.tail;
    if (this.head === this.tail) {
      // 链表中只有一个元素
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    var currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  };
  /**
   * 删除头部节点
   */
  LinkedList.prototype.deleteHead = function () {
    if (!this.head) {
      return null;
    }
    var deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  };
  /**
   * 将一组元素转成链表中的节点
   * @param values 链表中的元素
   */
  LinkedList.prototype.fromArray = function (values) {
    var _this = this;
    values.forEach(function (value) {
      return _this.append(value);
    });
    return this;
  };
  /**
   * 将链表中的节点转成数组元素
   */
  LinkedList.prototype.toArray = function () {
    var nodes = [];
    var currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  };
  /**
   * 反转链表中的元素节点
   */
  LinkedList.prototype.reverse = function () {
    var currentNode = this.head;
    var prevNode = null;
    var nextNode = null;
    while (currentNode) {
      // 存储下一个元素节点
      nextNode = currentNode.next;
      // 更改当前节点的下一个节点，以便将它连接到上一个节点上
      currentNode.next = prevNode;
      // 将 prevNode 和 currentNode 向前移动一步
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
  };
  LinkedList.prototype.toString = function (callback) {
    if (callback === void 0) {
      callback = undefined;
    }
    return this.toArray().map(function (node) {
      return node.toString(callback);
    }).toString();
  };
  return LinkedList;
}();
var _default = LinkedList;
exports.default = _default;