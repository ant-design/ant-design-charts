import { Reflection, Type } from '../models';
import { Serializer } from './serializer';
import { ModelToObject } from './schema';
export declare abstract class SerializerComponent<T> {
    static PRIORITY: number;
    constructor(owner: Serializer);
    protected owner: Serializer;
    abstract serializeGroup(instance: unknown): boolean;
    get priority(): number;
    abstract supports(item: unknown): boolean;
    abstract toObject(item: T, obj?: object): Partial<ModelToObject<T>>;
}
export declare abstract class ReflectionSerializerComponent<T extends Reflection> extends SerializerComponent<T> {
    serializeGroup(instance: unknown): boolean;
}
export declare abstract class TypeSerializerComponent<T extends Type> extends SerializerComponent<T> {
    serializeGroup(instance: unknown): boolean;
}
