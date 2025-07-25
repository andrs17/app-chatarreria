import { useState } from "react";
import { FaRecycle, FaBox, FaBoxOpen, FaTimes } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContainer,
  ContentWrapper,
  ModalTitle,
  VentaButton,
  CloseButton,
} from "./stylesModalVentas";
import FormularioVenta from "../FormularioVenta/FormularioVenta";
import { FaBottleDroplet } from "react-icons/fa6";

const VentasModal = ({ onClose }) => {
  const [tipoVenta, setTipoVenta] = useState(null);

  // 👇 Configuración para cada tipo de venta
  const ventasConfig = {
    ALUMINIO: {
      icon: <FaRecycle />,
      label: "Aluminio",
      endpoint: "http://localhost:3000/api/tipos-Aluminio",
      campo: "tipo_aluminio_id",
      labelTipo: "Tipo de Aluminio",
    },
    Cobre: {
      icon: <FaRecycle />,
      label: "Cobre",
      endpoint: "http://localhost:3000/api/tipos-cobre",
      campo: "tipo_cobre_id",
      labelTipo: "Tipo de cobre",
    },
    PET: {
      icon: <FaRecycle />,
      label: "PET",
      endpoint: "http://localhost:3000/api/tipos-pet",
      campo: "tipo_pet_id",
      labelTipo: "Tipo de PET",
    },
    PASTA: {
      icon: <FaBox />,
      label: " Pasta",
      endpoint: "http://localhost:3000/api/tipos-pasta",
      campo: "tipo_pasta_id",
      labelTipo: "Tipo de Pasta",
    },
    CARTON: {
      icon: <FaBoxOpen />,
      label: "Cartón",
      endpoint: null,
      campo: null,
      labelTipo: null,
    },
    ARCHIVO: {
      icon: <FaBoxOpen />,
      label: "Archivo",
      endpoint: null,
      campo: null,
      labelTipo: null,
    },
    CHATARRA: {
      icon: <FaRecycle />,
      label: "Chatarra",
      endpoint: null,
      campo: null,
      labelTipo: null,
    },
    ACERO: {
      icon: <FaRecycle />,
      label: "Acero",
      endpoint: null,
      campo: null,
      labelTipo: null,
    },
    PLASTICO: {
      icon: <FaBottleDroplet />,
      label: "Plástico",
      endpoint: "http://localhost:3000/api/tipos-plastico",
      campo: "tipo_plastico_id",
      labelTipo: "Tipo de Plástico",
    },
    VIDRIO: {
      icon: <FaBottleDroplet />,
      label: "Vidrio",
      endpoint: "...",
      campo: "tipo_vidrio_id",
      labelTipo: "Tipo de Vidrio",
    },
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        {tipoVenta === null ? (
          <>
            <ModalTitle>Tipo Venta</ModalTitle>
            <ContentWrapper>
              {Object.entries(ventasConfig).map(([key, config]) => (
                <VentaButton key={key} onClick={() => setTipoVenta(key)}>
                  {config.icon} {config.label}
                </VentaButton>
              ))}
            </ContentWrapper>
          </>
        ) : (
          <FormularioVenta
            tipoVenta={tipoVenta}
            endpointTipos={ventasConfig[tipoVenta].endpoint}
            campoTipo={ventasConfig[tipoVenta].campo}
            labelTipo={ventasConfig[tipoVenta].labelTipo}
            onClose={() => setTipoVenta(null)}
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default VentasModal;
