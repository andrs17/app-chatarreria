import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const obtenerClientes = async () => {
  const response = await axios.get(`${BASE_URL}/clientes`);
  return response.data;
};

export const crearCliente = async (cliente) => {
  const response = await axios.post(`${BASE_URL}/clientes`, cliente);
  return response.data;
};

export const actualizarCliente = async (id, cliente) => {
  const response = await axios.put(`${BASE_URL}/clientes/${id}`, cliente);
  return response.data;
};

export const eliminarCliente = async (id) => {
  const response = await axios.delete(`${BASE_URL}/clientes/${id}`);
  return response.data;
};
