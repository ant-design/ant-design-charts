import * as ts from 'typescript';
import { Reflection } from '../../models/index';
import { Context } from '../context';
import { ConverterNodeComponent } from '../components';
import { SourceFileMode } from '../../utils';
export declare class BlockConverter extends ConverterNodeComponent<ts.SourceFile | ts.Block | ts.ModuleBlock> {
    mode: SourceFileMode;
    supports: ts.SyntaxKind[];
    convert(context: Context, node: ts.SourceFile | ts.Block | ts.ModuleBlock): Reflection;
    private convertSourceFile;
    private convertStatements;
}
