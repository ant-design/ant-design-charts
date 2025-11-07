import { type ButtonProps } from 'antd';
import * as React from 'react';
export interface ActionButtonContextProps {
    prefixCls: string;
    onSend?: VoidFunction;
    onSendDisabled?: boolean;
    onClear?: VoidFunction;
    onClearDisabled?: boolean;
    onCancel?: VoidFunction;
    onCancelDisabled?: boolean;
    onSpeech?: VoidFunction;
    onSpeechDisabled?: boolean;
    speechRecording?: boolean;
    disabled?: boolean;
}
export declare const ActionButtonContext: React.Context<ActionButtonContextProps>;
export interface ActionButtonProps extends ButtonProps {
    action: 'onSend' | 'onClear' | 'onCancel' | 'onSpeech';
}
export declare function ActionButton(props: ActionButtonProps, ref: React.Ref<HTMLButtonElement>): React.JSX.Element;
declare const _default: React.ForwardRefExoticComponent<ActionButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default _default;
