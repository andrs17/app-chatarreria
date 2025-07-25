import express from "express";
import { registrarVentasChatarra } from "../controllers/ventasChatarraController.js";

const router = express.Router();

router.post("/", registrarVentasChatarra);

export default router;
