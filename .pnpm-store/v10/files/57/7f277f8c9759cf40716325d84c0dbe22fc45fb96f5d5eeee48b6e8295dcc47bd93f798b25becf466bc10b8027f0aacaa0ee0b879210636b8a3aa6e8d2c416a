function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { DumiDemo, useRouteMeta } from 'dumi';
import React, { useCallback, useEffect, useState } from 'react';
export var DumiDemoGrid = function DumiDemoGrid(props) {
  var _useRouteMeta = useRouteMeta(),
    fm = _useRouteMeta.frontmatter;
  var generator = useCallback(function (fm, oItems) {
    var _fm$demo;
    var cols = [];
    var items = process.env.NODE_ENV === 'production' ?
    // hide debug demo in production
    oItems.filter(function (d) {
      return !d.previewerProps.debug;
    }) : oItems;
    if ((_fm$demo = fm.demo) !== null && _fm$demo !== void 0 && _fm$demo.cols && fm.demo.cols > 1 && (
    // compatible for ssr env
    typeof window === 'undefined' || window.innerWidth > 1024)) {
      for (var i = 0; i < items.length; i += fm.demo.cols) {
        items.slice(i, i + fm.demo.cols).forEach(function (item, j) {
          var _cols$j;
          (_cols$j = cols[j]) !== null && _cols$j !== void 0 ? _cols$j : cols[j] = [];
          cols[j].push(item);
        });
      }
      return cols;
    } else {
      cols.push(items);
    }
    return cols;
  }, []);
  var _useState = useState(function () {
      return generator(fm, props.items);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    cols = _useState2[0],
    setCols = _useState2[1];
  useEffect(function () {
    var handler = function handler() {
      return setCols(generator(fm, props.items));
    };
    window.addEventListener('resize', handler);
    handler();
    return function () {
      return window.removeEventListener('resize', handler);
    };
  }, [props.items, fm.demo]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      margin: -8
    },
    "data-dumi-demo-grid": true
  }, cols.map(function (col, i) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        flex: 1,
        padding: 8,
        width: 0
      },
      key: String(i)
    }, col.map(function (item) {
      if (props.demoRender) {
        return props.demoRender(item);
      }
      return /*#__PURE__*/React.createElement(DumiDemo, _extends({
        key: item.demo.id
      }, item));
    }));
  }));
};
if (process.env.NODE_ENV !== 'production') {
  DumiDemoGrid.displayName = 'DumiDemoGrid';
}