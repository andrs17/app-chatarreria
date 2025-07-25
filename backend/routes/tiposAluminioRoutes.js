import express from "express";
import { obtenerTiposAluminio } from "../controllers/tipoAluminioController.js ";

const router = express.Router();

router.get("/", obtenerTiposAluminio);

export default router;
