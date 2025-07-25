import { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import ClienteModal from "./ClienteModal";
import { obtenerClientes } from "../../services/clientesService.js";
import { obtenerEmpleados } from "../../services/empleadosService.js";
import { obtenerTiposPasta } from "../../services/tipoPastaService.js";
import { obtenerTiposPet } from "../../services/tipoPetService.js";
import { obtenerTiposVidrio } from "../../services/tipoVidrioService.js";
import { registrarVenta } from "../../services/ventasService.js";
import { obtenerTiposPlastico } from "../../services/tipoPlasticoServices.js";
import { obtenerTiposAluminio } from "../../services/tipoAluminioService.js";
import { obtenerTiposCobre } from "../../services/tipoCobreService.js";

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

const FormularioVenta = ({ tipoVenta, campoTipo, labelTipo, onClose }) => {
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

  // Fetch dinámico al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientesData, empleadosData] = await Promise.all([
          obtenerClientes(),
          obtenerEmpleados(),
        ]);

        setClientes(clientesData);
        setEmpleados(empleadosData);

        if (campoTipo && tipoVenta) {
          let tiposData = [];
          switch (tipoVenta) {
            case "Cobre":
              tiposData = await obtenerTiposCobre();
              break;
            case "ALUMINIO":
              tiposData = await obtenerTiposAluminio();
              break;
            case "PASTA":
              tiposData = await obtenerTiposPasta();
              break;
            case "PET":
              tiposData = await obtenerTiposPet();
              break;
            case "VIDRIO":
              tiposData = await obtenerTiposVidrio();
              break;
            case "PLASTICO":
              tiposData = await obtenerTiposPlastico();
              break;
            default:
              tiposData = [];
          }
          setTiposMaterial(Array.isArray(tiposData) ? tiposData : []);
        } else {
          setTiposMaterial([]);
        }
      } catch (error) {
        console.error("Error cargando datos del formulario:", error);
      }
    };

    fetchData();
  }, [tipoVenta, campoTipo]);

  const handleChange = (e) => {
    setVenta({ ...venta, [e.target.name]: e.target.value });
    setMensaje(""); // Limpiar mensaje al cambiar campo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: valores numéricos deben ser > 0
    const { cantidad_kg, precio_unitario } = venta;
    if (parseFloat(cantidad_kg) <= 0 || parseFloat(precio_unitario) <= 0) {
      setError("La cantidad debe ser mayor  a 0.");
      setMensaje("");
      return;
    }

    try {
      await registrarVenta(tipoVenta, venta); // Esperamos la respuesta del backend
      setVenta(initialState); // Limpiar campos
      setMensaje("✅ Venta registrada exitosamente.");
      setTimeout(() => setMensaje(""), 3000);
      onClose?.();
    } catch (err) {
      setError("❌ Error al registrar la venta. Intenta nuevamente.");
      setMensaje("");
      console.error("Error en el envío:", err);
      setTimeout(() => setError(""), 3000);
    }
  };

  /**FUNCIONES PARA CREAR, EDITAR Y ELINAR CLIENTE */

  const handleCrearCliente = () => {
    setModoModalCliente("crear");
    setClienteSeleccionado(null);
    setMostrarModalCliente(true);
  };

  // EDITAR

  const handleEditarCliente = () => {
    const cliente = clientes.find((c) => c.id === parseInt(venta.cliente_id));
    if (cliente) {
      console.log("Cliente para editar:", cliente);
      setModoModalCliente("editar");
      setClienteSeleccionado(cliente);
      setMostrarModalCliente(true);
    } else {
      setError("Selecciona un cliente válido para editar.");
      setTimeout(() => setError(""), 3000);
    }
  };

  /** FUNCION PARA ELIMINAR CLIENTE */

  const handleEliminarCliente = () => {
    const cliente = clientes.find((c) => c.id === parseInt(venta.cliente_id));
    if (cliente) {
      setModoModalCliente("eliminar");
      setClienteSeleccionado(cliente);
      setMostrarModalCliente(true);
    } else {
      setError("Selecciona un cliente válido para eliminar.");
      setTimeout(() => setError(""), 3000);
    }
  };

  /** FUNCION PARA GUARDAR CAMBIOS DESDE EL MODAL */

  const handleGuardarCliente = async (datos) => {
    try {
      if (modoModalCliente === "crear") {
        await axios.post("http://localhost:3000/api/clientes", datos);
        setMensaje("Cliente creado exitosamente.");
      } else if (modoModalCliente === "editar") {
        await axios.put(
          `http://localhost:3000/api/clientes/${datos.id}`,
          datos
        );
        setMensaje("Cliente actualizado exitosamente.");
      } else if (modoModalCliente === "eliminar") {
        await axios.delete(`http://localhost:3000/api/clientes/${datos.id}`);
        setMensaje("Cliente eliminado exitosamente.");
      }

      // Actualizar lista de clientes
      const res = await axios.get("http://localhost:3000/api/clientes");
      setClientes(res.data);

      console.log("enviando datos a actualizar", datos);
      setMostrarModalCliente(false);
      setVenta((prev) => ({ ...prev, cliente_id: "" })); // 👈 Limpiar select
      setClienteSeleccionado(null);

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
    setVenta((prev) => ({ ...prev, cliente_id: "" })); // 👈 Limpiar select
  };

  return (
    <Container>
      <Title>Registrar Venta de {tipoVenta}</Title>

      {mensaje && (
        <p style={{ color: "green", fontWeight: "bold" }}>{mensaje}</p>
      )}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <Form onSubmit={handleSubmit}>
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

        {labelTipo && campoTipo && (
          <>
            <Label>{labelTipo}</Label>
            <Select
              name={campoTipo}
              value={campoTipo ? venta[campoTipo] || "" : ""}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un tipo</option>
              {Array.isArray(tiposMaterial) &&
                tiposMaterial.map((tipo) => (
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
              className="inputFecha"
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
