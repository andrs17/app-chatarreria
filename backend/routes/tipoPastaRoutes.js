import express from "express";
import { obtenerTiposPasta } from "../controllers/tipoPastaController.js";

const router = express.Router();

router.get("/", obtenerTiposPasta);

export default router;
