import { BaseTransform, idOf } from '@antv/g6';

export class TranslateReactNodeOrigin extends BaseTransform {
  public afterLayout() {
    const { graph, model, element } = this.context;

    graph.getNodeData().forEach((datum) => {
      const nodeId = idOf(datum);

      const node = element!.getElement(nodeId);
      if (!node) return;

      const style = graph.getElementRenderStyle(nodeId);
      const { size } = style;

      model.updateNodeData([
        {
          id: nodeId,
          // HTML 元素的默认原点位置在左上角，而 G6 的默认原点位置在中心，所以需要调整 dx 和 dy
          style: {
            dx: -size[0] / 2,
            dy: -size[1] / 2,
          },
        },
      ]);
    });

    graph.draw();
  }
}
