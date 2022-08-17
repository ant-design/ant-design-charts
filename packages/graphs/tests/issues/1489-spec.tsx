import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { RadialTreeGraph } from '../../src';

describe('Image node', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Render', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const data = {
      id: 'Modeling Methods',
      children: [
        {
          id: 'Classification',
          type: 'image',
          img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*w5uESbSe430AAAAAAAAAAABkARQnAQ',
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
      autoFit: false,
      nodeCfg: {
        type: 'image',
        img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mpPvTKdP7cIAAAAAAAAAAABkARQnAQ',
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
    } as any;
    act(() => {
      ReactDOM.render(<RadialTreeGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
