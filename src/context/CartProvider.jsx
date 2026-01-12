import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("valenti-cart");
      const parsed = savedCart ? JSON.parse(savedCart) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error parsing cart from localStorage", e);
      return [];
    }
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem("valenti-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (session) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === session.id);

      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === session.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...session, quantity: 1 }];
    });

    setNotification(`${session.name} añadida al carrito ✨`);
    setTimeout(() => setNotification(null), 2500);
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    cart,
    total,
    cartCount,
    notification,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {notification && <div className="cart-notification">{notification}</div>}
    </CartContext.Provider>
  );
};

export default CartProvider;
