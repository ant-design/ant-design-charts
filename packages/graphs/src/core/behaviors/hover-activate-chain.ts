import type { EdgeDirection, ID } from '@antv/g6';
import { HoverActivate, idOf } from '@antv/g6';

/**
 * Behavior to activate the hovered element and its chain (including nodes and edges).
 */
export class HoverActivateChain extends HoverActivate {
  protected getActiveIds(event) {
    const { model, graph } = this.context;
    const targetId = event.target.id;
    const targetType = graph.getElementType(targetId);

    const ids = [targetId];
    if (targetType === 'edge') {
      const edge = model.getEdgeDatum(targetId);
      this.collectChainNodes(edge.source, 'in', ids);
      this.collectChainNodes(edge.target, 'out', ids);
    } else if (targetType === 'node') {
      this.collectChainNodes(targetId, 'both', ids);
    }

    graph.frontElement(ids);

    return ids;
  }

  private collectChainNodes(nodeId: ID, direction: EdgeDirection, ids: ID[]) {
    const { model } = this.context;
    const edges = model.getRelatedEdgesData(nodeId, direction);

    edges.forEach((edge) => {
      if (!ids.includes(idOf(edge))) ids.push(idOf(edge));
      if (!ids.includes(edge.source)) {
        ids.push(edge.source);
        this.collectChainNodes(edge.source, 'in', ids);
      }
      if (!ids.includes(edge.target)) {
        ids.push(edge.target);
        this.collectChainNodes(edge.target, 'out', ids);
      }
    });
  }
}
