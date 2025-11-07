import { Input } from 'antd';
import React from 'react';
import SenderHeader from './SenderHeader';
import { type AllowSpeech } from './useSpeech';
import type { InputRef as AntdInputRef, ButtonProps, GetProps } from 'antd';
export type SubmitType = 'enter' | 'shiftEnter' | false;
type TextareaProps = GetProps<typeof Input.TextArea>;
export interface SenderComponents {
    input?: React.ComponentType<TextareaProps>;
}
type ActionsComponents = {
    SendButton: React.ComponentType<ButtonProps>;
    ClearButton: React.ComponentType<ButtonProps>;
    LoadingButton: React.ComponentType<ButtonProps>;
    SpeechButton: React.ComponentType<ButtonProps>;
};
export type ActionsRender = (ori: React.ReactNode, info: {
    components: ActionsComponents;
}) => React.ReactNode;
export type FooterRender = (info: {
    components: ActionsComponents;
}) => React.ReactNode;
export interface SenderProps extends Pick<TextareaProps, 'placeholder' | 'onKeyPress' | 'onFocus' | 'onBlur'> {
    prefixCls?: string;
    defaultValue?: string;
    value?: string;
    loading?: boolean;
    readOnly?: boolean;
    submitType?: SubmitType;
    disabled?: boolean;
    onSubmit?: (message: string) => void;
    onChange?: (value: string, event?: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCancel?: VoidFunction;
    onKeyDown?: React.KeyboardEventHandler<any>;
    onPaste?: React.ClipboardEventHandler<HTMLElement>;
    onPasteFile?: (firstFile: File, files: FileList) => void;
    components?: SenderComponents;
    styles?: {
        prefix?: React.CSSProperties;
        input?: React.CSSProperties;
        actions?: React.CSSProperties;
        footer?: React.CSSProperties;
        content?: React.CSSProperties;
    };
    rootClassName?: string;
    classNames?: {
        prefix?: string;
        input?: string;
        actions?: string;
        footer?: string;
        content?: string;
    };
    style?: React.CSSProperties;
    className?: string;
    actions?: React.ReactNode | ActionsRender;
    allowSpeech?: AllowSpeech;
    prefix?: React.ReactNode;
    footer?: React.ReactNode | FooterRender;
    header?: React.ReactNode;
    autoSize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
}
export type SenderRef = {
    nativeElement: HTMLDivElement;
} & Pick<AntdInputRef, 'focus' | 'blur'>;
declare const ForwardSender: React.ForwardRefExoticComponent<SenderProps & React.RefAttributes<SenderRef>>;
type CompoundedSender = typeof ForwardSender & {
    Header: typeof SenderHeader;
};
declare const Sender: CompoundedSender;
export default Sender;
