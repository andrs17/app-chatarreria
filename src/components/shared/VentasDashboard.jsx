// src/components/dashboards/shared/VentasDashboard.jsx
import { useState } from "react";
import { VentasChart } from "./VentasChart";
import { GraficoVentasPorFecha } from "./GraficoVentasPorFechas";
import { useVentasData } from "@/hooks/useVentasData";
import { useVentasPorFechaData } from "@/hooks/useVentasPorFechaData";
import { styled } from "styled-components";
import { obtenerRangoPorDefecto, formatoFecha} from "@/utils/fechas";
import { TableVentas } from "./TableVentas";

export const VentasDashboard = ({ material }) => {
  const [rango, setRango] = useState({ startDate: null, endDate: null });
  const { ventas, loading } = useVentasData(material);
  const { ventasFiltradas, loading: loadingPorFecha } = useVentasPorFechaData(
    material,
    rango
  );

  const rangoFinal = rango.startDate
    ? rango
    : obtenerRangoPorDefecto(ventas);
  return (
    <VentasChartContainer>
      <VentasChart
        material={material}
        ventas={ventas}
        rango={rango}
        setRango={setRango}
        RangoFechasComponent={RangoFechasComponent}
      />
      {loading ? <p>Cargando...</p> : <p>Total registros: {ventas.length}</p>}

      <TableVentas ventas={ventasFiltradas} rango={rango} />

      <GraficoVentasPorFecha
        material={material}
        ventas={ventasFiltradas}
        rango={rango}
        setRango={setRango}
      />
      {loadingPorFecha && <p>Cargando...</p>}
      {!loadingPorFecha && <p>Total registros: {ventasFiltradas.length}</p>}
    </VentasChartContainer>
  );
};

const VentasChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 1rem;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;

  border: 1px solid;
`;
