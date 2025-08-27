import { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarWrapper } from "./graficoPetStyles.js";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { IconoCalendario } from "./graficoPetStyles.js";
import { CustomDateInput } from "../../shared/CustonDateInput.jsx";
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
          placeholderText="Filtrar ventas"
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
