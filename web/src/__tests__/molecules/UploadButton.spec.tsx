import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  Button,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { UploadButton } from '../../components/molecules'

let props: string;

beforeEach(() => {
  // propsのセットアップ
  props = '12345';
})

afterEach(() => {
  // propsの初期化
  props = '';
})

describe('ButtonText component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <UploadButton props={props}/>
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('material-ui typography component rendering test', () => {
    const button = wrapper.find(Button);
    expect(button).toBeTruthy();
    expect(button.length).toBe(1);
  });

  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
    expect(typography.length).toBe(1);
  });

  it('props test', () => {
    expect(props).toEqual('12345');
  });
})