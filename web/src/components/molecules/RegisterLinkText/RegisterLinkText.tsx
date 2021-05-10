import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import useStyle from './style';

export const RegisterLinkText: FC = (): JSX.Element => {
  const classes = useStyle();

  return (
    <Typography className={classes.registerText}>
      アカウントをお持ちでない方は
      <Link href='/register'>
        <a className={classes.registerLinkText}>こちら</a>
      </Link>
    </Typography>
  )
}
