import { DeclarationReflection } from '../reflections/declaration';
import { Type } from './abstract';
export declare class ReflectionType extends Type {
    declaration: DeclarationReflection;
    readonly type = "reflection";
    constructor(declaration: DeclarationReflection);
    clone(): Type;
    equals(type: ReflectionType): boolean;
    toString(): "function" | "object";
}
