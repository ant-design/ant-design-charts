import { DownOutlined } from '@ant-design/icons';
import { ProProvider, useIntl } from '@ant-design/pro-provider';
import { omitBoolean } from '@ant-design/pro-utils';
import { ConfigProvider, Space } from 'antd';
import React, { useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var defaultCollapseRender = function defaultCollapseRender(collapsed, _, intl, hiddenNum) {
  if (collapsed) {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [intl.getMessage('tableForm.collapsed', '展开'), hiddenNum && "(".concat(hiddenNum, ")"), /*#__PURE__*/_jsx(DownOutlined, {
        style: {
          marginInlineStart: '0.5em',
          transition: '0.3s all',
          transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
        }
      })]
    });
  }
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/_jsx(DownOutlined, {
      style: {
        marginInlineStart: '0.5em',
        transition: '0.3s all',
        transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
      }
    })]
  });
};

/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */
var Actions = function Actions(props) {
  var setCollapsed = props.setCollapsed,
    _props$collapsed = props.collapsed,
    collapsed = _props$collapsed === void 0 ? false : _props$collapsed,
    submitter = props.submitter,
    style = props.style,
    hiddenNum = props.hiddenNum;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var intl = useIntl();
  var _useContext2 = useContext(ProProvider),
    hashId = _useContext2.hashId;
  var collapseRender = omitBoolean(props.collapseRender) || defaultCollapseRender;
  return /*#__PURE__*/_jsxs(Space, {
    style: style,
    size: 16,
    children: [submitter, props.collapseRender !== false && /*#__PURE__*/_jsx("a", {
      className: "".concat(getPrefixCls('pro-query-filter-collapse-button'), " ").concat(hashId).trim(),
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      },
      children: collapseRender === null || collapseRender === void 0 ? void 0 : collapseRender(collapsed, props, intl, hiddenNum)
    })]
  });
};
export default Actions;