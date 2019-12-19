import * as React from 'react';
import { shallow } from 'enzyme';
import TechStackBar from './index';

describe('<TechStackBar />', () => {
  it('render TechStackBar with bigfish', () => {
    const wrapper = shallow(<TechStackBar>bigfish</TechStackBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
