import * as React from 'react';
import { shallow } from 'enzyme';
import Gauge from './index';

describe('<Gauge />', () => {
  it('render Gauge with bigfish', () => {
    const wrapper = shallow(<Gauge>bigfish</Gauge>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
