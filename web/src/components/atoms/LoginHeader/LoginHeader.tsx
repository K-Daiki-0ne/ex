import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const LoginHeader: FC = (): JSX.Element => {
  const classes = useStyle()
  return (
    <div>
      <Typography 
        variant="h2" 
        gutterBottom 
        align="center" 
        className={classes.loginTile}
      >
        LOGIN
      </Typography>
    </div>
  )
}