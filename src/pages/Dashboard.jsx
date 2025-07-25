// src/pages/Dashboard.jsx
import { VentasPetChart } from "../components/dashboards/pet/GraficosVentasPet.jsx";
import { DashboardWrapper } from "../components/dashboards/pet/dashboardStyles.js";
import { GraficoVentasPetPorFecha } from "../components/dashboards/pet/GraficoVentasPetPorFecha.jsx";
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h1>Dashboard de Ventas</h1>
      <VentasPetChart />
      <GraficoVentasPetPorFecha />
      {/* Aquí luego puedes incluir VentasVidrioChart, VentasPastaChart, etc */}
    </DashboardWrapper>
  );
};

export default Dashboard;
