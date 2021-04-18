import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography ,Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyle from './style';

type Props = {
  props: string | string[]
};

export const UploadButton: FC<Props> = ({ props }):JSX.Element => {
  const classes = useStyle();
  const router  = useRouter();
  
  const goMainPage = () => {
    console.log(props)
    router.push(`/post/${props}`)
  }
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<CloudUploadIcon />}
      onClick={goMainPage}
    >
      <Typography>
        Upload
      </Typography>
    </Button>
  )
}