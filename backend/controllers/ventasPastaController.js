import db from "../db/connection.js";

export const registrarVentaPasta = async (req, res) => {
  try {
    const {
      cliente_id,
      empleado_id,
      tipo_pasta_id,
      cantidad_kg,
      precio_unitario,
      fecha_venta,
    } = req.body;

    const [resultado] = await db.execute(
      "INSERT INTO ventas_pasta (cliente_id, empleado_id, tipo_pasta_id, cantidad_kg, precio_unitario, fecha_venta) VALUES (?, ?, ?, ?, ?, ?)",
      [
        cliente_id,
        empleado_id,
        tipo_pasta_id,
        cantidad_kg,
        precio_unitario,
        fecha_venta,
      ]
    );

    res.status(201).json({
      mensaje: "Venta de pasta registrada correctamente",
      id: resultado.insertId,
    });
  } catch (error) {
    console.error("Error al registrar venta de pasta:", error);
    res.status(500).json({ error: "Error al registrar venta de pasta" });
  }
};
