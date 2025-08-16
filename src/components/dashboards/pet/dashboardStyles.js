// src/styles/dashboardStyles.js
import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  padding: 3rem;
  width: 90%;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colores.azulGris};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};

  border: 1px solid red;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;

   
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
    padding: 0.5rem;
  }
`;





export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: auto;
  }

  input {
    padding: 0.4rem 0.7rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
`;
