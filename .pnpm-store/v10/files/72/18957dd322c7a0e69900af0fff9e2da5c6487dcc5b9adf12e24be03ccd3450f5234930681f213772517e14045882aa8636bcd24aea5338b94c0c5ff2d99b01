import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';
import React, { useContext } from 'react';

/**
 * 默认的 index 列容器，提供一个好看的 index
 *
 * @param param0
 */
import { jsx as _jsx } from "react/jsx-runtime";
var IndexColumn = function IndexColumn(_ref, ref) {
  var _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    children = _ref.children;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-field-index-column');

  // css
  var _useStyle = useStyle('IndexColumn', function () {
      return _defineProperty({}, ".".concat(className), {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        '&-border': {
          color: '#fff',
          fontSize: '12px',
          lineHeight: '12px',
          backgroundColor: '#314659',
          borderRadius: '9px',
          '&.top-three': {
            backgroundColor: '#979797'
          }
        }
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    ref: ref,
    className: classnames(className, hashId, _defineProperty(_defineProperty({}, "".concat(className, "-border"), border), 'top-three', children > 3)),
    children: children
  }));
};
export default /*#__PURE__*/React.forwardRef(IndexColumn);