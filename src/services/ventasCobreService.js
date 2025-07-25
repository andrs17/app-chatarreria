import axios from "axios";

const API_URL = "http://localhost:3000/api/ventas-cobre";

export const registrarVentaCobre = async (venta) => {
  try {
    const response = await axios.post(API_URL, venta);
    return response.data;
  } catch (error) {
    console.error("Error al registrar venta de cobre:", error);
    throw error;
  }
};
