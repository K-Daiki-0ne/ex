import React, { FC } from 'react';
import { CardMedia } from '@material-ui/core';
import useStyle from './style';

type Props = {
  base64String: string,
  file: string,
  fileName: string,
}

export const ImageFileContent: FC<Props> = ({ base64String, file, fileName }) => {
  const classes = useStyle();

  return (
    <CardMedia 
      component='img'
      className={classes.media}
      src={`${base64String}${file}`}
      title={fileName}
    />
  )
}