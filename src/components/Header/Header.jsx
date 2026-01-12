import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <Link to="/" onClick={closeMenu} className="logo-link">
          <img src="/logo.png" alt="Sueños Valentí logo" className="logo-img" />
        </Link>
        <div
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="sesiones" onClick={closeMenu}>
              Ver sesiones
            </NavLink>
          </li>
          <li>
            <NavLink to="carrito" className="cart-link" onClick={closeMenu}>
              Carrito
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="preferencias" onClick={closeMenu}>
              Preferencias
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
