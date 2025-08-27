import { useEffect, useState } from "react";
import { obtenerResumenVentasPet } from "../services/ventasPetService";


export const useVentasPetData = (rango) => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVentas = async () => {
      setLoading(true);
      let data;

      if (rango?.startDate && rango?.endDate) {
        const inicio = rango.startDate.toISOString().split("T")[0];
        const fin = rango.endDate.toISOString().split("T")[0];
        data = await obtenerResumenVentasPet(inicio, fin);
        console.log(inicio, fin)
      } else {
        data = await obtenerResumenVentasPet(); // sin fechas
        
      }

      setVentas(data);
      setLoading(false);    
    };

    fetchVentas();
  }, [rango]);

  return { ventas, loading };
};
