import React from 'react';
import { Typography } from '@material-ui/core';
import useStyle from './style'

export const PostHeader = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div>
      <Typography className={classes.description}>
        .txt .jpg .pdfファイルをアップロードできます。
        <br />
        アップロードできるファイルはひとつだけです。
      </Typography>
    </div>
  )
}