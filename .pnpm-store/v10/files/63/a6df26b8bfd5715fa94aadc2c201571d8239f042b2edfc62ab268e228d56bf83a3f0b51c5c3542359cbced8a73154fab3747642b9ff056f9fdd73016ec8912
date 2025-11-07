"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _createField = require("../../BaseForm/createField");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["rules", "name", "phoneName", "fieldProps", "onTiming", "captchaTextRender", "captchaProps"];
var BaseProFormCaptcha = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var form = _antd.Form.useFormInstance();
  var _useState = (0, _react.useState)(props.countDown || 60),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    timing = _useState4[0],
    setTiming = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil
  var rules = props.rules,
    name = props.name,
    phoneName = props.phoneName,
    fieldProps = props.fieldProps,
    onTiming = props.onTiming,
    _props$captchaTextRen = props.captchaTextRender,
    captchaTextRender = _props$captchaTextRen === void 0 ? function (paramsTiming, paramsCount) {
      return paramsTiming ? "".concat(paramsCount, " \u79D2\u540E\u91CD\u65B0\u83B7\u53D6") : '获取验证码';
    } : _props$captchaTextRen,
    captchaProps = props.captchaProps,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var onGetCaptcha = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(mobile) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return restProps.onGetCaptcha(mobile);
          case 4:
            setLoading(false);
            setTiming(true);
            _context.next = 13;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            setTiming(false);
            setLoading(false);
            // eslint-disable-next-line no-console
            console.log(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function onGetCaptcha(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * 暴露ref方法
   */
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      startTiming: function startTiming() {
        return setTiming(true);
      },
      endTiming: function endTiming() {
        return setTiming(false);
      }
    };
  });
  (0, _react.useEffect)(function () {
    var interval = 0;
    var countDown = props.countDown;
    if (timing) {
      interval = window.setInterval(function () {
        setCount(function (preSecond) {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval);
            // 重置秒数
            return countDown || 60;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return function () {
      return clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timing]);
  (0, _react.useEffect)(function () {
    if (onTiming) {
      onTiming(count);
    }
  }, [count, onTiming]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), {}, {
      display: 'flex',
      alignItems: 'center'
    }),
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
      style: (0, _objectSpread2.default)({
        flex: 1,
        transition: 'width .3s',
        marginRight: 8
      }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style)
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      style: {
        display: 'block'
      },
      disabled: timing,
      loading: loading
    }, captchaProps), {}, {
      onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
        var _mobile;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!phoneName) {
                _context2.next = 9;
                break;
              }
              _context2.next = 4;
              return form.validateFields([phoneName].flat(1));
            case 4:
              _mobile = form.getFieldValue([phoneName].flat(1));
              _context2.next = 7;
              return onGetCaptcha(_mobile);
            case 7:
              _context2.next = 11;
              break;
            case 9:
              _context2.next = 11;
              return onGetCaptcha('');
            case 11:
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              // eslint-disable-next-line no-console
              console.log(_context2.t0);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 13]]);
      })),
      children: captchaTextRender(timing, count)
    }))]
  });
});
var ProFormCaptcha = (0, _createField.createField)(BaseProFormCaptcha);
var _default = exports.default = ProFormCaptcha;