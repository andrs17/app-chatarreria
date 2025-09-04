// src/components/dashboards/shared/VentasDashboard.jsx
import { useState } from "react";
import { VentasChart } from "./VentasChart";
import { GraficoVentasPorFecha } from "./GraficoVentasPorFechas";
import { useVentasData } from "@/hooks/useVentasData";
import { useVentasPorFechaData } from "@/hooks/useVentasPorFechaData";
import { styled } from "styled-components";
import { obtenerRangoPorDefecto, formatoFecha } from "@/utils/formatoFecha";
import { TableVentas } from "./TableVentas";

export const VentasDashboard = ({ material }) => {
  const [rango, setRango] = useState(() => obtenerRangoPorDefecto());
  const { ventas, loading } = useVentasData(material, rango);
  const { ventasFiltradas, loading: loadingPorFecha } = useVentasPorFechaData(
    material,
    rango
  );
  const dataKeyTipo = `tipo_${material}`;
  const rangoFinal = rango.startDate ? rango : obtenerRangoPorDefecto(ventas);
  return (
    <VentasChartContainer>

      {loading ? <p>Cargando...</p> : (
      <VentasChart
        material={material}
        ventas={ventas}
        rango={rango}
        setRango={setRango}
      />
      )}

      <TableVentas
        ventas={ventas}
        rango={rango}
        dataKeyTipo={dataKeyTipo}
        headers={["Tipo", "Cantidad (kg)", "Total"]}
      />

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
