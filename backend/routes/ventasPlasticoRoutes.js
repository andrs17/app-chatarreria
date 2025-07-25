import express from 'express';
import { registrarVentaPlastico } from '../controllers/ventasPlasticoController.js';

const router = express.Router();

router.post('/', registrarVentaPlastico);

export default router;
