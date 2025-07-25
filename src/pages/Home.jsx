import { useState } from "react";

import homeImage from "../assets/images/homeImage1.png";
import ModalVentas from "../components/vistaModalVentas/ModalVentas";
import Dashboard from "./Dashboard";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  ImageSection,
  Title,
  MainLayout,
  ButtonColumn,
  NavButton,
  TitleEmpleados,
} from "./stylesHome";

const Home = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <Container>
      <Title>System_recycle</Title>

      <MainLayout>
        <ButtonColumn $position="left">
          <NavButton as="button" onClick={() => setMostrarModal(true)}>
            Registrar Ventas
          </NavButton>

          {/* Agrega más botones aquí */}
          <NavButton as="button" onClick={() => setShowDashboard(true)}>
            Dashboard ventas
          </NavButton>
        </ButtonColumn>

        <ImageSection>
          <img src={homeImage} alt="Reciclaje PET" />
        </ImageSection>

        <ButtonColumn $position="right">
          <TitleEmpleados>Empleados</TitleEmpleados>
          <NavButton to="/clientes">Pasteros</NavButton>
          <NavButton to="/clientes">Plastiqueros</NavButton>
          <NavButton to="/clientes">Compradores</NavButton>
          {/* Agrega más botones aquí */}
        </ButtonColumn>
      </MainLayout>

      {/* 🧩 Modal de ventas */}
      {mostrarModal && <ModalVentas onClose={() => setMostrarModal(false)} />}
      {/* 🧩 Dashboard de ventas */}
      {showDashboard && <Dashboard />}
    </Container>
  );
};

export default Home;
