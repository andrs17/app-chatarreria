import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { BsCalendar2Date } from "react-icons/bs";
import { CustomDateInput } from "./CustonDateInput";
registerLocale("es", es);

export const RangoFechas = ({ onChange }) => {
  const [rangoFechas, setRangoFechas] = useState([null, null]);
  const [fechaInicio, fechaFin] = rangoFechas;

  const [hoveringInput, setHoveringInput] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const manejarCambio = (fechas) => {
    setRangoFechas(fechas);
    if (fechas[0] && fechas[1]) {
      onChange({ startDate: fechas[0], endDate: fechas[1] });
    }
    if (fechas[0] === null && fechas[1] === null) {
      onChange({ startDate: null, endDate: null });
    }
  };

  return (
    <CalendarWrapper>
      <div className="contenedor-fecha">
        <DatePicker
          locale="es"
          selectsRange
          startDate={fechaInicio}
          endDate={fechaFin}
          onChange={manejarCambio}
          dateFormat="dd/MM/yyyy"
          placeholderText="Filtrar"
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onCalendarOpen={() => setIsCalendarOpen(true)}
          onCalendarClose={() => setIsCalendarOpen(false)}
          customInput={<CustomDateInput />}
        />
        <IconoCalendario $hover={hoveringInput} $isOpen={isCalendarOpen} />
      </div>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  left: 30%;
  margin-bottom: 1.4rem;
  text-align: center;

  

  .contenedor-fecha {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker-wrapper {
    width: 100%;
    position: relative;
    margin-top: 10px;
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 30%;
    left: 5%;
  }
`;



const IconoCalendario = styled(BsCalendar2Date)`
  position: absolute;
  margin: 0.8rem 3rem 0 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${({ $isOpen }) => ($isOpen ? "#ffcc00" : "#7a8fa6")};
  transform: ${({ $hover }) => ($hover ? "scale(1.1)" : "scale(1)")};
  filter: ${({ $isOpen }) =>
    $isOpen ? "drop-shadow(0 0 5px #ffcc00)" : "none"};
`;
