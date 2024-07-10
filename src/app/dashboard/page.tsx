import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/lista-de-automoveis');
  }, [router]);

  return null;
};

export default DashboardPage;