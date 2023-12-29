import React, { useState } from "react";
import { Bins } from "../Api/Api_Bins.js";
import { Link } from 'react-router-dom';
import visaSvg from '../images/visa.svg';
import mastercardSvg from '../images/mastercard.svg';
import amexSvg from '../images/american_express.svg';
import unknownSvg from '../images/unknown.svg';
import { BinCheckerSection } from "./BinCheckerSection.jsx";

export const HomePage = () => {
  const [binNumber, setBinNumber] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBinInputChange = (e) => {
    setBinNumber(e.target.value);
  };

  const getCardType = () => {
    const firstDigit = binNumber.charAt(0);

    if (firstDigit === '4') {
      return 'visa';
    } else if (firstDigit === '5') {
      return 'mastercard';
    } else if (firstDigit === '3') {
      return 'amex';
    }

    return 'unknown';
  };

  const getCardSvg = () => {
    const cardType = getCardType();

    switch (cardType) {
      case 'visa':
        return visaSvg;
      case 'mastercard':
        return mastercardSvg;
      case 'amex':
        return amexSvg;
      default:
        return unknownSvg;
    }
  };

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    setResponseData(null);

    try {
      if (!binNumber.trim()) {
        setError('Por favor, ingresa un número BIN válido.');
        return;
      }

      console.log('Datos enviados a la API:', { binNumber });
      const data = await Bins(binNumber);
      setResponseData(data);

      if (data.state !== '1') {
        setError('La validación del BIN falló. El número BIN no fue encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
      setError('Hubo un error al procesar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600">
          Fecha: {new Date().toLocaleDateString()}
        </span>
        <Link
          to="/Emilly<3"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        >
          Emilly💘
        </Link>
      </div>

      <div className="mt-2">
        <a
          href="/"
          className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline"
        >
          BIN CHECKER
        </a>
        <p className="mt-2 text-gray-600">
          {responseData?.success
            ? 'Respuesta disponible'
            : 'Ingresa un BIN y haz clic en Obtener Datos'}
        </p>
      </div>

      <div className="mt-4">
        <label htmlFor="card" className="block text-sm text-gray-500">
          Número BIN
        </label>
        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <img
              src={getCardSvg()}
              alt="Tipo de Tarjeta"
              className="mx-3 w-6 h-6"
            />
          </span>
          <input
            type="text"
            placeholder="5555555555554444"
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-8 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={binNumber}
            maxLength={16}
            onChange={(e) => handleBinInputChange(e)}
          />
        </div>
      </div>

      <button
        onClick={handleFetchData}
        disabled={loading}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        {loading ? 'Obteniendo Datos...' : 'Obtener Datos'}
      </button>

      {error && <p className="mt-2 text-red-500">{error}</p>}

      {responseData && responseData.success && (
  <div className="p-2 sm:p-5">
    <div className="overflow-x-auto">

        <tbody className="text-base antialiased divide-y divide-slate-50">
          {Object.entries(responseData.BIN).map(([key, value]) => (
            <tr key={key} className="bg-slate-50">
              <td width="30%" className="p-2 font-medium">{key}</td>
              <td width="70%" className="p-2">{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
            </tr>
          ))}

          {responseData.BIN.country && (
            <React.Fragment>
      <div className="grid grid-cols-2 gap-4">
              </div>
              <tr className="bg-slate-50">
                <td width="30%" className="p-2 font-medium">Nombre de país ISO</td>
                <td width="70%" className="p-2">
                  <a className="hover:text-blue-500" title={`Complete ${responseData.BIN.country.name} database`} href={`/${responseData.BIN.country.alpha2.toLowerCase()}`}>
                    {responseData.BIN.country.name}
                  </a>
                  <a className="ml-2" title={`Complete ${responseData.BIN.country.name} database`} href={`/${responseData.BIN.country.alpha2.toLowerCase()}`}>
                    <img className="h-7" src={`https://bincheck.io/assets/flags/svg/${responseData.BIN.country.alpha2.toLowerCase()}.svg`} height="60" width="55" alt={responseData.BIN.country.name} />
                  </a>
                </td>
              </tr>
              {Object.entries(responseData.BIN.country).map(([key, value]) => (
                key !== 'name' && key !== 'flag' && (
                  <tr key={key} className="bg-slate-50 ">
                    <td width="30%" className="p-2 font-medium">{key}</td>
                    <td width="70%" className="p-2">{value.toString()}</td>
                  </tr>
                )
                ))}
            </React.Fragment>
          )}
        </tbody>
    </div>
  </div>
)}

      <Link
        to="/GeneradorTarjetas"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Ir a la siguiente página
      </Link>

      <div className="d">
        <BinCheckerSection />
      </div>
    </div>
  );
};
