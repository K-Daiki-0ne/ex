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
        <CardActions
          className={classes.cardAction}
        >
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            fullWidth
          >
            <Link href={`/main/12345`}>
              <Typography 
                gutterBottom 
                align="center" 
                className={classes.btnText}
              >
                Login
              </Typography>
            </Link>
          </Button>
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