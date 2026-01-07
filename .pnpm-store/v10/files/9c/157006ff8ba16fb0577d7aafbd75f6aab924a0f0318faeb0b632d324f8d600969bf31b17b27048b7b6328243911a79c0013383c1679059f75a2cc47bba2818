import { Primitive } from '../../runtime';
export declare function column(value: Primitive[], field?: string): {
    type: string;
    value: Primitive[];
    field: string;
};
export declare function inferredColumn(value: Primitive[], field?: string): {
    inferred: boolean;
    type: string;
    value: Primitive[];
    field: string;
};
export declare function visualColumn(value: Primitive[], field?: string): {
    type: string;
    value: Primitive[];
    field: string;
    visual: boolean;
};
export declare function nonConstantColumn(value: Primitive[], field?: string): {
    constant: boolean;
    type: string;
    value: Primitive[];
    field: string;
};
export declare function constant(I: number[], value: any): any[];
export declare function columnOf(encode: any, key: string): [Primitive[], string];
export declare function maybeColumnOf(encode: any, ...K: (string | Primitive[])[]): [Primitive[], string];
export declare function isObject(d: any): boolean;
