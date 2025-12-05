import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const registrarVentaPasta = async (venta) => {
  const response = await axios.post(`${BASE_URL}/ventas-pasta`, venta);
  return response.data;
};
