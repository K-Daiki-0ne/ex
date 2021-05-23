import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { DetailFileName } from '../../components/atoms'

let props: string;

beforeEach(() => {
  // propsのセットアップ
  props = 'sample.jpg';
})

afterEach(() => {
  // propsの初期化
  props = '';
})

describe('DetailFileComponent component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <DetailFileName name={props}/>
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

  it('props test', () => {
    expect(props).toEqual('sample.jpg');
  });
})