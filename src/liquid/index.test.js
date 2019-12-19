import * as React from 'react';
import { shallow } from 'enzyme';
import TechLiquid from './index';

describe('<TechLiquid />', () => {
  it('render TechLiquid with bigfish', () => {
    const wrapper = shallow(<TechLiquid>bigfish</TechLiquid>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
