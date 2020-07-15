---
title: 决策树
order: 93
---

# 决策树

## Demo

### 决策树展示

```tsx
import React, { useRef } from 'react';
import { message, Button } from 'antd';
import { DecisionTree } from '@ant-design/charts';

type DeRef<T extends (...args: any) => any = any> = Parameters<
  Extract<Parameters<T>[0]['ref'], (...args: any) => any>
>[0];

const data = {
  id: '1',
  name: 'root',
  children: [
    { id: '2', name: 'child1' },
    { id: '3', name: 'child2', children: [{ id: '4', name: 'child3' }] },
  ],
};

export default () => {
  const graphRef = useRef<DeRef<typeof DecisionTree>>(null);

  return (
    <>
      <DecisionTree
        ref={graphRef}
        edit={false}
        data={data}
        showToolBar={true}
        height={400}
        toolbarPosition={{ right: 240, top: 350 }}
        config={{
          allowCollapse: (node: any) => {
            if (node.children && node.children.length) {
              if (node.id === '3') {
                return false;
              }
              return true;
            }
            return false;
          },
        }}
        onSelect={(e) => {
          if (e.id === '1') {
            message.error('不可选择根节点');
            return false;
          } else {
            message.success(`选择${e.name}`);
            return true;
          }
        }}
      />
      <Button onClick={() => graphRef.current?.clearSelect()}>清除选择</Button>
    </>
  );
};
```

### 决策树 loading

```tsx
import React from 'react';
import { DecisionTree } from '@ant-design/charts';

export default () => {
  return (
    <>
      <DecisionTree loading={true} data={{ id: '1', name: '1' }} />
    </>
  );
};
```

### 决策树编辑

```tsx
import React, { useRef } from 'react';
import { message, Modal } from 'antd';
import 'antd/dist/antd.css';
import { DecisionTree } from '@ant-design/charts';

const data = {
  id: '1',
  name: 'root',
  children: [
    { id: '2', name: 'child1' },
    { id: '3', name: 'child2' },
  ],
};

export default () => {
  const graphRef = useRef(null);
  return (
    <DecisionTree
      ref={graphRef}
      edit={true}
      data={data}
      onAdd={(parent) => {
        if (parent.id.startsWith('node')) {
          message.error('不可以在新节点下增加新节点');
          return false;
        }
        return { id: `node_${Date.now()}`, name: 'new Node' };
      }}
      onSelect={(node) => {
        if (node.id !== '1') {
          Modal.confirm({
            title: '是否删除',
            onOk: () => {
              graphRef.current.removeItem(node.id, false);
            },
            okText: '确认',
            cancelText: '取消',
          });
        }
        return false;
      }}
      config={{
        nodeIcon: (node, bbox) => {
          if (node.id === '1') {
            return {
              img:
                'https://gw.alipayobjects.com/zos/bmw-prod/fd55ae63-2c8f-4b72-8bb9-4f23873a0fa9.svg',
            };
          }
          if (node.id === '3') {
            return {
              img:
                'https://gw.alipayobjects.com/zos/bmw-prod/5679e8ea-30d1-4caa-91d7-f13ba8e0e27f.svg',
            };
          }
          return {};
        },
        text: (node) => {
          if(node.id === '1') {
            return { fill: 'purple' };
          }
          if(node.id === '3') {
            return {fill: 'blue' };
          }
          return {};
        }
      }}
    />
  );
};
```

## 组件配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 说明 |
| - | --- | ----- | ----- | ----- |
| onSelect | (e: TreeData, bbox: {x: number, y: number} ) => boolean | false | undefined | 选中节点时的回调，返回 falsy 值可以忽略此次选中 |
| onAdd | (parent: TreeData) => TreeData \| void \| false | false | undefined | 点击添加时的回调，返回结果会被作为 children 插入到节点下 |
| data | TreeData | true | 无 | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| loading | boolean | false | false | 图数据是否加载中 |
| edit | boolean | false | false | 是否开启编辑模式 |
| width | Number | false | 600 | 图的宽度 |
| height | Number | false | 占满屏幕（不小于 400） | 图的高度 |
| initialOffset | Number | false | 150 | 初始渲染时，图表距离 canvas 顶部的偏移量 |
| showToolBar | boolean | false | false | 是否展示工具条 |
| toolbarPosition | { left?: number \| string, top?: number \| string; right?: number \| string; bottom?: number \| string } | false | {} | 工具条位置 |
| config | 见下表（节点配置项） | false | {} | 节点配置 |

## 节点配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 说明 |
| - | --- | ----- | ----- | ----- |
nodeIcon | (node: TreeData, bbox: any) => any | false | {} | 节点图标配置
text | (node: TreeData) => any | false | {} | 节点文字的配置
allowAdd | (node: TreeData) => boolean | false | undefined | 是否展示增加节点图标（编辑态）
allowCollapse | (node: TreeData) => boolean | false | undefined | 是否展示折叠/展开节点图标（展示态）

## 组件 ref

| 参数 | 类型 | 说明 |
| - | --- | ----- |
clearSelect | () => void | 清除选中
select | (id: string) => void | 选中某个节点
updateData | (data: TreeData, animate?: boolean) => void | 完整更新树数据
removeItem | (id: string, animate?: boolean) => void | 删除某个节点
updateItem | (id: string, data: TreeData, animate?: boolean) => void | 更新某个节点
graphInstance | TreeGraph \| null | G6 图实例

