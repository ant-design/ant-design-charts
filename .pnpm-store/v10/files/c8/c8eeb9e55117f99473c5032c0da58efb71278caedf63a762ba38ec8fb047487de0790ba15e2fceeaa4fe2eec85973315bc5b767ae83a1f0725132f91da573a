/// <reference types="react" />
import CacheEntity from '@ant-design/cssinjs/es/Cache';
/**
 * 表示一个样式项
 */
export interface StyleItem {
    /**
     * @title 键值
     */
    key: string;
    /**
     * @title 样式元素
     */
    style: JSX.Element;
    /**
     * @title 样式对应的 CSS 字符串
     */
    css: string;
    /**
     * @title 样式应用的元素 ID 数组
     */
    ids: string[];
    /**
     * @title 样式应用的元素标签名
     */
    tag: string;
}
interface ExtractStyleOptions {
    /**
     * 抽取样式时是否包含 antd，默认抽取
     * @default true
     */
    includeAntd?: boolean;
    /**
     * Antd 样式缓存配置
     */
    antdCache?: CacheEntity;
}
/**
 * Extract Static style
 * @param html html page string
 * @param options
 */
export declare const extractStaticStyle: {
    (html?: string, options?: ExtractStyleOptions): StyleItem[];
    cache: import("@ant-design/cssinjs/lib/Cache").default;
};
export {};
