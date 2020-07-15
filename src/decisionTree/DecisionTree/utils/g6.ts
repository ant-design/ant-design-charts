import { isNil, toNumber } from 'lodash';

/**
 * 将浮点数转换为百分比，默认保留两位小数，可通过 decimal 参数指定保留的小数位数
 */
export function toPercent(value: number | string, decimal: number = 2): string {
  return isNil(value)
    ? ''
    : `${Math.round(toNumber(value) * Math.pow(10, decimal + 2)) /
        Math.pow(10, decimal)}%`;
}


export function getCenterPointByGraph(graph: any) {
  const group = graph.get('group');
  if (group) {
    const { minX, minY, maxX, maxY } = group.getCanvasBBox();
    return {
      x: (minX + maxX) / 2,
      y: (minY + maxY) / 2,
    };
  }
  // 默认返回 undefined，这样传入 G6 时会使用默认的参数值
  return undefined;
}

export function renderAtCenter(data: any, graph: any) {
  if(data){
    graph.data(data);
    graph.render();
    graph.setAutoPaint(false);
    graph.fitView();
    graph.zoomTo(1, getCenterPointByGraph(graph));
    graph.setAutoPaint(true);
  }
}

export function renderRootAtCenter(data: any, graph: any, offset: number = 150) {
  if(data){
    graph.data(data);
    graph.render();
    graph.setAutoPaint(false);
    graph.fitView();
    graph.zoomTo(1, getCenterPointByGraph(graph));
    const group = graph.get('group');
    if(group) {
      const { minX, minY } = group.getCanvasBBox();
      graph.translate(-minX + 60, -minY + offset);
    }
    graph.setAutoPaint(true);
  }
}

export function getNodeText(name: string){
  let content = '';
  let len = 0;
  for(let i = 0; i< (name || '').length; i++) {
    if (name.charCodeAt(i) > 0 && name.charCodeAt(i) < 128) {
      content += name[i];
      len += 1;
    } else {
      content += name[i];
      len += 2;
    }
    if(len >= 20) {
      content += `\n`;
      len = 0;
    }
  }

  content = content.trim();
  const contentList = content.split('\n');
  content = (contentList.length > 3 ? contentList.slice(0, 2).concat(`${contentList[2].slice(0, 8)} ...`) : contentList).join('\n');
  return content;
}

export function isTrackPad(e: any) {
  let isTP = false;
  const wheelDeltaY = Math.abs(e.wheelDeltaY);
  const deltaY = Math.abs(e.deltaY);
  if (e.wheelDeltaY) {
    if (
      wheelDeltaY <= deltaY * 3 + 1 &&
      wheelDeltaY >= deltaY * 3 - 1
    ) {
      isTP = true;
    }
  }
  else if (e.deltaMode === 0) {
    isTP = true;
  }
  return isTP;
}