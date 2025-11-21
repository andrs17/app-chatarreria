import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  justify-content: center;

  position: relative;
  background-color: ${({ theme }) => theme.colores.azulGris};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    padding-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 2rem;
  font-size: 2rem;

  color: ${({ theme }) => theme.colores.blancoHumo};
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
  gap: 0.8rem;
  margin-top: 5rem;
  max-height: max-content;
  width: 7%;
  border-radius: 15px;
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: max-content;
  }
`;

export const NavButton = styled(Link).attrs((props) => ({
  as: props.as || Link,
}))`
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  color: ${({ theme }) => theme.colores.azulGris};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colores.azulGris};
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  border-radius: 9px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 0.7rem;
  height: 4px;
  transition: all 0.15s ease;

  &:hover {
    box-shadow: 0 2px 4px ${({ theme }) => theme.colores.azulGris};
    transform: translateY(2px);
    color: ${({ theme }) => theme.colores.azulGris};
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 1px 2px ${({ theme }) => theme.colores.azulGris};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3.5rem;
  }
`;
