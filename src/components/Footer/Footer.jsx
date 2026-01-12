import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <strong>Sueños Valenti</strong> -
        Portal de Sesiones Interactivas
      </p>
      <p className="footer-subtitle">Conectando con tu Supra Consciencia</p>
    </footer>
  );
};

export default Footer;
