import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  max-width: 100%;
  overflow-x: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colores.azulGris};
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colores.azulGrisOscuro || "#1c2630"};
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1.2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 220px;
    transform: translateX(${({ $abierto }) => ($abierto ? "0" : "-100%")});
    transition: transform 0.3s ease;
    z-index: 1000;
  }
`;
export const MenuIcon = styled.div`
display: none;
padding: 0.5rem;
cursor: pointer;

  position: fixed;  
  top: 1rem;
  left: 1rem;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: block;
  }
`;
export const Overlay = styled.div`
@media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colores.blancoHumo};
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colores.blancoHumo};
  padding-bottom: 1rem;
`;

export const NavButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  color: ${({ theme }) => theme.colores.azulGris};
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colores.blancoHumoHover || "#dfe4e7"};
    transform: translateY(2px);
  }
`;

export const Content = styled.div`
  padding: 1rem;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
`;
