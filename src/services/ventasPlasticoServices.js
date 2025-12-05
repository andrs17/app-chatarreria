import axios from "axios";



const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const registrarVentaPlastico = async (ventaData) => {
  try {
    const response = await axios.post(`${BASE_URL}/ventas-plastico`, ventaData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar venta de plástico:", error);
    throw error;
  }
};
