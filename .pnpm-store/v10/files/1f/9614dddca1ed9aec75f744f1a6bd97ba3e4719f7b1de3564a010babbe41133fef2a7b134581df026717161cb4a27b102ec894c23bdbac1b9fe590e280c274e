import * as M from '../models';
import { SourceReferenceWrapper, DecoratorWrapper } from './serializers';
export declare type ModelToObject<T> = T extends Array<infer U> ? _ModelToObject<U>[] : _ModelToObject<T>;
declare type _ModelToObject<T> = T extends M.ReflectionGroup ? ReflectionGroup : T extends M.ReflectionCategory ? ReflectionCategory : T extends M.SignatureReflection ? SignatureReflection : T extends M.ParameterReflection ? ParameterReflection : T extends M.DeclarationReflection ? DeclarationReflection | ReflectionPointer : T extends M.TypeParameterReflection ? TypeParameterReflection : T extends M.ProjectReflection ? ProjectReflection : T extends M.ContainerReflection ? ContainerReflection : T extends M.ReferenceReflection ? ReferenceReflection : T extends M.Reflection ? Reflection : T extends M.ArrayType ? ArrayType : T extends M.ConditionalType ? ConditionalType : T extends M.IndexedAccessType ? IndexedAccessType : T extends M.InferredType ? InferredType : T extends M.IntersectionType ? IntersectionType : T extends M.IntrinsicType ? IntrinsicType : T extends M.PredicateType ? PredicateType : T extends M.ReferenceType ? ReferenceType : T extends M.ReflectionType ? ReflectionType : T extends M.StringLiteralType ? StringLiteralType : T extends M.TupleType ? TupleType : T extends M.UnknownType ? UnknownType : T extends M.Type ? SomeType : T extends M.Comment ? Comment : T extends M.CommentTag ? CommentTag : T extends DecoratorWrapper ? Decorator : T extends SourceReferenceWrapper ? SourceReference : never;
declare type Primitive = string | number | undefined | null | boolean;
declare type S<T, K extends keyof T> = {
    -readonly [K2 in K]: T[K2] extends Primitive ? T[K2] : ModelToObject<T[K2]>;
};
export interface ReflectionGroup extends S<M.ReflectionGroup, 'title' | 'kind' | 'categories'> {
    children?: M.ReflectionGroup['children'][number]['id'][];
}
export interface ReflectionCategory extends S<M.ReflectionCategory, 'title'> {
    children?: M.ReflectionCategory['children'][number]['id'][];
}
export interface ReferenceReflection extends DeclarationReflection, S<M.ReferenceReflection, never> {
    target: number;
}
export interface SignatureReflection extends Reflection, S<M.SignatureReflection, 'type' | 'overwrites' | 'inheritedFrom' | 'implementationOf'> {
}
export interface ParameterReflection extends Reflection, S<M.ParameterReflection, 'type' | 'defaultValue'> {
}
export interface DeclarationReflection extends ContainerReflection, S<M.DeclarationReflection, 'type' | 'defaultValue' | 'overwrites' | 'inheritedFrom' | 'extendedTypes' | 'extendedBy' | 'implementedTypes' | 'implementedBy' | 'implementationOf'> {
}
export interface TypeParameterReflection extends Reflection, S<M.TypeParameterReflection, 'type'> {
}
export interface ProjectReflection extends ContainerReflection {
}
export interface ContainerReflection extends Reflection, S<M.ContainerReflection, 'groups' | 'categories'> {
    sources?: ModelToObject<SourceReferenceWrapper[]>;
}
export interface ReflectionPointer extends S<M.Reflection, 'id'> {
}
export interface Reflection extends S<M.Reflection, 'id' | 'name' | 'kind' | 'kindString' | 'comment' | 'decorates'> {
    originalName?: M.Reflection['originalName'];
    flags: ReflectionFlags;
    decorators?: ModelToObject<DecoratorWrapper[]>;
    children?: ModelToObject<M.Reflection>[];
    parameters?: ModelToObject<M.Reflection>[];
    typeParameter?: ModelToObject<M.Reflection>[];
    signatures?: ModelToObject<M.Reflection>[];
    indexSignature?: ModelToObject<M.Reflection>[];
    getSignature?: ModelToObject<M.Reflection>[];
    setSignature?: ModelToObject<M.Reflection>[];
}
export declare type SomeType = ArrayType | ConditionalType | IndexedAccessType | InferredType | IntersectionType | IntrinsicType | PredicateType | ReferenceType | ReflectionType | StringLiteralType | TupleType | TypeOperatorType | TypeParameterType | UnionType | UnknownType;
export interface ArrayType extends Type, S<M.ArrayType, 'type' | 'elementType'> {
}
export interface ConditionalType extends Type, S<M.ConditionalType, 'type' | 'checkType' | 'extendsType' | 'trueType' | 'falseType'> {
}
export interface IndexedAccessType extends Type, S<M.IndexedAccessType, 'type' | 'indexType' | 'objectType'> {
}
export interface InferredType extends Type, S<M.InferredType, 'type' | 'name'> {
}
export interface IntersectionType extends Type, S<M.IntersectionType, 'type' | 'types'> {
}
export interface IntrinsicType extends Type, S<M.IntrinsicType, 'type' | 'name'> {
}
export interface QueryType extends Type, S<M.QueryType, 'type' | 'queryType'> {
}
export interface PredicateType extends Type, S<M.PredicateType, 'type' | 'name' | 'asserts' | 'targetType'> {
}
export interface ReferenceType extends Type, S<M.ReferenceType, 'type' | 'name' | 'typeArguments'> {
    id?: number;
}
export interface ReflectionType extends Type, S<M.ReflectionType, 'type'> {
    declaration?: ModelToObject<M.ReflectionType['declaration']>;
}
export interface StringLiteralType extends Type, S<M.StringLiteralType, 'type' | 'value'> {
}
export interface TupleType extends Type, S<M.TupleType, 'type'> {
    elements?: ModelToObject<M.TupleType['elements']>;
}
export interface TypeOperatorType extends Type, S<M.TypeOperatorType, 'type' | 'operator' | 'target'> {
}
export interface TypeParameterType extends Type, S<M.TypeParameterType, 'type' | 'name' | 'constraint'> {
}
export interface UnionType extends Type, S<M.UnionType, 'type' | 'types'> {
}
export interface UnknownType extends Type, S<M.UnknownType, 'type' | 'name'> {
}
export interface Type {
}
export interface ReflectionFlags extends Partial<S<M.ReflectionFlags, 'isPrivate' | 'isProtected' | 'isPublic' | 'isStatic' | 'isExported' | 'isExternal' | 'isOptional' | 'isRest' | 'hasExportAssignment' | 'isConstructorProperty' | 'isAbstract' | 'isConst' | 'isLet'>> {
}
export interface Comment extends Partial<S<M.Comment, 'shortText' | 'text' | 'returns' | 'tags'>> {
}
export interface CommentTag extends S<M.CommentTag, 'text'> {
    tag: M.CommentTag['tagName'];
    param?: M.CommentTag['paramName'];
}
export interface SourceReference extends S<M.SourceReference, 'fileName' | 'line' | 'character'> {
}
export interface Decorator extends S<M.Decorator, 'name' | 'type' | 'arguments'> {
}
export {};
