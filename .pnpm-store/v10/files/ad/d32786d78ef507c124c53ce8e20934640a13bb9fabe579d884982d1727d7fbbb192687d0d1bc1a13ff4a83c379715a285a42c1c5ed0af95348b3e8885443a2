import BaseLayer from '../Base/BaseLayer';
import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import type { TextStyleParams } from '../Style/TextStyle';
import TextStyle from '../Style/TextStyle';
interface TextInitParams extends BaseLayerParams {
    text: string;
    style?: TextStyleParams;
    multiline?: boolean;
}
/**
 * 文本对象
 * */
declare class Text extends BaseLayer {
    constructor({ x, y, width, height, text, style, multiline }: TextInitParams);
    textStyle: TextStyle;
    /**
     * 文本内容
     * */
    text: string;
    /**
     * 多行
     */
    multiline: boolean;
    sketchTextBehaviour: SketchFormat.TextBehaviour;
    /**
     * 转换为 Sketch JSON 对象
     * */
    toSketchJSON: () => SketchFormat.Text;
    /**
     * 生成文本核心样式
     * */
    getSketchAttributedString: () => SketchFormat.AttributedString;
    /**
     * 解析字重
     * @param {string} fontWeight font weight as provided by the browser
     * @return {number} normalized font weight
     */
    static parseFontWeight: (fontWeight: string) => number;
    /**
     * 修复字体空格
     * */
    static fixWhiteSpace: (text: string, whiteSpace: string) => string;
    /**
     * 从节点中获取样式
     * @param node
     * @param pseudoElt
     */
    static getTextStyleFromNode: (node: Element, pseudoElt?: string) => TextStyleParams;
}
export default Text;
