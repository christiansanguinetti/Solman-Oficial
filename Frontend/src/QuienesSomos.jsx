import React from "react";

const QuienesSomos = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
        ¿Quiénes Somos?
      </h1>

      <p className="text-white/80 mb-4 drop-shadow-sm">
        No somos simplemente una empresa, <strong>somos lo que necesitas</strong>. En <strong>Solman</strong> nos especializamos en <strong>Electricidad</strong> y <strong>Tecnología en Seguridad</strong>. Contamos con una experiencia vasta en el rubro y nos enfocamos en brindarte soluciones que te faciliten el día a día, incorporando herramientas y tecnología del mundo de hoy.
      </p>

      <p className="text-white/80 mb-4 drop-shadow-sm">
        Tu seguridad es nuestra prioridad. Aplicamos todas las medidas necesarias en el montaje de nuestras instalaciones para garantizarla. No negociamos tu satisfacción, la aseguramos. Somos un equipo responsable, comprometido en cumplir con todas las expectativas generadas.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-10 mb-3 drop-shadow-md">
        Misión
      </h2>

      <p className="text-white/80 mb-4 drop-shadow-sm">
        Nuestra mayor misión es dejar un <strong>valor agregado</strong> en cada acción. Queremos generar un nuevo concepto de empresa, que vaya más allá de un simple intercambio de dinero por servicio. Buscamos tu confianza y una relación armoniosa, que nos enriquezca a ambos y nos permita brindarte toda la información necesaria.
      </p>

      <p className="text-white/80 mb-4 drop-shadow-sm">
        Nos enfocamos en <strong>superarnos a nosotros mismos</strong>, sin compararnos con el mercado. Nos actualizamos constantemente con las innovaciones que se presentan día a día, para ofrecerte lo mejor.
      </p>

      <p className="text-white/80 drop-shadow-sm">
        También priorizamos cuidar tu inversión económica, ofreciéndote productos de calidad y valor. Realizamos <strong>instalaciones eficientes</strong>, diseñadas para generar menos gastos a largo plazo.
      </p>
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
    <a
      href="tel:094897080"
      className="hover:text-white underline"
    >
      094 897 080
    </a>
  </p>
</div>
    </div>
  );
};

export default QuienesSomos;
