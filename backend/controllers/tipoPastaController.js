import db from '../db/connection.js';

export const obtenerTiposPasta = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT id, nombre FROM tipos_pasta");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener tipos de pasta:", error);
    res.status(500).json({ error: "Error al obtener tipos de pasta" });
  }
};
