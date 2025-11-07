import * as ts from 'typescript';
import { Type } from '../../models/types/index';
import { ConverterTypeComponent, TypeNodeConverter } from '../components';
import { Context } from '../context';
export declare class QueryConverter extends ConverterTypeComponent implements TypeNodeConverter<ts.Type, ts.TypeQueryNode> {
    supportsNode(_context: Context, node: ts.Node): boolean;
    convertNode(context: Context, node: ts.TypeQueryNode): Type | undefined;
}
