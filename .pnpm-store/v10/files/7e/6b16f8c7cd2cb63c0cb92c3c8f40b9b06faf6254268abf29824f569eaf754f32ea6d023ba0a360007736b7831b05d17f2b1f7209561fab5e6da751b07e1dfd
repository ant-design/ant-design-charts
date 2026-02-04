import * as ts from 'typescript';
import { Reflection } from '../../models/index';
import { Context } from '../context';
import { ConverterNodeComponent } from '../components';
export declare class ExportConverter extends ConverterNodeComponent<ts.ExportAssignment> {
    supports: ts.SyntaxKind[];
    convert(context: Context, node: ts.ExportAssignment): Reflection;
}
export declare class ExportDeclarationConverter extends ConverterNodeComponent<ts.ExportDeclaration> {
    supports: ts.SyntaxKind[];
    convert(context: Context, node: ts.ExportDeclaration): Reflection | undefined;
}
