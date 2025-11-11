import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const API_URL = import.meta.env.VITE_API_URL;

export const CarouselComponent = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);
  const [indexActual, setIndexActual] = useState(1);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (!categoria) return;
    axios
      .get(`${API_URL}/api/carousel?categoria=${categoria.toLowerCase()}`)
      .then((res) => setImagenes(res.data))
      .catch((err) => console.error("Error al cargar imágenes:", err));
  }, [categoria]);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta imagen?")) return;
    try {
      await axios.delete(`${API_URL}/api/carousel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImagenes((prev) => prev.filter((img) => img._id !== id));
    } catch (err) {
      console.error("Error al eliminar:", err.response?.data || err.message);
    }
  };

  const abrirFullscreen = (e) => {
    const imagen = e.currentTarget;
    if (imagen.requestFullscreen) imagen.requestFullscreen();
    else if (imagen.webkitRequestFullscreen) imagen.webkitRequestFullscreen();
    else if (imagen.msRequestFullscreen) imagen.msRequestFullscreen();
  };

  return (
    <div className="mx-auto w-full max-w-screen-lg px-0 py-6">
      {imagenes.length === 0 ? (
        <p className="text-center text-white/70">No hay imágenes en esta categoría.</p>
      ) : (
        <>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(swiper) => setIndexActual(swiper.realIndex + 1)}
            className="w-full h-full"
          >
            {imagenes.map((img) => (
              <SwiperSlide key={img._id}>
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  {token && (
                    <button
                      onClick={() => handleDelete(img._id)}
                      title="Eliminar imagen"
                      className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm shadow-lg"
                    >
                      🗑️
                    </button>
                  )}

                  <img
                    src={img.imageUrl}
                    alt={img.caption || "Imagen"}
                    onClick={abrirFullscreen}
                    className="max-w-full max-h-[90vh] object-contain cursor-zoom-in transition-transform duration-300 hover:scale-105"
                  />

                  {img.caption && (
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 text-center">
                      {img.caption}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-2 mt-4">
            {imagenes.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === indexActual - 1
                    ? "bg-purple-700 scale-125 shadow-md"
                    : "bg-purple-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
