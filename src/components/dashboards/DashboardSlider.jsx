// src/components/dashboards/DashboardSlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import { VentasDashboard } from "../shared/VentasDashboard.jsx";
import { theme } from "../../styles/theme.js";

export const dashboards = [
  { label: "PET", material: "pet" },
  { label: "COBRE", material: "cobre" },
  { label: "PASTA", material: "pasta" },
  { label: "ALUMINIO", material: "aluminio" },
  { label: "ACERO", material: "acero" },
  { label: "ARCHIVO", material: "archivo" },
  { label: "CARTON", material: "carton" },
  { label: "VIDRIO", material: "vidrio" },
  { label: "CHATARRA", material: "chatarra" },
  { label: "PLASTICO", material: "plastico" },
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

  const { label, material } = dashboards[currentIndex];

  return (
    <ContentContainer>
      <NavButton onClick={goToPrevious}>
        <ChevronLeft size={28} />
      </NavButton>
      <VentasDashboard material={material} label={label} />
      <NavButton onClick={goToNext}>
        <ChevronRight size={28} />
      </NavButton>
    </ContentContainer>
  );
};

// Styled Components

const ContentContainer = styled.div`
  background-color: transparent;
  border-radius: 3rem;
  border: 2px solid ${theme.colores.azulGris};
  overflow: hidden;
  padding: 5rem 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 80%;
  margin: 4rem 1.5rem 1.5rem 0;
  position: relative;

  

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 4rem;
    margin: 2rem 0 1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0;
  }
`;

const NavButton = styled.button`
  box-shadow: 0 4px 6px ${({ theme }) => theme.colores.azulGris};
  padding: 0.5rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colores.blancoHumo};
  color: ${theme.colores.azulGris};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    bottom: 10px;

    &:first-of-type {
      left: 45%;
      transform: translateX(-110%);
    }

    &:last-of-type {
      right: 45%;
      transform: translateX(110%);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    padding: 0.2rem;
  }
`;
