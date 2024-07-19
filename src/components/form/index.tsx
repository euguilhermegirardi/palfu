'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get('https://palfu-api.onrender.com/api/users');
      console.log(response);
      const user = response.data.find((user: any) => user.username === usuario && user.password === senha);
      
      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/dashboard');
      } else {
        alert('Login failed: Incorrect username or password');
      }
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-teal-700 p-6 rounded shadow-2xl shadow-slate-800 w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-teal-100 text-sm font-bold mb-2" htmlFor="usuario">
          USUARIO
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
        <label className="block text-teal-100 text-sm font-bold mb-2" htmlFor="senha">
          SENHA
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
          className="bg-cyan-950 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            'ENTRAR'
          )}
        </button>
      </div>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #ffffff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
