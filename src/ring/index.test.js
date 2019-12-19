import * as React from 'react';
import { shallow } from 'enzyme';
import TechRing from './index';

describe('<TechRing />', () => {
  it('render TechRing with bigfish', () => {
    const wrapper = shallow(<TechRing>bigfish</TechRing>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
