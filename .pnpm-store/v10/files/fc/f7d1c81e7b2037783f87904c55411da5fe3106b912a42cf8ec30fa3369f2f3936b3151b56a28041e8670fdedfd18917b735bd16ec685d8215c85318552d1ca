/**
 * 向量运算
 */
import { clone } from '@antv/util';
var Vector = /** @class */function () {
  function Vector(arr) {
    this.arr = arr;
  }
  Vector.prototype.getArr = function () {
    return this.arr || [];
  };
  Vector.prototype.add = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return new Vector(otherArr);
    }
    if (!(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return new Vector(this.arr);
    }
    if (this.arr.length === otherArr.length) {
      var res = [];
      for (var index in this.arr) {
        res[index] = this.arr[index] + otherArr[index];
      }
      return new Vector(res);
    }
  };
  Vector.prototype.subtract = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return new Vector(otherArr);
    }
    if (!(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return new Vector(this.arr);
    }
    if (this.arr.length === otherArr.length) {
      var res = [];
      for (var index in this.arr) {
        res[index] = this.arr[index] - otherArr[index];
      }
      return new Vector(res);
    }
  };
  Vector.prototype.avg = function (length) {
    var res = [];
    if (length !== 0) {
      for (var index in this.arr) {
        res[index] = this.arr[index] / length;
      }
    }
    return new Vector(res);
  };
  Vector.prototype.negate = function () {
    var res = [];
    for (var index in this.arr) {
      res[index] = -this.arr[index];
    }
    return new Vector(res);
  };
  // 平方欧式距离
  Vector.prototype.squareEuclideanDistance = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }
    if (this.arr.length === otherArr.length) {
      var res = 0;
      for (var index in this.arr) {
        res += Math.pow(this.arr[index] - otherVector.arr[index], 2);
      }
      return res;
    }
  };
  // 欧式距离
  Vector.prototype.euclideanDistance = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }
    if (this.arr.length === otherArr.length) {
      var res = 0;
      for (var index in this.arr) {
        res += Math.pow(this.arr[index] - otherVector.arr[index], 2);
      }
      return Math.sqrt(res);
    } else {
      console.error('The two vectors are unequal in length.');
    }
  };
  // 归一化处理
  Vector.prototype.normalize = function () {
    var res = [];
    var cloneArr = clone(this.arr);
    cloneArr.sort(function (a, b) {
      return a - b;
    });
    var max = cloneArr[cloneArr.length - 1];
    var min = cloneArr[0];
    for (var index in this.arr) {
      res[index] = (this.arr[index] - min) / (max - min);
    }
    return new Vector(res);
  };
  // 2范数 or 模长
  Vector.prototype.norm2 = function () {
    var _a;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return 0;
    }
    var res = 0;
    for (var index in this.arr) {
      res += Math.pow(this.arr[index], 2);
    }
    return Math.sqrt(res);
  };
  // 两个向量的点积
  Vector.prototype.dot = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }
    if (this.arr.length === otherArr.length) {
      var res = 0;
      for (var index in this.arr) {
        res += this.arr[index] * otherVector.arr[index];
      }
      return res;
    } else {
      console.error('The two vectors are unequal in length.');
    }
  };
  // 两个向量比较
  Vector.prototype.equal = function (otherVector) {
    var _a;
    var otherArr = otherVector.arr;
    if (((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) !== (otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return false;
    }
    for (var index in this.arr) {
      if (this.arr[index] !== otherArr[index]) {
        return false;
      }
    }
    return true;
  };
  return Vector;
}();
export default Vector;