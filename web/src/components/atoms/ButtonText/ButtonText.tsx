import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

type Props = {
  text: string
}

export const ButtonText: FC<Props> = ({ text }):JSX.Element => {
  const classes = useStyle();
  return (
    <Typography 
      gutterBottom 
      align="center" 
      className={classes.btnText}
    >
      {text}
    </Typography>
  )
}