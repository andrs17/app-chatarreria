import express from 'express';
import { registrarVentasPet, obtenerVentasPET,obtenerResumenVentasPET,obtenerVentasPetPorFecha } from '../controllers/ventasPetController.js';

const router = express.Router();


router.get('/', obtenerVentasPET);
router.get('/resumen', obtenerResumenVentasPET);
router.get('/por-fechas', obtenerVentasPetPorFecha);
router.post('/', registrarVentasPet);

export default router;
