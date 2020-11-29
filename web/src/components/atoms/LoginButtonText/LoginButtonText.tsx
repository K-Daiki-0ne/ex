import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const LoginButtonText = (content: string):JSX.Element => {
  const classes = useStyle();
  return (
    <Typography 
      gutterBottom 
      align="center" 
      className={classes.btnText}
    >
      {content}
    </Typography>
)
}