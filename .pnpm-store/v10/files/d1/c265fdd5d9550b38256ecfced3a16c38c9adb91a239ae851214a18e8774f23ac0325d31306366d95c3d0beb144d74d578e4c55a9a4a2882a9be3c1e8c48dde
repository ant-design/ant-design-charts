import { Reflection } from './abstract';
import { DeclarationReflection } from './declaration';
export declare enum ReferenceState {
    Unresolved = 0,
    Resolved = 1
}
export declare class ReferenceReflection extends DeclarationReflection {
    private _state;
    private _project?;
    constructor(name: string, state: ReferenceReflection['_state'], parent?: Reflection);
    get isReference(): boolean;
    tryGetTargetReflection(): Reflection | undefined;
    tryGetTargetReflectionDeep(): Reflection | undefined;
    getTargetReflection(): Reflection;
    getTargetReflectionDeep(): Reflection;
    private _ensureResolved;
    private _ensureProject;
}
