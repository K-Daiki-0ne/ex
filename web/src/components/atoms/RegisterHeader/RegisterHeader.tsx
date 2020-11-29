import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

const RegisterHeader: FC = ():JSX.Element => {
  const classes = useStyle()
  return (
    <Typography 
      variant="h2" 
      gutterBottom
      className={classes.registerTile}
    >
      REGISTER
    </Typography>
  )
}

export default RegisterHeader