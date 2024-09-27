import type { BaseTransformOptions, CategoricalPalette, DrawData, RuntimeContext } from '@antv/g6';
import { BaseTransform } from '@antv/g6';

export interface AssignColorByBranchOptions extends BaseTransformOptions {
  colors?: CategoricalPalette;
}

export class AssignColorByBranch extends BaseTransform {
  static defaultOptions: Partial<AssignColorByBranchOptions> = {
    colors: [
      '#1783FF',
      '#F08F56',
      '#D580FF',
      '#00C9C9',
      '#7863FF',
      '#DB9D0D',
      '#60C42D',
      '#FF80CA',
      '#2491B3',
      '#17C76F',
    ],
  };

  constructor(context: RuntimeContext, options: AssignColorByBranchOptions) {
    super(context, Object.assign({}, AssignColorByBranch.defaultOptions, options));
  }

  beforeDraw(input: DrawData): DrawData {
    const nodes = this.context.model.getNodeData();

    if (nodes.length === 0) return input;

    let colorIndex = 0;
    const dfs = (nodeId: string, color?: string) => {
      const node = nodes.find((datum) => datum.id == nodeId);
      if (!node) return;

      node.style ||= {};
      node.style.color = color || this.options.colors[colorIndex++ % this.options.colors.length];
      node.children?.forEach((childId) => dfs(childId, node.style?.color as string));
    };

    nodes.filter((node) => node.depth === 1).forEach((rootNode) => dfs(rootNode.id));

    return input;
  }
}
