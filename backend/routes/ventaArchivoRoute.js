import express from "express";
import { registrarVentasArchivo } from "../controllers/ventasArchivoController.js";

const router = express.Router();

router.post("/", registrarVentasArchivo);

export default router;
