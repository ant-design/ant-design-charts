import * as React from 'react';
import { shallow } from 'enzyme';
import PercentageStackColumn from './index';

describe('<PercentageStackColumn />', () => {
  it('render PercentageStackColumn with bigfish', () => {
    const wrapper = shallow(
      <PercentageStackColumn>bigfish</PercentageStackColumn>,
    ).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
