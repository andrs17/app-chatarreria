import db from "../db/connection.js";

export const obtenerTiposPlastico = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT id, nombre FROM tipos_plastico");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener tipos de plástico:", error);
    res.status(500).json({ error: "Error al obtener tipos de plástico" });
  }
};