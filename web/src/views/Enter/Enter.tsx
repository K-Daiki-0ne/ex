import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

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
      
    </div>
  )
}

export default Enter