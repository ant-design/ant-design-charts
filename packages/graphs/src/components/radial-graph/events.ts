import { GraphData } from '@antv/g6';
import { findIndex } from '@antv/util';
import { RadialLayout } from '@antv/layout';
import { ITreeGraph, IG6GraphEvent, INode, NodeConfig, IEdge, FetchLoading } from '../../interface';
import { radialSectorLayout } from '../../layout';
import { createFetchLoading, closeFetchLoading } from '../../utils';

/** sector layout */
export const bindRadialExplore = (params: {
  graph: ITreeGraph;
  asyncData: (nodeCfg: NodeConfig) => GraphData;
  layout?: RadialLayout;
  fetchLoading?: FetchLoading;
}) => {
  const { graph, asyncData, layout: layoutCfg, fetchLoading } = params;
  const onDblClick = async (e: IG6GraphEvent) => {
    const item = e.item as INode;
    const itemModel = item.getModel();
    createFetchLoading(itemModel as NodeConfig, fetchLoading);
    const newData = await asyncData(item.getModel() as NodeConfig);
    closeFetchLoading();
    const nodes = graph.getNodes();
    const edges = graph.getEdges();
    const { x, y } = itemModel;
    const centerNodeId = graph.get('centerNode');
    const centerNode = centerNodeId ? graph.findById(centerNodeId) : nodes[0];
    const { x: centerX, y: centerY } = centerNode.getModel();
    // the max degree about foces(clicked) node in the original data
    const pureNodes = newData.nodes.filter(
      (item) => findIndex(nodes, (t: INode) => t.getModel().id === item.id) === -1,
    );
    const pureEdges = newData.edges.filter(
      (item) =>
        findIndex(edges, (t: IEdge) => {
          const { source, target } = t.getModel();
          return source === item.source && target === item.target;
        }) === -1,
    );

    // for graph.changeData()
    const allNodeModels: GraphData['nodes'] = [];
    const allEdgeModels: GraphData['edges'] = [];
    pureNodes.forEach((nodeModel) => {
      // set the initial positions of the new nodes to the focus(clicked) node
      nodeModel.x = itemModel.x;
      nodeModel.y = itemModel.y;
      graph.addItem('node', nodeModel);
    });

    // add new edges to graph
    pureEdges.forEach((em, i) => {
      graph.addItem('edge', em);
    });

    edges.forEach((e: IEdge) => {
      allEdgeModels.push(e.getModel());
    });
    nodes.forEach((n: INode) => {
      allNodeModels.push(n.getModel() as NodeConfig);
    });
    // 这里使用了引用类型
    radialSectorLayout({
      center: [centerX, centerY],
      eventNodePosition: [x, y],
      nodes: nodes.map((n) => n.getModel() as NodeConfig),
      layoutNodes: pureNodes,
      options: layoutCfg as any,
    });
    graph.positionsAnimate();
    graph.data({
      nodes: allNodeModels,
      edges: allEdgeModels,
    });
  };
  graph.on('node:dblclick', (e: IG6GraphEvent) => {
    onDblClick(e);
  });
};
