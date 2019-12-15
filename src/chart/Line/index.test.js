import * as React from 'react';
import { shallow } from 'enzyme';
import TechLine from './index';

describe('<TechLine />', () => {
  it('render TechLine with bigfish', () => {
    const wrapper = shallow(<TechLine>bigfish</TechLine>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
