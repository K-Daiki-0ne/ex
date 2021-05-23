import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { RegisterHeader } from '../../components/atoms'

describe('DetailFileComment component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <RegisterHeader />
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
    expect(typography.length).toBe(1);
  });
})