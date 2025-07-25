// stylesModalVentas.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background:  ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  
  gap: 0.5rem;
  width: max-content;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-top: 1rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-height: 70vh;
`;

export const ModalTitle = styled.h2`
  margin: 1rem;
  width: 80%;
  height: min-content;
  color: ${({ theme }) => theme.colores.azulGris};
  text-align: center;
`;

export const VentaButton = styled.button`
  display: flex;
  align-items: center;
 
  background: ${({ theme }) => theme.colores.azulSuave};;
  color: ${({ theme }) => theme.colores.blancoHumo};
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border: none;
  border-radius: 0.75rem;
  margin: 0.5rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.9s ease;
  transition: transform 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.colores.amarillo};
    color: ${({ theme }) => theme.colores.azulGris};
    transform: scale(1.1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover{
    transform: scale(1.5);
  }
`;
