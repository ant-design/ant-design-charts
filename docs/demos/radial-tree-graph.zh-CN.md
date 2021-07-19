---
title: 辐射树图
---

### 基本用法

```tsx
import React from 'react';
import { RadialTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'Modeling Methods',
    children: [
      {
        id: 'Classification',
        children: [
          { id: 'Logistic regression', value: 'Logistic regression' },
          { id: 'Linear discriminant analysis', value: 'Linear discriminant analysis' },
          { id: 'Rules', value: 'Rules' },
          { id: 'Decision trees', value: 'Decision trees' },
          { id: 'Naive Bayes', value: 'Naive Bayes' },
          { id: 'K nearest neighbor', value: 'K nearest neighbor' },
          { id: 'Probabilistic neural network', value: 'Probabilistic neural network' },
          { id: 'Support vector machine', value: 'Support vector machine' },
        ],
        value: 'Classification',
      },
      {
        id: 'Consensus',
        children: [
          {
            id: 'Models diversity',
            children: [
              { id: 'Different initializations', value: 'Different initializations' },
              { id: 'Different parameter choices', value: 'Different parameter choices' },
              { id: 'Different architectures', value: 'Different architectures' },
              { id: 'Different modeling methods', value: 'Different modeling methods' },
              { id: 'Different training sets', value: 'Different training sets' },
              { id: 'Different feature sets', value: 'Different feature sets' },
            ],
            value: 'Models diversity',
          },
          {
            id: 'Methods',
            children: [
              { id: 'Classifier selection', value: 'Classifier selection' },
              { id: 'Classifier fusion', value: 'Classifier fusion' },
            ],
            value: 'Methods',
          },
          {
            id: 'Common',
            children: [
              { id: 'Bagging', value: 'Bagging' },
              { id: 'Boosting', value: 'Boosting' },
              { id: 'AdaBoost', value: 'AdaBoost' },
            ],
            value: 'Common',
          },
        ],
        value: 'Consensus',
      },
      {
        id: 'Regression',
        children: [
          { id: 'Multiple linear regression', value: 'Multiple linear regression' },
          { id: 'Partial least squares', value: 'Partial least squares' },
          {
            id: 'Multi-layer feedforward neural network',
            value: 'Multi-layer feedforward neural network',
          },
          { id: 'General regression neural network', value: 'General regression neural network' },
          { id: 'Support vector regression', value: 'Support vector regression' },
        ],
        value: 'Regression',
      },
    ],
    value: 'Modeling Methods',
  };

  const config = {
    data,
    nodeCfg: {
      type: 'diamond',
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### 调整布局

```tsx
import React from 'react';
import { RadialTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'Modeling Methods',
    children: [
      {
        id: 'Classification',
        children: [
          { id: 'Logistic regression', value: 'Logistic regression' },
          { id: 'Linear discriminant analysis', value: 'Linear discriminant analysis' },
          { id: 'Rules', value: 'Rules' },
          { id: 'Decision trees', value: 'Decision trees' },
          { id: 'Naive Bayes', value: 'Naive Bayes' },
          { id: 'K nearest neighbor', value: 'K nearest neighbor' },
          { id: 'Probabilistic neural network', value: 'Probabilistic neural network' },
          { id: 'Support vector machine', value: 'Support vector machine' },
        ],
        value: 'Classification',
      },
      {
        id: 'Consensus',
        children: [
          {
            id: 'Models diversity',
            children: [
              { id: 'Different initializations', value: 'Different initializations' },
              { id: 'Different parameter choices', value: 'Different parameter choices' },
              { id: 'Different architectures', value: 'Different architectures' },
              { id: 'Different modeling methods', value: 'Different modeling methods' },
              { id: 'Different training sets', value: 'Different training sets' },
              { id: 'Different feature sets', value: 'Different feature sets' },
            ],
            value: 'Models diversity',
          },
          {
            id: 'Methods',
            children: [
              { id: 'Classifier selection', value: 'Classifier selection' },
              { id: 'Classifier fusion', value: 'Classifier fusion' },
            ],
            value: 'Methods',
          },
          {
            id: 'Common',
            children: [
              { id: 'Bagging', value: 'Bagging' },
              { id: 'Boosting', value: 'Boosting' },
              { id: 'AdaBoost', value: 'AdaBoost' },
            ],
            value: 'Common',
          },
        ],
        value: 'Consensus',
      },
      {
        id: 'Regression',
        children: [
          { id: 'Multiple linear regression', value: 'Multiple linear regression' },
          { id: 'Partial least squares', value: 'Partial least squares' },
          {
            id: 'Multi-layer feedforward neural network',
            value: 'Multi-layer feedforward neural network',
          },
          { id: 'General regression neural network', value: 'General regression neural network' },
          { id: 'Support vector regression', value: 'Support vector regression' },
        ],
        value: 'Regression',
      },
    ],
    value: 'Modeling Methods',
  };

  const config = {
    data,
    nodeCfg: {
      type: 'diamond',
    },
    layout: {
      type: 'compactBox',
      direction: 'RL',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: () => {
        return 26;
      },
      getWidth: () => {
        return 26;
      },
      getVGap: () => {
        return 20;
      },
      getHGap: () => {
        return 30;
      },
      radial: true,
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### 修改节点样式

```tsx
import React from 'react';
import { RadialTreeGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    id: 'Modeling Methods',
    children: [
      {
        id: 'Classification',
        children: [
          { id: 'Logistic regression', value: 'Logistic regression' },
          {
            id: 'Linear discriminant analysis',
            value: 'Linear discriminant analysis',
          },
          { id: 'Rules', value: 'Rules' },
          { id: 'Decision trees', value: 'Decision trees' },
          { id: 'Naive Bayes', value: 'Naive Bayes' },
          { id: 'K nearest neighbor', value: 'K nearest neighbor' },
          {
            id: 'Probabilistic neural network',
            value: 'Probabilistic neural network',
          },
          { id: 'Support vector machine', value: 'Support vector machine' },
        ],
        value: 'Classification',
      },
      {
        id: 'Consensus',
        children: [
          {
            id: 'Models diversity',
            children: [
              {
                id: 'Different initializations',
                value: 'Different initializations',
              },
              {
                id: 'Different parameter choices',
                value: 'Different parameter choices',
              },
              {
                id: 'Different architectures',
                value: 'Different architectures',
              },
              {
                id: 'Different modeling methods',
                value: 'Different modeling methods',
              },
              {
                id: 'Different training sets',
                value: 'Different training sets',
              },
              { id: 'Different feature sets', value: 'Different feature sets' },
            ],
            value: 'Models diversity',
          },
          {
            id: 'Methods',
            children: [
              { id: 'Classifier selection', value: 'Classifier selection' },
              { id: 'Classifier fusion', value: 'Classifier fusion' },
            ],
            value: 'Methods',
          },
          {
            id: 'Common',
            children: [
              { id: 'Bagging', value: 'Bagging' },
              { id: 'Boosting', value: 'Boosting' },
              { id: 'AdaBoost', value: 'AdaBoost' },
            ],
            value: 'Common',
          },
        ],
        value: 'Consensus',
      },
      {
        id: 'Regression',
        children: [
          {
            id: 'Multiple linear regression',
            value: 'Multiple linear regression',
          },
          { id: 'Partial least squares', value: 'Partial least squares' },
          {
            id: 'Multi-layer feedforward neural network',
            value: 'Multi-layer feedforward neural network',
          },
          {
            id: 'General regression neural network',
            value: 'General regression neural network',
          },
          {
            id: 'Support vector regression',
            value: 'Support vector regression',
          },
        ],
        value: 'Regression',
      },
    ],
    value: 'Modeling Methods',
  };
  const themeColor = '#73B3D1';
  const config = {
    data,
    nodeCfg: {
      size: 30,
      type: 'circle',
      label: {
        style: {
          fill: '#fff',
        },
      },
      style: {
        fill: themeColor,
        stroke: '#0E1155',
        lineWidth: 2,
        strokeOpacity: 0.45,
        shadowColor: themeColor,
        shadowBlur: 25,
      },
      nodeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    edgeCfg: {
      style: {
        stroke: themeColor,
        shadowColor: themeColor,
        shadowBlur: 20,
      },
      endArrow: {
        type: 'triangle',
        fill: themeColor,
        d: 15,
        size: 8,
      },
      edgeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
        },
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return (
    <div
      id="dom"
      style={{
        background: '#0E1155',
        height: '400px',
      }}
    >
      <RadialTreeGraph {...config} />
    </div>
  );
};

export default DemoIndentedTree;
```
