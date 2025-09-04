// src/components/dashboards/shared/VentasChart.jsx
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
import { RangoFechas } from "./RangoFechas.jsx";

export const VentasChart = ({
  material,
  ventas,
  rango,
  setRango,
}) => {
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
    // Se pueden agregar colores para pasta u otros materiales
  };

  const getColor = (tipo) =>
    coloresMap[normalize(tipo)] || theme.colores.amarillo;

  const dataKeyTipo = `tipo_${material}`;
  

  return (
    <ChartCard>
      <h2>Total por tipo de {material.toUpperCase()}</h2>
      <RangoFechas onChange={setRango} />

      {ventas.length === 0 ? (
        <p>No hay datos disponibles para el rango seleccionado.</p>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ventas}>
              <XAxis
                dataKey={dataKeyTipo}
                angle={-20}
                textAnchor="start"
                interval={0}
                fontSize={11}
                dx={-40}
                dy={20}
              />
              <Bar dataKey="total_kg" barSize={35} radius={[10, 10, 0, 0]}>
                {ventas.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getColor(entry[dataKeyTipo])}
                  />
                ))}
                <LabelList
                  dataKey="total_kg"
                  position="top"
                  formatter={(value) => `${value} kg`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
        </>
      )}
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
  border: 1px solid red;
`;
