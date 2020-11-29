import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PostView from '../../views/PostView/PostView';
import useStyle from '../../theme/style';

const Post: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={styles.container}>
      <Head>
        <title>EX POST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed" className={classes.header}>
        <Toolbar variant="dense" className={styles.title}>
          <Typography variant="h4" color="inherit" className={classes.headerText}>
            POST
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Container 
          fixed
          maxWidth='xs'
        >
          <PostView />
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Post