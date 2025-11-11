const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const CarouselImage = require("../models/CarouselImage");
const verificarToken = require("../middlewares/verificarToken");

const router = express.Router();

// ✅ Configuración Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer en memoria (no guarda en disco)
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten archivos de imagen."), false);
  }
};
const upload = multer({ storage, fileFilter });

// ✅ Subida de imagen a Cloudinary
router.post("/upload", verificarToken, upload.single("image"), (req, res) => {
  const { file, body } = req;

  if (!file) {
    return res.status(400).json({ message: "No se recibió ninguna imagen." });
  }

  if (!body.categoria) {
    return res.status(400).json({ message: "La categoría es obligatoria." });
  }

  cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
    if (error) {
      console.error("❌ Error al subir a Cloudinary:", error);
      return res.status(500).json({ message: "Error al subir imagen", error: error.message });
    }

    const nuevaImagen = new CarouselImage({
      imageUrl: result.secure_url,
      caption: body.caption || "",
      categoria: body.categoria.toLowerCase().trim(),
    });

    try {
      const saved = await nuevaImagen.save();
      res.status(201).json(saved);
    } catch (err) {
      console.error("❌ Error al guardar imagen:", err);
      res.status(500).json({ message: "Error al guardar imagen", error: err.message });
    }
  }).end(file.buffer);
});

// 🗑️ Eliminar imagen
router.delete("/:id", verificarToken, async (req, res) => {
  const { id } = req.params;
  try {
    await CarouselImage.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Imagen eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
});

// 📥 Obtener imágenes por categoría (o todas)
router.get("/", async (req, res) => {
  const filtro = req.query.categoria ? { categoria: req.query.categoria } : {};

  try {
    const images = await CarouselImage.find(filtro).sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.error("❌ Error al obtener imágenes:", err);
    res.status(500).json({ message: "Error al obtener imágenes", error: err.message });
  }
});

module.exports = router;
