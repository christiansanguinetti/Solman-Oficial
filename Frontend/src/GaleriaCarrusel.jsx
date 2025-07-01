import React, { useState } from "react";
import { CarouselComponent } from "./Carousel"; // ajustá la ruta según tu estructura

const GaleriaCarrusel = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("seguridad");

  const categorias = ["seguridad", "electricidad", "quienes-somos"];

  return (
    <div className="max-w-screen-lg mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Galería por Categoría</h2>

      <div className="flex justify-center mb-6">
        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/2"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
            </option>
          ))}
        </select>
      </div>

      <CarouselComponent categoria={categoriaSeleccionada} />
    </div>
  );
};

export default GaleriaCarrusel;
