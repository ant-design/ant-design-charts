import * as ts from 'typescript';
import { Type } from '../../models/index';
import { ConverterTypeComponent, TypeNodeConverter } from '../components';
import { Context } from '../context';
export declare class IndexedAccessConverter extends ConverterTypeComponent implements TypeNodeConverter<ts.Type, ts.IndexedAccessTypeNode> {
    supportsNode(context: Context, node: ts.TypeNode): boolean;
    convertNode(context: Context, node: ts.IndexedAccessTypeNode): Type | undefined;
}
