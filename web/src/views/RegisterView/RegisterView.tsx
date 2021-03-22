import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';
import { RegisterHeader } from '@src/components/atoms';
import { RegisterUser } from '@src/types';
import User from '@src/api/User';
import useStyle from './style';

const RegisterView: FC = (): JSX.Element => {
  const [registerName, setRegisterName] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [nameLabel, setNameLabel] = useState<string>('Enter your name');
  const [passLabel, setPassLabel] = useState<string>('Enter your password');
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isPassValid, setIsPassValid] = useState<boolean>(false);


  const classes = useStyle();
  const router = useRouter();

  const registerUserInformation = () => {
    try {
      User.register(registerName, registerPass)
        .then((response: RegisterUser) => {
          if(response.data) {
            router.push(`/main/${response.data}`)
            console.log(response);
          } else {
            if (registerName == '' && registerPass == '') {
              setNameLabel('Require Name!');
              setPassLabel('Repuire Password!')
              setIsNameValid(true)
              setIsPassValid(true)
            } else if (registerName == ''){
              setNameLabel('Require Name!');
              setIsNameValid(true)
            } else if (registerPass == ''){
              setPassLabel('Repuire Password!')
              setIsPassValid(true)
            } else {
              setNameLabel('aaaaaa');
              setPassLabel('bbbbbb')
              setIsNameValid(true)
              setIsPassValid(true);
            }      
          }
        })
        .catch((err: Error) => console.error(err))
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className={classes.register}>
      <RegisterHeader />

      <Card className={classes.card}>
        <CardContent>
        <form noValidate autoComplete="on">
          <TextField 
            id="standard-basic" 
            label="Name"
            error={isNameValid}
            helperText={nameLabel}
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
            value={registerName}
            onChange={e => setRegisterName(e.target.value)}
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
            value={registerPass}
            onChange={e => setRegisterPass(e.target.value)}
          />
        </form>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            // color="primary" 
            size="small"
            fullWidth
            className={classes.btn}
            onClick={registerUserInformation}
          >
              <p>Register</p>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterView