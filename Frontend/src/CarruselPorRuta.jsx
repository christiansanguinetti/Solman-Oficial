import React from "react";
import { useLocation } from "react-router-dom";
import { CarouselComponent } from "./Carousel";

const categoriaPorRuta = {
  "/": "electricidad",             // 👈 Página de inicio muestra "electricidad"
  "/seguridad": "seguridad",
  "/electricidad": "electricidad",
  "/quienes-somos": "quienes-somos",
  "/calendar": "calendar",
};

const CarruselPorRuta = () => {
  const location = useLocation();
  const categoria = categoriaPorRuta[location.pathname] || "electricidad"; // 👈 Fallback alineado

  return <CarouselComponent categoria={categoria} />;
};

export default CarruselPorRuta;
