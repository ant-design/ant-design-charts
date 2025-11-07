import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["onFinish", "step", "formRef", "title", "stepProps"];
import omit from "rc-util/es/omit";
import { noteOnce } from "rc-util/es/warning";
import { useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { BaseForm } from "../../BaseForm";
import { StepFormProvide, StepsFormProvide } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
function StepForm(stepNativeProps) {
  var formRef = useRef();
  var context = useContext(StepsFormProvide);
  var stepContext = useContext(StepFormProvide);
  var props = _objectSpread(_objectSpread({}, stepNativeProps), stepContext);
  var onFinish = props.onFinish,
    step = props.step,
    propFormRef = props.formRef,
    title = props.title,
    stepProps = props.stepProps,
    restProps = _objectWithoutProperties(props, _excluded);
  noteOnce(!restProps.submitter, 'StepForm 不包含提交按钮，请在 StepsForm 上');

  /** 重置 formRef */
  useImperativeHandle(propFormRef, function () {
    return formRef.current;
  }, [propFormRef === null || propFormRef === void 0 ? void 0 : propFormRef.current]);

  /** Dom 不存在的时候解除挂载 */
  useEffect(function () {
    if (!(props.name || props.step)) return;
    var name = (props.name || props.step).toString();
    context === null || context === void 0 || context.regForm(name, props);
    return function () {
      context === null || context === void 0 || context.unRegForm(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (context && context !== null && context !== void 0 && context.formArrayRef) {
    context.formArrayRef.current[step || 0] = formRef;
  }
  return /*#__PURE__*/_jsx(BaseForm, _objectSpread({
    formRef: formRef,
    onFinish: ( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
        var success;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (restProps.name) {
                context === null || context === void 0 || context.onFormFinish(restProps.name, values);
              }
              if (!onFinish) {
                _context.next = 9;
                break;
              }
              context === null || context === void 0 || context.setLoading(true);
              // 如果报错，直接抛出
              _context.next = 5;
              return onFinish === null || onFinish === void 0 ? void 0 : onFinish(values);
            case 5:
              success = _context.sent;
              if (success) {
                context === null || context === void 0 || context.next();
              }
              context === null || context === void 0 || context.setLoading(false);
              return _context.abrupt("return");
            case 9:
              if (!(context !== null && context !== void 0 && context.lastStep)) context === null || context === void 0 || context.next();
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()),
    onInit: function onInit(_, form) {
      var _restProps$onInit;
      formRef.current = form;
      if (context && context !== null && context !== void 0 && context.formArrayRef) {
        context.formArrayRef.current[step || 0] = formRef;
      }
      restProps === null || restProps === void 0 || (_restProps$onInit = restProps.onInit) === null || _restProps$onInit === void 0 || _restProps$onInit.call(restProps, _, form);
    },
    layout: "vertical"
  }, omit(restProps, ['layoutType', 'columns'])));
}
export default StepForm;