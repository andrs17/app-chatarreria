import express from 'express';
import { registrarVentaCobre } from '../controllers/ventasCobreController.js';

const router = express.Router();

router.post('/', registrarVentaCobre);

export default router;