"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalForm = ModalForm;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _set = require("rc-util/lib/utils/set");
var _warning = require("rc-util/lib/warning");
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _BaseForm = require("../../BaseForm");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "trigger", "onVisibleChange", "onOpenChange", "modalProps", "onFinish", "submitTimeout", "title", "width", "visible", "open"];
function ModalForm(_ref) {
  var _context$locale3, _context$locale4;
  var children = _ref.children,
    trigger = _ref.trigger,
    onVisibleChange = _ref.onVisibleChange,
    onOpenChange = _ref.onOpenChange,
    modalProps = _ref.modalProps,
    onFinish = _ref.onFinish,
    submitTimeout = _ref.submitTimeout,
    title = _ref.title,
    width = _ref.width,
    propVisible = _ref.visible,
    propsOpen = _ref.open,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  (0, _warning.noteOnce)(
  // eslint-disable-next-line @typescript-eslint/dot-notation
  !rest['footer'] || !(modalProps !== null && modalProps !== void 0 && modalProps.footer), 'ModalForm 是一个 ProForm 的特殊布局，如果想自定义按钮，请使用 submit.render 自定义。');
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    forceUpdate = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useMergedState = (0, _useMergedState3.default)(!!propVisible, {
      value: propsOpen || propVisible,
      onChange: onOpenChange || onVisibleChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  var footerRef = (0, _react.useRef)(null);
  var footerDomRef = (0, _react.useCallback)(function (element) {
    if (footerRef.current === null && element) {
      forceUpdate([]);
    }
    footerRef.current = element;
  }, []);
  var formRef = (0, _react.useRef)();
  var resetFields = (0, _react.useCallback)(function () {
    var _ref2, _rest$form, _rest$formRef;
    var form = (_ref2 = (_rest$form = rest.form) !== null && _rest$form !== void 0 ? _rest$form : (_rest$formRef = rest.formRef) === null || _rest$formRef === void 0 ? void 0 : _rest$formRef.current) !== null && _ref2 !== void 0 ? _ref2 : formRef.current;
    // 重置表单
    if (form && modalProps !== null && modalProps !== void 0 && modalProps.destroyOnClose) {
      form.resetFields();
    }
  }, [modalProps === null || modalProps === void 0 ? void 0 : modalProps.destroyOnClose, rest.form, rest.formRef]);
  (0, _react.useImperativeHandle)(rest.formRef, function () {
    return formRef.current;
  }, [formRef.current]);
  (0, _react.useEffect)(function () {
    if (propsOpen || propVisible) {
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(true);
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propVisible, propsOpen]);
  var triggerDom = (0, _react.useMemo)(function () {
    if (!trigger) {
      return null;
    }
    return /*#__PURE__*/_react.default.cloneElement(trigger, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      key: 'trigger'
    }, trigger.props), {}, {
      onClick: function () {
        var _onClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(e) {
          var _trigger$props, _trigger$props$onClic;
          return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setOpen(!open);
                (_trigger$props = trigger.props) === null || _trigger$props === void 0 || (_trigger$props$onClic = _trigger$props.onClick) === null || _trigger$props$onClic === void 0 || _trigger$props$onClic.call(_trigger$props, e);
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }()
    }));
  }, [setOpen, trigger, open]);
  var submitterConfig = (0, _react.useMemo)(function () {
    var _ref3, _modalProps$okText, _context$locale, _ref4, _modalProps$cancelTex, _context$locale2, _rest$submitter;
    if (rest.submitter === false) {
      return false;
    }
    return (0, _set.merge)({
      searchConfig: {
        submitText: (_ref3 = (_modalProps$okText = modalProps === null || modalProps === void 0 ? void 0 : modalProps.okText) !== null && _modalProps$okText !== void 0 ? _modalProps$okText : (_context$locale = context.locale) === null || _context$locale === void 0 || (_context$locale = _context$locale.Modal) === null || _context$locale === void 0 ? void 0 : _context$locale.okText) !== null && _ref3 !== void 0 ? _ref3 : '确认',
        resetText: (_ref4 = (_modalProps$cancelTex = modalProps === null || modalProps === void 0 ? void 0 : modalProps.cancelText) !== null && _modalProps$cancelTex !== void 0 ? _modalProps$cancelTex : (_context$locale2 = context.locale) === null || _context$locale2 === void 0 || (_context$locale2 = _context$locale2.Modal) === null || _context$locale2 === void 0 ? void 0 : _context$locale2.cancelText) !== null && _ref4 !== void 0 ? _ref4 : '取消'
      },
      resetButtonProps: {
        preventDefault: true,
        // 提交表单loading时，不可关闭弹框
        disabled: submitTimeout ? loading : undefined,
        onClick: function onClick(e) {
          var _modalProps$onCancel;
          setOpen(false);
          // fix: #6006 点击取消按钮时,那么必然会触发弹窗关闭，我们无需在 此处重置表单，只需在弹窗关闭时重置即可
          modalProps === null || modalProps === void 0 || (_modalProps$onCancel = modalProps.onCancel) === null || _modalProps$onCancel === void 0 || _modalProps$onCancel.call(modalProps, e);
        }
      }
    }, (_rest$submitter = rest.submitter) !== null && _rest$submitter !== void 0 ? _rest$submitter : {});
  }, [(_context$locale3 = context.locale) === null || _context$locale3 === void 0 || (_context$locale3 = _context$locale3.Modal) === null || _context$locale3 === void 0 ? void 0 : _context$locale3.cancelText, (_context$locale4 = context.locale) === null || _context$locale4 === void 0 || (_context$locale4 = _context$locale4.Modal) === null || _context$locale4 === void 0 ? void 0 : _context$locale4.okText, modalProps, rest.submitter, setOpen, loading, submitTimeout]);
  var contentRender = (0, _react.useCallback)(function (formDom, submitter) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [formDom, footerRef.current && submitter ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
        children: /*#__PURE__*/(0, _reactDom.createPortal)(submitter, footerRef.current)
      }, "submitter") : submitter]
    });
  }, []);
  var onFinishHandle = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2(values) {
      var response, timer, result;
      return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            response = onFinish === null || onFinish === void 0 ? void 0 : onFinish(values);
            if (submitTimeout && response instanceof Promise) {
              setLoading(true);
              timer = setTimeout(function () {
                return setLoading(false);
              }, submitTimeout);
              response.finally(function () {
                clearTimeout(timer);
                setLoading(false);
              });
            }
            _context2.next = 4;
            return response;
          case 4:
            result = _context2.sent;
            // 返回真值，关闭弹框
            if (result) {
              setOpen(false);
            }
            return _context2.abrupt("return", result);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [onFinish, setOpen, submitTimeout]);
  var modalOpenProps = (0, _proUtils.openVisibleCompatible)(open);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Modal, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
      title: title,
      width: width || 800
    }, modalProps), modalOpenProps), {}, {
      onCancel: function onCancel(e) {
        var _modalProps$onCancel2;
        // 提交表单loading时，阻止弹框关闭
        if (submitTimeout && loading) return;
        setOpen(false);
        modalProps === null || modalProps === void 0 || (_modalProps$onCancel2 = modalProps.onCancel) === null || _modalProps$onCancel2 === void 0 || _modalProps$onCancel2.call(modalProps, e);
      },
      afterClose: function afterClose() {
        var _modalProps$afterClos;
        resetFields();
        if (open) {
          setOpen(false);
        }
        modalProps === null || modalProps === void 0 || (_modalProps$afterClos = modalProps.afterClose) === null || _modalProps$afterClos === void 0 || _modalProps$afterClos.call(modalProps);
      },
      footer: rest.submitter !== false ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: footerDomRef,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }) : null,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        formComponentType: "ModalForm",
        layout: "vertical"
      }, rest), {}, {
        onInit: function onInit(_, form) {
          var _rest$onInit;
          if (rest.formRef) {
            rest.formRef.current = form;
          }
          rest === null || rest === void 0 || (_rest$onInit = rest.onInit) === null || _rest$onInit === void 0 || _rest$onInit.call(rest, _, form);
          formRef.current = form;
        },
        formRef: formRef,
        submitter: submitterConfig,
        onFinish: ( /*#__PURE__*/function () {
          var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3(values) {
            var result;
            return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return onFinishHandle(values);
                case 2:
                  result = _context3.sent;
                  return _context3.abrupt("return", result);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x3) {
            return _ref6.apply(this, arguments);
          };
        }()),
        contentRender: contentRender,
        children: children
      }))
    })), triggerDom]
  });
}