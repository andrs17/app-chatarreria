// src/styles/dashboardStyles.js
import styled from "styled-components";

export const DashboardWrapper = styled.div`


  padding: 1.5rem;
  width: 100%;
  h1{
    color: ${({theme}) => theme.colores.verdeReciclaje};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
    padding: 0;

    h1{
      font-size: 1.5rem;
    }
  }
`;

export const ChartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 1rem;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 45%;

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

export const FiltrosFecha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const BotonFiltro = styled.button`
  background-color: #000000;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
    

  &:hover {
    background-color: #276749;
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

