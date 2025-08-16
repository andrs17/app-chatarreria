// src/components/dashboards/pet/VentasPetDashboard.jsx
import { DashboardWrapper } from "./dashboardStyles";
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
