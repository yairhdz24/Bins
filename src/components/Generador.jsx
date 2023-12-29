import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="text-center text-2xl font-bold p-4 bg-blue-500 text-white">
      BIN Checker App
    </header>
  );
};

export const GeneradorTarjetas = () => {
  const [bin, setBin] = useState('');
  const [generarMes, setGenerarMes] = useState(true);
  const [generarAnio, setGenerarAnio] = useState(true);
  const [generarCvv, setGenerarCvv] = useState(true);
  const [cantidadTarjetas, setCantidadTarjetas] = useState(1);
  const [tarjetasGeneradas, setTarjetasGeneradas] = useState([]);
  const [copiado, setCopiado] = useState(false);

  const handleCheckboxChange = (opcion) => {
    switch (opcion) {
      case 'mes':
        setGenerarMes(!generarMes);
        break;
      case 'anio':
        setGenerarAnio(!generarAnio);
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
    return digits.join('');
  };

  const handleGenerarTarjetas = () => {
    const tarjetasPrueba = Array.from({ length: cantidadTarjetas }, () => {
      const numeroTarjeta = bin.replace(/\D/g, '');
      const numerosAleatorios = Array.from({ length: 16 - numeroTarjeta.length }, () =>
        Math.floor(Math.random() * 10)
      ).join('');
      const tarjetaCompleta = numeroTarjeta + numerosAleatorios;

      const mes = generarMes ? getRandomDigits(2) : '';
      const anio = generarAnio ? (Math.floor(Math.random() * 10) + 2023).toString() : '';
      const cvv = generarCvv ? getRandomDigits(3) : '';

      return `${tarjetaCompleta}|${mes}|${anio}|${cvv}`;
    });

    setTarjetasGeneradas(tarjetasPrueba);
    setCopiado(false);
  };

  const handleCopiarTarjetas = () => {
    const textoTarjetas = tarjetasGeneradas.join('\n');
    navigator.clipboard.writeText(textoTarjetas).then(() => {
      setCopiado(true);
    });
  };

  

  return (
    <div className="max-w-screen-md mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
      <Header />
      <h1 className="text-3xl font-semibold mb-6">Generador de Tarjetas de Crédito</h1>

      <div className="mb-4">
        <label className="block mb-2">BIN:</label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder='XXXXXXXXXXXXXXXX'
            value={bin}
            onChange={(e) => setBin(e.target.value.slice(0, 16))}
            maxLength={16}
            className="border p-2 rounded w-3/4"
          />
         
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          Generar Fecha de Caducidad:
          <input
            type="checkbox"
            checked={generarMes}
            onChange={() => handleCheckboxChange('mes')}
            className="ml-2"
          />
          <span className="ml-1">Mes</span>
          <input
            type="checkbox"
            checked={generarAnio}
            onChange={() => handleCheckboxChange('anio')}
            className="mx-4"
          />
          <span>Año</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          Generar Código CVV:
          <input
            type="checkbox"
            checked={generarCvv}
            onChange={() => handleCheckboxChange('cvv')}
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          Cantidad de Tarjetas:
          <input
            type="number"
            value={cantidadTarjetas}
            onChange={(e) => setCantidadTarjetas(parseInt(e.target.value, 10))}
            className="border p-2 rounded ml-2"
          />
        </label>
      </div>

      <button
        onClick={handleGenerarTarjetas}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generar Tarjetas
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas Generadas</h2>

        <div className="border p-4 mb-2">
          <label className="block mb-1" htmlFor="results">
            Resultados:
          </label>
          <textarea
            id="results"
            rows="11"
            readOnly
            className="block w-full p-5 font-mono text-base text-gray-900 border border-gray-300 rounded form-textarea focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-1"
            placeholder="Las tarjetas de crédito generadas se colocarán en esta casilla."
            value={tarjetasGeneradas.join('\n')}
          />
        </div>

        <button
          onClick={handleCopiarTarjetas}
          className={`${
            copiado ? 'bg-green-500' : 'bg-blue-500'
          } text-white px-4 py-2 rounded hover:${
            copiado ? 'bg-green-700' : 'bg-blue-700'
          } focus:outline-none`}
        >
          {copiado ? 'Tarjetas Copiadas' : 'Copiar Tarjetas'}
        </button>
      </div>
    </div>
  );
};
