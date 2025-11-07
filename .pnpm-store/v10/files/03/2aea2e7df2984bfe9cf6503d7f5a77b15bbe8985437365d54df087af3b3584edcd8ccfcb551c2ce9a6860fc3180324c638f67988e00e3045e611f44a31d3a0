import { ConditionalType } from '../../../models';
import { TypeSerializerComponent } from '../../components';
import { Type as JSONType, ConditionalType as JSONConditionalType } from '../../schema';
export declare class ConditionalTypeSerializer extends TypeSerializerComponent<ConditionalType> {
    supports(item: unknown): boolean;
    toObject(conditional: ConditionalType, obj: Pick<JSONConditionalType, 'type'> & JSONType): JSONConditionalType;
}
