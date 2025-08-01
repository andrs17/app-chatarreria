import styled from "styled-components";
import { theme } from "../../styles/theme.js";

export const TooltipBox = styled.div`
  background-color: ${theme.colores.blancoHumo};
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  color: ${theme.colores.azulGris};
  box-shadow: 0 2px 6px ${theme.colores.azulGris};;
`;

const formatoMoneda = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currencyDisplay: "symbol",
  }).format(valor);

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    const { total_kg, precio_unitario } = payload[0].payload;

    const total = total_kg * precio_unitario;

    
    return (
      <TooltipBox>
        <p>
          Fecha:{" "}
          {new Date(label).toLocaleDateString("es-CO", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p>Cantidad: {total_kg} kg</p>
        <p>Precio/kg: ${formatoMoneda(precio_unitario)}</p>
        <p>Total: ${formatoMoneda(total)}</p>
      </TooltipBox>
    );
  }
  return null;
};
