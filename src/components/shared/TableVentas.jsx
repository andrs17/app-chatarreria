// src/components/tables/VentasTable.jsx
import styled from "styled-components";
import { formatoMoneda } from "@/utils/formatoMoneda.js";
import { formatoFecha, obtenerRangoPorDefecto } from "@/utils/formatoFecha.js";

export const TableVentas = ({ ventas = [], rango, headers = [], dataKeyTipo }) => {
  const rangoFinal =
    rango?.startDate && rango?.endDate ? rango : obtenerRangoPorDefecto(ventas);

  
  return (
    <TableWrapper>
      <h3>
        {formatoFecha(rangoFinal?.startDate)} al {formatoFecha(rangoFinal?.endDate)}
      </h3>
      <table>
        <thead>
          <tr>
            {headers.length > 0 ? (
              headers.map((header, index) => <th key={index}>{header}</th>)
            ) : (
              <>
                <th>Tipo</th>
                <th>Cantidad (kg)</th>
                <th>Total</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {ventas.length > 0 ? (
            ventas.map((venta, index) => (
              <tr key={index}>
                <td>{venta[dataKeyTipo]}</td>
                <td>{formatoMoneda(venta.total_kg)}</td>
                <td>{formatoMoneda(venta.total)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </TableWrapper>
  );
};



// Se reutiliza el mismo estilo
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 3.5rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 85%;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 30px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colores.azulGris};

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

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-left: 0;
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    width: 100%;

    table{
      font-size: 0.7rem;
      
    }
  }
`;
