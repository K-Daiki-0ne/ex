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
import { LoginUserType } from '@src/types';
import useStyle from './style';


const LoginView: FC = (): JSX.Element => {
  const [loginName, setLoginName] = useState<string>('');
  const [loginPass, setLoginPass] = useState<string>('');
  const [nameLabel, setNameLabel] = useState<string>('Enter your name');
  const [passLabel, setPassLabel] = useState<string>('Enter your password');
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isPassValid, setIsPassValid] = useState<boolean>(false);

  const classes = useStyle();
  const router = useRouter();

  const loginUserInformation = () => {
    if (loginName == 'Guest') {
      setNameLabel('This username cannot be used!');
      setIsNameValid(true)
      return;
    }

    try {
      User.login(loginName, loginPass)
        .then((response: LoginUserType) => {
          if (response.data) {
            router.push(`main/${response.data.ID}`)
          } else {
            if (loginName == '' && loginPass == '') {
              setNameLabel('Require Name!');
              setPassLabel('Repuire Password!')
              setIsNameValid(true)
              setIsPassValid(true)
              return;
            } else if (loginName == ''){
              setNameLabel('Require Name!');
              setIsNameValid(true)
              return;
            } else if (loginPass == ''){
              setPassLabel('Repuire Password!')
              setIsPassValid(true)
              return;
            } else {
              setNameLabel('Not registerd');
              setPassLabel('Not registerd')
              setIsNameValid(true);
              setIsPassValid(true);
              return;
            }      
          }
        })
        .catch((err) => console.error(err))
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
            id="standard-full-width" 
            label="Name"
            error={isNameValid}
            helperText={nameLabel}
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
            error={isPassValid}
            type="password"
            helperText={passLabel}
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