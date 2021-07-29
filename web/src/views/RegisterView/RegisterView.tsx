import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import { 
  RegisterHeader,
  ButtonText
} from '@src/components/atoms';
import { RegisterUser } from '@src/types';
import User from '@src/api/User';
import useStyle from './style';
import { useForm } from '../../hook/useForm';

const RegisterView: FC = (): JSX.Element => {
  const [registerName, setRegisterName] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [nameLabel, setNameLabel] = useState<string>('ユーザーネームを入力してください');
  const [passLabel, setPassLabel] = useState<string>('パスワードを入力してください');
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isPassValid, setIsPassValid] = useState<boolean>(false);

  const classes = useStyle();
  const router = useRouter();

  const registerUserInformation = () => {
    if (registerName == 'Guest') {
      setNameLabel('使用できないユーザーネームです！');
      setIsNameValid(true)
      return;
    }
    try {
      User.register(registerName, registerPass)
        .then((response: RegisterUser) => {
          if(response.data) {
            router.push(`/main/${response.data}`)
          } else {
            const {
              name,
              pass,
              isName,
              isPass
            } = useForm(registerName, registerPass, false)
            setNameLabel(name);
            setPassLabel(pass);
            setIsNameValid(isName);
            setIsPassValid(isPass);
          }
        })
        .catch((err: Error) => console.error(err))
    } catch (err) {
      console.error("error:", err);
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
            size="small"
            fullWidth
            className={classes.btn}
            onClick={registerUserInformation}
          >
            <ButtonText text='Register' />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterView