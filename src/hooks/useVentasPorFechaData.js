import { useState, useEffect } from "react";
import { format, startOfYear } from "date-fns";
import { obtenerVentasPorFecha } from "@/services/ventasService";

export const useVentasPorFechaData = (material, rango) => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ventasFiltradas, setVentasFiltradas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let inicio = rango.startDate;
        let fin = rango.endDate;
        const hoy = new Date();

        if (!inicio && !fin) {
          inicio = startOfYear(hoy);
          fin = hoy;
        }

        const formattedStart = format(inicio, "yyyy-MM-dd");
        const formattedEnd = format(fin, "yyyy-MM-dd");

        const data = await obtenerVentasPorFecha(material, formattedStart, formattedEnd);
        setVentas(data);

        // Filtrar últimos 7 días si no hay rango seleccionado
        if (!rango.startDate && !rango.endDate) {
          const fechasUnicas = [...new Set(data.map((v) => v.fecha_venta))];
          const ultimasFechas = fechasUnicas.slice(-7);
          setVentasFiltradas(data.filter((v) => ultimasFechas.includes(v.fecha_venta)));
        } else {
          setVentasFiltradas(data);
        }
      } catch (error) {
        console.error(`Error cargando ventas por fecha de ${material}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [material, rango]);

  return { ventas, ventasFiltradas, loading };
};
