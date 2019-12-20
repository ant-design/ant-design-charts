import * as React from 'react';
import { shallow } from 'enzyme';
import Pie from './index';

describe('<Pie />', () => {
  it('render Pie with bigfish', () => {
    const wrapper = shallow(<Pie>bigfish</Pie>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
