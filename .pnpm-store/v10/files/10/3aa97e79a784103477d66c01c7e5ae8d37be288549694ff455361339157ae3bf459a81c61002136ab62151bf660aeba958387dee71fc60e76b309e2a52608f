"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _warning = require("rc-util/lib/warning");
var _react = require("react");
var _BaseForm = require("../../BaseForm");
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onFinish", "step", "formRef", "title", "stepProps"];
function StepForm(stepNativeProps) {
  var formRef = (0, _react.useRef)();
  var context = (0, _react.useContext)(_index.StepsFormProvide);
  var stepContext = (0, _react.useContext)(_index.StepFormProvide);
  var props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, stepNativeProps), stepContext);
  var onFinish = props.onFinish,
    step = props.step,
    propFormRef = props.formRef,
    title = props.title,
    stepProps = props.stepProps,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  (0, _warning.noteOnce)(!restProps.submitter, 'StepForm 不包含提交按钮，请在 StepsForm 上');

  /** 重置 formRef */
  (0, _react.useImperativeHandle)(propFormRef, function () {
    return formRef.current;
  }, [propFormRef === null || propFormRef === void 0 ? void 0 : propFormRef.current]);

  /** Dom 不存在的时候解除挂载 */
  (0, _react.useEffect)(function () {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread2.default)({
    formRef: formRef,
    onFinish: ( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(values) {
        var success;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
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
  }, (0, _omit.default)(restProps, ['layoutType', 'columns'])));
}
var _default = exports.default = StepForm;