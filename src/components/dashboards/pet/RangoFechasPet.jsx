import { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarWrapper } from "./graficoPetStyles.js";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { BsCalendar2Date } from "react-icons/bs";

registerLocale("es", es);

export const RangoFechasPet = ({ onChange }) => {
  const [rangoFechas, setRangoFechas] = useState([null, null]);
  const [fechaInicio, fechaFin] = rangoFechas;

  const [hoveringInput, setHoveringInput] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const manejarCambio = (fechas) => {
    setRangoFechas(fechas);
    if (fechas[0] && fechas[1]) {
      onChange({ startDate: fechas[0], endDate: fechas[1] });
    }
  };

  const CustomInput = ({ value, onClick }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      className="custom-date-input"
      onMouseEnter={() => setHoveringInput(true)}
      onMouseLeave={() => setHoveringInput(false)}
    />
  );
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
          placeholderText="Filtrar ventas"
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onCalendarOpen={() => setIsCalendarOpen(true)}
          onCalendarClose={() => setIsCalendarOpen(false)}
          customInput={CustomInput}
        />
        <BsCalendar2Date
          className="icon-calendar"
          style={{
            transform: hoveringInput || isCalendarOpen ? "scale(1.1)" : "scale(1)",
            transition: "all 0.3s ease",
            color: isCalendarOpen ? "#ffcc00" : "#7a8fa6",
            filter: isCalendarOpen ? "drop-shadow(0 0 5px #ffcc00)" : "none",
          }}
        />
      </div>
    </CalendarWrapper>
  );
};
