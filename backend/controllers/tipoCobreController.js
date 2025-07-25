import db from '../db/connection.js';

export const obtenerTiposCobre = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT id, nombre FROM tipos_cobre");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener tipos de cobre:", error);
    res.status(500).json({ error: "Error al obtener tipos de cobre" });
  }
};