import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

export const DetailFileComment: FC<String> = (comment: string):JSX.Element => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      { comment }
    </Typography>
  )
}