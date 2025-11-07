import { Typography } from 'antd';
import classnames from 'classnames';
import React from 'react';
// User should not care about internal state.
// Which should pass by context instead.
export const GroupTitleContext = /*#__PURE__*/React.createContext(null);
const GroupTitle = ({
  children
}) => {
  const {
    prefixCls
  } = React.useContext(GroupTitleContext);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(`${prefixCls}-group-title`)
  }, children && /*#__PURE__*/React.createElement(Typography.Text, null, children));
};
export default GroupTitle;