import { Reflection } from '../reflections/abstract';
import { Type } from './abstract';
export declare class ReferenceType extends Type {
    readonly type = "reference";
    name: string;
    typeArguments?: Type[];
    symbolFullyQualifiedName: string;
    reflection?: Reflection;
    static SYMBOL_FQN_RESOLVED: string;
    static SYMBOL_FQN_RESOLVE_BY_NAME: string;
    constructor(name: string, symbolFQN: string, reflection?: Reflection);
    clone(): Type;
    equals(other: ReferenceType): boolean;
    toString(): string;
}
