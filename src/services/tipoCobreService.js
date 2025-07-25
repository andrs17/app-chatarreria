import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-cobre";

export const obtenerTiposCobre = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos de cobre:", error);
    throw error;
  }
};
