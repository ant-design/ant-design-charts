import * as React from 'react';
import { shallow } from 'enzyme';
import TechGauge from './index';

describe('<TechGauge />', () => {
  it('render TechGauge with bigfish', () => {
    const wrapper = shallow(<TechGauge>bigfish</TechGauge>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
