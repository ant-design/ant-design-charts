---
title: Radial Graph
---

### Base

```tsx
import React from 'react';
import { RadialGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    label: 'Modeling Methods',
    children: [
      {
        label: 'Classification',
        children: [
          {
            label: 'Logistic regression',
          },
          {
            label: 'Linear discriminant analysis',
          },
          {
            label: 'Rules',
          },
          {
            label: 'Decision trees',
          },
          {
            label: 'Naive Bayes',
          },
          {
            label: 'K nearest neighbor',
          },
          {
            label: 'Probabilistic neural network',
          },
          {
            label: 'Support vector machine',
          },
        ],
      },
      {
        label: 'Consensus',
        children: [
          {
            label: 'Models diversity',
            children: [
              {
                label: 'Different initializations',
              },
              {
                label: 'Different parameter choices',
              },
              {
                label: 'Different architectures',
              },
              {
                label: 'Different modeling methods',
              },
              {
                label: 'Different training sets',
              },
              {
                label: 'Different feature sets',
              },
            ],
          },
          {
            label: 'Methods',
            children: [
              {
                label: 'Classifier selection',
              },
              {
                label: 'Classifier fusion',
              },
            ],
          },
          {
            label: 'Common',
            children: [
              {
                label: 'Bagging',
              },
              {
                label: 'Boosting',
              },
              {
                label: 'AdaBoost',
              },
            ],
          },
        ],
      },
      {
        label: 'Regression',
        children: [
          {
            label: 'Multiple linear regression',
          },
          {
            label: 'Partial least squares',
          },
          {
            label: 'Multi-layer feedforward neural network',
          },
          {
            label: 'General regression neural network',
          },
          {
            label: 'Support vector regression',
          },
        ],
      },
    ],
  };

  const config = {
    data,
    nodeType: 'diamond',
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialGraph {...config} />;
};

export default DemoIndentedTree;
```

### Dendrograme Layout

