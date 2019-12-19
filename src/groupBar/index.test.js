import * as React from 'react';
import { shallow } from 'enzyme';
import TechGroupBar from './index';

describe('<TechGroupBar />', () => {
  it('render TechGroupBar with bigfish', () => {
    const wrapper = shallow(<TechGroupBar>bigfish</TechGroupBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
