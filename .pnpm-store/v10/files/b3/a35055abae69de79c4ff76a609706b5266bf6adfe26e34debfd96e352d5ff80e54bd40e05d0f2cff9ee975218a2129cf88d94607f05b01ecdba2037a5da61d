import { rad2deg } from '@antv/g';
import { idOf } from '../utils/id';
import { positionOf } from '../utils/position';
import { parseSize } from '../utils/size';
import { rad, subtract } from '../utils/vector';
import { BaseTransform } from './base-transform';
/**
 * <zh/> 根据径向布局自动调整节点标签样式，包括位置和旋转角度
 *
 * <en/> Automatically adjust the style of node labels according to the radial layout, including position and rotation angle
 */
export class PlaceRadialLabels extends BaseTransform {
    constructor(context, options) {
        super(context, Object.assign({}, PlaceRadialLabels.defaultOptions, options));
    }
    get ref() {
        return this.context.model.getRootsData()[0];
    }
    afterLayout() {
        var _a;
        const refPoint = positionOf(this.ref);
        const { graph, model } = this.context;
        const data = model.getData();
        (_a = data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((datum) => {
            var _a;
            if (idOf(datum) === idOf(this.ref))
                return;
            const radian = rad(subtract(positionOf(datum), refPoint));
            const isLeft = Math.abs(radian) > Math.PI / 2;
            const isLeaf = !datum.children || datum.children.length === 0;
            const nodeId = idOf(datum);
            const node = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement(nodeId);
            if (!node || !node.isVisible())
                return;
            const nodeHalfWidth = parseSize(graph.getElementRenderStyle(nodeId).size)[0] / 2;
            const offset = (isLeaf ? 1 : -1) * (nodeHalfWidth + this.options.offset);
            const labelTransform = [
                ['translate', offset * Math.cos(radian), offset * Math.sin(radian)],
                ['rotate', isLeft ? rad2deg(radian) + 180 : rad2deg(radian)],
            ];
            model.updateNodeData([
                {
                    id: idOf(datum),
                    style: {
                        labelTextAlign: isLeft === isLeaf ? 'right' : 'left',
                        labelTextBaseline: 'middle',
                        labelTransform,
                    },
                },
            ]);
        });
        graph.draw();
    }
}
PlaceRadialLabels.defaultOptions = {
    offset: 5,
};
//# sourceMappingURL=place-radial-labels.js.map