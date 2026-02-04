import * as Babel from '@umijs/bundler-utils/compiled/babel/core';
import * as t from '@umijs/bundler-utils/compiled/babel/types';
export default function (): {
    pre(): void;
    post(state: any): void;
    visitor: {
        Program: {
            enter(path: Babel.NodePath<t.Program>, state: any): void;
        };
    };
};
