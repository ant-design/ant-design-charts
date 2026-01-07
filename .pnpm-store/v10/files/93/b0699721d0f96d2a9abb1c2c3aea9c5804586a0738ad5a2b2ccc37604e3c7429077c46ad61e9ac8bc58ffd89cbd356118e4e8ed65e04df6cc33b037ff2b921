import { EventDispatcher } from '../utils';
import { ProjectReflection } from '../models';
import { SerializerComponent } from './components';
import { SerializeEventData } from './events';
import { ModelToObject } from './schema';
export declare class Serializer extends EventDispatcher {
    static EVENT_BEGIN: string;
    static EVENT_END: string;
    private serializers;
    constructor();
    addSerializer(serializer: SerializerComponent<any>): void;
    toObject<T>(value: T, init?: object): ModelToObject<T>;
    projectToObject(value: ProjectReflection, eventData?: {
        begin?: SerializeEventData;
        end?: SerializeEventData;
    }): ModelToObject<ProjectReflection>;
    private findSerializers;
}
