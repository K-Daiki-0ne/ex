import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { Container, Typography } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

type Props = {
  statusCode: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container 
          fixed
          maxWidth='xs'
        >
          {/* views/ErrorView */}
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

Error.getInitialProps = async({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;

  return { statusCode };
}

export default Error;