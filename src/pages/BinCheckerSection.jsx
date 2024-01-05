// components/BinCheckerSection.jsx
import React from "react";

export const BinCheckerSection = () => {
    return (
        <section className="w-full mt-10 dark:text-white">
            <div className="flex flex-col max-w-6xl px-8 mx-auto">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="items-start w-full space-y-5 md:w-3/5 md:pr-16 rtl:md:pr-0">
                      
                        <h2 className="text-2xl font-bold leading-none text-black dark:text-white sm:text-3xl md:text-4xl">
                            ¿Qué es la herramienta de verificación BIN/IIN? y ¿Cómo funciona?
                        </h2>
                        <p className="text-lg text-justify text-gray-900 dark:text-white ltr:md:pr-16 rtl:md:pl-16">
                            La herramienta de verificación BIN/IIN es una herramienta gratuita diseñada para brindarte información detallada sobre cualquier tarjeta. Simplemente ingresa los primeros 6 dígitos de la tarjeta (o a veces los primeros 8 para mayor precisión), y obtén datos como el país emisor, el esquema de la tarjeta (conocido como "marca o red de pago"), tipo de tarjeta, categoría de tarjeta e información del emisor (banco o compañía financiera) junto con su información de contacto, si está disponible.
                        </p>
                        <p className="text-lg text-justify text-gray-900 dark:text-white ltr:md:pr-16 rtl:md:pl-16">
                            Al verificar un número BIN, puedes obtener una visión clara de tus transacciones en línea. Esto te permite dar un paso más en la protección contra actividades fraudulentas con tarjetas de crédito y asegurarte de que tus transacciones sean seguras y legítimas.
                        </p>
                        <p className="text-lg text-justify text-gray-900 dark:text-white ltr:md:pr-16 rtl:md:pl-16">
                            Nuestra herramienta te proporciona la información necesaria para tomar decisiones informadas sobre tus transacciones financieras en línea, ayudándote a identificar posibles riesgos y garantizando una experiencia segura al realizar compras con tarjeta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


