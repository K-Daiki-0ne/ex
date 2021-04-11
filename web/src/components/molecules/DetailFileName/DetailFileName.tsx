import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const DetailFileName: FC<String> = (props): JSX.Element => {
  const classes = useStyle();
  return (
    <Typography>
      <Typography gutterBottom variant="h4" component="h4" className={classes.filename}>
          { props }
        </Typography>
    </Typography>
  )
}
