import { InferredType } from '../../../models';
import { TypeSerializerComponent } from '../../components';
import { Type as JSONType, InferredType as JSONInferredType } from '../../schema';
export declare class InferredTypeSerializer extends TypeSerializerComponent<InferredType> {
    supports(item: unknown): boolean;
    toObject(inferred: InferredType, obj: JSONType & Pick<JSONInferredType, 'type'>): JSONInferredType;
}
