import type { BaseReturnType, CommonStyleUtils, FullStylish, FullToken, ReturnStyleToUse, Theme, ThemeAppearance } from "../../types";
/**
 * 书写样式时使用的第一个参数
 */
export interface CreateStylesUtils extends CommonStyleUtils {
    /**
     * 包含 antd 的 token 和所有自定义 token
     */
    token: FullToken;
    stylish: FullStylish;
    /**
     * ThemeProvider 下当前的主题模式
     */
    appearance: ThemeAppearance;
    /**
     * appearance === 'dark' 的语法糖，可以直接使用 isDarkMode 来降低外观的判断成本
     */
    isDarkMode: boolean;
    /**
     * 在 ThemeProvider 上标记的 prefix，可以拿到当前的 组件 prefix
     * 便于更加灵活地响应组件 prefix
     * @default ant
     */
    prefixCls: string;
    iconPrefixCls: string;
}
/**
 * 最终返回 styles 对象的类型定义
 */
export interface ReturnStyles<T extends BaseReturnType> extends Pick<CommonStyleUtils, 'cx'> {
    styles: ReturnStyleToUse<T>;
    theme: Omit<Theme, 'prefixCls'>;
    iconPrefixCls: string;
    prefixCls: string;
}
export type GetStyleFn<Input extends BaseReturnType, Props> = (utils: CreateStylesUtils, props: Props) => Input;
/**
 * 创建样式的函数或者对象
 * 可以传入 StyleObject 或者 ()=> StyleObject 函数
 * StyleObject 可以是
 */
export type StyleOrGetStyleFn<Input extends BaseReturnType, Props> = Input | GetStyleFn<Input, Props>;
