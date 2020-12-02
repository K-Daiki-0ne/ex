import React from 'react';
import Link from 'next/link'
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
import useStyle from './style';


const LoginView: React.FC = (): JSX.Element => {
  const classes = useStyle();
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
            helperText="Enter your name"
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
          />
          <br />
          <TextField 
            id="filled-basic" 
            label="Password"
            type="password"
            helperText="Enter your password"
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
          />
        </form>
        </CardContent>
        <CardActions
          className={classes.cardAction}
        >
          <Link href={`/main/12345`}>
            <Button 
              variant="contained" 
              color="primary" 
              size="small"
              fullWidth
            >
                <LoginButtonText 
                  content="LOGIN"
                />
            </Button>
          </Link>
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