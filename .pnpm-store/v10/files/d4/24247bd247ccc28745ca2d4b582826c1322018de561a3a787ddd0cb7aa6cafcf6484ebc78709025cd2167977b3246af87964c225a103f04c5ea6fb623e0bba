import { SourceFile, SourceDirectory } from '../sources/index';
import { Reflection, ReflectionKind } from './abstract';
import { ContainerReflection } from './container';
export declare class ProjectReflection extends ContainerReflection {
    private reflectionToSymbolIdMap;
    private symbolIdToReflectionIdMap;
    private fqnToReflectionIdMap;
    private referenceGraph?;
    reflections: {
        [id: number]: Reflection;
    };
    directory: SourceDirectory;
    files: SourceFile[];
    name: string;
    readme?: string;
    packageInfo: any;
    constructor(name: string);
    isProject(): this is ProjectReflection;
    getReflectionsByKind(kind: ReflectionKind): Reflection[];
    findReflectionByName(arg: string | string[]): Reflection | undefined;
    getDanglingReferences(): string[];
    registerReflection(reflection: Reflection, fqn?: string): void;
    removeReflection(reflection: Reflection, removeReferences?: boolean): void;
    getReflectionById(id: number): Reflection | undefined;
    getReflectionFromFQN(fqn: string): Reflection | undefined;
    private getReferenceGraph;
}
