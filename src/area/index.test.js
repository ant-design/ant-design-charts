import * as React from 'react';
import { shallow } from 'enzyme';
import Area from './index';

describe('<Area />', () => {
  it('render Area with bigfish', () => {
    const wrapper = shallow(<Area>bigfish</Area>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
