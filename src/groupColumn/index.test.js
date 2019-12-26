import * as React from 'react';
import { shallow } from 'enzyme';
import GroupColumn from './index';

describe('<GroupColumn />', () => {
  it('render GroupColumn with bigfish', () => {
    const wrapper = shallow(<GroupColumn>bigfish</GroupColumn>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
