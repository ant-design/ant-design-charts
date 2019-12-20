import * as React from 'react';
import { shallow } from 'enzyme';
import StackColumn from './index';

describe('<StackColumn />', () => {
  it('render StackColumn with bigfish', () => {
    const wrapper = shallow(<StackColumn>bigfish</StackColumn>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
