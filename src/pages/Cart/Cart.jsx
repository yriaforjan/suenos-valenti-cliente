import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleConfirm = () => {
    alert(
      "¡Reserva confirmada! Recibirás un correo con los detalles de tu viaje espiritual. ✨"
    );
    clearCart();
    navigate("/sesiones");
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Tu Reserva Astral</h2>
        <p className="empty-msg">Tu cesta espiritual está vacía 🌌</p>
        <Link to="/sesiones" className="btn-back">
          Volver a las sesiones
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Tu Reserva Astral</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-content">
              <h3>{item.name}</h3>
              <p className="unit-price">{item.price}€ / unidad</p>
              <div className="quantity-controls">
                <button
                  className="btn-qty"
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={item.quantity <= 1}
                >
                  {" "}
                  -{" "}
                </button>
                <span className="qty-number">{item.quantity}</span>
                <button
                  className="btn-qty"
                  onClick={() => increaseQuantity(item.id)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <p className="subtotal">
                Subtotal: <strong>{item.price * item.quantity}€</strong>
              </p>
            </div>
            <button
              className="btn-delete"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <h3>Total acumulado: {total}€</h3>
        <button className="btn-checkout" onClick={handleConfirm}>
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default Cart;
