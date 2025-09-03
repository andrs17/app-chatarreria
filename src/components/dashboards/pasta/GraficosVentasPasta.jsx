import styled from "styled-components";
import { theme } from "@/styles/theme.js";
import {
  BarChart,
  Bar,
  XAxis,
  LabelList,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { RangoFechasPet } from "./RangoFechasPet.jsx";

export const VentasPetChart = ({ ventas, rango, setRango }) => {
  const normalize = (str) =>
    str
      ?.trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s_]/g, "");

  const coloresMap = {
    pettransparente: theme.colores.azulSuave,
    petcolor: theme.colores.verdeReciclaje,
    petmalta: theme.colores.azulGris,
    petaceite: theme.colores.amarillo,
  };

  const getColor = (tipo) => {
    const key = normalize(tipo);

    return coloresMap[key] || theme.colores.amarillo;
  };

  return (
    <ChartCard>
      <h2>Total por tipo de PET</h2>
      <RangoFechasPet onChange={setRango} value={rango} />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ventas}>
          <XAxis
            dataKey="tipo_pet"
            angle={-20}
            textAnchor="start"
            interval={0}
            fontSize={11}
            dx={-40}
            dy={20}
          />
          <Bar dataKey="total_kg" barSize={35} radius={[10, 10, 0, 0]}>
            {ventas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.tipo_pet)} />
            ))}
            <LabelList
              dataKey="total_kg"
              position="top"
              formatter={(value) => `${value} kg`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const ChartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colores.blancoHumo};
  border-radius: 1rem;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;

  border: 2px solid red;

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colores.azulGris};
    text-align: center;
    font-size: 1rem;
    width: 70%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0;
  }
`;