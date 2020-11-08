import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/View.module.css';

const Enter: React.FC = (): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // 5seconds ago page transition
      router.push('/home')
    }, 5000);
  }, [])
  return (
    <div className={styles.view}>
      
    </div>
  )
}

export default Enter