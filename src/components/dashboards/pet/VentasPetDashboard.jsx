// src/components/dashboards/pet/VentasPetDashboard.jsx
import styled from "styled-components";
import { useState } from "react";
import { VentasPetChart } from "./GraficosVentasPet";
import { GraficoVentasPetPorFecha } from "./GraficoVentasPetPorFecha";
import { TableGraficoBarrasPet } from "./TableGraficoBarrasPet";

import { useVentasPetData } from "../../../hooks/useVentasPetData.js";

export const VentasPetDashboard = () => {
  const [rango, setRango] = useState({
    startDate: null,
    endDate: null,
  });

  const { ventas, loading } = useVentasPetData(rango);

  return (
    <DashboardWrapper>
      <VentasPetChart ventas={ventas} rango={rango} setRango={setRango} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <TableGraficoBarrasPet ventas={ventas} rango={rango} />
      )}
      <GraficoVentasPetPorFecha ventas={ventas} />

      {/* Agrega aquí más gráficos relacionados con PET */}
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  margin-top: 2.5rem;
  padding: 3rem;
  width: 90%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colores.azulGris};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    justify-items: center;
    align-content: center;
    padding: 1.5rem 0.5rem;
  }
`;
