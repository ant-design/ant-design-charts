---
title: Radial Tree Graph
---

### Base

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

### Dendrograme Layout

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

### Custom Node Style

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
    edgeCfg: {
      endArrow: {
        type: 'vee',
      },
    },
    nodeCfg: {
      label: {
        style: ({ value }) => {
          if (value === 'Regression') {
            return {
              fill: '#ff4d4f',
            };
          }
          return {};
        },
      },
      style: ({ value }) => {
        if (value === 'Regression') {
          return {
            stroke: '#ff4d4f',
            fill: '#fff',
          };
        }
        return {
          stroke: '#40a9ff',
        };
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialTreeGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom Edge Style

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
    edgeCfg: {
      endArrow: (edge, graph) => {
        const { source } = edge;
        return {
          path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
          fill: source === 'Regression' ? '#ff4d4f' : '#40a9ff',
          d: -15,
        };
      },
      label: {
        style: (edge, graph) => {
          const { source } = edge;
          return source === 'Regression'
            ? {
                fill: '#ff4d4f',
                fontSize: 14,
              }
            : {};
        },
      },
      style: (edge, graph) => {
        const { source } = edge;
        return {
          stroke: source === 'Regression' ? '#ff4d4f' : '#40a9ff',
        };
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialTreeGraph {...config} />;
};

export default DemoIndentedTree;
```
