import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/Enter.module.css'

const Enter: React.FC = (): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // 5seconds ago page transition
      router.push('/login')
    }, 5000);
  }, [])
  return (
    <div>
      <h1 className={style.appTitle}>
        EX
      </h1>
    </div>
  )
}

export default Enter