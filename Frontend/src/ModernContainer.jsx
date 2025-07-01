import React from "react";

const ModernContainer = ({ title, children, className }) => {
  return (
    <div className={`w-full min-h-screen p-8 rounded-xl shadow-lg bg-gray-100 ${className}`}>
      <h1 className="text-3xl font-bold text-gray-800 font-inter">{title}</h1>
      <div className="text-gray-700 mt-4 font-inter">{children}</div>
    </div>
  );
};

export default ModernContainer;