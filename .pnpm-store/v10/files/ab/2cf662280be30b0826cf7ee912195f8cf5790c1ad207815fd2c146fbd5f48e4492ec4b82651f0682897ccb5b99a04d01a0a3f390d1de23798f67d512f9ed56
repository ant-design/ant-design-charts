import { SerializerComponent } from '../components';
import { DecoratorWrapper } from './models/decorator-wrapper';
import { Decorator } from '../schema';
export declare class DecoratorContainerSerializer extends SerializerComponent<DecoratorWrapper> {
    static PRIORITY: number;
    serializeGroup(instance: unknown): boolean;
    supports(_: unknown): boolean;
    toObject({ decorator }: DecoratorWrapper, obj?: Partial<Decorator>): Decorator;
}
