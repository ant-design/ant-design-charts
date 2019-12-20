import * as React from 'react';
import { shallow } from 'enzyme';
import Bar from './index';

describe('<Bar />', () => {
  it('render Bar with bigfish', () => {
    const wrapper = shallow(<Bar>bigfish</Bar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
