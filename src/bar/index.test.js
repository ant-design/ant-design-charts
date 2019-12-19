import * as React from 'react';
import { shallow } from 'enzyme';
import TechBar from './index';

describe('<TechBar />', () => {
  it('render TechBar with bigfish', () => {
    const wrapper = shallow(<TechBar>bigfish</TechBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
