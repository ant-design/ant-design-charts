import * as React from 'react';
import { shallow } from 'enzyme';
import TechRadar from './index';

describe('<TechRadar />', () => {
  it('render TechRadar with bigfish', () => {
    const wrapper = shallow(<TechRadar>bigfish</TechRadar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
