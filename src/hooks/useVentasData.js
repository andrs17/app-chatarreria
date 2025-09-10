import { useState, useEffect } from "react";
import axios from "axios";

export const useVentasData = (material, rango = {}) => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVentas = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:3000/api/ventas-${material}/resumen`;
        const formatDate = (date) => date.toISOString().split("T")[0];
        
        if (rango?.startDate && rango?.endDate) {
          url += `?inicio=${formatDate(rango.startDate)}&fin=${formatDate(rango.endDate)}`;
        }
        const { data } = await axios.get(url);
        setVentas(data);
      } catch (error) {
        console.error(`Error cargando ventas de ${material}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, [material, rango]);

  return { ventas, loading };
};
