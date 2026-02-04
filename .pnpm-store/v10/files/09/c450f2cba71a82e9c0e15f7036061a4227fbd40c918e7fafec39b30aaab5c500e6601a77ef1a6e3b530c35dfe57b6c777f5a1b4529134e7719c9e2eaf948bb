import type { InputNumberProps } from 'antd';
import React from 'react';
import 'antd/lib/input-number/style';
import 'antd/lib/popover/style';
export type FieldMoneyProps = {
    text: number;
    moneySymbol?: boolean;
    locale?: string;
    /**
     * 输入框内容为空的提示内容
     */
    placeholder?: string;
    /**
     * 自定义 money 的 Symbol
     */
    customSymbol?: string;
    /**
     * 自定义 Popover 的值，false 可以关闭他
     */
    numberPopoverRender?: ((props: InputNumberProps, defaultText: string) => React.ReactNode) | boolean;
    /**
     * NumberFormat 的配置，文档可以查看 mdn
     *
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    numberFormatOptions?: {
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        localeMatcher?: string;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        style?: string;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        currency?: string;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        currencyDisplay?: string;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        currencySign?: string;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        useGrouping?: boolean;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        minimumIntegerDigits?: number;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        minimumFractionDigits?: number;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        maximumFractionDigits?: number;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        minimumSignificantDigits?: number;
        /**
         * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
         */
        maximumSignificantDigits?: number;
    };
};
declare const _default: React.ForwardRefExoticComponent<import("@ant-design/pro-provider").BaseProFieldFC & import("@ant-design/pro-provider").ProRenderFieldPropsType & FieldMoneyProps & React.RefAttributes<any>>;
export default _default;
