import * as React from 'react';
import { shallow } from 'enzyme';
import TechPercentageStackArea from './index';

describe('<TechPercentageStackArea />', () => {
  it('render TechPercentageStackArea with bigfish', () => {
    const wrapper = shallow(<TechPercentageStackArea>bigfish</TechPercentageStackArea>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
