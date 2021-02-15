import React, { FC } from 'react';
import Link from 'next/link';
import { Typography ,Button } from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyle from './style';

type Props = {
  props: string
};

export const UploadButton: FC<Props> = ({ props }):JSX.Element => {
  const classes = useStyle();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<CloudUploadIcon />}
    >
      <Link href={`/post/${props}`}>
        <Typography>
          Upload
        </Typography>
       </Link>
    </Button>
  )
}