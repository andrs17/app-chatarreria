import db from "../db/connection.js";

export const registrarVentasAcero = async (req, res) => {
  const { cliente_id, empleado_id, cantidad_kg, precio_unitario, fecha_venta } =
    req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO ventas_acero (cliente_id, empleado_id, cantidad_kg, precio_unitario, fecha_venta) VALUES (?, ?, ?, ?, ?)",
      [cliente_id, empleado_id, cantidad_kg, precio_unitario, fecha_venta]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error("Error al registrar venta de acero:", error);
    res.status(500).json({ error: "Error al registrar venta de acero" });
  }
};

