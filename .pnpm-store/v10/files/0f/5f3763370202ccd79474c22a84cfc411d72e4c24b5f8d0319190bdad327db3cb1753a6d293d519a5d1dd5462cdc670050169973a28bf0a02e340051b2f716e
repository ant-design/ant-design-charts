import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "Wrapper"],
  _excluded2 = ["children", "Wrapper"];
import { Col, Row } from 'antd';
import { createContext, useContext, useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export var GridContext = /*#__PURE__*/createContext({
  grid: false,
  colProps: undefined,
  rowProps: undefined
});
export var gridHelpers = function gridHelpers(_ref) {
  var grid = _ref.grid,
    rowProps = _ref.rowProps,
    colProps = _ref.colProps;
  return {
    grid: !!grid,
    RowWrapper: function RowWrapper() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref2.children,
        Wrapper = _ref2.Wrapper,
        props = _objectWithoutProperties(_ref2, _excluded);
      if (!grid) {
        return Wrapper ? /*#__PURE__*/_jsx(Wrapper, {
          children: children
        }) : children;
      }
      return /*#__PURE__*/_jsx(Row, _objectSpread(_objectSpread(_objectSpread({
        gutter: 8
      }, rowProps), props), {}, {
        children: children
      }));
    },
    ColWrapper: function ColWrapper() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref3.children,
        Wrapper = _ref3.Wrapper,
        rest = _objectWithoutProperties(_ref3, _excluded2);
      var props = useMemo(function () {
        var originProps = _objectSpread(_objectSpread({}, colProps), rest);

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
        return Wrapper ? /*#__PURE__*/_jsx(Wrapper, {
          children: children
        }) : children;
      }
      return /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread({}, props), {}, {
        children: children
      }));
    }
  };
};
export var useGridHelpers = function useGridHelpers(props) {
  var config = useMemo(function () {
    {
      if (_typeof(props) === 'object') {
        return props;
      }
      return {
        grid: props
      };
    }
  }, [props]);
  var _useContext = useContext(GridContext),
    grid = _useContext.grid,
    colProps = _useContext.colProps;
  return useMemo(function () {
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