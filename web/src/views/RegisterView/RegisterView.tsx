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
import useStyle from './style';

const RegisterView: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={classes.register}>
      <Typography 
        variant="h2" 
        gutterBottom
        className={classes.registerTile}
      >
        REGISTER
      </Typography>

      <Card className={classes.card}>
        <CardContent>
        <form noValidate autoComplete="on">
          <TextField 
            id="standard-basic" 
            label="Name"
            error={false}
            helperText="Register your name"
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
            helperText="Register your password"
            fullWidth
            className={classes.root}
            inputProps={{
              className: classes.root
            }}
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
          >
            <Link href='/main' >
              <p>Register</p>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterView