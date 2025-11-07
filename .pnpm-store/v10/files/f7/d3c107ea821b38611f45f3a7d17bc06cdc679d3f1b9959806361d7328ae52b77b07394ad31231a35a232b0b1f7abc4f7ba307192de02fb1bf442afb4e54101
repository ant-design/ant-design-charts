import _extends from "@babel/runtime/helpers/esm/extends";
import { Flex, Input } from 'antd';
import classnames from 'classnames';
import { useMergedState } from 'rc-util';
import pickAttrs from "rc-util/es/pickAttrs";
import getValue from "rc-util/es/utils/get";
import React from 'react';
import useProxyImperativeHandle from "../_util/hooks/use-proxy-imperative-handle";
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import SenderHeader, { SendHeaderContext } from "./SenderHeader";
import { ActionButtonContext } from "./components/ActionButton";
import ClearButton from "./components/ClearButton";
import LoadingButton from "./components/LoadingButton";
import SendButton from "./components/SendButton";
import SpeechButton from "./components/SpeechButton";
import useStyle from "./style";
import useSpeech from "./useSpeech";
function getComponent(components, path, defaultComponent) {
  return getValue(components, path) || defaultComponent;
}

/** Used for actions render needed components */
const sharedRenderComponents = {
  SendButton,
  ClearButton,
  LoadingButton,
  SpeechButton
};
const ForwardSender = /*#__PURE__*/React.forwardRef((props, ref) => {
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
  } = useXProviderContext();
  const prefixCls = getPrefixCls('sender', customizePrefixCls);

  // ============================= Refs =============================
  const containerRef = React.useRef(null);
  const inputRef = React.useRef(null);
  useProxyImperativeHandle(ref, () => ({
    nativeElement: containerRef.current,
    focus: inputRef.current?.focus,
    blur: inputRef.current?.blur
  }));

  // ======================= Component Config =======================
  const contextConfig = useXComponentConfig('sender');
  const inputCls = `${prefixCls}-input`;

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-disabled`]: disabled
  });
  const actionBtnCls = `${prefixCls}-actions-btn`;
  const actionListCls = `${prefixCls}-actions-list`;

  // ============================ Value =============================
  const [innerValue, setInnerValue] = useMergedState(defaultValue || '', {
    value
  });
  const triggerValueChange = (nextValue, event) => {
    setInnerValue(nextValue);
    if (onChange) {
      onChange(nextValue, event);
    }
  };

  // ============================ Speech ============================
  const [speechPermission, triggerSpeech, speechRecording] = useSpeech(transcript => {
    triggerValueChange(`${innerValue} ${transcript}`);
  }, allowSpeech);

  // ========================== Components ==========================
  const InputTextArea = getComponent(components, ['input'], Input.TextArea);
  const domProps = pickAttrs(rest, {
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
  const isCompositionRef = React.useRef(false);
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
  let actionNode = /*#__PURE__*/React.createElement(Flex, {
    className: `${actionListCls}-presets`
  }, allowSpeech && /*#__PURE__*/React.createElement(SpeechButton, null), loading ? /*#__PURE__*/React.createElement(LoadingButton, null) : /*#__PURE__*/React.createElement(SendButton, null));

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
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: mergedCls,
    style: {
      ...contextConfig.style,
      ...style
    }
  }, header && /*#__PURE__*/React.createElement(SendHeaderContext.Provider, {
    value: {
      prefixCls
    }
  }, header), /*#__PURE__*/React.createElement(ActionButtonContext.Provider, {
    value: actionsButtonContextProps
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(`${prefixCls}-content`, contextConfig.classNames.content, classNames.content),
    style: {
      ...contextConfig.styles.content,
      ...styles.content
    },
    onMouseDown: onContentMouseDown
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: classnames(`${prefixCls}-prefix`, contextConfig.classNames.prefix, classNames.prefix),
    style: {
      ...contextConfig.styles.prefix,
      ...styles.prefix
    }
  }, prefix), /*#__PURE__*/React.createElement(InputTextArea, _extends({}, inputProps, {
    disabled: disabled,
    style: {
      ...contextConfig.styles.input,
      ...styles.input
    },
    className: classnames(inputCls, contextConfig.classNames.input, classNames.input),
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
  })), actionNode && /*#__PURE__*/React.createElement("div", {
    className: classnames(actionListCls, contextConfig.classNames.actions, classNames.actions),
    style: {
      ...contextConfig.styles.actions,
      ...styles.actions
    }
  }, actionNode)), footerNode && /*#__PURE__*/React.createElement("div", {
    className: classnames(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
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
Sender.Header = SenderHeader;
export default Sender;