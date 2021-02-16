import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';
import { RegisterHeader } from '../../components/atoms';
import User from '../../api/User';
import useStyle from './style';

const RegisterView: FC = (): JSX.Element => {
  const [registerName, setRegisterName] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");

  const classes = useStyle();
  const router = useRouter();

  let nameText: string = 'Register your name';
  let passText: string = 'Register your password';

  const registerUserInformation = () => {
    try {
      User.register(registerName, registerPass)
        .then(() => router.push(`/main/${registerName}`))
        .catch((error) => console.log(error));
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
            error={false}
            helperText={nameText}
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
            type="password"
            helperText={passText}
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