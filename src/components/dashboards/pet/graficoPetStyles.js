import styled from "styled-components";
import { BsCalendar2Date } from "react-icons/bs";
import { theme } from "../../../styles/theme.js";

export const GraficoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colores.azulSuave};
  width: 100%;
  padding: 0.8rem;
  border-radius: 16px;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.blancoHumo};
  margin-top: 2rem;
`;

export const Titulo = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${theme.colores.azulGris};
  text-align: center;
`;

export const NoDataText = styled.p`
  text-align: center;
  color: ${theme.colores.azulGris};
  font-size: 12rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 30%;
  width: 8rem;
  font-size: 0.8rem;
  margin-bottom: 1.4rem;
  text-align: center;
  background-color: red;

  .contenedor-fecha {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker-wrapper {
    width: 100%;
    position: relative;
    margin-top: 10px;
  }

  .custom-date-input {
    padding: 8px 8px;
    border-radius: 12px;
    border: none;
    font-size: 0.6rem;
    width: 100%;
    height: 2.5rem;
    font-weight: 700;
    text-align: end;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};

    &:hover {
      box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
      transform: scale(1.05);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: flex;
      left: 0;
      margin: 0;
      padding: 0;
      border: 1px solid blue;
  }
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 5rem;
    left: 4.5rem;
    margin: 0;
  }
`;

export const IconoCalendario = styled(BsCalendar2Date)`
  position: absolute;
  margin: 10px 65px 0 0;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${({ $isOpen }) => ($isOpen ? "#ffcc00" : "#7a8fa6")};
  transform: ${({ $hover }) => ($hover ? "scale(1.1)" : "scale(1)")};
  filter: ${({ $isOpen }) =>
    $isOpen ? "drop-shadow(0 0 5px #ffcc00)" : "none"};
`;
