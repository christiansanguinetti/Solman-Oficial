const express = require("express");
const multer = require("multer");
const path = require("path");
const CarouselImage = require("../models/CarouselImage");
const verificarToken = require("../middlewares/verificarToken");

const router = express.Router();

// ⚙️ Configuración del almacenamiento con multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// 🛡️ Filtro de tipo MIME para aceptar solo imágenes
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten archivos de imagen."), false);
  }
};

const upload = multer({ storage, fileFilter });

// ✅ Ruta de subida de imagen al carrusel
router.post("/upload", verificarToken, (req, res, next) => {
  upload.single("image")(req, res, function (err) {
    if (err) {
      return res.status(400).json({ message: "Error al subir la imagen", error: err.message });
    }

    // 👇 Ya estamos adentro de la callback luego de que Multer terminó
    const { file, body } = req;

    console.log("🖼️ Imagen recibida:", file);
    console.log("📥 Body recibido:", body);

    if (!file) {
      return res.status(400).json({ message: "No se recibió ninguna imagen." });
    }

    if (!body.categoria) {
      return res.status(400).json({ message: "La categoría es obligatoria." });
    }

    const nuevaImagen = new CarouselImage({
      imageUrl: `uploads/${file.filename}`,
      caption: body.caption || "",
      categoria: body.categoria.toLowerCase().trim(),
    });

    nuevaImagen
      .save()
      .then((saved) => res.status(201).json(saved))
      .catch((err) => {
        console.error("❌ Error al guardar imagen:", err);
        res.status(500).json({ message: "Error al guardar imagen", error: err.message });
      });
  });
});
router.delete("/:id", verificarToken, async (req, res) => {
  const { id } = req.params;
  try {
    await CarouselImage.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Imagen eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
});


// 📥 Ruta para obtener imágenes por categoría (o todas si no se pasa una)
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
