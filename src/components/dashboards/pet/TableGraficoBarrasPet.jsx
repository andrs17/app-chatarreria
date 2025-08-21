import styled from "styled-components";
import { formatoMoneda } from "@/utils/formatoMoneda.js";
import { formatoFecha, obtenerRangoPorDefecto } from "@/utils/formatoFecha.js";
import { theme } from "@/styles/theme";

export const TableGraficoBarrasPet = ({ ventas, rango }) => {
  const rangoFinal =
    rango.startDate && rango.endDate ? rango : obtenerRangoPorDefecto(ventas);
  return (
    <TableWrapper>
      <h3>
          {formatoFecha(rangoFinal.startDate)} al{" "}
          {formatoFecha(rangoFinal.endDate)}
        
      </h3>
      <table>
        <thead>
          <tr>
            <th>Tipo de PET</th>
            <th>Cantidad (kg)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => {
            return (
              <tr key={index}>
                <td>{venta.tipo_pet}</td>
                <td>{formatoMoneda(venta.total_kg)}</td>
                <td>{formatoMoneda(venta.total)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 4rem;
  overflow-x: auto;
  width: 60%;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colores.verdeReciclaje};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.blancoHumo};
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colores.azulGris};
  }
  h3 {
    width: 90%;
    color: ${({ theme }) => theme.colores.verdeReciclaje};
    text-align: center;
    margin-bottom: 1rem;

  }
  th {
    padding: 0.75rem;
    text-align: left;
    color: ${({ theme }) => theme.colores.blancoHumo};
    border: 2px solid ${({ theme }) => theme.colores.azulGris};
  }
  td {
    padding: 0.75rem;
    text-align: left;
    border: 2px solid ${({ theme }) => theme.colores.azulGris};
  }

  thead {
    background-color: ${({ theme }) => theme.colores.verdeReciclaje};
    color: ${({ theme }) => theme.colores.blancoHumo};
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colores.grisClaro};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colores.azulSuave};
    color: ${({ theme }) => theme.colores.blancoHumo};
    transition: 0.2s ease-in-out;
  }
`;
