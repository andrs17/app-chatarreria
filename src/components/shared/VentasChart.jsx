import { useEffect, useState } from "react";
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
import { obtenerRangoPorDefecto } from "@/utils/formatoFecha.js";

export const VentasChart = ({
  material,
  ventas,
  rango,
  setRango,
  rangoInicial,
  conTipo = true, 
}) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (ventas.length === 0 && rango.startDate && rango.endDate) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setRango(obtenerRangoPorDefecto());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [ventas, rango, setRango]);

  const normalize = (str) =>
    str
      ?.trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s_]/g, "");

  const coloresMap = {
    pet: theme.colores.azulGris,
    pasta: theme.colores.verdeReciclaje,
    aluminio: theme.colores.azulSuave,
    carton: theme.colores.verdeReciclaje,
    vidrio: theme.colores.amarillo,
    chatarra: theme.colores.azulGris,
    cobre: theme.colores.verdeReciclaje
  };

  const getColor = (material) =>
    coloresMap[normalize(material)] || theme.colores.amarillo;

  const dataKeyTipo = conTipo ? `tipo_${material}` : "material";
  // si tiene tipos, mapea cada venta a su tipo y kg
  const data = conTipo
    ? ventas.map((v) => ({
        [`tipo_${material}`]: v[`tipo_${material}`] || material.toUpperCase(),
        total_kg: parseFloat(v.total_kg),
      }))
    : [
        {
          [dataKeyTipo]: material.toUpperCase(),
          total_kg: ventas.reduce((acc, v) => acc + parseFloat(v.total_kg), 0),
        },
      ];

  return (
    <ChartCard>
      <h2>
        {conTipo
          ? `Total por tipo de ${material.toUpperCase()}`
          : `Total de ${material.toUpperCase()}`}
      </h2>
      <RangoFechas onChange={setRango} />

      {showAlert && <p>No hay datos disponibles para el rango seleccionado.</p>}
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={310}>
          <BarChart data={data}>
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
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor( material)}
                />
              ))}
              <LabelList
              fontSize={12}
                dataKey="total_kg"
                position="top"
                formatter={(value) => `${value} kg`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
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
  padding: 0.5rem;
  margin-top: 4rem;
  width: 95%;
`;
