import db from "../db/connection.js";

export const obtenerTiposVidrio = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT id, nombre FROM tipos_vidrio");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener tipos de vidrio:", error);
    res.status(500).json({ error: "Error al obtener tipos de vidrios" });
  }
};
