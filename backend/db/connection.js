// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const poolConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
  ssl: process.env.DB_SSL === "true" ? {} : false,
  connectTimeout: 10000,
  // namedPlaceholders: true, // activa si usas placeholders con nombre
};

// opcional: si tu proveedor requiere TLS/SSL (PlanetScale o ciertos hosts)
if (process.env.DB_SSL && process.env.DB_SSL === "true") {
  poolConfig.ssl = {
    rejectUnauthorized: false,
  };
}
 const pool = mysql.createPool(poolConfig);

export default pool;
