import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
import { 
  LoginHeader,
  LoginButtonText
} from '../../components/atoms';
import { getUserInformation } from '../../api'
import useStyle from './style';


const LoginView: FC = (): JSX.Element => {
  const [loginName, setLoginName] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const classes = useStyle();
  const router = useRouter();

  let nameText: string = 'Enter your name';
  let passText: string = 'Enter your password';

  const loginUserInformation = () => {
    setIsValid(false);

    try {
      getUserInformation(loginName, loginPass)
        .then(() => setIsValid(true))
        .then((e) => console.log(e))
    } catch(err) {
      setIsValid(false)
    }

    if (isValid) {
      router.push(`main/${loginName}`)
    } else {
      nameText = 'Require !';
      passText = 'Require !';
    }
  }

  return (
    <div className={classes.login}>
      <LoginHeader />

      <Card className={classes.card}>
        <CardContent>
        <form noValidate autoComplete="on">
          <TextField 
            // id="standard-basic"
            id="standard-full-width" 
            label="Name"
            error={false}
            helperText={nameText}
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
            value={loginName}
            onChange={e => setLoginName(e.target.value)}
          />
          <br />
          <TextField 
            id="filled-basic" 
            label="Password"
            type="password"
            helperText={passText}
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
          />
        </form>
        </CardContent>
        <CardActions
          className={classes.cardAction}
        >
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            fullWidth
            onClick={loginUserInformation}
          >
            <LoginButtonText 
              content="LOGIN"
            />
          </Button>
        </CardActions>
        <CardActions className={classes.cardAction}>
        <Typography className={classes.registerText}>
            Don't have account? 
            <Link href='/register'>
              <a className={classes.registerLinkText}>  Register</a>
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginView