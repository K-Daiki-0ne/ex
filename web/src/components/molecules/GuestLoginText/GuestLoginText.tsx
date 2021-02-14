import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const GuestLoginText: FC = (): JSX.Element => {
  const classes = useStyle();

  return (
    <Typography className={classes.guestLoginText}>
      Don't have account? 
      <Link href='/register'>
        <a className={classes.guestLoginLinkText}>  Register</a>
      </Link>
    </Typography>
  )
}
