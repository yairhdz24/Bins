import React, { useState } from "react";
import { Bins } from "../Api/Api_Bins.js";
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [binNumber, setBinNumber] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBinInputChange = (e) => {
    setBinNumber(e.target.value);
  };

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    setResponseData(null);

    try {
      // Verifica que el binNumber no esté vacío antes de hacer la solicitud
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
    <div className="bg-gray-200 flex flex-col items-center rounded-lg p-10 mt-20">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Consulta de BIN</h1>
        <p className="text-gray-500">Ingresa un número BIN para obtener información.</p>
      </div>
      <form className="mb-8">
        <div className="flex flex-col items-center">
          <label htmlFor="card" className="text-sm text-gray-500 mb-2">BIN Number</label>
          <div className="relative flex items-center">
            <span className="absolute mx-3">
              <svg className="w-6 h-4" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ... (código del SVG) ... */}
              </svg>
            </span>
            <input
              type="text"
              placeholder="5555555555554444"
              className="input-field"
              value={binNumber}
              onChange={(e) => handleBinInputChange(e)}
            />
          </div>
        </div>
      </form>

      <button onClick={handleFetchData} disabled={loading} className="btn-primary">
        {loading ? 'Obteniendo Datos...' : 'Obtener Datos'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {responseData && responseData.success && (
        <div className="card mt-5">
          <h2 className="text-xl font-bold mb-4">Respuesta del BIN:</h2>
          
          {Object.entries(responseData.BIN).map(([key, value]) => (
            <p key={key} className="mb-2">
              {key}: {typeof value === 'object' ? JSON.stringify(value, null, 2) : value.toString()}
            </p>
          ))}
          
          {responseData.BIN.issuer && (
            <div>
              <h3 className="text-lg font-bold mb-2">Issuer:</h3>
              {Object.entries(responseData.BIN.issuer).map(([key, value]) => (
                <p key={key} className="mb-2">
                  {key}: {value.toString()}
                </p>
              ))}
            </div>
          )}

          {responseData.BIN.country && (
            <div>
              <h3 className="text-lg font-bold mb-2">Country:</h3>
              {Object.entries(responseData.BIN.country).map(([key, value]) => (
                <p key={key} className="mb-2">
                  {key}: {value.toString()}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      <button className="btn-secondary mt-4">
        <Link to="idk" rel="stylesheet" href="" >SIGUIENTE PÁGINA </Link>
      </button>
    </div>
  );
};
