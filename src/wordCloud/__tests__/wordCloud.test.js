import React from 'react';
import { mount } from 'enzyme';
import WordCloud from '../';

const asyncFetch = () => {
  return new Promise((resolve, reject) => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/be471bfc-b37f-407e-833b-0f489bd3fdb2.json')
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => {
        reject(error);
        console.log('fetch data failed', error);
      });
  });
};

// TODO: WordCloud-spec
describe('WordCloud plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const getDataList = (params) => {
      const list = [];
      // change data type
      params.forEach((d) => {
        list.push({
          word: d.name,
          weight: d.value,
          id: list.length,
        });
      });
      return list;
    };

    const getRandomColor = () => {
      const arr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
      ];
      return arr[Math.floor(Math.random() * (arr.length - 1))];
    };

    const hoverAction = (item, dimension, evt, start) => {
      console.log('hover');
    };
    const config = {
      width: 600,
      height: 400,
      data: getDataList(data),
      maskImage:
        'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
      wordStyle: {
        rotation: [-Math.PI / 2, Math.PI / 2],
        rotateRatio: 0.5,
        rotationSteps: 4,
        fontSize: [10, 60],
        color: (word, weight) => {
          return getRandomColor();
        },
        active: {
          shadowColor: '#333333',
          shadowBlur: 10,
        },
        gridSize: 8,
      },
      shape: 'cardioid',
      shuffle: false,
      backgroundColor: '#fff',
      tooltip: {
        visible: true,
      },
      selected: -1,
      onWordCloudHover: hoverAction,
    };
    const ref = React.createRef();
    mount(<WordCloud {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
