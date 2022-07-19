# @ant-design/flowchart

<div align="center">

Flowchart solutions, based on  [XFlow](https://github.com/antvis/xflow).

![npm](https://img.shields.io/npm/v/@ant-design/charts)
![npm](https://img.shields.io/npm/dm/@ant-design/flowchart)
[![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers)
[![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a>
</p>

</div>

## Case

<img src=https://gw.alipayobjects.com/zos/antfincdn/4o%26HrctHA3/bcbfb761-4fbb-4bc9-8875-8e71853f3253.png height=240 />
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*ixVAQrEoCTcAAAAAAAAAAAAAARQnAQ height=240 />


## ✨ Features

- Easy to use
- TypeScript

## 📦 Installation

```bash | pure
$ npm install @ant-design/flowchart
```


## 🔨 Usage

```tsx | pure
import React from 'react';
import { Flowchart } from '@ant-design/flowchart';
import "antd/dist/antd.css";
import "@ant-design/flowchart/dist/index.css";

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        onSave={(d) => {
          console.log(d, JSON.stringify(d));
        }}
        toolbarPanelProps={{
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        scaleToolbarPanelProps={{
          layout: 'horizontal',
          position: {
            right: 0,
            top: -40,
          },
          style: {
            width: 150,
            height: 39,
            left: 'auto',
            background: 'transparent',
          },
        }}
        canvasProps={{
          position: {
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
        nodePanelProps={{
          position: { width: 160, top: 40, bottom: 0, left: 0 },
        }}
        detailPanelProps={{
          position: { width: 200, top: 40, bottom: 0, right: 0 },
        }}
      />
    </div>
  );
};
export default DemoFlowchart;
```

Preview

<img src=https://gw.alipayobjects.com/zos/antfincdn/gqf81qzYtJ/ae69e47b-2e1c-4dbb-9619-9a852b402d5c.png height=240>


## 📜 Document & API

```ts
export interface FlowchartProps extends FlowchartContainerProps {
  /** 默认数据 */
  data?: Datum;
  
  /** 画布是否自动居中 */
  isAutoCenter?: boolean;
  
  /** 节点面板配置 */
  nodePanelProps?: NodePanelProps;
  
  /** 画布主要区域配置 */
  canvasProps?: CanvasProps;
  
  /**
   * @title 画布状态
   * @description scan 会禁用一些画布事件，例如连线、鼠标右键等
   * @default "edit"
   */
  mode?: 'edit' | 'scan';
  
  /** toolbar */
  toolbarPanelProps?: ToolbarPanelProps;
  
  /** keyBinding */
  keyBindingProps?: false | KeybindingConfig;
  
  /** scale toolbar */
  scaleToolbarPanelProps?: ScaleToolbarPanelProps;
  
  /** form editor */
  detailPanelProps?: DetailPanelProps;
  
  /** 右键菜单配置 */
  contextMenuPanelProps?: ContextMenuPanelProps;
  
  /** popover */
  popoverProps?: PopoverProps;
  
  /** onReady */
  onReady?: (graph: IFlowchartGraph, app: IApplication) => void;
  
  /** 点击回调，仅支持 save-graph-data */
  onSave?: (data: Datum) => void;
  
  /** 新增节点时回调 */
  onAddNode?: (node: NsGraph.INodeConfig) => void;
  
  /** 新增边时回调 */
  onAddEdge?: (edge: NsGraph.IEdgeConfig) => void;
  
  /** xflow app 销毁前的回调 */
  onDestroy?: IAppDestroy;
  
  /** xflow app 初始化后的回调 */
  onConfigReady?: IAppConfigReady;
  
  /** 节点或边更新数据时调用 */
  onConfigChange?: (params: { data: Datum; type: string; config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig }) => void;
}
```


## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/ant-design/ant-design-charts/issues) first.


## 📧 Contact us

DingTalk group number: `44788198 `.

<img src="https://gw.alipayobjects.com/zos/antfincdn/bi1LxWeIEj/32f85bbf-a06e-4046-96e5-417126bffeaf.png" width="200" height="266" />


## License

MIT
