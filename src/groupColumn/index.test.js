import * as React from 'react';
import { shallow } from 'enzyme';
import TechGroupColumn from './index';

describe('<TechGroupColumn />', () => {
  it('render TechGroupColumn with bigfish', () => {
    const wrapper = shallow(<TechGroupColumn>bigfish</TechGroupColumn>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
