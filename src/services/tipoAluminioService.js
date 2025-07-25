import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-aluminio";

export const obtenerTiposAluminio = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos de aluminio:", error);
    throw error;
  }
};
