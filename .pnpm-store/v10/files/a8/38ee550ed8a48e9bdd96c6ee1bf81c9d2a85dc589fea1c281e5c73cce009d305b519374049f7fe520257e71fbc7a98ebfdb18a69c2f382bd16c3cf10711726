import type { CSSProperties, ReactNode } from 'react';
import React from 'react';
import { ProFieldValueEnumType, ProSchemaValueEnumMap } from '../typing';
type StatusProps = {
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
};
export declare const ProFieldBadgeColor: React.FC<StatusProps & {
    color: string;
}>;
export declare const objectToMap: (value: ProFieldValueEnumType | undefined) => ProSchemaValueEnumMap;
/**
 * 转化 text 和 valueEnum 通过 type 来添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 纯净模式，不增加 status
 */
export declare const proFieldParsingText: (text: string | number | (string | number)[], valueEnumParams: ProFieldValueEnumType, key?: number | string) => React.ReactNode;
export {};
