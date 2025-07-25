import axios from "axios";

const BASE_URL = "http://localhost:3000/api"; // Ajusta la URL según tu backend

export const registrarVenta = async (tipoVenta, datosVenta) =>{
  const endpoint = `${BASE_URL}/ventas-${tipoVenta.toLowerCase()}`;
  
  const response = await axios.post(endpoint,datosVenta, {
    headers: {"Content-Type": "application/json"},
  });
  return response.data;
};
