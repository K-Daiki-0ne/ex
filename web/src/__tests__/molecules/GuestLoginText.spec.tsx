import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider,
  Collapse
} from '@material-ui/core'
import { 
  Alert,
  AlertTitle
} from '@material-ui/lab';
import theme from '../../theme/theme';
import { GuestLoginText } from '../../components/molecules'

describe('ButtonText component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <GuestLoginText />
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('div tag rendering test', () => {
    const div = wrapper.find('div');
    expect(div).toBeTruthy();
    expect(div.length).toBe(1)
  });


  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
    expect(typography.length).toBe(1);
  });

  it('material-ui Collapse component rendering test', () => {
    const collapse = wrapper.find(Collapse);
    expect(collapse).toBeTruthy();
    expect(collapse.length).toBe(1);
  });

  it('material-ui Alert component rendering test', () => {
    const alert = wrapper.find(Alert);
    expect(alert).toBeTruthy();
    expect(alert.length).toBe(1);
  });

  it('material-ui AlertTitle component rendering test', () => {
    const alertTitle = wrapper.find(AlertTitle);
    expect(alertTitle).toBeTruthy();
    expect(alertTitle.length).toBe(1);
  });
})