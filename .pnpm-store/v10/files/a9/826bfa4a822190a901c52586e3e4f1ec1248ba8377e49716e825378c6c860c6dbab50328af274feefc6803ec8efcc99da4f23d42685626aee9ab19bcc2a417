"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapperRaf;

var raf = function raf(fn) {
  return +setTimeout(fn, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined') {
  raf = requestAnimationFrame;
  caf = cancelAnimationFrame;
}

function wrapperRaf(callback) {
  return raf(callback);
}

wrapperRaf.cancel = caf;