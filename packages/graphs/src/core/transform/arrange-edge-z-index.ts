import type { DrawData } from '@antv/g6';
import { BaseTransform } from '@antv/g6';

/**
 * ArrangeEdgeZIndex transform, specifically for indented tree layout
 */
export class ArrangeEdgeZIndex extends BaseTransform {
  public beforeDraw(input: DrawData): DrawData {
    const { model } = this.context;
    const { nodes, edges } = model.getData();

    const oneLevelNodes = nodes.filter((node) => node.depth === 1);
    const oneLevelNodeIds = oneLevelNodes.map((node) => node.id);

    edges.forEach((edge) => {
      if (oneLevelNodeIds.includes(edge.target)) {
        edge.style ||= {};
        edge.style.zIndex = oneLevelNodes.length - oneLevelNodes.findIndex((node) => node.id === edge.target);
      }
    });

    return input;
  }
}
