import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["steps", "columns", "forceUpdate", "grid"];
import { useLatest } from '@ant-design/pro-utils';
import React, { useCallback, useMemo } from 'react';
import { StepsForm as ProStepsForm } from "../../../layouts/StepsForm";
import BetaSchemaForm from "../index";
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
var StepsForm = function StepsForm(_ref) {
  var steps = _ref.steps,
    columns = _ref.columns,
    forceUpdate = _ref.forceUpdate,
    grid = _ref.grid,
    props = _objectWithoutProperties(_ref, _excluded);
  var propsRef = useLatest(props);

  /**
   * Fixed StepsForm toggle step causing formRef to update
   */
  var onCurrentChange = useCallback(function (current) {
    var _propsRef$current$onC, _propsRef$current;
    (_propsRef$current$onC = (_propsRef$current = propsRef.current).onCurrentChange) === null || _propsRef$current$onC === void 0 || _propsRef$current$onC.call(_propsRef$current, current);
    forceUpdate([]);
  }, [forceUpdate, propsRef]);
  var StepDoms = useMemo(function () {
    return steps === null || steps === void 0 ? void 0 : steps.map(function (step, index) {
      return /*#__PURE__*/_createElement(BetaSchemaForm, _objectSpread(_objectSpread({
        grid: grid
      }, step), {}, {
        // eslint-disable-next-line react/no-array-index-key
        key: index,
        layoutType: "StepForm",
        columns: columns[index]
      }));
    });
  }, [columns, grid, steps]);
  return /*#__PURE__*/_jsx(ProStepsForm, _objectSpread(_objectSpread({}, props), {}, {
    onCurrentChange: onCurrentChange,
    children: StepDoms
  }));
};
export default StepsForm;