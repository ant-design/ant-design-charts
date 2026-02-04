/**
 * svg 基本样式
 * defaults taken from Chrome
 * @see https://www.w3.org/TR/SVG2/styling.html
 */
export declare const SvgStyleProperties: (string | undefined)[][];
/**
 * 节点获取原始的 String
 * @param svgNode
 */
export declare const nodeToRawSVG: (svgNode: Element) => string;
/**
 * 从 URL 请求 SVG 字符串
 * @param url
 */
export declare const urlToRawSVG: (url: string) => Promise<string | undefined>;
/**
 * 压缩和优化 Svg
 * TODO 有待优化 svgo 的方法
 * @param svgStr svg 字符串
 */
export declare const optimizeRawSVG: (svgStr: string) => Promise<string>;
/**
 * 根据 Svg String 字符串 渲染出需要的样式
 * @param svgString
 * @param width
 * @param height
 * @param wrapper 需要挂载的节点位置
 */
export declare const StrToRenderSVG: (svgString: string, { width, height }: {
    width: number;
    height: number;
}, wrapper?: Element) => Promise<string>;
