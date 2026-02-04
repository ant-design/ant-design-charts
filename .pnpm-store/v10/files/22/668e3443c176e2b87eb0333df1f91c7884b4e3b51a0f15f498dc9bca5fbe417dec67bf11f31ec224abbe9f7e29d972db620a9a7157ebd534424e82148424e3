import { Type } from './abstract';
export declare class PredicateType extends Type {
    targetType?: Type;
    name: string;
    asserts: boolean;
    readonly type = "predicate";
    constructor(name: string, asserts: boolean, targetType?: Type);
    clone(): Type;
    equals(type: Type): boolean;
    toString(): string;
}
