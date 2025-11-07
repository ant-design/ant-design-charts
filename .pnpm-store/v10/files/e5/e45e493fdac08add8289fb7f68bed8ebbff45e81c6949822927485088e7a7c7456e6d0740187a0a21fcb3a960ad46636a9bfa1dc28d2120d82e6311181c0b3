function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import SourceCode from 'dumi/theme/builtins/SourceCode';
import React, { useEffect, useRef, useState } from 'react';
import "./index.less";
/**
 * simple source code editor based on textarea
 */
var SourceCodeEditor = function SourceCodeEditor(props) {
  var elm = useRef(null);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    style = _useState2[0],
    setStyle = _useState2[1];
  var _useState3 = useState(props.initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    code = _useState4[0],
    setCode = _useState4[1];

  // generate style from pre element, for adapting to the custom theme
  useEffect(function () {
    var _elm$current;
    var pre = (_elm$current = elm.current) === null || _elm$current === void 0 ? void 0 : _elm$current.querySelector('pre');
    if (pre) {
      var lineCell = pre.querySelector('.line-cell');
      var preStyle = window.getComputedStyle(pre);
      var styles = {
        fontSize: preStyle.fontSize,
        fontFamily: preStyle.fontFamily,
        lineHeight: preStyle.lineHeight,
        padding: preStyle.padding,
        margin: preStyle.margin
      };
      if (lineCell) {
        styles.paddingLeft = lineCell.offsetLeft;
      }
      setStyle(styles);
    } else {
      console.warn('[dumi] pre element not found in SourceCode component, the SourceCodeEditor will be disabled, you can report an issue to dumi repository.');
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-source-code-editor",
    ref: elm
  }, /*#__PURE__*/React.createElement(SourceCode, _extends({}, props, {
    textarea: style && /*#__PURE__*/React.createElement("textarea", {
      className: "dumi-default-source-code-editor-textarea",
      style: style,
      value: code,
      onChange: function onChange(ev) {
        var _props$onChange, _props$onTranspile;
        setCode(ev.target.value);
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, ev.target.value);
        // FIXME: remove before publish
        (_props$onTranspile = props.onTranspile) === null || _props$onTranspile === void 0 ? void 0 : _props$onTranspile.call(props, {
          err: null,
          code: ev.target.value
        });
      },
      onKeyDown: function onKeyDown(ev) {
        // support tab to space
        if (ev.key === 'Tab') {
          ev.preventDefault();
          var _elm = ev.currentTarget;
          var start = _elm.selectionStart,
            end = _elm.selectionEnd;
          var before = _elm.value.substring(0, start);
          var after = _elm.value.substring(end);
          var spaces = '  ';
          var pos = spaces.length + start;
          setCode("".concat(before).concat(spaces).concat(after));
          setTimeout(function () {
            _elm.setSelectionRange(pos, pos);
          });
        }
      },
      autoComplete: "off",
      autoCorrect: "off",
      autoSave: "off",
      spellCheck: "false"
    }),
    extra: style && props.extra
  }), code));
};
export default SourceCodeEditor;