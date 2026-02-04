var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isEmpty, memoize } from '@antv/util';
import { idOf } from '../utils/id';
import { parseSize } from '../utils/size';
import { BaseLayout } from './base-layout';
/**
 * <zh/> 鱼骨图布局
 *
 * <en/> Fishbone layout
 * @remarks
 * <zh/> [鱼骨图布局](https://en.wikipedia.org/wiki/Ishikawa_diagram)是一种专门用于表示层次结构数据的图形布局方式。它通过模拟鱼骨的形状，将数据节点按照层次结构排列，使得数据的层次关系更加清晰直观。鱼骨图布局特别适用于需要展示因果关系、层次结构或分类信息的数据集。
 *
 * <en/> [Fishbone layout](https://en.wikipedia.org/wiki/Ishikawa_diagram) is a graphical layout method specifically designed to represent hierarchical data. By simulating the shape of a fishbone, it arranges data nodes according to their hierarchical structure, making the hierarchical relationships of the data clearer and more intuitive. The fishbone diagram layout is particularly suitable for datasets that need to display causal relationships, hierarchical structures, or classification information.
 */
export class FishboneLayout extends BaseLayout {
    constructor() {
        super(...arguments);
        this.id = 'fishbone';
    }
    getRoot() {
        const roots = this.context.model.getRootsData();
        if (isEmpty(roots) || roots.length > 2)
            return;
        return roots[0];
    }
    formatSize(nodeSize) {
        const nodeSizeFunc = typeof nodeSize === 'function' ? nodeSize : () => nodeSize;
        return (node) => parseSize(nodeSizeFunc(node));
    }
    doLayout(root, options) {
        const { hGap, getRibSep, vGap, nodeSize, height } = options;
        const { model } = this.context;
        const getSize = this.formatSize(nodeSize);
        let ribX = getSize(root)[0] + getRibSep(root);
        const getHorizontalOffset = (node, result = 0) => {
            var _a;
            result += hGap * ((node.children || []).length + 1);
            (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach((childId) => {
                var _a;
                const child = model.getNodeLikeDatum(childId);
                (_a = child.children) === null || _a === void 0 ? void 0 : _a.forEach((grandChildId) => {
                    const grandChild = model.getNodeLikeDatum(grandChildId);
                    result = getHorizontalOffset(grandChild, result);
                });
            });
            return result;
        };
        const getAuxiliaryPoint = (node) => {
            if (node.depth === 1)
                return ribX;
            const parent = model.getParentData(node.id, 'tree');
            if (isAtEvenDepth(node)) {
                const ancestor = model.getParentData(parent.id, 'tree');
                const deltaY = calculateY(node) - calculateY(ancestor);
                return getAuxiliaryPoint(parent) + (deltaY * hGap) / vGap;
            }
            else {
                const nodeIndex = (parent.children || []).indexOf(node.id);
                const followingSiblingsIncludeSelf = model.getNodeData((parent.children || []).slice(nodeIndex));
                return (calculateX(parent) -
                    followingSiblingsIncludeSelf.reduce((acc, sibling) => acc + getHorizontalOffset(sibling), 0) -
                    getSize(parent)[0] / 2);
            }
        };
        const calculateX = memoize((node) => {
            if (isRoot(node))
                return getSize(node)[0] / 2;
            const parent = model.getParentData(node.id, 'tree');
            if (isAtEvenDepth(node)) {
                return getAuxiliaryPoint(node) + getHorizontalOffset(node) + getSize(node)[0] / 2;
            }
            else {
                const deltaY = calculateY(node) - calculateY(parent);
                const ratio = hGap / vGap;
                return getAuxiliaryPoint(node) + deltaY * ratio;
            }
        }, (node) => node.id);
        const getParentY = (nodeId) => calculateY(model.getParentData(nodeId, 'tree'));
        const calculateY = memoize((node) => {
            if (isRoot(node))
                return height / 2;
            if (!isAtEvenDepth(node)) {
                // If the node has no children, calculate Y based on the parent
                if (isEmpty(node.children))
                    return getParentY(node.id) + vGap;
                // If the last child has no children, calculate Y based on the last child
                const lastChild = model.getNodeLikeDatum(node.children.slice(-1)[0]);
                if (isEmpty(lastChild.children))
                    return calculateY(lastChild) + vGap;
                // If the last child has children, calculate Y based on the last descendant of the last child
                const lastDescendant = model.getDescendantsData(node.id).slice(-1)[0];
                return (isAtEvenDepth(lastDescendant) ? getParentY(lastDescendant.id) : calculateY(lastDescendant)) + vGap;
            }
            else {
                // depth > 0 && isAtEvenDepth(node)
                const parent = model.getParentData(node.id, 'tree');
                const nodeIndex = parent.children.indexOf(node.id);
                // If the node is the first sibling, return Y based on parent
                if (nodeIndex === 0)
                    return getParentY(parent.id) + vGap;
                // If the previous sibling has no children, calculate Y based on the previous sibling
                const prevSibling = model.getNodeLikeDatum(parent.children[nodeIndex - 1]);
                if (isEmpty(prevSibling.children))
                    return calculateY(prevSibling) + vGap;
                // If the previous sibling has children, calculate Y based on the last descendant of the previous sibling
                const descendants = model.getDescendantsData(prevSibling.id);
                return (Math.max(...descendants.map((descendant) => isAtEvenDepth(descendant) ? getParentY(descendant.id) : calculateY(descendant))) + vGap);
            }
        }, (node) => node.id);
        let tmpRibX = 0;
        const result = { nodes: [], edges: [] };
        const layout = (node) => {
            var _a;
            (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach((childId) => layout(model.getNodeLikeDatum(childId)));
            const y = calculateY(node);
            const x = calculateX(node);
            result.nodes.push({ id: node.id, x, y });
            if (isRoot(node))
                return;
            const edge = model.getRelatedEdgesData(node.id, 'in')[0];
            const controlPoint = [getAuxiliaryPoint(node), isAtEvenDepth(node) ? y : getParentY(node.id)];
            result.edges.push({ id: idOf(edge), controlPoints: [controlPoint], relatedNodeId: node.id });
            tmpRibX = Math.max(tmpRibX, x + getRibSep(node));
            if (node.depth === 1)
                ribX = tmpRibX;
        };
        layout(root);
        return result;
    }
    placeAlterative(result, root) {
        const oddIndexedRibs = (root.children || []).filter((_, index) => index % 2 !== 0);
        if (oddIndexedRibs.length === 0)
            return result;
        const { model } = this.context;
        const rootY = result.nodes.find((node) => node.id === root.id).y;
        const shouldFlip = (nodeId) => {
            const ancestors = model.getAncestorsData(nodeId, 'tree');
            if (isEmpty(ancestors))
                return false;
            const ribId = ancestors.length === 1 ? nodeId : ancestors[ancestors.length - 2].id;
            return oddIndexedRibs.includes(ribId);
        };
        result.nodes.forEach((node) => {
            if (shouldFlip(node.id))
                node.y = 2 * rootY - node.y;
        });
        result.edges.forEach((edge) => {
            if (shouldFlip(edge.relatedNodeId)) {
                edge.controlPoints = edge.controlPoints.map((point) => [point[0], 2 * rootY - point[1]]);
            }
        });
    }
    rightToLeft(result, options) {
        result.nodes.forEach((node) => (node.x = options.width - node.x));
        result.edges.forEach((edge) => {
            edge.controlPoints = edge.controlPoints.map((point) => [options.width - point[0], point[1]]);
        });
        return result;
    }
    execute(data, propOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = Object.assign(Object.assign(Object.assign({}, FishboneLayout.defaultOptions), this.options), propOptions);
            const { direction, nodeSize } = options;
            const root = this.getRoot();
            if (!root)
                return data;
            const getSize = this.formatSize(nodeSize);
            options.vGap || (options.vGap = Math.max(...(data.nodes || []).map((node) => getSize(node)[1])));
            options.hGap || (options.hGap = Math.max(...(data.nodes || []).map((node) => getSize(node)[0])));
            let result = this.doLayout(root, options);
            this.placeAlterative(result, root);
            if (direction === 'RL') {
                result = this.rightToLeft(result, options);
            }
            const { model } = this.context;
            const nodes = [];
            const edges = [];
            result.nodes.forEach((node) => {
                const { id, x, y } = node;
                const nodeData = model.getNodeLikeDatum(id);
                nodes.push(assignElementStyle(nodeData, { x, y }));
            });
            result.edges.forEach((edge) => {
                const { id, controlPoints } = edge;
                const edgeData = model.getEdgeDatum(id);
                edges.push(assignElementStyle(edgeData, { controlPoints }));
            });
            return { nodes, edges };
        });
    }
}
FishboneLayout.defaultOptions = {
    direction: 'RL',
    getRibSep: () => 60,
};
const assignElementStyle = (element, style) => {
    return Object.assign(Object.assign({}, element), { style: Object.assign(Object.assign({}, (element.style || {})), style) });
};
const isRoot = (node) => node.depth === 0;
const isAtEvenDepth = (node) => (node.depth || (node.depth = 0)) % 2 === 0;
//# sourceMappingURL=fishbone.js.map