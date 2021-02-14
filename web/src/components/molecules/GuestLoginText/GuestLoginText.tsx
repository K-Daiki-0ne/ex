import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const GuestLoginText: FC = (): JSX.Element => {
  const classes = useStyle();

  return (
    <Typography className={classes.guestLoginText}>
      If you want to try EX ? 
      <Link href='/main/guest'>
        <a className={classes.guestLoginLinkText}> Guest Login</a>
      </Link>
    </Typography>
  )
}
