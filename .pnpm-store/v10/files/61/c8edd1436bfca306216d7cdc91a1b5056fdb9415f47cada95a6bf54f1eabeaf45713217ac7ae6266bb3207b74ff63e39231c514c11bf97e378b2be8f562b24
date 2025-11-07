import { SerializerComponent } from '../../components';
import { SourceReferenceWrapper } from '../models';
import { SourceReference as JSONSourceReference } from '../../schema';
export declare class SourceReferenceContainerSerializer extends SerializerComponent<SourceReferenceWrapper> {
    static PRIORITY: number;
    serializeGroup(instance: unknown): boolean;
    supports(_: unknown): boolean;
    toObject({ sourceReference: ref }: SourceReferenceWrapper, obj?: Partial<JSONSourceReference>): JSONSourceReference;
}
