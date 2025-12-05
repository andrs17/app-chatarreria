import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const registrarVentaAluminio = async (ventaData) => {
  try {
    const response = await axios.post(`${BASE_URL}/ventas-aluminio`, ventaData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar venta de aluminio:", error);
    throw error;
  }
};
