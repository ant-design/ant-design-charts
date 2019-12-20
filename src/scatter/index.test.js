import * as React from 'react';
import { shallow } from 'enzyme';
import Scatter from './index';

describe('<Scatter />', () => {
  it('render Scatter with bigfish', () => {
    const wrapper = shallow(<Scatter>bigfish</Scatter>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
