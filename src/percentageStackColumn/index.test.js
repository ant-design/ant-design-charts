import * as React from 'react';
import { shallow } from 'enzyme';
import TechPercentageStackColumn from './index';

describe('<TechPercentageStackColumn />', () => {
  it('render TechPercentageStackColumn with bigfish', () => {
    const wrapper = shallow(
      <TechPercentageStackColumn>bigfish</TechPercentageStackColumn>,
    ).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
