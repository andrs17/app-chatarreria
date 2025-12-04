import express from "express";
import {
  registrarVenta,
  obtenerVentas,
  obtenerResumenVentas,
  obtenerVentasPorFecha,
} from "../controllers/ventasController.js";

const router = express.Router();
const material = "chatarra";

router.get("/", obtenerVentas(material, false));
router.get("/resumen", obtenerResumenVentas(material, false));
router.get("/por-fechas", obtenerVentasPorFecha(material));
router.post("/", registrarVenta(material, false));

export default router;
