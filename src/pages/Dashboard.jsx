import styled from "styled-components";
import { DashboardSlider } from "../components/dashboards/DashboardSlider";
import { theme } from "../styles/theme.js";
export const Dashboard = () => {
  return (
    <CardsContainer>
      <Title>Dashboard de Ventas</Title>

      <DashboardSlider />
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 40px;
  margin-top: 5rem;
  border: 4px solid ${theme.colores.azulGris};
  border-radius: 28px;

  width: 80%;
`;

const Title = styled.h1`
  padding: 17px;
  border-radius: 10px;
  width: fit-content;
  margin-left: 40px;
  color: ${theme.colores.azulGris};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
`;
