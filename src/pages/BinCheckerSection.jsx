// components/BinCheckerSection.jsx
import React from "react";

export const BinCheckerSection = () => {
    return (
        <section className="w-full py-20 bg-white dark:text-white">
            <div className="flex flex-col max-w-6xl px-8 mx-auto">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="items-start w-full space-y-5 md:w-3/5 md:pr-16 rtl:md:pr-0">
                      
                        <h2 className="text-2xl font-bold leading-none text-black  sm:text-3xl md:text-4xl">
                            ¿Qué es la herramienta de verificación BIN/IIN? y ¿Cómo funciona?
                        </h2>
                        <p className="text-lg text-justify text-gray-900  ltr:md:pr-16 rtl:md:pl-16">
                            La herramienta de verificación BIN/IIN está diseñada de forma gratuita para ayudarlo a buscar los primeros 6 dígitos de cualquier tarjeta para obtener la información completa sobre la tarjeta, incluido el país donde se emite la tarjeta, el esquema de tarjeta a veces llamado "marca o red de pago ", tipo de tarjeta, categoría de tarjeta e información del emisor de la tarjeta "banco o compañía financiera" con su información de contacto si está disponible.
                        </p>
                        <p className="text-lg text-justify text-gray-900  ltr:md:pr-16 rtl:md:pl-16">
                            Para verificar un número BIN, solo debe proporcionar los primeros 6 dígitos de la tarjeta del pagador "a veces los primeros 8 dígitos para obtener la información más precisa" para obtener toda la información que mencionamos anteriormente. Por lo tanto, tiene una visión clara de sus transacciones en línea para dar un paso y protegerse de las actividades fraudulentas con tarjetas de crédito.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

