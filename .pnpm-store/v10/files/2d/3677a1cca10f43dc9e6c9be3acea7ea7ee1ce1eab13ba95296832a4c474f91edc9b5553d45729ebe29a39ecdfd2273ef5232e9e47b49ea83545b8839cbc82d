import _extends from "@babel/runtime/helpers/esm/extends";
import { AudioMutedOutlined, AudioOutlined } from '@ant-design/icons';
import * as React from 'react';
import ActionButton, { ActionButtonContext } from "../ActionButton";
import RecordingIcon from "./RecordingIcon";
function SpeechButton(props, ref) {
  const {
    speechRecording,
    onSpeechDisabled,
    prefixCls
  } = React.useContext(ActionButtonContext);
  let icon = null;
  if (speechRecording) {
    icon = /*#__PURE__*/React.createElement(RecordingIcon, {
      className: `${prefixCls}-recording-icon`
    });
  } else if (onSpeechDisabled) {
    icon = /*#__PURE__*/React.createElement(AudioMutedOutlined, null);
  } else {
    icon = /*#__PURE__*/React.createElement(AudioOutlined, null);
  }
  return /*#__PURE__*/React.createElement(ActionButton, _extends({
    icon: icon,
    color: "primary",
    variant: "text"
  }, props, {
    action: "onSpeech",
    ref: ref
  }));
}
export default /*#__PURE__*/React.forwardRef(SpeechButton);