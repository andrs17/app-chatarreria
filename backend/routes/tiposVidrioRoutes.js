import express from "express";
import { obtenerTiposVidrio } from "../controllers/tipoVidrioController.js";

const router = express.Router();

router.get("/", obtenerTiposVidrio);

export default router;
