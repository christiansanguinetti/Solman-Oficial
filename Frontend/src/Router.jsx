import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Error";
import HomePage from "./HomePage";
import Seguridad from "./Seguridad";
import QuienesSomos from "./QuienesSomos";
import LoginForm from "./LoginForm";
import UploadForm from "./UploadForm";
// ✅ Ruta /login corregida para producción
const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* 🆕 Ruta protegida para subir imágenes */}
        <Route
          path="/panel"
          element={
            token ? (
              <UploadForm />
            ) : (
              <p className="text-center mt-20 text-gray-600">⛔️ Acceso restringido</p>
            )
          }
        />

        {/* ✅ Ruta de login corregida */}
        <Route
          path="/login"
          element={<LoginForm onLoginSuccess={() => (window.location.href = "/panel")} />}
        />

        {/* 🌐 Rutas públicas con layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/ruta-prueba" element={<h1>Ruta de prueba</h1>} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Route>

        {/* 🧯 Ruta de error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
