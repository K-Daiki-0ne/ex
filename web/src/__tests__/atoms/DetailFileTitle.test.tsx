import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { DetailFileTitle } from '../../components/atoms'

let props: string;

beforeEach(() => {
  // propsのセットアップ
  props = 'テストのためのタイトル';
})

afterEach(() => {
  // propsの初期化
  props = '';
})

describe('DetailFileComponent component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <DetailFileTitle title={props}/>
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
    expect(props).toEqual('テストのためのタイトル');
  });
})