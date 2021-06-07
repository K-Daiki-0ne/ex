import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core'
import theme from '../../theme/theme';
import { ButtonText } from '../../components/atoms'

let props: string;

beforeEach(() => {
  // propsのセットアップ
  props = 'test';
})

afterEach(() => {
  // propsの初期化
  props = '';
})

describe('ButtonText component test', () => {
  const wrapper = shallow (
    <ThemeProvider theme={theme}>
      <ButtonText text={props}/>
    </ThemeProvider>
  )

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('material-ui typography component rendering test', () => {
    const typography = wrapper.find(Typography);
    expect(typography).toBeTruthy();
  });

  it('props test', () => {
    expect(props).toEqual('test');
  });
})