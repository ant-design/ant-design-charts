"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 并查集 Disjoint set to support quick union
 */
var UnionFind = /** @class */function () {
  function UnionFind(items) {
    this.count = items.length;
    this.parent = {};
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
      var i = items_1[_i];
      this.parent[i] = i;
    }
  }
  // find the root of the item
  UnionFind.prototype.find = function (item) {
    while (this.parent[item] !== item) {
      item = this.parent[item];
    }
    return item;
  };
  UnionFind.prototype.union = function (a, b) {
    var rootA = this.find(a);
    var rootB = this.find(b);
    if (rootA === rootB) return;
    // make the element with smaller root the parent
    if (rootA < rootB) {
      if (this.parent[b] !== b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] !== a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  };
  // whether a and b are connected, i.e. a and b have the same root
  UnionFind.prototype.connected = function (a, b) {
    return this.find(a) === this.find(b);
  };
  return UnionFind;
}();
var _default = UnionFind;
exports.default = _default;