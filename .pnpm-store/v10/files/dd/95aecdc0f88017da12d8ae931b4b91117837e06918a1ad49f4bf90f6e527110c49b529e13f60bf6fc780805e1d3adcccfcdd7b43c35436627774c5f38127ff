import { Flex, Typography } from 'antd';
import classnames from 'classnames';
import React from 'react';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import useStyle from "./style";
function Welcome(props, ref) {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    style,
    variant = 'filled',
    // Semantic
    classNames = {},
    styles = {},
    // Layout
    icon,
    title,
    description,
    extra
  } = props;

  // ============================= MISC =============================
  const {
    direction,
    getPrefixCls
  } = useXProviderContext();
  const prefixCls = getPrefixCls('welcome', customizePrefixCls);

  // ======================= Component Config =======================
  const contextConfig = useXComponentConfig('welcome');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  // ============================= Icon =============================
  const iconNode = React.useMemo(() => {
    if (!icon) {
      return null;
    }
    let iconEle = icon;
    if (typeof icon === 'string' && icon.startsWith('http')) {
      iconEle = /*#__PURE__*/React.createElement("img", {
        src: icon,
        alt: "icon"
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-icon`, contextConfig.classNames.icon, classNames.icon),
      style: styles.icon
    }, iconEle);
  }, [icon]);
  const titleNode = React.useMemo(() => {
    if (!title) {
      return null;
    }
    return /*#__PURE__*/React.createElement(Typography.Title, {
      level: 4,
      className: classnames(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
      style: styles.title
    }, title);
  }, [title]);
  const extraNode = React.useMemo(() => {
    if (!extra) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-extra`, contextConfig.classNames.extra, classNames.extra),
      style: styles.extra
    }, extra);
  }, [extra]);

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/React.createElement(Flex, {
    ref: ref,
    className: classnames(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, `${prefixCls}-${variant}`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }),
    style: style
  }, iconNode, /*#__PURE__*/React.createElement(Flex, {
    vertical: true,
    className: `${prefixCls}-content-wrapper`
  }, extra ? /*#__PURE__*/React.createElement(Flex, {
    align: "flex-start",
    className: `${prefixCls}-title-wrapper`
  }, titleNode, extraNode) : titleNode, description && /*#__PURE__*/React.createElement(Typography.Text, {
    className: classnames(`${prefixCls}-description`, contextConfig.classNames.description, classNames.description),
    style: styles.description
  }, description))));
}
const ForwardWelcome = /*#__PURE__*/React.forwardRef(Welcome);
if (process.env.NODE_ENV !== 'production') {
  ForwardWelcome.displayName = 'Welcome';
}
export default ForwardWelcome;