```tsx
import React from 'react';
import { RadialGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    label: 'Modeling Methods',
    children: [
      {
        label: 'Classification',
        children: [
          {
            label: 'Logistic regression',
          },
          {
            label: 'Linear discriminant analysis',
          },
          {
            label: 'Rules',
          },
          {
            label: 'Decision trees',
          },
          {
            label: 'Naive Bayes',
          },
          {
            label: 'K nearest neighbor',
          },
          {
            label: 'Probabilistic neural network',
          },
          {
            label: 'Support vector machine',
          },
        ],
      },
      {
        label: 'Consensus',
        children: [
          {
            label: 'Models diversity',
            children: [
              {
                label: 'Different initializations',
              },
              {
                label: 'Different parameter choices',
              },
              {
                label: 'Different architectures',
              },
              {
                label: 'Different modeling methods',
              },
              {
                label: 'Different training sets',
              },
              {
                label: 'Different feature sets',
              },
            ],
          },
          {
            label: 'Methods',
            children: [
              {
                label: 'Classifier selection',
              },
              {
                label: 'Classifier fusion',
              },
            ],
          },
          {
            label: 'Common',
            children: [
              {
                label: 'Bagging',
              },
              {
                label: 'Boosting',
              },
              {
                label: 'AdaBoost',
              },
            ],
          },
        ],
      },
      {
        label: 'Regression',
        children: [
          {
            label: 'Multiple linear regression',
          },
          {
            label: 'Partial least squares',
          },
          {
            label: 'Multi-layer feedforward neural network',
          },
          {
            label: 'General regression neural network',
          },
          {
            label: 'Support vector regression',
          },
        ],
      },
    ],
  };

  const config = {
    data,
    nodeType: 'diamond',
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

  return <RadialGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom Node Style

```tsx
import React from 'react';
import { RadialGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    label: 'Modeling Methods',
    children: [
      {
        label: 'Classification',
        children: [
          {
            label: 'Logistic regression',
          },
          {
            label: 'Linear discriminant analysis',
          },
          {
            label: 'Rules',
          },
          {
            label: 'Decision trees',
          },
          {
            label: 'Naive Bayes',
          },
          {
            label: 'K nearest neighbor',
          },
          {
            label: 'Probabilistic neural network',
          },
          {
            label: 'Support vector machine',
          },
        ],
      },
      {
        label: 'Consensus',
        children: [
          {
            label: 'Models diversity',
            children: [
              {
                label: 'Different initializations',
              },
              {
                label: 'Different parameter choices',
              },
              {
                label: 'Different architectures',
              },
              {
                label: 'Different modeling methods',
              },
              {
                label: 'Different training sets',
              },
              {
                label: 'Different feature sets',
              },
            ],
          },
          {
            label: 'Methods',
            children: [
              {
                label: 'Classifier selection',
              },
              {
                label: 'Classifier fusion',
              },
            ],
          },
          {
            label: 'Common',
            children: [
              {
                label: 'Bagging',
              },
              {
                label: 'Boosting',
              },
              {
                label: 'AdaBoost',
              },
            ],
          },
        ],
      },
      {
        label: 'Regression',
        children: [
          {
            label: 'Multiple linear regression',
          },
          {
            label: 'Partial least squares',
          },
          {
            label: 'Multi-layer feedforward neural network',
          },
          {
            label: 'General regression neural network',
          },
          {
            label: 'Support vector regression',
          },
        ],
      },
    ],
  };

  const config = {
    data,
    showArrow: true,
    arrowType: 'vee',
    nodeCfg: (node) => {
      const { label } = node;
      if (label === 'Regression') {
        return {
          labelCfg: {
            style: {
              fill: '#ff4d4f',
            },
          },
          style: {
            stroke: '#ff4d4f',
            fill: '#fff',
          },
        };
      }
      return {
        style: {
          stroke: '#40a9ff',
        },
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialGraph {...config} />;
};

export default DemoIndentedTree;
```

### Custom Edge Style

```tsx
import React from 'react';
import { RadialGraph } from '@ant-design/charts';

const DemoIndentedTree: React.FC = () => {
  const data = {
    label: 'Modeling Methods',
    children: [
      {
        label: 'Classification',
        children: [
          {
            label: 'Logistic regression',
          },
          {
            label: 'Linear discriminant analysis',
          },
          {
            label: 'Rules',
          },
          {
            label: 'Decision trees',
          },
          {
            label: 'Naive Bayes',
          },
          {
            label: 'K nearest neighbor',
          },
          {
            label: 'Probabilistic neural network',
          },
          {
            label: 'Support vector machine',
          },
        ],
      },
      {
        label: 'Consensus',
        children: [
          {
            label: 'Models diversity',
            children: [
              {
                label: 'Different initializations',
              },
              {
                label: 'Different parameter choices',
              },
              {
                label: 'Different architectures',
              },
              {
                label: 'Different modeling methods',
              },
              {
                label: 'Different training sets',
              },
              {
                label: 'Different feature sets',
              },
            ],
          },
          {
            label: 'Methods',
            children: [
              {
                label: 'Classifier selection',
              },
              {
                label: 'Classifier fusion',
              },
            ],
          },
          {
            label: 'Common',
            children: [
              {
                label: 'Bagging',
              },
              {
                label: 'Boosting',
              },
              {
                label: 'AdaBoost',
              },
            ],
          },
        ],
      },
      {
        label: 'Regression',
        children: [
          {
            label: 'Multiple linear regression',
          },
          {
            label: 'Partial least squares',
          },
          {
            label: 'Multi-layer feedforward neural network',
          },
          {
            label: 'General regression neural network',
          },
          {
            label: 'Support vector regression',
          },
        ],
      },
    ],
  };

  const config = {
    data,
    showArrow: true,
    nodeCfg: (node) => {
      const { label } = node;
      if (label === 'Regression') {
        return {
          labelCfg: {
            style: {
              fill: '#ff4d4f',
            },
          },
          style: {
            stroke: '#ff4d4f',
            fill: '#fff',
          },
        };
      }
      return {
        style: {
          stroke: '#40a9ff',
        },
      };
    },
    edgeCfg: (edge, graph) => {
      const { label } = graph.findById(edge.source).getModel();
      if (label === 'Regression') {
        return {
          label: 'label',
          labelCfg: {
            style: {
              fill: '#ff4d4f',
              fontSize: 14,
            },
          },
          style: {
            stroke: '#ff4d4f',
            endArrow: {
              path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
              fill: '#ff4d4f',
              d: -15,
            },
          },
        };
      }
      return {
        style: {
          stroke: '#40a9ff',
          endArrow: {
            path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
            fill: '#40a9ff',
            d: -15,
          },
        },
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <RadialGraph {...config} />;
};

export default DemoIndentedTree;
```
