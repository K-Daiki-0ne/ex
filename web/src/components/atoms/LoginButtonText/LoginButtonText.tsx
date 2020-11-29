import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

type Props = {
  content: string
}

export const LoginButtonText: FC<Props> = ({content}):JSX.Element => {
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