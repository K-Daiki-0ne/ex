import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { 
  Typography,
  Collapse
} from '@material-ui/core';
import { 
  Alert,
  AlertTitle
} from '@material-ui/lab';
import User from '@src/api/User';
import { LoginUserType } from '@src/types';
import useStyle from './style';

export const GuestLoginText: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyle();
  const router = useRouter();

  const guestLoginMoode= () => {
    try {
      User.login('Guest', '12345')
      .then((response: LoginUserType) => {
        setOpen(false);
        router.push(`main/${response.data.ID}`);
      })
      .catch(() => setOpen(true))
    } catch(err) {
      setOpen(true);
      console.error(err)
    }
  }

  return (
    <div>
      <Typography className={classes.guestLoginText}>
          <a className={classes.guestLoginLinkText} onClick={guestLoginMoode}>ゲストログイン</a>
      </Typography>
      <Collapse in={open}>
      <Alert severity="error" className={classes.alertTitle}>
        <AlertTitle >Error</AlertTitle>
          現在ゲストログインはサポートされていません。
      </Alert>
      </Collapse>
    </div>
  )
}
