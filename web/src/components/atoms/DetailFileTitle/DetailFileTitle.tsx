import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  title: string
}

export const DetailFileTitle: FC<Props> = (title):JSX.Element => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      { title }
    </Typography>
  )
}