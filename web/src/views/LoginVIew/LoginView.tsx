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

  const classes = useStyle();
  const router = useRouter();

  let nameText: string = 'Enter your name';
  let passText: string = 'Enter your password';

  const loginUserInformation = () => {

    if (loginName == '' || loginPass == '') {
      nameText = 'Require !';
    } else if (loginPass == ''){
      passText = 'Repuire!'
    }

    try {
      getUserInformation(loginName, loginPass)
        .then((e) => console.log(e))
        .then(() => router.push(`main/${loginName}`));
    } catch(err) {
      console.error(err);
      router.push('/login');
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
      <div>
        <CardActions className={classes.cardAction}>
            <Typography className={classes.registerText}>
              If you want to try EX ? 
              <Link href='/main/guest'>
                <a className={classes.registerLinkText}> Guest Login</a>
              </Link>
            </Typography>
          </CardActions>
      </div>
    </div>
  )
}

export default LoginView