import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider,
} from '@material-ui/core'
import theme from '../../theme/theme';
import { PostHeader } from '../../components/molecules'

describe('ButtonText component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <PostHeader />
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('div tag rendering test', () => {
    const div = wrapper.find('div');
    expect(div).toBeTruthy();
  });


  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
  });

})