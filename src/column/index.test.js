import * as React from 'react';
import { shallow } from 'enzyme';
import Column from './index';

describe('<Column />', () => {
  it('render Column with bigfish', () => {
    const wrapper = shallow(<Column>bigfish</Column>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
