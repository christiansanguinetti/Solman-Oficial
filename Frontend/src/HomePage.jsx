import React from "react";

const HomePage = () => {
  return (
    <>
      <h3 className="text-xl font-bold text-white mt-10 drop-shadow-lg">
        Electricidad, Domótica y Automatismos para tu hogar y empresa.🔌
      </h3>

      <p className="text-white/80 mt-4 drop-shadow-sm">
        En Solman nos enfocamos en brindar soluciones integrales en
        electricidad, eficiencia energética, movilidad eléctrica, domótica y
        automatización de riego. Cada servicio está diseñado para mejorar la
        seguridad, el confort y la productividad de nuestros clientes,
        cumpliendo siempre con las normativas vigentes.
      </p>

      <div className="mt-10 space-y-10">
        {/* Electricidad */}
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-xl">
            Electricidad 
          </h3>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Brindamos Instalaciones Eléctricas Seguras en hogares, comercios e
            industrias. Realizamos reparaciones, actualizaciones y proyectos
            desde cero, siempre bajo el Reglamento de Baja Tensión de UTE para
            evitar riesgos y garantizar calidad.
          </p>
        </div>

        {/* Auditorías Energéticas */}
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-xl">
            Auditorías Energéticas{" "}
          </h3>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Evaluamos el estado de tu instalación eléctrica, detectamos fugas y
            aseguramos el cumplimiento de normativas. Además, te informamos qué
            electrodomésticos consumen más energía y cómo reducir tu factura de
            UTE sin perder confort.
          </p>
        </div>

        {/* Movilidad Eléctrica */}
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-xl">
            Movilidad Eléctrica{" "}
          </h3>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Realizamos instalaciones seguras de cargadores para vehículos
            eléctricos, siguiendo normativas técnicas y utilizando los elementos
            adecuados para una carga eficiente, confiable y adaptada a tus
            necesidades.
          </p>
        </div>

        {/* Domótica */}
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-xl">
            Domótica{" "}
          </h3>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Adaptamos hogares y comercios con tecnología Smart. Controlá
            iluminación, climatización, seguridad y más desde cualquier lugar
            del mundo. Mejoramos tu calidad de vida con automatización
            inteligente, seguridad y eficiencia energética.
          </p>
        </div>

        {/* Automatización de Riegos */}
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-xl">
            Automatización de Riegos{" "}
          </h3>
          <p className="text-white/80 mt-2 drop-shadow-sm">
            Instalamos tecnología que permite controlar y gestionar el riego de
            cultivos o jardines en forma automática y remota. Ahorrás agua,
            energía y mano de obra, mientras optimizás el crecimiento y
            rendimiento de tus espacios verdes.
          </p>
        </div>
        {/* Contacto */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-md">
            Contacto
          </h2>

          <p className="text-white/80 mb-2">
            ¿Querés asesoramiento o un presupuesto personalizado?
          </p>

          <p className="text-white/90">
            {" "}
            <a
              href="mailto:solmanoficial1919@gmail.com"
              className="hover:text-white underline"
            >
              solmanoficial1919@gmail.com
            </a>
          </p>

          <p className="text-white/90 mt-1">
            {" "}
            <a href="tel:094897080" className="hover:text-white underline">
              094 897 080
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
