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


const LoginView: React.FC = (): JSX.Element => {
  return (
    <div className={styles.login}>
      <Typography variant="h2" gutterBottom align="center">
        LOGIN
      </Typography>

      <Card>
        <CardContent>
        <form noValidate autoComplete="on">
          <TextField 
            id="standard-basic" 
            label="Name"
            error={false}
            helperText="Enter your name"
            fullWidth
          />
          <br />
          <TextField 
            id="filled-basic" 
            label="Password"
            type="password"
            helperText="Enter your password"
            fullWidth
          />
        </form>
        </CardContent>
        <CardActions>
          <Link href='/register'>
            <a>Register</a>
          </Link>
          <Button variant="contained" color="primary" component="span" size="small">
            <Link href='/main'>
              <p className={styles.btn}>Login</p>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginView