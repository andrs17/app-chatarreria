import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colores.azulGris};
  border-bottom: 2px solid black;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  gap: 6rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: max-content;
  border-radius: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5px;
  max-height: max-content;
  border-radius: 15px;
  padding: 1.3rem;
  border: 2px solid ${({ theme }) => theme.colores.verdeReciclaje};
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
  padding: 0.1rem;
  width: 8rem;
  font-weight: bold;
  border-radius: 9px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 0.8rem;
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

export const ImageSection = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colores.azulSuave};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;

    animation: zoom 8s ease-in-out infinite alternate;
  }

  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    aspect-ratio: 5/3;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
  }
`;
