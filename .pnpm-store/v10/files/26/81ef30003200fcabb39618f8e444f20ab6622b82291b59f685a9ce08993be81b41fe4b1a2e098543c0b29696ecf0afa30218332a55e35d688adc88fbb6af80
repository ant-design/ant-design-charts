import * as ts from 'typescript';
import { PredicateType } from '../../models/types/index';
import { ConverterTypeComponent } from '../components';
import { Context } from '../context';
export declare class PredicateConverter extends ConverterTypeComponent {
    priority: number;
    supportsNode(_context: Context, node: ts.Node): boolean;
    convertNode(context: Context, node: ts.TypePredicateNode): PredicateType;
}
