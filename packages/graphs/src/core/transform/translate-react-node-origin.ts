import type { DrawData, Size } from '@antv/g6';
import { BaseTransform, parseSize } from '@antv/g6';

/**
 * HTML 元素的默认原点位置在左上角，而 G6 的默认原点位置在中心，所以需要调整 dx 和 dy
 */
export class TranslateReactNodeOrigin extends BaseTransform {
  public beforeDraw(input: DrawData): DrawData {
    const { graph, element } = this.context;

    const {
      add: { nodes: nodesToAdd },
      update: { nodes: nodesToUpdate },
    } = input;

    [...nodesToAdd.values(), ...nodesToUpdate.values()].forEach((datum) => {
      // @ts-expect-error private method invoke
      element!.computeElementDefaultStyle('node', { graph, datum });
      const style = element!.getDefaultStyle(datum.id);
      const [width, height] = parseSize(style.size as Size);
      if (!datum.style) datum.style = {};
      datum.style.dx = -width / 2;
      datum.style.dy = -height / 2;
    });

    return input;
  }
}
