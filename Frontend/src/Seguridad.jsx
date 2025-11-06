import React from "react";
import { CarouselComponent } from "./Carousel";

const Seguridad = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
        Tecnología en Seguridad 🔐📹
      </h1>

      <p className="text-white/80 drop-shadow-sm">
        En Solman nos enfocamos en brindar soluciones modernas para proteger hogares, comercios e industrias. Implementamos sistemas inteligentes que garantizan tu tranquilidad, adaptados a cada necesidad y siempre cuidando la estética y la eficiencia.
      </p>

      <div className="mt-6 space-y-8">
        {/* Alarmas */}
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Alarmas de Seguridad 🚨</h2>
          <p className="text-white/80 mt-2">
            Instalamos alarmas para hogares y comercios, trabajando con todas las marcas disponibles. Garantizamos la calidad de cada equipo y la correcta implementación del sistema para proteger a los habitantes y sus bienes.
          </p>
        </div>

        {/* Cámaras de Vigilancia */}
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Cámaras de Vigilancia 📷</h2>
          <p className="text-white/80 mt-2">
            Instalamos cámaras analógicas, IP y de alta definición. Adaptamos el montaje según las características del lugar, cuidando la estética y asegurando el máximo rendimiento. Podés monitorear tu hogar o comercio desde cualquier lugar del mundo.
          </p>
        </div>

        {/* Motor para Portón */}
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Automatización de Portones 🚪⚡</h2>
          <p className="text-white/80 mt-2">
            Automatizá tu portón con seguridad y comodidad. Te asesoramos según tu modelo de portón y montamos una instalación eléctrica segura, adaptando la estructura cuando sea necesario para garantizar la durabilidad del motor.
          </p>
        </div>

        {/* Control de Acceso */}
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Control de Acceso 🛂📲</h2>
          <p className="text-white/80 mt-2">
            Instalamos sistemas de acceso modernos: molinetes, cerraduras inteligentes, cerraduras de electro-imán, porteros y más. Podés administrar el acceso con huella digital, reconocimiento facial, código numérico, llaveros o desde tu celular.
          </p>
        </div>

        {/* Porteros Eléctricos */}
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Porteros Eléctricos 🔊🚪</h2>
          <p className="text-white/80 mt-2">
            Atendé tus visitas con seguridad sin exponerte. Instalamos desde porteros básicos hasta sistemas IP que te permiten responder desde cualquier lugar del planeta sin revelar que estás fuera de casa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seguridad;
