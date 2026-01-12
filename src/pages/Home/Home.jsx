import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <section className="hero">
        <h1>Sueños Valenti</h1>
        <h2>Sesiones Interactivas de Supra Consciencia</h2>

        <p className="description">
          Bienvenido a tu portal de transformación espiritual. Explora nuestras
          sesiones diseñadas para conectar con tu ser interno y elevar tu
          vibración a través de experiencias guiadas de alta consciencia.
        </p>
      </section>

      <div className="home-actions">
        <Link to="/sesiones" className="btn btn-primary">
          Ver Sesiones
        </Link>
        <Link to="/carrito" className="btn btn-secondary">
          Mi Carrito
        </Link>
        <Link to="/preferencias" className="btn btn-secondary">
          Mis Preferencias
        </Link>
      </div>
    </section>
  );
};

export default Home;
