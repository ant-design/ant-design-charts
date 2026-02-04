import _extends from "@babel/runtime/helpers/esm/extends";
import classnames from 'classnames';
import React from 'react';
import { Avatar } from 'antd';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import useTypedEffect from "./hooks/useTypedEffect";
import useTypingConfig from "./hooks/useTypingConfig";
import Loading from "./loading";
import useStyle from "./style";
export const BubbleContext = /*#__PURE__*/React.createContext({});
const Bubble = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    classNames = {},
    styles = {},
    avatar,
    placement = 'start',
    loading = false,
    loadingRender,
    typing,
    content = '',
    messageRender,
    variant = 'filled',
    shape,
    onTypingComplete,
    header,
    footer,
    _key,
    ...otherHtmlProps
  } = props;
  const {
    onUpdate
  } = React.useContext(BubbleContext);

  // ============================= Refs =============================
  const divRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    nativeElement: divRef.current
  }));

  // ============================ Prefix ============================
  const {
    direction,
    getPrefixCls
  } = useXProviderContext();
  const prefixCls = getPrefixCls('bubble', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('bubble');

  // ============================ Typing ============================
  const [typingEnabled, typingStep, typingInterval, customSuffix] = useTypingConfig(typing);
  const [typedContent, isTyping] = useTypedEffect(content, typingEnabled, typingStep, typingInterval);
  React.useEffect(() => {
    onUpdate?.();
  }, [typedContent]);
  const triggerTypingCompleteRef = React.useRef(false);
  React.useEffect(() => {
    if (!isTyping && !loading) {
      // StrictMode will trigger this twice,
      // So we need a flag to avoid that
      if (!triggerTypingCompleteRef.current) {
        triggerTypingCompleteRef.current = true;
        onTypingComplete?.();
      }
    } else {
      triggerTypingCompleteRef.current = false;
    }
  }, [isTyping, loading]);

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(prefixCls, rootClassName, contextConfig.className, className, hashId, cssVarCls, `${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-typing`]: isTyping && !loading && !messageRender && !customSuffix
  });

  // ============================ Avatar ============================
  const avatarNode = React.useMemo(() => /*#__PURE__*/React.isValidElement(avatar) ? avatar : /*#__PURE__*/React.createElement(Avatar, avatar), [avatar]);

  // =========================== Content ============================
  const mergedContent = React.useMemo(() => messageRender ? messageRender(typedContent) : typedContent, [typedContent, messageRender]);
  const renderSlot = node => typeof node === 'function' ? node(typedContent, {
    key: _key
  }) : node;

  // ============================ Render ============================
  let contentNode;
  if (loading) {
    contentNode = loadingRender ? loadingRender() : /*#__PURE__*/React.createElement(Loading, {
      prefixCls: prefixCls
    });
  } else {
    contentNode = /*#__PURE__*/React.createElement(React.Fragment, null, mergedContent, isTyping && customSuffix);
  }
  let fullContent = /*#__PURE__*/React.createElement("div", {
    style: {
      ...contextConfig.styles.content,
      ...styles.content
    },
    className: classnames(`${prefixCls}-content`, `${prefixCls}-content-${variant}`, shape && `${prefixCls}-content-${shape}`, contextConfig.classNames.content, classNames.content)
  }, contentNode);
  if (header || footer) {
    fullContent = /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-content-wrapper`
    }, header && /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-header`, contextConfig.classNames.header, classNames.header),
      style: {
        ...contextConfig.styles.header,
        ...styles.header
      }
    }, renderSlot(header)), fullContent, footer && /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
      style: {
        ...contextConfig.styles.footer,
        ...styles.footer
      }
    }, renderSlot(footer)));
  }
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...contextConfig.style,
      ...style
    },
    className: mergedCls
  }, otherHtmlProps, {
    ref: divRef
  }), avatar && /*#__PURE__*/React.createElement("div", {
    style: {
      ...contextConfig.styles.avatar,
      ...styles.avatar
    },
    className: classnames(`${prefixCls}-avatar`, contextConfig.classNames.avatar, classNames.avatar)
  }, avatarNode), fullContent));
};
const ForwardBubble = /*#__PURE__*/React.forwardRef(Bubble);
if (process.env.NODE_ENV !== 'production') {
  ForwardBubble.displayName = 'Bubble';
}
export default ForwardBubble;