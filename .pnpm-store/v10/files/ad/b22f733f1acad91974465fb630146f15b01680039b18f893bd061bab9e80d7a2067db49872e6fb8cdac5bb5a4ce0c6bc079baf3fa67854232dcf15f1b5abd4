import * as ts from 'typescript';
import { InferredType } from '../../models/types';
import { ConverterTypeComponent, TypeNodeConverter } from '../components';
import { Context } from '../context';
export declare class InferredConverter extends ConverterTypeComponent implements TypeNodeConverter<ts.Type, ts.InferTypeNode> {
    supportsNode(_context: Context, node: ts.TypeNode): boolean;
    convertNode(context: Context, node: ts.InferTypeNode): InferredType | undefined;
}
