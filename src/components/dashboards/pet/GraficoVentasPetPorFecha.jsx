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
import { format, parseISO, startOfYear } from "date-fns";
import { es } from "date-fns/locale";
import { obtenerVentasPetPorFecha } from "../../../services/ventasPetService.js";
import { RangoFechasPet } from "./RangoFechasPet.jsx";
import { GraficoWrapper, Titulo, NoDataText } from "./graficoPetStyles.js";
import { theme } from "../../../styles/theme.js";
import { CustomTooltip } from "../../shared/CustonTooltip.jsx";

export const GraficoVentasPetPorFecha = () => {
  const [ventas, setVentas] = useState([]);
  const [rango, setRango] = useState({
    startDate: null,
    endDate: null,
  });
  const [ventasFiltradas, setVentasFiltradas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let inicio = rango.startDate;
      let fin = rango.endDate;

      const hoy = new Date();

      if (!inicio && !fin) {
        inicio = startOfYear(hoy);
        fin = hoy;
      }

      const formattedStart = format(inicio, "yyyy-MM-dd");
      const formattedEnd = format(fin, "yyyy-MM-dd");

      const data = await obtenerVentasPetPorFecha(formattedStart, formattedEnd);

      setVentas(data);
      console.log(JSON.stringify(data))

      const filtrarUltimos7Dias = (ventas) => {
        const fechasUnicas = [...new Set(ventas.map((v) => v.fecha_venta))];
        const ultimasFechas = fechasUnicas.slice(-7); // últimas 7 fechas únicas

        const filtradas = ventas.filter((v) =>
          ultimasFechas.includes(v.fecha_venta)
        );
        return filtradas;
      };

      if (!rango.startDate && !rango.endDate) {
        setVentasFiltradas(filtrarUltimos7Dias(data));
      } else {
        setVentasFiltradas(data);
      }
    };

    fetchData();
  }, [rango]);

  return (
    <GraficoWrapper>
      <Titulo>Total de PET</Titulo>
      <RangoFechasPet onChange={setRango} />
      {ventas.length === 0 ? (
        <NoDataText>No hay datos para el rango seleccionado.</NoDataText>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={ventasFiltradas}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="fecha_venta"
              tickFormatter={(fecha) => {
                const date = parseISO(fecha);
                if (isNaN(date.getTime())) {
                  return fecha || "-";
                }
                return format(date, "dd 'de ' MMM", { locale: es });
              }}
              tick={{
                fontSize: 10,
                fill: theme.colores.amarillo,
                textAnchor: "middle",
              }}
              axisLine={{ stroke: theme.colores.azulGris }}
              interval={0}
              angle={-45}
              dy={10}
              height={30}
            />
            <YAxis stroke={theme.colores.azulGris} />
            <Tooltip content={<CustomTooltip />} />

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
                        padding: "0.3rem 0.2rem",

                        margin: "0 0.7rem",
                        borderRadius: "7px",
                        fontSize: "10px",
                        textAlign: "center",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
