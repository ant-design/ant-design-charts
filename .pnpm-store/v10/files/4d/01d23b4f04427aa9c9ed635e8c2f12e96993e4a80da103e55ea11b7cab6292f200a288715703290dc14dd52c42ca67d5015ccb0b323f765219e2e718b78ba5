import { SerializedStyles } from '@emotion/serialize';
import { CSSObject } from './css';
/**
 * 任何一组样式，最基础的入参有三种 CSS Style 对象
 * 第一种: css` color: red; ` -> SerializedStyles
 * 第二种：cx('abc-xxx',css` color:blue; `) -> string
 * 第三种: { color:"red" } -> CSSObject
 */
export type AtomInputType = string | CSSObject | SerializedStyles;
/**
 * getStyle 函数的的基础出参类型，我们需要将为这个类型提供准确定义，进而为开发者用户提供精准的类型提示
 * 用户输入的类型有两类
 * KvObject: 以键值对形态记录的样式 { a: css``,b: css``, c: { ... }}
 * AtomInput: css`` 或 { } 的CSSObject
 */
export type BaseReturnType = KVObject | AtomInputType;
type KVObject = Record<string, CSSObject | string | SerializedStyles>;
/**
 * @title StyleObjectOnly
 * @description 从 BaseReturnType 中排除 string 和 SerializedStyles 类型，只保留对象类型
 * @template T - BaseReturnType 的类型变量
 * @returns BaseReturnType 中的对象类型
 */
type StyleObjectOnly<T extends BaseReturnType> = T extends string ? never : T extends SerializedStyles ? never : T;
/**
 * 根据用户输入的样式对象，导出可以给用户使用消费的类型泛型
 * 譬如用户输入为 { a: css`color: red;`, b: { color: 'red' }
 * 输出的类型泛型为 { a:string; b:string }
 */
type DefinitionToResult<T, K extends keyof T = keyof T> = {
    [P in K]: string;
};
/**
 * 根据用户返回的样式对象，返回一个可以给用户使用的类型定义
 * 用户输入为 { a: css`color: red;`, b: { color: 'red' }
 * 输出的类型泛型为 { a:string; b:string }
 */
export type ReturnStyleToUse<T extends BaseReturnType> = T extends string ? T : T extends SerializedStyles ? string : DefinitionToResult<StyleObjectOnly<T>>;
export {};
