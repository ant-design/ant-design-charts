import * as React from 'react';
import { shallow } from 'enzyme';
import TechScatter from './index';

describe('<TechScatter />', () => {
  it('render TechScatter with bigfish', () => {
    const wrapper = shallow(<TechScatter>bigfish</TechScatter>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
