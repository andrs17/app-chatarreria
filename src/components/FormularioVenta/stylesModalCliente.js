// src/components/modalStyles.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $show }) => ($show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colores.blancoHumo};
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
    max-width: 90%;
  }
`;

export const ModalHeader = styled.h2`
  margin-bottom: 1rem;
  color:  ${({ theme }) => theme.colores.azulGris};
`;

export const ModalBody = styled.div`
  margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color:  ${({ theme }) => theme.colores.azulSuave};
`;

export const Input = styled.input`
  padding: 0.6rem;
  border-radius: 5px;
  border: 1px solid  ${({ theme }) => theme.colores.azulGris};
  font-size: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid  ${({ theme }) => theme.colores.azulGris};
  border-radius: 8px;
  color:  ${({ theme }) => theme.colores.azulSuave};
`;

export const Button = styled.button`
  background-color: ${({ $cancel, theme }) =>
    $cancel ? "#ccc" : theme.colores.verdeReciclaje};
  color:  ${({ theme }) => theme.colores.azulGris};
  padding: 0.7rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colores.azulSuave};
  }
`;

export const TextoConfirmacion = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colores.azulSuave};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colores.azulGris}; /* rojo */
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;

  &:hover{
    transform: scale(1.1);
  }
`;
