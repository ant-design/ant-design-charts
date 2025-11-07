"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleContext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _useTypedEffect = _interopRequireDefault(require("./hooks/useTypedEffect"));
var _useTypingConfig = _interopRequireDefault(require("./hooks/useTypingConfig"));
var _loading = _interopRequireDefault(require("./loading"));
var _style = _interopRequireDefault(require("./style"));
const BubbleContext = exports.BubbleContext = /*#__PURE__*/_react.default.createContext({});
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
  } = _react.default.useContext(BubbleContext);

  // ============================= Refs =============================
  const divRef = _react.default.useRef(null);
  _react.default.useImperativeHandle(ref, () => ({
    nativeElement: divRef.current
  }));

  // ============================ Prefix ============================
  const {
    direction,
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('bubble', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('bubble');

  // ============================ Typing ============================
  const [typingEnabled, typingStep, typingInterval, customSuffix] = (0, _useTypingConfig.default)(typing);
  const [typedContent, isTyping] = (0, _useTypedEffect.default)(content, typingEnabled, typingStep, typingInterval);
  _react.default.useEffect(() => {
    onUpdate?.();
  }, [typedContent]);
  const triggerTypingCompleteRef = _react.default.useRef(false);
  _react.default.useEffect(() => {
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
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(prefixCls, rootClassName, contextConfig.className, className, hashId, cssVarCls, `${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-typing`]: isTyping && !loading && !messageRender && !customSuffix
  });

  // ============================ Avatar ============================
  const avatarNode = _react.default.useMemo(() => /*#__PURE__*/_react.default.isValidElement(avatar) ? avatar : /*#__PURE__*/_react.default.createElement(_antd.Avatar, avatar), [avatar]);

  // =========================== Content ============================
  const mergedContent = _react.default.useMemo(() => messageRender ? messageRender(typedContent) : typedContent, [typedContent, messageRender]);
  const renderSlot = node => typeof node === 'function' ? node(typedContent, {
    key: _key
  }) : node;

  // ============================ Render ============================
  let contentNode;
  if (loading) {
    contentNode = loadingRender ? loadingRender() : /*#__PURE__*/_react.default.createElement(_loading.default, {
      prefixCls: prefixCls
    });
  } else {
    contentNode = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mergedContent, isTyping && customSuffix);
  }
  let fullContent = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ...contextConfig.styles.content,
      ...styles.content
    },
    className: (0, _classnames.default)(`${prefixCls}-content`, `${prefixCls}-content-${variant}`, shape && `${prefixCls}-content-${shape}`, contextConfig.classNames.content, classNames.content)
  }, contentNode);
  if (header || footer) {
    fullContent = /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-content-wrapper`
    }, header && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-header`, contextConfig.classNames.header, classNames.header),
      style: {
        ...contextConfig.styles.header,
        ...styles.header
      }
    }, renderSlot(header)), fullContent, footer && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
      style: {
        ...contextConfig.styles.footer,
        ...styles.footer
      }
    }, renderSlot(footer)));
  }
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    style: {
      ...contextConfig.style,
      ...style
    },
    className: mergedCls
  }, otherHtmlProps, {
    ref: divRef
  }), avatar && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ...contextConfig.styles.avatar,
      ...styles.avatar
    },
    className: (0, _classnames.default)(`${prefixCls}-avatar`, contextConfig.classNames.avatar, classNames.avatar)
  }, avatarNode), fullContent));
};
const ForwardBubble = /*#__PURE__*/_react.default.forwardRef(Bubble);
if (process.env.NODE_ENV !== 'production') {
  ForwardBubble.displayName = 'Bubble';
}
var _default = exports.default = ForwardBubble;