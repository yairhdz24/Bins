import React from 'react';
import { FeatureCard } from '../components/FeatureCard';

export const HomePage1 = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    explore our awesome <span className="text-blue-500">Components</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                    <FeatureCard
                        icon={
                            <svg enable-background="new 0 0 120 120" className="w-10 h-10" viewBox="0 0 120 120" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">

                                <path class="icon-2-0 fill-none stroke-primary" d="m99.1 113.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></path>
                                <path class="icon-2-1 fill-none stroke-gray-400" d="m15.1 75.6v-64.6l4.4-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 4.3-4.3 4.3 4.3 5-4.3 4.4 4.3v96.5c0 3.2 2.6 5.8 5.8 5.8v0c3.2 0 5.8-2.6 5.8-5.8v-94.3h-5.8v93.1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></path>
                                <line class="icon-2-1 fill-none stroke-gray-400" x1="99.1" x2="26.1" y1="113.3" y2="113.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <g opacity=".5">
                                    <path class="icon-2-3 fill-gray-400" d="m78.1 44.5h-38.9c-4.1 0-7.3-3.3-7.3-7.3 0-4.1 3.3-7.3 7.3-7.3h38.9c4.1 0 7.3 3.3 7.3 7.3 0.1 4-3.2 7.3-7.3 7.3z"></path>
                                </g>
                                <path class="icon-2-2 fill-primary" d="m73.1 38h-38.9c-4.1 0-7.3-3.3-7.3-7.3 0-4.1 3.3-7.3 7.3-7.3h38.9c4.1 0 7.3 3.3 7.3 7.3 0.1 4-3.2 7.3-7.3 7.3z"></path>
                                <path class="icon-2-4 fill-white" d="m65.4 32.3h-23.5c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6h23.5c0.9 0 1.6 0.7 1.6 1.6 0 0.8-0.7 1.6-1.6 1.6z"></path>
                                <g opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3">
                                    <line class="icon-2-1 fill-none stroke-gray-400" x1="3.8" x2="33.1" y1="86" y2="86"></line>
                                    <line class="icon-2-1 fill-none stroke-gray-400" x1="3.8" x2="33.1" y1="93.5" y2="93.5"></line>
                                    <line class="icon-2-1 fill-none stroke-gray-400" x1="3.8" x2="18.3" y1="101.1" y2="101.1"></line>
                                    <line class="icon-2-1 fill-none stroke-gray-400" x1="27.3" x2="33.1" y1="101.1" y2="101.1"></line>
                                </g>
                                <line class="icon-2-1 fill-none stroke-gray-400" x1="54.4" x2="54.4" y1="90.6" y2="102.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-2-1 fill-none stroke-gray-400" x1="62.3" x2="62.3" y1="87.1" y2="102.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-2-1 fill-none stroke-gray-400" x1="70.3" x2="70.3" y1="89.7" y2="102.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-2-1 fill-none stroke-gray-400" x1="78.3" x2="78.3" y1="81.8" y2="102.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <polyline class="icon-2-0 fill-none stroke-primary" points="50.6 86 64.2 75.6 69 81.3 80.9 71.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></polyline>
                            </svg>
                        }
                        title="Generador de Bins-Tarjetas"
                        description="Comprobadorde BIN: Verifique los números BIN de la tarjeta de crédito y verifique que sea información vital."
                        linkTo="/GeneradorTarjetas"
                    />

                    <FeatureCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        }
                        title="Comprobador de BIN"
                        description="Busque cualquier BIN y obteniendo informacion erelvante de la cc"
                        linkTo="/BinChecker"
                    />

                    <FeatureCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        }
                        title="Comprobador de IP / BIN"
                        description=" Haga coincidir el país de la dirección IP con el país del BIN."
                        linkTo="/ElegantDarkMode"
                    />
                    <FeatureCard
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        }
                        title="Generador de Direcciones random"
                        description="BIN Buscar: Busque cualquier BIN utilizando marca, país, banco, etc."
                        linkTo="/ElegantDarkMode"
                    />

                    <FeatureCard
                        icon={
                            <svg enable-background="new 0 0 120 120" className='h-10 w-10' viewBox="0 0 120 120" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                               
                                <line class="icon-39-0 fill-none stroke-gray-400" x1="75.1" x2="77" y1="17.1" y2="23.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-39-0 fill-none stroke-gray-400" x1="25.1" x2="29.8" y1="26" y2="24.7" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <path class="icon-39-0 fill-none stroke-gray-400" d="m11.4 41.1-2-7.1c-0.5-1.9 0.6-3.9 2.5-4.4l7.5-2.1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></path>
                                <path class="icon-39-0 fill-none stroke-gray-400" d="M90.9,48.9L80.2,10c-0.8-3-4-4.8-7-4L5.8,24.7c-3,0.8-4.8,4-4,7l11.6,41.8c0.8,3,4,4.8,7,4l8.5-2.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></path>
                                <path class="icon-39-1 fill-gray-400" d="m113.8 114.1h-71.7c-3.4 0-6.2-2.8-6.2-6.2v-45.1c0-3.4 2.8-6.2 6.2-6.2h71.7c3.4 0 6.2 2.8 6.2 6.2v45.1c0 3.4-2.8 6.2-6.2 6.2z" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></path>
                                <path class="icon-39-2 fill-primary" d="m105.4 103.3h-71.7c-3.4 0-6.2-2.8-6.2-6.2v-45.1c0-3.4 2.8-6.2 6.2-6.2h71.7c3.4 0 6.2 2.8 6.2 6.2v45.1c0 3.5-2.7 6.2-6.2 6.2z"></path>
                                <line class="icon-39-3 fill-none stroke-white" x1="41" x2="32.3" y1="84.7" y2="84.7" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-39-3 fill-none stroke-white" x1="50.1" x2="32.3" y1="90.8" y2="90.8" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <rect class="icon-39-3 fill-none stroke-white" x="90" y="83.2" width="16.9" height="7.6" opacity=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></rect>
                                <line class="icon-39-3 fill-none stroke-white" x1="106.8" x2="32.3" y1="61.1" y2="61.1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                <line class="icon-39-3 fill-none stroke-white" x1="106.8" x2="32.3" y1="74.6" y2="74.6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                            </svg>
                        }
                        title="Simple & Clean Designs"
                        description="Generador de tarjetas de crédito: Genere muestras de tarjetas de crédito para realizar pruebas."
                        linkTo="/SimpleCleanDesigns"
                    />
                </div>
            </div>
        </section>
    );
};
