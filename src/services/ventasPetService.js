import axios from "axios";

const API_URL = "http://localhost:3000/api/ventas-pet";

export const registrarVentaPet = async (venta) => {
  const response = await axios.post(API_URL, venta);
  return response.data;
};

export const obtenerVentasPet = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const obtenerResumenVentasPet = async () => {
  const response = await axios.get(`${API_URL}/resumen`);
  return response.data;
};

export const obtenerVentasPetPorFecha = async (inicio, fin) => {
  const response = await axios.get(`${API_URL}/por-fechas`, {
    params: { inicio, fin },
  });
  return response.data;
};
