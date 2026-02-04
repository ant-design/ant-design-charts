import * as ts from 'typescript';
import { Reflection } from '../../models/index';
import { Context } from '../context';
import { ConverterNodeComponent } from '../components';
declare type VarNodeType = ts.PropertySignature | ts.PropertyDeclaration | ts.PropertyAssignment | ts.ShorthandPropertyAssignment | ts.VariableDeclaration | ts.ImportEqualsDeclaration | ts.BindingElement;
export declare class VariableConverter extends ConverterNodeComponent<ts.VariableDeclaration> {
    supports: ts.SyntaxKind[];
    isSimpleObjectLiteral(objectLiteral: ts.ObjectLiteralExpression): boolean;
    convert(context: Context, node: VarNodeType): Reflection | undefined;
}
export {};
