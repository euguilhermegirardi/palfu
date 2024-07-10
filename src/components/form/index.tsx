// src/components/form/index.tsx

"use client"; // Ensure client component

import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter(); // Use useRouter within the component

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    try {
      const response = await axios.post('/api/login', { usuario, senha });
      if (response.status === 200) {
        router.push('/dashboard'); // Use router.push for navigation
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
          Usuário
        </label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
          Senha
        </label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
