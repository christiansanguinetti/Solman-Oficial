import React from "react";

const ModernContainer = ({ title, children, className }) => {
  return (
    <div
      className={`w-full min-h-screen p-8 rounded-xl shadow-2xl backdrop-blur-md text-white relative z-10 overflow-hidden ${className}`}
    >
      {/* 🔳 Capa oscura semitransparente para contraste visual */}
      <div className="absolute inset-0 bg-black/50 rounded-xl -z-10 pointer-events-none" />

      {/* 📌 Título con sombra fuerte y fuente clara */}
      <h1 className="text-4xl font-bold drop-shadow-xl font-inter">
        {title}
      </h1>

      {/* 💬 Contenido con sombra suave y buen espaciado */}
      <div className="mt-6 font-inter drop-shadow-md">
        {children}
      </div>
    </div>
  );
};

export default ModernContainer;
