import express from "express";
import { registrarVentaPasta } from "../controllers/ventasPastaController.js";

const router = express.Router();

router.post("/", registrarVentaPasta);

// router.get('/', obtenerVentasPasta); // opcional si quieres listar

export default router;
