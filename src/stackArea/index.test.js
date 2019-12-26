import * as React from 'react';
import { shallow } from 'enzyme';
import StackArea from './index';

describe('<StackArea />', () => {
  it('render StackArea with bigfish', () => {
    const wrapper = shallow(<StackArea>bigfish</StackArea>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
