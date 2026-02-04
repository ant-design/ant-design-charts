import * as ts from 'typescript';
import { ConditionalType } from '../../models/types';
import { ConverterTypeComponent, TypeConverter } from '../components';
import { Context } from '../context';
export declare class ConditionalConverter extends ConverterTypeComponent implements TypeConverter<ts.ConditionalType, ts.ConditionalTypeNode> {
    supportsNode(context: Context, node: ts.ConditionalTypeNode): boolean;
    supportsType(context: Context, type: ts.ConditionalType): boolean;
    convertNode(context: Context, node: ts.ConditionalTypeNode): ConditionalType | undefined;
    convertType(context: Context, type: ts.ConditionalType): ConditionalType | undefined;
}
