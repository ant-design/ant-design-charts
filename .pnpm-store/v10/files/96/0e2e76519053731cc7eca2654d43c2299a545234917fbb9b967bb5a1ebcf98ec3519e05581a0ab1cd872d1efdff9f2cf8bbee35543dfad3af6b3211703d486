import type { RuntimeContext } from '../runtime/types';
import type { GraphData } from '../spec';
import type { BaseLayoutOptions } from './types';
/**
 * <zh/> 布局的基类
 *
 * <en/> Base class for layout
 */
export declare abstract class BaseLayout<O extends BaseLayoutOptions = any> {
    abstract id: string;
    options: O;
    protected context: RuntimeContext;
    constructor(context: RuntimeContext, options?: O);
    stop?: () => void;
    tick?: (iterations?: number) => GraphData;
    abstract execute(model: GraphData, options?: O): Promise<GraphData>;
}
