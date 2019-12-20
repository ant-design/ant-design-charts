import * as React from 'react';
import { shallow } from 'enzyme';
import PercentageStackBar from './index';

describe('<PercentageStackBar />', () => {
  it('render PercentageStackBar with bigfish', () => {
    const wrapper = shallow(<PercentageStackBar>bigfish</PercentageStackBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
