import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalVentas from "../components/vistaModalVentas/ModalVentas";
import { DashboardSlider } from "@/components/dashboards/DashboardSlider";
import {
  Container,
  Sidebar,
  Content,
  NavButton,
  Title,
  MenuIcon,
  Overlay,
} from "./stylesHome";

const Home = () => {
  // Vista actual del panel derecho
  const [vistaActual, setVistaActual] = useState("dashboard");

  const [menuAbierto, setMenuAbierto] = useState(false);
  // Render dinámico
  const renderVista = () => {
    switch (vistaActual) {
      case "ventas":
        return <ModalVentas onClose={() => setVistaActual("dashboard")} />;
      case "dashboard":
        return <DashboardSlider />;
      case "empleados":
        return (
          <h2 style={{ color: "white" }}>Vista de empleados (placeholder)</h2>
        );

      default:
        return <DashboardSlider />;
    }
  };
  return (
    <Container>
      <MenuIcon onClick={() => setMenuAbierto(true)}>
        <FaBars size={24} color="white" />
      </MenuIcon>

      {menuAbierto && <Overlay onClick={() => setMenuAbierto(false)} />}
      <Sidebar $abierto={menuAbierto}>
        <Title>System Recycle</Title>

        <NavButton
          as="button"
          onClick={() => {
            setVistaActual("dashboard");
            setMenuAbierto(false);
          }}
        >
          Dashboards
        </NavButton>
        <NavButton
          as="button"
          onClick={() => {
            setVistaActual("ventas");
            setMenuAbierto(false);
          }}
        >
          Registrar Ventas
        </NavButton>

        <NavButton
          as="button"
          onClick={() => {
            setVistaActual("empleados");
            setMenuAbierto(false);
          }}
        >
          Empleados
        </NavButton>

        <FaTimes
          size={22}
          style={{ marginTop: "auto", cursor: "pointer", color: "white" }}
          onClick={() => setMenuAbierto(false)}
        />
      </Sidebar>

      <Content>{renderVista()}</Content>
    </Container>
  );
};

export default Home;
