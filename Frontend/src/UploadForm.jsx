import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

const UploadForm = () => {
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
    if (!image) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return setMensaje("📸 Seleccioná una imagen primero.");
    if (!categoria) return setMensaje("⚠️ Seleccioná una categoría.");
    if (!token) return setMensaje("🔐 No estás logueado. Iniciá sesión primero.");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("categoria", categoria.toLowerCase());

    try {
      for (let [clave, valor] of formData.entries()) {
        console.log(`🧾 Campo: ${clave}`, valor);
      }

      await axios.post(`${API_URL}/api/carousel/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMensaje("✅ Imagen subida con éxito");
      setImage(null);
      setCaption("");
      setCategoria("");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setMensaje("⛔ Token inválido o expirado. Iniciá sesión de nuevo.");
      } else {
        setMensaje("❌ Error al subir la imagen");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Subir Imagen al Carrusel</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4 block"
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Vista previa" className="w-full h-auto rounded shadow" />
        </div>
      )}

      <input
        type="text"
        placeholder="Texto opcional"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      >
        <option value="">Seleccioná una categoría</option>
        <option value="electricidad">Electricidad</option>
        <option value="seguridad">Seguridad</option>
        <option value="quienes-somos">Quiénes Somos</option>
        <option value="calendar">Calendario</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 w-full"
      >
        Subir imagen
      </button>

      {mensaje && <p className="mt-4 text-sm text-gray-700">{mensaje}</p>}

      <button
        type="button"
        onClick={handleLogout}
        className="mt-6 text-sm text-red-600 underline"
      >
        Cerrar sesión
      </button>
    </form>
  );
};

export default UploadForm;
