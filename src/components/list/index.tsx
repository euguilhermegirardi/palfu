'use client';

import { IVehicle, list } from '@/utils/list'
import { useEffect, useState } from 'react';

const ListagemDeAutomoveis = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = list.filter(vehicle => 
      vehicle.number.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVehicles(filtered);
  }, [searchQuery]);

  return (
    <div className="flex flex-col w-full bg-teal-700 p-10 rounded shadow-2xl">
      <h1 className="text-2xl mb-5 text-teal-100">Lista de Automoveis</h1>

      <input
        type="text"
        placeholder="Procure por um veiculo..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full md:w-[25rem] h-16 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      
      <ul className="list-disc pl-5 mt-5">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <li key={vehicle.id} className="my-4 text-teal-100 text-xl">
              {vehicle.number}
            </li>
          ))
        ) : (
          <li className="text-teal-100 text-xl">NAO HA VEICULO CADASTRADO.</li>
        )}
      </ul>
    </div>
  );
};

export default ListagemDeAutomoveis;
