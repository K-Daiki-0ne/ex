import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

type Props = {
  name: string
}

export const DetailFileName: FC<Props> = ({ name }): JSX.Element => {
  const classes = useStyle();
  return (
    <Typography 
      gutterBottom 
      variant="h4" 
      component="h4"
      className={classes.detailFileName}
    >
      { name }
    </Typography>
  )
}
