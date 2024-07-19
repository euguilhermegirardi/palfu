'use client'

import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegistrarAutomovel = () => {
  const [vehicle, setVehicle] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const number = vehicle

    try {
      const response = await axios.get('https://palfu-api.onrender.com/api/list')
      const isRegistered = response.data.some((item: { number: string }) => item.number === number)

      if (isRegistered) {
        setError('Este veículo já está registrado. Verificar na "Lista de Automoveis".')
        return
      }

      const postResponse = await axios.post('https://palfu-api.onrender.com/api/list', { number })
      
      if (postResponse.status === 201) {
        setVehicle('')
        setError('')
        toast.success('Automóvel registrado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Vehicle registration failed', error)
      toast.error('Ops... algo deu errado, tente novamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="flex flex-col w-full md:w-[25rem]">
      <ToastContainer />
      <form onSubmit={handleRegister} className="bg-teal-700 p-6 rounded shadow-2xl w-full max-w-sm">
        <div className="mb-4">
          <h1 className="text-2xl mb-5 text-teal-100">Registrar Automovel</h1>
          <input
            type="text"
            id="vehicle"
            placeholder="Registre um veiculo"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="h-16 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          {error && (
            <div className='p-2 bg-red-600 rounded-md'>
              <p className="text-center text-gray-950 text-lg">{error}</p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-cyan-950 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            REGISTRAR
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrarAutomovel
