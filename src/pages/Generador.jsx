import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { Slidebar } from '../components/Sliderbar';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const GeneradorTarjetas = () => {
  const [bin, setBin] = useState('');
  const [generarFecha, setGenerarFecha] = useState(true);
  const [generarCvv, setGenerarCvv] = useState(true);
  const [cantidadTarjetas, setCantidadTarjetas] = useState(1);
  const [tarjetasGeneradas, setTarjetasGeneradas] = useState([]);
  const [copiado, setCopiado] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCheckboxChange = (opcion) => {
    switch (opcion) {
      case 'fecha':
        setGenerarFecha(!generarFecha);
        break;
      case 'cvv':
        setGenerarCvv(!generarCvv);
        break;
      default:
        break;
    }
  };

  const getRandomDigits = (count) => {
    const digits = Array.from({ length: count }, () => Math.floor(Math.random() * 10));
    return digits.map((digit) => digit.toString()).join('');
  };

  const handleGenerarTarjetas = () => {
    if (!bin) {
      toast.error("Error: ¡Ingresa un BIN antes de generar las tarjetas!");
      return;
    }
    
    const tarjetasPrueba = Array.from({ length: cantidadTarjetas }, () => {
      const numeroTarjeta = bin.replace(/\D/g, '');
      const numerosAleatorios = Array.from({ length: 16 - numeroTarjeta.length }, () =>
        Math.floor(Math.random() * 10)
      ).join('');
      const tarjetaCompleta = numeroTarjeta + numerosAleatorios;

      const fecha = generarFecha
        ? getRandomDigits(1, 12) + '|' + (Math.floor(Math.random() * 10) + 2023).toString()
        : '';
      const cvv = generarCvv ? getRandomDigits(3) : ''; // Asegura que el CVV tenga solo 3 dígitos

      // Construir la cadena con delimitadores solo para opciones seleccionadas
      const partesConDelimitadores = [
        { parte: tarjetaCompleta, delimitador: '|' },
        { parte: fecha, delimitador: '|' },
        { parte: cvv, delimitador: '' }, // No agregar delimitador para el CVV
      ];

      const tarjetaConDelimitadores = partesConDelimitadores
        .filter(({ parte }) => parte !== '')
        .map(({ parte, delimitador }) => parte + delimitador)
        .join('');

      return tarjetaConDelimitadores;

    });
  
    setTarjetasGeneradas(tarjetasPrueba);
    setCopiado(false);
  };

 

  const handleCopiarTarjetas = () => {
    if (tarjetasGeneradas.length === 0) {
      toast.error("Error: ¡Genera tarjetas antes de intentar copiar!");
      return;
    }
    const textoTarjetas = tarjetasGeneradas.join('\n');
    navigator.clipboard.writeText(textoTarjetas).then(() => {
      setCopiado(true);
      toast.success("Las tarjetas se han copiado correctamente",{
      });
    });
  
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="max-w-screen-md mx-auto p-10 bg-gray-100 shadow-md relative dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <div className="absolute top-1 left-0 p-4">
        <button
          className="text-4xl text-black focus:outline-none"
          onClick={handleOpenMenu}
        >
          <RiMenu2Line className='mb-10 dark:text-white' />
        </button>
      </div>

      <Slidebar isOpen={menuOpen} onClose={handleCloseMenu} />
      <h1 className="text-3xl font-semibold mb-6 mt-10 text-center dark:text-white">Generador de CC</h1>

      <div className="mb-4 flex items-center">
        <label className="mr-2 mb-0 dark:text-white">BIN:</label>
        <input
          type="text"
          placeholder='xxxx xxxx xxxx xxxx'
          value={bin}
          onChange={(e) => setBin(e.target.value.slice(0, 16))}
          maxLength={16}
          className="border p-2 rounded w-3/4 text-black"
          
        /> 
      </div>

      <div className="mb-4 dark:placeholder-gray-900">
        <label className="flex items-center dark:text-white">
          Generar Fecha:
          <input
            type="checkbox"
            checked={generarFecha}
            onChange={() => handleCheckboxChange('fecha')}
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center dark:text-white">
          Generar CVV:
          <input
            type="checkbox"
            checked={generarCvv}
            onChange={() => handleCheckboxChange('cvv')}
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center dark:text-white">
          Cantidad de Tarjetas:
          <input
            type="number"
            value={cantidadTarjetas}
            onChange={(e) => setCantidadTarjetas(parseInt(e.target.value, 10))}
            className="border p-1 w-1/4 rounded ml-5 dark:placeholder-ray-400 text-black"
            placeholder='dark:text-white'
          />
        </label>
      </div>

      <button
        onClick={handleGenerarTarjetas}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-24 mt-5"
      >
        Generar Tarjetas
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas Generadas</h2>

        <div className="border p-4 mb-2">
          <textarea
            id="results"
            rows="12"
            readOnly
            className="block w-full p-2 font-mono text-base text-gray-900 border border-gray-300 rounded form-textarea focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-1"
            placeholder="xxxx xxxx xxxx xxxx"
            value={tarjetasGeneradas.join('\n')}
          />
        </div>

        <button
          onClick={handleCopiarTarjetas}
          className={`${copiado ? 'bg-green-500' : 'bg-blue-500'
            } text-white px-4 py-2 ml-24 mt-5 rounded hover:${copiado ? 'bg-green-700' : 'bg-blue-700'
            } focus:outline-none`}
        >
          
          {copiado ? 'Tarjetas Copiadas' : 'Copiar Tarjetas'}
        </button>
      </div>
    </div>
  );
};
