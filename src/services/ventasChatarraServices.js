import axios from "axios";

const API_URL = "http://localhost:3000/api/ventas-chatarra";

export const registrarVentaChatarra = async (venta) => {
  try {
    const response = await axios.post(API_URL, venta);
    return response.data;
  } catch (error) {
    console.error("Error al registrar la venta de chatarra:", error);
    throw error;
  }
};