import * as React from 'react';
import { shallow } from 'enzyme';
import TechBubble from './index';

describe('<TechBubble />', () => {
  it('render TechBubble with bigfish', () => {
    const wrapper = shallow(<TechBubble>bigfish</TechBubble>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
