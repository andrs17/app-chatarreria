import express from 'express';
import { obtenerTiposPet } from '../controllers/tipoPetController.js';
const router = express.Router();

router.get('/', obtenerTiposPet);

export default router;
