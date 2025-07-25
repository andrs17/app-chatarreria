import db from "../db/connection.js";

// ventasArchivoController.js

export const registrarVentasArchivo = async (req, res) => {
  try {
    const {
      cliente_id,
      empleado_id,
      cantidad_kg,
      precio_unitario,
      fecha_venta,
    } = req.body;
    if (!cantidad_kg || !precio_unitario || !fecha_venta) {
      return res.status(400).json({ error: "Datos incompletos." });
    }
    const [resultado] = await db.execute(
      "INSERT INTO ventas_archivo (cliente_id, empleado_id, cantidad_kg, precio_unitario, fecha_venta) VALUES (?, ?, ?, ?, ?)",
      [
        cliente_id || null,
        empleado_id || null,
        cantidad_kg,
        precio_unitario,
        fecha_venta,
      ]
    );

    res.json({
      id: resultado.insertId,
      message: "Venta de archivo registrada correctamente",
    });
  } catch (error) {
    console.error("Error al registrar venta de archivo:", error);
    res.status(500).json({ message: "Error al registrar venta de archivo" });
  }
};
