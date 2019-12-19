import * as React from 'react';
import { shallow } from 'enzyme';
import TechPercentageStackBar from './index';

describe('<TechPercentageStackBar />', () => {
  it('render TechPercentageStackBar with bigfish', () => {
    const wrapper = shallow(<TechPercentageStackBar>bigfish</TechPercentageStackBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
