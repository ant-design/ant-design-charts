import * as React from 'react';
import { shallow } from 'enzyme';
import TechHistogram from './index';

describe('<TechHistogram />', () => {
  it('render TechHistogram with bigfish', () => {
    const wrapper = shallow(<TechHistogram>bigfish</TechHistogram>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
