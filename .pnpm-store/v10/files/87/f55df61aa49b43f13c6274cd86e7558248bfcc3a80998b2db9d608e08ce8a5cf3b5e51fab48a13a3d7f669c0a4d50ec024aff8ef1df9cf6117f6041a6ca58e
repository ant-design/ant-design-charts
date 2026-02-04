"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGridHelpers = exports.gridHelpers = exports.GridContext = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "Wrapper"],
  _excluded2 = ["children", "Wrapper"];
var GridContext = exports.GridContext = /*#__PURE__*/(0, _react.createContext)({
  grid: false,
  colProps: undefined,
  rowProps: undefined
});
var gridHelpers = exports.gridHelpers = function gridHelpers(_ref) {
  var grid = _ref.grid,
    rowProps = _ref.rowProps,
    colProps = _ref.colProps;
  return {
    grid: !!grid,
    RowWrapper: function RowWrapper() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref2.children,
        Wrapper = _ref2.Wrapper,
        props = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
      if (!grid) {
        return Wrapper ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Wrapper, {
          children: children
        }) : children;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Row, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        gutter: 8
      }, rowProps), props), {}, {
        children: children
      }));
    },
    ColWrapper: function ColWrapper() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref3.children,
        Wrapper = _ref3.Wrapper,
        rest = (0, _objectWithoutProperties2.default)(_ref3, _excluded2);
      var props = (0, _react.useMemo)(function () {
        var originProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, colProps), rest);

        /**
         * `xs` takes precedence over `span`
         * avoid `span` doesn't work
         */
        if (typeof originProps.span === 'undefined' && typeof originProps.xs === 'undefined') {
          originProps.xs = 24;
        }
        return originProps;
      }, [rest]);
      if (!grid) {
        return Wrapper ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Wrapper, {
          children: children
        }) : children;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        children: children
      }));
    }
  };
};
var useGridHelpers = exports.useGridHelpers = function useGridHelpers(props) {
  var config = (0, _react.useMemo)(function () {
    {
      if ((0, _typeof2.default)(props) === 'object') {
        return props;
      }
      return {
        grid: props
      };
    }
  }, [props]);
  var _useContext = (0, _react.useContext)(GridContext),
    grid = _useContext.grid,
    colProps = _useContext.colProps;
  return (0, _react.useMemo)(function () {
    return gridHelpers({
      grid: !!(grid || config.grid),
      rowProps: config === null || config === void 0 ? void 0 : config.rowProps,
      colProps: (config === null || config === void 0 ? void 0 : config.colProps) || colProps,
      Wrapper: config === null || config === void 0 ? void 0 : config.Wrapper
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [config === null || config === void 0 ? void 0 : config.Wrapper, config.grid, grid,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify([colProps, config === null || config === void 0 ? void 0 : config.colProps, config === null || config === void 0 ? void 0 : config.rowProps])]);
};