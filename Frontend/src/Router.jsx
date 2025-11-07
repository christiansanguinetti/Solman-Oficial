import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Error";
import HomePage from "./HomePage";
import Seguridad from "./Seguridad";
import QuienesSomos from "./QuienesSomos";
import LoginForm from "./LoginForm";
import UploadForm from "./UploadForm";

const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Todas las rutas dentro del Layout para mantener fondo, navbar y animaciones */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginForm onLoginSuccess={() => (window.location.href = "/panel")} />} />
          <Route
            path="panel"
            element={
              token ? (
                <UploadForm />
              ) : (
                <p className="text-center mt-20 text-gray-600">⛔️ Acceso restringido</p>
              )
            }
          />
          <Route path="ruta-prueba" element={<h1>Ruta de prueba</h1>} />
          <Route path="seguridad" element={<Seguridad />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
