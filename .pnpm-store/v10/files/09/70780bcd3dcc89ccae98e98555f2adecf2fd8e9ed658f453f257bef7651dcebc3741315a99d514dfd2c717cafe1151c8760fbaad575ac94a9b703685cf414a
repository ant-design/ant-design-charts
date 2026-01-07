/**
 * 判断是否是 Base64Image 字符串
 *
 * 如果是 则返回可以用的字符串
 *
 * 否则返回空
 * @param url 解析后的 base64 URL
 */
export declare const getBase64ImageString: (url: string) => string | undefined;
/**
 * 判断是否是 Base64 Svg 字符串
 *
 * 如果是 则返回可以用的字符串
 *
 * 否则返回空
 * @param url 解析后的 base64 URL
 */
export declare const base64ToSvgString: (url: string) => string | undefined;
/**
 *
 * @param img html的 img 标签
 * @param format 图片格式
 * @returns {string}
 */
export declare const getImageBase64URL: (img: HTMLImageElement, format?: string) => string;
/**
 * 图片预览链接
 * https://cdn.nlark.com/yuque/0/2020/png/85716/1598714607638-61dcb106-9c1a-4fb5-b2b8-a178d3c4eb93.png
 */
export declare const errorBase64Url = "data:image/png;base64,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";
/**
 * 将 blob 转变为 base64 代码
 * @param blob
 */
export declare const blobToBase64: (blob: Blob) => Promise<string>;
/**
 * 将传入的 data:类型的数值 转成 Base64 类型的字符串
 * @param url
 */
export declare const ensureBase64DataURL: (url: string) => string;
/**
 * 初始化图片的 URL
 * @param inputURL 输入 url
 */
export declare const initImageURL: (inputURL: string) => {
    url: string;
    base64: string;
};
/**
 * 等待图片完成加载
 * @param image
 */
export declare const waitForImageLoaded: (image: HTMLImageElement) => Promise<void>;
