import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  comment: string
}

export const DetailFileComment: FC<Props> = (comment):JSX.Element => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      { comment }
    </Typography>
  )
}