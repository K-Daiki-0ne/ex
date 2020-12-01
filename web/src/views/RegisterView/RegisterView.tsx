import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';
import { RegisterHeader } from '../../components/atoms';
import { postUserInformation } from '../../api';
import useStyle from './style';

const RegisterView: FC = (): JSX.Element => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [registerName, setRegisterName] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");

  const classes = useStyle();
  const router = useRouter();

  let nameText: string = 'Register your name';
  let passText: string = 'Register your password';

  const registerUserInformation = () => {
    console.log(registerName);
    console.log(registerPass);
    setIsValid(false);
    try {
      postUserInformation(registerName, registerPass)
        .then(() => setIsValid(true))
        .then((e) => console.log(e));
    } catch (err) {
      setIsValid(false);
    }

    if (isValid) {
      router.push(`/main/${registerName}`)
    } else {
      nameText = 'Require!';
      passText = 'Require!';
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
            <Link href='/main/123456' >
              <p>Register</p>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterView