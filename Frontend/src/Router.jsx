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
        {/* 🆕 Ruta oculta que muestra UploadForm solo si hay token */}
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

        {/* Login secreto */}
        <Route
          path="/LoginForm"
          element={<LoginForm onLoginSuccess={() => (window.location.href = "/panel")} />}
        />

        {/* Rutas normales con Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/ruta-prueba" element={<h1>Ruta de prueba</h1>} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
