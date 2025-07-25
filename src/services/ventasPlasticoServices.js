import axios from "axios";

const API_URL = "http://localhost:3000/api/ventas-plastico";

export const registrarVentaPlastico = async (ventaData) => {
  try {
    const response = await axios.post(API_URL, ventaData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar venta de plástico:", error);
    throw error;
  }
};
