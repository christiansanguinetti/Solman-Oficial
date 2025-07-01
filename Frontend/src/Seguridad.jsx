import React from "react";
import { CarouselComponent } from "./Carousel";
const Seguridad = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Seguridad</h1>
      <p className="text-gray-700">
        En Solman, la seguridad es prioridad. Implementamos sistemas avanzados de vigilancia, sensores inteligentes y automatización para mantener tus espacios protegidos. 
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
        <li>Instalación de cámaras de seguridad inteligentes</li>
        <li>Sensores de movimiento, humo y apertura de puertas</li>
        <li>Integración con apps móviles y asistentes virtuales</li>
        <li>Automatización de alarmas y protocolos de emergencia</li>
      </ul>
      
    </div>
  );
};

export default Seguridad;
