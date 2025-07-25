import axios from "axios";

const API_URL = "http://localhost:3000/api/tipos-vidrio";

export const obtenerTiposVidrio = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
