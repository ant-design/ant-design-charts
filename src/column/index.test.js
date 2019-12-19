import * as React from 'react';
import { shallow } from 'enzyme';
import TechColumn from './index';

describe('<TechColumn />', () => {
  it('render TechColumn with bigfish', () => {
    const wrapper = shallow(<TechColumn>bigfish</TechColumn>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
