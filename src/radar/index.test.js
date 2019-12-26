import * as React from 'react';
import { shallow } from 'enzyme';
import Radar from './index';

describe('<Radar />', () => {
  it('render Radar with bigfish', () => {
    const wrapper = shallow(<Radar>bigfish</Radar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
