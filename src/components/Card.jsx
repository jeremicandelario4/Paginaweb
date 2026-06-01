const Card = ({ texto, onBorrar }) => {
  return (
    <div className="tarjeta-nota">
      <p>{texto}</p>
      <button onClick={onBorrar}> Eliminar</button>
    </div>
  );
};

export default Card;