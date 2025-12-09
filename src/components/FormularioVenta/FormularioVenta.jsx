import { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";

import ClienteModal from "./ClienteModal";

// Servicios generales
import { obtenerClientes } from "../../services/clientesService.js";
import { obtenerEmpleados } from "../../services/empleadosService.js";
import { registrarVenta } from "../../services/ventasService.js";

import {
  Form,
  Label,
  Input,
  Select,
  Button,
  Container,
  Title,
  Row,
  Column,
  FieldRow,
  FieldGroup,
  IconButton,
} from "./styles";

const FormularioVenta = ({
  tipoVenta,
  campoTipo,
  labelTipo,
  endpointTipos,
  onClose,
}) => {
  const API = import.meta.env.VITE_API_URL;

  const initialState = {
    cliente_id: "",
    empleado_id: "",
    ...(campoTipo ? { [campoTipo]: "" } : {}),
    cantidad_kg: "",
    precio_unitario: "",
    fecha_venta: "",
  };

  const [venta, setVenta] = useState(initialState);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [tiposMaterial, setTiposMaterial] = useState([]);

  const [mostrarModalCliente, setMostrarModalCliente] = useState(false);
  const [modoModalCliente, setModoModalCliente] = useState("crear");
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  // 🔥 Fetch inicial — universal
  useEffect(() => {
    const fetchData = async () => {
      try {
        // CLIENTES + EMPLEADOS
        const [clientesData, empleadosData] = await Promise.all([
          obtenerClientes(),
          obtenerEmpleados(),
        ]);

        setClientes(clientesData);
        setEmpleados(empleadosData);

        // TIPOS DINÁMICOS
        if (endpointTipos) {
          const url = endpointTipos.startsWith("http")
            ? endpointTipos
            : API + endpointTipos;

          console.log("🌐 URL Fetch tipos:", url);

          const res = await axios.get(url);
          setTiposMaterial(Array.isArray(res.data) ? res.data : []);
        } else {
          setTiposMaterial([]);
        }
      } catch (error) {
        console.error("Error cargando datos del formulario:", error);
      }
    };

    fetchData();
  }, [tipoVenta, campoTipo, endpointTipos]);

  const handleChange = (e) => {
    setVenta({ ...venta, [e.target.name]: e.target.value });
    setMensaje("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { cantidad_kg, precio_unitario } = venta;

    if (parseFloat(cantidad_kg) <= 0 || parseFloat(precio_unitario) <= 0) {
      setError("La cantidad y el precio deben ser mayores a 0.");
      setMensaje("");
      return;
    }

    try {
      await registrarVenta(tipoVenta, venta);

      setVenta(initialState);
      setMensaje("✅ Venta registrada exitosamente.");
      setTimeout(() => setMensaje(""), 3000);

      onClose?.();
    } catch (err) {
      console.error("Error al registrar venta:", err);
      setError("❌ Error al registrar la venta. Intenta nuevamente.");
      setTimeout(() => setError(""), 3000);
    }
  };

  /* ===========================
      CRUD CLIENTES (MODAL)
     =========================== */

  const handleCrearCliente = () => {
    setModoModalCliente("crear");
    setClienteSeleccionado(null);
    setMostrarModalCliente(true);
  };

  const handleEditarCliente = () => {
    const cliente = clientes.find((c) => c.id === parseInt(venta.cliente_id));
    if (!cliente) {
      setError("Selecciona un cliente válido para editar.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setModoModalCliente("editar");
    setClienteSeleccionado(cliente);
    setMostrarModalCliente(true);
  };

  const handleEliminarCliente = () => {
    const cliente = clientes.find((c) => c.id === parseInt(venta.cliente_id));
    if (!cliente) {
      setError("Selecciona un cliente válido para eliminar.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setModoModalCliente("eliminar");
    setClienteSeleccionado(cliente);
    setMostrarModalCliente(true);
  };

  const handleGuardarCliente = async (datos) => {
    try {
      const API = import.meta.env.VITE_API_URL;

      if (modoModalCliente === "crear") {
        await axios.post(`${API}/clientes`, datos);
        setMensaje("Cliente creado exitosamente.");
      } else if (modoModalCliente === "editar") {
        await axios.put(`${API}/clientes/${datos.id}`, datos);
        setMensaje("Cliente actualizado exitosamente.");
      } else if (modoModalCliente === "eliminar") {
        await axios.delete(`${API}/clientes/${datos.id}`);
        setMensaje("Cliente eliminado exitosamente.");
      }

      // Refrescar lista
      const res = await axios.get(`${API}/clientes`);
      setClientes(res.data);

      setMostrarModalCliente(false);
      setVenta((prev) => ({ ...prev, cliente_id: "" }));

      setTimeout(() => setMensaje(""), 3000);
    } catch (error) {
      console.error("Error al guardar cliente:", error);
      setError("Ocurrió un error al guardar el cliente.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleCerrarModalCliente = () => {
    setMostrarModalCliente(false);
    setClienteSeleccionado(null);
    setVenta((prev) => ({ ...prev, cliente_id: "" }));
  };

  return (
    <Container>
      <Title>Registrar Venta de {tipoVenta}</Title>

      {mensaje && (
        <p style={{ color: "green", fontWeight: "bold" }}>{mensaje}</p>
      )}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <Form onSubmit={handleSubmit}>
        {/* CLIENTE */}
        <Label>Cliente</Label>
        <FieldRow>
          <Select
            name="cliente_id"
            value={venta.cliente_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre}
              </option>
            ))}
          </Select>

          <FieldGroup>
            <IconButton
              onClick={handleCrearCliente}
              title="Crear cliente"
              $color={theme.colores.verdeReciclaje}
            >
              <FaPlusCircle />
            </IconButton>
            <IconButton
              onClick={handleEditarCliente}
              title="Editar cliente"
              $color={theme.colores.amarillo}
            >
              <FaEdit />
            </IconButton>
            <IconButton
              onClick={handleEliminarCliente}
              title="Eliminar cliente"
              $color={theme.colores.azulSuave}
            >
              <FaTrashAlt />
            </IconButton>
          </FieldGroup>
        </FieldRow>

        {/* EMPLEADO */}
        <Label>Empleado</Label>
        <Select
          name="empleado_id"
          value={venta.empleado_id}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un empleado</option>
          {empleados.map((empleado) => (
            <option key={empleado.id} value={empleado.id}>
              {empleado.nombre}
            </option>
          ))}
        </Select>

        {/* TIPOS DINÁMICOS */}
        {labelTipo && campoTipo && (
          <>
            <Label>{labelTipo}</Label>
            <Select
              name={campoTipo}
              value={venta[campoTipo] || ""}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un tipo</option>
              {tiposMaterial.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </Select>
          </>
        )}

        <Row>
          <Column>
            <Label>Cantidad (kg)</Label>
            <Input
              name="cantidad_kg"
              type="number"
              min="0"
              step="0.01"
              value={venta.cantidad_kg}
              onChange={handleChange}
              required
            />
          </Column>

          <Column>
            <Label>Precio (Kg)</Label>
            <Input
              name="precio_unitario"
              type="number"
              min="0"
              value={venta.precio_unitario}
              onChange={handleChange}
              required
            />
          </Column>

          <Column>
            <Label>Fecha de Venta</Label>
            <Input
              name="fecha_venta"
              type="date"
              value={venta.fecha_venta}
              onChange={handleChange}
              required
            />
          </Column>
        </Row>

        <Button type="submit">Registrar Venta</Button>
      </Form>

      {mostrarModalCliente && (
        <ClienteModal
          visible={mostrarModalCliente}
          modo={modoModalCliente}
          cliente={clienteSeleccionado}
          onClose={handleCerrarModalCliente}
          onSave={handleGuardarCliente}
        />
      )}
    </Container>
  );
};

export default FormularioVenta;

