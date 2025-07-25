import express from "express";
import { registrarVentaCarton } from "../controllers/ventaCartonController.js";

const router = express.Router();

router.post("/", registrarVentaCarton);

export default router;
