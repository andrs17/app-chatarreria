import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme.js";
import { obtenerResumenVentasPet } from "../../../services/ventasPetService.js";
import {
  BarChart,
  Bar,
  XAxis,
  LabelList,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartCard } from "./dashboardStyles.js";
import { RangoFechasPet } from "./RangoFechasPet.jsx";

export const VentasPetChart = () => {
  const [ventas, setVentas] = useState([]);

  const [rango, setRango] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    const fetchVentas = async () => {
      let data;

      if (rango.startDate && rango.endDate) {
        const inicio = rango.startDate.toISOString().split("T")[0];
        const fin = rango.endDate.toISOString().split("T")[0];
        data = await obtenerResumenVentasPet(inicio, fin);
      } else {
        data = await obtenerResumenVentasPet(); // sin fechas
      }

      setVentas(data);
    };

    fetchVentas();
  }, [rango]);

  const normalize = (str) =>
    str
      ?.trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s_]/g, "");

  const coloresMap = {
    pettransparente: theme.colores.azulSuave,
    petcolor: theme.colores.verdeReciclaje,
    petmalta: theme.colores.azulGris,
    petaceite: theme.colores.amarillo,
  };

  const getColor = (tipo) => {
    const key = normalize(tipo);

    return coloresMap[key] || theme.colores.amarillo;
  };

  return (
    <ChartCard>
      <h2>Total por tipo de PET</h2>
      <RangoFechasPet onChange={setRango} />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ventas}>
          <XAxis
            dataKey="tipo_pet"
            angle={-20}
            textAnchor="start"
            interval={0}
            fontSize={11}
            dx={-40}
            dy={20}
          />
          <Bar dataKey="total_kg" barSize={35} radius={[10, 10, 0, 0]}>
            {ventas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.tipo_pet)} />
            ))}
            <LabelList
              dataKey="total_kg"
              position="top"
              formatter={(value) => `${value} kg`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
