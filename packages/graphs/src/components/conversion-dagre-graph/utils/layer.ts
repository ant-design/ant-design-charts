import type { Graph } from '@antv/g6';
import type { Rankdir } from '../types';
import type { LayerOrder } from '../types';

// 在画布上绘制层级名称
export const drawLayerName = (graph: Graph, layerOrder: LayerOrder, rankdir: Rankdir) => {
  const nodes = graph.getNodes().map((node) => node.getModel());
  if (!graph || !Array.isArray(layerOrder) || !layerOrder?.length) {
    return;
  }

  const group = graph.getGroup();
  // 删除已有的层级名称容器分组
  removeLayerNameGroup(graph);
  // 添加层级名称容器的分组
  const layerNameContainerGroup = group.addGroup({ id: 'layer-name-container-group' });

  // 过滤得到节点中实际存在的有效层级
  const effectiveLayer = layerOrder.filter((layerName) =>
    nodes.find((node) => (node.custom as any)?.layerName === layerName),
  );
  // 存储所有层级名称的x: 需遍历所有节点找出最左侧的节点的x, 实现层级名称纵向对齐
  let minX = Infinity;
  let minY = Infinity;
  // 存储所有层级名称的x: 同层级节点x值的分布最多的值
  const xInfo = [];
  // 存储所有层级名称的y: 同层级节点y值的分布最多的值
  const yInfo = [];
  effectiveLayer.forEach((layerName) => {
    const countYInfo = {};
    const countXInfo = {};
    nodes.forEach((node) => {
      if ((node.custom as any).layerName === layerName) {
        // 找到所有节点中最左侧的节点的x坐标
        if (node.x < minX) {
          minX = node.x;
        }
        // 找到所有节点中最顶部的节点的y坐标
        if (node.y < minY) {
          minY = node.y;
        }
        const xKey = String(node.x);
        const yKey = String(node.y);
        // 记录所属同层级节点的x、y值分布（考虑节点拖动保存情况）
        if (Object.keys(countXInfo).indexOf(String(xKey)) === -1) {
          countXInfo[xKey] = 1;
        } else {
          countXInfo[xKey] += 1;
        }
        if (Object.keys(countYInfo).indexOf(String(yKey)) === -1) {
          countYInfo[yKey] = 1;
        } else {
          countYInfo[yKey] += 1;
        }
      }
    });
    // 找出同层级节点中最多分布的x值（考虑节点拖动保存情况）
    const xInfoKeys = Object.keys(countXInfo);
    let mostX = xInfoKeys[0];
    xInfoKeys.forEach((key) => {
      if (countXInfo[key] > countXInfo[mostX]) {
        mostX = key;
      }
    });

    xInfo.push(Number(mostX));

    // 找出同层级节点中最多分布的y值（考虑节点拖动保存情况）
    const yInfoKeys = Object.keys(countYInfo);
    let mostY = yInfoKeys[0];
    yInfoKeys.forEach((key) => {
      if (countYInfo[key] > countYInfo[mostY]) {
        mostY = key;
      }
    });
    yInfo.push(Number(mostY));
  });

  // 在画布中绘制有效层级
  effectiveLayer.forEach((layerName, index) => {
    if (isNaN(xInfo[index]) || isNaN(yInfo[index])) {
      return;
    }
    // 层级名称换行处理：先暂时处理每隔4个字符换行一次，待G6升级g-canvas 1.x以后使用wordWrap代替
    let text = '';
    const textArray = layerName.split('');
    textArray.forEach((item, index) => {
      text += index > 0 && index < textArray.length - 1 && index % 4 === 3 ? `${item}\n` : item;
    });
    // 添加层级名称的分组
    const layerNameGroup = layerNameContainerGroup.addGroup({ id: `layer-name-group-${index}` });
    if (rankdir === 'TB') {
      layerNameGroup.setMatrix([1, 0, 0, 0, 1, 0, minX - 102, yInfo[index], 1]);
    } else {
      layerNameGroup.setMatrix([1, 0, 0, 0, 1, 0, xInfo[index] + 32, minY - 102, 1]);
    }

    // 监听层级名称分组的拖动: 一期暂不支持，后续和节点拖动保存位置一起做
    // layerNameGroup.on('drag', e => {
    //   const { pointX, pointY } = e;
    //   layerNameGroup.setMatrix([1, 0, 0, 0, 1, 0, pointX, pointY, 1]);
    // });

    // 向层级名称的分组中添加 层级名称图形
    const layerNameShape = layerNameGroup.addShape('text', {
      attrs: {
        text,
        x: 0,
        y: 0,
        fontFamily: 'PingFangSC',
        fontSize: 16,
        fontWeight: 400,
        fill: 'rgb(3,34,98)',
        opacity: 0.65,
        lineHeight: 18,
        textBaseline: 'top',
        textAlign: 'center',
        // wordWrap: true, // g-canvas 1.x以上版本才支持
        // wordWrapWidth: 48,
      },
      name: `layer-name-${layerName}`,
      // draggable: true, // 一期暂不支持，后续和节点拖动保存位置一起做
    });

    const layerNameBbox = layerNameShape.getBBox();

    // 向层级名称的分组中添加 层级名称背景图形
    layerNameGroup.addShape('rect', {
      attrs: {
        x: -34, // 留白2
        y: -2,
        width: 68,
        height: layerNameBbox?.height + 4,
        fill: '#B8C7E6',
        opacity: 0.12,
      },
      name: `layer-name-${layerName}`,
      // draggable: true, // 一期暂不支持，后续和节点拖动保存位置一起做
    });

    layerNameShape.toFront();
  });
};

// 删除已有的层级名称分组
export const removeLayerNameGroup = (graph: Graph) => {
  const group = graph.getGroup();
  const layerNameGroup = group.findById('layer-name-container-group');
  if (layerNameGroup) {
    group.removeChild(layerNameGroup);
  }
};
