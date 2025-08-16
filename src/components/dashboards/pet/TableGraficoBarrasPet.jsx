import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const TableGraficoBarrasPet = ({ ventas }) => {
  console.log(ventas)
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Tipo de PET</th>
            <th>Cantidad (kg)</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => {
            const precioUnitario = venta.precio_unitario || 0; // puedes traerlo de backend
            const total = venta.total_kg * precioUnitario;

            return (
              <tr key={index}>
                <td>{venta.tipo_pet}</td>
                <td>{venta.total_kg}</td>
                <td>${precioUnitario.toFixed(2)}</td>
                <td>${total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  margin-left: 4rem;
  overflow-x: auto;
  width: 60%;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colores.azulGris};
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
