"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerForm = DrawerForm;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _set = require("rc-util/lib/utils/set");
var _warning = require("rc-util/lib/warning");
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _BaseForm = require("../../BaseForm");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "trigger", "onVisibleChange", "drawerProps", "onFinish", "submitTimeout", "title", "width", "resize", "onOpenChange", "visible", "open"];
function DrawerForm(_ref) {
  var _context$locale3, _context$locale4;
  var children = _ref.children,
    trigger = _ref.trigger,
    onVisibleChange = _ref.onVisibleChange,
    drawerProps = _ref.drawerProps,
    onFinish = _ref.onFinish,
    submitTimeout = _ref.submitTimeout,
    title = _ref.title,
    width = _ref.width,
    resize = _ref.resize,
    onOpenChange = _ref.onOpenChange,
    propVisible = _ref.visible,
    propsOpen = _ref.open,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  (0, _warning.noteOnce)(
  // eslint-disable-next-line @typescript-eslint/dot-notation
  !rest['footer'] || !(drawerProps !== null && drawerProps !== void 0 && drawerProps.footer), 'DrawerForm 是一个 ProForm 的特殊布局，如果想自定义按钮，请使用 submit.render 自定义。');
  var resizeInfo = _react.default.useMemo(function () {
    var _resize$onResize, _resize$maxWidth, _resize$minWidth;
    var defaultResize = {
      onResize: function onResize() {},
      maxWidth: (0, _proUtils.isBrowser)() ? window.innerWidth * 0.8 : undefined,
      minWidth: 300
    };
    if (typeof resize === 'boolean') {
      if (resize) {
        return defaultResize;
      } else {
        return {};
      }
    }
    return (0, _proUtils.omitUndefined)({
      onResize: (_resize$onResize = resize === null || resize === void 0 ? void 0 : resize.onResize) !== null && _resize$onResize !== void 0 ? _resize$onResize : defaultResize.onResize,
      maxWidth: (_resize$maxWidth = resize === null || resize === void 0 ? void 0 : resize.maxWidth) !== null && _resize$maxWidth !== void 0 ? _resize$maxWidth : defaultResize.maxWidth,
      minWidth: (_resize$minWidth = resize === null || resize === void 0 ? void 0 : resize.minWidth) !== null && _resize$minWidth !== void 0 ? _resize$minWidth : defaultResize.minWidth
    });
  }, [resize]);
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-form-drawer');
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getCls = function getCls(className) {
    return "".concat(baseClassName, "-").concat(className, " ").concat(hashId);
  };
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    forceUpdate = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    resizableDrawer = _useState6[0],
    setResizableDrawer = _useState6[1];
  var _useState7 = (0, _react.useState)(width ? width : resize ? resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.minWidth : 800),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    drawerWidth = _useState8[0],
    setDrawerWidth = _useState8[1];
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
    var _ref2, _rest$formRef$current, _rest$formRef;
    var form = (_ref2 = (_rest$formRef$current = (_rest$formRef = rest.formRef) === null || _rest$formRef === void 0 ? void 0 : _rest$formRef.current) !== null && _rest$formRef$current !== void 0 ? _rest$formRef$current : rest.form) !== null && _ref2 !== void 0 ? _ref2 : formRef.current;
    // 重置表单
    if (form && drawerProps !== null && drawerProps !== void 0 && drawerProps.destroyOnClose) {
      form.resetFields();
    }
  }, [drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.destroyOnClose, rest.form, rest.formRef]);
  (0, _react.useEffect)(function () {
    if (open && (propsOpen || propVisible)) {
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(true);
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(true);
    }
    if (resizableDrawer) {
      setDrawerWidth(resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.minWidth);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propVisible, open, resizableDrawer]);
  (0, _react.useImperativeHandle)(rest.formRef, function () {
    return formRef.current;
  }, [formRef.current]);
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
                setResizableDrawer(!Object.keys(resizeInfo));
                (_trigger$props = trigger.props) === null || _trigger$props === void 0 || (_trigger$props$onClic = _trigger$props.onClick) === null || _trigger$props$onClic === void 0 || _trigger$props$onClic.call(_trigger$props, e);
              case 3:
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
  }, [setOpen, trigger, open, setResizableDrawer, resizableDrawer]);
  var submitterConfig = (0, _react.useMemo)(function () {
    var _context$locale$Modal, _context$locale, _context$locale$Modal2, _context$locale2, _rest$submitter;
    if (rest.submitter === false) {
      return false;
    }
    return (0, _set.merge)({
      searchConfig: {
        submitText: (_context$locale$Modal = (_context$locale = context.locale) === null || _context$locale === void 0 || (_context$locale = _context$locale.Modal) === null || _context$locale === void 0 ? void 0 : _context$locale.okText) !== null && _context$locale$Modal !== void 0 ? _context$locale$Modal : '确认',
        resetText: (_context$locale$Modal2 = (_context$locale2 = context.locale) === null || _context$locale2 === void 0 || (_context$locale2 = _context$locale2.Modal) === null || _context$locale2 === void 0 ? void 0 : _context$locale2.cancelText) !== null && _context$locale$Modal2 !== void 0 ? _context$locale$Modal2 : '取消'
      },
      resetButtonProps: {
        preventDefault: true,
        // 提交表单loading时，不可关闭弹框
        disabled: submitTimeout ? loading : undefined,
        onClick: function onClick(e) {
          var _drawerProps$onClose;
          setOpen(false);
          // fix: #6006 点击取消按钮时,那么必然会触发抽屉关闭，我们无需在 此处重置表单，只需在抽屉关闭时重置即可
          drawerProps === null || drawerProps === void 0 || (_drawerProps$onClose = drawerProps.onClose) === null || _drawerProps$onClose === void 0 || _drawerProps$onClose.call(drawerProps, e);
        }
      }
    }, (_rest$submitter = rest.submitter) !== null && _rest$submitter !== void 0 ? _rest$submitter : {});
  }, [rest.submitter, (_context$locale3 = context.locale) === null || _context$locale3 === void 0 || (_context$locale3 = _context$locale3.Modal) === null || _context$locale3 === void 0 ? void 0 : _context$locale3.okText, (_context$locale4 = context.locale) === null || _context$locale4 === void 0 || (_context$locale4 = _context$locale4.Modal) === null || _context$locale4 === void 0 ? void 0 : _context$locale4.cancelText, submitTimeout, loading, setOpen, drawerProps]);
  var contentRender = (0, _react.useCallback)(function (formDom, submitter) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [formDom, footerRef.current && submitter ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
        children: /*#__PURE__*/(0, _reactDom.createPortal)(submitter, footerRef.current)
      }, "submitter") : submitter]
    });
  }, []);
  var onFinishHandle = (0, _proUtils.useRefFunction)( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2(values) {
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
      return _ref3.apply(this, arguments);
    };
  }());
  var drawerOpenProps = (0, _proUtils.openVisibleCompatible)(open, onVisibleChange);
  var cbHandleMouseMove = (0, _react.useCallback)(function (e) {
    var _resizeInfo$minWidth, _resizeInfo$maxWidth;
    var offsetRight = (document.body.offsetWidth || 1000) - (e.clientX - document.body.offsetLeft);
    var minWidth = (_resizeInfo$minWidth = resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.minWidth) !== null && _resizeInfo$minWidth !== void 0 ? _resizeInfo$minWidth : width || 800;
    var maxWidth = (_resizeInfo$maxWidth = resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.maxWidth) !== null && _resizeInfo$maxWidth !== void 0 ? _resizeInfo$maxWidth : window.innerWidth * 0.8;
    if (offsetRight < minWidth) {
      setDrawerWidth(minWidth);
      return;
    }
    if (offsetRight > maxWidth) {
      setDrawerWidth(maxWidth);
      return;
    }
    setDrawerWidth(offsetRight);
  }, [resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.maxWidth, resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.minWidth, width]);
  var cbHandleMouseUp = (0, _react.useCallback)(function () {
    document.removeEventListener('mousemove', cbHandleMouseMove);
    document.removeEventListener('mouseup', cbHandleMouseUp);
  }, [cbHandleMouseMove]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
      title: title,
      width: drawerWidth
    }, drawerProps), drawerOpenProps), {}, {
      afterOpenChange: function afterOpenChange(e) {
        var _drawerProps$afterOpe;
        if (!e) resetFields();
        drawerProps === null || drawerProps === void 0 || (_drawerProps$afterOpe = drawerProps.afterOpenChange) === null || _drawerProps$afterOpe === void 0 || _drawerProps$afterOpe.call(drawerProps, e);
      },
      onClose: function onClose(e) {
        var _drawerProps$onClose2;
        // 提交表单loading时，阻止弹框关闭
        if (submitTimeout && loading) return;
        setOpen(false);
        drawerProps === null || drawerProps === void 0 || (_drawerProps$onClose2 = drawerProps.onClose) === null || _drawerProps$onClose2 === void 0 || _drawerProps$onClose2.call(drawerProps, e);
      },
      footer: rest.submitter !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: footerDomRef,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }),
      children: [resize ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)(getCls('sidebar-dragger'), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, getCls('sidebar-dragger-min-disabled'), drawerWidth === (resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.minWidth)), getCls('sidebar-dragger-max-disabled'), drawerWidth === (resizeInfo === null || resizeInfo === void 0 ? void 0 : resizeInfo.maxWidth))),
        onMouseDown: function onMouseDown(e) {
          var _resizeInfo$onResize;
          resizeInfo === null || resizeInfo === void 0 || (_resizeInfo$onResize = resizeInfo.onResize) === null || _resizeInfo$onResize === void 0 || _resizeInfo$onResize.call(resizeInfo);
          e.stopPropagation();
          e.preventDefault();
          document.addEventListener('mousemove', cbHandleMouseMove);
          document.addEventListener('mouseup', cbHandleMouseUp);
          setResizableDrawer(true);
        }
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({
          formComponentType: "DrawerForm",
          layout: "vertical"
        }, rest), {}, {
          formRef: formRef,
          onInit: function onInit(_, form) {
            var _rest$onInit;
            if (rest.formRef) {
              rest.formRef.current = form;
            }
            rest === null || rest === void 0 || (_rest$onInit = rest.onInit) === null || _rest$onInit === void 0 || _rest$onInit.call(rest, _, form);
            formRef.current = form;
          },
          submitter: submitterConfig,
          onFinish: ( /*#__PURE__*/function () {
            var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3(values) {
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
              return _ref4.apply(this, arguments);
            };
          }()),
          contentRender: contentRender,
          children: children
        }))
      })]
    })), triggerDom]
  }));
}