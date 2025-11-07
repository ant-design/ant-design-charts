import { useIntl } from '@ant-design/pro-provider';
import { ConfigProvider, Space } from 'antd';
import React, { useContext } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
    onCleanSelected = props.onCleanSelected;
  return [/*#__PURE__*/_jsx("a", {
    onClick: onCleanSelected,
    children: intl.getMessage('alert.clear', '清空')
  }, "0")];
};
function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
    selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
    onCleanSelected = _ref.onCleanSelected,
    alwaysShowAlert = _ref.alwaysShowAlert,
    selectedRows = _ref.selectedRows,
    _ref$alertInfoRender = _ref.alertInfoRender,
    alertInfoRender = _ref$alertInfoRender === void 0 ? function (_ref2) {
      var intl = _ref2.intl;
      return /*#__PURE__*/_jsxs(Space, {
        children: [intl.getMessage('alert.selected', '已选择'), selectedRowKeys.length, intl.getMessage('alert.item', '项'), "\xA0\xA0"]
      });
    } : _ref$alertInfoRender,
    _ref$alertOptionRende = _ref.alertOptionRender,
    alertOptionRender = _ref$alertOptionRende === void 0 ? defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = useIntl();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    intl: intl
  });
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-table-alert');
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (alertInfoRender === false) {
    return null;
  }
  var dom = alertInfoRender({
    intl: intl,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: onCleanSelected
  });
  if (dom === false || selectedRowKeys.length < 1 && !alwaysShowAlert) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: "".concat(className, " ").concat(hashId).trim(),
    children: /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-container ").concat(hashId).trim(),
      children: /*#__PURE__*/_jsxs("div", {
        className: "".concat(className, "-info ").concat(hashId).trim(),
        children: [/*#__PURE__*/_jsx("div", {
          className: "".concat(className, "-info-content ").concat(hashId).trim(),
          children: dom
        }), option ? /*#__PURE__*/_jsx("div", {
          className: "".concat(className, "-info-option ").concat(hashId).trim(),
          children: option
        }) : null]
      })
    })
  }));
}
export default TableAlert;