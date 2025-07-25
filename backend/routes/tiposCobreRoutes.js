import express from "express";
import { obtenerTiposCobre } from "../controllers/tipoCobreController.js"; 

const router = express.Router();

router.get("/", obtenerTiposCobre);

export default router;