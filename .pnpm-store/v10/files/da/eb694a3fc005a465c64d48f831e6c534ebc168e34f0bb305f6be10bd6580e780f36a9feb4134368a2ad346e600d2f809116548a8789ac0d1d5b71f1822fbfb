"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcUtil = require("rc-util");
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _react = _interopRequireDefault(require("react"));
var _useProxyImperativeHandle = _interopRequireDefault(require("../_util/hooks/use-proxy-imperative-handle"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _SenderHeader = _interopRequireWildcard(require("./SenderHeader"));
var _ActionButton = require("./components/ActionButton");
var _ClearButton = _interopRequireDefault(require("./components/ClearButton"));
var _LoadingButton = _interopRequireDefault(require("./components/LoadingButton"));
var _SendButton = _interopRequireDefault(require("./components/SendButton"));
var _SpeechButton = _interopRequireDefault(require("./components/SpeechButton"));
var _style = _interopRequireDefault(require("./style"));
var _useSpeech = _interopRequireDefault(require("./useSpeech"));
function getComponent(components, path, defaultComponent) {
  return (0, _get.default)(components, path) || defaultComponent;
}

/** Used for actions render needed components */
const sharedRenderComponents = {
  SendButton: _SendButton.default,
  ClearButton: _ClearButton.default,
  LoadingButton: _LoadingButton.default,
  SpeechButton: _SpeechButton.default
};
const ForwardSender = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    styles = {},
    classNames = {},
    className,
    rootClassName,
    style,
    defaultValue,
    value,
    readOnly,
    submitType = 'enter',
    onSubmit,
    loading,
    components,
    onCancel,
    onChange,
    actions,
    onKeyPress,
    onKeyDown,
    disabled,
    allowSpeech,
    prefix,
    footer,
    header,
    onPaste,
    onPasteFile,
    autoSize = {
      maxRows: 8
    },
    ...rest
  } = props;

  // ============================= MISC =============================
  const {
    direction,
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('sender', customizePrefixCls);

  // ============================= Refs =============================
  const containerRef = _react.default.useRef(null);
  const inputRef = _react.default.useRef(null);
  (0, _useProxyImperativeHandle.default)(ref, () => ({
    nativeElement: containerRef.current,
    focus: inputRef.current?.focus,
    blur: inputRef.current?.blur
  }));

  // ======================= Component Config =======================
  const contextConfig = (0, _useXComponentConfig.default)('sender');
  const inputCls = `${prefixCls}-input`;

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-disabled`]: disabled
  });
  const actionBtnCls = `${prefixCls}-actions-btn`;
  const actionListCls = `${prefixCls}-actions-list`;

  // ============================ Value =============================
  const [innerValue, setInnerValue] = (0, _rcUtil.useMergedState)(defaultValue || '', {
    value
  });
  const triggerValueChange = (nextValue, event) => {
    setInnerValue(nextValue);
    if (onChange) {
      onChange(nextValue, event);
    }
  };

  // ============================ Speech ============================
  const [speechPermission, triggerSpeech, speechRecording] = (0, _useSpeech.default)(transcript => {
    triggerValueChange(`${innerValue} ${transcript}`);
  }, allowSpeech);

  // ========================== Components ==========================
  const InputTextArea = getComponent(components, ['input'], _antd.Input.TextArea);
  const domProps = (0, _pickAttrs.default)(rest, {
    attr: true,
    aria: true,
    data: true
  });
  const inputProps = {
    ...domProps,
    ref: inputRef
  };

  // ============================ Events ============================
  const triggerSend = () => {
    if (innerValue && onSubmit && !loading) {
      onSubmit(innerValue);
    }
  };
  const triggerClear = () => {
    triggerValueChange('');
  };

  // ============================ Submit ============================
  const isCompositionRef = _react.default.useRef(false);
  const onInternalCompositionStart = () => {
    isCompositionRef.current = true;
  };
  const onInternalCompositionEnd = () => {
    isCompositionRef.current = false;
  };
  const onInternalKeyPress = e => {
    const canSubmit = e.key === 'Enter' && !isCompositionRef.current;

    // Check for `submitType` to submit
    switch (submitType) {
      case 'enter':
        if (canSubmit && !e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;
      case 'shiftEnter':
        if (canSubmit && e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;
    }
    onKeyPress?.(e);
  };

  // ============================ Paste =============================
  const onInternalPaste = e => {
    // Get files
    const files = e.clipboardData?.files;
    if (files?.length && onPasteFile) {
      onPasteFile(files[0], files);
      e.preventDefault();
    }
    onPaste?.(e);
  };

  // ============================ Focus =============================
  const onContentMouseDown = e => {
    // If input focused but click on the container,
    // input will lose focus.
    // We call `preventDefault` to prevent this behavior
    if (e.target !== containerRef.current?.querySelector(`.${inputCls}`)) {
      e.preventDefault();
    }
    inputRef.current?.focus();
  };

  // ============================ Action ============================
  let actionNode = /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    className: `${actionListCls}-presets`
  }, allowSpeech && /*#__PURE__*/_react.default.createElement(_SpeechButton.default, null), loading ? /*#__PURE__*/_react.default.createElement(_LoadingButton.default, null) : /*#__PURE__*/_react.default.createElement(_SendButton.default, null));

  // Custom actions
  if (typeof actions === 'function') {
    actionNode = actions(actionNode, {
      components: sharedRenderComponents
    });
  } else if (actions || actions === false) {
    actionNode = actions;
  }
  // Custom actions context props
  const actionsButtonContextProps = {
    prefixCls: actionBtnCls,
    onSend: triggerSend,
    onSendDisabled: !innerValue,
    onClear: triggerClear,
    onClearDisabled: !innerValue,
    onCancel,
    onCancelDisabled: !loading,
    onSpeech: () => triggerSpeech(false),
    onSpeechDisabled: !speechPermission,
    speechRecording,
    disabled
  };

  // ============================ Footer ============================
  const footerNode = typeof footer === 'function' ? footer({
    components: sharedRenderComponents
  }) : footer || null;

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("div", {
    ref: containerRef,
    className: mergedCls,
    style: {
      ...contextConfig.style,
      ...style
    }
  }, header && /*#__PURE__*/_react.default.createElement(_SenderHeader.SendHeaderContext.Provider, {
    value: {
      prefixCls
    }
  }, header), /*#__PURE__*/_react.default.createElement(_ActionButton.ActionButtonContext.Provider, {
    value: actionsButtonContextProps
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${prefixCls}-content`, contextConfig.classNames.content, classNames.content),
    style: {
      ...contextConfig.styles.content,
      ...styles.content
    },
    onMouseDown: onContentMouseDown
  }, prefix && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${prefixCls}-prefix`, contextConfig.classNames.prefix, classNames.prefix),
    style: {
      ...contextConfig.styles.prefix,
      ...styles.prefix
    }
  }, prefix), /*#__PURE__*/_react.default.createElement(InputTextArea, (0, _extends2.default)({}, inputProps, {
    disabled: disabled,
    style: {
      ...contextConfig.styles.input,
      ...styles.input
    },
    className: (0, _classnames.default)(inputCls, contextConfig.classNames.input, classNames.input),
    autoSize: autoSize,
    value: innerValue,
    onChange: event => {
      triggerValueChange(event.target.value, event);
      triggerSpeech(true);
    },
    onPressEnter: onInternalKeyPress,
    onCompositionStart: onInternalCompositionStart,
    onCompositionEnd: onInternalCompositionEnd,
    onKeyDown: onKeyDown,
    onPaste: onInternalPaste,
    variant: "borderless",
    readOnly: readOnly
  })), actionNode && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(actionListCls, contextConfig.classNames.actions, classNames.actions),
    style: {
      ...contextConfig.styles.actions,
      ...styles.actions
    }
  }, actionNode)), footerNode && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
    style: {
      ...contextConfig.styles.footer,
      ...styles.footer
    }
  }, footerNode))));
});
const Sender = ForwardSender;
if (process.env.NODE_ENV !== 'production') {
  Sender.displayName = 'Sender';
}
Sender.Header = _SenderHeader.default;
var _default = exports.default = Sender;