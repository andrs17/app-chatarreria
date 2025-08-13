// src/components/dashboards/DashboardSlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import { VentasPetDashboard } from "./pet/VentasPetDashboard";

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
      <Nav>
        <NavButton onClick={goToPrevious}>
          <ChevronLeft size={28} />
        </NavButton>
        <Title>{dashboards[currentIndex].label}</Title>
        <NavButton onClick={goToNext}>
          <ChevronRight size={28} />
        </NavButton>
      </Nav>
      {dashboards[currentIndex].component}
    </ContentContainer>
  );
};

// Styled Components

const ContentContainer = styled.div`
  background-color: ${({ theme }) => (theme.darkMode ? "#111827" : "#ffffff")};
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 1rem;
  border: 2px solid yellow;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border: 1px solid;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  background-color: red;
`;

const NavButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  background: transparent;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => (theme.darkMode ? "#374151" : "#e5e7eb")};
  }
`;


