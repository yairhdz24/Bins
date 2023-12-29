import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../images/corazon.json"; // Reemplaza con la ubicación de tu archivo JSON

export const MiAMOR = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const animContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    anim.setSpeed(1.5); // Ajusta la velocidad según tus preferencias

    return () => {
      anim.destroy();
    };
  }, []);

  const handleClick = () => {
    setMostrarMensaje(!mostrarMensaje);
    animContainer.current && animContainer.current.play();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      <div
        ref={animContainer}
        style={{
          width: "500px", // Ajusta según el tamaño de tu animación
          height: "500px", // Ajusta según el tamaño de tu animación
        }}
      ></div>
      {mostrarMensaje && (
        <p
          style={{
            fontSize: "30px",
            fontWeight: "poppins",
            color: "red",
            marginTop: "20px",
          }}
        >
          Te Amo Emilly 💖
        </p>
      )}
    </div>
  );
};
