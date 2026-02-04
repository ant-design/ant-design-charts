'use strict';

var self = module.exports;

module.exports.isNumber = function (x) {
  return (typeof x === 'number');
};

module.exports.findMin = function (arr) {
  if (arr.length === 0) {
    return Infinity;
  }

  var curr = arr[0];
  for (var i = 1; i < arr.length; i++) {
    curr = Math.min(curr, arr[i]);
  }
  return curr;
};

module.exports.findMax = function (arr) {
  if (arr.length === 0) {
    return -Infinity;
  }

  var curr = arr[0];
  for (var i = 1; i < arr.length; i++) {
    curr = Math.max(curr, arr[i]);
  }
  return curr;
};

module.exports.findMinMulti = function (arr) {
  var curr = self.findMin(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    curr = Math.min(curr, self.findMin(arr[i]));
  }
  return curr;
};

module.exports.findMaxMulti = function (arr) {
  var curr = self.findMax(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    curr = Math.max(curr, self.findMax(arr[i]));
  }
  return curr;
};

module.exports.inside = function (min, max, x) {
  return (min <= x) && (x <= max);
};
