import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style';

type Props = {
  comment: string
}

export const DetailFileComment: FC<Props> = ({ comment }):JSX.Element => {
  const classes = useStyle();

  return (
    <Typography 
      gutterBottom 
      variant="h5" 
      component="h2"
      className={classes.detailFileComment}
    >
      { comment }
    </Typography>
  )
}