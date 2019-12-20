import * as React from 'react';
import { shallow } from 'enzyme';
import PercentageStackArea from './index';

describe('<PercentageStackArea />', () => {
  it('render PercentageStackArea with bigfish', () => {
    const wrapper = shallow(<PercentageStackArea>bigfish</PercentageStackArea>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
