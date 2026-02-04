"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _antd = require("antd");
var _react = require("react");
var _hooks = require("../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
var AntdProvider = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var children = _ref.children,
    themeProp = _ref.theme,
    prefixCls = _ref.prefixCls,
    getStaticInstance = _ref.getStaticInstance,
    staticInstanceConfig = _ref.staticInstanceConfig;
  var _useThemeMode = (0, _hooks.useThemeMode)(),
    appearance = _useThemeMode.appearance,
    isDarkMode = _useThemeMode.isDarkMode;
  var _message$useMessage = _antd.message.useMessage(staticInstanceConfig === null || staticInstanceConfig === void 0 ? void 0 : staticInstanceConfig.message),
    _message$useMessage2 = (0, _slicedToArray2.default)(_message$useMessage, 2),
    messageInstance = _message$useMessage2[0],
    messageContextHolder = _message$useMessage2[1];
  var _notification$useNoti = _antd.notification.useNotification(staticInstanceConfig === null || staticInstanceConfig === void 0 ? void 0 : staticInstanceConfig.notification),
    _notification$useNoti2 = (0, _slicedToArray2.default)(_notification$useNoti, 2),
    notificationInstance = _notification$useNoti2[0],
    notificationContextHolder = _notification$useNoti2[1];
  var _Modal$useModal = _antd.Modal.useModal(),
    _Modal$useModal2 = (0, _slicedToArray2.default)(_Modal$useModal, 2),
    modalInstance = _Modal$useModal2[0],
    modalContextHolder = _Modal$useModal2[1];
  (0, _react.useEffect)(function () {
    getStaticInstance === null || getStaticInstance === void 0 || getStaticInstance({
      message: messageInstance,
      modal: modalInstance,
      notification: notificationInstance
    });
  }, []);

  // 获取 antd 主题
  var antdTheme = (0, _react.useMemo)(function () {
    var baseAlgorithm = isDarkMode ? _antd.theme.darkAlgorithm : _antd.theme.defaultAlgorithm;
    var antdTheme = themeProp;
    if (typeof themeProp === 'function') {
      antdTheme = themeProp(appearance);
    }
    if (!antdTheme) {
      return {
        algorithm: baseAlgorithm
      };
    }

    // 如果有 themeProp 说明是外部传入的 theme，需要对算法做一个合并处理，因此先把 themeProp 的算法规整为一个数组
    var algoProp = !antdTheme.algorithm ? [] : antdTheme.algorithm instanceof Array ? antdTheme.algorithm : [antdTheme.algorithm];
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, antdTheme), {}, {
      algorithm: !antdTheme.algorithm ? baseAlgorithm : [baseAlgorithm].concat((0, _toConsumableArray2.default)(algoProp))
    });
  }, [themeProp, isDarkMode]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.ConfigProvider, {
    prefixCls: prefixCls,
    theme: antdTheme,
    children: [messageContextHolder, notificationContextHolder, modalContextHolder, children]
  });
});
AntdProvider.displayName = 'AntdProvider';
var _default = exports.default = AntdProvider;