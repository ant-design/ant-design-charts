import * as React from 'react';
import { shallow } from 'enzyme';
import TechArea from './index';

describe('<TechArea />', () => {
  it('render TechArea with bigfish', () => {
    const wrapper = shallow(<TechArea>bigfish</TechArea>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
