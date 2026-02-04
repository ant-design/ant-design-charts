import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import BaseLayer from '../Base/BaseLayer';
interface SymbolInstanceInitParams extends BaseLayerParams {
    symbolID: string;
}
declare class SymbolInstance extends BaseLayer {
    constructor({ x, y, width, height, symbolID }: SymbolInstanceInitParams);
    symbolID: string;
    shouldBreakMaskChain: boolean;
    toSketchJSON(): SketchFormat.SymbolInstance;
}
export default SymbolInstance;
