import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Link href="/dashboard/lista-de-automoveis">
        <a className={`p-2 mb-2 rounded ${router.pathname === '/dashboard/lista-de-automoveis' ? 'bg-gray-700' : ''}`}>
          Lista de Automoveis
        </a>
      </Link>
      <Link href="/dashboard/registrar-automovel">
        <a className={`p-2 mb-2 rounded ${router.pathname === '/dashboard/registrar-automovel' ? 'bg-gray-700' : ''}`}>
          Registrar Automovel
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;