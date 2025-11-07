import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, message, Modal, notification, theme } from 'antd';
import { memo, useEffect, useMemo } from 'react';
import { useThemeMode } from "../../hooks";
import { jsxs as _jsxs } from "react/jsx-runtime";
var AntdProvider = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    themeProp = _ref.theme,
    prefixCls = _ref.prefixCls,
    getStaticInstance = _ref.getStaticInstance,
    staticInstanceConfig = _ref.staticInstanceConfig;
  var _useThemeMode = useThemeMode(),
    appearance = _useThemeMode.appearance,
    isDarkMode = _useThemeMode.isDarkMode;
  var _message$useMessage = message.useMessage(staticInstanceConfig === null || staticInstanceConfig === void 0 ? void 0 : staticInstanceConfig.message),
    _message$useMessage2 = _slicedToArray(_message$useMessage, 2),
    messageInstance = _message$useMessage2[0],
    messageContextHolder = _message$useMessage2[1];
  var _notification$useNoti = notification.useNotification(staticInstanceConfig === null || staticInstanceConfig === void 0 ? void 0 : staticInstanceConfig.notification),
    _notification$useNoti2 = _slicedToArray(_notification$useNoti, 2),
    notificationInstance = _notification$useNoti2[0],
    notificationContextHolder = _notification$useNoti2[1];
  var _Modal$useModal = Modal.useModal(),
    _Modal$useModal2 = _slicedToArray(_Modal$useModal, 2),
    modalInstance = _Modal$useModal2[0],
    modalContextHolder = _Modal$useModal2[1];
  useEffect(function () {
    getStaticInstance === null || getStaticInstance === void 0 || getStaticInstance({
      message: messageInstance,
      modal: modalInstance,
      notification: notificationInstance
    });
  }, []);

  // 获取 antd 主题
  var antdTheme = useMemo(function () {
    var baseAlgorithm = isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm;
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
    return _objectSpread(_objectSpread({}, antdTheme), {}, {
      algorithm: !antdTheme.algorithm ? baseAlgorithm : [baseAlgorithm].concat(_toConsumableArray(algoProp))
    });
  }, [themeProp, isDarkMode]);
  return /*#__PURE__*/_jsxs(ConfigProvider, {
    prefixCls: prefixCls,
    theme: antdTheme,
    children: [messageContextHolder, notificationContextHolder, modalContextHolder, children]
  });
});
AntdProvider.displayName = 'AntdProvider';
export default AntdProvider;