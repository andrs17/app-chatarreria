import express from 'express';
import { 
  registrarVenta, 
  obtenerVentas,
  obtenerResumenVentas,
  obtenerVentasPorFecha
} from '../controllers/ventasController.js';

const router = express.Router();
const material = "plastico";

router.get('/', obtenerVentas(material));
router.get('/resumen', obtenerResumenVentas(material));
router.get('/por-fechas', obtenerVentasPorFecha(material));
router.post('/', registrarVenta(material));

export default router;
