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



const LoginView: React.FC = (): JSX.Element => {
  return (
    <div>
    <Typography variant="h2" gutterBottom>
      LOGIN
    </Typography>

    <Card>
      <CardContent>
      <form noValidate autoComplete="on">
        <TextField 
          id="standard-basic" 
          label="Name"
          error={false} 
        />
        <br />
        <TextField 
          id="filled-basic" 
          label="Password"
          type="password"
        />
      </form>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href='/home'>
            Login
          </Link>
        </Button>
        <Button size="small">
          <Link href='/register'>
            Register
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default LoginView