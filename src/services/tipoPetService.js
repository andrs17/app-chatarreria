import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-pet";

export const obtenerTiposPet = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
