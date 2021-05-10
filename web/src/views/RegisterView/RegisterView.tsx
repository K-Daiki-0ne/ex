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
      setNameLabel('This username can not be used');
      setIsNameValid(true)
      return;
    }
    try {
      User.register(registerName, registerPass)
        .then((response: RegisterUser) => {
          if(response.data) {
            router.push(`/main/${response.data}`)
            console.log(response);
          } else {
            if (registerName == '' && registerPass == '') {
              setNameLabel('ユーザーネームを入力してください!');
              setPassLabel('パスワードを入力してください!');
              setIsNameValid(true);
              setIsPassValid(true);
              return;
            } else if (registerName == ''){
              setNameLabel('ユーザーネームを入力してください!');
              setIsNameValid(true);
            } else if (registerPass == ''){
              setPassLabel('パスワードを入力してください!');
              setIsPassValid(true);
            } else {
              setNameLabel('登録できないユーザーネームです');
              setPassLabel('登録できないパスワードです');
              setIsNameValid(true);
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