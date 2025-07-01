import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UploadModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const token = localStorage.getItem("token");
  let nombreUsuario = "";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      nombreUsuario = decoded.usuario;
    } catch (err) {
      console.error("Token inválido", err);
    }
  }

  useEffect(() => {
    if (!image) return setPreview(null);
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !categoria) {
      setMensaje("📸 Completá todos los campos obligatorios");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("categoria", categoria.toLowerCase());

    try {
      await axios.post("http://localhost:5000/carousel/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMensaje("✅ Imagen subida");
      setImage(null);
      setCaption("");
      setCategoria("");
    } catch (err) {
      setMensaje("❌ Error al subir la imagen");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 my-12 shadow-2xl animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Subir Imagen</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-4 w-full text-sm"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mb-4 w-full rounded-md shadow-sm"
            />
          )}

          <input
            type="text"
            placeholder="Texto opcional"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mb-4 w-full p-2 border rounded text-sm"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="mb-4 w-full p-2 border rounded text-sm"
          >
            <option value="">Seleccioná categoría</option>
            <option value="electricidad">Electricidad</option>
            <option value="seguridad">Seguridad</option>
            <option value="quienes-somos">Quiénes Somos</option>
            <option value="calendar">Calendario</option>
          </select>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
          >
            Subir imagen
          </button>

          {mensaje && (
            <p className="mt-3 text-sm text-center text-gray-600">{mensaje}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
