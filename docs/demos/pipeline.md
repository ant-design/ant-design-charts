# Pipeline

## 平滑连线

```jsx
import React from 'react';
import { message } from 'antd'
import { Pipeline } from '@ant-design/charts';

const PipelineDemo = () => {
  const data = {
    nodes: [
      { id: '1' },
      { id: '2' },
      { id: '3', data: { disabled: true } },
      { id: '4', data: { disabled: true } },
      { id: '5' },
      { id: '6' },
      { id: '7' },
      { id: '8' },
    ],
    edges: [
      { source: '1', target: '2', tip: '运行状态成功', data: '运行成功',},
      { source: '2', target: '3', label: '备注', },
      { source: '2', target: '4', label: '备注', },
      { source: '4', target: '5', },
      { source: '4', target: '6' },
      { source: '4', target: '7' },
      { source: '4', target: '8' },
    ]
  }

  const renderNode = data => {
    return (
      <div style={{ 
        width: '100%',
        height: '100%',
        border: '1px solid #3577DE',
        borderRadius: 4,
        backgroundColor: '#DFEAFF',
        opacity: data.disabled ? 0.4 : 1,
      }}>
        <div style={{ margin: '8px 0 2px 0' }}>
          <img style={{ width: 16, height: 16, margin: '0 8px' }} src="https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*GY1bRIKjcuYAAAAAAAAAAAAAARQnAQ" />
          <span>Title</span>
        </div>
        <div style={{ fontSize: 12, marginLeft: 34 }}>
          This is Content
        </div>
      </div>
    )
  }

  const onEdgeClick = edge => {
    message.info(edge.data || 'no data')
  }

  return (
    <Pipeline
      width={1200}
      height={500}
      nodeWidth={200}
      nodeHeight={60}
      data={data}
      nodeComponent={renderNode}
      layout={{ ranksep: 90 }}
      onEdgeClick={onEdgeClick}
    />
  )
}

export default PipelineDemo
```

## 正交连线

```jsx
import React from 'react';
import { message } from 'antd'
import { Pipeline } from '@ant-design/charts';

const PipelineDemo = () => {
  const data = {
    nodes: [
      { id: '1' },
      { id: '2' },
      { id: '3', data: { disabled: true } },
      { id: '4', data: { disabled: true } },
      { id: '5' },
      { id: '6' },
      { id: '7' },
      { id: '8' },
    ],
    edges: [
      { source: '1', target: '2', tip: '运行状态成功', data: '运行成功',},
      { source: '2', target: '3', },
      { source: '2', target: '4', },
      { source: '4', target: '5', },
      { source: '4', target: '6' },
      { source: '4', target: '7' },
      { source: '4', target: '8' },
    ]
  }

  const renderNode = data => {
    return (
      <div style={{ 
        width: '100%',
        height: '100%',
        border: '1px solid #3577DE',
        borderRadius: 4,
        backgroundColor: '#DFEAFF',
        opacity: data.disabled ? 0.4 : 1,
      }}>
        <div style={{ margin: '8px 0 2px 0' }}>
          <img style={{ width: 16, height: 16, margin: '0 8px' }} src="https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*GY1bRIKjcuYAAAAAAAAAAAAAARQnAQ" />
          <span>Title</span>
        </div>
        <div style={{ fontSize: 12, marginLeft: 34 }}>
          This is Content
        </div>
      </div>
    )
  }

  const onEdgeClick = edge => {
    message.info(edge.data || 'no data')
  }

  return (
    <Pipeline
      width={1200}
      height={500}
      nodeWidth={200}
      nodeHeight={60}
      data={data}
      nodeComponent={renderNode}
      layout={{ ranksep: 90 }}
      onEdgeClick={onEdgeClick}
      router={{ 
        name: 'er', 
        args: {
          offset: 55,
          min: 55,
          direction: 'H',
        }
      }}
      connector={{
        name: 'rounded',
        args: {
          radius: 6,
        },
      }}
    />
  )
}

export default PipelineDemo
```

## 配置项

Pipeline 支持以下配置项：

### 组件配置

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| width | number | - | 画布宽度 |
| height | number | - | 画布高度 |
| nodeWidth | number | 200 | 节点宽度 |
| nodeHeight | number | 60 | 节点高度 |
| nodeComponent | React.ReactElement \| ((data: any) => React.ReactElement) | - | 节点内容，可以是 `React` 组件或者返回 `React` 组件的函数 |
| edgeColor | string | #bfbfbf | 边的颜色 |
| edgeWidth | number | 1 | 边的宽度 |
| labelColor | string | #8c8c8c | 边上文本颜色 |
| labelBackgroundColor | string | #fff | 边上文本背景色 |
| labelPosition | { distance?: number; offset?: number } | - | 边上文本的位置，`distance` 是水平方向上的偏移，`offset` 是垂直方向上的偏移 |
| router | string \| { name: string; args: any } | normal | [X6 路由配置](https://x6.antv.vision/zh/docs/api/registry/router) |
| connector | string \| { name: string; args: any } | smooth | [X6 连接器配置](https://x6.antv.vision/zh/docs/api/registry/connector) |
| marker | string \| null \| { name: string; size: number } | - | [X6 箭头配置](https://x6.antv.vision/zh/docs/api/registry/marker) |
| sourceAnchor | string \| { name: string; args: any } | right | [源节点的连接锚点](https://x6.antv.vision/zh/docs/api/registry/node-anchor) |
| targetAnchor | string \| { name: string; args: any } | left | [目标节点的连接锚点](https://x6.antv.vision/zh/docs/api/registry/node-anchor) |
| data | { nodes: PipelineNode[], edges?: PipelineEdge[] } | - | 组件数据，包括 `nodes` 和 `edges` |
| layout | Object | - | 布局配置，默认为 `dagre` 布局，详情见 [X6 布局](https://x6.antv.vision/zh/docs/tutorial/advanced/layout) |
| onEdgeClick | (edge: Edge) => void | - | 边点击的回调函数 |

### node 数据

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| id | string | - | 节点唯一标识 |
| width | number | 200 | 节点宽度，优先级高于组件配置中的 `nodeWidth` |
| height | number | 60 | 节点高度，优先级高于组件配置中的 `nodeHeight` |
| data | any | any | 业务数据 |
| component | React.ReactElement \| ((data: any) => React.ReactElement) | - | 节点内容，优先级高于组件配置中的 `nodeComponent` |

### edge 数据

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| source | string | - | 源节点ID |
| target | string | - | 目标节点ID |
| sourceAnchor | string \| { name: string; args: any } | right | 源节点的连接锚点 |
| targetAnchor | string \| { name: string; args: any } | left | 目标节点的连接锚点 |
| edgeColor | string | #bfbfbf | 边的颜色 |
| edgeWidth | number | 1 | 边的宽度 |
| label | string | - | 边上文本内容 |
| labelColor | string | #8c8c8c | 边上文本颜色 |
| labelBackgroundColor | string | #fff | 边上文本背景色 |
| labelPosition | { distance?: number; offset?: number } | - | 边上文本的位置 |
| tip | string | - | 边的 `tooltip` 提示 |