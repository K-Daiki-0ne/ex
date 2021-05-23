import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { LoginHeader } from '../../components/atoms'

describe('DetailFileComment component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <LoginHeader />
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('rendering div tag test', () => {
    const div = wrapper.find('div');
    expect(div).toBeTruthy();
  })

  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
    expect(typography.length).toBe(1);
  });
})