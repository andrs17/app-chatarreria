// src/components/dashboards/DashboardSlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import { VentasPetDashboard } from "./pet/VentasPetDashboard";
import { theme } from "../../styles/theme.js";

const dashboards = [
  { label: "PET", component: <VentasPetDashboard /> },
  // { label: "Cartón", component: <DashboardCarton /> },
  // { label: "Vidrio", component: <DashboardVidrio /> },
];

export const DashboardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dashboards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dashboards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ContentContainer>
      <TitleDashboard>Dashboard de Ventas</TitleDashboard>
      <NavButton onClick={goToPrevious}>
        <ChevronLeft size={28} />
      </NavButton>
      <Title>{dashboards[currentIndex].label}</Title>
      {dashboards[currentIndex].component}
      <NavButton onClick={goToNext}>
        <ChevronRight size={28} />
      </NavButton>
    </ContentContainer>
  );
};

// Styled Components

const ContentContainer = styled.div`
  background-color: ${theme.colores.blancoHumo};
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  

  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TitleDashboard = styled.h1`
  padding: 17px;
  border-radius: 10px;
  width: fit-content;
  margin-left: 40px;
  color: ${theme.colores.azulGris};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
`;

const Title = styled.h2`
  width: min-content;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

const NavButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colores.azulSuave};
  color: ${theme.colores.blancoHumo};
  transition: all 0.3s ease;
  &:hover {
    background: ${theme.colores.amarillo};
    transform: scale(1.1);
  }
`;
