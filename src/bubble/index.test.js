import * as React from 'react';
import { shallow } from 'enzyme';
import Bubble from './index';

describe('<Bubble />', () => {
  it('render Bubble with bigfish', () => {
    const wrapper = shallow(<Bubble>bigfish</Bubble>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
