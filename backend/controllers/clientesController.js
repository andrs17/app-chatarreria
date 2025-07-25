import db from "../db/connection.js";

export const obtenerClientes = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, nombre, contacto, tipo_cliente FROM clientes"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

/** FUNCION PARA INSERTAR DATOS DEL CLIENTE */

export const crearCliente = async (req, res) => {
  const { nombre, contacto, tipo_cliente } = req.body;
  try {
    const [resultado] = await db.query(
      "INSERT INTO clientes (nombre, contacto, tipo_cliente) VALUES (?, ?, ?)",
      [nombre, contacto, tipo_cliente]
    );
    res
      .status(201)
      .json({ id: resultado.insertId, nombre, contacto, tipo_cliente });
  } catch (error) {
    console.error("Error al crear cliente:", error);
    res.status(500).json({ error: "Error al crear cliente" });
  }
};

/** FUNCION PARA EDITAR DATOS DEL CLIENTE */

export const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, contacto, tipo_cliente } = req.body;

  try {
    const [resultado] = await db.query(
      "UPDATE clientes SET nombre = ?, contacto = ?, tipo_cliente = ? WHERE id = ?",
      [nombre, contacto, tipo_cliente, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }

    res.json({ mensaje: "Cliente actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    res.status(500).json({ mensaje: "Error al actualizar el cliente" });
  }
};

/** FUNCION PARA EDITAR DATOS DEL CLIENTE */

export const eliminarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    // Verifica si existe
    const [existe] = await db.query("SELECT id FROM clientes WHERE id = ?", [
      id,
    ]);
    if (existe.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await db.query("DELETE FROM clientes WHERE id = ?", [id]);
    res.status(200).json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res
      .status(500)
      .json({ message: "Error del servidor al eliminar el cliente" });
  }
};
