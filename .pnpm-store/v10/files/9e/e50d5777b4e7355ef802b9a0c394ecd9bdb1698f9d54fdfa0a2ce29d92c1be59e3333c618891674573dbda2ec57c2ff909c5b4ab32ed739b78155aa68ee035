"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proFieldParsingText = exports.objectToMap = exports.ProFieldBadgeColor = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 获取类型的 type
 *
 * @param obj
 */
function getType(obj) {
  // @ts-ignore
  var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
  if (type === 'string' && (0, _typeof2.default)(obj) === 'object') return 'object'; // Let "new String('')" return 'object'
  if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null
  if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined
  return type;
}
var ProFieldBadgeColor = exports.ProFieldBadgeColor = function ProFieldBadgeColor(_ref) {
  var color = _ref.color,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
    color: color,
    text: children
  });
};
var objectToMap = exports.objectToMap = function objectToMap(value) {
  if (getType(value) === 'map') {
    return value;
  }
  return new Map(Object.entries(value || {}));
};
var TableStatus = {
  Success: function Success(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "success",
      text: children
    });
  },
  Error: function Error(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "error",
      text: children
    });
  },
  Default: function Default(_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "default",
      text: children
    });
  },
  Processing: function Processing(_ref5) {
    var children = _ref5.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "processing",
      text: children
    });
  },
  Warning: function Warning(_ref6) {
    var children = _ref6.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "warning",
      text: children
    });
  },
  success: function success(_ref7) {
    var children = _ref7.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "success",
      text: children
    });
  },
  error: function error(_ref8) {
    var children = _ref8.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "error",
      text: children
    });
  },
  default: function _default(_ref9) {
    var children = _ref9.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "default",
      text: children
    });
  },
  processing: function processing(_ref10) {
    var children = _ref10.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "processing",
      text: children
    });
  },
  warning: function warning(_ref11) {
    var children = _ref11.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: "warning",
      text: children
    });
  }
};
/**
 * 转化 text 和 valueEnum 通过 type 来添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 纯净模式，不增加 status
 */
var proFieldParsingText = exports.proFieldParsingText = function proFieldParsingText(text, valueEnumParams, key) {
  if (Array.isArray(text)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Space, {
      split: ",",
      size: 2,
      wrap: true,
      children: text.map(function (value, index) {
        return (
          // @ts-ignore
          proFieldParsingText(value, valueEnumParams, index)
        );
      })
    }, key);
  }
  var valueEnum = objectToMap(valueEnumParams);
  if (!valueEnum.has(text) && !valueEnum.has("".concat(text))) {
    // @ts-ignore
    return (text === null || text === void 0 ? void 0 : text.label) || text;
  }
  var domText = valueEnum.get(text) || valueEnum.get("".concat(text));
  if (!domText) {
    // @ts-ignore
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
      children: (text === null || text === void 0 ? void 0 : text.label) || text
    }, key);
  }
  var status = domText.status,
    color = domText.color;
  var Status = TableStatus[status || 'Init'];
  // 如果类型存在优先使用类型
  if (Status) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Status, {
      children: domText.text
    }, key);
  }

  // 如果不存在使用颜色
  if (color) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ProFieldBadgeColor, {
      color: color,
      children: domText.text
    }, key);
  }
  // 什么都没有使用 text
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
    children: domText.text || domText
  }, key);
};