import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";


export const obtenerEmpleados = async () => {
  const response = await axios.get(`${BASE_URL}/empleados`);
  return response.data;
};
