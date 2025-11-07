import { Comment } from '../../../models';
import { SerializerComponent } from '../../components';
import { Comment as JSONComment } from '../../schema';
export declare class CommentSerializer extends SerializerComponent<Comment> {
    static PRIORITY: number;
    serializeGroup(instance: unknown): boolean;
    supports(t: unknown): boolean;
    toObject(comment: Comment, obj?: Partial<JSONComment>): JSONComment;
}
