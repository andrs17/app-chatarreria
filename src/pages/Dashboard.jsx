import styled from "styled-components";
import { DashboardSlider } from "../components/dashboards/DashboardSlider";

export const Dashboard = () => {
  return (
    <CardsContainer>
      <h1>Dashboard de Ventas</h1>

      <DashboardSlider />
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  margin-top: 5rem;
  border: 5px solid gray;
  width: 100%;
`;
