import styled from "styled-components";
import { theme } from "../../../styles/theme.js";

export const GraficoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colores.azulSuave};
  width: 50%;
  padding: 0.8rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

export const Titulo = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${theme.colores.blancoHumo};
  text-align: center;
`;

export const NoDataText = styled.p`
  text-align: center;
  color: ${theme.colores.blancoHumo};
  font-size: 1rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 4rem;
  width: 8rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${theme.colores.azulGris};

  .contenedor-fecha {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker-wrapper {
    width: 100%;
    cursor: pointer;
    position: relative;
    margin-top: 10px;
  }

  .custom-date-input {
    padding: 8px 8px;
    border-radius: 12px;
    border: none;
    font-size: 0.8rem;
    width: 7rem;
    height: 2.5rem;
    text-align: end;
    transition: all 0.3s ease;
  }

  .icon-calendar {
    position: absolute;
    margin: 20px 65px 0 0;
    color: ${theme.colores.amarillo};
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
