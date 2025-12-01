// middleware/cors.js
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const allowedOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

// fallback: allow localhost during dev
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push("http://localhost:5173", "http://localhost:3000");
}

const corsOptions = {
  origin: function (origin, callback) {
    // requests without origin (e.g. curl, mobile) are allowed
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 204,
};

export default cors(corsOptions);

