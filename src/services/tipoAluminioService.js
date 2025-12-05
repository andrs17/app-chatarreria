import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";


export const obtenerTiposAluminio = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tipos-aluminio`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos de aluminio:", error);
    throw error;
  }
};
