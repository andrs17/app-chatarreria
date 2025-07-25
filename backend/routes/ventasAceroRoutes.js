import express from 'express';
import { registrarVentasAcero } from '../controllers/ventasAceroController.js';

const router = express.Router();

router.post('/', registrarVentasAcero);

export default router;