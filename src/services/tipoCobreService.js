import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";


export const obtenerTiposCobre = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tipos-cobre`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos de cobre:", error);
    throw error;
  }
};
