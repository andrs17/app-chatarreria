import express from "express";
import { obtenerTiposPlastico } from "../controllers/tipoPlasticoController.js";

const router = express.Router();

router.get("/", obtenerTiposPlastico);

export default router;
