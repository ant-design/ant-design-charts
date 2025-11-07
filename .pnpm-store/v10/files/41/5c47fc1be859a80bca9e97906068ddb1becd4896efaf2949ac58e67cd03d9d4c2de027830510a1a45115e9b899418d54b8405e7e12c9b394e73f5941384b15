import { GetAntdTheme, GetCustomStylish, GetCustomToken, StyledConfig, ThemeAppearance, ThemeMode } from "../../types";
import { ThemeConfig } from 'antd/es/config-provider/context';
import { ConfigOptions as MessageConfig, MessageInstance } from 'antd/es/message/interface';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { NotificationConfig, NotificationInstance } from 'antd/es/notification/interface';
import { ReactNode } from 'react';
export interface ThemeProviderProps<T, S = Record<string, string>> {
    children?: ReactNode;
    /**
     * 自定义 Token
     */
    customToken?: T | GetCustomToken<T>;
    /**
     * 自定义 Stylish
     */
    customStylish?: GetCustomStylish<S>;
    styled?: StyledConfig;
    prefixCls?: string;
    /**
     * 直接传入 antd 主题，或者传入一个函数，根据当前的主题模式返回对应的主题
     */
    theme?: ThemeConfig | GetAntdTheme;
    /**
     * 从 ThemeProvider 中获取静态方法的实例对象
     * @param instances
     */
    getStaticInstance?: (instances: StaticInstance) => void;
    /**
     * 静态方法的入参
     */
    staticInstanceConfig?: {
        message?: MessageConfig;
        notification?: NotificationConfig;
    };
    /**
     * 应用的展示外观主题，默认提供亮色和暗色两种，用户可以自行扩展
     * @default light
     */
    appearance?: ThemeAppearance;
    defaultAppearance?: ThemeAppearance;
    onAppearanceChange?: (appearance: ThemeAppearance) => void;
    /**
     * 主题的展示模式，有三种配置：跟随系统、亮色、暗色
     * 默认不开启自动模式，需要手动进行配置
     * @default light
     */
    themeMode?: ThemeMode;
    defaultThemeMode?: ThemeMode;
    onThemeModeChange?: (mode: ThemeMode) => void;
}
/**
 * 静态实例
 */
export interface StaticInstance {
    /**
     * 消息实例
     */
    message: MessageInstance;
    /**
     * 通知实例
     */
    notification: NotificationInstance;
    /**
     * 弹窗实例，不包含 warn 方法
     * @typedef {object} Omit<ModalStaticFunctions, 'warn'>
     * @property {Function} info - info 弹窗
     * @property {Function} success - success 弹窗
     * @property {Function} error - error 弹窗
     * @property {Function} warning - warning 弹窗
     * @property {Function} confirm - confirm 弹窗
     * @property {Function} destroyAll - 关闭所有弹窗
     */
    modal: Omit<ModalStaticFunctions, 'warn'>;
}
