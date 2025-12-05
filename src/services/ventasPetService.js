import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const registrarVentaPet = async (venta) => {
  const response = await axios.post(`${BASE_URL}/ventas-pet`, venta);
  return response.data;
};

export const obtenerVentasPet = async () => {
  const response = await axios.get(`${BASE_URL}/ventas-pet`);
  return response.data;
};

export const obtenerResumenVentasPet = async (inicio, fin) => {
  try {
    let url = "/api/ventas-pet/resumen";
    if (inicio && fin) {
      url += `?inicio=${inicio}&fin=${fin}`;
    }

    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error("Error al obtener resumen:", error);
    return [];
  }
};

export const obtenerVentasPetPorFecha = async (inicio, fin) => {
  const response = await axios.get(`${BASE_URL}/ventas-pet/por-fechas`, {
    params: { inicio, fin },
  });
  return response.data;
};
