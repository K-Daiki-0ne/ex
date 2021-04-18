import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  name: string
}

export const DetailFileName: FC<Props> = ({ name }): JSX.Element => {
  return (
    <Typography 
      gutterBottom 
      variant="h4" 
      component="h4" 
    >
      { name }
    </Typography>
  )
}
