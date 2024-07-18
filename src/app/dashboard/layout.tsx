'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ListagemDeAutomoveis from '@/components/list'
import RegistrarAutomovel from '@/components/register'
import useMediaQuery from '@/hooks/useMediaQuery'

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState('/listagem-de-automoveis')
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const user = localStorage.getItem('isLoggedIn')
    if (!user) {
      router.push('/')
    }
  }, [router])

  const renderComponent = () => {
    return activeComponent === '/listagem-de-automoveis' ? <ListagemDeAutomoveis /> : <RegistrarAutomovel />
  }

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen h-auto">
        <nav className="w-full bg-teal-950 flex flex-row py-4 gap-5 justify-center">
          <button
            className={`px-6 py-2 text-lg hover:bg-emerald-500 hover:text-gray-700 ${activeComponent === '/listagem-de-automoveis' ? 'bg-emerald-700 text-white' : 'text-gray-300'}`}
            onClick={() => setActiveComponent('/listagem-de-automoveis')}
          >
            Lista de Automoveis
          </button>
          <button
            className={`px-6 py-2 text-lg hover:bg-emerald-500 hover:text-gray-700 ${activeComponent === '/registrar-automovel' ? 'bg-emerald-700 text-white' : 'text-gray-300'}`}
            onClick={() => setActiveComponent('/registrar-automovel')}
          >
            Registrar Automovel
          </button>
        </nav>

        <div className="flex flex-col w-full items-start justify-start gap-5 flex-1 p-5 bg-teal-900">
          {renderComponent()}
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen h-auto">
      <nav className="sticky top-0 w-[18rem] bg-teal-950 flex flex-col py-8 gap-5">
        <button
          className={`px-12 py-6 text-lg hover:bg-emerald-500 hover:text-gray-700 ${activeComponent === '/listagem-de-automoveis' ? 'bg-emerald-700 text-white' : 'text-gray-300'}`}
          onClick={() => setActiveComponent('/listagem-de-automoveis')}
        >
          Lista de Automoveis
        </button>
        <button
          className={`px-12 py-6 text-lg hover:bg-emerald-500 hover:text-gray-700 ${activeComponent === '/registrar-automovel' ? 'bg-emerald-700 text-white' : 'text-gray-300'}`}
          onClick={() => setActiveComponent('/registrar-automovel')}
        >
          Registrar Automovel
        </button>
      </nav>

      <div className="flex flex-col w-full items-start justify-start gap-5 flex-1 p-10 bg-teal-900">
        {renderComponent()}
      </div>
    </div>
  )
}

export default DashboardLayout
