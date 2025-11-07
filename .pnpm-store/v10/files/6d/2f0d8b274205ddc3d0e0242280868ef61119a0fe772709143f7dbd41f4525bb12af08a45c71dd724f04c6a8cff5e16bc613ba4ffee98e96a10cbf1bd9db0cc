import * as Babel from '@umijs/bundler-utils/compiled/babel/core';
import * as t from '@umijs/bundler-utils/compiled/babel/types';
import { IOpts } from './lowImport';
interface IPluginOpts {
    opts: IOpts;
    css: string;
    umiImportItems: string[];
    reactImportItems: string[];
}
export default function (): {
    pre(file: any): void;
    visitor: {
        Identifier(path: Babel.NodePath<t.Identifier>, state: {
            opts: IPluginOpts;
            file: any;
        }): void;
        MemberExpression(path: Babel.NodePath<t.MemberExpression>, state: {
            opts: IPluginOpts;
            file: any;
        }): void;
    };
};
export {};
