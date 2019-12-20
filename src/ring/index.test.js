import * as React from 'react';
import { shallow } from 'enzyme';
import Ring from './index';

describe('<Ring />', () => {
  it('render Ring with bigfish', () => {
    const wrapper = shallow(<Ring>bigfish</Ring>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
