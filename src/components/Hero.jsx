
import { useState } from "react";

const Hero = ({ onAgregar }) => {
  const [textoInput, setTextoInput] = useState("");

  const manejarBoton = () => {
    if (textoInput === "") return; 
    onAgregar(textoInput);         
    setTextoInput("");             
  };

  return (
    <div className="hero-seccion">
      <div className="caja-blanca">
        <h2>Agregar Notas</h2>
        
        <div className="formulario-inputs">
          <input 
            type="text" 
            placeholder="Escribe una nota..." 
            value={textoInput} 
            onChange={(e) => setTextoInput(e.target.value)} 
          />
          <button onClick={manejarBoton}>Guardar Nota</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;