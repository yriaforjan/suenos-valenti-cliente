import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Card.css";

const Card = ({ id, name, price, img }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const sessionToHeader = { id, name, price, img };
    addToCart(sessionToHeader);
  };

  return (
    <li className="session-card" data-id={id}>
      <div className="card-image">
        <img src={img} alt={`Imagen de la sesión ${name}`} loading="lazy" />
        <span className="badge">✨</span>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p className="price">{price}€</p>
        <button className="btn-add" onClick={handleAdd}>
          Reservar Sesión
        </button>
      </div>
    </li>
  );
};

export default Card;
