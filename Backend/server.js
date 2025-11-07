require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const carouselRoutes = require("./routes/Carousel");
const authRoutes = require("./routes/Auth");

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: "*", // Podés restringirlo si querés por seguridad
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// ✅ Carpeta estática para acceder a las imágenes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Rutas
app.use("/api/carousel", carouselRoutes);
app.use("/", authRoutes);

// ✅ Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB conectado");
    app.listen(5000, () => {
      console.log("🚀 Backend corriendo en http://localhost:5000");
    });
  })
  .catch((err) =>
    console.error("❌ Error al conectar con MongoDB:", err)
  );
