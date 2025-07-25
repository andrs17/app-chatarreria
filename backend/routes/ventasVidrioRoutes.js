import express from 'express';
import { registrarVentaVidrio } from '../controllers/ventasVidrioController.js';

const router = express.Router();


router.post("/",registrarVentaVidrio);

export default router;