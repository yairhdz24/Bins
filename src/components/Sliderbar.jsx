import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill, RiBankCardFill } from "react-icons/ri";
import lottie from "lottie-web";
import CreditCard from "../images/CreditCard.json";

export const Slidebar = ({ isOpen, onClose }) => {
  const animContainer = useRef(null);
  const animInstance = useRef(null);

  useEffect(() => {
    if (isOpen) {
      animInstance.current = lottie.loadAnimation({
        container: animContainer.current,
        renderer: "svg",
        autoplay: true,
        animationData: CreditCard,
        
      });

      animInstance.current.setSpeed(1.5); // Ajusta la velocidad según tus preferencias
      animInstance.current.loop = true;
    } else {
      if (animInstance.current) {
        animInstance.current.stop();
      }
    }

    return () => {
      if (animInstance.current) {
        animInstance.current.destroy();
      }
    };
  }, [isOpen]);

  return (
    <aside
      className={`${isOpen ? "translate-x-0" : "-translate-x-full "
        } z-10 fixed top-0 left-0 h-screen w-64 px-5 overflow-y-auto bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          <div ref={animContainer} className="w-20 h-20"></div>
        </Link>

        <button onClick={onClose} className="text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none">
          <RiCloseFill className="w-10 h-10" />
        </button>
      </div>

      <nav className="-mx-3 space-y-6" >
        <div className="space-y-3">
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-white">analytics</label>
          <Link
            to="/GeneradorTarjetas"
            className="flex items-center px-3 py-2 text-gray-900 dark:text-gray-900 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={onClose}
          >
            
            <RiBankCardFill className="h-6 w-6 dark:text-white"/>
            <span className="mx-2 text-sm font-medium dark:text-white">Generador de Tarjetas</span>
          </Link>

          <Link
            to="/BinChecker"
            className="flex items-center px-3 py-2 text-gray-900 dark:text-gray-900 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={onClose}
          >
            
            <RiBankCardFill className="h-6 w-6 dark:text-white"/>
            <span className="mx-2 text-sm font-medium dark:text-white">Bin Checker</span>
          </Link>

          <Link
            to="/BinChecker"
            className="flex items-center px-3 py-2 text-gray-900 dark:text-gray-900 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={onClose}
          >
            
            <RiBankCardFill className="h-6 w-6 dark:text-white"/>
            <span className="mx-2 text-sm font-medium dark:text-white">Generador de Tarjetas</span>
          </Link>

          <Link
            to="/GeneradorTarjetas"
            className="flex items-center px-3 py-2 text-gray-900 dark:text-gray-900 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={onClose}
          >
            
            <RiBankCardFill className="h-6 w-6 dark:text-white"/>
            <span className="mx-2 text-sm font-medium dark:text-white">Generador de Tarjetas</span>
          </Link>

          {/* Agrega más enlaces según sea necesario */}
        </div>

        {/* Agrega más secciones de menú con enlaces según sea necesario */}
      </nav>
    </aside>
  );
};
