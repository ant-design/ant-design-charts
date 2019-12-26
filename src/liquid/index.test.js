import * as React from 'react';
import { shallow } from 'enzyme';
import Liquid from './index';

describe('<Liquid />', () => {
  it('render Liquid with bigfish', () => {
    const wrapper = shallow(<Liquid>bigfish</Liquid>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
