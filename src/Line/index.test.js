import * as React from 'react';
import { shallow } from 'enzyme';
import Line from './index';

describe('<Line />', () => {
  it('render Line with bigfish', () => {
    const wrapper = shallow(<Line>bigfish</Line>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
