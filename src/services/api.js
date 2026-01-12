const BASE_URL = "/data/sessions.json";

const getSessions = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el plano de datos:", error.message);
    throw error;
  }
};

export default getSessions;
