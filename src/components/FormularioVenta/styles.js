import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 3.4rem 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 16px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 700px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colores.azulGris};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

/*** ESTILOS PARA LOS BOTONES CRUD CLIENTE **/

export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  gap: 1rem;
  margin-left: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    gap: 0.2rem;
  }
`;

export const IconButton = styled.button`
  background: none;
  padding: 0.1rem;
  border: none;
  color: ${({ $color, theme }) => $color || theme.colores.azulGris};
  font-size: 2.2rem;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.colores.azulSuave};
`;

export const Select = styled.select`
  width: 50%;
  padding: 0.6rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colores.azulSuave};
  color: ${({ theme }) => theme.colores.azulSuave};
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem; /* espacio entre los inputs */
  align-items: flex-end;
  margin: 30px 0 20px 0;
  padding: 5px;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 5rem;
  padding: 0.6rem 0.5rem;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colores.azulSuave};
  border: 1px solid ${({ theme }) => theme.colores.azulSuave};

  /* Eliminar flechas en Chrome, Safari, Edge, Opera */
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Eliminar flechas en Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &.inputFecha {
    width: 8rem;
  }
`;

export const Button = styled.button`
  padding: 12px;
  margin-left: 25%;
  width: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colores.azulSuave};
  color: ${({ theme }) => theme.colores.blancoHumo};
  font-size: 16px;
  border-radius: 8px;
  transition: 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colores.amarillo};;
    color: ${({ theme }) => theme.colores.azulSuave};
  }
`;
