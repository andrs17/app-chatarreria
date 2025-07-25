import express from 'express';
import { registrarVentaAluminio } from '../controllers/ventasAluminioController.js';

const router = express.Router();

router.post('/', registrarVentaAluminio);

export default router;
