// src/components/dashboards/pet/VentasPetDashboard.jsx
import { DashboardWrapper } from "./dashboardStyles";
import { VentasPetChart } from "./GraficosVentasPet";
import { GraficoVentasPetPorFecha } from "./GraficoVentasPetPorFecha";

export const VentasPetDashboard = () => {
  return (
    <DashboardWrapper>
      <VentasPetChart />

      <GraficoVentasPetPorFecha />
      {/* Agrega aquí más gráficos relacionados con PET */}
    </DashboardWrapper>
  );
};
