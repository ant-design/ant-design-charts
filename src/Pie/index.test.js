import * as React from 'react';
import { shallow } from 'enzyme';
import TechPie from './index';

describe('<TechPie />', () => {
  it('render TechPie with bigfish', () => {
    const wrapper = shallow(<TechPie>bigfish</TechPie>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
