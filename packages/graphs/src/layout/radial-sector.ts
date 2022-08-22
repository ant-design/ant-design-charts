type INode = {
  id: string;
  x?: number;
  y?: number;
  layer?: number;
  [key: string]: unknown;
};

export type IRadialSectorLayout = {
  /** 布局中心 [x,y] */
  center: [number, number];
  /** 事件节点坐标 */
  eventNodePosition: [number, number];
  /** 画布当前节点信息，可通过 graph.getNodes().map(n => n.getModel()) 获取 */
  nodes: INode[];
  /** 布局节点，拓展时的新节点，会和当前画布节点做去重处理 */
  layoutNodes: INode[];
  options?: {
    /** 圈层半径 */
    unitRadius: number;
    /** 节点直径 */
    nodeSize: number;
    /** 节点间距 */
    nodeSpacing: number;
  };
};

export const radialSectorLayout = (params: IRadialSectorLayout): INode[] => {
  const { center, eventNodePosition, nodes: allNodes, layoutNodes, options = {} } = params;
  const { unitRadius = 80, nodeSize = 20, nodeSpacing = 10 } = options as IRadialSectorLayout['options'];

  if (!layoutNodes.length) layoutNodes;

  // 过滤已经在画布上的节点
  const pureLayoutNodes = layoutNodes.filter((node) => {
    return (
      allNodes.findIndex((n) => {
        const { id } = n;
        return id === node.id;
      }) !== -1
    );
  });
  if (!pureLayoutNodes.length) return layoutNodes;

  const getDistance = (point1: Partial<INode>, point2: Partial<INode>) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  };

  // 节点裁剪
  const [centerX, centerY] = center;
  const [ex, ey] = eventNodePosition;
  const diffX = ex - centerX;
  const diffY = ey - centerY;
  const allNodePositions: INode[] = [];
  allNodes.forEach((n) => {
    const { id, x, y } = n;
    allNodePositions.push({
      id,
      x,
      y,
      layer: Math.round(getDistance({ x, y }, { x: centerX, y: centerY })) / unitRadius,
    });
  });

  const currentRadius = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const degree = Math.atan2(diffY, diffX);
  let minRadius = currentRadius + unitRadius;

  let pureNodePositions: Partial<INode>[] = [];
  const getNodesPosition = (nodes: INode[], r: number) => {
    const degreeStep = 2 * Math.asin((nodeSize + nodeSpacing) / 2 / r);
    pureNodePositions = [];
    const l = nodes.length - 1;
    nodes.forEach((n, i) => {
      n.x = centerX + r * Math.cos(degree + (-l / 2 + i) * degreeStep);
      n.y = centerY + r * Math.sin(degree + (-l / 2 + i) * degreeStep);
      pureNodePositions.push({ x: n.x as number, y: n.y as number });
    });
  };

  const checkOverlap = (nodesPosition: INode[], pureNodesPosition: Partial<INode>[]) => {
    let hasOverlap = false;
    const checkLayer = Math.round(minRadius / unitRadius);
    const loopNodes = nodesPosition.filter((n) => n.layer === checkLayer);
    for (let i = 0; i < loopNodes.length; i++) {
      const n = loopNodes[i];
      // 因为是同心圆布局，最先相交的应该是收尾节点
      if (
        getDistance(pureNodesPosition[0], n) < nodeSize ||
        getDistance(pureNodesPosition[pureNodesPosition.length - 1], n) < nodeSize
      ) {
        hasOverlap = true;
        break;
      }
    }
    return hasOverlap;
  };
  getNodesPosition(pureLayoutNodes, minRadius);
  while (checkOverlap(allNodePositions, pureNodePositions)) {
    minRadius += unitRadius;
    getNodesPosition(pureLayoutNodes, minRadius);
  }
  return layoutNodes;
};
