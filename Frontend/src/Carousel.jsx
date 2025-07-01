import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
      .get(`http://localhost:5000/carousel?categoria=${categoria.toLowerCase()}`)
      .then((res) => setImagenes(res.data))
      .catch((err) => console.error("Error al cargar imágenes:", err));
  }, [categoria]);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta imagen?")) return;

    try {
      await axios.delete(`http://localhost:5000/carousel/${id}`, {
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
    <div className="mx-auto max-w-4xl px-4 py-10">
      {imagenes.length === 0 ? (
        <p className="text-center text-gray-600">No hay imágenes en esta categoría.</p>
      ) : (
        <>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => setIndexActual(swiper.realIndex + 1)}
            className="rounded-xl shadow-xl bg-white"
          >
            {imagenes.map((img) => (
              <SwiperSlide key={img._id}>
                <div className="relative w-full flex justify-center items-center max-h-[80vh]">
                  {token && (
                    <button
                      type="button"
                      onClick={() => handleDelete(img._id)}
                      title="Eliminar imagen"
                      className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm shadow-lg"
                    >
                      🗑️
                    </button>
                  )}

                  <img
                    src={`http://localhost:5000/${img.imageUrl}`}
                    alt={img.caption || "Imagen"}
                    onClick={abrirFullscreen}
                    className="w-full h-auto object-contain rounded-lg max-h-[70vh] cursor-zoom-in transition-transform hover:scale-105"
                  />

                  {img.caption && (
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 text-center rounded-b-xl">
                      {img.caption}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Puntitos indicadores */}
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
