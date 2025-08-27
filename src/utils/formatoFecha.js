export const formatoFecha = (fecha) => {
  if (!fecha) return "";
  const fechaValida = new Date(fecha);
  if (isNaN(fechaValida.getTime())) return "";

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(fechaValida);
};

/**
 * Calcula el rango completo de fechas basado en las ventas
 * @param {Array} ventas - lista de ventas [{ fecha, ... }]
 * @returns {{ startDate: Date|null, endDate: Date|null }}
 */
export const obtenerRangoPorDefecto = (ventas) => {
  if (!ventas || ventas.length === 0) return { startDate: null, endDate: null };

  const fechas = ventas
    .flatMap((venta) => [
      new Date(venta.fecha_primer_venta),
      new Date(venta.fecha_ultima_venta),
    ])
    .filter((f) => !isNaN(f.getTime())); // quitar inválidas

  if (fechas.length === 0) return { startDate: null, endDate: null };

  const startDate = new Date(Math.min(...fechas));
  const endDate = new Date(Math.max(...fechas));

  return { startDate, endDate };
};
