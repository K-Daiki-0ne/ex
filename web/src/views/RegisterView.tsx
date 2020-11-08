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



const RegisterView: React.FC = (): JSX.Element => {
  return (
    <div>
    <Typography variant="h2" gutterBottom>
      REGISTER
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
            Register
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default RegisterView