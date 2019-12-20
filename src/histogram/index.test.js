import * as React from 'react';
import { shallow } from 'enzyme';
import Histogram from './index';

describe('<Histogram />', () => {
  it('render Histogram with bigfish', () => {
    const wrapper = shallow(<Histogram>bigfish</Histogram>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
