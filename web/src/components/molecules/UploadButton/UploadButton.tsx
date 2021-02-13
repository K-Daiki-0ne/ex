import React, { FC } from 'react';
import Link from 'next/link';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyle from './style';

type Props = {
  props: string
};

export const UploadButton: FC<Props> = ({ props }):JSX.Element => {
  const classes = useStyle();
  return (
    <IconButton 
        aria-label="add"
        size="small"
      >
      <Link href={`/post/${props}`}>
        <AddCircleIcon className={classes.iconSize} />
      </Link>
    </IconButton>
  )
}