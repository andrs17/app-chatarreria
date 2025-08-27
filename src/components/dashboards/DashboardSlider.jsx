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
      <TitleMaterial>{dashboards[currentIndex].label}</TitleMaterial>
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
  box-shadow: 0 4px 6px ${({ theme }) => theme.colores.azulGris};
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 95%;
  margin: 4rem 1.5rem 1.5rem 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-bottom: 4rem;
    margin: 2rem 0 1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    
    gap: 0;
  }
`;

const TitleDashboard = styled.h1`
  padding: 17px;
  border-radius: 10px;
  width: fit-content;
  position: absolute;
  font-size: 1.8rem;
  left: 2.5rem;
  top: 20px;
  color: ${theme.colores.azulGris};
  box-shadow: 0 1px 2px ${({ theme }) => theme.colores.azulGris};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const TitleMaterial = styled.h2`
  box-shadow: 0 1px 2px ${({ theme }) => theme.colores.azulGris};
  width: min-content;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    top: 100px;
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
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
