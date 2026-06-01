import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [listaNotas, setListaNotas] = useState([]);

  const agregarNota = (nuevaNota) => {
    setListaNotas([...listaNotas, nuevaNota]);
  };

  const eliminarNota = (posicion) => {
    const listaLimpia = listaNotas.filter((_, i) => i !== posicion);
    setListaNotas(listaLimpia);
  };

  return (
    <div>
      <Navbar total={listaNotas.length} />
      
      <Hero onAgregar={agregarNota} />
      
      <div className="contenedor-principal">
        <h3>Mis Notas ({listaNotas.length})</h3>
        
        {listaNotas.length === 0 ? (
          <p className="mensaje-vacio"></p>
        ) : (
          <div className="seccion-tarjetas">
            {listaNotas.map((nota, i) => (
              <Card 
                key={i} 
                texto={nota} 
                onBorrar={() => eliminarNota(i)} 
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;