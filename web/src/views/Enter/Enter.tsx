import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/Enter.module.css'

const Enter: React.FC = (): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // 2.8seconds ago page transition
      router.push('/login')
    }, 2800);
  }, [])
  return (
    <div className={style.enter}>
      <h1 className={style.appTitle}>
        EX
      </h1>
      <div className={style.appCatchPhase}>
        <p>"I will start a job"</p>
        <p>EX仕事をはじめます</p>
      </div>
    </div>
  )
}

export default Enter