import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider,
} from '@material-ui/core'
import theme from '../../theme/theme';
import Link from 'next/link';
import { RegisterLinkText } from '../../components/molecules'

describe('ButtonText component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <RegisterLinkText />
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('material-ui typography component rendering test', () => {
    const link = wrapper.find(Link);
    expect(link).toBeTruthy();
    expect(link.length).toBe(1);
  });

  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
    expect(typography.length).toBe(1);
  });

})