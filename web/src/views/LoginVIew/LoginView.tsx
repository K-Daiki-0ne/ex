import React from 'react';
import Link from 'next/link'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core'
import styles from '../../styles/LoginView.module.css';
import useStyle from './style';


const LoginView: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={classes.login}>
      <Typography 
        variant="h2" 
        gutterBottom 
        align="center" 
        className={classes.loginTile}
      >
        LOGIN
      </Typography>

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
        <CardActions>
          <Link href='/register'>
            <a>Register</a>
          </Link>
          <Button variant="contained" color="primary" component="span" size="small">
            <Link href='/main'>
              <Typography variant="button" gutterBottom align="center">
                Login
              </Typography>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginView