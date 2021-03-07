import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';
import { 
  LoginHeader,
  LoginButtonText
} from '@src/components/atoms';
import User from '@src/api/User';
import {
  RegisterLinkText,
  GuestLoginText
} from '@src/components/molecules';
import { LoginUserType } from '@src/types/loginUser';
import useStyle from './style';


const LoginView: FC = (): JSX.Element => {
  const [loginName, setLoginName] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');

  const classes = useStyle();
  const router = useRouter();

  let nameText: string = 'Enter your name';
  let passText: string = 'Enter your password';

  const loginUserInformation = () => {

    if (loginName == '') {
      nameText = 'Require !';
    } else if (loginPass == ''){
      passText = 'Repuire!'
    }

    try {
      User.login(loginName, loginPass)
        .then((response: LoginUserType) => {
          console.log(response)
          if (response.data) {
            console.log("Success")
          } else {
            console.log("Failed")
          }
        })
        .catch((err) => console.log("aaa"))
        // .then(() => router.push(`main/${loginName}`));
    } catch(err) {
      console.log("error")
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
          <RegisterLinkText />
        </CardActions>
      </Card>
      <div>
        <CardActions className={classes.cardAction}>
          <GuestLoginText />
        </CardActions>
      </div>
    </div>
  )
}

export default LoginView