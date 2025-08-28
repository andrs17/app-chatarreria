import styled from "styled-components";
import { theme } from "@/styles/theme.js";

export const GraficoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colores.azulSuave};
  width: 100%;
  padding: 0.8rem;
  border-radius: 16px;
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




