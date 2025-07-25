import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-pasta";

export const obtenerTiposPasta = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
