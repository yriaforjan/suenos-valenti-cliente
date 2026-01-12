import { useState, useEffect } from "react";
import getSessions from "../../services/api";
import Card from "../../components/Card/Card";
import "./Sessions.css";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [data] = await Promise.all([
          getSessions(),
          new Promise((resolve) => setTimeout(resolve, 800)),
        ]);

        if (isMounted) {
          if (Array.isArray(data)) {
            setSessions(data);
          } else {
            console.error("Data received is not an array:", data);
            setError("Formato de datos incorrecto.");
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error(err.message);
          setError("No pudimos cargar las sesiones.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="sessions-page">
      <h2>Explora Nuestras Sesiones</h2>

      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Invocando sesiones...</p>
        </div>
      )}

      {!loading && error && <p className="error-msg">{error}</p>}

      {!loading && !error && (
        <ul className="grid">
          {sessions.map((session) => (
            <Card key={session.id} {...session} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Sessions;
