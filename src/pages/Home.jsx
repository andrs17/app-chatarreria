import { useState } from "react";
import ModalVentas from "../components/vistaModalVentas/ModalVentas";
import { Dashboard } from "./Dashboard";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  Title,
  ButtonColumn,
  NavButton,
  TitleEmpleados,
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
      </ButtonColumn>
      
        <Dashboard />
      
      <ButtonColumn $position="right">
        <TitleEmpleados>Empleados</TitleEmpleados>
        <NavButton to="/clientes">Pasteros</NavButton>
        <NavButton to="/clientes">Plastiqueros</NavButton>
        <NavButton to="/clientes">Compradores</NavButton>
        {/* Agrega más botones aquí */}
      </ButtonColumn>
      {/* 🧩 Modal de ventas */}
      {mostrarModal && <ModalVentas onClose={() => setMostrarModal(false)} />}
      {/* 🧩 Dashboard de ventas */}
    </Container>
  );
};

export default Home;
