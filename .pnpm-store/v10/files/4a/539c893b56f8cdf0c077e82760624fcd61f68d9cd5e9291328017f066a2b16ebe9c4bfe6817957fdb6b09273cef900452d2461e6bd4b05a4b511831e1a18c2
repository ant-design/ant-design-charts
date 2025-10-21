import _extends from "@babel/runtime/helpers/esm/extends";
import { Button } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
export const ActionButtonContext = /*#__PURE__*/React.createContext(null);
export function ActionButton(props, ref) {
  const {
    className,
    action,
    onClick,
    ...restProps
  } = props;
  const context = React.useContext(ActionButtonContext);
  const {
    prefixCls,
    disabled: rootDisabled
  } = context;
  const mergedDisabled = restProps.disabled ?? rootDisabled ?? context[`${action}Disabled`];
  return /*#__PURE__*/React.createElement(Button, _extends({
    type: "text"
  }, restProps, {
    ref: ref,
    onClick: e => {
      if (mergedDisabled) {
        return;
      }
      context[action]?.();
      onClick?.(e);
    },
    className: classNames(prefixCls, className, {
      [`${prefixCls}-disabled`]: mergedDisabled
    })
  }));
}
export default /*#__PURE__*/React.forwardRef(ActionButton);