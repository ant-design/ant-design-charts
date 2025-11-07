import { COMBO_KEY } from '../constants';
import { idOf } from '../exports';
import { findActualConnectNodeData } from '../utils/edge';
import { BaseTransform } from './base-transform';
/**
 * <zh/> 获取边的实际端点
 *
 * <en/> Get the actual endpoints of the edge
 */
export class GetEdgeActualEnds extends BaseTransform {
    beforeDraw(input) {
        const { add, update } = input;
        const { model } = this.context;
        [...add.edges.entries(), ...update.edges.entries()].forEach(([, edge]) => {
            getEdgeEndsContext(model, edge);
        });
        return input;
    }
}
export const getEdgeEndsContext = (model, edge) => {
    const { source, target } = edge;
    const sourceNodeData = model.getElementDataById(source);
    const targetNodeData = model.getElementDataById(target);
    const actualSourceNode = findActualConnectNodeData(sourceNodeData, (id) => model.getParentData(id, COMBO_KEY));
    const actualTargetNode = findActualConnectNodeData(targetNodeData, (id) => model.getParentData(id, COMBO_KEY));
    const sourceNode = idOf(actualSourceNode);
    const targetNode = idOf(actualTargetNode);
    const ends = { sourceNode, targetNode };
    if (edge.style) {
        Object.assign(edge.style, ends);
    }
    else
        edge.style = ends;
    return edge;
};
//# sourceMappingURL=get-edge-actual-ends.js.map