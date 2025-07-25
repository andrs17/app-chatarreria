import axios from "axios";

const API_URL = "http://localhost:3000/api/ventas-pasta";

export const registrarVentaPasta = async (venta) => {
  const response = await axios.post(API_URL, venta);
  return response.data;
};
