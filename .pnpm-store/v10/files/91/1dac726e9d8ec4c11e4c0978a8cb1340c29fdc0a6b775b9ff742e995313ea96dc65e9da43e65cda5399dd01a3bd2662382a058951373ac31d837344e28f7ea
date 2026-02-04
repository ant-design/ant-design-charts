"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _react = _interopRequireWildcard(require("react"));
var _StepsForm = require("../../../layouts/StepsForm");
var _index = _interopRequireDefault(require("../index"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["steps", "columns", "forceUpdate", "grid"];
var StepsForm = function StepsForm(_ref) {
  var steps = _ref.steps,
    columns = _ref.columns,
    forceUpdate = _ref.forceUpdate,
    grid = _ref.grid,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var propsRef = (0, _proUtils.useLatest)(props);

  /**
   * Fixed StepsForm toggle step causing formRef to update
   */
  var onCurrentChange = (0, _react.useCallback)(function (current) {
    var _propsRef$current$onC, _propsRef$current;
    (_propsRef$current$onC = (_propsRef$current = propsRef.current).onCurrentChange) === null || _propsRef$current$onC === void 0 || _propsRef$current$onC.call(_propsRef$current, current);
    forceUpdate([]);
  }, [forceUpdate, propsRef]);
  var StepDoms = (0, _react.useMemo)(function () {
    return steps === null || steps === void 0 ? void 0 : steps.map(function (step, index) {
      return /*#__PURE__*/(0, _react.createElement)(_index.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        grid: grid
      }, step), {}, {
        // eslint-disable-next-line react/no-array-index-key
        key: index,
        layoutType: "StepForm",
        columns: columns[index]
      }));
    });
  }, [columns, grid, steps]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_StepsForm.StepsForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    onCurrentChange: onCurrentChange,
    children: StepDoms
  }));
};
var _default = exports.default = StepsForm;