import React, { useState } from "react";
import { Bins } from "../Api/Api_Bins.js";
import { Link } from 'react-router-dom';
import visaSvg from '../images/visa.svg';
import mastercardSvg from '../images/mastercard.svg';
import amexSvg from '../images/american_express.svg';
import { RiMenu2Line } from 'react-icons/ri';
import unknownSvg from '../images/unknown.svg';
import { BinCheckerSection } from "./BinCheckerSection.jsx";
import { Slidebar } from "../components/Sliderbar.jsx";

export const BinCheck = () => {
  const [binNumber, setBinNumber] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
      setError('Hubo un error al procesar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 bg-gray-100 dark:bg-gray-800 shadow-md relative">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-white">
          Fecha: {new Date().toLocaleDateString()}
        </span>
        <button
          className="text-3xl text-black focus:outline-none"
          onClick={handleOpenMenu}
        >
          <RiMenu2Line className="dark:text-white" />
        </button>
      </div>
  
      <Slidebar isOpen={menuOpen} onClose={handleCloseMenu} />
  
      <div className="mt-2">
        <a
          href="/BinChecker"
          className="text-2xl font-semibold mb-4 dark:text-white"
        >
          BIN CHECKER
        </a>
        <p className="text-gray-600 dark:text-white">
          {responseData?.success
            ? 'Respuesta disponible'
            : 'Ingresa un BIN y haz clic en Obtener Datos'}
        </p>
      </div>
  
      <div className="mt-4">
        <label htmlFor="card" className="block text-sm text-gray-500 dark:text-white">
          Número BIN
        </label>
        <div className="relative flex items-center mt-2 z-2">
          <span className="absolute">
            <img
              src={getCardSvg()}
              alt="Tipo de Tarjeta"
              className="mx-2 w-5 h-5"
            />
          </span>
          <input
            type="text"
            placeholder="5555555555554444"
            className="block w-full py-2 text-gray-700 dark:text-white placeholder-gray-400/70 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg pl-8 pr-4 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
  
      {error && <p className="mt-2 text-red-500 dark:text-red-400">{error}</p>}
  
      {responseData && responseData.success && (
        <div className="p-2 sm:p-5">
          <div className="overflow-x-auto">
            <table className="text-base w-full">
              <tbody>
                {Object.entries(responseData.BIN).map(([key, value]) => {
                  if (key !== 'issuer' && key !== 'country') {
                    return (
                      <tr key={key} className="bg-slate-50 dark:bg-gray-800">
                        <td className="p-2 font-medium text-gray-700 dark:text-white">{key}</td>
                        <td className="p-2 text-gray-700 dark:text-white">{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
  
                {responseData.BIN.country && (
                  <React.Fragment>
                    <tr className="bg-slate-50 dark:bg-gray-800">
                      <td className="p-2 font-medium text-gray-700 dark:text-white">Nombre de país ISO</td>
                      <td className="p-2 text-gray-700 dark:text-white">
                        <a className="hover:text-blue-500" title={`Complete ${responseData.BIN.country.name} database`} href={`/${responseData.BIN.country.alpha2.toLowerCase()}`}>
                          {responseData.BIN.country.name}
                        </a>
                        <a className="ml-2" title={`Complete ${responseData.BIN.country.name} database`} href={`/${responseData.BIN.country.alpha2.toLowerCase()}`}>
                          <img className="h-7" src={`https://bincheck.io/assets/flags/svg/${responseData.BIN.country.alpha2.toLowerCase()}.svg`} height="60" width="55" alt={responseData.BIN.country.name} />
                        </a>
                      </td>
                    </tr>
                    {Object.entries(responseData.BIN.country).map(([key, value]) => {
                      if (key !== 'name' && key !== 'flag') {
                        return (
                          <tr key={key} className="bg-slate-50 dark:bg-gray-800">
                            <td className="p-2 font-medium text-gray-700 dark:text-white">{key}</td>
                            <td className="p-2 text-gray-700 dark:text-white">{value.toString()}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </React.Fragment>
                )}
              </tbody>
            </table>
          </div>

          
        </div>
      )}
  
      <div className="mt-5">
        <BinCheckerSection />
      </div>
    </div>
  );
};
