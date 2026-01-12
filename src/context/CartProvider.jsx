import { useState, useEffect, useMemo, useCallback } from "react";
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

  const addToCart = useCallback((session) => {
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
  }, []);

  const increaseQuantity = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      total,
      cartCount,
      notification,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
    }),
    [
      cart,
      total,
      cartCount,
      notification,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {notification && <div className="cart-notification">{notification}</div>}
    </CartContext.Provider>
  );
};

export default CartProvider;
