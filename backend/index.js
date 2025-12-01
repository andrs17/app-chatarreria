import express from "express";

import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import ventasPetRoutes from "./routes/ventasPetRoutes.js";
import clientesRoutes from "./routes/clientesRoutes.js";
import empleadosRoutes from "./routes/empleadosRoutes.js";
import tipoPetRoutes from "./routes/tipoPetRoutes.js";
import ventasPastaRoutes from "./routes/ventasPastaRoutes.js";
import tipoPastaRoutes from "./routes/tipoPastaRoutes.js";
import ventasCartonRoute from "./routes/ventasCartonRoute.js";
import ventasArchivoRoute from "./routes/ventaArchivoRoute.js";
import tiposVidrioRoutes from "./routes/tiposVidrioRoutes.js";
import ventasVidrioRoutes from "./routes/ventasVidrioRoutes.js";
import ventasChatarraRoutes from "./routes/ventasChatarraRoutes.js";
import ventasPlasticoRoutes from "./routes/ventasPlasticoRoutes.js";
import tiposPlasticoRoutes from "./routes/tiposPlasticoRoutes.js";
import ventasAluminioRoutes from "./routes/ventasAluminioRoutes.js";
import tiposAluminioRoutes from "./routes/tiposAluminioRoutes.js";
import ventasCobreRoutes from "./routes/ventasCobreRoutes.js";
import tiposCobreRoutes from "./routes/tiposCobreRoutes.js";
import ventasAceroRoutes from "./routes/ventasAceroRoutes.js";
import corsMiddleware from "./middleware/cors.js";
dotenv.config();

const app = express();
app.use(express.json({limit: '10mb'}));
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());

// Middlewares
app.use(corsMiddleware);

// Rutas
app.use("/api/ventas-pet", ventasPetRoutes);

app.use("/api/clientes", clientesRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/tipos-pet", tipoPetRoutes);
app.use("/api/ventas-pasta", ventasPastaRoutes);
app.use("/api/tipos-pasta", tipoPastaRoutes);
app.use("/api/ventas-carton", ventasCartonRoute);
app.use("/api/ventas-archivo", ventasArchivoRoute);
app.use("/api/tipos-vidrio", tiposVidrioRoutes);
app.use("/api/ventas-vidrio", ventasVidrioRoutes);
app.use("/api/ventas-chatarra", ventasChatarraRoutes);
app.use("/api/ventas-plastico", ventasPlasticoRoutes);
app.use("/api/tipos-plastico", tiposPlasticoRoutes);
app.use("/api/ventas-aluminio", ventasAluminioRoutes);
app.use("/api/tipos-aluminio", tiposAluminioRoutes);
app.use("/api/ventas-cobre", ventasCobreRoutes);
app.use("/api/tipos-cobre", tiposCobreRoutes);
app.use("/api/ventas-acero", ventasAceroRoutes);


app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT} - NODE_ENV=${process.env.NODE_ENV}`);
});
