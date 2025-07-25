import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { format, startOfYear } from "date-fns";
import { es } from "date-fns/locale";
import { obtenerVentasPetPorFecha } from "../../../services/ventasPetService.js";
import { RangoFechasPet } from "./RangoFechasPet.jsx";
import { GraficoWrapper, Titulo, NoDataText } from "./graficoPetStyles.js";
import {theme} from "../../../styles/theme.js"

export const GraficoVentasPetPorFecha = () => {
  const [ventas, setVentas] = useState([]);
  const [rango, setRango] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      let inicio = rango.startDate;
      let fin = rango.endDate;

      if (!inicio || !fin) {
        inicio = startOfYear(new Date());
        fin = new Date();
        setRango({ startDate: inicio, endDate: fin });
      }

      const formattedStart = format(inicio, "yyyy-MM-dd");
      const formattedEnd = format(fin, "yyyy-MM-dd");
      const data = await obtenerVentasPetPorFecha(formattedStart, formattedEnd);

      setVentas(data);
    };

    fetchData();
  }, [rango]);

  return (
    <GraficoWrapper>
      <Titulo>Ventas de PET por Fecha</Titulo>
      <RangoFechasPet onChange={setRango} />
      {ventas.length === 0 ? (
        <NoDataText>No hay datos para el rango seleccionado.</NoDataText>
      ) : (
        <ResponsiveContainer width="100%" height={300} >
          <LineChart
            data={ventas}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="fecha_venta"
              tickFormatter={(fecha) => {
                const date = new Date(fecha);
                if (isNaN(date.getTime())) {
                  return fecha || "-";
                }
                return format(date, "MMM", { locale: es });
              }}
            />
            <YAxis stroke="#4caf50" />
            <Tooltip
              formatter={(value) => `${value} kg`}
              labelFormatter={(label) => {
                const date = new Date(label);
                if (isNaN(date.getTime())) {
                  return label || "-";
                }
                return format(date, "d MM yyyy", { locale: es });
              }}
            />
            <Line type="monotone" dataKey="total_kg" stroke="#4caf50" dot>
              <LabelList
                dataKey="total_kg"
                content={({ x, y, value }) => (
    <foreignObject x={x - 25} y={y - 30} width={60} height={25}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backgroundColor: theme.colores.blancoHumo,
          color: theme.colores.azulGris,
          
          margin: "0 0.2rem",
          borderRadius: "4px",
          fontSize: "10px",
    
          textAlign: "center",
        }}
      >
        {`${value} kg`}
      </div>
    </foreignObject>
  )}
                formatter={(value) => `${value} kg`}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      )}
    </GraficoWrapper>
  );
};
