import type { ButtonProps, InputProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormCaptchaProps = ProFormFieldItemProps<InputProps> & {
    /** @name 倒计时的秒数 */
    countDown?: number;
    /** 手机号的 name */
    phoneName?: NamePath;
    /** @name 获取验证码的方法 */
    onGetCaptcha: (mobile: string) => Promise<void>;
    /** @name 计时回调 */
    onTiming?: (count: number) => void;
    /** @name 渲染按钮的文字 */
    captchaTextRender?: (timing: boolean, count: number) => React.ReactNode;
    /** @name 获取按钮验证码的props */
    captchaProps?: ButtonProps;
    value?: any;
    onChange?: any;
};
export type CaptFieldRef = {
    startTiming: () => never;
    endTiming: () => never;
};
declare const ProFormCaptcha: React.FC<ProFormCaptchaProps>;
export default ProFormCaptcha;
