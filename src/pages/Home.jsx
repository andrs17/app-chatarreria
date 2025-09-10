import { useState } from "react";
import ModalVentas from "../components/vistaModalVentas/ModalVentas";
import { DashboardSlider } from "@/components/dashboards/DashboardSlider";
import {
  Container,
  Title,
  ButtonColumn,
  NavButton,
} from "./stylesHome";

const Home = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  return (
    <Container>
      <Title>System_recycle</Title>
      <ButtonColumn $position="left">
        <NavButton as="button" onClick={() => setMostrarModal(true)}>
          Registrar Ventas
        </NavButton>
        <NavButton as="button" >
          Empleados
        </NavButton>
      </ButtonColumn>

      <DashboardSlider />

      
      {/* 🧩 Modal de ventas */}
      {mostrarModal && <ModalVentas onClose={() => setMostrarModal(false)} />}
      {/* 🧩 Dashboard de ventas */}
    </Container>
  );
};

export default Home;
