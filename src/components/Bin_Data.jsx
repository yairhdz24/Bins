import React from "react";

export const BinDetailsCard = ({ binData }) => {
  const {
    BIN,
    brand,
    type,
    level,
    issuer,
    country,
  } = binData;

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {new Date().toDateString()}
        </span>
        <a
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          Comprobar nuevo BIN
        </a>
      </div>

      <div className="mt-2">
        <div>
          <p className="font-bold">Detalles para el BIN/IIN: {BIN}</p>
          <p>Marca de carro: {brand}</p>
          <p>Tipo de tarjeta: {type}</p>
          <p>Nivel de tarjeta: {level}</p>
          <p>Nombre del emisor / Banco: {issuer && issuer.name}</p>
          <p>Sitio web del emisor/banco: {issuer && issuer.website || "------"}</p>
          <p>Teléfono del emisor/banco: {issuer && issuer.phone || "------"}</p>
          <p>Nombre de país ISO: {country && country.name}</p>
          <p>Bandera del país: {country && country.flag || "------"}</p>
          <p>Código de país ISO A2: {country && country.alpha2}</p>
          <p>Código de país ISO A3: {country && country.alpha3}</p>
          <p>Moneda del país ISO: {country && country.currency_symbol || "------"}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          Read more
        </a>

        <div className="flex items-center">
         
          <span className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
            Khatab wedaa
          </span>
        </div>
      </div>
    </div>
  );
};
