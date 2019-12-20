import * as React from 'react';
import { shallow } from 'enzyme';
import StackBar from './index';

describe('<StackBar />', () => {
  it('render StackBar with bigfish', () => {
    const wrapper = shallow(<StackBar>bigfish</StackBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
