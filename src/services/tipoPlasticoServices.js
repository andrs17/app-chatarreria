import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-plastico";

export const obtenerTiposPlastico = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos de plástico:", error);
    throw error;
  }
};
