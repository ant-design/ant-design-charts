import * as React from 'react';
import { shallow } from 'enzyme';
import GroupBar from './index';

describe('<GroupBar />', () => {
  it('render GroupBar with bigfish', () => {
    const wrapper = shallow(<GroupBar>bigfish</GroupBar>).children();
    expect(wrapper.text()).toBe('bigfish');
  });
});
