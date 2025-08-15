import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0.5rem;
  padding: 4rem 1rem 1rem 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
`;

export const Title = styled.h1`
  position: absolute;
  top: 2rem;
  font-size: 2rem;

  
  color: ${({ theme }) => theme.colores.azulGris};
  border-bottom: 2px solid black;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  max-height: max-content;
  border-radius: 15px;
  padding: 0.5rem;
`;

export const TitleEmpleados = styled.h6`
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colores.azulGris};

  border-radius: 12px;
  border: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.4rem 0.7rem;
  }
`;

export const NavButton = styled(Link).attrs((props) => ({
  as: props.as || Link,
}))`
  background-color: ${({ theme }) => theme.colores.azulSuave};
  color: ${({ theme }) => theme.colores.blancoHumo};
  padding:1.8rem;
  width: 4rem;
  font-weight: bold;
  border-radius: 9px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 0.7rem;
  height: 40px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
    transform: scale(1);
    background-color: ${({ theme }) => theme.colores.amarillo};
    color: ${({ theme }) => theme.colores.azulGris};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3.7rem;
    height: 25px;
  }
`;
