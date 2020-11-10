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
import styles from '../../styles/RegisterView.module.css';



const RegisterView: React.FC = (): JSX.Element => {
  return (
    <div className={styles.register}>
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
            helperText="Register your name"
            fullWidth
          />
          <br />
          <TextField 
            id="filled-basic" 
            label="Password"
            type="password"
            helperText="Register your password"
            fullWidth
          />
        </form>
        </CardContent>
        <CardActions className={styles.card}>
          <Button variant="contained" color="primary" component="span" size="small" className={styles.btn}>
            <Link href='/main' >
              <p className={styles.btn}>Register</p>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterView