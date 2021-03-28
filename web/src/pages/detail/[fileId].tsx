import { NextPage } from 'next';
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Typography 
} from '@material-ui/core';
import { DetailView } from '@src/views/DetailView/DetailView';
import useStyle from '@src/theme/style';

const Detail: NextPage = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={styles.container}>
      <Head>
        <title>EX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed" className={classes.header}>
        <Toolbar variant="dense" className={styles.title}>
          <Typography variant="h4" color="inherit" className={classes.headerText}>
            EX
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Container 
          fixed
          maxWidth='xs'
        >
          <DetailView  />
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

export default Detail