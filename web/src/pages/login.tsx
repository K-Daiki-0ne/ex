import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginView from '@src/views/LoginView/LoginView';
import useStyle from '@src/theme/style';

const Login: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={styles.container}>
      <Head>
        <title>EX Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed" className={classes.header}>
        <Toolbar variant="dense" className={styles.title}>
          <Typography variant="h4" color="inherit" className={classes.headerText}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Container 
          fixed
          maxWidth='xs'
        >
          <LoginView />
        </Container>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Login