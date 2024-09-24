import { HoverActivate, idOf } from '@antv/g6';

export class HoverActivateNeighbors extends HoverActivate {
  getActiveIds(event) {
    const { model, graph } = this.context;
    const targetId = event.target.id;
    const targetType = graph.getElementType(targetId);

    const ids = [targetId];
    if (targetType === 'edge') {
      const edge = model.getEdgeDatum(targetId);
      ids.push(edge.source, edge.target);
    } else if (targetType === 'node') {
      ids.push(...model.getRelatedEdgesData(targetId).map(idOf));
    }

    graph.frontElement(ids);

    return ids;
  }
}
