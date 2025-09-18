// src/components/dashboards/shared/VentasDashboard.jsx
import { useState } from "react";
import { VentasChart } from "./VentasChart";
import { GraficoVentasPorFecha } from "./GraficoVentasPorFechas";
import { useVentasData } from "@/hooks/useVentasData";
import { useVentasPorFechaData } from "@/hooks/useVentasPorFechaData";
import styled, { keyframes } from "styled-components";
import { obtenerRangoPorDefecto, formatoFecha } from "@/utils/formatoFecha";
import { TableVentas } from "./TableVentas";
import { theme } from "@/styles/theme.js";

const floating3D = keyframes`
  0% {
    transform: translateX(0) translateY(0) scale(1);
  }
  25% {
    transform: translateX(6px) translateY(0px) scale(1.01);
  }
  50% {
    transform: translateX(0) translateY(0) scale(1);
  }
  75% {
    transform: translateX(-6px) translateY(0px) scale(0.99);
  }
  100% {
    transform: translateX(0) translateY(0) scale(1);
  }
`;

export const VentasDashboard = ({ material, label }) => {
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
      <TitleMaterial>{label}</TitleMaterial>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <VentasChart
          material={material}
          ventas={ventas}
          rango={rango}
          setRango={setRango}
          obtenerRangoPorDefecto={obtenerRangoPorDefecto}
          conTipo={true}
        />
      )}

      <TableVentas
        ventas={ventas}
        rango={rango}
        dataKeyTipo={dataKeyTipo}
        headers={["Tipo", "Cantidad (kg)", "Total"]}
        material={material}
        conTipo={true}
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;

  align-items: center;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 3rem;
  box-shadow: 0px 4px 6px ${({ theme }) => theme.colores.azulGris};
  padding: 2rem;
  margin-bottom: 2rem;
  width: 90%;
  height: 100%;

  animation: ${floating3D} 9s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    padding: 1.5rem;
    gap: 2rem;
  }
`;

const TitleMaterial = styled.h2`
  width: auto;
  padding: 0.5rem 0.6rem;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: absolute;
  color: ${theme.colores.verdeReciclaje};
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 6px ${({ theme }) => theme.colores.azulGris};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 1.5rem;
    top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;
