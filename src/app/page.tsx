'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './login/page';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  return <Login />;
};

export default HomePage;