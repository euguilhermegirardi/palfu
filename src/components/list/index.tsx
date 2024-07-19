'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface IVehicle {
  id: string;
  number: string;
}

const ListagemDeAutomoveis = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://palfu-api.onrender.com/api/list');
        setVehicles(response.data);
        setFilteredVehicles(response.data);
      } catch (error) {
        console.error('Failed to fetch vehicles', error);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    const filtered = vehicles.filter(vehicle => 
      vehicle.number.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVehicles(filtered);
  }, [searchQuery, vehicles]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col w-full md:w-[35rem] bg-teal-700 p-10 rounded shadow-2xl">
      <h1 className="text-2xl mb-5 text-teal-100">Lista de Automoveis</h1>

      <input
        type="text"
        placeholder="Procure por um veiculo..."
        value={searchQuery}
        onChange={handleSearch}
        className="h-16 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
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
