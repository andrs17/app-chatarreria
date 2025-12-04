import { Router } from "express";
import  pool from "../db/connection.js";

const router = Router();

router.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    res.json({ ok: true, result: rows[0].result });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

export default router;
