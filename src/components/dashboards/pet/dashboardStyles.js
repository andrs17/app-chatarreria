// src/styles/dashboardStyles.js
import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  margin-top: 2.5rem;
  padding: 3rem;
  width: 90%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colores.azulGris};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
    max-width: 100%;
    justify-items: center;
    align-content: center;
    padding: 1.5rem 0.5rem;
  }
`;

export const ChartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 1rem;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colores.azulGris};
    text-align: center;
    font-size: 1rem;
    width: 70%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0;
  }
`;

