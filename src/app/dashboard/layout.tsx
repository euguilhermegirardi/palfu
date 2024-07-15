'use client';

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ListagemDeAutomoveis from '@/components/list'
import RegistrarAutomovel from '@/components/register'

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState('/listagem-de-automoveis');

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('isLoggedIn');

    if (!user) {
      router.push('/');
    }
  }, [router]);

  const renderComponent = () => {
    return activeComponent === '/listagem-de-automoveis' ? <ListagemDeAutomoveis /> : <RegistrarAutomovel />;
  };

  return (
    <div className="flex h-screen">
      <nav className="sticky top-0 w-[3rem] bg-gray-200 flex flex-col">
        <button onClick={() => setActiveComponent('/listagem-de-automoveis')}>Lista de Automoveis</button>
        <button onClick={() => setActiveComponent('/registrar-automovel')}>Registrar Automovel</button>
      </nav>

      <div className="flex-1 p-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DashboardLayout;