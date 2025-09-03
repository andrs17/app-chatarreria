import db from "../db/connection.js";

export const registrarVenta = (material) => async (req, res) => {
  try {
    const {
      cliente_id,
      empleado_id,
      tipo_id, // genérico
      cantidad_kg,
      precio_unitario,
      fecha_venta,
    } = req.body;

    const [resultado] = await db.execute(
      `INSERT INTO ventas_${material} 
      (cliente_id, empleado_id, tipo_${material}_id, cantidad_kg, precio_unitario, fecha_venta) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        cliente_id,
        empleado_id,
        tipo_id,
        cantidad_kg,
        precio_unitario,
        fecha_venta,
      ]
    );

    res.status(201).json({
      mensaje: `Venta de ${material} registrada correctamente`,
      id: resultado.insertId,
    });
  } catch (error) {
    console.error(`Error al registrar venta de ${material}:`, error);
    res.status(500).json({ error: `Error al registrar venta de ${material}` });
  }
};

export const obtenerVentas = (material) => async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT v.id, v.fecha_venta, c.nombre AS cliente, e.nombre AS empleado,
             t.nombre AS tipo, v.cantidad_kg, v.precio_unitario,
             (v.cantidad_kg * v.precio_unitario) AS total
      FROM ventas_${material} v
      JOIN clientes c ON v.cliente_id = c.id
      JOIN empleados e ON v.empleado_id = e.id
      JOIN tipos_${material} t ON v.tipo_${material}_id = t.id
      ORDER BY v.fecha_venta DESC
    `);

    res.status(200).json(rows);
  } catch (error) {
    console.error(`Error al obtener ventas de ${material}:`, error);
    res.status(500).json({ error: `Error interno del servidor` });
  }
};


export const obtenerResumenVentas = (material) => async (req, res) => {
  const { inicio, fin } = req.query;
  let query = `
    SELECT t.nombre AS tipo_${material}, SUM(v.cantidad_kg) AS total_kg,
          CAST(SUM(v.cantidad_kg * v.precio_unitario) AS DECIMAL(10, 2)) AS total,
          MIN(v.fecha_venta) AS fecha_primer_venta,
          MAX(v.fecha_venta) AS fecha_ultima_venta
    FROM ventas_${material} v
    JOIN tipos_${material} t ON v.tipo_${material}_id = t.id
  `;
  const params = [];

  if (inicio && fin) {
    query += ` WHERE v.fecha_venta BETWEEN ? AND ?`;
    params.push(inicio, fin);
  }

  query += ` GROUP BY v.tipo_${material}_id`;

  try {
    const [rows] = await db.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error(`Error al obtener resumen de ventas ${material}:`, error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerVentasPorFecha = (material) => async (req, res) => {
  const { inicio, fin } = req.query;

  if (!inicio || !fin) {
    return res.status(400).json({ error: "Fechas de inicio y fin requeridas" });
  }

  try {
    const [rows] = await db.execute(
      `
      SELECT 
        v.fecha_venta,
        v.cantidad_kg AS total_kg,
        v.precio_unitario
      FROM ventas_${material} v
      WHERE v.fecha_venta BETWEEN ? AND ?
      ORDER BY v.fecha_venta ASC
    `,
      [inicio, fin]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(
      `Error al obtener ventas individuales de ${material}:`,
      error
    );
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
