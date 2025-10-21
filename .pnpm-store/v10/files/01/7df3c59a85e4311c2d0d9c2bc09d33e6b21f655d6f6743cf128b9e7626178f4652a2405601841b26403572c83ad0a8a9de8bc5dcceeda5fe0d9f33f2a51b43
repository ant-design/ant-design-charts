import type { BaseProFieldFC, ProFieldFCRenderProps, ProRenderFieldPropsType } from '@ant-design/pro-provider';
import { ProFieldRequestData, ProFieldTextType, ProFieldValueObjectType, ProFieldValueType } from '@ant-design/pro-utils';
import React from 'react';
import FieldCode from './components/Code';
import FieldDatePicker from './components/DatePicker';
import FieldIndexColumn from './components/IndexColumn';
import type { FieldMoneyProps } from './components/Money';
import FieldMoney from './components/Money';
import FieldPercent from './components/Percent';
import FieldProgress from './components/Progress';
import FieldRangePicker from './components/RangePicker';
import FieldSelect, { proFieldParsingValueEnumToArray } from './components/Select';
import FieldStatus from './components/Status';
import FieldText from './components/Text';
import FieldTimePicker from './components/TimePicker';
export type ProFieldMoneyProps = FieldMoneyProps;
export type ProFieldEmptyText = string | false;
/** 默认的 Field 需要实现的功能 */
export type ProFieldFC<T = {}> = React.ForwardRefRenderFunction<any, BaseProFieldFC & ProRenderFieldPropsType & T>;
/** 轻量筛选的field属性 */
export type ProFieldLightProps = {
    lightLabel?: React.RefObject<{
        labelRef: React.RefObject<HTMLElement>;
        clearRef: React.RefObject<HTMLElement>;
    }>;
    labelTrigger?: boolean;
};
/** Value type by function */
export type ProFieldValueTypeFunction<T> = (item: T) => ProFieldValueType | ProFieldValueObjectType;
type RenderProps = Omit<ProFieldFCRenderProps, 'text' | 'placeholder'> & ProRenderFieldPropsType & {
    /** 从服务器读取选项 */
    request?: ProFieldRequestData;
    emptyText?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * @deprecated use onOpenChange replace
     */
    onVisible?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    [key: string]: any;
};
/**
 * 根据不同的类型来转化数值
 *
 * @param dataValue
 * @param valueType
 */
declare const defaultRenderText: (dataValue: ProFieldTextType, valueType: ProFieldValueType | ProFieldValueObjectType, props: RenderProps, valueTypeMap: Record<string, ProRenderFieldPropsType>) => React.ReactNode;
export { defaultRenderText, FieldCode, FieldDatePicker, FieldIndexColumn, FieldMoney, FieldPercent, FieldProgress, FieldRangePicker, FieldSelect, FieldStatus, FieldText, FieldTimePicker, proFieldParsingValueEnumToArray, };
export type { FieldMoneyProps, ProFieldValueType };
/** ProField 的类型 */
export type ProFieldPropsType = {
    text?: ProFieldTextType;
    valueType?: ProFieldValueType | ProFieldValueObjectType;
} & RenderProps;
export declare const ProField: React.ForwardRefRenderFunction<any, ProFieldPropsType>;
export default ProField;
