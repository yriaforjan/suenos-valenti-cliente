import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Preferences.css";

const Preferences = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="preferences-page">
      <h2>Preferencias de Usuario</h2>
      <div className="option-group">
        <p>
          Modo actual:{" "}
          <strong>{theme === "light" ? "Claro ☀️" : "Oscuro 🌙"}</strong>
        </p>
        <button className="btn-theme" onClick={toggleTheme}>
          Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
        </button>
      </div>
    </section>
  );
};

export default Preferences;
