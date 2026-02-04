import { Component } from '../../core';
import { Group } from '../../shapes';
import type { FunctionalSymbol, MarkerOptions, MarkerStyleProps } from './types';
export type { MarkerStyleProps, MarkerOptions, FunctionalSymbol };
export declare class Marker extends Component<MarkerStyleProps> {
    render(attributes: Required<MarkerStyleProps>, container: Group): void;
    private static MARKER_SYMBOL_MAP;
    /**
     * 注册 icon 类型
     * @param type
     * @param path
     */
    static registerSymbol: (type: string, symbol: FunctionalSymbol) => void;
    /**
     * 获取已经注册的 icon 的 path
     */
    static getSymbol: (type: string) => FunctionalSymbol | undefined;
    /**
     * @returns 获取已经注册的 icon 的类型
     */
    static getSymbols: () => string[];
}
