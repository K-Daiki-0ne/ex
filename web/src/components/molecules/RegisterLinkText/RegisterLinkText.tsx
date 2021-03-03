import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const RegisterLinkText: FC = (): JSX.Element => {
  const classes = useStyle();

  return (
    <Typography className={classes.registerText}>
      Don't have account? 
      <Link href='/register'>
        <a className={classes.registerLinkText}>  Register</a>
      </Link>
    </Typography>
  )
}
