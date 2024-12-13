import { MindMap, type MindMapOptions } from '@ant-design/graphs';
import { Divider } from 'antd';
import React from 'react';

const data = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        { id: 'Logistic Regression' },
        { id: 'Linear Discriminant Analysis', children: [{ id: "Fisher's Linear Discriminant" }] },
        {
          id: 'Decision Trees',
          children: [{ id: 'CART (Classification and Regression Trees)' }, { id: 'C4.5 Algorithm' }],
        },
      ],
    },
    {
      id: 'Regression',
      children: [{ id: 'Linear Regression' }, { id: 'Polynomial Regression' }],
    },
    {
      id: 'Clustering',
      children: [
        { id: 'K-Means Clustering' },
        {
          id: 'Hierarchical Clustering',
          children: [{ id: 'Agglomerative Clustering' }, { id: 'Divisive Clustering' }],
        },
      ],
    },
    {
      id: 'Dimensionality Reduction',
      children: [
        { id: 'Principal Component Analysis (PCA)' },
        {
          id: 'Feature Selection Techniques',
          children: [{ id: 'Recursive Feature Elimination' }, { id: 'L1 Regularization' }],
        },
      ],
    },
    {
      id: 'Ensemble Methods',
      children: [
        { id: 'Bagging', children: [{ id: 'Bootstrap Aggregating' }] },
        { id: 'Stacking' },
        { id: 'Random Forest' },
        { id: 'Voting Classifier' },
      ],
    },
  ],
};

export default () => {
  const options: MindMapOptions = {
    autoFit: 'view',
    data,
    animation: false,
  };

  return (
    <>
      <Divider orientation="left" plain>
        Linear Style
      </Divider>
      <MindMap {...options} type="linear" />
      <Divider orientation="left" plain>
        Boxed Style
      </Divider>
      <MindMap {...options} type="boxed" />
    </>
  );
};
