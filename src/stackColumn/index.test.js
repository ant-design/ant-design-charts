import * as React from 'react';
import { shallow } from 'enzyme';
import TechStackColumn from './index';

describe('<TechStackColumn />', () => {
  it('render TechStackColumn with bigfish', () => {
    const wrapper = shallow(<TechStackColumn>bigfish</TechStackColumn>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
