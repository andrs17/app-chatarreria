import db from "../db/connection.js";

export const registrarVentasPet = async (req, res) => {
  console.log(req.body);
  try {
    const {
      cliente_id,
      empleado_id,
      tipo_pet_id,
      cantidad_kg,
      precio_unitario,
      fecha_venta,
    } = req.body;

    const [result] = await db.execute(
      `
      INSERT INTO ventas_pet (cliente_id, empleado_id, tipo_pet_id, cantidad_kg, precio_unitario, fecha_venta)
      VALUES (?, ?, ?, ?, ?,?)
    `,
      [
        cliente_id,
        empleado_id,
        tipo_pet_id,
        cantidad_kg,
        precio_unitario,
        fecha_venta,
      ]
    );

    res.status(201).json({
      message: "Venta registrada exitosamente",
      ventaId: result.insertId,
    });
  } catch (error) {
    console.error("Error al registrar la venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerVentasPET = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT v.id, v.fecha_venta, c.nombre AS cliente, e.nombre AS empleado,
             t.nombre AS tipo, v.cantidad_kg, v.precio_unitario
      FROM ventas_pet v
      JOIN clientes c ON v.cliente_id = c.id
      JOIN empleados e ON v.empleado_id = e.id
      JOIN tipos_pet t ON v.tipo_pet_id = t.id
      ORDER BY v.fecha_venta DESC
    `);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener las ventas de PET:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerResumenVentasPET = async (req, res) => {
  const { inicio, fin } = req.query;

  let query = `
    SELECT tp.nombre AS tipo_pet, SUM(vp.cantidad_kg) AS total_kg
    FROM ventas_pet vp
    JOIN tipos_pet tp ON vp.tipo_pet_id = tp.id
  `;
  const params = [];

  if (inicio && fin) {
    query += ` WHERE vp.fecha_venta BETWEEN ? AND ?`;
    params.push(inicio, fin);
  }

  query += ` GROUP BY vp.tipo_pet_id`;

  try {
    const [rows] = await db.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener resumen de ventas PET:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerVentasPetPorFecha = async (req, res) => {
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
      FROM ventas_pet v
      WHERE v.fecha_venta BETWEEN ? AND ?
      ORDER BY v.fecha_venta ASC
    `,
      [inicio, fin]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener ventas individuales:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
