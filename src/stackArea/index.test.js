import * as React from 'react';
import { shallow } from 'enzyme';
import TechStackArea from './index';

describe('<TechStackArea />', () => {
  it('render TechStackArea with bigfish', () => {
    const wrapper = shallow(<TechStackArea>bigfish</TechStackArea>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
