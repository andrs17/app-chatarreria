// src/components/ModalCrearCliente.jsx
// ClienteModal.jsx
import  { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  ModalContainer,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Select,
  Button,
  TextoConfirmacion,
  CloseButton,
} from "./stylesModalCliente";

const ClienteModal = ({ modo, cliente, onClose, onSave}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    tipo_cliente: "natural",
  });

  useEffect(() => {
    if ((modo === "editar" || modo === "eliminar") && cliente) {
      setFormData({
        nombre: cliente.nombre || "",
        contacto: cliente.contacto || "",
        tipo_cliente: cliente.tipo_cliente || "natural",
      });
    } else {
      // Para modo crear
      setFormData({
        nombre: "",
        contacto: "",
        tipo_cliente: "natural",
      });
    }
  }, [cliente, modo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, contacto, tipo_cliente } = formData;

    if (!nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    if (!contacto.trim()) {
      alert("El contacto es obligatorio.");
      return;
    }

    if (!tipo_cliente) {
      alert("Selecciona un tipo de cliente.");
      return;
    }

    onSave({ ...cliente, ...formData });
  };

  const esEliminar = modo === "eliminar";

  return (
    <ModalOverlay $show={true}>
      <ModalContainer>
        <CloseButton onClick={onClose} title="Cerrar modal">
          <FaTimes />
        </CloseButton>
        <ModalHeader>
          {modo === "crear" && "Crear Cliente"}
          {modo === "editar" && "Editar Cliente"}
          {modo === "eliminar" && "Eliminar Cliente"}
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <ModalBody>
            {esEliminar ? (
              <TextoConfirmacion>
                ¿Estás seguro de que deseas eliminar al cliente{" "}
                <strong>{cliente?.nombre}</strong>?
              </TextoConfirmacion>
            ) : (
              <>
                <Label>Nombre</Label>
                <Input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />

                <Label>Contacto</Label>
                <Input
                  name="contacto"
                  value={formData.contacto}
                  onChange={handleChange}
                />

                <Label>Tipo de Cliente</Label>
                <Select
                  name="tipo_cliente"
                  value={formData.tipo_cliente}
                  onChange={handleChange}
                >
                  <option value="natural">Persona Natural</option>
                  <option value="empresa">Empresa</option>
                </Select>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button type="submit">
              {modo === "crear" && "Guardar"}
              {modo === "editar" && "Actualizar"}
              {modo === "eliminar" && "Eliminar"}
            </Button>
            <Button type="button" onClick={onClose} $cancel>
              Cancelar
            </Button>
          </ModalFooter>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ClienteModal;
